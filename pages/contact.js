import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";
import { Formik } from "formik";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import parsePhoneNumber from "libphonenumber-js";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      background: "white",
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
      [theme.breakpoints.down("1400")]: {
        maxWidth: "35rem",
      },
      [theme.breakpoints.down("1300")]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down("1150")]: {
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("1050")]: {
        display: "none",
      },
    },
    leftPanelText: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      maxWidth: "50rem",
      textAlign: "center",
      marginRight: "1.25rem",
      marginLeft: "1.25rem",
      [theme.breakpoints.down("1400")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        maxWidth: "30rem",
      },
      [theme.breakpoints.down("1150")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        maxWidth: "30rem",
      },
    },
    handshake: {
      width: "20rem",
      marginTop: "2rem",
      [theme.breakpoints.down("1150")]: {
        width: "17.5rem",
        marginBottom: "3.5rem",
      },
    },
    rightPanel: {
      background: "white",
      color: "black",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      paddingTop: "5rem",
      flexDirection: "column",
      [theme.breakpoints.down("1050")]: {
        marginRight: "2rem",
        marginLeft: "2rem",
      },
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
      [theme.breakpoints.down("580")]: {
        flexDirection: "column",
        "& div": {
          minWidth: "20rem",
        },
      },
      [theme.breakpoints.down("380")]: {
        flexDirection: "column",
        "& div": {
          minWidth: "2rem",
        },
      },
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
    margin: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    errorSpan: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      verticalAlign: "middle",
      margin: "0.25rem",
    },
    errorDiv: {
      marginLeft: "-1.5rem",
    },
  })
);
export default function contact() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 1050px)` });

  return (
    <Layout whiteLogo={isMobile ? false : true}>
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
          <div className={classes.margin}>
            <div className={classes.rightPanel}>
              <div className={classes.rightHeader}>Contact</div>
              <div>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    const phoneParse = parsePhoneNumber(values.phone, "CA");
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }

                    if (!values.firstName) {
                      errors.firstName = "Required";
                    }
                    if (!values.lastName) {
                      errors.lastName = "Required";
                    }
                    if (!values.message) {
                      errors.message = "Required";
                    }
                    if (!values.phone) {
                      errors.phone = "Required";
                    } else if (phoneParse === undefined) {
                      errors.phone = "Not Valid Input";
                    } else if (phoneParse.isValid() === false) {
                      errors.phone = "Not Valid Canadian Number";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                  }}
                  className={classes.flexCenter}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <div>
                      <div className={classes.textFieldFlex}>
                        <div>
                          <TextField
                            label="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="firstName"
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
                            error={
                              errors.firstName && touched.firstName
                                ? true
                                : false
                            }
                            helperText={
                              errors.firstName && touched.firstName ? (
                                <div className={classes.errorDiv}>
                                  <span className={classes.errorSpan}>
                                    <ErrorOutlineIcon
                                      className={classes.errorSpan}
                                    />
                                    {errors.firstName}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
                            variant="outlined"
                          />
                        </div>
                        <div>
                          <TextField
                            label="Last Name"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="lastName"
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
                            error={
                              errors.lastName && touched.lastName ? true : false
                            }
                            helperText={
                              errors.lastName && touched.lastName ? (
                                <div className={classes.errorDiv}>
                                  <span className={classes.errorSpan}>
                                    <ErrorOutlineIcon
                                      className={classes.errorSpan}
                                    />
                                    {errors.lastName}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className={classes.textFieldFlex}>
                        <div>
                          <TextField
                            label="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            error={errors.email && touched.email ? true : false}
                            helperText={
                              errors.email && touched.email ? (
                                <div className={classes.errorDiv}>
                                  <span className={classes.errorSpan}>
                                    <ErrorOutlineIcon
                                      className={classes.errorSpan}
                                    />
                                    {errors.email}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
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
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="phone"
                            type="tel"
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
                            error={errors.phone && touched.phone ? true : false}
                            helperText={
                              errors.phone && touched.phone ? (
                                <div className={classes.errorDiv}>
                                  <span className={classes.errorSpan}>
                                    <ErrorOutlineIcon
                                      className={classes.errorSpan}
                                    />
                                    {errors.phone}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
                            variant="outlined"
                          />
                        </div>
                      </div>

                      <div className={classes.textFieldFlex}>
                        <div className={classes.messageContainer}>
                          <TextField
                            fullWidth
                            label="Message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="message"
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
                            error={
                              errors.message && touched.message ? true : false
                            }
                            helperText={
                              errors.message && touched.message ? (
                                <div className={classes.errorDiv}>
                                  <span className={classes.errorSpan}>
                                    <ErrorOutlineIcon
                                      className={classes.errorSpan}
                                    />
                                    {errors.message}
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
                          />
                        </div>
                      </div>
                      
                      <div className={classes.textFieldFlex}>
                        <Button
                          className={classes.button}
                          type="submit"
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
