import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const Transaction = ( {transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.id}  <span>{transaction.text}</span> 
        <span>${transaction.amount > 0 ? "+" : ""}{transaction.amount}</span>
        <button onClick={() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
