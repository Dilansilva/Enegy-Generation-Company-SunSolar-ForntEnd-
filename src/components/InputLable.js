import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap
import {Form,
        Row} from 'react-bootstrap';//import some bootstrap tags

import '../css/projectdetails.css'//import some css

const InputLable = (props) => {
    return(
       
            
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <span className="dot"></span>
                    <Form.Label>{props.Lable}</Form.Label>

                    <Form.Control 
                        placeholder={props.placeholder} //prop for placholder
                        type="text" 
                        className="roundInput"
                        onChange={props.onchange}
                    />
                </Form.Group>
            
        
    );
}

export default InputLable;