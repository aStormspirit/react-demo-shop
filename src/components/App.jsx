import '../App.css';
import '../store.js';
import { useEffect } from 'react';
import axios from 'axios';
import Menu from '../containers/Menu'
import { Card, Container } from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';

function App(props) {

  const { books, setBooks } = props

  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }, [])

  return (
    <Container className="App">
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}>
        {books && books.map(book => (
          <BookCard {...book} />
        ))}
      </Card.Group>
    </Container>
  );
}


export default App;