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

export const editTaskService = async ({ id, title, description }) => {
  try {
    const data = await putRequest({
      endPoint: tasksAPI,

      body: {
        id,
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

export const deleteTaskService = async ({ id }) => {
  try {
    const data = await delRequest({
      endPoint: tasksAPI,

      query: {
        id,
      },
    });
    return data;
  } catch (e) {
    const { error } = e?.message;
    return { error };
  }
};
