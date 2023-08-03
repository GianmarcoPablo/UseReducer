export const tareaReducer = (state, action) => {
    switch(action.type){
        case "AgregarTarea": {
            return [...state,action.payload]
        }
        case "EliminarTarea": {
            return state.filter(t=>t.id !== action.payload)
        }
        case "EditarTarea": {
            return state.map(t=> t.id === action.payload.id ? action.payload : t)
        }
    }
}