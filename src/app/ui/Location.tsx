import Image from "next/image"

export default function Location() {
    return (
        <div className="location w-full h-[32rem] mt-4 p-6 flex flex-col justify-between items-center">
            <h2 className="text-3xl font-bold text-white text-shadow">Ubicación</h2>
            <iframe className=" w-auto rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.651965142195!2d-100.25964298839257!3d25.749020609033494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb3587ad7abf%3A0xbe78f4aedde70bcc!2sAv.%20Diego%20D%C3%ADaz%20de%20Berlanga%20172%2C%20Villas%20de%20Santo%20Domingo%2C%2066437%20San%20Nicol%C3%A1s%20de%20los%20Garza%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1703030638123!5m2!1ses-419!2smx" width={400} height={300} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}