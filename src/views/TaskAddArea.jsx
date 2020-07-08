import React, { useState } from 'react';
import { connect } from 'react-redux';
import SelectView from './SelectView';
import ApiResponseView from './ApiResponseView';
import ButtonWithLoader from './ButtonWithLoader';
import { http } from '../modules';
import _ from 'lodash';

function TaskAddArea( payload ) {

    const [ state, setState ] = useState( {
        isLoading: false,
        errorMessage: '',
        formData: {
            location_id: '',
            area: '',
            imagePath: ''
        }
    } );

    const { locations } = payload;
    const { formData, errorMessage } = state;

    const onFormSubmit = ( e ) => {
        e.preventDefault();
        setState( { ...state, isLoading: true } );

        http.area.add( formData ).then( ( response ) => {

            setState( { ...state, errorMessage: response.message } );

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
                    <h6 className='heading heading--h6'>Area Name</h6>
                    <div className='inputField'>
                        <input type='text' className='inputField__input' 
                            value={ formData.area }
                            onChange={ ( e ) => setState( { ...state, formData: { ...state.formData, area: e.currentTarget.value } } ) }
                            required
                        />
                    </div>
                </div>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Location</h6>
                    <SelectView
                        { ...{
                            required: true,
                            value: formData.location_id,
                            type: 'location',
                            options: locations,
                            onSelect:(e) => {
                                setState( { ...state, formData: { ...state.formData, location_id: e.currentTarget.value } } );
                            }
                        } }
                    />
                </div>
            </div>
            <div className='grid'>
                <div className='grid--6'>
                    <h6 className='heading heading--h6'>Image</h6>
                    <div className='inputField'>
                        <label class="custom-file-upload">
                            <input type='file' className='inputField__file'
                                value={ formData.imagePath }
                                onChange={ ( e ) => setState( { ...state, formData: { ...state.formData, imagePath: e.currentTarget.value } } ) }
                            />
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
}, null )( TaskAddArea );