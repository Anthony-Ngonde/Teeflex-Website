import React, { useState } from 'react';
import { Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();



    const submitForm = (data) => {

        console.log(data);

        reset()
    };

    console.log(watch("name"));
    console.log(watch("email"));
    console.log(watch("password"));
    console.log(watch("confirmPasword"));

    return (
        <div className='container'>
            <div className='form'>
                <h1>Registration Page</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type='text'
                            placeholder='Your name'
                            {...register("name", { required: true, maxLength: 25 })}
                        />
                        <br></br>
                        {errors.name && <span style={{color:"red"}}>Name is required</span>}
                        <br></br>
                        {errors.name?.type=="maxLength"&&<span style={{color:"red"}}>Max characters should be 25</span>}
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
                        {errors.email && <span style={{color:"red"}}>Email is required</span>}
                        <br></br>
                        {errors.email?.type=="maxLength"&&<span style={{color:"red"}}>Max characters should be 80</span>}
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
                        {errors.password && <span style={{color:"red"}}>Password is required</span>}
                        <br></br>
                        {errors.password?.type=="minLength"&&<span style={{color:"red"}}>Min characters should be 8</span>}
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
                        {errors.confirmPassword && <span style={{color:"red"}}>Confirm Password is required</span>}
                        <br></br>
                        {errors.confirmPassword?.type=="minLength"&&<span style={{color:"red"}}>Min characters should be 8</span>}
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