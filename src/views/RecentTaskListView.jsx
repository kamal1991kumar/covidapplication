import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tooltip from '../views/Tooltip';
import SelectView from '../views/SelectView';
import { http, utils } from '../modules';
import _ from 'lodash';

function RecentTaskListView( props ) {

    const [ state, setState ] = useState( {
        isLoading: true,
        rows: [],
        errorMessage: ''
    } );

    const loadData = () => {
        http.task.getAll().then( ( response ) => {

            setState( { ...state, rows: response.payload.objectList, isLoading: false } );

        } ).catch( ( e ) => {

            setState( { ...state, isLoading: false, errorMessage: e.message } );

        } );
    };
    
    useEffect( () => loadData(), [] );

    const { rows } = state;

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
                        <th>Assign To</th>
                        <th>Stauts</th>
                        <th>Created on</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                       rows.length === 0 ? null : rows.map(( row ) => {
                            return(
                                <TableBodyRow
                                    key={ row.id }
                                    rowData={ row }
                                    { ...props }
                                    reload={ loadData }
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default connect( ( { locationReducer, categoryReducer, areaReducer } ) => {

    const { allUsers, frequencies, locations } = locationReducer;
    const { categories } = categoryReducer;
    const { areas } = areaReducer;

    return {
        allUsers,
        frequencies,
        locations,
        categories,
        areas
    };
}, null )( RecentTaskListView );

const TableBodyRow = ( payload ) => {

    const { rowData, areas, allUsers, reload } = payload;
    
    return (
        <tr>
            <td className='cursorPointer'><Link to='/detail'>{ rowData.taskDescription }</Link></td>
            <td>{ getValueByOptions( 'area', rowData.areaId, areas ) }</td>
            <td>{ getValueByOptions( 'assignTo', rowData.assignToId, allUsers ) }</td>
            <td>{ rowData.status }</td>
            <td>{ utils.dateFormate( rowData.taskCreationDate ) }</td>
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
                    <div className='table__icon' onClick={ () => deleteTask( rowData.id, reload ) }>
                        <img src='/images/trash.svg' alt='approved' />
                    </div>
                </Tooltip>
            </td>
        </tr>
    );
}

const deleteTask = ( rowId, reload ) => {
    http.task.delete( rowId ).then( ( response ) => {
        alert( response.message );
        reload();
    } );

};

const getValueByOptions = ( type, value, options ) => {

    switch( type ) {
        case 'area' : {

            const _option = options.find( ( i ) => {
                return i.areaId === value;
            } );

            return _.get( _option, 'areaName', '-' );

        }
        case 'assignTo' : {

            const _option = options && options.find( ( i ) => {
                return i.id === value;
            } );

            return _.get( _option, 'username', '-' );

        }
    }

}
