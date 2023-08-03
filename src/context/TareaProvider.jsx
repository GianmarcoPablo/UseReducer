import { createContext,useContext,useReducer } from "react";
import { tareaReducer } from "../reducer/TareasReducer";
import { useState } from "react";

const TareaContext = createContext();
const useTareas = () => useContext(TareaContext);

const initialArg = []

const TareaProvider = ({ children }) => {

    const [state,dispatch] = useReducer(tareaReducer,initialArg)
    const [tareaEdit, setTarea] = useState({})

    const agregarTarea = (tarea) => {
        const action = {
            type: "AgregarTarea",
            payload: tarea
        }
        dispatch(action)
    }

    const eliminarTarea = (id) => {
        const action = {
            type: "EliminarTarea",
            payload: id
        }
        dispatch(action)
    }

    const editarTarea = (tarea) => {
        const action = {
            type: "EditarTarea",
            payload: tarea
        }
        dispatch(action)
    }

    return (
        <TareaContext.Provider value={ {
            agregarTarea,
            eliminarTarea,
            setTarea,
            state,
            editarTarea,
            tareaEdit
            
        } }>
            {children}
        </TareaContext.Provider>
    )
}

export { useTareas, TareaProvider };