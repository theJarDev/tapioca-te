import MenuCard from './MenuCard';

export default function Menu() {
    return (
        <section className="p-4 mt-4">
            <h2 className="text-center text-2xl font-bold text-black drop-shadow-md ">Nuestro Menú</h2>
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
                <MenuCard src='/oreo.png' alt='Oreo' name='Oreo' price={80} />
                <MenuCard src='/taro.png' alt='Taro' name='Taro' price={80} />
                <MenuCard src='/fresa.png' alt='Fresa' name='Fresa' price={75} />
                <MenuCard src='/moka.png' alt='Moka' name='Moka' price={75} />
                <MenuCard src='/nutella.png' alt='Nutella' name='Nutella' price={80} />
                <MenuCard src='/churro.png' alt='Churro' name='Churro' price={75} />
            </div>
        </section>
    )
}