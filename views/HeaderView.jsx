import Link from 'next/link';
import React from 'react';
import OpenCloseHoc from '../hoc/openCloseHoc';
import { utils } from '../modules';


export default function HeaderView() {

    
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src='/images/Logo-white.svg' alt='Xebia' width='85' />
            </div>
            <div className='header__navigation'>
                <div className=''>
                    <ul>
                        <li className={ utils.linkActive( '/dashboard' ) }>
                            <Link href='/dashboard'>
                                <div>
                                    <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li className={ utils.linkActive( '/listing' ) }>
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
                <OpenCloseHoc render={(payload) => {

                    const { isOpen, onHandleClick, ref } = payload;

                    return (
                        <div className='header__userinfo__profile' ref={ref}>
                            <img src='/images/default-avatar.png' alt='avatar' width='20' onClick={onHandleClick} />
                            {!isOpen ? null :
                                <ul>
                                    <li>Edit</li>
                                    <li>Logout</li>
                                </ul>
                            }

                        </div>
                    );

                }} />
            </div>
        </header>
    );

};