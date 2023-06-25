import Task from "./task.js";
import prompt from 'prompt-sync';
const t1=new Task(Math.round(Math.random()*1000),"AAAAA","Lorem ipsum dolor sit amet consectetur adipisicing elit");
const t2=new Task(Math.round(Math.random()*1000),"BBBBB","Ut quidem ab cum, numquam recusandae illum perferendis nobis error obcaecati facere a doloremque");
const t3=new Task(Math.round(Math.random()*1000),"CCCCC","reprehenderit autem praesentium dolor magnam ratione accusamus quibusdam?");
let todo=[t1,t2,t3];
const input=prompt();


const printMenu=()=>{
console.log(`
***************************
Welcome to JS TODO-APP
***************************
Select an action:
1) Add a new task
2) List all tasks
3) List completed tasks
4) Mark the task as done
5) Delete a task
6) Sort tasks by the due date
7) Sort tasks ID
8) Clear all tasks
8) Exit All Tasks

***************************
`);
}

const addItem=()=>{
    const title=input("please enter title : ")
    const description=input("please enter description : ")
    const newTask=new Task(Math.round(Math.random()*1000),title,description);
    todo.push(newTask)
}
const formatTask=(task)=>{
    return `${task.id} ${task.title}${task.completed? `Done` : ``}\n
    ${task.description}
    -----------------------------------
    `
}

const printTask=()=>{
    const AllTask=todo.map(formatTask)
    AllTask.forEach(item=> console.log(item))
}
const MarkTaskAsDone=()=>{
 const id=Number( input("Enter Done task ID : "));
 const task=todo.find(item=>item.id === id);
 task.completed=true;

}
const listCompletedTask=()=>{
    const completedTasks=todo.filter(task=>task.completed).map(formatTask);
    completedTasks.forEach(item=> console.log(item))
}
const DeletedTask=()=>{
    const id=Number(input("Enter task ID :) "));
    todo=todo.filter(task => task.id!==id); 
}
const SortTaskByID=()=>{
    todo.sort((a,b)=>a.ID>=b.ID ? 1 : -1 );
}

const main=()=>{
    while(true){
        printMenu()
        const choice=input("Enter choice Number : ")
        switch (choice) {

        case "1":
        addItem();
        break;

        case "2":
        printTask();
        break;

        case "3":
        listCompletedTask();
        break;

        case "4":
        MarkTaskAsDone();
        break;
        case "5":
        DeletedTask();
        break;
        case "7":
        SortTaskByID();
        break;


        case "0":
        return;


        default:
        break;
        }
    }
}
main()