const initialState = {
    list: []
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_DO":
            return {...state, list: [...state.list, action.payload]};

        case "DELETE_TO_DO":
            return {...state, list: [...state.list.filter((list) => list.id !== action.payload.id)]};
            
        default:
            return state;
    }
};