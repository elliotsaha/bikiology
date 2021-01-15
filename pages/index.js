import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import products from "../components/products.json";
import addOn from "../components/addOnProducts.json";
import Link from "next/link";
import ContactButton from "../components/contactButton";

import { NextSeo } from "next-seo";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      overflow: "hidden",
    },
    aboveFold: {
      display: "flex",
      justifyItems: "center",
      alignContent: "center",
      height: "100vh",
      background: "white",
      position: "relative",
      color: "black",
      overflow: "hidden",
    },
    header: {
      fontSize: "7.5rem",
      lineHeight: "8rem",
      fontWeight: "bold",
      textAlign: "center",
      maxWidth: "90rem",
      [theme.breakpoints.down("1550")]: {
        fontSize: "5.5rem",
        lineHeight: "6rem",
        maxWidth: "70rem",
      },
      [theme.breakpoints.down("1050")]: {
        fontSize: "4.5rem",
        lineHeight: "5rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("800")]: {
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
    paragraph: {
      fontSize: "1.1rem",
      textAlign: "center",
      maxWidth: "50rem",
      fontWeight: 600,
      color: "grey",
      [theme.breakpoints.down("950")]: {
        fontSize: "0.95rem",
        marginRight: "3rem",
        marginLeft: "3rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "0.9rem",
        marginRight: "3rem",
        marginLeft: "3rem",
      },
    },
    aboveFoldTextBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      zIndex: 2,
    },
    aboveFoldIcon: {
      fontSize: "3.2rem",
      color: "black",
    },
    aboveFoldTextBoxInner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    aboveFoldIconContainer: {
      zIndex: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    aboveFoldGlobe: {
      position: "absolute",
      "-moz-opacity": "15%",
      "-khtml-opacity": "15%",
      opacity: "15%",
      fontSize: "65rem",
      color: "#F8BB86",
      right: 0,
      [theme.breakpoints.down("1680")]: {
        right: "-5rem",
      },
      [theme.breakpoints.down("1380")]: {
        right: "-15rem",
        fontSize: "55rem",
      },
      [theme.breakpoints.down("900")]: {
        right: "-20rem",
        fontSize: "40rem",
      },
    },
    expandMoreContainer: {
      position: "absolute",
      bottom: "1rem",
      "& > *": {
        fontSize: "1.75rem",
      },
    },
    belowFold: {
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5rem",
      width: "100%",
      position: "relative",
      [theme.breakpoints.down("920")]: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: "2rem",
        paddingBottom: "2rem",
      },
    },
    belowFoldTextContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },
    belowFoldImage: {
      width: "30rem",
      height: "50rem",
      margin: 0,
      opacity: "75%",
      "-moz-opacity": "75%",
      "-khtml-opacity": "75%",
      marginRight: "20rem",
      objectFit: "cover",
      [theme.breakpoints.down("1050")]: {
        width: "25rem",
        height: "42rem",
      },
      [theme.breakpoints.down("800")]: {
        width: "20rem",
        height: "37rem",
        marginRight: "15rem",
      },
      [theme.breakpoints.down("700")]: {
        marginLeft: 0,
        width: "20.5rem",
        borderRadius: "0 0.5rem 0.5rem 0",
      },
      [theme.breakpoints.down("600")]: {
        width: "16.5rem",
        height: "33rem",
      },
      [theme.breakpoints.down("435")]: {
        width: "13.5rem",
        marginTop: "3rem",
        marginBottom: "3rem",
        height: "30rem",
      },
      [theme.breakpoints.down("340")]: {
        width: "11.5rem",
        height: "27rem",
      },
    },
    belowFoldImageContainer: {
      [theme.breakpoints.down("700")]: {
        marginLeft: 0,
        width: "100%",
      },
    },
    belowFoldText: {
      marginLeft: "15rem",
      maxWidth: "40rem",
      color: "white",
      fontWeight: "bold",
      fontSize: "3.5rem",
      lineHeight: "4.25rem",
      position: "absolute",
      [theme.breakpoints.down("1050")]: {
        marginLeft: "10rem",
        fontSize: "3rem",
        lineHeight: "3.5rem",
        maxWidth: "30rem",
        marginRight: "3rem",
      },
      [theme.breakpoints.down("800")]: {
        marginLeft: "6rem",
        fontSize: "2.5rem",
        lineHeight: "3rem",
        maxWidth: "25rem",
        marginRight: "3rem",
      },
      [theme.breakpoints.down("700")]: {
        marginLeft: "5rem",
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("600")]: {
        marginLeft: "4rem",
        fontSize: "2rem",
        lineHeight: "2.5rem",
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("435")]: {
        marginLeft: "2rem",
        fontSize: "1.75rem",
        lineHeight: "2.25rem",
        marginRight: "1rem",
      },
      [theme.breakpoints.down("340")]: {
        marginLeft: "1rem",
        fontSize: "1.75rem",
        lineHeight: "2.25rem",
        marginRight: "0.75rem",
      },
    },
    offerInner: {
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
      height: "100%",
      marginTop: "auto",
      marginBottom: "auto",
    },
    offerTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      lineHeight: "2.5rem",
      color: "#525252",
    },
    offerText: {
      color: "grey",
      fontWeight: 600,
      fontSize: "1.1rem",
      marginTop: "0.8rem",
      marginLeft: "0.2rem",
      maxWidth: "30rem",
    },
    offerOuter: {
      display: "flex",
      flexDirection: "column",
      marginRight: "2.5rem",
      marginLeft: "2.5rem",
    },
    offerRoot: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "8.5rem",
      marginBottom: "8.5rem",
      "& > div": {
        marginLeft: "3rem",
        marginRight: "3rem",
      },
      overflow: "hidden",
      zIndex: 2,
      [theme.breakpoints.down("1440")]: {
        "& > div": {
          marginLeft: "5rem",
          marginRight: "5rem",
        },
      },
      [theme.breakpoints.down("1100")]: {
        "& > div": {
          marginLeft: "2rem",
          marginRight: "2rem",
        },
      },
      [theme.breakpoints.down("950")]: {
        justifyContent: "center",
        flexDirection: "column",
        "& > div": {
          marginTop: "2rem",
          marginBottom: "2rem",
        },
      },
    },
    offerCircle: {
      position: "absolute",
      width: "25rem",
      height: "25rem",
      background: "#F8BB86",
      opacity: "25%",
      "-moz-opacity": "25%",
      "-khtml-opacity": "25%",
      borderRadius: "50%",
      bottom: "-5rem",
      left: "-5rem",
      zIndex: -1,
    },
    offerOutline: {
      position: "absolute",
      width: "20rem",
      height: "20rem",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      opacity: "25%",
      "-moz-opacity": "25%",
      "-khtml-opacity": "25%",
      borderRadius: "50%",
      top: "-5rem",
      right: "-5rem",
      zIndex: -1,
    },
    offer: {
      overflow: "hidden",
      position: "relative",
    },
    servicesRoot: {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "2.5rem",
      flexDirection: "column",
    },
    servicesHeader: {
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
    servicesSub: {
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
    servicesGrid: {
      display: "grid",
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
    servicesGridChild: {
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
          "-moz-opacity": "55%",
          "-khtml-opacity": "55%",
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
        "-moz-opacity": "0%",
        "-khtml-opacity": "0%",
        [theme.breakpoints.down("750")]: {
          display: "block",
          "-moz-opacity": "100%",
          "-khtml-opacity": "100%",
          opacity: "100%",
        },
      },
      "&:hover": {
        "& img": {
          "-moz-opacity": "50%",
          "-khtml-opacity": "50%",
          opacity: "50%",
          transition: "all 0.4s ease",
        },
        "& div": {
          display: "block",
          transition: "all 0.4s ease",
          "-moz-opacity": "100%",
          "-khtml-opacity": "100%",
          opacity: "100%",
        },
      },
    },
    servicesButton: {
      color: "black",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      backgroundColor: "white",
      padding: "1rem",
      "&:hover": {
        background: "white",
      },
    },
  })
);
export default function index() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="Bikiology Inc."
        description="We are committed to maximizing value by sustainably
        developing our product & services to our clients all over the world."
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldTextBox}>
            <div className={classes.aboveFoldTextBoxInner}>
              <div className={classes.header}>
                Your One Stop Export Import Source.
              </div>
              <p className={classes.paragraph}>
                We are a Canadian integrated Export-Import Company headquartered
                in Alberta-Canada, committed to maximizing value by sustainably
                developing our product & services to our clients all over the
                world.
              </p>
              <div>
                <ContactButton />
              </div>
            </div>
            <div className={classes.expandMoreContainer}>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <PublicIcon className={classes.aboveFoldGlobe} />
          </div>
        </div>
        <div className={classes.belowFold}>
          <div className={classes.belowFoldTextContainer}>
            <div className={classes.belowFoldImageContainer}>
              <img
                src="/buildingRender.JPG"
                alt="building"
                className={classes.belowFoldImage}
              />
            </div>
            <div className={classes.belowFoldText}>
              We Are a Growing Company and Passionate To Reach Our Goals
            </div>
          </div>
        </div>
        <div className={classes.offer}>
          <div className={classes.offerCircle}></div>
          <div className={classes.offerOutline}></div>
          <div className={classes.offerRoot}>
            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <DataUsageIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Goods</div>
                </div>
                <div className={classes.offerText}>
                  Bikiology Strives at Giving Customers The Best Quality of
                  Products and Nothing Less.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <LocalAtmIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Services</div>
                </div>
                <div className={classes.offerText}>
                  The Services that Our Company Provides are Top of the Line and
                  Will Help your Business Grow Exponentially.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <AccountBalanceIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Prices</div>
                </div>
                <div className={classes.offerText}>
                  Bikiology Gives the Best Prices in Canada For The Services and
                  Products that We Provide.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.servicesRoot}>
          <div className={classes.servicesHeader}>The Products We Provide</div>
          <div className={classes.servicesSub}>But Not Limited To</div>
          <div className={classes.servicesGrid}>
            {products.slice(0, 6).map((i) => {
              return (
                <div className={classes.servicesGridChild}>
                  <img src={i.img} alt={i.name} />
                  <div>{i.name}</div>
                </div>
              );
            })}
            {addOn.slice(0, 6).map((i) => {
              return (
                <div className={classes.servicesGridChild}>
                  <img src={i.img} alt={i.name} />
                  <div>{i.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <Link href="/products-and-services">
              <Button className={classes.servicesButton}>
                See All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
