import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import authUtils from "../../utils/authUtils";
import {setUser} from "../../redux/features/userSlice";
import Loading from "../../components/common/Loading";

const MarketplacePageLayout = () => {
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
          ) :
      <><Outlet /></>
  );
};

export default MarketplacePageLayout;