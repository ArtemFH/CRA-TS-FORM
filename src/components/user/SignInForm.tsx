import React from 'react';
import styled from "styled-components";
import {Box, Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom"

const SignInForm = () => {
    return (
        <>
            <Form>
                <Box>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email Address"
                            name="email"
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
                            Sign Ip
                        </Button>
                    </Box>
                    <Link to={'/user/sign-up'}>
                        Зарегистрироваться
                    </Link>
                </Box>
            </Form>
        </>
    );
};


export default SignInForm;

const Form = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & > div {
    width: 300px;
    padding: 150px;
  }
`