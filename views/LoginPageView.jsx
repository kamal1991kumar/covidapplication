import React from 'react';

export default function LoginPageView() {

    return(
        <div className='loginPage'>
            <div className='loginPage__logo'>
                <img src='/images/Logo.svg' alt='Xebia' />
            </div>
            <h3 className='heading heading--h3'>Login</h3>
            <div className='card card__content'>
                <h6 className='heading heading--h6'>Enter your Email id</h6>
                <div className='inputField inputField--error1'>
                    <input type='email' className='inputField__input' value='vibhav' />
                    <div className='inputField__message'>This email address is not registered with us, try with different one.</div>
                    <div className='loader' />
                </div>
                <button className='btn btn__disabled1 btn__block btn__parimary'>Next</button>
                <div className='loginPage__message'>
                    Didn't receive the email? <span className='loginPage__message__link'>Resend the verification email.</span>
                </div>
            </div>
        </div>
    );

}