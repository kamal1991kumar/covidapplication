import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';
import TaskAreaView from '../views/TaskAreaView';
import TaskCategoriesView from '../views/TaskCategoriesView';
import ChartView from '../views/ChartView';
import { http } from '../modules';

export default function DashBoardPage() {

    http.demo().then( ( e ) => console.log( e ) )
    

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
                            <ChartView />
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
                <TaskAreaView />
                <TaskCategoriesView />
                <div className='taskList'>
                    {/* <h4 className='heading heading--h4'>Recent Tasks</h4> */}
                    <RecentTaskListView />
                </div>
            </div>
        </>
    );
}