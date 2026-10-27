import { useNavigate } from "react-router-dom";
import NavBar from "../componets/navBar";

export default function Dashboard()
{
    const nav = useNavigate()

    function ler()
    {
        nav("/leitura")
    }

    return(
        <div className="h-[100dvh] overflow-y-auto">
            <NavBar></NavBar>

            <div className="h-auto flex flex-col items-center">
                {/* Exemplo dos posteres dos livros */}
                <div onClick={() => ler()} className="h-auto lg:h-[70%] w-full lg:w-[30%] flex flex-col items-center">
                    <img className="w-40 lg:w-64 mt-6 lg:mt-10" src="https://jkwmdmypojeuqoomidfn.supabase.co/storage/v1/object/sign/SprinBook/Capas%20dos%20livros/Leao%20animatronic.png?token=eyJraWQiOiIyMDVkMTNjYS1jZDY1LTRlYzktYjgzOC1iN2YyOGJmNGNiNDciLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJTcHJpbkJvb2svQ2FwYXMgZG9zIGxpdnJvcy9MZWFvIGFuaW1hdHJvbmljLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTMxMTEyMzUsImV4cCI6MzE3MTUzMTExMjM1fQ.fTMcJIc6YO5Oh-XPV5_Motm_CAkN7PHGKFrC-g23vijm-bAFI_4FcuRCZV9m1UMQAU5Tbg7d6LqRPwJ87voOhA" alt='Capa do livro "O Pesadelo Eterno"' />
                
                    <p className="mt-2 mb-2 text-3xl">O Pesadelo Eterno</p>

                    <hr className="h-0.5 w-full bg-black" />
                </div>
            </div>
        </div>
    )
}