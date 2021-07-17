import React from 'react'

const ButtonFilterFavs = ({showLocalFavs, showAllTasks, currentFilter}) => {
    return (
        <>
            <div className="button-container">
                <button type="button" 
                    className={`button-allTasks ${currentFilter === 'all' ? 'active': ''}`} 
                    onClick={() => showAllTasks()} >All</button>
                <button type="button" 
                    className={`button-localFavs ${currentFilter === 'favs' ? 'active': ''}`} 
                    onClick={() => showLocalFavs()} >My Favs</button>   
            </div>
        </>
    )
}

export default ButtonFilterFavs

