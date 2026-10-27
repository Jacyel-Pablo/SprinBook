import NavBar from "../componets/navBar";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Leitura()
{
    const [numPages, setNumPages] = useState(0);
    const [pagina, setPagina] = useState(1);

    function proximo()
    {
        if (pagina + 1 > numPages) {
            setPagina(1)

        } else {
            setPagina(pagina + 1)
        }
    }

    function atras()
    {
        if (pagina - 1 >= 1) {
            setPagina(pagina - 1)

        } else {
            setPagina(numPages)
        }
    }

    function carregarPDF({ numPages }: any) {
        setNumPages(numPages);
    }

    return (
        <div className="h-dvh overflow-y-auto">
            <NavBar></NavBar>

            <div className="w-[50%] ml-[25%]">
                <div className="h-auto w-full flex justify-center">
                    <Document
                    className="w-auto"
                        file="https://jkwmdmypojeuqoomidfn.supabase.co/storage/v1/object/sign/SprinBook/Paginas%20dos%20livros/Comunicacao%20assertiva.pdf?token=eyJraWQiOiIyMDVkMTNjYS1jZDY1LTRlYzktYjgzOC1iN2YyOGJmNGNiNDciLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJTcHJpbkJvb2svUGFnaW5hcyBkb3MgbGl2cm9zL0NvbXVuaWNhY2FvIGFzc2VydGl2YS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzMTI3MDY3LCJleHAiOjM4OTEyMjI2MTUwNjd9.Xbz0N_ZkEheEeiFh4-shtbssq2QtZPJRFC4IxTf4SEizn7rQ0TaU4ibWISWYy4n69NfgaIvYO3X5vHe0sEXX-A"
                    onLoadSuccess={carregarPDF}
                    loading="Carregando PDF..."
                    error="Não foi possível carregar o PDF."
                    >
                    {window.innerWidth <= 500? 
                        <Page
                            className="w-[50%]"
                            pageNumber={pagina}
                            width={364}
                        />
                    :
                        <Page
                            className="mt-5 w-[50%]"
                            pageNumber={pagina}
                            width={900}
                        />
                    }
                    </Document>
                </div>
                

                {numPages > 0 && (
                    <div className="mb-24 flex justify-center">
                    <button
                        className="text-4xl lg:text-6xl rotate-[180deg]"
                        onClick={() => atras()}
                    >
                        ➔
                    </button>

                    <p className="px-2 lg:px-32 text-4xl lg:text-6xl">Página {pagina} de {numPages}</p>

                    <button
                        className="text-4xl lg:text-6xl"
                        onClick={() => proximo()}
                    >
                        ➔
                    </button>
                    </div>
                )}
            </div>
        </div>
    )
}