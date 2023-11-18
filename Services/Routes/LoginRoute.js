
import { userApi,dialApi,cassandraApi } from "./apis";
import { saveTokenItems,checkBearerToken } from "../DB/dbServices";
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDB')
import { Device } from "@twilio/voice-sdk"
export const getHeaders = (params) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      // Add any other necessary headers here
    },
    params: params
  };

  return headers;
};
import { AxiosRequestConfig } from 'axios'; // Import the appropriate type for Axios request configuration

export const getHeadersToken = async (params = {},enableProductId= true)=>{
  try {
    const token = await checkBearerToken();
    
    if (typeof token !== 'string' && token !== null) {
      throw new Error('The retrieved token is not a string.');
    }


    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: enableProductId ? { ...params, product_id: 3 } : { ...params },
    };

    return headers;
  } catch (error) {
    throw new Error(`getHeadersToken error: ${(error).message}`);
  }
};


export const userLogin = async ({ email, password }) => {
  try {
    let headers = getHeaders({
      email: email,
      password: password,
    })
    const response = await userApi.get(`/login`, headers);
    if (response.data.code == 200) {
      await saveTokenItems(email, password, response.data.model.auth_token)
      return true
    } else {
      console.log(response.data.msg)
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getContactList = async () => {
  try {
    let headers =await getHeadersToken({
      related_id:'993'
    })
    const response = await cassandraApi.get(``, headers);
    if (response.data.code == 200) {
      //console.log(response.data.model)
      console.log("Contacts Fetced")
      return response.data.model.Contacts
    } else {
      console.log(response.data)
      return []
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export const getCallLogs = async () => {
  try {
    let headers =await getHeadersToken({
      related_id:'993',
      page_no:1,
      limit:40,
    })
    const response = await dialApi.get(`/calls/logs`, headers);
    if (response.data.code == 200) {
      console.log(response.data.model)
      //console.log("Logs Fetced")
      return response.data.model
    } else {
      console.log(response.data)
      return []
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getAgents=async ()=>{
  try {
    let headers =await getHeadersToken({
      related_id:'993'
    })
    const response = await dialApi.get(`/agents`, headers);
    if (response.data.code == 200) {
      //console.log(response.data.model)
      console.log("Agents Fetched")
      return response.data.model
    } else {
      console.log(response.data)
      return []
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export const twilioDeviceConnection = (token) => {
  console.log("Initializing device with token:", token)
  let device_instance = new Device(token, {
      logLevel: 1,
      answerOnBridge: true,
      // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
      // providing better audio quality in restrained network conditions. Opus will be default in 2.0.
      codecPreferences: ["opus", "pcmu"],
  })

  device_instance.on("registered", function () {
      console.log("Ready To Make Call")
  })
  device_instance.on("error", function (error) {
      console.log("Call Register Error")
  })
  //device_instance.on("incoming", handleIncomingCall)
  device_instance.register()
  return device_instance
  //setCallApiDevice(device_instance)
}
export const getAgentToken = async () => {
  try {
     
      const headers = await getHeadersToken({
          related_id: '993',
      })

      const response = await dialApi.get(`/agents/token`, headers)
      if (!response.data.model) {
        console.log(response.data.code)
        return
      }

      return response.data.model
  } catch (error) {
      console.log(error)
  }
}
export const updateAgentStatus = async () => {
  try {
     
      const headers = getHeadersToken({
          related_id: '993',
      })
      const data = {
          related_id: '993',
          online: true,
      }

      // const updateAgentStatusResponse = await dialApi.put(`/agents`, data, headers)
      // if (updateAgentStatusResponse.data.code !== 200) {
      //   console.log(updateAgentStatusResponse.data.model)
      //   return
      // }
      const token = await getAgentToken()
      let instance=twilioDeviceConnection(token.token)
      return instance
  } catch (error) {
      console.log(error)
  }
}

export const makeOutgoingCall = async (deviceInstance, number) => {
  
  const phone_number_id = 64
  let call = await deviceInstance.connect({
      params: {
          To: number,
          phone_number_id: phone_number_id,
      },
  })

  call.on("disconnect", () => {
      //endCallHandle()
  })

  call.on("accept", async () => {
      console.log("Call Accepted")
  })
  call.on("cancel", () => {
     // endCallHandle()
      // updateCallEvent(CallEventsEnum.CANCELED);
  })
  call.on("reject", () => {
      //endCallHandle()
      // updateCallEvent(CallEventsEnum.REJECTED);
  })
  call.on("error", (e) => {
      //endCallHandle()
      // updateCallEvent(CallEventsEnum.FAILED);
  })

  return call
}

export const fetchContactByNumber=async(number)=>{
    try{
      const headers=await getHeadersToken({
        related_id:'993',
        phone_number: `${"%2B91"}${number}`,
       })
  
       const response = await cassandraApi.get(``, headers)
       if(response.data.code !==200){
        console.log(response.data)
        return ""
       }
       else{
        console.log(response.data.model.firstName)
        return response.data.model.firstName
       }
    }catch(error){
      console.log(error.message)
    }
}