import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DateFormat, DateFormatDot } from "../../constants/DateFormats";
import { format, isValid } from "date-fns";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  skype: string;
  country: string;
  city: string;
  technology: string;
  engLevel: string;
  degree: string;
  graduationDate: Date;
  experience: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderStyle: "solid",
      borderWidth: 5,
      borderColor: "#1e5a70",
    },
    subTitle: {
      marginTop: "2%",
      textAlign: "center",
      fontFamily: "BlinkMacSystemFont",
      color: "#406370",
    },
    form: {
      padding: "5% ",
    },
  })
);
const TrainingForm = () => {
  const {
    getValues,
    register,
    control,
    handleSubmit,
    errors,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    // console.log(data);

    fetch("http://localhost:8085/api/candidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(response => {
      console.log(response);
    })
  };

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      style={matches ? { margin: "5% 15% 2% 15%" } : { margin: "5% 1% 2% 1%" }}
      className={classes.root}
    >
      <Typography className={classes.subTitle} variant="h4" component="h1">
        Specific Event
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid className={classes.form} container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Firstname"
              name="firstName"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.firstName && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Lastname"
              name="lastName"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.lastName && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.email && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Skype"
              name="skype"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.skype && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Country"
              name="country"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.country && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="City"
              name="city"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.city && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Technology"
              name="technology"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.technology && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="English Level"
              name="engLevel"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.engLevel && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Degree"
              name="degree"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.degree && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Controller
              as={KeyboardDatePicker}
              name="graduationDate"
              control={control}
              margin="normal"
              label="graduationDate"
              clearable
              fullWidth
              defaultValue={
                getValues("graduationDate")
                  ? new Date(getValues("graduationDate") || "")
                  : null
              }
              value={null}
              inputVariant="outlined"
              format={DateFormatDot}
              onChange={([date]: [date: any]) =>
                date && isValid(date) ? format(date, DateFormat) : null
              }
              rules={{ required: true }}
            />

            {errors.graduationDate && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Work Experience"
              name="experience"
              inputRef={register({ required: true })}
              variant="outlined"
              fullWidth
            />
            {errors.experience && (
              <Typography component="span" color="error">
                {"Please fill the form"}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default TrainingForm;
