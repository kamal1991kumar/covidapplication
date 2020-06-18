import React, { useState } from 'react';
import ModalView from '../views/ModalView';
import TaskFormComponent from '../components/TaskFormComponent';

export default function SubHeaderView( props ) {

    const { pageTitle } = props;

    const [ state, setState ] = useState( { 
        showTaskFrom: false
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
                            <div className='inputField'>
                                <select className='inputField__input'>
                                    <option>Select Location</option>
                                </select>
                            </div>
                            <button
                                className='btn btn__parimary'
                                onClick={ () => updateState( { showTaskFrom: !state.showTaskFrom } ) }
                            >Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
            { !state.showTaskFrom ? null :
                <ModalView
                    closeHandler={ () => updateState( { showTaskFrom: !state.showTaskFrom } ) }
                    title='Add Task'
                >
                    <TaskFormComponent />
                </ModalView>
            }
        </React.Fragment>
    );
}