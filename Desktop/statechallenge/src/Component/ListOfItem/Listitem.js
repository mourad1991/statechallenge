import React from 'react'

const Listitem = ({items,Handleid}) => {
    return (
        <div>
            {items.map((el,i)=>

<div key={i}>
    <p>{el}</p>
    <button onClick={()=>Handleid(i)}>Delete</button>
</div>)} 
        </div> );
}

export default Listitem
