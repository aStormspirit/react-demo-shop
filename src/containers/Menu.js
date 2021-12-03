import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/cart';
import MenuBlock from '../components/MenuBlock';

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuBlock);
