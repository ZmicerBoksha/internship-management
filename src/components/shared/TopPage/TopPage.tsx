import React from 'react'
import {Button, Grid, Typography} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    title: {
      maxWidth: 800,
      textAlign: 'center',
      color: '#406370',
      marginTop: theme.spacing(5),
      marginBottom: '2%',
      margin: 'auto',
      fontFamily: 'BlinkMacSystemFont',
    },
    subTitle: {
      maxWidth: 400,
      marginTop: '10%',
      margin: 'auto',
      fontFamily: 'BlinkMacSystemFont',
      color: '#406370',
    },
    info: {
      maxWidth: 400,
      marginTop: theme.spacing(2),
      margin: 'auto',
      fontFamily: 'BlinkMacSystemFont',
    },
  })
)
interface TopPageProps {
  title: string
  subTitle: string
  info: string
  imageUrl: any
}
const TopPage = (props: TopPageProps) => {
  const classes = useStyles()
  const {title, subTitle, info, imageUrl} = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2" component="h1">
        {title}
      </Typography>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography className={classes.subTitle} variant="h3" component="h1">
            {subTitle}
          </Typography>
          <Typography className={classes.info} variant="h6" gutterBottom>
            {info}
          </Typography>
          <Button
            href="/details"
            color="primary"
            variant="contained"
            style={{
              margin: 'auto',
            }}
          >
            Read More...
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img
            alt="banner"
            src={imageUrl}
            width="100%"
            style={{objectFit: 'contain', height: 'max-content'}}
          />
        </Grid>
      </Grid>
    </div>
  )
}
export default TopPage
