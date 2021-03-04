import React,{useState} from 'react';

import { Form,  //Import some tags from bootstrap
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import '../css/LoginPageCss.css'//custom css
 
const LoginPage = () => {

    const [email,setEmail] = useState('');//state for email 
    const [password,setPassword] = useState('');//state for password 

    const onSubmitHandler = (e) => {//submit function when button clicked

        e.preventDefault();//block the getting refresh when button clicked
        
    }

    return(
        <div className="d-flex justify-content-center BottomWidth">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => {setPassword(e.target.value)}} 
                        />
                </Form.Group>

                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={onSubmitHandler}
                >
                    Log-In
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;