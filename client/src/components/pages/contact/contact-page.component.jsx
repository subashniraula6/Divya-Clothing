import React from 'react'
import './contact-page.styles.scss'
import { ReactComponent as EmailIcon} from '../../../../src/email.svg'
import phoneIcon from '../../../../src/phone.png'

const ContactPage = () => {
    return (
        <div className="contact-page">
             <EmailIcon className="email-icon"/>
             <img src={phoneIcon} className="phone-icon"/>
        </div>
    )
}
export default ContactPage;