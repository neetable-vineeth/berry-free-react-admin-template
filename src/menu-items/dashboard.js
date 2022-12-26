// assets
import { IconDashboard } from '@tabler/icons';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: AutoAwesomeMosaicOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'activity',
            title: 'Activity Feeds',
            type: 'item',
            url: '/activity-feed',
            icon: TimelineOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'schools',
            title: 'Schools',
            type: 'item',
            url: '/schools',
            icon: SchoolOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: Person2OutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'challenge-management',
            title: 'Challenge Management',
            type: 'collapse',
            icon: GamesOutlinedIcon,
            children: [
                {
                    id: 'challenges',
                    title: 'Manage Challenges',
                    type: 'item',
                    url: '/challenge-management/challenges'
                },
                {
                    id: 'campaigns',
                    title: 'Manage Campaigns',
                    type: 'item',
                    url: '/challenge-management/campaigns'
                }
            ]
        },
        {
            id: 'points-management',
            title: 'Points Management',
            type: 'item',
            url: '/points',
            icon: StarBorderOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'shop',
            title: 'Scrappy Shop',
            type: 'item',
            url: '/shop',
            icon: ShoppingBagOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'reviews',
            title: 'Reviews',
            type: 'item',
            url: '/reviews',
            icon: ArticleOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
