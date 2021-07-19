import React from 'react';
import { Modal, Button, Card, Form, FormGroup } from 'react-bootstrap';
import './ProfileInfoCard.css';
import UserService from '../../services/UserService';
import axios from 'axios';
const PORT = 3001;
// import cogoToast from 'cogo-toast';
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class ProfileInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalDeleteOpen: false,
            isModalEditOpen: false,
            redirect: false,
            loggedUser: '',
            formData: {
                full_name: '',
                username: '',
                email: '',
                password: ''
            }
        };
        this.userService = new UserService();
        this.currentUser = this.userService.getUserFromStorage();
        this.currentUserId = this.currentUser[0].id;
    }

    openDeleteModal = () => this.setState({ isModalDeleteOpen: true });
    closeDeleteModal = () => this.setState({ isModalDeleteOpen: false });

    deleteLoggedInUser = () => {
        axios.post(`http://localhost:${PORT}/delete-user`, 
            {
                id: this.currentUserId
            }
        ).then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
        this.userService.emptyLocalStorage();
        window.location.href = process.env.REACT_APP_BASE_URL + '/'
    };

    openEditModal = () => {
        axios.post(`http://localhost:${PORT}/user-data`, 
            {
                id: this.currentUserId
            }
        ).then((response) => {
            console.log(response);
            const user = response.data[0];
            console.log(user);
            this.setState({formData: {
                full_name: user.full_name,
                username: user.username,
                email: user.email,
                password: user.password,
            }
            })
        })
        .catch(err => {
            console.log(err);
        });
        this.setState({ isModalEditOpen: true });
    }

    closeEditModal = () => this.setState({ isModalEditOpen: false });

    saveModifications = () => {
        axios.post(`http://localhost:${PORT}/update-user`, {
                id : this.currentUserId,
                full_name : this.state.formData.full_name,
                username : this.state.formData.username,
                email : this.state.formData.email,
                password : this.state.formData.password
        }, { headers: { 'Content-Type': 'application/json' } })
        window.location.reload();
        this.setState({ isModalEditOpen: false });
    }

    componentDidMount() {
        axios.post(`http://localhost:${PORT}/user-data`, 
            {
                id: this.currentUserId
            }
        )
        .then((res) => {
            this.currentUser = res.data[0];
            this.setState({loggedUser: this.currentUser});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.formData !== this.state.formData) {
            axios.post(`http://localhost:${PORT}/user-data`, 
            {
                id: this.currentUserId
            }
        )
        .then((res) => {
            this.currentUser = res.data[0];
            this.setState({loggedUser: this.currentUser});
        })
        }
    }

    render() {
        return (
                <Card className="profile-card">
                    <Card.Header className="card-header">
                        Profile Information
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Full Name</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.full_name}
                        </Card.Text>

                        <Card.Title>Username</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.username}
                        </Card.Text>

                        <Card.Title>Email</Card.Title>
                        <Card.Text className="profile-card-text">
                            {this.state.loggedUser.email}
                        </Card.Text>

                        <Card.Title>Password</Card.Title>
                        <Card.Text className="profile-card-text">
                            You can manage your password by pressing the "Edit
                            profile" button.
                        </Card.Text>

                        <Button
                            variant="primary"
                            className="profile-card-btn"
                            onClick={this.openEditModal}
                        >
                            Edit profile
                        </Button>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                            centered
                            show={this.state.isModalEditOpen}
                            onHide={this.closeEditModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Edit profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>
                                    Here you may edit your profile information.
                                </h5>

                                <Form>
                                    <FormGroup controlId="profile-full-name">
                                        <Form.Label>Your full name</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.full_name}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        full_name: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter full name"
                                            ></Form.Control>
                                    </FormGroup>
                                   
                                    <FormGroup controlId="profile-username">
                                        <Form.Label>Your username</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.username}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        username: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter username"
                                            ></Form.Control>
                                    </FormGroup>
                                    
                                    <FormGroup controlId="profile-email">
                                        <Form.Label>Your email</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.email}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        email: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="text"
                                            placeholder="Enter email"
                                            ></Form.Control>
                                    </FormGroup>
                                    <FormGroup controlId="profile-password">
                                        <Form.Label>Your password</Form.Label>
                                        <Form.Control 
                                            value={this.state.formData.password}
                                            onChange={e => 
                                                this.setState(prevState => ({
                                                    formData: {
                                                        ...prevState.formData,
                                                        password: e.target.value,
                                                    },
                                                }))
                                            }
                                            type="password"
                                            placeholder="Enter password"
                                            ></Form.Control>
                                    </FormGroup>
                                </Form>

                                <Button
                                    variant="primary"
                                    className="profile-card-btn"
                                    onClick={this.saveModifications}
                                >
                                    Save modifications
                                </Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="primary"
                                    className="profile-card-btn"
                                    onClick={this.closeEditModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Button
                            variant="primary"
                            className="profile-card-btn"
                            onClick={this.openDeleteModal}
                        >
                            Delete your profile
                        </Button>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            dialogClassName="modal-120w"
                            centered
                            show={this.state.isModalDeleteOpen}
                            onHide={this.closeDeleteModal}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Delete profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>
                                    Are you sure that you want to delete your
                                    profile?
                                </h5>
                                <Button
                                     variant="primary"
                                     className="profile-card-btn"
                                    onClick={this.deleteLoggedInUser}
                                >
                                    Delete profile
                                </Button>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                 variant="primary"
                                 className="profile-card-btn"
                                    onClick={this.closeDeleteModal}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
        );
    }
}
