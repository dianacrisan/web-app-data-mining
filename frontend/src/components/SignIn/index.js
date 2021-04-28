import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormText, FormButton } from './SignInElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dmc</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Welcome back</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Sign In</FormButton>
                            <FormText to="signup">Register here if you don't have an account</FormText>
                            {/* <FormText>Forgot password?</FormText> */}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignIn;
