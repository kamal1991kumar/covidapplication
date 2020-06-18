import React from 'react';

export default function RecentTaskListView() {

    return(
        <div className='taskList'>
            <h4 className='heading heading--h4'>Recent Tasks</h4>
            <div className='card card--mb20'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Area</th>
                            <th>Submitted by</th>
                            <th>Stauts</th>
                            <th>Submitted on</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reception & Lift Lobby</td>
                            <td>Lobby</td>
                            <td>Punnet</td>
                            <td>Pending</td>
                            <td>20 Mar, 2019 10:00 AM</td>
                            <td>
                                <div className='table__icon'>
                                    <img src='/images/check.svg' alt='approved' />
                                </div>
                                <div className='table__icon'>
                                    <img src='/images/close.svg' alt='approved' />
                                </div>
                                <div className='table__icon'>
                                    <img src='/images/edit.svg' alt='approved' />
                                </div>
                                <div className='table__icon'>
                                    <img src='/images/trash.svg' alt='approved' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}