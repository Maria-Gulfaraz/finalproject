import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

const pages = [ 'Home','Destination','Package', 'Contact Us'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{background:'greenyellow' ,fontFamily: 'serif' }}>
      <Container maxWidth="xl" sx={{color:'green'}}>
        <Toolbar disableGutters >
        <Box component="a" href="https://mui.com/" sx={{m:2}}>
        <img
          src={require('../components/logo/logo.png')}
          alt="Instagram"
          style={{height:'50px'}}
          />
        </Box>
          
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1,marginLeft:'100px', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1,marginLeft:'90px', display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"><Button
              key={"home"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button></Link>
          
            <Link to="/destination"><Button
              key={"contact"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Destinations
             
            </Button></Link>
          
            <Link to="/packages"><Button
              key={"contact"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
          Packages
          </Button>
          </Link>
            

            <Link to="/aboutUs"><Button
              key={"contact"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
     Booking
            </Button>
          </Link>
          <Link to="/contact"><Button
              key={"contact"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
               Contact Us
               </Button></Link>
               <Link to="/login"><Button
              key={"contact"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
               Registeration
               </Button></Link>

            {/* {pages.map((page) => (
            
              
            ))} */}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
