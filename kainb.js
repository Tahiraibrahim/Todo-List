#! /usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //...................................Options..................................//
    let Option = await inquirer.prompt([{
            type: 'list',
            name: "user_option",
            message: 'select an option',
            choices: ["Add", "remove"]
        }]);
    //........................................Add....................................//
    if (Option.user_option === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "Write something to add in the task list."
            }]);
        if (ans.user_ans !== '') {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log('Please write something to add in the todo list');
        }
    }
    //...................................remove.......................................//
    else if (Option.user_option === "remove") {
        let removechoice = await inquirer.prompt([{
                type: 'list',
                name: 'remove_item',
                message: 'select item to remove',
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removechoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('You remove :', removechoice.remove_item);
            console.log(todo_list);
        }
    }
    //.................................conformation.............................//
    let user_ans = await inquirer.prompt([{
            type: 'confirm',
            name: 'selection',
            message: 'Do you want to continue?',
            default: true
        }]);
    if (user_ans.selection === false) {
        while_condition = false;
    }
}
console.log('Thank you for using to do list');
