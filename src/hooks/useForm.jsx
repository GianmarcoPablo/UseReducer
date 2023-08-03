import { useState } from "react"
import { useTareas } from "../context/TareaProvider"
import { generarId } from "../helper"

const useForm = () => {

    const { agregarTarea,state,tareaEdit,editarTarea,setTarea } = useTareas()
    const [nombreTarea, setNombreTarea] = useState('')
    const [descripcionTarea, setDescripcionTarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombreTarea,descripcionTarea].includes('')){
            alert('Todos los campos son obligatorios')
            return
        }

        if(state.some(tarea=>tarea.nombreTarea===nombreTarea)){
            alert('Ya existe una tarea con ese nombre')
            return
        }

        const objTarea = {
            nombreTarea,
            descripcionTarea,
        }

        if(Object.keys(tareaEdit).length>0){
            objTarea.id = tareaEdit.id
            editarTarea(objTarea)
            setTarea({})
        }else{
            objTarea.id = generarId()
            agregarTarea(objTarea)
        }
        

        reset()
    }

    const reset = () => {
        setNombreTarea('')
        setDescripcionTarea('')
    }

    return {
        nombreTarea,
        descripcionTarea,
        setNombreTarea,
        setDescripcionTarea,
        handleSubmit,
        reset,
    }
}

export default useForm