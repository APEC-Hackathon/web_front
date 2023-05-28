import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Snackbar,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import React from "react";
import authApi from "../../api/authApi";
import {useNavigate} from "react-router-dom";

const Topbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (setting: string) => {
        if (setting === 'Logout') {
            authApi.logout();
            navigate('/login', { replace: true });
        }
        setAnchorElUser(null);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
    <AppBar
      position="fixed"
      sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar
          disableGutters
      >
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                pl: `24px`
            }}
        >
          Welcome to CollabMarket!
        </Typography>
          <Box
              sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'right', pr: `32px`}}
          >
              <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
              </Tooltip>
              <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
              >
                  {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                          <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                  ))}
              </Menu>
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  This is a success message!
              </Alert>
          </Snackbar>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;