import iconTime from '../img/iconmonstr-time-2.svg'
import iconFavs3 from '../img/iconmonstr-favorite-3.svg'
import iconFavs2 from '../img/iconmonstr-favorite-2.svg'
import moment from "moment";

const Task = ({task, onToggle}) => {
    return (
        (task.author !== undefined &&  task.author !== null && 
            task.story_title !== undefined &&  task.story_title !== null && 
            task.story_url !== undefined &&  task.story_url !== null && 
            task.created_at !== undefined && task.created_at !== null ) ? 

            <div className="task">
                <div>
                    <div className="like-content" onClick={() => onToggle(task.objectID)}>
                        <img src={task.localFavs ? iconFavs3 :iconFavs2 } 
                            className={task.localFavs ? "iconmonstr-favorite-3" : "iconmonstr-favorite-2"} 
                            alt="iconFavs" />
                    </div>
                    
                    <img src={iconTime} className="iconmonstr-time-2" alt="iconTime" />
                    <p className="task-date">{moment(task.created_at).fromNow()} by {task.author}</p>
                    <a href={task.story_url} target="_blank">
                        <h3 className="task-title">{task.story_title}</h3>
                    </a>
                </div>
            </div>

        :""   
    )
}

export default Task
