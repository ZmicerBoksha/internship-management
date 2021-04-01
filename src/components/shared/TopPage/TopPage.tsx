import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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
    subTitle: {
      maxWidth: 400,
      marginTop: theme.spacing(5),
      margin: "auto",
      fontFamily: "BlinkMacSystemFont",
      color: "#406370",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {
      maxWidth: 400,
      marginTop: theme.spacing(2),
      margin: "auto",
      fontFamily: "BlinkMacSystemFont",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
interface TopPageProps {
  title: string;
  subTitle: string;
  info: string;
  imageUrl: any;
}
const TopPage = (props: TopPageProps) => {
  const classes = useStyles();
  const { title, subTitle, info, imageUrl } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2" component="h1">
        {title}
      </Typography>

      <Grid container>
        <Grid item xs={5}>
          <Typography className={classes.subTitle} variant="h3" component="h1">
            {subTitle}
          </Typography>
          <Typography className={classes.info} variant="h6" gutterBottom>
            {info}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <img
            alt="banner"
            src={imageUrl}
            width="100%"
            style={{ objectFit: "contain", height: "max-content" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default TopPage;
