import Image from "next/image";
import "../Cadastros/Cadastros.css";

export function Cadastros() {
    return (
        <section className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/fundo2.png')] bg-cover bg-center bg-no-repeat text-white pt-20 h-[80dvw] ">

            <h1 className="text-8xl font-bold ml-20">CADASTRO DOS TALHÕES</h1>

            <main className="flex w-full justify-around items-center">
                <section className="cadastro flex flex-col">

                    <article className="mt-20">
                        <h2>Cadastro e login</h2>
                        <p>Antes de começar a cadastrar seus talhões, é necessário criar uma conta gratuita em nossa plataforma. O processo é rápido e seguro:</p>
                        <ul>
                            <li>Cadastro de Usuário: Preencha seus dados básicos (nome, e-mail, senha) e crie sua conta.</li>
                            <li>Login Seguro: Acesse sua área exclusiva usando seu e-mail e senha para visualizar e gerenciar seus talhões com total privacidade.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Personalização</h2>
                        <p>Após o login, você poderá criar e personalizar cada talhão da sua propriedade de acordo com suas necessidades. Nossa ferramenta permite:</p>
                        <ul>
                            <li>Nomear cada talhão</li>
                            <li>Definir área (em hectares ou outra unidade)</li>
                            <li>Adicionar localização geográfica</li>
                            <li>Classificar por tipo de cultivo, solo ou sistema de irrigação</li>
                            <li>Atribuir cores ou marcadores para facilitar a visualização no mapa</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Registro</h2>
                        <p>Além da criação dos talhões, nossa plataforma permite o registro detalhado de atividades e informações técnicas, como:</p>
                        <ul>
                            <li>Datas de plantio e colheita</li>
                            <li>Histórico de manejo (adubação, irrigação, defensivos)</li>
                            <li>Produtividade por safra</li>
                            <li>Observações de campo</li>
                            <li>Relatórios e gráficos de desempenho</li>
                        </ul>
                        <p>Esses dados são armazenados de forma segura e podem ser acessados a qualquer momento, ajudando na tomada de decisões e no acompanhamento da evolução de cada área ao longo do tempo.</p>
                    </article>

                </section>
                <Image
                    src="/mobile3.png"
                    alt="home page do aplicativo nextgen"
                    width={0}
                    height={0}
                    className="w-[24dvw] h-auto mb-20"
                    sizes="956px"
                />
            </main>
        </section>
    );
}