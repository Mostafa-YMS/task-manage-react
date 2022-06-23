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

// export const addProductsCategoryService = async ({ title, pageId }) => {
//   try {
//     const {
//       data: { data },
//     } = await postRequest({
//       endPoint: tasksAPI,

//       body: {
//         title,
//         pageId,
//       },
//     });
//     return { data };
//   } catch (e) {
//     const { error } = e?.message;
//     return { error };
//   }
// };

// export const deleteProductsCategoryService = async ({ id }) => {
//   try {
//     const {
//       data: { data },
//     } = await delRequest({
//       endPoint: tasksAPI,
//       query: {
//         id,
//       },
//     });

//     return {
//       data,
//     };
//   } catch (error) {
//     const sError = error?.message;
//     return { error: sError };
//   }
// };
