/* Your Code Here */
function createEmployeeRecord(arr){
    let employee = {
        'firstName' : arr[0],
        'familyName' : arr[1],
        'title' : arr[2],
        'payPerHour' : arr[3],
        'timeInEvents': [],
        'timeOutEvents': [] 
    }
    return employee;
}

function createEmployeeRecords(arrOfArr){
    let employeeRecords = []
    arrOfArr.forEach(arr => {
       let employeeObj = createEmployeeRecord(arr)
       employeeRecords.push(employeeObj)
    })
    return employeeRecords;
}



function createTimeInEvent(dateInStamp){
    let newEvent = {
      'type' : 'TimeIn',
      'date' : dateInStamp.slice(0, 10),
      'hour' : parseInt(dateInStamp.slice(-4))
    }
    this.timeInEvents.push(newEvent)
    return  this
  }

function createTimeOutEvent(dateOutStamp){
    let newEvent = {
      'type' : 'TimeOut',
      'date' : dateOutStamp.slice(0, 10),
      'hour' : parseInt(dateOutStamp.slice(-4))
    }
    this.timeOutEvents.push(newEvent)
    return this 
  }

function hoursWorkedOnDate(date){
    let start = this.timeInEvents.find(event => event.date === date)
    let finish = this.timeOutEvents.find(event => event.date === date)
    let hours = (finish['hour'] - start['hour'])/100
    return hours
} 

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.bind(this)
    
    let payOwed = this.payPerHour * hours(date)
    return payOwed
}

function allWagesFor(){
    let allWages = 0;
    this.timeInEvents.forEach(day => {
      let owed = wagesEarnedOnDate.bind(this)
      allWages += owed(day.date)
    })
    return allWages
}

function findEmployeeByFirstName(arr, name){
    let personLookUp = arr.find(employee => employee.firstName === name)
    return personLookUp;
}

function calculatePayroll(arr){
   
    let payroll = 0
    arr.forEach(employee => {
        let allWages = allWagesFor.bind(employee)
        payroll += allWages()
    })
    return payroll;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

