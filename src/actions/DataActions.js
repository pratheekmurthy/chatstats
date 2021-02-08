export const uploadData =(data)=>{
    return {type : 'UPLOAD_DATA', payload : data}
}

export const getData =() =>{
    return {type : 'GET_DATA'}
}
