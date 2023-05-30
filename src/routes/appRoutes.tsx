import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import {RouteType} from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MarketplaceProblemsPage from "../pages/marketplace/MarketplaceProblemsPage";
import DirectoryPage from "../pages/directory/DirectoryPage";
import DashboardProblemsPage from "../pages/dashboard/DashboardProblemsPage";
import DashboardCollaborationsPage from "../pages/dashboard/DashboardCollaborationsPage";
import MetricsPage from "../pages/dashboard/MetricsPage";
import MarketplaceCollaborationsPage from "../pages/marketplace/MarketplaceCollaborationsPage";
import StoreIcon from '@mui/icons-material/Store';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const appRoutes: RouteType[] = [
    {
        path: "/dashboard",
        element: <DashboardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>,
        },
        child: [
            {
                path: "/dashboard/problems",
                element: <DashboardProblemsPage/>,
                state: "dashboard.problems",
                sidebarProps: {
                    displayText: "My Problems",
                },
            },
            {
                path: "/dashboard/collaborations",
                element: <DashboardCollaborationsPage/>,
                state: "dashboard.collaborations",
                sidebarProps: {
                    displayText: "My Collaborations",
                },
            },
            {
                path: "/dashboard/metrics",
                element: <MetricsPage/>,
                state: "dashboard.metrics",
                sidebarProps: {
                    displayText: "My Metrics",
                },
            },
        ],
    },
    {
        path: "/marketplace/problems",
        element: <MarketplaceProblemsPage/>,
        state: "marketplace.problems",
        sidebarProps: {
            displayText: "Problems",
            icon: <StoreIcon/>,
        },
    },
    {
        path: "/marketplace/collaborations",
        element: <MarketplaceCollaborationsPage/>,
        state: "marketplace.collaborations",
        sidebarProps: {
            displayText: "Collaborations",
            icon: <WorkspacesIcon/>,
        },
    },
    {
        path: "/directory",
        element: <DirectoryPage/>,
        state: "directory",
        sidebarProps: {
            displayText: "Directory",
            icon: <ArticleOutlinedIcon/>,
        },
    },
];

export default appRoutes;