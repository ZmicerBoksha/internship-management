import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "10%",
      flexGrow: 1,
    },
    paper: {
      textAlign: "center",
      backgroundColor: "#8ad6f2",
      height: "300px",
    },
    title: {
      textAlign: "center",
      color: "#1e5a70",
      paddingTop: "5%",
      marginBottom: "5%",
      fontFamily: "BlinkMacSystemFont",
    },
    subTitle: {
      textAlign: "center",
      color: "white",
      fontFamily: "BlinkMacSystemFont",
    },
  })
);

const Trainings = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5" component="h1">
              Front-End Developer
            </Typography>
            <ul>
              <li>
                <Typography
                  className={classes.subTitle}
                  variant="subtitle1"
                  component="h1"
                >
                  asdfasdf
                </Typography>
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5" component="h1">
              asdfasdf
            </Typography>
            <ul>
              <li>
                <Typography
                  className={classes.subTitle}
                  variant="subtitle1"
                  component="h1"
                >
                  asdfasdf
                </Typography>
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5" component="h1">
              asdfasdf
            </Typography>
            <ul>
              <li>
                <Typography
                  className={classes.subTitle}
                  variant="subtitle1"
                  component="h1"
                >
                  asdfasdf
                </Typography>
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Trainings;
