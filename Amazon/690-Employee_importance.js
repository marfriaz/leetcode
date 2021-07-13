//////// Employee Importance ///////
/* 
You have a data structure of employee information, which includes the employee's unique id, their importance value, and their direct subordinates' id.

You are given an array of employees employees where:

employees[i].id is the ID of the ith employee.
employees[i].importance is the importance value of the ith employee.
employees[i].subordinates is a list of the IDs of the subordinates of the ith employee.
Given an integer id that represents the ID of an employee, return the total importance value of this employee and all their subordinates.
*/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

var GetImportance = function (employees, id) {
  const directory = new Map();

  employees.forEach((employee) => directory.set(employee.id, employee));

  return dfs(id);

  function dfs(id) {
    const info = directory.get(id);
    let res = info.importance;

    for (const subordinate of info.subordinates) {
      res += dfs(subordinate);
    }

    return res;
  }
};

let employees = [
  [1, 5, [2, 3]],
  [2, 3, []],
  [3, 3, []],
];
let id = 1;

console.log(GetImportance(employees, id));
