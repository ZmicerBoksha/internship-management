import React from 'react'
import TopPage from '../../shared/TopPage'
import PageDivider from '../../shared/PageDivider'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import Trainings from './Trainings'
import banner from '../../../assets/images/homebg.png'
import About from './About/About'
import FAQ from './FAQ/FAQ'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
  })
)
const HomePage = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <TopPage
          title="Choose a Traning that suits you best!"
          subTitle="Recruitment for JavaScript Internship"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={banner}
        />
      </div>

      <div>
        <PageDivider id="trainings" title="Trainings" />

        <Trainings />
      </div>

      <div>
        <PageDivider id="about" title="About Us" />
        <About />
      </div>

      <div>
        <PageDivider id="faq" title="FAQ" />

        <FAQ />
      </div>
    </>
  )
}

export default HomePage
