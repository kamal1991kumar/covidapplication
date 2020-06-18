import Layout from '../components/Layout';
import Header from '../views/HeaderView';
import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';
import TaskAreaView from '../views/TaskAreaView';

export default function ListingPage() {
    return (
        <Layout>
            <Header />
            <SubHeaderView  pageTitle='Task Listing' />
            <div className='container dashboard'>
                <RecentTaskListView />
            </div>
        </Layout>
    );
}