import React, { useState } from 'react';
import { connect } from 'react-redux';
import SelectView from './SelectView';
import ApiResponseView from './ApiResponseView';
import ButtonWithLoader from './ButtonWithLoader';
import { http } from '../modules';
import _ from 'lodash';

function AcceptView( payload ) {

    const [ state, setState ] = useState( {
        isLoading: false,
        errorMessage: '',
        formData: {
            comments: '',
            file: ''
        }
    } );

    const { locations,rowData } = payload;
    const { formData, errorMessage } = state;

    

    const onFormSubmit = ( e ) => {
        e.preventDefault();
    
        setState( { ...state, isLoading: true } );
        
        var form_data = new FormData();

        form_data.append('file',formData['file'])
        form_data.append('task',JSON.stringify({"task_id":rowData.toString(),"comment":formData['comments']}))

        console.log(form_data)

        http.task.accept( form_data ).then( ( response ) => {

            setState( { ...state, errorMessage: response.message } );
            window.location.reload();
            console.log(response)

        } ).catch( ( e ) => {

            setState( { ...state, errorMessage: e.message } );

        } );

    }
    
    if( !_.isEmpty( errorMessage ) ) {

        return(
            <ApiResponseView message={ errorMessage } />
        );

    }

    return (
        <form onSubmit={ onFormSubmit } className='taskForm'>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Comments</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' 
                            value={ formData.comments}
                            onChange={ ( e ) => setState( { ...state, formData: { ...state.formData, comments: e.currentTarget.value } } ) }
                            required
                        />
                    </div>
                </div>
                
            </div>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Image</h6>
                    <div className='inputField'>
                        <label className="custom-file-upload">
                            <input type='file' className='inputField__file'
                                // value={ formData.file }
                                onChange={ ( e ) => setState( { ...state, formData: { ...state.formData, file: e.currentTarget.files[0] } } ) }
                            />
                            {console.log(state.formData)}
                            Upload
                        </label>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>&nbsp;</div>
                <div className='grid--6 text-right'>
                        <ButtonWithLoader
                            showLoader={ state.isLoading }
                            className='btn btn__parimary'
                            type='submit'
                        >
                            Save
                        </ButtonWithLoader>
                </div>
            </div>
        </form>
    );
}

export default connect( ( { locationReducer, } ) => {

    const { locations } = locationReducer;

    return {
        locations,
    };
}, null )( AcceptView );