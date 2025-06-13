import "./Item.css"
import Item from "./Item";
import {v4 as uuidv4} from 'uuid';  // Importing uuid for unique keys
import PropTypes from 'prop-types';
const Transaction = (prop) =>{

    const {item} = prop;
    return (
        <ul className=''>
            {item.map((item)=>{
                return (
                    <Item key={uuidv4()} name={item.name} amount={item.amount}></Item>
                )
            })}
        </ul>
    );
}

Transaction.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired

}
export default Transaction;
