import { React, useState } from 'react'
import { Menu } from 'semantic-ui-react'

const MenuBlock = ({ totalPrice, count }) => {

    const [item, setItem] = useState({})

    function handleItemClick(e, { name }) {
        setItem({ activeItem: name })
    }

    const { activeItem } = item

    console.log(totalPrice, typeof (totalPrice))

    return (
        <Menu>
            <Menu.Item
                name='browse'
                active={activeItem === 'browse'}
                onClick={handleItemClick}
            >
                Магазин книг
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    active={activeItem === 'signup'}
                    onClick={handleItemClick}
                >
                    Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
                </Menu.Item>

                <Menu.Item
                    name='help'
                    active={activeItem === 'help'}
                    onClick={handleItemClick}
                >
                    Корзина &nbsp; <b>({count})</b>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBlock