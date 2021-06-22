var InitializeState= {"EmployeeRecords":[{Name:"Megala",BDate:"12.12.2008",Job:"Software Engineer",WorkingDays:300,NonWorkingDays:45,Holidays:20},
                                        {Name:"Sara",BDate:"06.06.2006",Job:"Engineer",WorkingDays:200,NonWorkingDays:145,Holidays:20},
                                        {Name:"Teena",BDate:"04.04.2004",Job:"Lead Engineer",WorkingDays:365,NonWorkingDays:0,Holidays:20},
                                        {Name:"Mone",BDate:"02.02.2002",Job:"Tech Engineer",WorkingDays:180,NonWorkingDays:165,Holidays:20},
                                        {Name:"Jola",BDate:"01.01.2001",Job:"Assistant Software Engineer",WorkingDays:100,NonWorkingDays:245,Holidays:20}],
                    "EmployeePerformance":[{Name : "Megala", Performance : "1"},
                                        {Name : "Sara", Performance : "3"},
                                        {Name : "Teena", Performance : "5"},
                                        {Name : "Mone", Performance : "2"},
                                        {Name : "Jola", Performance : "3"}]}

export default function EmployeeDetailsReducer (state=InitializeState,action){
    var stateObject={...state};
    var newObject= {"EmployeeRecords":stateObject.EmployeeRecords};
    if(action.type === "SetEmployeeRecords"){ 
        debugger;
        let len=stateObject.EmployeeRecords.length;
        stateObject.EmployeeRecords[len] = action.data;
        return stateObject;
    }
    return newObject;
}

export const EmployeePerformanceReducer =(state=InitializeState,action)=>{
    var stateObject={...state};
    var newObject= {"EmployeePerformance":stateObject.EmployeePerformance};
    if(action.type === "SetEmployeePerformance"){
        let len=stateObject.EmployeePerformance.length;
        stateObject.EmployeePerformance[len] = action.data;
        return stateObject;
    }
    return newObject;
}