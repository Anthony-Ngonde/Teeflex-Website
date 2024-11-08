import React, { useState } from 'react';
import { Form, Button, Alert, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const [show, setShow] = useState(false)

    const [serverResponse, setServerResponse] = useState('')



    const submitForm = (data) => {


        if(data.password === data.confirmPassword){

            const body={
                name:data.name,
                email:data.email,
                password:data.password,
            }


        const requestOptions = {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(body)
        }

        fetch('http://localhost:5000/signup', requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServerResponse(data.message)
            console.log(serverResponse)

            setShow(true)
        })
        .catch(err=>console.log(err))

        reset()

    }

    else{
        alert("Passwords do not match")
    }

    };


    console.log(watch("name"));
    console.log(watch("email"));
    console.log(watch("password"));
    console.log(watch("confirmPasword"));

    return (
        <div className='container'>
            <div className='form'>
                
             {show?
             <>
             <Alert variant="success" onClose={() => setShow (false)} dismissible>
                <p>
                {serverResponse}
                </p>
             </Alert>

              <h1>Registration Page</h1>
               
             </>
             :
             <h1>Registration Page</h1>
            
             
             }
                <form onSubmit={handleSubmit(submitForm)}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type='text'
                            placeholder='Your name'
                            {...register("name", { required: true, maxLength: 25 })}
                        />
                        <br></br>
                        {errors.name && <p style={{color:"red"}}><small>Name is required</small></p>}
                        <br></br>
                        {errors.name?.type==="maxLength"&&<p style={{color:"red"}}><small>Max characters should be 25</small></p>}
                    </FormGroup>
                    
                    <br></br>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type='email'
                            placeholder='Your email'
                            {...register("email", { required: true, maxLength: 80 })}
                        />
                        <br></br>
                        {errors.email && <p style={{color:"red"}}><small>Email is required</small></p>}
                        <br></br>
                        {errors.email?.type==="maxLength"&&<p style={{color:"red"}}><small>Max characters should be 80</small></p>}
                    </FormGroup>
                    
                    <br></br>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Your password'
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        <br></br>
                        {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
                        <br></br>
                        {errors.password?.type==="minLength"&&<p style={{color:"red"}}><small>Min characters should be 8</small></p>}
                    </FormGroup>
                    
                    <br></br>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Confirm your password'
                            {...register("confirmPassword", { required: true, minLength: 8 })}
                        />
                        <br></br>
                        {errors.confirmPassword && <p style={{color:"red"}}><small>Confirm Password is required</small></p>}
                        <br></br>
                        {errors.confirmPassword?.type==="minLength"&&<p style={{color:"red"}}><small>Min characters should be 8</small></p>}
                    </FormGroup>
                    
                    <br></br>
                    <FormGroup>
                        <Button type='submit' variant='primary'>Sign Up</Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    );
};

export default SignUp;