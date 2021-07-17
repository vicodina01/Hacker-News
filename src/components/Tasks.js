
import Task from "./Task"
import ButtonFilterFavs from "./ButtonFilterFavs"

const Tasks = ({tasks, onToggle, showLocalFavs, showAllTasks, currentFilter, onSelect, selectedNews}) => {

    const handleSelectNews= (e) =>{
        onSelect(e.target.value)
        e.preventDefault();
    }

    return (
        <> 
            <ButtonFilterFavs showLocalFavs={showLocalFavs} 
                showAllTasks={showAllTasks} 
                currentFilter={currentFilter}></ButtonFilterFavs>
          
            <div>
                <select id="idsSelectedNews" 
                    onChange={handleSelectNews} 
                    value={selectedNews}
                    className="select-news">
                        <option value="select">Select your news</option>
                        <option value="angular">Angular</option>
                        <option value="reactjs">ReactJs</option>
                        <option value="vuejs">VueJs</option>
               </select>
            </div>

            {tasks.map((task) =>(
                <Task key={task.objectID} 
                        task={task} 
                        onToggle={onToggle}></Task>
            ))}  
        </>
    )
}

export default Tasks
