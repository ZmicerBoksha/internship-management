import React from 'react'

import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import TopPage from '../../shared/TopPage'
import banner2 from '../../../assets/images/secondbg.png'
import PageDivider from '../../shared/PageDivider'
import TrainingDetails from './TrainingDetails/TrainingDetails'
import TrainingForm from './TrainingForm'
import {useParams} from 'react-router-dom'
import useAxios from 'axios-hooks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
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
const TrainingDetailsPage = () => {
  const classes = useStyles()
  const {id} = useParams<ID>()
  const [{data, loading, error}, refetch] = useAxios<DetailType>({
    url: `/event/${id}`,
    method: 'GET',
  })
  return (
    <>
      <div className={classes.root}>
        <TopPage
          title={data?.eventType.evtName}
          subTitle="Start NOW"
          info={data?.eventType.evtDescription}
          imageUrl={banner2}
        />
      </div>
      <div>
        <PageDivider id="training-detail" title="Training Details" />
        <TrainingDetails />

        <TrainingForm />
      </div>
    </>
  )
}

export default TrainingDetailsPage
