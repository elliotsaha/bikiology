import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import ContactButton from "../components/contactButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalAtmIcon from "@material-ui/icons/LocalAtmRounded";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
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
    },
    aboveFoldCircle3: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "15%",
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
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "-7rem",
      bottom: "-5rem",
    },
    objectiveCircle: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      left: "-7rem",
      top: "-5rem",
    },
    objectiveCircle2: {
      background: "#F8BB86",
      width: "14.5rem",
      height: "14.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "15%",
      right: "-5rem",
      top: "15rem",
    },
    aboveFoldText: {
      marginBottom: "7rem",
    },
    aboveFoldIconContainer: {
      marginRight: "1.5rem",
    },
    coreValues: {
      background: "black",
      color: "white",
      display: "flex",
      padding: "5rem",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10rem",
      paddingBottom: "10rem",
      flexDirection: "column",
    },
    coreValuesTitle: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      lineHeight: "4rem",
      maxWidth: "80rem",
      marginBottom: "2rem",
    },
    mark: {
      display: "inline-block",
      backgroundColor: "#F8BB86",
      paddingBottom: "1.9rem",
      lineHeight: 0,
      color: "white",
    },
    belowFold: {
      backgroundColor: "black",
      color: "white",
      padding: "3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "4rem",
      paddingTop: "5rem",
      paddingBottom: "5rem",
    },
    belowFoldTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      maxWidth: "70rem",
      lineHeight: "3.5rem",
    },
    belowFoldPara: {
      color: "#f5f5f5",
      fontSize: "1.5rem",
      maxWidth: "60rem",
    },
    logo: {
      width: "13.5rem",
    },
    objectives: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "white",
      padding: "3rem",
      position: "relative",
      overflow: "hidden",
    },
    objectivesHeader: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "4rem",
      lineHeight: "4.5rem",
      paddingBottom: "5rem",
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
    },
    icon: {
      color: "white",
      fontSize: "3rem",
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
    },
    objectiveTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      lineHeight: "2.5rem",
      color: "#525252",
      maxWidth: "10rem",
    },
  })
);
export default function about() {
  const classes = useStyles();
  return (
    <Layout>
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
          <div className={classes.objectiveCircle2} />
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
          
            <div className={classes.coreValuesTitle}>
              Our core values contain{" "}
              <mark className={classes.mark}>integrity</mark>,{" "}
              <mark className={classes.mark}>innovation</mark>,{" "}
              <mark className={classes.mark}>efficiency</mark> and{" "}
              <mark className={classes.mark}>cost-effectiveness.</mark>
            </div>
          
        </div>
      </div>
    </Layout>
  );
}
