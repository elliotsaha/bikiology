import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import products from "../components/products.json";
import Link from "next/link";
import ContactButton from "../components/contactButton"
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
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
    },
    paragraph: {
      fontSize: "1.1rem",
      textAlign: "center",
      maxWidth: "50rem",
      fontWeight: 600,
      color: "grey",
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
      opacity: "15%",
      fontSize: "65rem",
      color: "#F8BB86",
      right: 0,
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
      paddingLeft: "20rem",
    },
    belowFoldTextContainer: {
      position: "relative",
      paddingRight: "20rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    belowFoldImage: {
      width: "30rem",
      margin: 0,
      opacity: "60%",
      marginRight: "20rem",
    },
    belowFoldText: {
      marginLeft: "25rem",
      color: "white",
      fontWeight: "bold",
      fontSize: "3.5rem",
      lineHeight: "4.25rem",
      position: "absolute",
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
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    offerRoot: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "8.5rem",
      marginBottom: "8.5rem",
      gap: "10rem",
      overflow: "hidden",
      zIndex: 2,
    },
    offerCircle: {
      position: "absolute",
      width: "25rem",
      height: "25rem",
      background: "#F8BB86",
      opacity: "25%",
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
      marginBottom: "-0.5rem",
    },
    servicesSub: {
      fontWeight: "bold",
      marginBottom: "1.2rem",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "0.35rem",
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      marginBottom: "2rem",
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
      },
      "& div": {
        position: "absolute",
        fontWeight: "bold",
        fontSize: "1.25rem",
        margin: "0.5rem",
        display: "none",
        transition: "all 0.4s ease",
        opacity: "0%",
      },
      "&:hover": {
        "& img": {
          opacity: "50%",
          transition: "all 0.4s ease",
        },
        "& div": {
          display: "block",
          transition: "all 0.4s ease",
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
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldTextBox}>
            <div className={classes.aboveFoldTextBoxInner}>
              <div className={classes.header}>
                Your One Stop Export Import Solution.
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
            <div>
              <img
                src="/building.png"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <LocalAtmIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Market Price</div>
                </div>
                <div className={classes.offerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <AccountBalanceIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Services</div>
                </div>
                <div className={classes.offerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris turpis, semper quis ultricies sed.
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
