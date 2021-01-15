import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import ContactButton from "../components/contactButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalAtmIcon from "@material-ui/icons/LocalAtmRounded";
import Button from "@material-ui/core/Button";
import {NextSeo} from "next-seo"
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
      [theme.breakpoints.down("1550")]: {
        fontSize: "5.5rem",
        lineHeight: "6rem",
        maxWidth: "70rem",
      },
      [theme.breakpoints.down("1400")]: {
        fontSize: "4.5rem",
        lineHeight: "5rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
        maxWidth: "45rem",
        marginRight: "1.75rem",
        marginLeft: "1.75rem",
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
      "-moz-opacity": "15%",
      "-khtml-opacity": "15%",
      bottom: "27.5rem",
      left: "16rem",
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
      "-moz-opacity": "20%",
      "-khtml-opacity": "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "-7rem",
      bottom: "-5rem",
      zIndex: -1,
    },
    objectiveCircle: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      "-moz-opacity": "20%",
      "-khtml-opacity": "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      left: "-7rem",
      top: "-5rem",
      zIndex: -1,
    },
    objectiveCircle2: {
      background: "#F8BB86",
      width: "17.5rem",
      height: "17.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      "-moz-opacity": "10%",
      "-khtml-opacity": "10%",
      right: "-5rem",

      zIndex: -1,
    },
    aboveFoldText: {
      marginBottom: "7rem",
    },
    aboveFoldIconContainer: {
      marginRight: "1.5rem",
    },
    coreValues: {
      background: "white",
      color: "#525252",
      display: "flex",
      padding: "5rem",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "3.5rem",
      paddingBottom: "10rem",
      flexDirection: "column",
      position: "relative",
      zIndex: 2,
      [theme.breakpoints.down("600")]: {
        paddingTop: "3rem",
        paddingBottom: "7rem",
      },
      [theme.breakpoints.down("550")]: {
        paddingTop: "5rem",
        paddingBottom: "5rem",
      },
      [theme.breakpoints.down("360")]: {
        paddingTop: "3rem",
        paddingBottom: "3rem",
      },
    },
    coreValuesTitle: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      lineHeight: "4rem",
      maxWidth: "80rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down("550")]: {
        fontSize: "2.7rem",
        lineHeight: "3.2rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "2.2rem",
        lineHeight: "2.8rem",
      },
      [theme.breakpoints.down("360")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.down("320")]: {
        fontSize: "1.8rem",
        lineHeight: "2.3rem",
      },
    },
    mark: {
      display: "inline-block",
      backgroundColor: "rgba(248, 187, 134, 0.70)",
      paddingBottom: "1.9rem",
      lineHeight: "0",
      color: "#525252",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("600")]: {
        paddingBottom: "1.4rem",
      },
      [theme.breakpoints.down("550")]: {
        paddingBottom: "1.3rem",
      },
      [theme.breakpoints.down("320")]: {
        paddingBottom: "1.1rem",
      },
    },
    belowFold: {
      backgroundColor: "black",
      color: "white",
      padding: "3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 3,
      "& > div": {
        marginRight: "1.5rem",
        marginLeft: "1.5rem",
      },
      paddingTop: "8rem",
      paddingBottom: "8rem",
      [theme.breakpoints.down("1250")]: {
        "& > div": {
          marginRight: "1.5rem",
          marginLeft: "1.5rem",
        },
      },
      [theme.breakpoints.down("940")]: {
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        "& > div": {
          marginBottom: "1rem",
          marginTop: "1rem",
          marginLeft: 0,
        },
      },
    },
    belowFoldTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      maxWidth: "70rem",
      lineHeight: "3.5rem",
      zIndex: 3,
      [theme.breakpoints.down("1250")]: {
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.down("940")]: {
        marginLeft: "-1rem",
        marginBottom: "0.5rem",
      },
      [theme.breakpoints.down("700")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
        marginTop: "-1rem",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "1.5rem",
        lineHeight: "1.85rem",
      },
    },
    belowFoldPara: {
      color: "#f5f5f5",
      fontSize: "1.5rem",
      maxWidth: "60rem",
      [theme.breakpoints.down("1250")]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      [theme.breakpoints.down("940")]: {
        marginLeft: "-1rem",
      },
      [theme.breakpoints.down("700")]: {
        fontSize: "1.3rem",
        lineHeight: "1.5rem",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
      },
    },
    logo: {
      width: "13.5rem",
      [theme.breakpoints.down("1250")]: {
        width: "12rem",
      },
      [theme.breakpoints.down("940")]: {
        width: "14rem",
        marginLeft: "-1.2rem",
      },
      [theme.breakpoints.down("700")]: {
        width: "12rem",
      },
      [theme.breakpoints.down("500")]: {
        width: "10rem",
      },
    },
    objectives: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "white",
      padding: "3rem",
      position: "relative",
      zIndex: 1,
    },
    objectivesHeader: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "4rem",
      lineHeight: "4.5rem",
      paddingBottom: "5rem",
      [theme.breakpoints.down("1050")]: {
        marginLeft: "0.75rem",
        marginRight: "0.75rem",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        margin: 0,
      },
      [theme.breakpoints.down("400")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        margin: 0,
      },
    },
    objectivesFlex: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "70rem",
      alignItems: "center",
      width: "100%",
      paddingBottom: "5rem",
      "& > div": {
        display: "flex",
      },
      [theme.breakpoints.down("900")]: {
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "-2.5rem",
        "& > div": {
          margin: "2rem",
          marginLeft: 0,
          marginRight: 0,
        },
      },
      [theme.breakpoints.down("450")]: {
        marginTop: "-5rem",
        marginBottom: "-5rem",
      },
    },
    icon: {
      color: "white",
      fontSize: "3rem",
      [theme.breakpoints.down("900")]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "2rem",
      },
    },
    iconOuter: {
      background: "#F8BB86",
      padding: "0.7rem",
      borderRadius: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      height: "100%",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down("900")]: {
        padding: "1.5rem",
      },
      [theme.breakpoints.down("450")]: {
        padding: "1rem",
      },
    },
    objectiveTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      lineHeight: "2.5rem",
      color: "#525252",
      maxWidth: "10rem",
      [theme.breakpoints.down("1050")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
    },
  })
);
export default function about() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="About Us | Bikiology"
        description="Through our years of experience, we've learned how to serve better by effective communications."
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldCircle2}></div>
          <div className={classes.aboveFoldCircle3}></div>
          <div className={classes.aboveFoldText}>
            <h1 className={classes.aboveFoldHeader}>
              Shaping The World as Your Local Market
            </h1>
            <h3 className={classes.aboveFoldSub}>About Us</h3>
            <div>
              <ContactButton />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <ExpandMoreIcon className={classes.aboveFoldIcon} />
          </div>
        </div>
        <div className={classes.belowFold}>
          <div>
            <img
              src="/shortLogoWhite.svg"
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div>
            <div className={classes.belowFoldTitle}>
              Through our years of experience, we've learned how to serve better
              by effective communications.
            </div>
            <div className={classes.belowFoldPara}>
              We are a Canadian integrated Export-Import Company headquartered
              in Alberta-Canada, committed to maximizing value by sustainably
              developing our product & services to our clients all over the
              world.
            </div>
          </div>
        </div>
        <div className={classes.objectives}>
          <div className={classes.objectiveCircle} />
          <div className={classes.objectivesHeader}>
            Our Objectives Are To Offer
          </div>
          <div className={classes.objectivesFlex}>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>The Best Goods</div>
            </div>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>A Great Price</div>
            </div>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>Quality Services</div>
            </div>
          </div>
        </div>
        <div className={classes.coreValues}>
          <div className={classes.objectiveCircle2} />
          <div className={classes.coreValuesTitle}>
            Our core values contain{" "}
            <mark className={classes.mark}>integrity,</mark>{" "}
            <mark className={classes.mark}>innovation,</mark>{" "}
            <mark className={classes.mark}>efficiency</mark> and{" "}
            <mark className={classes.mark}>cost-effectiveness.</mark>
          </div>
        </div>
      </div>
    </Layout>
  );
}
