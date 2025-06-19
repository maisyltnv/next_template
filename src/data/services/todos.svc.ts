import { Todo } from "../../core/types/todo.type";


import axiosInstance, { axiosPublicInstance } from "@/core/config/axios";
import { API_ENDPOINTS } from "@/core/config/constants";
import { ApiResponse } from "@/core/types/api.type";
import { SubscriptionPlanType } from "@/core/types/subscription.type";


export const todoServiceAPI = {
    fetchTodos: async (): Promise<Todo[]> => {
        // await new Promise((resolve) => setTimeout(resolve, 4000));
        const { data } = await axiosInstance.get<Todo[]>(
            API_ENDPOINTS.ADMIN.TODO.GET_ALL_TODOS
        );
        return data;
    },

    AddTodo: async (todo: Todo): Promise<Todo> => {
        const { data } = await axiosInstance.post<Todo>(
            API_ENDPOINTS.ADMIN.TODO.GET_ALL_TODOS,
            todo
        );
        return data;
    },
    fetchPlan: async (): Promise<ApiResponse<SubscriptionPlanType[]>> => {
        const { data } = await axiosPublicInstance.get<ApiResponse<SubscriptionPlanType[]>>(
            "/api/v1/tenant/public/subscription/plan"
        );
        return data;
    },
}