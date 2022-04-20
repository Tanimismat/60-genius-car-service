import React from 'react';
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (loading1 || loading2) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error1?.message} {error2?.message}</p>
    }

    if (user1 || user2) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mb-1 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='bg-info d-block'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    Google Sign In
                </button>
                <button

                    className='bg-info d-block'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='bg-info'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;