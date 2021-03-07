import React,{useState} from 'react';

import { Form,  //Import some tags from bootstrap
        Button,
        Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import NavBar from '../components/NavBar';//import Navigation bar
import InputLable from '../components/InputLable'//import Input lables

import '../css/projectdetails.css'//import some css

const ProjectDetailsPage = () => {

   const [projectCode,setProjectCode] = useState('dfgfd');//state for project code
   const [customerCode,setCustomerCode] = useState('gdfgd');//state for customer code

   const [capacity,setCapacity] = useState('');//state for capacity
   const [location,setLocation] = useState('');//state for location
   const [visit,setVisit] = useState('');//state for vist
   const [date,setDate] = useState('');//state for date
   const [connType,setConntype] = useState('');//state for connection type
   const [gridType,setGridtype] = useState('');//state forgrid type
   const [base,setBase] = useState('');//state for base

   const onSubmitHandler = (e) => {
        e.preventDefault();
        
   }

    return (
        <>
            <NavBar/>
            <div style={{display: 'flex',  
                        justifyContent:'center', 
                        alignItems:'center',
                        backgroundColor: '#f8f1f1'}}>
                <h1>Enter Project Details Here!</h1>
            </div>
                <div style={{display: 'flex',  
                    justifyContent:'center', 
                    alignItems:'center', 
                    height: '90vh',
                    backgroundColor: '#f8f1f1'}}>

                    
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <span className="dot"></span>
                            <Form.Label>Project Code : </Form.Label>

                            <Form.Control 
                                placeholder={projectCode} //prop for placholder
                                type="text" 
                                className="roundInput"
                                disabled
                            />
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <span className="dot"></span>
                            <Form.Label>Customer Code : </Form.Label>

                            <Form.Control 
                                placeholder={customerCode} //prop for placholder
                                type="text" 
                                className="roundInput"
                                disabled
                            />
                        </Form.Group>
                        
                        <InputLable
                            Lable="Enter Capacity Here : "
                            placeholder="Capacity(Kw)"
                            onchange={}
                        />

                        <InputLable
                            Lable="Geo Location : "
                            placeholder="Geo location here"
                        />

                        <InputLable
                            Lable="Site Visit by : "
                            placeholder="Site visit by"
                        />

                        <InputLable
                            Lable="Visited date : "
                            placeholder="Date"
                        />

                        <InputLable
                            Lable="Solar Conection Type : "
                            placeholder="Net_Metering/Net_Accouting/Net_Plus"
                        />

                        <InputLable
                            Lable="Grid type : "
                            placeholder="LECO/CEB"
                        />

                        <InputLable
                            Lable="Payment Base : "
                            placeholder="Cash/ADB Loan/Normal Loan"
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
 
export default ProjectDetailsPage;