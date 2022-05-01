import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to="/">
          <Typography>Home</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/menu">
          <Typography>Menu</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/order">
          <Typography>Order</Typography>
        </Link>
      </Grid> <Grid item>
        <Link to="/register">
          <Typography>Register</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/manage">
          <Typography>Manage</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};