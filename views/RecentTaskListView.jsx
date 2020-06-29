import React from 'react';
import Link from 'next/link';
import Tooltip from '../views/Tooltip';
export default function RecentTaskListView() {

    return (
        <div className='card card--mb20'>
            <div className='grid-inner'>
             <h4 className='heading--h4'>Recent Task</h4>
             <a href='#'>
                                {/* <img src='/images/download.svg' width='15' /> */}
                                <select className='inputField__select '>  <option>Download Report</option></select>
                            </a> 
                            </div>
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
                    {[1, 2, 3, 4, 5].map(() => <TableBodyRow />)}
                </tbody>
            </table>
        </div>
    );

}

const TableBodyRow = () => {
    return (
        <tr>
            <Link href='/detail'><td className='cursorPointer'>Reception & Lift Lobby</td></Link>
            <td>Lobby</td>
            <td>Punnet</td>
            <td>Pending</td>
            <td>20 Mar, 2019 10:00 AM</td>
            <td>
                <Tooltip title='Approved'>
                    <div className='table__icon'>
                        <img src='/images/check.svg' alt='approved' />
                    </div>
                </Tooltip>
                <Tooltip title='Reject'>
                    <div className='table__icon'>
                        <img src='/images/close.svg' alt='approved' />
                    </div>
                </Tooltip>
                <Tooltip title='Edit'>
                    <div className='table__icon'>
                        <img src='/images/edit.svg' alt='approved' />
                    </div>
                </Tooltip>
                <Tooltip title='Delete'>
                    <div className='table__icon'>
                        <img src='/images/trash.svg' alt='approved' />
                        {/* <i className="fa fa-trash-o trash" ></i> */}
                    </div>
                </Tooltip>
            </td>
        </tr>
    );
}