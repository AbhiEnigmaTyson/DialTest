import axios from "axios";

const devApis = {
  USER_API: " https://jowzxoke22.execute-api.ap-south-1.amazonaws.com/dev/user-management-service",
  DIAL_API: "https://67e47gyr62.execute-api.ap-south-1.amazonaws.com/dev/calling-service",
  CASSANDRA_API:"https://jowzxoke22.execute-api.ap-south-1.amazonaws.com/dev/cassandra-service/contact",
};

const getApiUrls = () => {
    return devApis;
};

export const APIS = getApiUrls();

export const userApi = axios.create({
  baseURL: APIS.USER_API,
});

export const dialApi=axios.create({
  baseURL:APIS.DIAL_API
})

export const cassandraApi=axios.create({
  baseURL:APIS.CASSANDRA_API
})