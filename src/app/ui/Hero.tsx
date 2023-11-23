import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="banner flex items-end w-full h-44 p-4 shadow-xl md:h-80 lg:h-96">
                <h1 className="text-xl font-bold text-white w-[45%]  md:text-4xl">El Mejor Sabor de Tapioca en Nuevo León</h1>
            </div>
            <div className="flex justify-between px-4">
                <div className="flex flex-col py-2 gap-2 w-[45%]">
                    <h2 className="text-base text-black md:text-xl">¡Ahora con servicio a domicilio!</h2>
                    <a href="https://wa.me/528121893717" target="_blank" className=" py-2 px-2 text-center text-black font-semibold bg-[#FFC6C8] shadow-lg rounded">¡Haz tu pedido!</a>
                    <span className="text-xs font-semibold text-center -m-1">*Costo varía según zona*</span>
                </div>
                <Image 
                    src='/tapioca-banner.png' 
                    alt="Tapioca-Frappe" 
                    width={150} 
                    height={150}
                    className="w-auto h-60 -mt-24"
                />
            </div>
        </section>
    )
}