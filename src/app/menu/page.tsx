import Menu from "../ui/Menu"
import MenuCard from "../ui/Menu/MenuCard"

export default function MenuPage() {
    return (
        <>
            <div className="menu-banner shadow-2xl w-full h-56 pb-8 flex justify-center items-center text-5xl text-black font-bold drop-shadow-md ">
                <h2 className="text-shadow">Menú</h2>
            </div>
            <Menu title="Tapiocas" home={false}>
                <MenuCard src='/fresa.png' alt='Fresa' name='Fresa' price={75} />
                <MenuCard src='/moka.png' alt='Moka' name='Moka' price={75} />
                <MenuCard src='/oreo.png' alt='Oreo' name='Oreo' price={80} />
                <MenuCard src='/taro.png' alt='Taro' name='Taro' price={80} />
                <MenuCard src='/nutella.png' alt='Nutella' name='Nutella' price={80} />
                <MenuCard src='/coco.png' alt='Coco' name='Coco' price={75} />
                <MenuCard src='/capuchino.png' alt='Capuchino' name='Capuchino' price={75} />
                <MenuCard src='/reeses.png' alt='Reeses' name='Reeses' price={80} />
                <MenuCard src='/vainilla-latte.png' alt='Vainilla Latte' name='Vainilla Latte' price={75} />
                <MenuCard src='/caramel-latte.png' alt='Caramel Latte' name='Caramel Latte' price={80} />
                <MenuCard src='/churro.png' alt='Churro' name='Churro' price={75} />
                <MenuCard src='/matcha.png' alt='Matcha' name='Matcha' price={75} />
            </Menu>
        </>
    )
}