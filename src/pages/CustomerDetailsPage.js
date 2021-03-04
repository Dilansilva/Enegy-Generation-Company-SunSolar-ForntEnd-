import React,{useState} from 'react';

import { Form,  //Import some tags from bootstrap
        Button,
        Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import NavBar from '../components/NavBar';//import Navigation bar
import InputLable from '../components/InputLable'//import Input lables

const CustomerDetailsPage = () => {
    return ( 
        <>
        <NavBar/>
        <div style={{display: 'flex',  
                    justifyContent:'center', 
                    alignItems:'center',
                    backgroundColor: '#f8f1f1'}}>
            <h1>Enter Customer Details Here!</h1>
        </div>
            <div style={{display: 'flex',  
                justifyContent:'center', 
                alignItems:'center', 
                height: '70vh',
                backgroundColor: '#f8f1f1'}}>

                
                <Form>
                    
                    <InputLable
                        Lable="Enter Customer Code : "
                        placeholder="Customer Code here"
                    />

                    <InputLable
                        Lable="Customer Name : "
                        placeholder="Customer Name here"
                    />

                    <InputLable
                        Lable="Address : "
                        placeholder="Address Here"
                    />

                    <InputLable
                        Lable="Profesion : "
                        placeholder="Profesion"
                    />

                    <InputLable
                        Lable="Refered By : "
                        placeholder="Refered By"
                    />

                    <InputLable
                        Lable="Customer TP Number : "
                        placeholder="Customer TP Number"
                    />

                    <InputLable
                        Lable="Customer Email : "
                        placeholder="Customer Email"
                    />

                    <Button
                        className="roundInput" 
                        variant="warning"
                    block>
                        Submit
                    </Button>
                </Form>

            </div>
    </>
    );
}
 
export default CustomerDetailsPage;