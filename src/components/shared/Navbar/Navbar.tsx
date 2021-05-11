// import React from 'react'
// import {fade, makeStyles, Theme, createStyles} from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
// import InputBase from '@material-ui/core/InputBase'
// import Badge from '@material-ui/core/Badge'
// import MenuItem from '@material-ui/core/MenuItem'
// import Menu from '@material-ui/core/Menu'
// import MenuIcon from '@material-ui/icons/Menu'
// import SearchIcon from '@material-ui/icons/Search'
// import AccountCircle from '@material-ui/icons/AccountCircle'
// import MailIcon from '@material-ui/icons/Mail'
// import NotificationsIcon from '@material-ui/icons/Notifications'
// import MoreIcon from '@material-ui/icons/MoreVert'
// import {Link} from '@material-ui/core'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     grow: {
//       flexGrow: 1,
//     },

//     title: {
//       width: '150px',
//       textAlign: 'center',
//       fontStyle: 'italic',
//       lineHeight: 1,
//       color: 'white',
//       // display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//       fontFamily: 'BlinkMacSystemFont',
//     },
//     // search: {
//     //   position: 'relative',
//     //   borderRadius: theme.shape.borderRadius,
//     //   backgroundColor: fade(theme.palette.common.white, 0.15),
//     //   '&:hover': {
//     //     backgroundColor: fade(theme.palette.common.white, 0.25),
//     //   },
//     //   marginRight: theme.spacing(2),
//     //   marginLeft: '0',
//     //   width: '100%',
//     //   [theme.breakpoints.up('sm')]: {
//     //     width: 'auto',
//     //     marginLeft: theme.spacing(5),
//     //   },
//     // },
//     links: {
//       marginLeft: 80,

//       '&:hover': {
//         color: fade(theme.palette.common.white, 0.25),
//       },
//     },
//     // searchIcon: {
//     //   padding: theme.spacing(0, 2),
//     //   height: '100%',

//     //   position: 'absolute',
//     //   pointerEvents: 'none',
//     //   display: 'flex',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // },
//     // inputRoot: {
//     //   color: 'inherit',
//     // },
//     // inputInput: {
//     //   padding: theme.spacing(1, 1, 1, 0),
//     //   // vertical padding + font size from searchIcon
//     //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     //   transition: theme.transitions.create('width'),
//     //   width: '100%',
//     //   [theme.breakpoints.up('md')]: {
//     //     width: '20ch',
//     //   },
//     // },
//   })
// )

// export default function Navbar() {
//   const classes = useStyles()
//
//   return (
//     // <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar style={{backgroundColor: '#1e5a70'}}>
//           <Link
//             href="/"
//             underline="none"
//             className={classes.title}
//             variant="h6"
//           >
//             Exadel Training Center
//           </Link>
//           <Link
//             className={classes.links}
//             href="/#trainings"
//             color="inherit"
//             underline="none"
//           >
//             Training List
//           </Link>
//           <Link
//             className={classes.links}
//             href="#"
//             color="inherit"
//             underline="none"
//           >
//             About
//           </Link>
//           <Link
//             className={classes.links}
//             href="#"
//             color="inherit"
//             underline="none"
//           >
//             FAQ
//           </Link>

//           {/* <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{'aria-label': 'search'}}
//             />
//           </div>
//           <div className={classes.grow} /> */}
//         </Toolbar>
//       </AppBar>
//     // </div>
//   )
// }
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
  Link,
} from '@material-ui/core'
import {Home, KeyboardArrowUp} from '@material-ui/icons'
import * as React from 'react'
import SideDrawer from './SideDrawer'

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  title: {
    width: '150px',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 1,
    color: 'white',
    fontFamily: 'BlinkMacSystemFont',
  },
})

const navLinks = [
  {title: `Training List`, path: `/#trainings`},
  {title: `About Us`, path: `/#about`},

  {title: `FAQ`, path: `/#faq`},
]

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" style={{backgroundColor: '#1e5a70'}}>
        <Toolbar component="nav">
          <Container className={classes.navbarDisplayFlex}>
            <IconButton edge="start">
              <Link
                href="/"
                underline="none"
                className={classes.title}
                variant="h6"
              >
                Exadel Training Center
              </Link>
            </IconButton>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >
                {navLinks.map(({title, path}) => (
                  <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Navbar
