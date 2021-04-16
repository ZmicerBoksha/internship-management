import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      height: '60px',
      backgroundColor: '#406370',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontFamily: 'BlinkMacSystemFont',
    },
  })
)
interface DividerProps {
  title: string
  id: string
}
const PageDivider = (props: DividerProps) => {
  const classes = useStyles()
  const {title, id} = props
  return (
    <div id={id} className={classes.root}>
      <Typography className={classes.title} variant="h4" component="h1">
        {title}
      </Typography>
    </div>
  )
}
export default PageDivider
