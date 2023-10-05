// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key , value  ){
    return {...employee , ...{['streetAddress']: '11 Broadway'}}
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name ){
    const newEmployee = { ...employee};
    delete newEmployee[name];
    return newEmployee;

}




let newEmployee =  destructivelyDeleteFromEmployeeByKey(employee , name );



