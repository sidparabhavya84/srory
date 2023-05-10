import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (

        
        <>
            <header className='bg-dark mb-3' style={{ height: "65px" }}>
                <div className='container'>
                    <div className='row align-item-center'>.
                        <div className='logo col-2'>
                            <h2 className="m-3"  style={{height: "75px" , width: "150px",color:"white"}} >
                                <span>D</span>ream
                                <span>S</span>tory
                            </h2>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-end '>
                                <li className='p-2 m-3'>
                                    <NavLink to='/' className='text-decoration-none text-white'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink to='/createStory' className='text-decoration-none text-white'>
                                        CreatStory
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink className='text-decoration-none text-white'>
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink className='text-decoration-none text-white'>
                                        Blog
                                    </NavLink>
                                </li>
                                <li className='p-2 m-3'>
                                    <NavLink className='text-decoration-none text-white'>
                                        Help
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header