import { NavLink as NavlinkComp } from 'react-router-dom'

import style from '/.Navlink.module.css'

 function Navlink({to, children, ...props}) {
  return (
  <NavlinkComp>
  {...props}
    to={to}
    className={({isActive})=>(isActive ? style.isActive : undefined)}
  </NavlinkComp>
  )
}
export default NavLink;