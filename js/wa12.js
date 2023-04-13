/*
Complete the following problems in JavaScript.
 You'll want to create an HTML page and link it to a new JavaScript file so you can view the console. 
 Make liberal use of the console.log functionality both to test and to ouput correct answers.

1. Create JSON for each employee with the following details 
(first name, department, designation, salary, raise eligible)
Sam, Tech, Manager, 40000, true
Mary, Finance, Trainee, 18500, true
Bill, HR, Executive, 21200, false

2. Create JSON for the company with the following details (companyName, website, employees)
Tech Stars, www.techstars.site, array of Employees

3. A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
Anna, Tech, Executive, 25600, false

4. Given the JSON for the company, calculate the total salary for all company employees.

5. It's raise time. If an employee is raise eligible, increase their salary by 10%. 
Given the JSON of the company and its employees, 
write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.

6. Some employees have decided to work from home. 
The following array indicates who is working from home. Use the array to update the company JSON. For each employee,
add another property called 'wfh' and set it to true of false
Working from home: ['Anna', 'Sam']

In your JavaScript, label each problem using a comment (i.e., // Problem 1). 
Be sure your JavaScript solution to each problem outputs a final answer into the console -- 
that's how we'll grade each problem (e.g., Problem 1 will result in a console.log() output of the JSON you create).

*/

// 1.
//first name, department, designation, salary, raise eligible)
//Sam, Tech, Manager, 40000, true
//Mary, Finance, Trainee, 18500, true
//Bill, HR, Executive, 21200, false
employees =  
    [
      {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "manager",
        "salary": 40000,
        "raiseElig": true
      },
      {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseElig": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseElig": false
      }

    ];

  console.log("problem 1: "); console.log(employees);


//2. Create JSON for the company with the following details (companyName, website, employees)
//Tech Stars, www.techstars.site, array of Employees

company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees,
};

console.log("problem 2: "); console.log(company);

//3. A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//Anna, Tech, Executive, 25600, false
employees.push(      {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseElig": false
  })
console.log("problem 3: "); console.log(company);

//4. Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0;
for(people of company.employees)
{
    totalSalary += people.salary;
}
console.log("problem 4: "); console.log("Total salary =", totalSalary);

/*
5. It's raise time. If an employee is raise eligible, increase their salary by 10%. 
Given the JSON of the company and its employees, 
write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
*/
console.log("Problem 5:");

for(people of company.employees)
{
    if(people.raiseElig === true)
    {
        people.salary = people.salary * 0.1; //rasie by ten percent
        people.raiseElig = false;
        console.log("raised salary of", people.firstName);
        //obj1, /* …, */ objN
    }
    console.log(people);
}

/*6. Some employees have decided to work from home. 
The following array indicates who is working from home. Use the array to update the company JSON. For each employee,
add another property called 'wfh' and set it to true or false
Working from home: ['Anna', 'Sam']
*/
for(people of company.employees)
{
    if(people.firstName === "Anna" || people.firstName === "Sam")
    { people.wfh = true; }
    else
    { people.wfh = false; }
}

console.log("Problem 6:"); console.log(company.employees);

