import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Menu} from '@material-ui/icons'
import * as React from 'react'
import {useState} from 'react'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
})
// okay let me do it;

interface IState {
  [key: string]: boolean
}

interface NavLink {
  path: string
  title: string
}

interface ISideDrawer {
  navLinks: NavLink[]
}

const SideDrawer: React.FC<ISideDrawer> = ({navLinks}: ISideDrawer) => {
  const classes = useStyles()
  const [state, setState] = useState<IState>({right: false})
  const toggleDrawer = (anchor: string, open: boolean) => {
    console.log(anchor, open)

    setState({[`${anchor}`]: open})
  }

  const sideDrawerList: (anchor: string) => JSX.Element = (anchor) => (
    <div className={classes.list} role="presentation">
      <List component="nav">
        {navLinks.map(({title, path}) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => toggleDrawer('right', true)}
      >
        <Menu fontSize="large" style={{color: `white`}} />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={() => toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </React.Fragment>
  )
}

export default SideDrawer
