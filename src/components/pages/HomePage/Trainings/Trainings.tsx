import React, {useState} from 'react'

import {
  Button,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import useAxios from 'axios-hooks'
import {IEventDto} from '../../../../models/IEventsDto'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '5% 10%',

      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      backgroundColor: '#8ad6f2',

      // height: '250px',
    },
    title: {
      textAlign: 'center',
      color: '#1e5a70',
      paddingTop: '5%',
      marginBottom: '5%',
      fontFamily: 'BlinkMacSystemFont',
    },
    subTitle: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'BlinkMacSystemFont',
    },

    button: {
      backgroundColor: '#1e5a70',
      marginBottom: '10px',
      color: 'white',
      width: '50%',
      borderRadius: '50px',
    },
  })
)

const Trainings = () => {
  const classes = useStyles()

  const [{data, loading, error}, refetch] = useAxios('/event/all')
  console.log('data', data)
  const [inputValue, setInputValue] = useState<IEventDto>({})
  if (loading) return <p>loading...</p>
  if (error) return <p>Error!</p>

  const countryOptions = [
    ...new Set<string>(
      data && data.content.map((country: IEventDto) => country.country)
    ),
  ]
  const nameOptions = [
    ...new Set<string>(
      data && data.content.map((name: IEventDto) => name.eventType?.name)
    ),
  ]
  const handleChange = (event: any) => {
    if (event.target?.name === 'name') {
      setInputValue((s) => ({
        ...s,
        eventType: {...s.eventType, name: event.target.value},
      }))
    } else {
      setInputValue((s: any) => ({
        ...s,
        [`${event.target.name}`]: event.target.value,
      }))
    }
  }
  const inputRef1 = React.createRef()
  const inputRef2 = React.createRef()
  const selects = [
    {
      name: 'country',
      ref: inputRef1,
      onChange: handleChange,
      items: countryOptions.map((country) => (
        <MenuItem value={country} key={country}>
          {country}
        </MenuItem>
      )),
      value: inputValue.country,
    },
    {
      name: 'name',
      ref: inputRef2,
      onChange: handleChange,
      items: nameOptions.map((name) => (
        <MenuItem value={name} key={name}>
          {name}
        </MenuItem>
      )),
      value: inputValue.eventType?.name,
    },
  ]

  console.log('inputValue', inputValue)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {selects.map((item) => (
              <Grid key={item.name} item xs={4}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item.value}
                    name={item.name}
                    ref={item.ref}
                    onChange={item.onChange}
                  >
                    {item.items}
                  </Select>
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {data &&
          data.content
            .filter(
              (detail: IEventDto) =>
                (inputValue.eventType?.name
                  ? detail.eventType?.name === inputValue.eventType?.name
                  : true) &&
                (inputValue.country
                  ? detail.country === inputValue.country
                  : true)
              //   &&
              // detail.eventTab === 'IN_PROGRESS'
            )
            .map((detail: IEventDto) => {
              return (
                <Grid key={detail.id} item xs={12} sm={4}>
                  <Paper className={classes.paper}>
                    <Typography
                      className={classes.title}
                      variant="h5"
                      component="h1"
                    >
                      {detail.eventType?.name}
                    </Typography>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                      <li>
                        <Typography
                          className={classes.subTitle}
                          variant="subtitle1"
                          component="h1"
                        >
                          {detail.country ? detail.country : 'somewhere '}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          className={classes.subTitle}
                          variant="subtitle1"
                          component="h1"
                        >
                          Start: {detail.startDate}
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          className={classes.subTitle}
                          variant="subtitle1"
                          component="h1"
                        >
                          Duration: {detail.duration}
                        </Typography>
                      </li>
                    </ul>

                    <Button
                      className={classes.button}
                      href={`/details/${detail.id}`}
                    >
                      Register
                    </Button>
                  </Paper>
                </Grid>
              )
            })}
      </Grid>
    </div>
  )
}

export default Trainings
