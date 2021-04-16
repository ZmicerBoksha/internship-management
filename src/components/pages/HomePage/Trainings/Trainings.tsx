import React from 'react'
import {Button, Grid, Link, Paper, Typography} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import useAxios from 'axios-hooks'
import {useParams} from 'react-router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10%',
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      backgroundColor: '#8ad6f2',
      // height: '300px',
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

      color: 'white',
      width: '50%',
      borderRadius: '50px',
      marginBottom: '10px',
    },
  })
)
interface DetailType {
  title: string
  evLocation: string
  evStartDate: string
  evDuration: string
  evId: number
  email: string
  first_name: string
  last_name: string
  eventType: {evtName: string}
}
interface IData {
  data: DetailType[]
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
  const classes = useStyles()
  const [{data, loading, error}, refetch] = useAxios('/event/all')
  console.log(data)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data &&
          data.content.map((detail: DetailType) => {
            return (
              <Grid key={detail.evId} item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Typography
                    className={classes.title}
                    variant="h5"
                    component="h1"
                  >
                    {detail.eventType.evtName}
                  </Typography>
                  <ul style={{listStyleType: 'none', padding: 0}}>
                    <li>
                      <Typography
                        className={classes.subTitle}
                        variant="subtitle1"
                        component="h1"
                      >
                        {detail.evLocation}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        className={classes.subTitle}
                        variant="subtitle1"
                        component="h1"
                      >
                        Start: {detail.evStartDate}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        className={classes.subTitle}
                        variant="subtitle1"
                        component="h1"
                      >
                        Duration: {detail.evDuration}
                      </Typography>
                    </li>
                  </ul>
                  <Button
                    className={classes.button}
                    href={`/details/${detail.evId}`}
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
