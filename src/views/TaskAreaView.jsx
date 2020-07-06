import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { http } from '../modules';
import { actionsType } from '../store/ruducers/areaReducer';
import _ from 'lodash';

function TaskAreaView( payload ) {

    const { areas, isLoading, errorMessage } = payload;

    let view = null;
    let hasDataShow = false;

    if( isLoading ) {
        view = 'Loading...';
    } else if ( ! _.isEmpty( errorMessage ) ) {
        view = errorMessage;
    } else {
        hasDataShow = true;
        view = areas.map( (i) => {
            return (
                <li className='taskArea__listing__item' key={ i.areaId }>
                    <Link to='/listing'>
                        <img
                            src='/images/Lobby.jpg'
                            alt='img'
                        />
                        <div className='taskArea__listing__label'>{ i.areaName }</div>
                    </Link>
                </li>
            );
        });
    }

    return (
        <div className='taskArea'>
            <div className='card card--mb20'>
                <div className='card__content'>
                <h4 className='heading heading--h4'>Tasks Area</h4>
                    <ul className={ `taskArea__listing ${ hasDataShow ? '' : 'taskArea__listing--textcenter' }` }>
                        { view  }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default connect(
    ({ areaReducer }) => {
        return areaReducer;
    }, ( dispatch ) => {

        http.getArea().then((data) => {

            dispatch( {
                type: actionsType.LOAD_DATA,
                data
            } );

        }).catch( ( e ) => {
            dispatch( {
                type: actionsType.NETWORK_ERROR,
                data: e.message
            } );
        } );

        return {};

    })(TaskAreaView);