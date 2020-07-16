import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import SelectView from './SelectView';
import ApiResponseView from './ApiResponseView';
import ButtonWithLoader from './ButtonWithLoader';
import { http } from '../modules';
import _ from 'lodash';

 function EditTaskView( payload ) {
    
    const [ state, setState ] = useState( {
        isLoading: false,
        errorMessage: '',
        rows:[],
        formData: {
            taskDescription: '',
            location_id: '',
            manPower: '',
            assignToId: '',
            categoryId: '',
            areaId: '',
            frequencyId: '',
            file: '',
            comments: '',
            status: 'Upcoming',
            taskCreatedById: '',
            taskCreationDate: '',
            taskUpdatedById: '',
            taskUpdatonDate: ''
        }
    } );

    const { formData,rows } = state;
    const { locations, allUsers, frequencies, categories, areas, rowData } = payload;

    const loadData = () => {
        http.task.getAll().then( ( response ) => {
            
            const rows=response.payload.objectList;
            // console.log(rows)
            setState( { ...state, rows: rows, isLoading: false } );

        } ).catch( ( e ) => {

            setState( { ...state, isLoading: false, errorMessage: e.message } );

        } );
    };

    useEffect( () => {
        setState({
            formData: {
                taskDescription: rowData.taskDescription,
                locationId: rowData.locationId,
                manPower: rowData.manPower,
                categoryId: rowData.categoryId,
                areaId: rowData.areaId,
                frequencyId: rowData.frequencyId,
                assignToId: rowData.assignToId
            }
        })
    }, [] );


    const onTaskSubmit = ( e ) => {
        e.preventDefault();

        setState( { ...state, isLoading: true } );

        const _formData = _.cloneDeep( formData );
        _formData.taskCreatedById = _formData.assignToId;
        _formData.taskUpdatedById = _formData.assignToId;
        _formData.areaId = parseInt( _formData.areaId );
        _formData.manPower = parseInt( _formData.manPower );

        http.task.edit( rowData.id,_formData ).then( ( response ) => {

            setState( { ...state, errorMessage: response.message } );
            window.location.reload();

        } ).catch( ( e ) => {

            setState( { ...state, errorMessage: e.message } );

        } );

    }

    const handlechange = () =>{

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
                                defaultValue={ rowData.taskDescription }
                                onChange={ (e) => {
                                    setState( { ...state, formData: { ...state.formData, taskDescription: e.currentTarget.value } } );
                                    handlechange(e.target.value)
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
                                value: rowData.locationId,
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
                        <h6 className='heading heading--h6'>Man Power</h6>
                        <div className='inputField'>
                            <input type='number' min='1' className='inputField__input' 
                                defaultValue={ rowData.manPower }
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
                                value: rowData.assignToId,
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
                                value: rowData.areaId,
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
                                value: rowData.frequencyId,
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
                                value: rowData.categoryId,
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
}, null )( EditTaskView );

