import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
<img  className = "nav_logo"  src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/03/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png"
   alt = "netflix_logo" />

   <img className='nav_avatar' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEy-Hi3lntqni03_IgMHV_6nbWR5sG5EuE11oKCej1YqlHvxzo6lfyF7L_JXrJaoZIkY&usqp=CAU"
   alt = "avatar"/>
    </div>
  )
}

export default Navbar