import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import ShowMessages from './ShowMessages'
import StudentsChart from './studentChart'
import Chat from './Chat'

const StudentInfo =(props)=>{
    const students = useSelector(state => state.students)
    const [pstudent,setStudent] = useState("")
    const [chats,setChats] = useState([])

    // console.log(students)

    const searchHandler =(e)=>{
        let result = e.target.value
        setStudent(result)
    }

    

    const showDeatils =(pstudent)=>{
        setStudent(pstudent)
        const result = students.filter((ele)=>{
            return ele.studentName === pstudent
        })
        console.log(result[0].chats)
        setChats(result[0].chats)
    }

    
    
 
    return (<div>
        {students.length >1 ?(<div>
        <h3>Number of students Attended class - {students.length}</h3>
        <div><label>Search : </label><input type ="text" placeholder="search" value={pstudent} onChange={searchHandler}/><button onClick={showDeatils}>search</button></div><br/>
        {pstudent ? (<ShowMessages pstudent={pstudent} chats={chats}/>) : (<div>
            {students.map((ele)=>{
                return <li onClick={()=>{
                    showDeatils(ele.studentName)
                }}>{ele.studentName}</li>
            })}
        </div>)}
        <StudentsChart/>
        </div>):(<h1>Upload Chat Data In Home page</h1>)}
        
       
            
        
    </div>)
}

export default StudentInfo