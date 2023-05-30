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
import ChatPage from "../pages/chat/ChatPage";
import React from "react";
import ProblemDetailsPage from "../pages/marketplace/ProblemDetailsPage";
import CollaborationDetailsPage from "../pages/marketplace/CollaborationDetailsPage";
import CompanyProfilePage from "../pages/directory/CompanyProfilePage";
import CreateProblemPage from "../pages/marketplace/CreateProblemPage";
import CreateCollaborationPage from "../pages/marketplace/CreateCollaborationPage";

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
            displayText: "Marketplace",
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
    {
        path: "/chat/:id",
        element: <ChatPage />,
        state: "chat"
    },
    {
        path: "/marketplace/problem/:id",
        element: <ProblemDetailsPage />,
        state: "marketplace.problem"
    },
    {
        path: "/marketplace/collaboration/:id",
        element: <CollaborationDetailsPage />,
        state: "marketplace.collaboration"
    },
    {
        path: "/profile/:id",
        element: <CompanyProfilePage />,
        state: "profile"
    },
    {
        path: "/marketplace/problem/create",
        element: <CreateProblemPage />,
        state: "marketplace.problem.create"
    },
    {
        path: "/marketplace/collaboration/create",
        element: <CreateCollaborationPage />,
        state: "marketplace.collaboration.create"
    }
];

export default appRoutes;