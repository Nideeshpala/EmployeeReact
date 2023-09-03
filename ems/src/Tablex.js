import React from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'



function Tablex() {
  return (
    <div>
<div className='container w-75'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='bg-warning text-center'>No</th>
              <th className='bg-warning text-center'>Full Name</th>
              <th className='bg-warning text-center'>E-mail</th>
              <th className='bg-warning text-center'>Mobile</th>
              <th className='bg-warning text-center'>Status</th>
              <th className='bg-warning text-center'>Profile</th>
              <th className='bg-warning text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr align='center'>
              <td>1</td>
              <td>lathika agarwal</td>
              <td>lathika@gmail.com</td>
              <td>954612320</td>
              <td><Button variant="success">Active</Button>{' '} </td>
              <td className='w-25' align='center'><img style={{ width: '25%' }} src="https://i.postimg.cc/3wGH3ghZ/corporate-user-icon.webp" alt="" /> </td>
              <td>  
              <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/edit/1">Edit</Dropdown.Item>
        <Dropdown.Item href="/view/2">View</Dropdown.Item>
        <Dropdown.Item href="">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>    
                
                
                  </td>
            </tr>

          </tbody>
        </Table>

      </div>

    </div>
  )
}

export default Tablex