import Image from "next/image";
import "../Monitoramento/Monitoramento.css";

export function Monitoramento() {
    return (
        <main>
            <section>
                <Image
                    src="/fundo2.png"
                    alt="imagem de fundo com plantações e céu"
                    width={0}
                    height={0}
                    className="w-[100dvw] h-[50dvw] object-cover"
                    sizes="100vw"
                />
                <div className="bg-[#86ad35]  w-full h-12"></div>
            </section>

            <section className="absolute flex justify-around items-center w-full mt-[-53dvw] h-[55dvw]">

                <article className="text-white flex flex-col">

                    <h1 className="text-8xl font-bold mb-20 mt-[-12dvh]">MONITORAMENTO</h1>

                    <div className="grid grid-cols-2 grid-rows-3 text-[1.6rem] gap-12 font-semibold">
                        <p className="esquerda">Visualização de <br /> dados em tempo real</p>
                        <p className="direita">Monitoramento de <br /> culturas</p>

                        <p className="esquerda">Sensores para <br /> informações</p>
                        <p className="direita">Indicadores de <br /> eficiência</p>

                        <p className="esquerda">Planilhas de <br /> acompanhamento</p>
                        <p className="direita">Visualização de <br /> membros</p>
                    </div>
                </article>
                <Image
                    src="/mobile2.png"
                    alt="home page do aplicativo nextgen"
                    width={0}
                    height={0}
                    className="w-[24dvw] h-auto"
                    sizes="956px"
                />
            </section>
        </main>
    );
}