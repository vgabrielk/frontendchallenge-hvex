import React, { Fragment } from 'react'
import { Container } from '../../styles/components/Container'
import * as Style from './style'
import Logo from '../../assets/svg/Logo.svg'
import Button from '../Button'
import { NavData } from '../../Mock/NavData'
import MenuMobile from './components/MenuMobile'

type NavigationData = {
    title: string,
    id: number
}

const Header = () => {

    return (
        <Style.Header>
            <Container>
                <Style.HeaderContent>
                    <Style.Logo src={Logo} alt="Logo Hvex" role="img" />
                    <Style.Navigation>
                        {NavData.map((item: NavigationData) => (
                            <Style.Link key={item.id}>{item.title}</Style.Link>
                        ))}
                        <Button responsiveButton title='Comprar agora' />
                        <MenuMobile />
                    </Style.Navigation>
                </Style.HeaderContent>
            </Container>
        </Style.Header>
    )
}

export default Header