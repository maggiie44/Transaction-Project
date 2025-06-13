import './Form.css';
import { useState,useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
const Form = (props) =>{

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [inputValid, setInputValid] = useState(false);

    const handleTitle = (e) =>{
        setName(e.target.value)
        console.log(e.target.value);
    }
    const handleAmount = (e) =>{
        setAmount(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemData ={
            id: uuidv4(),
            name: name,
            amount: +amount, // Convert to number
        }
        props.addNew(itemData)
        setName(''); // Clear input after submission
        setAmount(0); // Clear input after submission
    }

    useEffect(()=>{
        if(amount !=0 && name.trim() !== ''){
            setInputValid(true);
        }
    },[name,amount])

    return(
        <div>
           <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label className='input-label'>รายละเอียด</label>
                    <input type="text" placeholder="รายละเอียดการใช้จ่าย"  onChange={handleTitle}/>
                </div>
                <div>
                    <label>จำนวน</label>
                    <input type="text" placeholder="รายละเอียดการใช้จ่าย" onChange={handleAmount}/>
                </div>                
                <div>
                    <button className='form-btn' type="submit" disabled={!inputValid}>บันทึก</button>
                </div>           
           </form>
        </div>
    )
}

export default Form;