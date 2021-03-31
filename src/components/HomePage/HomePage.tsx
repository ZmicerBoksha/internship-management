import React from "react";
import Navbar from "../shared/Navbar";
import TopPage from "../shared/TopPage";
import PageDivider from "../shared/PageDivider";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { classNamesFunction } from "@uifabric/utilities";
import Trainings from "./Trainings";
import banner from "../../assets/images/homebg.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
  })
);
const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <TopPage
          title="Choose a Traning that suits you best!"
          subTitle="Recruitment for JavaScript Internship"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={banner}
        />
      </div>

      <div>
        <PageDivider title="Trainings" />
        <Trainings />
      </div>
    </>
  );
};

export default HomePage;
