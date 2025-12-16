import logoImg from "../assets/logo.svg";
import Image from "next/image";

interface LayoutDefaultProps {
    children: React.ReactNode;
}

export function LayoutDefault({ children }: LayoutDefaultProps) {
    return (
        <div className="flex flex-col min-h-screen justify-center items-start">
            <header className="py-8 w-full max-w-295 mx-auto">
                <Image src={logoImg} alt="Logo Ignite Shop" width={130} height={52} />
            </header>
            {children}
        </div>
    )
}