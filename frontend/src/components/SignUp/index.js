import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormText, FormButton } from '../SignIn/SignInElements';

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dmc</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create an account</FormH1>
                            <FormLabel htmlFor='for'>Full Name</FormLabel>
                            <FormInput type="text" required />
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type="text" required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                            <FormLabel htmlFor='for'>Repeat password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Sign Up</FormButton>
                            <FormText to="signin">Have an account? Go to sign in.</FormText>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignUp;
