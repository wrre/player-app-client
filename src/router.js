import Dnd from './components/Dnd';
import LandingPage from './components/LandingPage';
import UserListPage from './components/user/UserListPage';
import VideoPage from './components/video/VideoPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: LandingPage
    },
    {
        path: '/video/:id',
        exact: true,
        component: VideoPage
    },
    {
        path: '/dnd',
        exact: true,
        component: Dnd
    },
    {
        path: '/user/list',
        exact: true,
        component: UserListPage
    }
]

export default routes
