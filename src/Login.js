import React, {useState, useEffect} from 'react'
import './Login.css'
import {useDispatch} from "react-redux";
import { auth } from "./firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "./features/userSlice"
import linkedin_full from './assets/icons/linkedin_full.png';
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(
                login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                })
            );
        })
        .catch((error) => alert(error.message));
};



const register = () => {
    if (!name) {
        return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(
                    login({
                        email: user.email,
                        uid: user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        })
        .catch((error) => alert(error.message));
};


  return (
    <div className='login'>
        <img src={linkedin_full}/>

        <form>
            <input value = {name} onChange = {e => setName(e.target.value)} placeholder ='Full name (required if registering)' type = "text"/>

            <input value = {profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type = "text"/>
            <input value = {email} onChange ={e => setEmail(e.target.value)} placeholder='Email' type = "email"/>
            <input value = {password} onChange = {e => setPassword(e.target.value)} placeholder='Password' type = "password"/>

            <button type = 'submit' onClick = {loginToApp}> Sign In</button>

        </form>
        <p>Not a member? 
            <span className='login__register' onClick={register}> Register now</span>
        </p>

    </div>
  )
}

export default Login
