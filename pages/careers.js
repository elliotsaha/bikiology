import React from "react";
import Layout from "../components/layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ContactButton from "../components/contactButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
      bottom: "5.5rem",
      left: "-7.5rem",
      zIndex: -1,
      [theme.breakpoints.down("750")]: {
        width: "16rem",
        height: "16rem",
      },
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
      right: "5rem",
      bottom: "20rem",
      zIndex: -1,
      [theme.breakpoints.down("750")]: {
        width: "16rem",
        height: "16rem",
        top: "5rem",
        left: "5rem",
      },
    },
    aboveFoldText: {
      marginBottom: "7rem",
    },
    aboveFoldIconContainer: {
      marginRight: "1.5rem",
    },
    weHire: {
      padding: "2rem",
      paddingTop: "6.5rem",
      paddingBottom: "6.5rem",
      background: "black",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    weHireLarge: {
      fontSize: "3rem",
      fontWeight: "bold",
      maxWidth: "100rem",
      [theme.breakpoints.down("1280")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.down("550")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down("350")]: {
        fontSize: "1.4rem",
        lineHeight: "2rem",
      },
    },
    weHireSmall: {
      fontSize: "1.25rem",
      marginTop: "1rem",
      [theme.breakpoints.down("1280")]: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "1.3rem",
        lineHeight: "1.7rem",
      },
      [theme.breakpoints.down("550")]: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
      },
    },
    howToApply: {
      background: "white",
    },
    howToApplyTitle: {
      textAlign: "center",
      fontSize: "4rem",
      fontWeight: "bold",
      padding: "2rem",
      lineHeight: "4.5rem",
      [theme.breakpoints.down("550")]: {
        fontSize: "3rem",
        lineHeight: "3.25rem",
      },
    },
    howToApplyFlex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > div:nth-child(1)": {
        marginRight: "4rem",
      },
      [theme.breakpoints.down("900")]: {
        flexDirection: "column",
        gap: "1rem",
      },
      [theme.breakpoints.down("500")]: {
        "& > div:nth-child(1)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    howToApplyContact: {
      maxWidth: "25rem",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("900")]: {
        textAlign: "center",
        maxWidth: "20rem",
        margin: "1.1rem",
      },
    },
    handshakeImg: {
      width: "30rem",
      opacity: "75%",
      "-moz-opacity": "75%",
      "-khtml-opacity": "75%",
      [theme.breakpoints.down("1000")]: {
        width: "25rem",
        marginLeft: "3rem",
      },
      [theme.breakpoints.down("900")]: {
        marginLeft: 0,
      },
      [theme.breakpoints.down("500")]: {
        width: "75%",
      },
    },
    howToApplyContactTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    howToApplyContactSub: {
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.4rem",
      color: "grey",
      fontWeight: 500,
    },
    mark: {
      display: "inline-block",
      backgroundColor: "rgba(248, 187, 134, 0.5)",
      paddingBottom: "1.9rem",
      lineHeight: 0,
      color: "black",
    },
  })
);
export default function careers() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="Careers | Bikiology"
        description="We hire very often; please keep checking our job board and job postings frequently. We always accept resumes for positions that may become available in the future."
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldCircle2}></div>
          <div className={classes.aboveFoldCircle3}></div>
          <div className={classes.aboveFoldText}>
            <h1 className={classes.aboveFoldHeader}>
              Join Us Today To Build A Better Future
            </h1>
            <h3 className={classes.aboveFoldSub}>Careers</h3>
            <div>
              <ContactButton />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <ExpandMoreIcon className={classes.aboveFoldIcon} />
          </div>
        </div>
        <div className={classes.weHire}>
          <div>
            <div className={classes.weHireLarge}>
              We hire very often; please keep checking our job board and job
              postings frequently. We always accept resumes for positions that
              may become available in the future.
            </div>
            <div className={classes.weHireSmall}>
              We will only contact with the candidates are selected primarily
              for employments.
            </div>
          </div>
        </div>
        <div className={classes.howToApply}>
          <div className={classes.howToApplyTitle}>How To Apply</div>
          <div className={classes.howToApplyFlex}>
            <div>
              <img
                src="/handshake.png"
                alt="handshake"
                className={classes.handshakeImg}
              />
            </div>

            <div className={classes.howToApplyContact}>
              <div>
                <div className={classes.howToApplyContactTitle}>
                  <mark className={classes.mark}>By Email:</mark>
                </div>
                <div className={classes.howToApplyContactSub}>
                  info@bikiology.com
                </div>
              </div>
              <div>
                <div className={classes.howToApplyContactTitle}>
                  <mark className={classes.mark}>By Fax:</mark>
                </div>
                <div className={classes.howToApplyContactSub}>
                  + 1 888 722 0111
                </div>
              </div>
              <div>
                <div className={classes.howToApplyContactTitle}>
                  <mark className={classes.mark}>By Post: </mark>
                </div>
                <div className={classes.howToApplyContactSub}>
                  Bikiology Inc. 10405 Jasper Ave. (Suite # 700-21, Standard
                  Life Building). Edmonton, AB, T5J3S2, Canada.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
