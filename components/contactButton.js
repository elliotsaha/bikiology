import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#F8BB86",
      padding: "1rem",
      color: "white",
      textTransform: "none",
      fontWeight: "bold",
      fontFamily: "Gilroy, sans-serif",
      "&:hover": {
        background: "#FFB16C",
      },
    },
  })
);
export default function contactButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Get In Touch</Button>;
}
