import React from 'react';

export default function SubHeaderView() {
    return(
        <div className='subHeader'>
            <div className='container'>
                <div className='subHeader__inner'>
                    <div className='subHeader__left'>
                        <h3 className='heading heading--h3'>Dashboard</h3>
                    </div>
                    <div className='subHeader__right'>
                        <div className='inputField'>
                            <select className='inputField__input'>
                                <option>Select Location</option>
                            </select>
                        </div>
                        <button className='btn btn__parimary'>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}