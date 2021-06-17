import { React, useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormText, FormButton } from '../SignIn/SignInElements';
// const PORT = process.env.PORT || 3000;
const PORT = 3001;

const SignUp = () => {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [fullnameReg, setFullnameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");

    const history = useHistory();

    const signup = () => {
        //TODO: check credentials in database and display error if they are not ok
        Axios.post(`http://localhost:${PORT}/signup`, 
            {
                username: usernameReg,
                password: passwordReg,
                full_name: fullnameReg,
                email: emailReg
            }
        ).then((response) => {
            console.log(response.data);
            history.push('/signin');
        });
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dmc</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create an account</FormH1>
                            <FormLabel htmlFor='for'>Full Name</FormLabel>
                            <FormInput type="text" required 
                                onChange = {(event) => {
                                    setFullnameReg(event.target.value)
                                }}/>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type="text" required 
                                onChange = {(event) => {
                                    setUsernameReg(event.target.value)
                                }}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required 
                                onChange = {(event) => {
                                    setEmailReg(event.target.value)
                                }}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required 
                                onChange = {(event) => {
                                    setPasswordReg(event.target.value)
                                }}/>
                            {/* <FormLabel htmlFor='for'>Repeat password</FormLabel>
                            <FormInput type="password" required /> */}
                            <FormButton type="submit" onClick={signup}>Sign Up</FormButton>
                            <FormText to="signin">Have an account? Go to sign in.</FormText>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignUp;
