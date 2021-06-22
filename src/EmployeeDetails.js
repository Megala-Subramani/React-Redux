import React,{useState} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {SetEmployeeRecordsFunc} from './Components/actions';
import lodash from 'lodash';


const GetEmpDetails=(props)=>{
    console.log("EmpDetails : Props ",props);
    return (<div className="dv_tableContainer">
            <>
                <Container>
                    <Row className="thr" >
                        <Col>Name</Col>
                        <Col>D.O.B</Col>
                        <Col xs={3}>Job Title</Col>
                        <Col>Working Days</Col>
                        <Col>Non-Working Days</Col>
                        <Col>Holidays</Col>
                    </Row>{ 
                    props.EmpRecords.map((record,index)=>{
                        return (<Row key={index} >
                            <Col>{record.Name}</Col>
                            <Col>{record.BDate}</Col>
                            <Col xs={3}>{record.Job}</Col>
                            <Col>{record.WorkingDays}</Col>
                            <Col>{record.NonWorkingDays}</Col>
                            <Col>{record.Holidays}</Col>
                        </Row>)
                    })}
                </Container>
            </>
            </div>)
}
const AddEmployeeDetails=(props)=>{
    console.log("AddEmployeeDetails : Props ",props);
    let empObj={Name:"",BDate:"",Job:"",WorkingDays:"",NonWorkingDays:"",Holidays:""};
    const[empDetails,setEmpDetails] = useState(empObj);

    function updateEmpDetails(event){
        var obj = {...empDetails};
        obj[event.target.name]=event.target.value;
        setEmpDetails(obj);        
    }

    function saveEmpDetails(event){
        console.log("My Emp Data : ",empDetails);
        debugger;
        props.addNewRecToStore(empDetails);
        alert("Saved Successfully");
        clearEmpDetails(event);
    }

    function clearEmpDetails(event){
        let childCollection = event.target.parentElement.parentElement.parentElement.childNodes;
        for(let i=0;i<childCollection.length;i++){
           let input = childCollection[i].getElementsByTagName("input");
           if(input[0]){
            input[0].value="";
           }           
        }
        setEmpDetails(empObj);
    }

    return (<div className="dv_AddNewEmpContainer">
      <table>
        <thead></thead>
        <tbody>
            <tr>
                <td width="20%" ><label>Employee Name</label></td>
                <td><input type="text" maxLength="32" name="Name" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr>
                <td><label>Date Of Birth</label></td>
                <td><input type="text" maxLength="32" name="BDate" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr>
                <td><label>Job Title</label></td>
                <td><input type="text" maxLength="50" name="Job" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr>
                <td><label>Working Days</label></td>
                <td><input type="text" maxLength="10" name="WorkingDays" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr>
                <td><label>Non-Working Days</label></td>
                <td><input type="text" maxLength="10" name="NonWorkingDays" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr>
                <td><label>Holidays</label></td>
                <td><input type="text" maxLength="10" name="Holidays" onChange={lodash.debounce(updateEmpDetails,1000)}/></td>
            </tr>
            <tr></tr>
            <tr>
                <td colSpan="2" rowSpan="2">
                    <Button variant="success" onClick={saveEmpDetails} >Save</Button>
                    <Button variant="secondary" onClick={clearEmpDetails} >Reset</Button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>)
}
function mapStateToProps(state){
    debugger;
    return {
        EmpRecords : state.EmployeeDetailsReducer.EmployeeRecords
    }
}
function mapDispatchToState(dispatch){
    debugger;
    return {
        addNewRecToStore  : (obj)=>{dispatch(SetEmployeeRecordsFunc(obj))}
    }
}
export const GetEmployeeDetails =  connect(mapStateToProps,mapDispatchToState)(GetEmpDetails);
export const SetEmployeeDetails =  connect(mapStateToProps,mapDispatchToState)(AddEmployeeDetails);