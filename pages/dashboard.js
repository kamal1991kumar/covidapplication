import Layout from '../components/Layout';
import Header from '../views/HeaderView';
import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';
import TaskAreaView from '../views/TaskAreaView';

export default function DashBoardPage() {
    return (
        <Layout>
            <Header />
            <SubHeaderView  pageTitle='Dashboard' />
            <div className='container dashboard'>
                <div className='grid'>
                    <div className='grid--6'>
                        <h4 className='heading heading--h4'>Today Report</h4>
                        <div className='card card--mb20'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Submitted by</th>
                                        <th>Submit Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Reception & Lift Lobby</td>
                                        <td>Pending</td>
                                        <td>10.00 AM - 11.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Reception & Lift Lobby</td>
                                        <td>Pending</td>
                                        <td>10.00 AM - 11.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Reception & Lift Lobby</td>
                                        <td>Pending</td>
                                        <td>10.00 AM - 11.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Reception & Lift Lobby</td>
                                        <td>Pending</td>
                                        <td>10.00 AM - 11.00 AM</td>
                                    </tr>
                                    <tr>
                                        <td>Reception & Lift Lobby</td>
                                        <td>Pending</td>
                                        <td>10.00 AM - 11.00 AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='grid--6'>
                        <h4 className='heading heading--h4'>Tasks Stats</h4>
                        <div className='card card--mb20'>
                            d
                        </div>
                    </div>
                </div>
                <TaskAreaView />
                <RecentTaskListView />
            </div>
        </Layout>
    );
}