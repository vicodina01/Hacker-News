import PropTypes from 'prop-types'
import Button
 from './Button'
const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            {/* <Button 
                color={showAdd ?'orange':'green'} 
                text={showAdd ? 'Close':'Add'} 
                onClick={onAdd}></Button> */}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'HACKER NEWS',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//    color:"red",
//    backgroundColor: "black"
// }

export default Header
