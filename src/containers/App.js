import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App';
import { orderBy } from 'lodash-es';

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books
        case 'price_high':
            return orderBy(books, 'price', 'desc')
        case 'price_low':
            return orderBy(books, 'price', 'acs')
        case 'author':
            return orderBy(books, 'author', 'asc')
        default:
            return books
    }
}

const filterBooks = (books, searchQuery) =>
    books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );


const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
};

const state2props = ({ books, filter }) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
})

const set2props = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
})

export default connect(state2props, set2props)(App);