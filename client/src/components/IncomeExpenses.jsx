import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

  // let income =0
  // let expenses =0
  // transactions.map(transaction => {
  //   if (transaction.amount < 0) {

  //     expenses += transaction.amount
  //   } else{
  //     income += transaction.amount
  //   }
  // })

  // console.log(income, expenses)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item >0)
    .reduce((total, currValue) => total + currValue,0)
    .toFixed(2)

  const expenses = amounts
    .filter(item => item <0)
    .reduce((total, currValue) => total + currValue,0)
    .toFixed(2)


  return (
    <div className='inc-exp-container'>
        <div>
            <h1>Income</h1>
            <p id='money-plus' className='money plus'>+${income}</p>
        </div>
        <div>
            <h1>Expenses</h1>
            <p id='money-minus' className='money minus'>-${Math.abs(expenses)}</p>
        </div>
    </div>

  )
}
