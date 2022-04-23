export function addToDo(text) {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id: Math.random(),
            name: text
        }
    };
}