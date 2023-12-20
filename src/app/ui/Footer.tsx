import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-white mt-4">
            <div className=" flex items-center justify-between pl-1 py-4 pr-4">
                <Image 
                    src='/tapioca-logo.svg'
                    alt="Logo"
                    width={120}
                    height={50}
                    className="w-36 h-12 object-cover object-center"
                />
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/tapioca_te/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                    </a>
                    <a href="https://www.facebook.com/people/Tapioca-Té-Diego-Díaz/61550894432355/?mibextid=ViGcVu" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" strokeWidth="0" fill="#000000" /></svg>
                    </a>
                    <a href="https://wa.me/528121893717" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                    </a>
                </div>
            </div>
            <span className="text-black text-center p-2 ">Desarrollado por <a href="https://www.linkedin.com/in/christopher-jared/" target="_blank" className="text-shadow font-bold hover:border-b-[1px] hover:border-black">Christopher González</a>.</span>
        </footer>
    )
}