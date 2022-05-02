import { Link,Card,CardMedia,CardActions,Button, Grid, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

export const MealList = ({meals}) => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={2}>
            {meals.map((meal,i) => (
                <Grid item xs={4} key={i}>
                <Card>
                    <CardContent>
                        <CardMedia
                        heigh="200"
                        component="img"
                        src={meal.imgsrc}
                        alt={meal.title}
                        />
                    
                        <Typography variant="h5">
                            {meal.title}
                        </Typography>

                        <Typography>
                            {meal.description}
                        </Typography>
                        <Typography>
                            ${meal.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                        <Button onClick={() => navigate(`/order`)}>Add Item</Button>
                        
                    </CardActions>
                </Card>
                </Grid>
            ))}
        </Grid>
    )
}