export async function obtenerClientes(){
   //const url = 'http://localhost:3000/clientes'
    const respuesta = await fetch(import.meta.env.VITE_API_URL)//por default metodo GET
    const resultado = await respuesta.json()
    //console.log(resultado)
    return resultado
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {'Content-Type': 'application/json'}
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}