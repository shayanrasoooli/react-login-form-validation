import React, {useState, useEffect} from 'react';
import { validate } from './validate';
import styles from "./SignUp.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{ notify} from "./Toast";
import { Link } from 'react-router-dom';



const SignUp = (props) => {

    const [data , setData] = useState({
        name: "" ,
        email: "" ,
        password: "" ,
        confirmPassword: "" ,
        isAccepted:false
    })


    const [error , setError ] = useState({}); 
       const [touch , setTouch ] = useState({});

    useEffect(() => {
        setError(validate(data, "signup"))

    },[data,touch])


    const changeHandler = event => {
        if(event.target.name === 'isAccepted'){
            setData({...data, [event.target.name]:event.target.value})
        }else{
            setData({...data, [event.target.name] :event.target.value})

        }
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
                name:true,
                email:true,
                password:true,
                confirmPasswordL:true,
                isAccepted:true
            })
        }
    }
    

    return (
        <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
            <h1 className={styles.header}>Sign up </h1>
            <div  className={styles.formField}>
                <label>Name</label>
                <input className={(error.name && touch.name) ? styles.uncompleted : styles.formInput}
                 type='text' name='name' value={data.name}
                  onChange={changeHandler}  
                  onFocus={focusHandler}>
                  </input>
                {error.name && touch.name &&<span>{error.name}</span>}
            </div>

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

            <div className={styles.formField}>
                <label>confirm Password</label>
                <input className={(error.confirmPassword && touch.confirmPassword) ? styles.uncompleted : styles.formInput} 
                type='password' name='confirmPassword' value={data.confirmPassword}  onChange={changeHandler}  onFocus={focusHandler}></input>
                {error.confirmPassword   && touch.confirmPassword && <span>{error.confirmPassword}</span>}

            </div>

            <div className={styles.formField}>
                <div className={styles.checkBoxContainer}>
                    <label>i accept terms of privacy </label>
                    <input 
                    type='checkbox' name='isAccepted' value={data.isAccepted}  onChange={changeHandler } onFocus={focusHandler}></input>
                </div>
                {error.isAccepted && touch.isAccepted && <span>{error.isAccepted}</span>}

            </div>
            <div className={styles.formButton}>
                <Link to="/login">Login</Link>
                <button type='submit'>sign up</button>
            </div>
        </form>
        <ToastContainer />
        </div>
    );
};
export default SignUp;