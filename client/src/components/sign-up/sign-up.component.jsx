import React, { useState } from 'react'
import './sign-up.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = (props) => {
    const [user, setUser] = useState({ displayName: "", email: "", password: "", confirmPassword: "" })
    const { displayName, email, password, confirmPassword } = user
    const { signUpStart } = props

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password Mismatch");
            setUser(prevField => {
                return { ...prevField, password: "", confirmPassword: "" }
            })
            return;
        }
        if (password.length < 6) {
            alert("Password should have at least 6 characters");
            setUser(prevField => {
                return { ...prevField, password: "", confirmPassword: "" }
            })
            return;
        }

        signUpStart({ email, password, displayName })

        setUser({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUser(prevField => {
            return { ...prevField, [name]: value }
        })
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit"> SIGN UP </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)