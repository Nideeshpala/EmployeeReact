import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'


function Edit() {
  return (
    <div>
      <Row className='w-100'>

        <Form className='  container w' style={{ width: '90%' }}  >


          <div className='container w mt-4'>
            <i class="fa-solid fa-circle-user fa-2xl" style={{ color: '#ffff', marginLeft: '50%' }}></i>
          </div>

          {/* First row */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Col lg={5}>
              <div className='ms-2 mt-3'>
                <label className='  ' htmlFor="">First name</label>

                <InputGroup className="mb-3 mt-1">

                  <Form.Control
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

                  <Form.Control
                  required
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

                        label="Male"
                        name="group1"
                        type={type}
                        id={`reverse-${type}-1`}
                      />
                      <Form.Check

                        label="Female"
                        name="group1"
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

                 
                    <select required class="form-select" id="inputGroupSelect01">
                      <option selected class='dropdown-item disabled ' aria-disabled='true' value={''}>Select...</option>
                      <option value="">Active</option>
                      <option value="">Inactive</option>
  
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
                  <InputGroup.Text id="basic-addon1" className=' '>Choose File</InputGroup.Text>
                  <Form.Control
                  required
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
                    placeholder="Employee Location"
                    aria-label="Employee Location"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              </div>

            </Col>

          </div>
          <div className='text-center mb-3 mt-5 '>
            <button className='btn btn-light w-25' type='submit'>Submit</button>

          </div>






        </Form>



      </Row>


    </div>
  )
}

export default Edit