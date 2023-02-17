import {useNavigate, Form, useActionData} from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function action ({request}){
   //console.log("Submit al formulario...")
   //console.log(request) //en el request se ve el formData
   const formData = await request.formData()
   //console.log(formData.get("nombre"))
   const datos = Object.fromEntries(formData)
   //console.log(datos)

    const email = formData.get("email")
    console.log(email)

    //Validaciones
    const errores = []
   if(Object.values(datos).includes("")){
    errores.push("Todos los campos son obligatorios")
   }

   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   if(!regex.test(email)) {
    errores.push("El email no es válido");
   }

   if(Object.keys(errores).length){
    //console.log("Hay errores ...")
    return errores
   }
   //console.log(errores)

}

function NuevoCliente() {

  const errores = useActionData()
  const navigate = useNavigate()

  console.log(errores)
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Clientes</h1>
      <p className="mt-3">Llena todos los compos para registrar un nuevo cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={()=> navigate("/")}
        > 
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        
        {errores?.length && errores.map((error, i)=>
          <Error key={i}>{error}</Error>
        )}
        <Form
          method='POST'
          noValidate
        >
          <Formulario/>
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

export default NuevoCliente
