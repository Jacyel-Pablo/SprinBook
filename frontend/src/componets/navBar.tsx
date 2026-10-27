import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function NavBar()
{
    const nav = useNavigate()

    function sair()
    {
        nav("/")
    }

    return (
        <nav className="h-[15%]">
            <select className="h-28 w-24 lg:w-32 outline-none mt-[1.2%] text-amber-50/0 fixed ml-[74.8%] lg:ml-[91%]">
                <option onClick={() => sair()} value="Sair">Sair</option>
            </select>

            <div className="h-full flex items-center justify-end bg-blue-400">
                <div className="h-full w-[50%] flex items-center">
                    <Link className="text-5xl px-3 lg:px-12 text-white" to="/dashboard">SprinBook</Link>
                </div>
                <div className="h-full w-[50%] flex items-center justify-end">
                    <div className="h-24 w-24 flex flex-col items-center justify-center rounded-full overflow-hidden mr-3 lg:mr-12 bg-gray-400">
                        <div className="h-[40%] w-[42%] mt-5 rounded-full bg-gray-600"></div>

                        <div className="h-[40%] w-[40%] mt-1 rounded-full bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}