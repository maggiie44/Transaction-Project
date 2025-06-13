import './Nav.css';
const Nav = () =>{
    return(
        <div className="Nav-container">
            <div >
                <ul className='Nav-list'>
                    <img src="https://picsum.photos/id/237/200/300"></img>
                </ul>
            </div>

            <div>
                <ul className='Nav-list'>
                    <li className='Nav-item'><a href='/'>home</a></li>
                    <li className='Nav-item'><a href='#project'>proJect</a></li>
                    <li className='Nav-item'><a href='#contact'>contact</a></li>
                </ul>
            </div>
            

            <div> 
                <ul className='Nav-list'>
                    <li className='Nav-item'>facebook</li>
                    <li className='Nav-item'>Linkin</li>
                    <li className='Nav-item'>Email</li>
                </ul>
            </div>
        </div>

    )
}

export default Nav;