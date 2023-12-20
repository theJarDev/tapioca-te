import Link from 'next/link';

export default function Menu({
    children,
    title,
    home,
  }: {
    children: React.ReactNode,
    title: string,
    home: boolean,
  }) {
    return (
        <>
            <section className="p-4 mt-4 flex flex-col items-center gap-4">
                {home && <div className='gradient absolute z-10 -m-4 mt-4 w-full h-[35rem] '></div>}
                <h2 className="text-3xl font-bold text-black text-shadow"> {title} </h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    {children}
                </div>
                
                {home && <Link href="/menu" className='z-20 -mt-8  py-2 px-6 text-center text-black font-semibold bg-[#FFC6C8] shadow-lg rounded' > {"Ver Todo 🡵"} </Link>}
            </section>
        </>
    )
}