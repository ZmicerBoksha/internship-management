import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

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
const TrainingDetails = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.subTitle} variant="h3" component="h1">
        Training Details
      </Typography>
      <Typography className={classes.info} variant="h6" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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
