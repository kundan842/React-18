// here in case of taskReducer for add option , task objetc will be passed 
// in case of deltee type, task id need to pass
// so there is two diffrent payload 
// so action will be union of two action
interface Task {
    id: number;
    title: string;
  }

interface AddTask 
{
    type: 'ADD'
    task: Task

}

interface DeleteTask
{
    type: 'DELETE'
    id: number
}

// here user action will be either addtask or delete task with two diffrent payload

type TaskAction = AddTask | DeleteTask

const taskReducer = (tasks:Task[], action:TaskAction) =>
{

    switch(action.type)
    {
        case 'ADD':
            return [...tasks, action.task]
        case 'DELETE':
             return tasks.filter(task => task.id != action.id)
    }

}

export default taskReducer;



