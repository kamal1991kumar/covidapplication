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
                <div className='inputField'>
                    <input type='email' className='inputField__input' value='vibhav' />
                    <div className='inputField__message'>This email address is not registered with us, try with different one.</div>
                </div>
                <button className='btn btn--disabled btn-block'>Next</button>
            </div>
        </div>
    );

}