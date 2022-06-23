import {
  delRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../connection/network";

const tasksAPI = "tasks";

export const ListTasksService = async () => {
  try {
    const data = await getRequest({
      endPoint: tasksAPI,
    });

    return data;
  } catch (error) {
    const sError = error?.response?.data?.error?.message;
    return { error: sError };
  }
};

export const addTaskService = async ({ title, description }) => {
  try {
    const data = await postRequest({
      endPoint: tasksAPI,

      body: {
        title,
        description,
      },
    });
    return data;
  } catch (e) {
    const { error } = e?.message;
    return { error };
  }
};
