import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { useTheme } from "@material-ui/core/styles";
import BookRoundedIcon from "@material-ui/icons/BookRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WorkIcon from "@material-ui/icons/Work";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import ApartmentIcon from "@material-ui/icons/Apartment";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    position: "fixed",
    backgroundColor: "transparent",
    fontFamily: "Gilroy, sans-serif",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("930")]: {
      display: "none",
    },
  },
  appBarSolidNav: {
    width: "100%",
    position: "fixed",
    backgroundColor: "white",
    fontFamily: "Gilroy, sans-serif",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("930")]: {
      display: "none",
    },
  },
  appBarScroll: {
    width: "100%",
    position: "fixed",
    backgroundColor: "white",
    fontFamily: "Gilroy, sans-serif",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("930")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: "auto",
    marginLeft: "1rem",
  },
  appBarMobile: {
    display: "none",
    [theme.breakpoints.down("930")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "transparent",
      flexDirection: "row",
    },
  },
  appBarMobileSolidNav: {
    display: "none",
    [theme.breakpoints.down("930")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "white",
      flexDirection: "row",
    },
  },

  appBarMobileScroll: {
    display: "none",
    [theme.breakpoints.down("930")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "white",
      flexDirection: "row",
    },
  },

  appBarMobileInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      marginLeft: "1rem",
      marginTop: "0.5rem",
      "& img": {
        width: "10rem",
      },
    },
  },

  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "0.75rem",
    paddingRight: "5rem",
    paddingLeft: "5rem",
    paddingBottom: "0.75rem",
    [theme.breakpoints.down("1200")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  },
  image: {
    width: "13rem",
    margin: 0,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginRight: "1rem",
    marginLeft: "1rem",
    fontSize: "1.1rem",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
  },
  linkTag: {
    color: "inherit",
    textDecoration: "none",
  },
  contact: {
    background: "black",
    padding: "0.75rem",
    paddingRight: "0.9rem",
    paddingLeft: "0.9rem",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Gilroy, sans-serif",
    "&:hover": {
      background: "black",
    },
  },
  buttonContainer: {
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  },
  links: {
    marginRight: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  drawer: {
    flexShrink: 0,
    width: "240px",
  },
  drawerPaper: {
    backgroundColor: "white",
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
    color: "black",
  },
  sideBarImage: {
    marginRight: "1.5rem",
    marginBottom: "1rem",
    marginLeft: "0.5rem",
  },
  sideBarImageInner: {
    width: "13rem",
  },
  svgIcon: {
    color: "black",
  },
  sideBarText: {
    color: "black",
    fontFamily: "Gilroy, sans-serif",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  divider: {
    backgroundColor: "black",
    opacity: "10%",
  },
}));

export default function navbar({ solidNav, whiteLogo }) {
  const classes = useStyles();
  const [scrollClass, setScrollClass] = useState(classes.appBar);
  const [scrollMobileClass, setScrollMobileClass] = useState(
    classes.appBarMobile
  );
  const [whiteLogoState, setWhiteLogoState] = useState(true);
  const [shadow, setShadow] = useState(0);
  // Mobile Drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon className={classes.svgIcon} />,
      link: "/",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "About",
      icon: <InfoRoundedIcon className={classes.svgIcon} />,
      link: "/about",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Products & Services",
      icon: <ShoppingCartIcon className={classes.svgIcon} />,
      link: "/products-and-services",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Careers",
      link: "/careers",
      icon: <WorkIcon className={classes.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
  ];

  const accountButton = [
    {
      text: "Contact Us",
      link: "/contact",
      icon: <AccountCircleIcon className={classes.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
  ];

  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={classes.sideBarImage}>
          <img
            className={classes.sideBarImageInner}
            src="/logo.png"
            alt="logo"
          />
        </div>
        {itemsList.map((item, index) => {
          const { text, icon, link, onClick } = item;
          return (
            <Link href={link} key={index}>
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          );
        })}
        <Divider className={classes.divider} />
        {accountButton.map((item, index) => {
          const { text, icon, link, onClick } = item;
          return (
            <Link href={link} key={index}>
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  useEffect(() => {
    if (solidNav) {
      setScrollClass(classes.appBarSolidNav);
      setScrollMobileClass(classes.appBarMobileSolidNav);
    } else {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          setScrollClass(classes.appBarScroll);
          setScrollMobileClass(classes.appBarMobileScroll);
          setShadow(2);
          setWhiteLogoState(false);
        } else {
          setScrollClass(classes.appBar);
          setScrollMobileClass(classes.appBarMobile);
          setShadow(0);
          setWhiteLogoState(true);
        }
      });
    }
  }, []);
  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={scrollClass} elevation={shadow}>
        <div className={classes.root}>
          <div>
            <img
              src={
                whiteLogo !== undefined
                  ? whiteLogoState === false
                    ? "/logo.png"
                    : whiteLogo
                  : "/logo.png"
              }
              alt="logo"
              className={classes.image}
            />
          </div>
          <div className={classes.linkContainer}>
            <div className={classes.links}>
              <div className={classes.link}>
                <Link href="/" className={classes.linkTag}>
                  <span>Home</span>
                </Link>{" "}
              </div>
              <div className={classes.link}>
                <Link href="/about" className={classes.linkTag}>
                  <span>About</span>
                </Link>{" "}
              </div>
              <div className={classes.link}>
                <Link href="/products-and-services" className={classes.linkTag}>
                  <span>Products & Services</span>
                </Link>
              </div>
              <div className={classes.link}>
                <Link href="/careers" className={classes.linkTag}>
                  <span>Careers</span>
                </Link>
              </div>
            </div>

            <div className={classes.buttonContainer}>
              <Link href="/contact" className={classes.linkTag}>
                <Button className={classes.contact}>Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </AppBar>

      <AppBar position="fixed" className={scrollMobileClass} elevation={shadow}>
        <div className={classes.appBarMobileInner}>
          <IconButton
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.shortLogoContainerAppbar}>
            <img
              className={classes.shortLogoContainerAppbarInner}
              src="/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className={classes.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}
