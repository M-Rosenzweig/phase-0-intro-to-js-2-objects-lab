const employee = {
    name: 'Morris',
    streetAddress: '770 Eastern Parkway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee
    }


    function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
        obj[key] = value;
        return obj;
      };



function deleteFromEmployeeByKey(employee, key) {
    const WeekendEmployee = {...employee}
   delete WeekendEmployee[key];
   return WeekendEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}






// const outsideWeekendEmployee = deleteFromEmployeeByKey (employee)
// console.log (outsideWeekendEmployee)




// const destructionOutside = destructivelyUpdateEmployeeWithKeyAndValue (employee,)

console.log(employee);




    //  const newEmployeeOutside = updateEmployeeWithKeyAndValue(employee, "newKey", 'newValue');

    //  console.log(newEmployeeOutside);
    // console.log(employee)





























// const outsideFuncObj = {
//     key: 'ouside func value' 
// };


// function returnNewObjUsingOutSideInfo(obj){
//     let newObj = {...obj};
//     newObj[outsideFuncObj.key] = "new value inside func";
//     return newObj;    
// }

// function changeObjOutsideFunc(newValue){
//     outsideFuncObj[key] = newValue;
// }

// const newObjMadeByFunc = returnNewObjUsingOutSideInfo(outsideFuncObj);
// console.log("new obj from funct", newObjMadeByFunc);
// console.log(outsideFuncObj, "::::::::::: before func changes outside obj");

// changeObjOutsideFunc("outside function is changed");

// console.log(outsideFuncObj,"::::::::::::::: after outside func is changed");

































