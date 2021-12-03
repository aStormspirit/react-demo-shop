import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard = ({ title, author, price, image, addCart }) => (
    <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='rub' />
                {price}
            </a>
        </Card.Content>
        <Button onClick={addCart}>Купить</Button>
    </Card>
)

export default BookCard