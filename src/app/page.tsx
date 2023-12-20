import Image from 'next/image'
import Hero from './ui/Hero'
import Menu from './ui/Menu'
import MenuCard from './ui/Menu/MenuCard'
import Schedule from './ui/Schedule'
import Location from './ui/Location'

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Menu title='Nuestro Menú' home>
        <MenuCard src='/fresa.png' alt='Fresa' name='Fresa' price={75} />
        <MenuCard src='/moka.png' alt='Moka' name='Moka' price={75} />
        <MenuCard src='/oreo.png' alt='Oreo' name='Oreo' price={80} />
        <MenuCard src='/taro.png' alt='Taro' name='Taro' price={80} />
      </Menu>
      <Location />
    </>
    //#8C8E65
    //#E4F0FC
    //#FF5BF5
  )
}
