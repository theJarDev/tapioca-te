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
                
                {home && <Link href="/menu" className='z-20 flex items-center -mt-8  py-2 px-6 text-center text-black font-semibold bg-[#FFC6C8] shadow-lg rounded' > {"Ver Todo"} <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
                </svg></Link>}
            </section>
        </>
    )
}