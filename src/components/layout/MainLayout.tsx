import {Outlet, useNavigate} from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import {useEffect, useState} from "react";
import authUtils from "../../utils/authUtils";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/features/userSlice";

const MainLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkAuth = async () => {
            const user = await authUtils.isAuthenticated()
            if (!user) {
                navigate('/login')
            } else {
                // save user
                dispatch(setUser(user))
                setLoading(false)
            }
        }
        checkAuth()
    }, [navigate])
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;