import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { updateEmail } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const checkboxRef = useRef();
    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target)

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

        // const agree = checkboxRef.current.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password)
        // }

        // const email = event.target.email.value;
        // console.log(event.target.email.value) works in input
        console.log(name, email, password);

    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate('/home')
        console.log('user', user)
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
                    <Form.Check onClick={() => setAgree(!agree)} ref={checkboxRef} type="checkbox" className={agree ? 'text-success' : 'text-danger'} label="Accept terms and condition" />
                </Form.Group>

                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='pe-auto text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;