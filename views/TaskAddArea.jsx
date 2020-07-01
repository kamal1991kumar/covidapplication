import React from 'react';

export default function TaskAddArea() {

    return(
        <div className='taskForm'>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Area Name</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' value='' />
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Image</h6>
                    <div className='inputField'>
                    <label class="custom-file-upload">
                                    <input type='file'  className='inputField__file' />
                                    Upload
                    </label>
                    </div>
                </div>
            </div>
            <button className='btn  rightbtn'>Save</button>
            </div>
               );
        }