
interface Props{
    nomeCampo: string,
}

export default function CampoForm(props: Props)
{
    return (
        <div className="mt-6 w-full px-10">
            <p className="text-4xl text-blue-400">Insira {props.nomeCampo}:</p>
            <input className="h-16 w-full text-3xl rounded-3xl px-3 mt-3 border-2" placeholder={`Insira ${props.nomeCampo}:`} type="text" />
        </div>
    )
}