import React from 'react';
import styled from "styled-components";
import {Box, Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom"

const SignUpForm = () => {
    return (
        <>
            <Form>
                <Box>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="First Name"
                            name="firstName"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Last Name"
                            name="lastName"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Phone"
                            name="phone"
                            type="tel"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            name="password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained">
                            Sign Up
                        </Button>
                    </Box>
                    <Link to={'/user/sign-in'}>
                        Авторизоваться
                    </Link>
                </Box>
            </Form>
        </>
    );
};

export default SignUpForm;

const Form = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & > div {
    width: 300px;
    padding: 150px;
  }
`