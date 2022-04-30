import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MEAL_CATEGORIES } from "./queries";
import { Grid, Typography } from "@mui/material";
import { MealList } from "./MealList";

export const CategoryList = () => {
  const { data, error, loading } = useQuery(GET_MEAL_CATEGORIES);

  if (error) return <Typography color="error">{error.message}</Typography>;
  if (loading) return <Typography>Loading</Typography>;

  console.log(data);

  const { categories } = data;

  return (
    <Grid container spacing={2}>
      {categories.map((Category, i) => (
        <Grid container item xs={12} key={i}>
          <Grid item xs={12}>
            <Typography variant="h4">{Category.title}</Typography>
          </Grid>
          <Grid container item xs={12}>
            <MealList meals={Category.meals} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};