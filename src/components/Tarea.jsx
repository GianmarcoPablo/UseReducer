import { useTareas } from "../context/TareaProvider"
const Tarea = ({nombreTarea,descripcionTarea,id}) => {

    const {eliminarTarea,setTarea,editarTarea,tareaEdit} = useTareas()

    const tarea = {
        nombreTarea,
        descripcionTarea,
        id
    }

    const editando = () => {
        setTarea(tarea)
        editarTarea(tareaEdit)
    }
    
    return (
        <div className='bg-white my-5 p-5'>
            <h1>Nombre de la tarea: <b>{nombreTarea}</b> </h1>
            <p>Descripcion de la tarea <b>{descripcionTarea}</b> </p>
            <div className="flex justify-between">
                <button 
                    className='bg-red-700 text-white px-4 py-1 rounded-lg mt-4'
                    onClick={()=>eliminarTarea(id)}
                >
                    Eliminar
                </button>
                <button 
                    className='bg-blue-700 text-white px-6 py-1 rounded-lg mt-4'
                    onClick={editando}
                >
                    Editar
                </button>
            </div>
        </div>
    )
}

export default Tarea