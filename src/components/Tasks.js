
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
                        <option value="Angular">Angular</option>
                        <option value="ReactJs">ReactJs</option>
                        <option value="VueJs">VueJs</option>
               </select>
               {selectedNews}
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
