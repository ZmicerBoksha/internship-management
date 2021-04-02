import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TopPage from "../shared/TopPage";
import banner2 from "../../assets/images/secondbg.png";
import PageDivider from "../shared/PageDivider";
import TrainingDetails from "./TrainingDetails/TrainingDetails";
import TrainingForm from "./TrainingForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
  })
);
const TrainingDetailsPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <TopPage
          title="JavaScript Internship"
          subTitle="Start NOW"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={banner2}
        />
      </div>
      <div>
        <PageDivider title="Training Details" />
        <TrainingDetails />

        <TrainingForm />
      </div>
    </>
  );
};

export default TrainingDetailsPage;
