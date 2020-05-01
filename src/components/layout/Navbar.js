import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makesStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makesStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const CenterButtons = ({ authenticated }) => {
  return (
    <>
      {authenticated ? (
        <>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
          <Button color='inherit' component={Link} to='/favorites'>
            Favorites
          </Button>
          <IconButton color='inherit' component={Link} to='/new'>
            <AddIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Button color='inherit' component={Link} to='/login'>
            Login
          </Button>
        </>
      )}
    </>
  );
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = ({ authenticated }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' noWrap className={classes.title}>
          Recipes
        </Typography>
        <CenterButtons authenticated={authenticated} />
        <div className={classes.title}></div>
        {authenticated && (
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <StyledMenu
              id='customized-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <PersonIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='My profile' />
              </StyledMenuItem>

              <StyledMenuItem>
                <ListItemIcon>
                  <KeyboardReturn fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapState = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapState)(Navbar);
