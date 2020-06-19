import SubHeaderView from '../views/SubHeaderView';
import RecentTaskListView from '../views/RecentTaskListView';

export default function ListingPage() {
    return (
        <>
            <SubHeaderView  pageTitle='Task Listing' />
            <div className='container dashboard'>
                <RecentTaskListView />
            </div>
        </>
    );
}