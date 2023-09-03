import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { registerApi } from './service/Allapi';


function Add() {

  // state to hold image data

  const [image, setimage] = useState("")


  // state to hold another input datas enter by user
  const [userdata, setuserdata] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    mobile: "",
    status: "",
    location: ""
  })

  // function to update userdata 

  const userDetails = (e) => {
    let value = (e.target.value);
    let name = (e.target.name)
    setuserdata({ ...userdata, [name]: value })

  }
  console.log(userdata);

  // create a function store image
  const setprofile = (e) => {
    setimage(e.target.files[0]);
  }
  // state to store preview image
  const [preview, setPreview] = useState("")
  useEffect(() => {

    if (image) {
      setPreview(URL.createObjectURL(image))
    }

  }, [image])  //note the squre bracket it works 11th line

  console.log(preview);


  // create a function for submit button

  const handlesubmit = async (e) => {
    e.preventDefault()

    // header - contentType:multipart/formData

    const headerconfig = {
      "content-Type": "multipart/form-data"
    }

    // body

    const data = new FormData()

    // access data from userdata

    const { fname, lname, email, gender, mobile, status, location } = userdata

    // add datas in formdata

    data.append('user_profile', image)
    data.append("fname", fname)
    data.append("lname", lname)
    data.append("email", email)
    data.append("gender", gender)
    data.append("mobile", mobile)
    data.append("status", status)
    data.append("location", location)


    // api call 
  const response = await registerApi(headerconfig, data)
    console.log(response);
    if(response.status==200){
      alert("employee added")
    }
    else{
      alert("employee already present")
    }

  }




  return (
    <div>
      <h2 className='text-center  mt-4'>Register Employee Details</h2>

      <Row className='w-100'>

        <Form className='  container w' style={{ width: '90%' }}  >


          <div className='container w mt-4'>
            <img style={{ width: "7%", marginLeft: "47%", borderRadius: "50px" }} src={preview ? preview : "https://i.postimg.cc/9FYMDHvb/1600w-2-PE9q-JLm-Pac.webp"} alt="" />
          </div>

          {/* First row */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Col lg={5}>
              <div className='ms-2 mt-3'>
                <label className='  ' htmlFor="">First name</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control
                    id='fname'
                    name='fname'
                    onChange={userDetails}
                    required
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>
            </Col>
            <Col lg={5}>
              <div className='ms-2 mt-3'>
                <label className='  ' htmlFor="">Last Name</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control
                    id='lname'
                    name='lname'
                    onChange={userDetails}
                    required
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>


              </div>
            </Col>
          </div>

          {/* Second row */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Col lg={5}>
              <div className='ms-2 mt-2'>
                <label className='  ' htmlFor="">Email Address</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control
                    onChange={userDetails}
                    id='email'
                    name='email'
                    required
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            </Col>
            <Col lg={5}>
              <div className='ms-2 mt-2'>
                <label className='  ' htmlFor="">Mobile Number</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control required
                    id='mobileno'
                    name='mobile'
                    onChange={userDetails}
                    placeholder="Mobile Number"
                    aria-label="Mobile Number"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>


              </div>
            </Col>
          </div>


          {/* Third row */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Col lg={5}>
              <div className='ms-2 mt-2'>
                <label className=' ' htmlFor="">Gender</label>

                <Form>
                  {['radio'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-3  mt-1">
                      <Form.Check
                        value={"male"}
                        onChange={userDetails}
                        label="Male"
                        name="gender"
                        type={type}
                        id={`reverse-${type}-1`}
                      />
                      <Form.Check
                        value={"female"}
                        onChange={userDetails}
                        label="Female"
                        name="gender"
                        type={type}
                        id={`reverse-${type}-2`}
                      />

                    </div>
                  ))}
                </Form>
              </div>

            </Col>
            <Col lg={5}>
              <div className='ms-2 mt-2' >
                <label className=' ' htmlFor="">Select Employee Status</label>
                <div class="input-group mb-3 mt-1">

                  <select onChange={userDetails} name='status' required class="form-select" id="inputGroupSelect01">
                    <option selected class='dropdown-item disabled ' aria-disabled='true' value={''}>Select...</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>

                  </select>
                </div>


              </div>

            </Col>
          </div>

          {/* Fourth row */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            <Col lg={5}>
              <div className='  ms-2 mt-2 '>
                <label htmlFor="">Choose Profile Picture</label>
                <InputGroup className="mb-3 mt-1">

                  <Form.Control
                    onChange={setprofile}
                    required
                    type='file'
                    placeholder="No Files Choosen"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>
            </Col>
            <Col lg={5}>
              <div className='ms-2 mt-2'>
                <label className='  ' htmlFor="">Enter Employee Location</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control
                    required
                    onChange={userDetails}
                    name='location'
                    id='location'
                    placeholder="Employee Location"
                    aria-label="Employee Location"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>

            </Col>

          </div>
          <div className='text-center mb-3 mt-5 '>
            <button onClick={handlesubmit} className='btn btn-light w-25' type='submit'>Submit</button>

          </div>






        </Form>



      </Row>






    </div>
  )
}

export default Add