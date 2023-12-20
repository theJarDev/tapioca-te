import Image from 'next/image';

export default function MenuCard({
    src,
    alt,
    name,
    price,
} : {
    src: string;
    alt: string;
    name: string;
    price: number;
}) {
    return (
        <div className='flex flex-col w-40 bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] '>
            <Image src={src} alt={alt} width={150} height={150} className='w-fit rounded-t-lg' />
            <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='text-center font-medium text-black'> {`Tapioca ${name}`} </h3>
                <span className='text-sm font-light text-black'> {`$${price}`} </span>
            </div>
        </div>
    )
}