import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_API_URL;

const postRequest = async ({ body, query, params, endPoint, token }) => {
  return await axios.post(
    `${baseURL}/${endPoint}/${params ? params : ""}`,
    body,
    {
      params: query,
      headers: {
        ...(token ? { Authorization: token ? token : undefined } : {}),
        "Content-Type": "application/json",
      },
    }
  );
};

const getRequest = async ({ query, params, endPoint }) => {
  return await axios.get(`${baseURL}/${endPoint}/${params ? params : ""}`, {
    params: query,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const delRequest = async ({ query, params, endPoint }) => {
  return await axios.delete(`${baseURL}/${endPoint}${params ? params : ""}`, {
    params: query,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const putRequest = async ({ body, query, params, endPoint }) => {
  return await axios.put(
    `${baseURL}/${endPoint}/${params ? params : ""}`,
    body,
    {
      params: query,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export { postRequest, getRequest, delRequest, putRequest };
