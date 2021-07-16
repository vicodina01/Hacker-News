import { useState, useEffect} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () =>{
      const getTasksFromAPI =  await fetchTasks()
      setTasks(getTasksFromAPI)
    }

    getTasks()
  },[])

  const fetchTasks =  async () => {
    const res = await fetch("https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0");
    const data = await res.json()

    const hitList = [];

    //push localFavs on current data
    data.hits.forEach((hit) => {
      hit.localFavs = getLocalFavs(hit.objectID);
      hitList.push(hit)
    });
    console.log(hitList)
    return hitList
  }

  //Toggle Favs
  const toggleFavs = (id) => {
 
    const localFav = getLocalFavs(id);
    localStorage.setItem('localStorageFavs_'+ id, !localFav);

    setTasks(tasks.map((task) => task.objectID === id ? { ...task, localFavs: !localFav}: task))
  }

  //get LocalFavs
  const getLocalFavs = (id) => {  
    const localFav = localStorage.getItem('localStorageFavs_'+ id)
    console.log(localFav)
    return localFav !== undefined && localFav !== null ? localFav : false;
    
  }

  return (
    <div className="container">
      <Header/>
      
      {tasks.length > 0 ?(
        <Tasks tasks = {tasks} onToggle={toggleFavs}  />
      ) : (
        "No tasks to wshow"
      )}   
    </div>
  );
}

export default App;
