
export function SetEmployeeRecordsFunc(empObj){
    debugger;
    return {
        type : "SetEmployeeRecords",
        data : empObj
    }
}

export function SetEmployeePerformanceFunc(perObj){
    return {
        type : "SetEmployeePerformance",
        data : perObj
    }
}