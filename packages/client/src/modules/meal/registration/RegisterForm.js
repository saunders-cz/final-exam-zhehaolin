import { Button, Container, Grid, TextField,FormControlLabel,RadioGroup,FormControl,Radio, FormLabel } from "@mui/material";
import { useFormik } from "formik";
import { ADD_USER } from "./mutations";
import { useMutation } from "@apollo/client";
import * as yup from "yup";

const initialValues = {
  firstname: "",
  lastname:"",
  email: "",
  address: "",
  mailinglist:true,

};

const validationSchema = yup.object({
  firstname: yup.string().required().label("First Name"),
  lastname: yup.string().required().label("Last Name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required()
    .label("Email Address"),
  address: yup.string().required().label("Address"),
  
});

export const RegisterForm = ({ id, onClose }) => {
  const mutation = id === undefined ? ADD_USER : ADD_USER;
  const [addUser, { loading, error }] = useMutation(mutation, {
    onCompleted: () => {
      if (onClose !== undefined) onClose();
    },
  });

  const { values, errors, handleSubmit, handleBlur, handleChange, isValid } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, helpers) => {
        console.log(values, helpers);
        console.log(`User ID: ${id}`);
        const { firstname,lastname, address, email,mailinglist } = values;
        const input = { firstname,lastname, address, email, mailinglist };
        await addUser({
          variables: {
            id,
            input,
          },
        });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Container align="center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="First Name"
              error={!!errors.firstname}
              helperText={errors.firstname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="last Name"
              error={!!errors.lastname}
              helperText={errors.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Email Address"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
          <FormControl>
            <FormLabel>Opt in for Mailing list:</FormLabel>
            <RadioGroup
              name="Mailing List"
              value={values.mailinglist}
              onChange={handleChange}
              row
              required
            >
              <FormControlLabel
                key="yes"
                value={true} 
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="no"
                value={false}
                control={<Radio size="small" />}
                label="No"
              />
              
            </RadioGroup>
          </FormControl>


          </Grid>
        
          <Grid>
            <Button type="submit" disabled={loading}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};