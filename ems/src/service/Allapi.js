import BASE_URL  from "./Baseuerl" 
import { commonRequest } from "./Commonrequest"



// register


export const registerApi=async (header,body)=>{
  return await commonRequest('POST',`${BASE_URL}/empolyees/register`,body,header)
    
}

// get all employees


// add

// edit

// delete

// 