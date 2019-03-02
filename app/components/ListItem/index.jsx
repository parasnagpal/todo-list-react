import React from 'react';

import '../ListItem/style.scss'

const ListItem=({title,done,toggleStatus})=>(
 <li className="list-item rounded">
   <span className="title">{title}</span>
   <button className="status btn btn-dark" value={done} onClick={toggleStatus}>
    {checkstatus(done)}
   </button>
 </li>
);

function checkstatus(bool)
 {
   if(bool)
     return "Done"
   else return "Not Done"  
 }


export default ListItem;