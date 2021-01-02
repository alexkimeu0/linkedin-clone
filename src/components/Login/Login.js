import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

import { auth } from '../../firebase'

import './Login.css'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()


    const register = () => {
        if (!name) {
            return alert('Name is Required!')
        }     
        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic 
                        }))                    
                })
            }).catch(error => alert(error))        
    }

    const logintoApp = (e) => {
        e.preventDefault()   
        
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL 
                }))
            }).catch(error => alert(error))
    }

    return (
        <div className="login">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-700x394.png" alt="Login" />     
            
            <form>
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full name (required if registering)"
                />
                <input 
                    type="text" 
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile pic URL(Optional)"
                />
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password"
                />
                <button type="submit" onClick={ logintoApp }>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={ register }>Register Now</span></p>
        </div>
    )
}

export default Login
