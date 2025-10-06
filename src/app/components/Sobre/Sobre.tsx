import Image from "next/image";

export function Sobre() {
    return (
        <section className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/carrossel4.png')] bg-cover bg-center bg-no-repeat text-white pt-[12dvh]">
            <main className="flex items-center justify-around">
                <section>
                    <h1 className="text-8xl font-bold mb-10">SOBRE</h1>
                    <p className="text-white text-justify w-[60dvw] text-[1.6rem]">O projeto NextGen - Soluções Agrícolas contribuirá diretamente para a sociedade ao modernizar o setor agrícola, promovendo uma agricultura mais eficiente, sustentável e inteligente. Através da coleta e análise de dados em tempo real (como umidade do solo, temperatura e localização geográfica), o sistema permite que produtores rurais tomem decisões mais precisas e estratégicas no cultivo da soja e, futuramente, de outras culturas. </p>
                    <p className="text-white text-justify w-[60dvw] text-[1.6rem] mt-6">Aumento da produtividade agrícola:  Ao oferecer dados atualizados e confiáveis, o sistema auxilia o produtor na melhoria do rendimento por hectare, tornando a produção mais eficiente e lucrativa. </p>
                    <p className="text-white text-justify w-[60dvw] text-[1.6rem] mt-6">Apoio à agricultura familiar e de pequeno porte:  A interface amigável e acessível do sistema permite que pequenos produtores também adotem tecnologias de ponta, democratizando o acesso à inovação no campo. </p>
                    <p className="text-white text-justify w-[60dvw] text-[1.6rem] mt-6">Integração entre setores:  A plataforma permite a colaboração entre produtores, técnicos agrícolas, cooperativas e fornecedores, promovendo uma gestão agrícola mais conectada e inteligente. </p>
                </section>

                <section className="flex flex-col gap-8 pt-25">
                    <Image
                        src="/pessoa1.png"
                        alt="imagem de fundo com plantações e céu"
                        width={0}
                        height={0}
                        className="h-[200px] w-[auto]"
                        sizes="100vw"
                    />
                    <Image
                        src="/pessoa2.png"
                        alt="imagem de fundo com plantações e céu"
                        width={0}
                        height={0}
                        className="h-[200px] w-[auto]"
                        sizes="100vw"
                    />
                    <Image
                        src="/pessoa3.png"
                        alt="imagem de fundo com plantações e céu"
                        width={0}
                        height={0}
                        className="h-[200px] w-[auto]"
                        sizes="100vw"
                    />
                </section>
            </main>
        </section>
    );
}