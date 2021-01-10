//import taskList from "../../../mockData/taksList";

export default function TaskView({task}) {
    return (
        <>
            <h1> Name : {task.name} </h1>
            <p>  description: {task.description} </p>
            <span> createdBy :{task.createdBy} </span>
        </>
    )
}