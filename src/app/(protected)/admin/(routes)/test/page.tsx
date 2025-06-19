"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCreateTodo, useFetchTodo } from '@/hooks/useClientTodo'
import { decremented, incremented, mainSelector, setCounter } from '@/data/redux/slices/mainSlice'
import { toast } from 'sonner';
import { Todo } from '@/core/types/todo.type'
import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/data/redux/store'
import axios from 'axios'

export default function Page() {
    const { todos, todoIsError, todoIsLoading, todoRefetch } = useFetchTodo()
    const { mutate: createTodo, isPending } = useCreateTodo()
    const mainReducer = useSelector(mainSelector);
    const dispatch = useAppDispatch();
    return (
        <div className="max-w-4xl mx-auto p-8 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col space-y-4 items-center">
                <h1 className="text-5xl font-semibold text-center text-gray-900">
                    Todo List
                </h1>

                <div className='text-5xl font-semibold'>
                    {
                        mainReducer.Counter
                    }
                </div>
                <div className="flex flex-row space-x-4">
                    <Button onClick={() => {
                        dispatch(incremented())
                    }} variant="default">
                        incremented
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(decremented())
                        }}
                        variant="destructive">
                        decremented
                    </Button>
                    <Button onClick={() => {
                        dispatch(setCounter(0))
                    }}
                        variant="secondary">
                        Reset
                    </Button>
                </div>
            </div>

            {/* Add Todo Form */}
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Add a New Todo</h2>
                <form
                    onSubmit={(e) => {
                        const toastId = toast.loading("Creating event...", {
                            description: "Sunday, December 03, 2023 at 9:00 AM",
                            richColors: true,
                        });

                        e.preventDefault()
                        const formData = new FormData(e.currentTarget)
                        const newTodo = formData.get('todo') as string
                        const payload: Todo = {
                            completed: false,
                            id: 0,
                            title: newTodo,
                            userId: 0
                        }
                        createTodo(payload, {
                            onSuccess: () => {
                                toast.success("Update Successful!", {
                                    id: toastId,
                                    description: "Merchant information updated successfully.",
                                    richColors: true,
                                });
                            },
                            onError: (error) => {
                                let message = "An unexpected error occurred. Please try again.";
                                if (axios.isAxiosError(error)) {
                                    message = error.response?.data?.error || message;
                                }
                                toast.error("Update Error!", {
                                    id: toastId,
                                    description: message,
                                    richColors: true,
                                    action: {
                                        label: "Dismiss",
                                        onClick: () => { },
                                    },
                                });
                            }
                        })
                    }}
                    className="space-y-4"
                >
                    <Input
                        type="text"
                        name="todo"
                        placeholder="Enter new todo"
                        className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <div className="flex justify-between items-center">
                        <Button
                            disabled={isPending}
                            type="submit"
                            variant={isPending ? "outline" : "default"}
                            className="w-full sm:w-auto"
                        >
                            {isPending ? "Adding..." : "Add Todo"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => todoRefetch()}
                            className="ml-4 sm:ml-2 w-full sm:w-auto"
                        >
                            Refetch
                        </Button>
                    </div>
                </form>
            </div>

            {/* Todo List Section */}
            <div className="space-y-4">
                {todoIsLoading ? (
                    <div className="flex justify-center">
                        <svg
                            className="animate-spin h-6 w-6 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) : todoIsError ? (
                    <div className="text-center text-red-500 text-xl font-semibold">
                        Error fetching todos
                    </div>
                ) : (
                    <div className="space-y-2">
                        {todos?.map((todo) => (
                            <div key={todo.id} className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
                                <div className="text-lg font-medium">{todo.title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
