import React,{useState} from 'react';

import { Form,  //Import some tags from bootstrap
        Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import NavBar from '../components/NavBar';//import Navigation bar
import InputLable from '../components/InputLable'//import Input lables

const [CusCode,setCuscode] = useState('');//state for customer code
const [CusName,setCustname] = useState('');//state for customer name
const [Address,setAddress] = useState('');//state for customer address
const [Profession,setProfession] = useState('');//state for customer profession
const [Refered,setrefered] = useState('');//state for referd
const [Tp,setTp] = useState('');//state for Tp number
const [email,setEmail] = useState('');//state for email

const CustomerDetailsPage = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/customer',{
            method : 'POST',
            mode : 'cors',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:3000/customer'
            },
            body : JSON.stringify({
                CusCode,
                CusName,
                Address,
                Profession,
                Refered,
                Tp,
                email
            })
        }).then((response) => {
            console.log(response);
        })
        .then((responseJson) => {
                console.log(responseJson);
        })
    }
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
                        onchange={(e) => {setCuscode(e.target.value)}}
                    />

                    <InputLable
                        Lable="Customer Name : "
                        placeholder="Customer Name here"
                        onchange={(e) => {setCustname(e.target.value)}}
                    />

                    <InputLable
                        Lable="Address : "
                        placeholder="Address Here"
                        onchange={(e) => {setAddress(e.target.value)}}
                    />

                    <InputLable
                        Lable="Profesion : "
                        placeholder="Profesion"
                        onchange={(e) => {setProfession(e.target.value)}}
                    />

                    <InputLable
                        Lable="Refered By : "
                        placeholder="Refered By"
                        onchange={(e) => {setrefered(e.target.value)}}
                    />

                    <InputLable
                        Lable="Customer TP Number : "
                        placeholder="Customer TP Number"
                        onchange={(e) => {setTp(e.target.value)}}
                    />

                    <InputLable
                        Lable="Customer Email : "
                        placeholder="Customer Email"
                        onchange={(e) => {setEmail(e.target.value)}}
                    />

                    <Button
                        className="roundInput" 
                        variant="warning"
                        onClick={onSubmitHandler}
                    block>
                        Submit
                    </Button>
                </Form>

            </div>
    </>
    );
}
 
export default CustomerDetailsPage;