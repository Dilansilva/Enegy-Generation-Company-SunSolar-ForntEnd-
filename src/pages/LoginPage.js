import React from 'react';

import { Form,  //Import some tags from bootstrap
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import '../css/LoginPageCss.css'//custom css
 
const LoginPage = () => {
    return(
        <div className="d-flex justify-content-center BottomWidth">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log-In
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;