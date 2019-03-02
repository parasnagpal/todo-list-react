import React from 'react';

import ListItem from '../ListItem';


const List=props=>{
    const {items,updateItem}=props;

    return(
      
      <ul className="list-group mx-5 rounded " >
           {
             items.map(({title,done},index)=>(
              <ListItem key={index} title={title} done={done} toggleStatus={() => updateItem(index, !done)} />
             ))
           }
      </ul>
      
    );
};
export default List;