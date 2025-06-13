import { useContext } from "react";
import DataContext from "./DataContext"
import './ReportTransaction.css';
import './Item.css'


const ReportTransaction = () =>{
    const {income, expense,total} = useContext(DataContext);
    const formattedAmount = (num)=> num.toLocaleString();

    return(
        <div className="report-transaction">

            <h2>ยอดเงินคงเหลือ</h2>
            <p>{formattedAmount(total)}</p>
            <div className="report-container">

                <div className="report-income " >
                    <h3>รายรับ</h3>
                    <p className="income">{formattedAmount(income)}</p>
                </div>

                <div className="report-expense ">
                    <h3>รายจ่าย</h3>
                    <p className="income">{formattedAmount(expense)}</p>
                </div>
            </div>

        </div>
    )
}

export default ReportTransaction;