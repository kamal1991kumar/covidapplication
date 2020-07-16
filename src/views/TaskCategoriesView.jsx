import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { http } from '../modules';
import { actionsType } from '../store/ruducers/categoryReducer';
import _ from 'lodash';

function TaskCategoryView( payload ) {

    const { categories, isLoading, errorMessage } = payload;

    let view = null;
    let hasDataShow = false;

    if( isLoading ) {
        view = 'Loading...';
    } else if ( ! _.isEmpty( errorMessage ) ) {
        view = errorMessage;
    } else {
        hasDataShow = true;
        view = categories.map( (i) => {
            return (
                <li className='taskArea__listing__item' key={ i.categoryId }>
                    <Link to='/listing'>

                        <img

                            src={`data:image/png;base64,${i.image}`}
                            alt='img'
                        />
                        
                        	

                        <div className='taskArea__listing__label'>{ i.categoryName } </div>
                        {/* {console.log(i.image)} */}
                    </Link>
                    <br/>   
                    <img onClick={() => deleteCategories(i.categoryId)} src='/images/trash.svg' alt='approved' width="11px"/>
                </li>
            );
        });
    }

    const deleteCategories = ( categoryId ) => {
        http.category.delete(  categoryId ).then( ( response ) => {
            alert( response.message );
            window.location.reload()  
        });
    
    };

    return (
        <div className='taskArea'>
            <div className='card card--mb20'>
                <div className='card__content'>
                <h4 className='heading heading--h4'>Tasks Category</h4>
                    <ul className={ `taskArea__listing ${ hasDataShow ? '' : 'taskArea__listing--textcenter' }` }>
                        { view  }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default connect(
    ({ categoryReducer }) => {
        return categoryReducer;
    }, ( dispatch ) => {

        http.category.getAll().then((response) => {

            dispatch( {
                type: actionsType.LOAD_DATA,
                data: response.payload.objectList
            } );

        }).catch( ( e ) => {
            dispatch( {
                type: actionsType.NETWORK_ERROR,
                data: e.message
            } );
        } );

        return {};

    })(TaskCategoryView);


