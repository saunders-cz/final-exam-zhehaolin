import { Grid, List, Typography } from "@mui/material";
import React, { useState } from "react";
import { GET_MEAL_CATEGORIES } from "./queries";
import { useQuery } from "@apollo/client";


export const Cart = () => {
    const [cart, setCart] = React.useState([]);
    const { data, error, loading } = useQuery(GET_MEAL_CATEGORIES);

    if (error) return <Typography color="error">{error.message}</Typography>;
    if (loading) return <Typography>Loading</Typography>;

    console.log(data);

    const { categories } = data;
    const items =;
    console.log(data.categories[0]);


    
    
    const removeFromCart = (item) => {
        setCart((currentCart) => {
          const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);
    
          if (indexOfItemToRemove === -1) {
            return currentCart;
          }
    
          return [
            ...currentCart.slice(0, indexOfItemToRemove),
            ...currentCart.slice(indexOfItemToRemove + 1),
          ];
        });
      };
      const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

      const listItemsInCart = () => items.map((item) => (
        <div key={item.id} class="dish">
          ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
          <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ));
  
    return (
      <Grid container spacing={2}>
          
      </Grid>
    );
  };