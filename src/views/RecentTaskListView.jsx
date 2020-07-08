import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../views/Tooltip';
import SelectView from '../views/SelectView';
import { http } from '../modules';

export default function RecentTaskListView() {

    const [ state, setState ] = useState( {
        isLoading: true,
        rows: [],
        errorMessage: ''
    } );


    useEffect( () => {

        http.task.getAll().then( ( response ) => {

            setState( { ...state, rows: response, isLoading: false } );

        } ).catch( ( e ) => {

            setState( { ...state, isLoading: false, errorMessage: e.message } );

        } );


    }, [] );


    return (
        <div className='card card--mb20'>
            <div className='grid-inner'>
                <h4 className='heading--h4'>Upcoming Task</h4>
                <SelectView
                    { ...{
                        type: 'download'
                    } }
                />
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
            <td className='cursorPointer'><Link to='/detail'>Reception & Lift Lobby</Link></td>
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
                    </div>
                </Tooltip>
            </td>
        </tr>
    );
}