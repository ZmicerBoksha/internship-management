import React from 'react'

import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import TopPage from '../../shared/TopPage'
import banner2 from '../../../assets/images/secondbg.png'
import PageDivider from '../../shared/PageDivider'
import TrainingDetails from './TrainingDetails/TrainingDetails'
import TrainingForm from './TrainingForm'
import {useParams} from 'react-router-dom'
import useAxios from 'axios-hooks'
import {IEventDto} from '../../../models/IEventsDto'
import {Grid} from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
  })
)

interface ID {
  id: any
}
const TrainingDetailsPage = () => {
  const classes = useStyles()
  const {id} = useParams<ID>()
  const [{data, loading, error}, refetch] = useAxios<IEventDto>({
    url: `/event/${id}`,
    method: 'GET',
  })

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TopPage
            title={data?.eventType?.name}
            subTitle="Start NOW"
            info={data?.eventType?.description}
            imageUrl={banner2}
          />
        </Grid>
        <Grid item xs={12}>
          <PageDivider id="training-detail" title="Training Details" />
          <TrainingDetails />

          <TrainingForm />
        </Grid>
      </Grid>
    </>
  )
}

export default TrainingDetailsPage
