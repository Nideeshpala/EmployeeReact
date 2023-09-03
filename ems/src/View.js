import React from 'react'
import { Col, Row } from 'react-bootstrap'



function View() {
  return (
    <div>

      <Row className='w-100'>
       <div className='container bg-dark w-50 mt-5' >
         
           <div className='fs-5 ' style={{display:'flex'}} > 
           <Col lg={6}>
            <ul className=' bg-light list-group mb-3 mt-3 '>
              <li className=' text-dark list-group-item container w mt-1'><i class="fa-solid fa-user-tie"></i> <span>Full Name : </span><strong>Nideesh</strong> </li>
              <li className=' text-dark list-group-item container w mt-1'><i class="fa-solid fa-envelope"></i> <span>Email Address: </span><strong>willuvi777@gamil.com</strong> </li>
              <li className=' text-dark list-group-item container w mt-1'><i class="fa-solid fa-phone"></i> <span>Mobile Number : </span><strong>907****51</strong> </li>
              <li className=' text-dark list-group-item container w mt-1'><i class="fa-solid fa-location-dot"></i> <span>Location : </span><strong>Shornur</strong> </li>
              <li className=' text-dark list-group-item container w mt-1'><i class="fa-solid fa-person-half-dress fa-flip"></i> <span> Gender: </span><strong>Male</strong> </li>
              
              
            
            </ul>
         </Col>
          <Col lg={6}>
            <div className='ms-1 mt-3 '>
              <img className='w-100' style={{height:'380px'}} src="https://i.postimg.cc/PxZNw0g2/hrithikroshanfighter41681374909.webp" alt="" />
              </div>
           
          </Col>
         
          </div>
         

       </div>


      </Row>

      </div>
  )
}

export default View