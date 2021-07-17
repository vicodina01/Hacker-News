
const Header = ({title}) => {
    
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>      
        </header>
    )
}

Header.defaultProps = {
    title: 'HACKER NEWS',
}


export default Header
