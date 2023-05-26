import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MarketplacePageLayout from "../pages/marketplace/MarketplacePageLayout";
import MarketplaceProblemsPage from "../pages/marketplace/MarketplaceProblemsPage";
import DirectoryPage from "../pages/directory/DirectoryPage";
import DashboardProblemsPage from "../pages/dashboard/DashboardProblemsPage";
import DashboardCollaborationsPage from "../pages/dashboard/DashboardCollaborationsPage";
import MetricsPage from "../pages/dashboard/MetricsPage";
import MarketplaceCollaborationsPage from "../pages/marketplace/MarketplaceCollaborationsPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashboardPageLayout />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon />
        },
        child: [
            // {
            //     index: true,
            //     element: <DashboardIndex />,
            //     state: "dashboard.index"
            // },
            {
                path: "/dashboard/problems",
                element: <DashboardProblemsPage />,
                state: "dashboard.problems",
                sidebarProps: {
                    displayText: "My Problems"
                },
            },
            {
                path: "/dashboard/collaborations",
                element: <DashboardCollaborationsPage />,
                state: "dashboard.collaborations",
                sidebarProps: {
                    displayText: "My Collaborations"
                }
            },
            {
                path: "/dashboard/metrics",
                element: <MetricsPage />,
                state: "dashboard.metrics",
                sidebarProps: {
                    displayText: "My Metrics"
                }
            }
        ]
    },
    {
        path: "/marketplace",
        element: <MarketplacePageLayout />,
        state: "marketplace",
        sidebarProps: {
            displayText: "Marketplace",
            icon: <AppsOutlinedIcon />
        },
        child: [
            {
                path: "/marketplace/problems",
                element: <MarketplaceProblemsPage />,
                state: "marketplace.problems",
                sidebarProps: {
                    displayText: "Problems"
                },
            },
            {
                path: "/marketplace/collaborations",
                element: <MarketplaceCollaborationsPage />,
                state: "marketplace.collaborations",
                sidebarProps: {
                    displayText: "Collaborations"
                }
            }
        ]
    },
    {
        path: "/directory",
        element: <DirectoryPage />,
        state: "directory",
        sidebarProps: {
            displayText: "Directory",
            icon: <ArticleOutlinedIcon />
        }
    }
];

export default appRoutes;