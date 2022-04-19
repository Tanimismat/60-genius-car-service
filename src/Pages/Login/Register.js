import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target)

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // const email = event.target.email.value;
        // console.log(event.target.email.value) works in input
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='container w-50 mx-auto border border-secondary'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='pe-auto text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;