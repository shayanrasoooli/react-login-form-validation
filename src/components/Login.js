import React, {useState, useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{ notify} from "./Toast";
import { Link } from 'react-router-dom';

import styles from "./SignUp.module.css";


const Login = (props) => {

    const [data , setData] = useState({
        email: "" ,
        password: "" ,
    })

    const [error , setError ] = useState({});
    const [touch , setTouch ] = useState({});

    useEffect(() => {
        setError(validate(data, "Login"))

    },[data,touch])


    const changeHandler = event => {
            setData({...data, [event.target.name]:event.target.value})
        }
    

    const focusHandler = event => {
        setTouch({...touch,[event.target.name] : true})

    }

    const submitHandler = event => {
        event.preventDefault();
    
        if (!Object.keys(error).length) {
            notify("you logged in  successfully " , "success")
        }else{
            notify("you logged in failed " , "error")

            setTouch({
                email:true,
                password:true,
            })
        }
    }

    return (
        <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <h1 className={styles.header}>log in </h1>

            <div className={styles.formField}> 
                <label>email</label>
                <input className={(error.email && touch.email) ? styles.uncompleted : styles.formInput} 
                 type='text' name='email' value={data.email} onChange={changeHandler}  onFocus={focusHandler}></input>
                {error.email && touch.email && <span>{error.email}</span>}

            </div>

            <div className={styles.formField}>
                <label>Password</label>
                <input className={(error.password && touch.password) ? styles.uncompleted : styles.formInput} 
                type='password' name='password' value={data.password} onChange={changeHandler}  onFocus={focusHandler}></input>
                {error.password  && touch.password && <span>{error.password}</span>}

            </div>

            <div className={styles.formButton}>
                <Link to="/signup">sign up</Link>
                <button type='submit'>log in</button>
            </div>
        </form>
        <ToastContainer />
        </div>
    );
};
export default Login;