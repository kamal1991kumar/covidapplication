import { Link } from 'react-router-dom';
import React from 'react';
import OpenCloseHoc from '../hoc/openCloseHoc';
import { utils, storage } from '../modules';


export default class HeaderView extends React.Component {


    state = {
        userInfo: null
    }

    componentDidMount() {
        this.setState({ userInfo: storage.userInfo.get() });
    }


    render() {

        const { location, history } = this.props;

        return (
            <header className='header'>
                <div className='header__logo'>
                    <Link to='/dashboard'><img src='./images/Logo-white.svg' alt='Xebia' width='85' /></Link>
                </div>
                <div className='header__navigation'>
                    <div className=''>
                        <ul>
                            <li className={utils.linkActive(location, '/dashboard')}>
                                <Link to='/dashboard'>
                                    <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className={utils.linkActive(location, '/listing')}>
                                <Link to='/listing'>
                                    <img src='./images/clock.svg' alt='Dashboard' width='15' />
                                    <span>My Tasks</span>
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
                    {this.state.userInfo === null ? null : <Dropdown  {...this.state} history={history} />}
                </div>
            </header>
        );
    }

};

const Dropdown = (props) => {

    const { userInfo, history } = props;
    const { firstName, lastName } = userInfo;

    return (
        <OpenCloseHoc render={(payload) => {

            const { isOpen, onHandleClick, ref } = payload;

            return (
                <div className='header__userinfo__profile' ref={ref}>
                    <img src='/images/default-avatar.png' alt='avatar' width='20' onClick={onHandleClick} />
                    {!isOpen ? null :
                        <ul>
                            <li>{firstName} {lastName}</li>
                            <li onClick={() => utils.userLogout(history)}>Logout</li>
                        </ul>
                    }

                </div>
            );

        }} />
    );
}