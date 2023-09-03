import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Row, } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Tablex from './Tablex';
import Spinner from './Spinner';




function Home() {
  const [showSpin,setSpin]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setSpin(true)
    
    },1000)
    

  },[])
  console.log(showSpin);
  return (

    <div>
      <Row className='w-100'>
        <div className='container' style={{ display: 'flex', marginTop: '05%' }}>
          <div>
            <InputGroup className='w-75 ms-5' style={{ marginTop: '9%' }}>

              <Form.Control
                placeholder='Search'
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
            </InputGroup>
          </div>
          <div className='ms-3 ' >
            <Button style={{ marginTop: '25%' }} variant="success">Search</Button>{' '}
          </div>

          <div style={{ marginLeft: "50%" }}>
<Link to={"/add"}>
              <Button style={{ marginTop: '25%', justifyContent: 'flex-end' }} variant="info">Add<i class="fa-solid fa-user fa-flip"></i>+</Button>{' '}
  
</Link>          </div>



        </div>
      </Row>
      <div className='ms-5 mt-5'>
      <h2  className='' style={{marginLeft:'10%'}}>List of Employees</h2>
      </div>
      {
        showSpin?<Tablex></Tablex>:<Spinner></Spinner>
      }
      


    </div>



  )
}

export default Home