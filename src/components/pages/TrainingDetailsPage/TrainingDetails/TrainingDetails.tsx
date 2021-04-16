import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import useAxios from 'axios-hooks'
import {useParams} from 'react-router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    subTitle: {
      margin: '5% 10% 2% 10%',
      fontFamily: 'BlinkMacSystemFont',
      color: '#406370',
    },
    info: {
      margin: '2% 10% 0 10%',

      fontFamily: 'BlinkMacSystemFont',
    },
    subSkills: {
      padding: 0,
      margin: 0,
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
  evDeadline: string

  eventType: {
    evtName: string
    evtDescription: string
    evtCreatedAt: Date
  }
}
interface IData {
  data: DetailType[]
}
interface ID {
  id: any
}
const TrainingDetails = () => {
  const classes = useStyles()
  const {id} = useParams<ID>()
  const [{data, loading, error}, refetch] = useAxios<DetailType>({
    url: `/event/${id}`,
    method: 'GET',
  })
  if (loading) return <p>Loading...</p>

  return (
    <>
      <Typography className={classes.subTitle} variant="h3" component="h1">
        Training Details
      </Typography>
      <Typography className={classes.info} variant="h6" gutterBottom>
        {data?.eventType.evtDescription}
      </Typography>
      <Typography className={classes.subTitle} variant="h3" component="h1">
        Required Skills
      </Typography>
      <Typography className={classes.info} variant="h6" gutterBottom>
        <p className={classes.subSkills}>
          -Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className={classes.subSkills}>
          -tempor incididunt -veniam, quis nostrud exercitation
        </p>
        <p className={classes.subSkills}>-commodo consequat.</p>
        <p className={classes.subSkills}>
          -velit esse cillum dolore eu fugiat nulla pariatur.{' '}
        </p>
        <p className={classes.subSkills}>-occaecat cupidatat </p>
        <p className={classes.subSkills}>-mollit anim id est laborum.</p>
      </Typography>
    </>
  )
}

export default TrainingDetails
