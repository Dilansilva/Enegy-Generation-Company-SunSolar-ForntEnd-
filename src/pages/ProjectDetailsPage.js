import React,{useState} from 'react';

import { Form,  //Import some tags from bootstrap
        Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap

import NavBar from '../components/NavBar';//import Navigation bar
import InputLable from '../components/InputLable'//import Input lables

import '../css/projectdetails.css'//import some css

const ProjectDetailsPage = () => {
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
                    height: '70vh',
                    backgroundColor: '#f8f1f1'}}>

                    
                    <Form>
                        
                        <InputLable
                            Lable="Enter Capacity Here : "
                            placeholder="Capacity(Kw)"
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