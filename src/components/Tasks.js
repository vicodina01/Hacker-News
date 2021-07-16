
import Task from "./Task"

const Tasks = ({tasks, onToggle}) => {

    return (
        <>
          {tasks.map((task) =>(
              <Task key={task.objectID} 
                    task={task} 
                    onToggle={onToggle}></Task>
          ))}  
        </>
    )
}

export default Tasks
