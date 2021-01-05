import React from "react";
import Layout from "../components/layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ContactButton from "../components/contactButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import products from "../components/products.json";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      overflow: "hidden",
    },
    aboveFold: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      minHeight: "30rem",
      flexDirection: "column",
      background: "white",
      overflow: "hidden",
      height: "100vh",
      zIndex: 1,
    },
    aboveFoldHeader: {
      fontSize: "7.5rem",
      maxWidth: "90rem",
      lineHeight: "8rem",
      marginBottom: 0,
      [theme.breakpoints.down("1280")]: {
        fontSize: "5.5rem",
        lineHeight: "6rem",
        maxWidth: "70rem",
      },
      [theme.breakpoints.down("950")]: {
        fontSize: "4.5rem",
        lineHeight: "5rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("770")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
        maxWidth: "45rem",
        marginRight: "1.5rem",
        marginLeft: "1.5rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down("380")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
    },
    aboveFoldSub: {
      textTransform: "uppercase",
      marginTop: "-0.2rem",
      fontSize: "1.2rem",
      letterSpacing: "1rem",
      marginLeft: "1rem",
      marginBottom: "1rem",
      marginTop: "0.5rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("650")]: {
        fontSize: "1rem",
        letterSpacing: "0.7rem",
      },
    },
    aboveFoldCircle3: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "15%",
      bottom: "5.5rem",
      right: "-7.5rem",
      zIndex: -1,
    },
    aboveFoldIcon: {
      position: "absolute",
      bottom: "1rem",
      "& > *": {
        fontSize: "1.75rem",
      },
    },
    aboveFoldCircle2: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      left: "-5rem",
      top: "12rem",
      zIndex: -1,
    },
    aboveFoldText: {
      marginBottom: "7rem",
    },
    aboveFoldIconContainer: {
      marginRight: "1.5rem",
    },

    servicesInner: {
      display: "flex",
    },
    icon: {
      color: "white",
      fontSize: "2.25rem",
    },
    iconOuter: {
      background: "#F8BB86",
      padding: "0.7rem",
      borderRadius: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    servicesTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "auto",
      marginBottom: "auto",
      lineHeight: "2.5rem",
      color: "#525252",
      [theme.breakpoints.down("500")]: {
        fontSize: "1.75rem",
        marginLeft: "0.5rem",
      },
    },
    servicesText: {
      color: "grey",
      fontWeight: 600,
      fontSize: "1.1rem",
      marginTop: "0.8rem",
      marginLeft: "0.2rem",
      maxWidth: "30rem",
    },
    servicesOuter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    servicesRoot: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5rem",
      marginBottom: "5rem",
      gap: "10rem",
      overflow: "hidden",
      zIndex: 2,
      [theme.breakpoints.down("1440")]: {
        gap: "5rem",
      },
      [theme.breakpoints.down("1150")]: {
        gap: "1rem",
      },
      [theme.breakpoints.down("1000")]: {
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "3rem",
        gap: "3.5rem",
      },
    },
    servicesRootSecond: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "8.5rem",
      gap: "10rem",
      overflow: "hidden",
      zIndex: 2,
      [theme.breakpoints.down("1440")]: {
        gap: "5rem",
      },
      [theme.breakpoints.down("1150")]: {
        gap: "1rem",
      },
      [theme.breakpoints.down("1000")]: {
        justifyContent: "center",
        flexDirection: "column",
        gap: "3.5rem",
      },
    },
    servicesCircle: {
      position: "absolute",
      width: "25rem",
      height: "25rem",
      background: "#F8BB86",
      opacity: "25%",
      borderRadius: "50%",
      bottom: "-5rem",
      right: "-5rem",
      zIndex: -1,
    },
    servicesOutline: {
      position: "absolute",
      width: "20rem",
      height: "20rem",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      opacity: "25%",
      borderRadius: "50%",
      top: "-5rem",
      left: "-5rem",
      zIndex: -1,
    },
    services: {
      overflow: "hidden",
      position: "relative",
    },
    servicesHeader: {
      textAlign: "center",
      marginTop: "3.5rem",
      fontWeight: "bold",
      fontSize: "4.25rem",
      lineHeight: "4.75rem",
      color: "#525252",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
      [theme.breakpoints.down("500")]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
    },

    productsRoot: {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "2.5rem",
      flexDirection: "column",
    },
    productsHeader: {
      fontWeight: "bold",
      fontSize: "3rem",
      textAlign: "center",
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
      lineHeight: "3.25rem",
      marginBottom: "0.5rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "2.5rem",
        marginRight: 0,
        marginLeft: 0,
      },
      [theme.breakpoints.down("325")]: {
        fontSize: "2.2rem",
        lineHeight: "2.7rem",
        marginRight: 0,
        marginLeft: 0,
      },
    },
    productsSub: {
      fontWeight: "bold",
      marginBottom: "1.8rem",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "0.35rem",
      textAlign: "center",
      [theme.breakpoints.down("325")]: {
        fontSize: "0.95rem",
        lineHeight: "1.2rem",
      },
    },
    productsGrid: {
      display: "grid",
      borderRadius: "0.5rem",
      overflow: "hidden",
      position: "relative",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      marginBottom: "2rem",
      [theme.breakpoints.down("750")]: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
      },
      [theme.breakpoints.down("500")]: {
        gridTemplateColumns: "1fr",
        gap: "1rem",
      },
    },
    productsGridChild: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        width: "20rem",
        height: "20rem",
        margin: 0,
        objectFit: "cover",
        transition: "all 0.4s ease",
        [theme.breakpoints.down("750")]: {
          opacity: "55%",
        },
        [theme.breakpoints.down("1000")]: {
          width: "17.5rem",
          height: "17.5rem",
        },
        [theme.breakpoints.down("900")]: {
          width: "15rem",
          height: "15rem",
        },
        [theme.breakpoints.down("500")]: {
          width: "100%",
          height: "20rem",
          borderRadius: "0.5rem",
        },
      },
      "& div": {
        position: "absolute",
        fontWeight: "bold",
        fontSize: "1.25rem",
        margin: "0.5rem",
        display: "none",
        transition: "all 0.4s ease",
        opacity: "0%",
        [theme.breakpoints.down("750")]: {
          display: "block",
          opacity: "100%",
        },
      },
      "&:hover": {
        "& img": {
          opacity: "50%",
          transition: "all 0.4s ease",
        },
        "& div": {
          display: "block",
          transition: "all 0.4s ease",
          opacity: "100%",
        },
      },
    },
  })
);
export default function productsandservices() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldCircle2}></div>
          <div className={classes.aboveFoldCircle3}></div>
          <div className={classes.aboveFoldText}>
            <h1 className={classes.aboveFoldHeader}>
              Quality Products and Services
            </h1>
            <h3 className={classes.aboveFoldSub}>Products & Services</h3>
            <div>
              <ContactButton />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <ExpandMoreIcon className={classes.aboveFoldIcon} />
          </div>
        </div>
        <div className={classes.services}>
          <div className={classes.servicesCircle}></div>
          <div className={classes.servicesOutline}></div>
          <div className={classes.servicesHeader}>Our Services</div>
          <div className={classes.servicesRoot}>
            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <DataUsageIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Exporting</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <LocalAtmIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Consultancy</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <AccountBalanceIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Importing</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>
          </div>
          <div className={classes.servicesRootSecond}>
            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <DataUsageIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Exporting</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <LocalAtmIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Consultancy</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.servicesOuter}>
              <div>
                <div className={classes.servicesInner}>
                  <div className={classes.iconOuter}>
                    <AccountBalanceIcon className={classes.icon} />
                  </div>
                  <div className={classes.servicesTitle}>Importing</div>
                </div>
                <div className={classes.servicesText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.productsRoot}>
          <div className={classes.productsHeader}>The Products We Provide</div>
          <div className={classes.productsSub}>But Not Limited To</div>
          <div className={classes.productsGrid}>
            {products.slice(0, 6).map((i) => {
              return (
                <div className={classes.productsGridChild}>
                  <img src={i.img} alt={i.name} />
                  <div>{i.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
