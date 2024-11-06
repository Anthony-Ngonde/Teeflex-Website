import React, { useState } from 'react';
import { Form, Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted with:", { name, email, password, confirmPassword });
    };

    return (
        <div className='container'>
            <div className='form'>
                <h1>Registration Page</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type='text'
                            placeholder='Your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type='email'
                            placeholder='Your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            name="confirmPassword"
                        />
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
