import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "60px",
      backgroundColor: "#406370",
    },
    title: {
      textAlign: "center",
      color: "white",

      fontFamily: "BlinkMacSystemFont",
    },
  })
);
interface DividerProps {
  title: string;
}
const PageDivider = (props: DividerProps) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <div className={classes.root}>
      {" "}
      <Typography className={classes.title} variant="h4" component="h1">
        {title}
      </Typography>
    </div>
  );
};
export default PageDivider;
