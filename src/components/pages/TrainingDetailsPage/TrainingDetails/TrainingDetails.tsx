import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

import useAxios from 'axios-hooks'
import {useParams} from 'react-router'
import {IEventDto} from '../../../../models/IEventsDto'

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

interface ID {
  id: any
}
const TrainingDetails = () => {
  const classes = useStyles()
  const {id} = useParams<ID>()
  const [{data, loading, error}, refetch] = useAxios<IEventDto>({
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
        {data?.eventType?.description}
        <p className={classes.subSkills}>Start Date: {data?.startDate}</p>
        <p className={classes.subSkills}>
          Location: {data?.country}, {data?.city}
        </p>
        <p className={classes.subSkills}>Format: {data?.format}</p>
        <p className={classes.subSkills}>Deadline: {data?.deadline}</p>
        <p className={classes.subSkills}>Duration: {data?.duration}</p>
      </Typography>
      <Typography className={classes.subTitle} variant="h3" component="h1">
        Required Skills
      </Typography>
      <Typography className={classes.info} variant="h6" gutterBottom>
        <p className={classes.subSkills}>English Level: {data?.englishLevel}</p>
        <p className={classes.subSkills}>Technologies: {data?.technologies}</p>
      </Typography>
    </>
  )
}

export default TrainingDetails
