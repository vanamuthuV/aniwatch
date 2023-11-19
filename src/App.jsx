import React from "react";
import { MyTheme } from "./CustomColor";
import { Stack, ThemeProvider} from "@mui/material";
import "./App.css"
import "./Pages/Home/Home.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReviewPage } from "./Pages/Review/Review";

const pages = ['Search', 'About', 'Watch-Now', 'Contact'];


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addreview" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Header = () => {

  const [showsearch, setShowsearch] = React.useState(false)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const SearchSetter = (event) => {
    const { name } = event.target
    const { myValue } = event.currentTarget.dataset;
    ((myValue || name) === 'Search') && setShowsearch(prev => !prev)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 5,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Fira Code",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                  color: "#333333",
                }}
              >
                ANI WATCH
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      color={"text"}
                      textAlign="center"
                      data-my-value = {page}
                      onClick = {(event) => SearchSetter(event)}
                      sx={{ fontFamily: "Fira Code", fontWeight: "700" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Fira Code",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textDecoration: "none",
                  color: "#403b02",
                }}
              >
                ANI WATCH
              </Typography>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  color="text"
                  name={page}
                  onClick={(event) => SearchSetter(event)}
                  sx={{
                    my: 2,
                    fontFamily: "Fira Code",
                    fontWeight: "300",
                    fontSize: "16px",
                    margin: "0px",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  color="primary"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                ></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showsearch && <Search />}
    </ThemeProvider>
  );
}

const Footer = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <AppBar
        position="static"
        color="primary"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTop : '1px solid #333333'
        }}
      >
        <Typography variant="p" mt={"10px"}>
          &copy; Copyright @ ANI WATCH
        </Typography>
        <br></br>
        <Stack direction={"row"} mt={"5px"}>
          <IconButton href="https://instagram.com/_rajpiratz_?igshid=OGY3MTU3OGY1Mw==">
            <InstagramIcon />
          </IconButton>
          <IconButton href={`mailto:1hk21cs179@hkbk.edu.in`}>
            <EmailIcon />
          </IconButton>
          <IconButton href="https://x.com/VanamuthuV?t=jPPvDLx5a_ZO2ZWn34vQZg&s=09">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/vanamuthu-v-49ab6a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
}

const Search = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Container sx={{display : 'flex', flex : '1', marginTop : '15px', marginBottom : '15px'}}>
        <input
          placeholder="Search"
          style={{ display: "flex", flex: 1, padding : '10px', borderRadius : '10px', border : '1px solid #333333'}}
        ></input>
      </Container>
    </ThemeProvider>
  );
}