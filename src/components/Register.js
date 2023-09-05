import React from 'react'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Register.css'



function Register() {
    const navigate = useNavigate()
    const eventHandler=()=>{
        navigate('/login')
    }
  return (
   <div className='regbody mt-0  '>
        <Form className='container w-100 '>
            <Row className='reghead text-center mb-5' > 
                <h3 >REGISTER</h3>
            </Row>
          <Row  >
            <Form.Label className='text-white'column sm="1">NAME:</Form.Label>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row className='mt-5 '>
          <Form.Label className='text-white'column sm="1">PHONE:</Form.Label>
            <Col >
              <Form.Control placeholder="phone" />
            </Col>
            <Form.Label className='text-white'column sm="1">ADDRESS: </Form.Label>
            <Col>
              <Form.Control placeholder="Address" />
            </Col>
          </Row>
          <Row className='mt-5 '>
          <Form.Label className='text-white' column sm="1">EMAIL:</Form.Label>
            <Col >
              <Form.Control placeholder="Email" />
            </Col>
            <Form.Label className='text-white' column sm="1">PASSWORD:</Form.Label>
            <Col>
              <Form.Control placeholder="Password" />
            </Col>
          </Row>
          <Form.Group className='mt-5' >
            <Button variant='success'onClick={eventHandler}>SUBMIT</Button>
          </Form.Group>
        </Form>
        </div>
  )
}

export default Register



  
 
