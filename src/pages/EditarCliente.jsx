import { obtenerCliente } from "../data/clientes";

export async function loader({params}){
    //console.log(params);
    const cliente = await obtenerCliente(params.clienteId);
    if(Object.values(cliente).length === 0) {
        throw new Response ("", {
            status: 404,
            statusText: "El cliente no fue encontrado"
        })
    }
    return cliente
}

const EditarCliente = () => {
  return (
    <div>
      EDITANDO CLIENTE
    </div>
  )
}

export default EditarCliente
