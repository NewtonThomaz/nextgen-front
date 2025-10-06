import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <main>
            <section>
                <Image
                    src="/fundo1.png"
                    alt="imagem de fundo com plantações e céu"
                    width={0}
                    height={0}
                    className="w-[100dvw] h-[60dvw] object-cover"
                    sizes="100vw"
                />

                <div className="bg-[#1b210f]  w-full h-9"></div>
                <div className="bg-[#293217]  w-full h-9"></div>
                <div className="bg-[#303a1b]  w-full h-9"></div>
                <div className="bg-[#38441f]  w-full h-9"></div>
            </section>

            <section className="flex items-center justify-around text-center gap-6 p-10 w-full absolute top-[15dvh]">
                <Image
                    src="/mobile1.png"
                    alt="home page do aplicativo nextgen"
                    width={0}
                    height={0}
                    className="w-[24dvw] h-auto"
                    sizes="956px"
                />

                <article className="flex flex-col justify-center">

                    <Image
                        src="/nextgen.png"
                        alt="home page do aplicativo nextgen"
                        width={0}
                        height={0}
                        className="w-[35dvw] h-auto mx-auto"
                        sizes="732px"
                    />
                    <p className="text-white text-justify w-[50dvw] text-[1.6rem] mt-6">
                        O objetivo do nosso site é oferecer uma plataforma digital que torne a gestão agrícola mais simples, eficiente e acessível para todos os produtores, agrônomos e profissionais do campo. Desenvolvemos uma ferramenta pensada para conectar a tecnologia à rotina da agricultura, permitindo o controle completo dos talhões, o acompanhamento das operações no campo, o gerenciamento de colaboradores e o monitoramento de dados climáticos, como temperatura e umidade.
                    </p>

                    <Link href="link" className="bg-white text-[#37421F] font-bold py-4 rounded-[18px] mt-6 hover:bg-[#1b210f] transition-colors text-[24px] w-[400px]">Conheça nosso time</Link>
                </article>
            </section>
        </main>
    );
}