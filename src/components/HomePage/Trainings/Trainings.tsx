import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";

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
interface DetailType {
  title: string;
  location: string;
  startDate: string;
  duration: number;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
interface IData {
  data: DetailType[];
}
// const myData: IData = {
//   data: [
//     {
//       title: "Front",
//       location: "Tashkent",
//       startDate: "12/12/12",
//       duration: 2,
//       id: 1,
//     },
//     {
//       title: "Back",
//       location: "Moskov",
//       startDate: "12/12/12",
//       duration: 2,
//       id: 2,
//     },
//     {
//       title: "Front",
//       location: "Minsk",
//       startDate: "12/12/12",
//       duration: 2,
//       id: 3,
//     },
//   ],
// };
const Trainings = () => {
  const classes = useStyles();
  const [{ data, loading, error }, refetch] = useAxios("/users");

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data &&
          data.data.map((detail: DetailType) => {
            console.log("aaaaaaaaaaaaaaaaa" + data);
            return (
              <Grid key={detail.id} item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Typography
                    className={classes.title}
                    variant="h5"
                    component="h1"
                  >
                    {detail.first_name}
                  </Typography>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <Typography
                        className={classes.subTitle}
                        variant="subtitle1"
                        component="h1"
                      >
                        {detail.last_name}
                      </Typography>
                    </li>
                  </ul>
                  <Button href={"/details"}>Register</Button>
                </Paper>
              </Grid>
            );
          })}

        {/* <Grid item xs={12} sm={4}>
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
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Trainings;
