import "../Funcionalidades/Funcionalidades.css";

export function Funcionalidades() {
    return (
        <main className="bg-gradient-to-t from-[#37421F] to-[#86ad35] text-white pb-10">

            <h1 className="text-8xl font-bold ml-30 mb-15">FUNCIONALIDADES</h1>

            <section className="flex w-full justify-around">

                <article className="funcoes">
                    <h2>Temperatura e umidade</h2>
                    <ul>
                        <li>Temperatura ambiente em tempo real</li>
                        <li>Níveis de umidade do ar e do solo</li>
                        <li>Integração com estações meteorológicas locais ou sensores</li>
                        <li>Ajuda na tomada de decisão para irrigação, pulverização e plantio</li>
                    </ul>
                </article>

                <article className="funcoes">
                    <h2>Cadastro e login</h2>
                    <ul>
                        <li>Tenha acesso exclusivo e seguro à sua área de gestão</li>
                        <li>Criação de conta rápida com e-mail e senha</li>
                        <li>Login seguro em qualquer dispositivo</li>
                        <li>Perfis personalizados, com possibilidade de incluir colaboradores com permissões específicas</li>
                        <li>Tudo protegido por um sistema confiável, que garante a segurança dos seus dados e da sua propriedade.</li>
                    </ul>
                </article>

                <article className="funcoes">
                    <h2>Controles dos talhões</h2>
                    <ul>
                        <li>Cadastro completo de talhões com área, localização, cultura e características do solo</li>
                        <li>Divisão por talhão, lote ou setor, conforme a sua realidade</li>
                        <li>Acompanhamento das operações agrícolas (plantio, tratos culturais, colheita, etc.)</li>
                    </ul>
                </article>

            </section>
        </main>
    );
}