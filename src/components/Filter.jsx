import { React } from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({ filterBy, setFilter, searchQuery, setQuery }) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
                content='все'
            />
            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
                content='Цена(дорогие)'
            />
            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
                content='Цена(Дешевые)'

            />
            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}
                content='Автор'
            />
            <Menu.Item>
                <Input
                    icon="search"
                    placeholder="Введите запрос..."
                    value={searchQuery}
                    onChange={e => setQuery(e.target.value)}
                />
            </Menu.Item>
        </Menu>
    )
}

export default Filter