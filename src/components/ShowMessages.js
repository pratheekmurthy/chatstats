import React,{useState} from 'react'
import {useSelector} from 'react-redux'


const ShowMessages=(props)=>{
    const {pstudent,chats} = props
    const students = useSelector(state => state.students)
    
    return (<div>
        <h2>{pstudent}</h2>
        <h3>Total Messages - {chats.length}</h3>
        {
            chats.map((ele)=>{
                return <li>{ele.createdAt} - {ele.value} </li>
            })
        }
       
    </div>)
}

export default ShowMessages