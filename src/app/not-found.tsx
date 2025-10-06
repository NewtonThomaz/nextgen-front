
import Link from 'next/link';
import Image from "next/image";

export default function NotFound() {
    return (
        <main className='bg-gradient-to-t from-[#37421F] to-[#87AE35] w-full h-[calc(100vh-var(--footer-height)-48px)] flex items-center justify-center gap-10 pt-[100px]'>
            <Image
                src="/logo1.png"
                alt="logo da nextgen"
                height={0}
                width={0}
                className='w-[25dvw] h-[25dvw]'
                sizes='25dvw'
            />

            <section className='text-white flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold'>404 Não Encontrado</h1>

                <Link href="/" className="flex items-center justify-center gap-[10px] bg-white text-[#37421F] font-bold py-4 rounded-[18px] mt-6 hover:bg-[#1b210f] transition-colors text-[24px] w-[400px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5" />
                    </svg>
                    Retornar ao Inicio
                </Link>
            </section>
        </main>
    );
}