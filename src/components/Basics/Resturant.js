import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


const uniqueList = [
  ...new Set (
    Menu.map((curElem) =>{
  return curElem.category;
})
),
"All",
];


const Resturant = () => {
  
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList ] = useState(uniqueList);
  //Use of filter function 
  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
    })

    setMenuData(updatedList);
  };

 
  return (
    <>
      <div className='name'>
    <h1>Welcome to Hotel Himalayan </h1>
    <br />
    <h3>Avaliable Foods for Today</h3>
  </div>
      <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData= {menuData} />
    </>
  )
}

export default Resturant