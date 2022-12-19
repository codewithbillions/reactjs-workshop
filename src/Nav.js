import {Link, NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <Link to="/">[Home]</Link>
        <Link to="/users">[All User]</Link>
        <Link to="/users/123">[ User 123]</Link>
        <Link to="/users/me">[User Me]</Link>
        <NavLink state={{val:456}} to="/loc" style={({isActive}) => ({color: isActive? 'red' : 'gold'})}>[useLocation]</NavLink>
    </nav>
  )
}
