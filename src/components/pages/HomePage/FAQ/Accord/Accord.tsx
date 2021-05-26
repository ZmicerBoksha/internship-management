import React, {FunctionComponent} from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#1E5A70',
    color: '#fff',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

type FaqType = {
  startDate: string
  duration: string
  englishLevel: string
  format: string
  id: number
  eventType: {
    name: string
    description: string
  }
}

const Accord: FunctionComponent<FaqType> = ({eventType}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <Accordion square onChange={handleChange}>
        <AccordionSummary aria-controls={`paneld-content`} id={`paneld-header`}>
          <Typography>{eventType.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{eventType.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accord
