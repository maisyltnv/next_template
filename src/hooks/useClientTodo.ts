import { API_ENDPOINTS } from "@/core/config/constants";
import { todoServiceAPI } from "@/data/services/todos.svc";
import { ApiResponse } from "@/core/types/api.type";
import { SubscriptionPlanType } from "@/core/types/subscription.type";
import { Todo } from "@/core/types/todo.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useFetchTodo = () => {
    const { data, isError, isLoading, refetch } = useQuery<Todo[], Error>(
        {
            queryKey: [API_ENDPOINTS.ADMIN.TODO.GET_ALL_TODOS],
            queryFn: async () => await todoServiceAPI.fetchTodos(),
        }
    );
    return {
        todos: data,
        todoIsError: isError,
        todoIsLoading: isLoading,
        todoRefetch: refetch
    };
};

export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation<Todo, Error, Todo>({
        mutationFn: async (data: Todo): Promise<Todo> => todoServiceAPI.AddTodo(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: [API_ENDPOINTS.ADMIN.TODO.GET_ALL_TODOS],
            });
        },
    });
    return mutation;
};

export const useFetchPlan = () => {
    const { data, isError, isLoading, refetch } = useQuery<ApiResponse<SubscriptionPlanType[]>, Error>(
        {
            queryKey: [API_ENDPOINTS.USER.LOAN.LOAN_TYPE],
            queryFn: async () => await todoServiceAPI.fetchPlan(),
        }
    );
    return {
        plans: data,
        planIsError: isError,
        planIsLoading: isLoading,
        planRefetch: refetch
    };
};
