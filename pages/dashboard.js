import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';
import TaskAreaView from '../views/TaskAreaView';
import TaskCategoriesView from '../views/TaskCategoriesView';
import ChartView from '../views/ChartView';

export default function DashBoardPage() {
    return (
        <>
            <SubHeaderView pageTitle='Dashboard' />
            <div className='container dashboard'>
                <div className='grid'>
                    <div className='grid--6'>
                        <div className='grid'>
                            <h4 className='heading heading--h4'>Today Report</h4>
                            <a href='#'>
                                <img src='/images/download.svg' width='15' />
                            </a>
                        </div>
                        <div className='card card--mb20'>
                            <ChartView />
                        </div>
                    </div>
                    <div className='grid--6'>
                        <div className='grid'>
                            <h4 className='heading heading--h4'>Tasks Stats</h4>
                            <a href='#'>
                                <img src='/images/download.svg' width='15' />
                            </a>
                        </div>
                        <div className='card card--mb20'>
                            <ChartView chartType='bar' />
                        </div>
                    </div>
                </div>
                <TaskAreaView />
                <TaskCategoriesView />
                <div className='taskList'>
                    <h4 className='heading heading--h4'>Recent Tasks</h4>
                    <RecentTaskListView />
                </div>
            </div>
        </>
    );
}