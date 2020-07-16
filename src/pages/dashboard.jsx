import React,{useEffect} from 'react';
import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';
import TaskAreaView from '../views/TaskAreaView';
import TaskCategoriesView from '../views/TaskCategoriesView';
import ChartView from '../views/ChartView';
import { http } from '../modules';
import axios from 'axios'

export default function DashBoardPage() {

      //backend requirenment nothing related to subheaderview
      useEffect(() => {
        axios.get('https://covid-compliance-application.herokuapp.com/renewStatus')
            .then(res => {
               console.log("its working")
            })
        })



    return (
        <>
            <SubHeaderView pageTitle='Dashboard' />
            <div className='container dashboard'>
                <div className='grid'>
                    <div className='grid--6'>
                        <div className='card card--mb20'>
                            <div className='grid-inner'>
                                <h4 className='heading--h4'>Today Report</h4>
                                <a href='#'>
                                    {/* <img src='/images/download.svg' width='15' /> */}
                                    <select className='inputField__select '>  <option>Download Report</option></select>
                                </a>
                            </div>
                            <div className='grid'>
                            </div>
                            <ChartView chartType='pie'/>
                        </div>
                    </div>
                    <div className='grid--6'>
                        <div className='card card--mb20'>
                            <div className='grid-inner'>
                                <h4 className=' heading--h4'>Task Report</h4>
                                <a href='#'>
                                    {/* <img src='/images/download.svg' width='15' /> */}
                                    <select className='inputField__select '>  <option>Download Report</option></select>
                                </a>
                            </div>
                            <ChartView chartType='bar' />
                        </div>
                    </div>
                </div>
                <TaskAreaView  name='kaml' />
                <TaskCategoriesView />
                <div className='taskList'>
                    <RecentTaskListView />
                </div>
            </div>
        </>
    );
}