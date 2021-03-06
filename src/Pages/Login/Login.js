import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log("sign in ", email, password)
        signInWithEmailAndPassword(email, password)
    };

    const navigateRegister = event => {
        navigate('/register')
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        // await sendPasswordResetEmail(email);
        // alert('Sent email');
        // toast('send email');
        if (email) {
            await sendPasswordResetEmail(email);
            // alert('Sent email');
            toast('send email');
        }
        else {
            toast('please enter your email address')
        }
    }



    return (
        <div className='container w-50 mx-auto border border-secondary'>
            <h2>Please login</h2>
            <Form onSubmit={handleSubmit}>

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
                    Login
                </Button>

            </Form>
            {errorElement}
            <p>New to Genius Car? <Link to='/register' className='pe-auto text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            {/* <p>Forget Password? <Link to='/register' className='pe-auto text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p> */}

            <p>Forget Password? <button className='btn btn-link pe-auto text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;