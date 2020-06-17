import React from 'react';

export default function HeaderView() {

    return(
        <header className='header'>
            <div className='header__logo'>
                <img src='/images/Logo-white.svg' alt='Xebia' width='85' />
            </div>
            <div className='header__navigation'>
                <div className=''>
                    <ul>
                        <li className='active'>
                            <div>
                                <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                <span>Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                <span>My Idea</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='header__userinfo'>
                <div className='header__userinfo__notification'>
                    <img src='/images/bell.svg' alt='bell' width='20'/>
                    <span>3</span>
                </div>
                <div className='header__userinfo__profile'>
                    <img src='/images/default-avatar.png' alt='avatar' width='20'/>
                    <ul>
                        <li>Edit</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </header>
    );

};