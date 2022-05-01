import { Grid, Typography } from "@mui/material";
import { RegisterForm } from "../modules/meal/registration/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Registration Form
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm />
      </Grid>
    </>
  );
};