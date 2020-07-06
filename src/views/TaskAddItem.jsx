import React from 'react';

export default function TaskAddItem() {

    return (
        <div className='taskForm'>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Item Name</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' value='' />
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Item Area</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' value='' />
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Image</h6>
                    <div className='inputField'>
                        <label class="custom-file-upload">
                            <input type='file' className='inputField__file' />
                                    Upload
                    </label>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>&nbsp;</div>
                <div className='grid--6 text-right'>
                    <button className='btn btn__parimary'>Save</button>
                </div>
            </div>
        </div>
    );
}