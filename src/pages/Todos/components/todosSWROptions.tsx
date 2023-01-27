export const addTodoOptions = (newTodo: any) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (todos: any) =>
            [...todos, newTodo].sort((a, b) => b.id - a.id),
        rollbackOnError: true,
        populateCache: (added: any, todos: any) =>
            [...todos, added].sort((a, b) => b.id - a.id),
        revalidate: false,
    };
};

export const updateTodoOptions = (updatedTodo: any) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (todos: any) => {
            const prevTodos = todos.filter((todo: any) => {
                return todo.id !== updatedTodo.id;
            });
            return [...prevTodos, updatedTodo].sort((a, b) => b.id - a.id);
        },
        rollbackOnError: true,
        // response from API request is 1st param
        // previous data is 2nd param
        populateCache: (updated: any, todos: any) => {
            const prevTodos = todos.filter((todo: any) => {
                return todo.id !== updatedTodo.id;
            });
            return [...prevTodos, updated].sort((a, b) => b.id - a.id);
        },
        revalidate: false,
    };
};

export const deleteTodoOptions = ({ id }: any) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (todos: any) => {
            return todos.filter((todo: any) => {
                return todo.id !== id;
            });
        },
        rollbackOnError: true,
        // response from API request is 1st param
        // previous data is 2nd param
        populateCache: (emptyResponseObj: any, todos: any) => {
            return todos.filter((todo: any) => {
                return todo.id !== id;
            });
        },
        revalidate: false,
    };
};
