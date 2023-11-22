import Image from "next/image";

export default function Hero() {
    return (
        // <section className="banner flex items-end w-full h-48 p-4 md:h-80 lg:h-96">
        //     <div className="flex flex-col gap-2 text-white w-[70%] pb-3">
        //         <h1 className="text-xl font-bold md:text-4xl">El Mejor Sabor de Tapioca en Nuevo León</h1>
        //         <h2 className="text-base md:text-xl">¡Ahora con servicio a domicilio!</h2>
        //         <a href="https://wa.me/528121893717" target="_blank" className="w-fit py-2 px-4 text-black font-semibold bg-[#FFC6C8] rounded">Haz tu pedido</a>
        //     </div>
        // </section>
        <section>
            <div className="banner flex items-end w-full h-52 p-4 md:h-80 lg:h-96">
                <h1 className="text-xl font-bold text-white w-[45%]  md:text-4xl">El Mejor Sabor de Tapioca en Nuevo León</h1>
            </div>
            <div className="flex justify-between px-4">
                <div className="flex flex-col py-2 gap-2 w-[45%]">
                    <h2 className="text-base text-black md:text-xl">¡Ahora con servicio a domicilio!</h2>
                    <a href="https://wa.me/528121893717" target="_blank" className="w-fit py-2 px-4 text-center text-black font-semibold bg-[#FFC6C8] shadow-lg rounded">Haz tu pedido</a>
                </div>
                <Image 
                    src='/tapioca-banner.png' 
                    alt="Tapioca-Frappe" 
                    width={150} 
                    height={150}
                    className="w-auto h-60 -mt-28"
                />
            </div>
        </section>
    )
}