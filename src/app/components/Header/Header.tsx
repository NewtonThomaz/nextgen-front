import Image from "next/image";
import Link from "next/link"

export function Header() {
    return (
        <header className="flex items-center justify-between bg-gray-900/50 p-5 top-0 w-full z-100 absolute">
            <Image
                src={"/logo1.png"}
                alt="logo branca da NextGen"
                height={100}
                width={100}
            />

            <nav className="text-white center flex gap-4 text-[22px] font-medium">
                <Link href={"/"}>Início</Link>
                <Link href={"/Sobre"}>Sobre</Link>
                <Link href={""}>Monitoramento</Link>
                <Link href={""}>Funcionalidades</Link>
                <Link href={"/Cultivo"}>Cultivo</Link>
                <Link href={"/Colaboradores"}>Colaboradores</Link>
            </nav>
        </header>
    );
}