import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.scss"

const roboto = Roboto({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
    title: "Tarefa Frontend",
    description: "projeto de dropdown"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
           
            <body className={roboto.className}>
                <div className="top"></div>
                <div className="right"></div>
                {children}
                <div className="bottom"></div>
                <div className="left"></div>
            </body>
            
        </html>
    )
}
