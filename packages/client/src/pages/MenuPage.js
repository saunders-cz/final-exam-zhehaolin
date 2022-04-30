import React from "react";
import { Container } from "@mui/material";
import { CategoryList } from "../modules/meal/menu/CategoryList";

export const MenuPage = () => {
  return (
    <Container>
      <CategoryList />
    </Container>
  );
};