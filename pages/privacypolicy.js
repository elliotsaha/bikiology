import React from "react";
import Layout from "../components/layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      background: "white",
      minHeight: "100vh",
      position: "realtive",
      zIndex: 1,
    },
    circle1: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      top: "10rem",
      left: "-7.5rem",
      zIndex: 1,
    },
    circle2: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "5rem",
      bottom: "5rem",
      zIndex: 1,
    },
  })
);
export default function privacypolicy() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.circle1}></div>
        <div className={classes.circle2}></div>
        <div>
            hello
        </div>
      </div>
    </Layout>
  );
}
