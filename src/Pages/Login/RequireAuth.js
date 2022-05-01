import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    // let auth = useAuth();
    const [user, loading] = useAuthState(auth);
    console.log('inside require auth', user)
    let location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    console.log(user)

    if (user.providerData[0]?.providerId === 'passwo rd' && !user.emailVerified) {
        return <div>
            <h3>Your email is not verified</h3>
            <h5>Please verify your email address</h5>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;