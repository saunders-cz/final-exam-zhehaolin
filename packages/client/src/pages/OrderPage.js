import { Grid, Typography } from "@mui/material";
import { Cart } from "../modules/meal/menu/Cart"; 

export const OrderPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Shopping Cart
        </Typography>
        
        <Cart />
      </Grid>
    </>
  );
};
