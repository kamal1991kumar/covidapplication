import Layout from '../components/Layout';
import Header from '../views/HeaderView';
import SubHeaderView from '../views/SubHeaderView';

export default function DashBoardPage() {
    return (
        <Layout>
            <Header />
            <SubHeaderView />
            <div className='container'>
                hi
            </div>
        </Layout>
    );
}