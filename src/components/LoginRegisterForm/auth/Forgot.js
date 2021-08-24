import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './forgot.css';

const Forgot = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Request password reset link'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email }
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
                toast.success(response.data.message);
                setValues({ ...values, buttonText: 'Requested' });
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Request password reset link' });
            });
    };

    const passwordForgotForm = () => (
        <form>
            <div className="form">
                <label className="email">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="type-box" />
            </div>

            <div>
                <button className="btn-request" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <div className="main-box-1">
            <div className="main-con">
                <ToastContainer />
                <h1 className="header-title">Forgot password</h1>
                {passwordForgotForm()}
            </div>
        </div>
    );
};

export default Forgot;