import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
//import Google from './Google';
//import Facebook from './Facebook';
import 'react-toastify/dist/ReactToastify.min.css';
import '../auth/signin.css'; 

const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const informParent = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
        });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signinForm = () => (
        <form className="main-form">
            <div className="form-groups">
                <label className="label-head">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="input-con" />
            </div>

            <div className="form-groups">
                <label className="label-head">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="input-con" />
            </div>

            <div>
                <button className="btn-send" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <div className="main">
            <div className="secondDiv">
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                <div className="header">
                    <h2>Login</h2>
                    <h1>Enter your account.</h1>
                    <h3>You don´t have an account yet?<Link to = "/signup" style={{textDecoration: "underline" , color:"#83a46f"}}>Create one here</Link></h3>
                </div>
                {/* <Google informParent={informParent} />
                <Facebook informParent={informParent} /> */}
                {signinForm()}
                <Link to="/auth/password/forgot" className="btn-forgot">
                    Forgot Password
                </Link>
            </div>
        </div>
    );
};

export default Signin;