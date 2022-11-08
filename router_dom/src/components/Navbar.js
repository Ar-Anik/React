// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>

//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>

//                 <li>
//                     <Link to="/services">Services</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={{fontWeight:"bold", color:"red"}} >Home</NavLink>
                </li>

                <li>
                    <NavLink exact to="/about" activeStyle={{fontWeight:"bold", color:"blue"}}>About</NavLink>
                </li>

                <li>
                    <NavLink exact to="/services" activeStyle={{fontWeight:"bold", color:"yellow"}}>Services</NavLink>
                </li>

                <li>
                    <NavLink exact to="/posts/react" activeStyle={{fontWeight: "bold", color:"maroon"}}>DynamicUrl-1</NavLink>
                </li>

                <li>
                    <NavLink exact to="/posts/react/js" activeStyle={{fontWeight:"bold", color:"green"}}>DynamicUrl-2</NavLink>
                </li>

                <li>
                    <NavLink exact to="/dashboard" activeStyle={{fontWeight:"bold", color:"#8fbc8f"}}>Dashboard</NavLink>
                </li>

                <li>
                    <NavLink exact to="/login">Login</NavLink>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
