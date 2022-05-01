import { Grid, List, Typography } from "@mui/material";
import React, { useState } from "react";
import { GET_MEAL_CATEGORIES } from "./queries";
import { useQuery } from "@apollo/client";


export const Cart = () => {
    const [cart, setCart] = React.useState([]);
    const { data, error, loading } = useQuery(GET_MEAL_CATEGORIES);

    if (error) return <Typography color="error">{error.message}</Typography>;
    if (loading) return <Typography>Loading</Typography>;

    

    const { categories } = data;
    const items = new Array(data.categories.length);
    for (let i = 0; i < data.categories.length; i++) {
        items[i] = data.categories[i].meals[0]
    }
    console.log(items)
    // console.log(data.categories[0]);
    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

    const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

    
    
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
      const listItemsToBuy = () => items.map((item) => (
        <div key={item.id} class="dish">
          {`${item.title}: $${item.price}`}
          <button type="submit" onClick={() => addToCart(item)}>Add</button>
        </div>
      ));

      const listItemsInCart = () => items.map((item) => (
        <div key={item.id} class="dish">
          ({amountOfItems(item.id)} x ${item.price}) {`${item.title}`}
          <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ));
  
    return (
      <Grid container spacing={0} item xs = {12}>
          <div>{listItemsToBuy()}</div>
                <div>CART</div>
                <div>{listItemsInCart()}</div>
                <div>Total: ${cartTotal}</div>
                <div>
                  <button onClick={() => setCart([])}>Clear</button>
                </div>
      </Grid>
    );
  };