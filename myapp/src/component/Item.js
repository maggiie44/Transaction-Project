import './Item.css';
import PropTypes from 'prop-types';

const Item = (prop) =>{
    const status = prop.amount < 0 ? 'minus' : 'plus';
    const formattedAmount = (num)=>prop.amount.toLocaleString();

    return(
            <li className={`item ${status}`}>
                <span>{prop.name}</span>
                <span>{formattedAmount(prop.amount)}</span></li>
    )
}

// Item.propTypes = {
//     name: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired

// }

export default Item;