import React, { useState } from 'react';
import { connect } from 'react-redux';
import SelectView from './SelectView';
import ApiResponseView from './ApiResponseView';
import ButtonWithLoader from './ButtonWithLoader';
import { http } from '../modules';
import _ from 'lodash';

function TaskFormView( payload ) {
    
    const [ state, setState ] = useState( {
        isLoading: false,
        errorMessage: '',
        formData: {
            taskDescription: '',
            locationId: '',
            manPower: '',
            assignToId: '',
            categoryId: '',
            areaId: '',
            frequencyId: '',
            imagePath: '',
            comments: '',
            status: 'Upcoming',
            taskCreatedById: '',
            taskCreationDate: '',
            taskUpdatedById: '',
            taskUpdatonDate: ''
        }
    } );

    const { formData } = state;
    const { locations, allUsers, frequencies, categories, areas } = payload;

    const onTaskSubmit = ( e ) => {
        e.preventDefault();

        setState( { ...state, isLoading: true } );

        const _formData = _.cloneDeep( formData );
        _formData.taskCreatedById = _formData.assignToId;
        _formData.taskUpdatedById = _formData.assignToId;
        _formData.areaId = parseInt( _formData.areaId );
        _formData.manPower = parseInt( _formData.manPower );

        http.task.add( _formData ).then( ( response ) => {

            setState( { ...state, errorMessage: response.message } );

        } ).catch( ( e ) => {

            setState( { ...state, errorMessage: e.message } );

        } );

    }

    if( !_.isEmpty( state.errorMessage ) ) {

        return(
            <ApiResponseView message={ state.errorMessage } />
        );

    } else {
        return(
            <form onSubmit={ onTaskSubmit } className='taskForm'>
                <div className='grid'>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Brief</h6>
                        <div className='inputField'>
                            <input type='text' className='inputField__input' 
                                value={ formData.taskDescription }
                                onChange={ (e) => {
                                    setState( { ...state, formData: { ...state.formData, taskDescription: e.currentTarget.value } } );
                                } }
                                required
                            />
                        </div>
                    </div>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Location</h6>
                        <SelectView
                            { ...{
                                required: true,
                                value: formData.locationId,
                                type: 'location',
                                options: locations,
                                onSelect:(e) => {
                                    setState( { ...state, formData: { ...state.formData, locationId: e.currentTarget.value } } );
                                }
                            } }
                        />
                    </div>
                </div>
                <div className='grid'>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Man Power</h6>
                        <div className='inputField'>
                            <input type='number' min='1' className='inputField__input' 
                                value={ formData.manPower }
                                onChange={ (e) => {
                                    setState( { ...state, formData: { ...state.formData, manPower: e.currentTarget.value } } );
                                } }
                                required
                            />
                        </div>
                    </div>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Assign to</h6>
                        <SelectView
                            { ...{
                                required: true,
                                value: formData.assignToId,
                                type: 'allUser',
                                options: allUsers,
                                onSelect:(e) => {
                                    setState( { ...state, formData: { ...state.formData, assignToId: e.currentTarget.value } } );
                                }
                            } }
                        />
                    </div>
                </div>
                <div className='grid'>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Area</h6>
                        <SelectView
                            { ...{
                                required: true,
                                value: formData.areaId,
                                type: 'area',
                                options: areas,
                                onSelect:(e) => {
                                    setState( { ...state, formData: { ...state.formData, areaId: e.currentTarget.value } } );
                                }
                            } }
                        />
                    </div>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Frequency</h6>
                        <SelectView
                            { ...{
                                required: true,
                                value: formData.frequencyId,
                                type: 'frequency',
                                options: frequencies,
                                onSelect:(e) => {
                                    setState( { ...state, formData: { ...state.formData, frequencyId: e.currentTarget.value } } );
                                }
                            } }
                        />
                    </div>
                </div>
                <div className='grid'>
                    <div className='grid--6'>
                        <h6 className='heading heading--h6'>Category</h6>
                        <SelectView
                            { ...{
                                required: true,
                                value: formData.categoryId,
                                type: 'category',
                                options: categories,
                                onSelect:(e) => {
                                    setState( { ...state, formData: { ...state.formData, categoryId: e.currentTarget.value } } );
                                }
                            } }
                        />
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
}, null )( TaskFormView );