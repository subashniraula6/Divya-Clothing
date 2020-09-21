import React from 'react'
import './contact-page.styles.scss'
import { ReactComponent as EmailIcon } from '../../../../src/email.svg'
import phoneIcon from '../../../../src/phone.png'

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="email">
                <EmailIcon className="email-icon" />
                <label className="emailLabel">subashniraula6@gmail.com</label>
            </div>
            <div className="phone">
                <img src={phoneIcon} className="phone-icon" />
                <label className="phoneLabel"> +977 9808067978 </label>
            </div>

        </div>
    )
}
export default ContactPage;