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
          fontSize: "3rem",
          lineHeight: "3.5rem",
        },
      },
      "& p": {
        fontSize: "1.2rem",
        [theme.breakpoints.down("500")]: {
          fontSize: "1rem",
        },
      },
      "& h3": {
        fontSize: "1.75rem",
        [theme.breakpoints.down("500")]: {
          fontSize: "1.25rem",
        },
      },
      "& ol": {
        fontSize: "1.2rem",
        [theme.breakpoints.down("500")]: {
          fontSize: "1rem",
        },
      },
    },
  })
);
export default function terms() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="Terms & Conditions | Bikiology"
        description="The materials on Bikiology Inc.'s website are provided on an 'as
        is' basis. Bikiology Inc. makes no warranties, expressed or
        implied, and hereby disclaims and negates all other warranties
        including, without limitation, implied warranties or conditions of..."
      />
      <div className={classes.root}>
        <div className={classes.circle1}></div>
        <div className={classes.circle2}></div>

        <div className={classes.content}>
          <div>Bikiology Inc. Terms of Service</div>
          <h3>1. Terms</h3>
          <p>
            By accessing the website at{" "}
            <a href="https://www.bikiology.com">https://www.bikiology.com</a>,
            you are agreeing to be bound by these terms of service, all
            applicable laws and regulations, and agree that you are responsible
            for compliance with any applicable local laws. If you do not agree
            with any of these terms, you are prohibited from using or accessing
            this site. The materials contained in this website are protected by
            applicable copyright and trademark law.
          </p>
          <h3>2. Use License</h3>
          <ol type="a">
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Bikiology Inc.'s website
              for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
              <ol type="i">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on Bikiology Inc.'s website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or "mirror" the
                  materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Bikiology Inc. at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </li>
          </ol>
          <h3>3. Disclaimer</h3>
          <ol type="a">
            <li>
              The materials on Bikiology Inc.'s website are provided on an 'as
              is' basis. Bikiology Inc. makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              Further, Bikiology Inc. does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </li>
          </ol>
          <h3>4. Limitations</h3>
          <p>
            In no event shall Bikiology Inc. or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Bikiology Inc.'s website, even if
            Bikiology Inc. or a Bikiology Inc. authorized representative has
            been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on
            implied warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>
          <h3>5. Accuracy of materials</h3>
          <p>
            The materials appearing on Bikiology Inc.'s website could include
            technical, typographical, or photographic errors. Bikiology Inc.
            does not warrant that any of the materials on its website are
            accurate, complete or current. Bikiology Inc. may make changes to
            the materials contained on its website at any time without notice.
            However Bikiology Inc. does not make any commitment to update the
            materials.
          </p>
          <h3>6. Links</h3>
          <p>
            Bikiology Inc. has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            Bikiology Inc. of the site. Use of any such linked website is at the
            user's own risk.
          </p>
          <h3>7. Modifications</h3>
          <p>
            Bikiology Inc. may revise these terms of service for its website at
            any time without notice. By using this website you are agreeing to
            be bound by the then current version of these terms of service.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Canada and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </Layout>
  );
}
