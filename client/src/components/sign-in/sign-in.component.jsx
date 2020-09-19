import React, { useState } from 'react'
import './sign-in.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { googleSignInStart, signInStart } from '../../redux/user/user.actions'


const SignIn = ({ onEmailSignInStart, onGoogleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        onEmailSignInStart(email, password)
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials( {...userCredentials, [name] : value }) 
    }
        
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    required
                    value={email}
                    label="Email"
                    handleChange={handleChange}
                />
                <FormInput
                    name="password"
                    type="password"
                    required
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                />
                <CustomButton type="submit"> Sign In </CustomButton>
                <CustomButton type="button" onClick={onGoogleSignInStart} isGoogleSignin>Google Sign In</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onGoogleSignInStart: () => dispatch(googleSignInStart()),
    onEmailSignInStart: (email, password) => dispatch(signInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);