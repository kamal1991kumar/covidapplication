import React from 'react';

export default function LoginPageView(props) {

    const { userVerificationScreen } = props;

    return (
        <div className='loginPage'>
            <div className='loginPage__logo'>
                <img src='/images/Logo.svg' alt='Xebia' />
            </div>
            <h3 className='heading heading--h3'>Login</h3>
            {!userVerificationScreen ?
                <UserVerifyScreen
                    {...props}
                /> :
                <PasswordVerifyScreen
                    {...props}
                />
            }
        </div>
    );

}


const UserVerifyScreen = (payload) => {

    const { username, onInputChange, onUserVerificationSubmit, isLoading, isValidField } = payload;

    return (
        <form onSubmit={onUserVerificationSubmit} className='card card__content'>
            <h6 className='heading heading--h6'>Enter Email</h6>
            <div className={`inputField ${isValidField ? '' : 'inputField--error'}`}>
                <input type='email' className='inputField__input'
                    value={username}
                    placeholder='Enter your Official email id'
                    required
                    onChange={(e) => onInputChange({ username: e.currentTarget.value })}
                />
                <div className='inputField__message'>
                    {isValidField ? 'You will receive an OTP on this email to continue to application.' : 'This email address is not registered with us, try with different one.'}
                </div>
                {isLoading ? <div className='loader' /> : null}
            </div>
            <button type='submit' className='btn btn__block btn__parimary'>Next</button>
        </form>
    );
}

const PasswordVerifyScreen = (payload) => {

    const { password, onInputChange, onPasswordVerificationSubmit, isLoading, isValidField, verifiedUserName } = payload;

    return (
        <form onSubmit={onPasswordVerificationSubmit} className='card card__content'>
            <h6 className='heading heading--h6'>Enter OTP</h6>
            <div className={`inputField ${isValidField ? '' : 'inputField--error'}`}>
                <input type='password' className='inputField__input'
                    value={password}
                    placeholder='Enter one time password'
                    required
                    onChange={(e) => onInputChange({ password: e.currentTarget.value })}
                />
                {isValidField ? 'You will receive an OTP on this email to continue to application.' : <div className='inputField__message'>Please enter correct OTP.</div>}
                {isLoading ? <div className='loader' /> : null}
            </div>
            <button type='submit' className='btn btn__disabled1 btn__block btn__parimary'>Login</button>
            <div className='loginPage__message'>
                Didn't receive the email? <span className='loginPage__message__link' onClick={verifiedUserName}>Resend the verification email.</span>
            </div>
        </form>
    );
}