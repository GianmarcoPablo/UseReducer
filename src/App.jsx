import {Header,ListadoTareas,AgregarTarea} from "../src/components"

const App = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto flex">
                <AgregarTarea />
                <ListadoTareas />
            </div>
        </>
    )
}

export default App