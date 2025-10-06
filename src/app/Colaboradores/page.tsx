import Link from "next/link"
import { perfis } from '../model/data/perfis';
export default function Colaboradores() {
    return (
        <main>
            <section className="bg-[#80a630] px-20 pt-[20dvh] text-white pb-6">
                <h1 className="text-8xl font-bold mb-5">SOBRE NÓS</h1>
                <p className="text-[1.6rem]">
                    Somos uma plataforma criada com um propósito claro: facilitar a vida de quem trabalha no campo. Acreditamos que a tecnologia pode — e deve — ser uma aliada do produtor rural, oferecendo soluções simples, eficazes e acessíveis para o dia a dia no campo. <br />
                    Nosso sistema foi desenvolvido por profissionais apaixonados por agronomia, inovação e produtividade rural. Entendemos os desafios da gestão agrícola e, por isso, criamos uma ferramenta focada em organização, controle e tomada de decisão baseada em dados.
                </p>
            </section>

            <div className="w-full h-6 bg-[#8cad46]"></div>
            <div className="w-full h-6 bg-[#97b35b]"></div>
            <div className="w-full h-6 bg-[#adc085]"></div>

            <section className="w-full bg-[#D9D9D9] pt-10 px-20">

                <h2 className="text-center text-7xl font-semibold text-[#242d10]">CONHEÇA A EQUIPE NEXTGEN</h2>

                <section className="flex justify-between pb-10">

                    {perfis.map((perfil, index) => (
                        <article
                            className="bg-[#80A630] w-[350px] flex flex-col items-center rounded-lg py-8 my-10 text-white"
                            key={index}
                        >
                            <img
                                className="h-[220px] w-[290px] rounded-lg"
                                src={perfil.image}
                                alt={perfil.alt} />
                            <h2 className="text-4xl font-bold my-5">{perfil.nome}</h2>
                            <p className="text-3sm mb-5 text-justify px-8">{perfil.descrição}</p>
                            <Link
                                target="_blank"
                                className="text-xl font-semibold mt-auto bg-[#55692b] hover:bg-[#d9d9d9] text-white hover:text-[#55692b] py-2 px-8 rounded-[10px] transition-colors duration-300"
                                href={perfil.link}>
                                Saiba mais
                            </Link>
                        </article>
                    ))}
                    
                </section>
            </section>
        </main>
    );
}