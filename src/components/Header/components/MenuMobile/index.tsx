import React, { Fragment, useState } from 'react'
import * as Style from './style'
import { MdMenu, MdClose } from 'react-icons/md'
import { NavData } from '../../../../Mock/NavData/NavData'
import Button from '../../../Button'

type NavigationData = {
    title: string,
    id: number
}

const MenuMobile = () => {
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
        <Style.HamburguerMenu data-testid="menuopen" onClick={toogleMenu}>
                <MdMenu size={40} style={{ color: 'var(--white)', cursor: 'pointer' }} />
            </Style.HamburguerMenu>
            <Style.MenuContent  data-testid={isOpen ? 'menucontent' : 'menuclosed'} isOpen={isOpen}>
                <Style.CloseMenu data-testid="closebutton" onClick={toogleMenu}>
                    <MdClose size={40} style={{ color: 'var(--white)', cursor: 'pointer' }} />
                </Style.CloseMenu>
                {NavData.map((item: NavigationData) => (
                    <Fragment key={item.id}>
                        <Style.Links>{item.title}</Style.Links>
                    </Fragment>
                ))}
                <Button title='Comprar agora' />
            </Style.MenuContent>
        </Fragment>
    )
}

export default MenuMobile