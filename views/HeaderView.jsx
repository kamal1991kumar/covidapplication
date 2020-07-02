import Link from 'next/link';
import React from 'react';
import OpenCloseHoc from '../hoc/openCloseHoc';
import { utils, storage } from '../modules';


export default class HeaderView extends React.Component {


    state = {
        userInfo: null
    }

    componentDidMount() {
        this.setState( { userInfo: storage.userInfo.get() } );
    }

    
    render() {

        const { Router } = this.props;

        return (
            <header className='header'>
                <div className='header__logo'>
                    <Link href='/dashboard'><img src='/images/Logo-white.svg' alt='Xebia' width='85' /></Link>
                </div>
                <div className='header__navigation'>
                    <div className=''>
                        <ul>
                            <li className={ utils.linkActive( Router, '/dashboard' ) }>
                                <Link href='/dashboard'>
                                    <div>
                                        <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                        <span>Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li className={ utils.linkActive( Router, '/listing' ) }>
                                <Link href='/listing'>
                                    <div>
                                        <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                        <span>My Tasks</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='header__userinfo'>
                    <div className='header__userinfo__notification'>
                        <img src='/images/bell.svg' alt='bell' width='20' />
                        <span>3</span>
                    </div>
                   { this.state.userInfo === null ? null : <Dropdown  { ...this.state } Router={ Router } /> }
                </div>
            </header>
        );
    }

};

const Dropdown = ( props ) => {

    const { userInfo, Router } = props;
    const { firstName, lastName } = userInfo;

    return(
        <OpenCloseHoc render={(payload) => {
    
            const { isOpen, onHandleClick, ref } = payload;
            
            return (
                <div className='header__userinfo__profile' ref={ref}>
                    <img src='/images/default-avatar.png' alt='avatar' width='20' onClick={onHandleClick} />
                    {!isOpen ? null :
                        <ul>
                            <li>{ firstName } { lastName }</li>
                            <li onClick={ () => utils.userLogout( Router ) }>Logout</li>
                        </ul>
                    }

                </div>
            );

        }} />
    );
}