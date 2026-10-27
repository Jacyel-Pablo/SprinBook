import CampoForm from "../componets/campoForm"
import { Link, useNavigate } from "react-router-dom"

export default function Login()
{
    const nav = useNavigate()

    function enviarDados()
    {
        nav("/dashboard")
    }

    return (
        <div className="h-[100dvh] flex items-center justify-center">
            <div className="h-[80%] w-full lg:w-[55%] rounded-4xl border-2">
                <div className="h-[25%] flex items-center justify-center">
                    <h1 className="text-8xl text-center text-blue-400">Login</h1>
                </div>

                <div className="h-[60%] overflow-y-auto flex flex-col border-t-2 border-b-2">
                    <CampoForm nomeCampo="um email"/>
                    <CampoForm nomeCampo="uma senha"/>

                    <p className="text-3xl py-5 px-10 mb-4 lg:mb-0">Não possui uma conta ?, <Link className="text-blue-500 underline" to="/cadastro">Crie uma</Link></p>
                </div>

                <div className="h-[15%] flex items-center justify-end">
                    <input onClick={() => enviarDados()} className="h-16 w-36 border-2 border-black mr-10 text-3xl rounded-2xl text-white bg-blue-400 hover:bg-blue-600 active:bg-blue-600" type="button" value="Enviar" />
                </div>
            </div>
        </div>
    )
}