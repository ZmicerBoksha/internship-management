import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { themeRulesStandardCreator } from "office-ui-fabric-react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    title: {
      maxWidth: 800,
      textAlign: "center",
      color: "#406370",
      marginTop: theme.spacing(5),
      margin: "auto",
      fontFamily: "BlinkMacSystemFont",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
const TopPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2" component="h1">
        Choose a Training that suits you best!
      </Typography>

      <Grid container>
        <Grid item xs={5}>
          <Typography className={classes.title} variant="h4" component="h1">
            Choose a Training that suits you best!
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <>
            <img src="images/homebg.png" />
          </>
        </Grid>
      </Grid>
    </div>
  );
};
export default TopPage;
