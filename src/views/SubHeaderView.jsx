import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { http } from '../modules';
import ModalView from '../views/ModalView';
import TaskFormView from '../views/TaskFormView';
import TaskAddArea from '../views/TaskAddArea';
import TaskAddCategory from '../views/TaskAddCategory';
import { actionsType } from '../store/ruducers/locationReducer';
import SelectView from '../views/SelectView';
import axios from 'axios';


function SubHeaderView( props ) {

    const { pageTitle, locations, selectedValue, updateLocation } = props;

    const [ state, setState ] = useState( { 
        showTaskFrom: false,
        showAddarea: false,
        showAddItem: false
    } );

    const updateState = ( payload ) => {
        setState( ( _prev ) => ( { ..._prev, ...payload } ) );
    }

    return(
        <React.Fragment>
            <div className='subHeader'>
                <div className='container'>
                    <div className='subHeader__inner'>
                        <div className='subHeader__left'>
                            <h3 className='heading heading--h3'>{ pageTitle }</h3>
                        </div>
                        <div className='subHeader__right'>
                            <SelectView 
                                { ...{
                                    type: 'location',
                                    options: locations,
                                    value: selectedValue,
                                    onSelect: updateLocation
                                }}
                            />
                            <button
                                className='btn btn__parimary'
                                onClick={ () => updateState( { showTaskFrom: !state.showTaskFrom } ) }
                            >Add Task</button>
                             <button
                                className='btn btn__parimary'
                                onClick={ () => updateState( { showAddarea: !state.showAddarea } ) }
                            >Add Area</button>
                             <button
                                className='btn btn__parimary'
                                onClick={ () => updateState( { showAddItem: !state.showAddItem } ) }
                            >Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
            { !state.showTaskFrom ? null :
                <ModalView
                    closeHandler={ () => updateState( { showTaskFrom: !state.showTaskFrom } ) }
                    title='Add Task'
                >
                    <TaskFormView />
                </ModalView>
            }
             { !state.showAddarea ? null :
                <ModalView
                    closeHandler={ () => updateState( { showAddarea: !state.showAddarea } ) }
                    title='Add Area'
                >
                    <TaskAddArea />
                </ModalView>
            }
             { !state.showAddItem ? null :
                <ModalView
                    closeHandler={ () => updateState( { showAddItem: !state.showAddItem } ) }
                    title='Add Category'
                >
                    <TaskAddCategory />
                </ModalView>
            }
        </React.Fragment>
    );
}

export default connect( 
    ( { locationReducer } ) => {
        return locationReducer;
    }, ( dispatch ) => {

        http.getCommonApi().then( ( data ) => {

            dispatch( {
                type: actionsType.LOAD_DATA,
                data
            } );

        } ).catch( ( e ) => {

            dispatch( {
                type: actionsType.NETWORK_ERROR,
                data: e.message
            } );

        } );

        return {
            updateLocation: ( e ) => {
                dispatch( { type: actionsType.UPDATE_LOCATION, data: e.currentTarget.value } )
            }
        };

    } )( SubHeaderView );