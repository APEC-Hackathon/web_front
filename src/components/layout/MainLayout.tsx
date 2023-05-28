import {Outlet, useNavigate} from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import {useEffect, useState} from "react";
import authUtils from "../../utils/authUtils";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/features/userSlice";
import Loading from "../common/Loading";
import Topbar from "../common/Topbar";

const MainLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authUtils.isAuthenticated()
                if (user) {
                    dispatch(setUser(user))
                }
            } catch (e) {
                setLoading(false)
                console.log(e)
                navigate('/login')
            }
        }
        checkAuth().finally(() => setLoading(false))
    }, [])
  return (
      loading ? (
          <Loading fullHeight={100}/>
      ) : (
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
      )
  );
};

export default MainLayout;

// import {Outlet, useNavigate} from "react-router-dom";
// import { Box, Toolbar } from "@mui/material";
// import colorConfigs from "../../configs/colorConfigs";
// import sizeConfigs from "../../configs/sizeConfigs";
// import Sidebar from "../common/Sidebar";
// import Topbar from "../common/Topbar";
// import {useEffect, useState} from "react";
// import authUtils from "../../utils/authUtils";
// import {useDispatch} from "react-redux";
// import {setUser} from "../../redux/features/userSlice";
//
// const MainLayout = () => {
//     return (
//         <Box sx={{ display: "flex" }}>
//             <Topbar />
//             <Box
//                 component="nav"
//                 sx={{
//                     width: sizeConfigs.sidebar.width,
//                     flexShrink: 0
//                 }}
//             >
//                 <Sidebar />
//             </Box>
//             <Box
//                 component="main"
//                 sx={{
//                     flexGrow: 1,
//                     p: 3,
//                     width: `calc(100% - ${sizeConfigs.sidebar.width})`,
//                     minHeight: "100vh",
//                     backgroundColor: colorConfigs.mainBg
//                 }}
//             >
//                 <Toolbar />
//                 <Outlet />
//             </Box>
//         </Box>
//     );
// };
//
// export default MainLayout;