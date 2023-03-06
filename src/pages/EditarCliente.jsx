import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { obtenerCliente } from "../data/clientes";
import Formulario from "../components/Formulario";


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

    const navigate = useNavigate()
    const cliente = useLoaderData()
    //console.log(cliente)

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={()=> navigate("/")}
        > 
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form
          method='POST'
          noValidate
        >
          <Formulario
            cliente = {cliente}
          />
            <input 
              type="submit" 
              className='mt-5 w-full bg-blue-800 hover:bg-blue-900 p-3 uppercase font-bold text-white text-lg cursor-pointer'
              value="Registrar Cliente"
              />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
