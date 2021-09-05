import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  "./activate.css";

const Activate = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    });

  /*   useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
        // console.log(token);
        if (token) {
            setValues({ ...values, name, token });
        }
    }, []); */

    const { name, token } = values;

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: { token }
        })
            .then(response => {
                console.log('ACCOUNT ACTIVATION', response);
                setValues({ ...values, show: false });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
                toast.error(error.response.data.error);
            });
    };

    const activationLink = () => (
        <div className="box">
            <h1 className="header-one">Hey {name}, Ready to activate your account?</h1>
            <button className="btn-act" onClick={clickSubmit}>
                Activate Account
            </button>
        </div>
    );

    return (
        <div className="container">
            <div className="">
                <ToastContainer />
                {activationLink()}
            </div>
        </div>
    );
};

export default Activate;