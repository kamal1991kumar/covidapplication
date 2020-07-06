import SubHeaderView from '../views/SubHeaderView';

export default function DetailPage() {
    return (
        <>
            <SubHeaderView pageTitle='Task Detail' />
            <div className='container detailPage'>
                <div className='card'>
                    <div className='card__content'>
                        <div className='grid'>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Brief</h4>
                                <p>Cleaning of Glasses, Doors, Handles of Boardrooom to Admin Room</p>
                            </div>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Area</h4>
                                <p>Lobby</p>
                            </div>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Status</h4>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Manpower</h4>
                                <p>2</p>
                            </div>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Assign to</h4>
                                <p>Punnet</p>
                            </div>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Assign by</h4>
                                <p>Admin</p>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Location</h4>
                                <p>Pune</p>
                            </div>
                            <div className='grid--4'>
                                <h4 className='heading1 heading--h4'>Images</h4>
                                <div className='inputField' >
                                <label class="custom-file-upload">
                                    <input type='file'  className='inputField__file' />
                                    Upload
                                    </label>
                                </div>
                            </div>
                            <div className='grid--4'>&nbsp;</div>
                        </div>
                        <div className='grid'>
                            <div className='grid--8'>
                                <h4 className='heading1 heading--h4'>Comments</h4>
                                <div className='inputField'>
                                    <textarea className='inputField__textarea'></textarea>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn__parimary'>Approved</button>
                        <button className='btn btn__secondary'>Reject</button>
                    </div>
                </div>
            </div>
        </>
    );
}