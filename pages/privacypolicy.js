import React from "react";
import Layout from "../components/layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {NextSeo} from "next-seo"
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      background: "white",
      position: "realtive",
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    circle1: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      "-moz-opacity": "10%",
      "-khtml-opacity": "10%",
      top: "10rem",
      left: "-7.5rem",
      zIndex: 1,
      [theme.breakpoints.down("800")]: {
        width: "16rem",
        height: "16rem",
      },
    },
    circle2: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      "-moz-opacity": "10%",
      "-khtml-opacity": "10%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "5rem",
      bottom: "5rem",
      zIndex: 1,
      [theme.breakpoints.down("800")]: {
        right: "-5rem",
        width: "16rem",
        height: "16rem",
      },
      [theme.breakpoints.down("500")]: {
        opacity: "5%",
        "-moz-opacity": "5%",
        "-khtml-opacity": "5%",
      },
    },
    content: {
      maxWidth: "70rem",
      marginTop: "10rem",
      marginBottom: "10rem",
      marginLeft: "3.5rem",
      marginRight: "3.5rem",
      "& a": {
        color: "#03a9f4",
        fontWeight: "bold",
      },
      "& div": {
        fontSize: "6rem",
        lineHeight: "6rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        [theme.breakpoints.down("500")]: {
          fontSize: "4rem",
          lineHeight: "4.5rem",
        },
      },
      "& p": {
        fontSize: "1.2rem",
        [theme.breakpoints.down("500")]: {
          fontSize: "1rem",
        },
      },
    },
  })
);
export default function privacypolicy() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="Privacy Policy | Bikiology"
        description="Your privacy is important to us. It is Bikiology Inc.'s policy to respect your privacy regarding any information we may collect from you across our website..."
      />
      <div className={classes.root}>
        <div className={classes.circle1}></div>
        <div className={classes.circle2}></div>

        <div className={classes.content}>
          <div>Privacy Policy</div>
          <p>
            Your privacy is important to us. It is Bikiology Inc.'s policy to
            respect your privacy regarding any information we may collect from
            you across our website,{" "}
            <a href="https://www.bikiology.com">https://www.bikiology.com</a>,
            and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <p>This policy is effective as of 6 January 2021.</p>
        </div>
      </div>
    </Layout>
  );
}
