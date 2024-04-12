import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target;
        setUserData({
            ...userData,
            [name]: value,  //de esta manera resumimos con q nombre y valor del atributo vamos llenando
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validamos que no este vacio
        if(userData.email.trim() == '' || userData.password === ''){
            toast.error('All fields are required')
            return;
        }

        localStorage.setItem(
            'userLogin',
            JSON.stringify(userData.email)
        )

        navigate('/dashboard');
    };

  return (
    <div className={styles.containerLogin}>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit} className={styles.form}>
        {/* Email */}
        <div className={styles.formControlLogin}>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
            />
        </div>
        {/* Password */}
        <div className={styles.formControlLogin}>
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
        </div>
        <div className={styles.formControlLogin}>
            <button type="submit" >
                Login
            </button>
        </div>
    </form>
    </div>
  )
}

export default Login
