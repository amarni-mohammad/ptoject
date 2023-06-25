class Task{
    id;
    title;
    description;
    completed=false;
    dueDate;
    
    constructor(id,title="",description="",dueDate="",){
        this.id=id;
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
    }
    setCompleted(){
        this.completed=true;
    }
}

export default Task;
