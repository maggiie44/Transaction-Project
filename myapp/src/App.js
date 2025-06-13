
import './App.css';
import Transaction from './component/Transaction';
import Nav from './component/Nav';
import Form from './component/Form';
import { useState,createContext,useContext,useEffect,useReducer } from 'react';
import DataContext from './component/DataContext';
import ReportTransaction from './component/ReportTransaction';
import {BrowserRouter as Router, Route, Routes , Switch , Link} from 'react-router-dom';

function App(pro) {
//   const mockData = [
//     {name: "Transaction 1", amount: 200 },
//     {name: "Transaction 2", amount: -150 },
//     {name: "Transaction 3", amount: 300 },
//     {name: "Transaction 4", amount: -100 },
// ]
const [transactions, setTransactions] = useState([]);
const [reportIncome, setReportIncome] = useState(0);
const [reportExpense, setReportExpense] = useState(0);
const [reportTotal, setReportTotal] = useState(0);
const [showReport, setShowReport] = useState(false);
// 

useEffect(() => {
 const amounts =  transactions.map(item=>item.amount)
//  console.log(amounts);
 const income = amounts.filter(item => item>0).reduce((sum,item)=> sum + item,0)
//  console.log('income arr',income);
 const expense = (amounts.filter(item => item<0).reduce((sum,item)=> sum + item,0)) * -1; // Convert to positive value
 console.log('expense arr',expense);
 const toltal = income - expense;
//  console.log('toltal',toltal);
  setReportTotal(toltal);
 setReportExpense(expense);
  setReportIncome(income);
},[transactions])

const addNew = (newTransaction) => {
  console.log('new transcription', newTransaction);
  setTransactions((intiitem)=>[
    ...intiitem,
    newTransaction
  ])
}
  return (
    <DataContext.Provider value={{
      income : reportIncome,
      expense : reportExpense,
      total : reportTotal,
    }}>
          <div>
      <Nav></Nav>
    <div className="container">
      <div className='Transaction-container'>
        <h1 className='title'> รายงานการเงิน </h1>
          <Router>
            <div>
              <ul className='top-menu'>
                <li>
                  <Link to='/'>ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to ='/insert'>เพิ่มข้อมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path='/' exact element={<ReportTransaction/>}></Route>
                <Route path='/insert' element={<><Transaction item = {transactions}/><Form addNew = {addNew}></Form></>}></Route>
              </Routes>
            </div>
          </Router>
        
        {/* <Transaction item = {transactions}/>
        <Form addNew = {addNew}></Form> */}
      </div>
    </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;
