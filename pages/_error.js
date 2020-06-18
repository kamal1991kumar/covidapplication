import Router from 'next/router';

export default function ErrorPage() {

    return(
        <div className='errorPage'>
            <div className='errorPage__logo'>
                <img src='/images/Logo-white.svg' width='150' alt='Xebia' />
            </div>
            <div className='errorPage__title'>404</div>
            <div className='errorPage__message'>Oops! Something is wrong.</div>
            <button className='btn btn__parimary' onClick={() => Router.back()}>Go to initial page</button>
        </div>
    );

}