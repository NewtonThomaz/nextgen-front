import "../Acompanhamento/Acompanhamento.css";
import Image from "next/image";

export function Acompanhamento() {
    return (
        <section className="bg-[linear-gradient(to_bottom,#37441d_0%,#55692B_23%,#37441d_100%)] text-white">
            <div className="bg-[#1b210f]  w-full h-6"></div>
            <div className="bg-[#293217]  w-full h-6"></div>
            <div className="bg-[#37441d]  w-full h-6"></div>

            <h1 className="text-8xl font-bold m-20">ACOMPANHAMENTO DOS <br /> TALHÕES</h1>

            <main className="flex w-full justify-around mb-20">

                <Image
                    src="/mobile2.png"
                    alt="home page do aplicativo nextgen"
                    width={0}
                    height={0}
                    className="w-[24dvw] h-auto"
                    sizes="956px"
                />

                <section className="acomphana flex flex-col gap-10 ">
                    <article>
                        <h2>Colaboradores</h2>
                        <ul>
                            <li>Cadastrar membros da equipe com diferentes níveis de acesso</li>
                            <li>Atribuir tarefas específicas por talhão</li>
                            <li>Registrar responsáveis por operações como plantio, pulverização, colheita e manutenção</li>
                            <li>Acompanhar a execução das atividades em tempo real</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Operações</h2>
                        <ul>
                           <li>Preparo de solo</li>
                           <li>Plantio e semeadura</li>
                           <li>Adubação (orgânica ou química)</li>
                           <li>Aplicação de defensivos</li>
                           <li>Irrigação</li>
                           <li>Controle de pragas e doenças</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Histórico</h2>
                        <ul>
                            <li>Visualizar todas as operações realizadas por data e tipo</li>
                            <li>Acompanhar produtividade por ciclo</li>
                            <li>Avaliar o desempenho dos insumos e técnicas utilizadas</li>
                            <li>Gerar relatórios e gráficos comparativos</li>
                            <li>Identificar pontos críticos e oportunidades de melhoria</li>
                        </ul>
                    </article>
                </section>
            </main>
            <div className="bg-[#37441d]  w-full h-6"></div>
            <div className="bg-[#293217]  w-full h-6"></div>
            <div className="bg-[#1b210f]  w-full h-6"></div>
        </section>
    );
}