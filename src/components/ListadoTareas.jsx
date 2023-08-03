import { useTareas } from "../context/TareaProvider"
import Tarea from "./Tarea"

const ListadoTareas = () => {
    
    const { state } = useTareas()

    return (
        <div className="w-3/5">
            <h2 className="text-2xl font-black text-blue-700">Listado de Tareas</h2>
            <div>
                {
                    state?.map(tarea=>(
                        <Tarea 
                            key={tarea.id}
                            {...tarea}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ListadoTareas