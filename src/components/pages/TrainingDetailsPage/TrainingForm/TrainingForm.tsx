import React, {useState} from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {Controller, useForm} from 'react-hook-form'
import InputMask from 'react-input-mask'
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core'
import {KeyboardDatePicker} from '@material-ui/pickers'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {DateFormat, DateFormatDot} from '../../../constants/DateFormats'
import {format, isValid} from 'date-fns'

import useAxios from 'axios-hooks'
import {useParams} from 'react-router'
import {Alert} from '@material-ui/lab'

interface IFormInput {
  city: string
  country: string
  englishLevel: string
  email: string
  faculty: string
  firstName: string
  graduationDate: string
  institution: string
  lastName: string
  mainSkill: string
  otherSkills: string
  phone: string
  skype: string
  speciality: string
}
interface ID {
  id: any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderStyle: 'solid',
      borderWidth: 5,
      borderColor: '#1e5a70',
    },
    subTitle: {
      marginTop: '2%',
      textAlign: 'center',
      fontFamily: 'BlinkMacSystemFont',
      color: '#406370',
    },
    form: {
      padding: '5% ',
    },
    button: {
      width: '50%',
      backgroundColor: '#1e5a70',
      color: 'white',
      '&:hover': {
        backgroundColor: '#173c4a',
      },
    },
  })
)
const TrainingForm = () => {
  const {id} = useParams<ID>()
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const [{data: formData, loading, error: formError}, executePost] = useAxios(
    {
      url: `/candidate`,
      method: 'POST',
    },
    {manual: true}
  )
  const [englevel, setEnglevel] = React.useState('')

  const handleChange = (event: any) => {
    setEnglevel(event.target.value)
  }
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const {
    getValues,
    register,
    control,
    handleSubmit,
    errors,
  } = useForm<IFormInput>()

  const onSubmit = (formData: IFormInput, e: any) => {
    executePost({
      data: {
        ...formData,
      },
    }),
      e.target.reset()
  }

  return (
    <div
      style={matches ? {margin: '5% 15% 2% 15%'} : {margin: '5% 1% 2% 1%'}}
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
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.firstName && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Lastname"
              name="lastName"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.lastName && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Patronymic"
              name="patronymic"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.patronymic && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              type="email"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.email && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask mask="+999999999999">
              {() => (
                <TextField
                  fullWidth
                  name="phone"
                  inputRef={register({required: true})}
                  id="outlined"
                  label={'PhoneNumber'}
                  variant="outlined"
                />
              )}
            </InputMask>

            {errors.phone && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Skype"
              name="skype"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.skype && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Country"
              name="country"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.country && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="City"
              name="city"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.city && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Speciality"
              name="speciality"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.speciality && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              id="outlined-basic"
              label="English Level"
              name="englishLevel"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            /> */}

            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                English Level
              </InputLabel>
              <Controller
                as={
                  <Select
                    fullWidth
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={englevel}
                    // onChange={handleChange}
                    label="English Level"
                  >
                    <MenuItem value="ELEMENTARY">Elementary</MenuItem>
                    <MenuItem value="INTERMIDATE">Intermidate</MenuItem>
                    <MenuItem value="ADVANCED">Advanced</MenuItem>
                  </Select>
                }
                name="englishLevel"
                control={control}
                rules={{required: true}}
                // onChange={([selected]) => selected}
              />
            </FormControl>
            {errors.englishLevel && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Institution"
              name="institution"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />

            {errors.institution && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="faculty"
              name="faculty"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.faculty && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              as={KeyboardDatePicker}
              name="graduationDate"
              control={control}
              label={'Graduation Date'}
              clearable
              fullWidth
              defaultValue={
                getValues('graduationDate')
                  ? new Date(getValues('graduationDate') || '')
                  : null
              }
              value={null}
              inputVariant="outlined"
              format={DateFormatDot}
              onChange={(date: any) =>
                date && isValid(date) ? format(date, DateFormat) : null
              }
              rules={{required: true}}
            />
            {errors.graduationDate && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="mainSkill"
              name="mainSkill"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.mainSkill && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="otherSkills"
              name="otherSkills"
              inputRef={register({required: true})}
              variant="outlined"
              fullWidth
            />
            {errors.otherSkills && (
              <Typography component="span" color="error">
                Please fill the form
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} container alignItems="center" justify="center">
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {formError && handleClick()}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Something went wrong Please try again!</Alert>
      </Snackbar>
    </div>
  )
}

export default TrainingForm
