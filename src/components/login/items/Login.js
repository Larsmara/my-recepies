import React from "react";
// MUI stuff
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ handleFormChange, handleChange, onSubmitLogin, errors, loading }) => {
  const classes = useStyles();
  return (
    <div className='animated bounceInLeft fast'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitLogin}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleChange}
            helperText={errors.email}
            error={errors.email ? true : false}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleChange}
            helperText={errors.password}
            error={errors.password ? true : false}
          />
          {errors.general && (
            <Typography variant='body2' color='secondary'>
              {errors.general}
            </Typography>
          )}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {loading ? <CircularProgress size={30} color='secondary' /> : "Sign in"}
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link
                component={Button}
                onClick={() => handleFormChange(2)}
                variant='body2'
                style={{ textTransform: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Login;
