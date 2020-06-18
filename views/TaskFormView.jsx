import React from 'react';

export default function TaskFormView() {

    return(
        <div className='taskForm'>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Brief</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' value='' />
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Location</h6>
                    <div className='inputField'>
                        <select className='inputField__input'>
                            <option>Select Location</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Man Power</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' value='' />
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Assign to</h6>
                    <div className='inputField'>
                        <select className='inputField__input'>
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Area</h6>
                    <div className='inputField'>
                        <select className='inputField__input'>
                            <option>Select</option>
                        </select>
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Timings</h6>
                    <div className='inputField'>
                        <select className='inputField__input'>
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </div>                
            <button className='btn btn__parimary'>Save</button>
        </div>
    );

}