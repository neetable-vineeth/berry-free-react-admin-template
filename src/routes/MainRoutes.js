import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { Users } from 'views/pages/sections/users';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const ActivityFeed = Loadable(lazy(() => import('views/pages/sections/activityFeed')));
const SchoolManagement = Loadable(lazy(() => import('views/pages/sections/schools')));
// const Users = Loadable(lazy(() => import('views/pages/sections/users')));
const ChallengeManagement = Loadable(lazy(() => import('views/pages/sections/chellangeManagement')));
const PointsManagement = Loadable(lazy(() => import('views/pages/sections/pointsManagement')));
const Shop = Loadable(lazy(() => import('views/pages/sections/scrappyShop')));
const Reviews = Loadable(lazy(() => import('views/pages/sections/reviews')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/activity-feed',
            element: <ActivityFeed />
        },

        {
            path: '/schools',
            element: <SchoolManagement />
        },
        {
            path: '/users',
            element: <Users />
        },
        {
            path: '/challenge-management',
            children: [
                {
                    path: 'campaigns',
                    element: <ChallengeManagement />
                },
                {
                    path: 'challenges',
                    element: <ChallengeManagement />
                }
            ]
        },
        {
            path: '/points',
            element: <PointsManagement />
        },
        {
            path: '/shop',
            element: <Shop />
        },
        {
            path: '/reviews',
            element: <Reviews />
        }
    ]
};

export default MainRoutes;
