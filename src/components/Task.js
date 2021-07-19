import iconTime from '../img/iconmonstr-time-2.svg'
import iconFavs3 from '../img/iconmonstr-favorite-3.svg'
import iconFavs2 from '../img/iconmonstr-favorite-2.svg'
import moment from "moment";

const Task = ({task, onToggle}) => {
    return (
        <div className="task">
            <div>
                <div className="like-content" onClick={() => onToggle(task.objectID)}>
                    <img src={task.localFavs ==="true" ? iconFavs3 :iconFavs2 } 
                        className="iconmonstr-favorite"
                        alt="iconFavs" />
                </div>
                
                <img src={iconTime} className="iconmonstr-time-2" alt="iconTime" />
                <p className="task-date">{moment(task.created_at).fromNow()} by {task.author}</p>
                <a href={task.story_url} className="task-link" target="_blank" rel="noopener noreferrer">
                    <h3 className="task-title">{task.story_title}</h3>
                </a>
            </div>
        </div>
    )
}

export default Task
