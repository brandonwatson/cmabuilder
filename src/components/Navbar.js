import { NavLink } from 'react-router-dom'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'


function Navbar({signOut}) {
return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
        <Button onClick={signOut}>Sign out</Button>
    </div>
    )
}

export default Navbar