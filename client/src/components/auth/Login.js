import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated} = authContext;
    const navigate = useNavigate();

    useEffect(() => {

        if(isAuthenticated) {
            navigate('/');
        }


        if(error === 'Invalid credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-line
    }, [error, isAuthenticated]);




    const [user, setUser ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser ({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        // const formData = new FormData(e.target)
        // const data = Object.fromEntries(formData)

        // console.log(data)

        if(email === '' || password  === '') {
            setAlert('Please fill all fields', "danger")
        } else {
            login({
                email,
                password
            });
        }

    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'> Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' name='email' value={email} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} />
                </div>

                <input type='submit' value="Login" className='btn btn-primary btn-block' />
            </form>
        </div>
    );
};

export default Login;