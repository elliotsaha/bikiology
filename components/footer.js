import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "white",
    },
    outer: {
      background: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.1rem",
      display: "flex",
      justifyContent: "center",
      gap: "5.5rem",
      padding: "3rem",
      [theme.breakpoints.down("1445")]: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "1rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("810")]: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1rem",
        maxWidth: "55rem",
      },
    },
    logoRoot: {
      maxWidth: "6rem",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: "0.5rem",
    },
    logo: {
      width: "6rem",
    },
    year: {
      textAlign: "center",
      marginRight: "0.8rem",
      fontWeight: "bolder",
    },
    section: {
      marginTop: "2rem",
    },
    header: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    link: {
      color: "grey",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    socialImg: {
      width: "3rem",
      marginRight: "0.5rem",
    },
    gdpr: {
      background: "#FFB16C",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      padding: "0.5rem",
      borderRadius: "0.4rem",
      paddingRight: "1.25rem",
      maxWidth: "12rem",
    },
    gdprImg: {
      width: "5rem",
      borderRadius: "0.4rem",
      margin: 0,
      marginBottom: "-0.5rem",
    },
    gdprTitle: {
      fontWeight: "bold",
      color: "white",
      fontSize: "1.2rem",
    },
    gdprSub: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "white",
    },
  })
);
export default function footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.outer}>
        <div className={classes.logoRoot}>
          <div className={classes.logoContainer}>
            <img src="/shortLogo.svg" alt="logo" className={classes.logo} />
          </div>
          <div className={classes.year}>&copy; {new Date().getFullYear()}</div>
        </div>{" "}
        <div className={classes.section}>
          <div className={classes.header}>Further Information</div>
          <div className={classes.link}>Terms & Conditions</div>
          <div className={classes.link}>Privacy Policy</div>
        </div>
        <div className={classes.section}>
          <div className={classes.header}>Company</div>
          <div className={classes.link}>About Us</div>
          <div className={classes.link}>Careers</div>
          <div className={classes.link}>Contact Us</div>
        </div>{" "}
        <div className={classes.section}>
          <div className={classes.header}>Customers</div>
          <div className={classes.link}>Products & Services</div>
        </div>
        <div className={classes.section}>
          <div className={classes.header}>Follow Us</div>
          <div>
            <img
              src="/socials/facebook.svg"
              alt="facebook"
              className={classes.socialImg}
            />
            <img
              src="/socials/instagram.svg"
              alt="instagram"
              className={classes.socialImg}
            />
            <img
              src="/socials/linkedin.svg"
              alt="linkedin"
              className={classes.socialImg}
            />
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.gdpr}>
            <div>
              <img
                src="/socials/gdpr.png"
                alt="gdpr"
                className={classes.gdprImg}
              />
            </div>
            <div>
              <div className={classes.gdprTitle}>GDPR</div>
              <div className={classes.gdprSub}>Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
