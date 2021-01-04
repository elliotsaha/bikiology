import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
    },
    inner: {
      display: "flex",
      minHeight: "100vh",
    },
    leftPanel: {
      background: "black",
      color: "white",
      minHeight: "100%",
      width: "100%",
      maxWidth: "50rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "7.5rem",
      borderBottomRightRadius: "0.25rem",
    },
    leftPanelText: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      maxWidth: "50rem",
      textAlign: "center",
    },
    handshake: {
      width: "20rem",
      marginTop: "2rem",
    },
    rightPanel: {
      background: "white",
      color: "black",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "5rem",
    },
    rightHeader: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
    },
    input: {},
    textFieldFlex: {
      display: "flex",
      gap: "1.25rem",
      marginBottom: "1.5rem",
      width: "100%",
    },
    messageContainer: {
      width: "100%",
    },
    button: {
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
export default function contact() {
  const classes = useStyles();
  return (
    <Layout whiteLogo={true}>
      <div className={classes.root}>
        <div className={classes.inner}>
          <div className={classes.leftPanel}>
            <div className={classes.leftPanelText}>
              Bikiology Is Dedicated to Creating a Better Future for Everyone.
            </div>
            <div>
              <img
                src="/handshake.png"
                alt="handshake"
                className={classes.handshake}
              />
            </div>
          </div>
          <div className={classes.rightPanel}>
            <div>
              <div className={classes.rightHeader}>Contact</div>
              <div className={classes.textFieldFlex}>
                <div>
                  <TextField
                    label="First Name"
                    InputProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    label="Last Name"
                    InputProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    variant="outlined"
                  />
                </div>
              </div>
              <div className={classes.textFieldFlex}>
                <div>
                  <TextField
                    label="Email Address"
                    InputProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    label="Phone Number"
                    InputProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    variant="outlined"
                  />
                </div>
              </div>

              <div className={classes.textFieldFlex}>
                <div className={classes.messageContainer}>
                  <TextField
                    fullWidth
                    label="Message"
                    InputProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: "bold",
                      },
                    }}
                    variant="outlined"
                    rows="8"
                    multiline
                  />
                </div>
              </div>
              <div className={classes.textFieldFlex}>
                <Button className={classes.button}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
