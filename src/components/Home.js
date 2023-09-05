import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRipple } from 'mdb-react-ui-kit';




function Home() {
    const navigate = useNavigate()

  return (
   
      <Form className='text-center '>
        <div className='bg-img'style={{
          backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp')",
          height: "100vh",}}>
       <h3 className='text-white bg-dark'>Home</h3>  
       <MDBRipple rippleTag='a' className='mt-5 '>
      <img
        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
        className='img-fluid rounded '
        style={{height:400,borderRadius:25}}
        alt='example'/>
        <br/>
       <Button  className=" mt-3"variant='secondary'onClick={()=>navigate('/login')}>back</Button>
    </MDBRipple>
    </div>
       </Form>
   
  )
}

export default Home