import useForm from "../hooks/useForm"
const AgregarTarea = () => {

    const { nombreTarea, descripcionTarea, setNombreTarea, setDescripcionTarea, handleSubmit } = useForm()

    return (
        <div className='w-2/5'>
            <h2 className='text-2xl font-black text-blue-700'>Agregar Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='border-2 border-black w-4/5 px-2 py-1 rounded-lg mt-4'
                    placeholder='Nombre Tarea'
                    value={nombreTarea}
                    onChange={(e) => setNombreTarea(e.target.value)}
                />
                <input
                    type='text'
                    className='border-2 border-black w-4/5 px-2 py-1 rounded-lg mt-4'
                    placeholder='Descripción Tarea'
                    value={descripcionTarea}
                    onChange={(e) => setDescripcionTarea(e.target.value)}
                />
                <div >
                    <input
                        type='submit'
                        className='bg-blue-700 text-white px-2 py-1 rounded-lg mt-4'
                    />
                </div>
            </form>
        </div>
    )
}

export default AgregarTarea