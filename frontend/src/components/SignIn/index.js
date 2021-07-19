import { React, useState } from 'react';
import axios from 'axios';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormText, FormButton } from './SignInElements';
import { Redirect } from 'react-router-dom';
// import UserService from '../../services/UserService'
const PORT = 3001;
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [redirect, setRedirect] = useState(false);

    // const userService = new UserService();


    const signin = async e => {
        e.preventDefault();
        axios.post(`http://localhost:${PORT}/signin`, 
            {
                email: email,
                password: password
            }
        ).then((response) => {
            if(response.data.message === "Wrong credentials!") {
                setLoginStatus(response.data.message);
                setRedirect(false);
            }
            else {
                let user = response.data;
                window.localStorage.setItem('currentUser', JSON.stringify(user));
                // setRedirect(true);
                window.location.href = process.env.REACT_APP_BASE_URL + '/main';
            }
        });
    }

    const renderRedirect = () => {
        if(redirect === true) {
            return <Redirect to={{pathname: '/main', state: {}}} />
        }
    }

    return (
        <>
            {renderRedirect()}
            <Container>
                <FormWrap>
                    <Icon to="/">dmc</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Welcome back</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required 
                                 onChange = {(event) => {
                                    setEmail(event.target.value)
                                }}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required 
                                 onChange = {(event) => {
                                    setPassword(event.target.value)
                                }}/>
                            <FormButton type="submit" onClick={signin}>Sign In</FormButton>
                            <FormText to="signup">Register here if you don't have an account</FormText>
                            <FormH1>{loginStatus}</FormH1>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    )
};

export default SignIn;
