import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    const navigate = useNavigate()
  return (
   
    <Form className='m-md-auto  w-25  '> 
    <h3 className='text-center mt-5'>LOGIN</h3>
      <Form.Group className="mb-5 m-auto mt-5 " controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-2 mt-5 " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Button className=" mt-3"variant="primary" type="submit"  onClick={()=>navigate('/home')}>
        Submit
      </Button>
    </Form>
    
  );
}

export default Login