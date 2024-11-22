import React, { useState } from 'react';
import data from './data';
import './accordianStyle.css';

const AccordianComp = () => {
    const [expand,setExpand] = useState(false);
    const [expandId,setExpandId] = useState(null);
    const handleAccrodian = (id) => {
        console.log('event.target',id);
        setExpand(!expand);
        setExpandId(id);
    };

    return (
        <div className='container'>
            {
                data.map((item) => {
                    return (
                        <div style={{textAlign:'center',width:'50vw'}}>
                            <button key={item.id} onClick={()=>handleAccrodian(item.id)} className='btnStyle'>{item.question}</button>
                            {expand && expandId === item.id && <p key={item.id} className='content'>{item.answer}</p>}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default AccordianComp