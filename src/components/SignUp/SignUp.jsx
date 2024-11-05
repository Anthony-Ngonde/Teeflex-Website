import React, { useState } from 'react'
import {Form, Button, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    
  return (
    <div className='container'>
        <div className='form'>
            <h1>Registration Page</h1>
            <form>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl type='text' placeholder='Your name' 
                    value={name}
                    name="name"
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='text' placeholder='Your email' 
                    value={email}
                    name="email"
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type='password' placeholder='Your password' 
                    value={password}
                    name="password"
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl type='password' placeholder='Your password' 
                    value={confirmPassword}
                    name="confirmPassword"
                    />
                </FormGroup>

                <FormGroup>
                    <Button as='submit' variant='primary'>Sign Up</Button>
                </FormGroup>
            </form>
        </div>
    </div>
  )
}

export default SignUp