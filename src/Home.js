import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import {GetEmployeeDetails} from './EmployeeDetails';
import {SetEmployeeDetails} from './EmployeeDetails';

const HomeComponent=(props)=>{
    const [showEmpDetails,showEmpDetailsFunc] = useState(false);
    const [showNewEmp,showNewEmpFunc] = useState(false);
    function showEmployeeDetails(){
        if(!showEmpDetails){
            showEmpDetailsFunc(!showEmpDetails);
            showNewEmpFunc(false);
        }
    }
    function showAddNewEmp(){
        if(!showNewEmp){
            showNewEmpFunc(!showNewEmp);
            showEmpDetailsFunc(false);
        }
    }
    return(<React.Fragment>
        <div className="dv_Header">{props.title}</div>
        <div className="dv_BtnTags">
            <>
                <Button variant="primary" onClick={showEmployeeDetails} >Get Employee Details</Button>
                <Button variant="primary" onClick={showAddNewEmp} >Add Employee Details</Button>
            </>
        </div>
        {showEmpDetails && <div id="dv_EmployeeDetails">
        <GetEmployeeDetails />
        </div> }
        {showNewEmp && <div id="dv_UpdateNewEmpDetails">
        <SetEmployeeDetails />
        </div>}
        </React.Fragment>);
}

export default HomeComponent;