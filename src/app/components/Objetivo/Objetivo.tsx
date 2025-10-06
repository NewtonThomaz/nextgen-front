import Image from "next/image";
import  Carousel  from "../Carrossel/Carrossel";


export function Objetivo() {
    return (
        <main className="bg-gradient-to-t from-[#87AE35] to-[#3F4D24]  py-20 flex flex-col ">
            <section className="flex justify-around items-center w-full">
                <section className="w-[45dvw] text-white">
                    <h1 className="text-8xl font-bold">OBJETIVO</h1>
                    <p className="text-[1.6rem] mt-4 text-justify">
                        Queremos facilitar o dia a dia no campo, proporcionando mais organização, economia de tempo e melhor tomada de decisão com base em informações reais e atualizadas. Ao reunir todas as informações da propriedade em um só lugar, nosso sistema ajuda a melhorar a produtividade e a eficiência da lavoura, safra após safra. Mais do que um sistema, somos uma solução feita para quem vive da terra e quer evoluir com ela, usando a tecnologia como aliada no crescimento e na sustentabilidade da produção.
                    </p>
                </section>
                <Image
                    src="/logo1.png"
                    alt=""
                    width={0}
                    height={0}
                    className="w-[28dvw] h-auto"
                    sizes="25dvw"
                />
            </section>
            <Carousel />
        </main>
    );
}