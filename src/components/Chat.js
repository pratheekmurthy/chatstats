import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {uploadData} from '../actions/DataActions'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    display: flex;
    // flex-direction: row;
    justify-content : center;
`

const Chat =(props)=>{
    const [file,setFile] = useState(true)
    const data = useSelector(state => state.students)
    const dispatch = useDispatch()


    const handleReader =(e)=>{
        setFile(false)
        const result =[]
        var flag = false
        const files = e.target.files
        var fr=new FileReader();
        fr.readAsText(files[0]); 
        fr.onload=(e)=>{
            const result1 =e.target.result
            // const res1 = result1.replace(/To Aniruddha SG(privately)/, "")
            const array1 = result1.split('\n').map((str) => { return str.split("\t From ") })
            
            const array2 = array1.map((ele,i) => {
                return ele.map((el, i) => {
                   if (i === 0) {
                       return el
                   } else {
                       const array = el.split(" : ")
                       return { studentName: array[0], chat: array[1] }
                   }
                })
            })
            
            const students = array2.map((ele) => {
                return {createdAt:ele[0],...ele[1]}
            })

            for (let i = 0; i < students.length; i++){
                if (result.length > 0) {
                    for (let j = 0; j < result.length; j++) {
                        if (result[j].studentName === students[i].studentName) {
                            result[j].chats.push({value: students[i].chat,createdAt:students[i].createdAt })
                            break
                        } else if(j === result.length-1) {
                           flag = true
                        }
                    }
                } else {
                    result.push({studentName: students[i].studentName, chats: [{value:students[i].chat,createdAt:students[i].createdAt }] })
                }
                if (flag) {
                    
                    result.push({studentName: students[i].studentName, chats: [{value:students[i].chat,createdAt:students[i].createdAt }] })
                    flag = false
                } else {
                    continue
                }
            }
            dispatch(uploadData(result));    
            
        }  

    }


    return <div>
        <StyledH1>Upload Zoom file here</StyledH1>
        <input type="file" name="file"  onChange={handleReader}/>
        {data.length >1 && <h3>Check student stats in students info section</h3>}
    </div>
}

export default Chat