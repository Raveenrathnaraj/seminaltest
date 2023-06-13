'use client';

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import Link from 'next/link';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

interface Transaction {
  reason: string;
  amount: string;
  type: 'Credit' | 'Debit';
  timestamp: string;
}

const ExpenseTracker: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState('');
  const [showGraph, setShowGraph] = useState(false);
  const [initialAmount, setInitialAmount] = useState(1000);
  useEffect(() => {
    // Generate 10 sample transactions
    const sampleTransactions: Transaction[] = Array.from(
      { length: 5 },
      (_, index) => ({
        reason: `Reason ${index + 1}`,
        amount: (Math.random() * 100).toFixed(2),
        type: Math.random() < 0.5 ? 'Credit' : 'Debit',
        timestamp: new Date().toLocaleString(),
      })
    );

    const sampleTransactionAmounts = sampleTransactions.map((transaction) =>
      parseFloat(transaction.amount)
    );
    //   const sampleTransactionTotal = sampleTransactionAmounts.reduce(
    //     (total, amount) => total + amount,
    //     0
    //   );

    setTransactions(sampleTransactions);
    setInitialAmount((prevAmount) => {
      let updatedAmount = prevAmount;
      sampleTransactions.forEach((transaction) => {
        if (transaction.type === 'Credit') {
          updatedAmount += parseFloat(transaction.amount);
        } else if (transaction.type === 'Debit') {
          updatedAmount -= parseFloat(transaction.amount);
        }
      });
      return updatedAmount;
    });
  }, []);

  const handleCredit = () => {
    const transaction: Transaction = {
      reason,
      amount,
      type: 'Credit',
      timestamp: new Date().toLocaleString(),
    };

    setTransactions([...transactions, transaction]);
    setReason('');
    setAmount('');
    setInitialAmount((prevAmount) => prevAmount + parseFloat(amount)); // Update initial amount
  };

  const handleDebit = () => {
    const transaction: Transaction = {
      reason,
      amount,
      type: 'Debit',
      timestamp: new Date().toLocaleString(),
    };

    setTransactions([...transactions, transaction]);
    setReason('');
    setAmount('');
    setInitialAmount((prevAmount) => prevAmount - parseFloat(amount)); // Update initial amount
  };

  const handleDownload = () => {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const csvData = [
      ['Reason', 'Amount', 'Type', 'Timestamp'],
      ...transactions.map((t) => [t.reason, t.amount, t.type, t.timestamp]),
    ];
    const csvString = csvData.map((row) => row.join(',')).join('\n');
    const encodedURI = encodeURI(csvContent + csvString);
    const link = document.createElement('a');
    link.setAttribute('href', encodedURI);
    link.setAttribute('download', 'transactions.csv');
    document.body.appendChild(link);
    link.click();
  };

  const handleShowGraph = () => {
    setShowGraph((prevState) => !prevState);
  };

  const data = {
    labels: transactions.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Expenses',
        data: transactions.map((t) => t.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const isFormValid = reason !== '' && amount !== '';
  const isEnabled = !transactions.length;

  return (
    <div className='container mx-auto p-20'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold my-4'>Expense Tracker</h1>
        <div className='text-right'>
          <span className='font-bold'>Initial Amount: {initialAmount}</span>
        </div>
      </div>

      <div className='my-4 flex justify-between items-center w-96'>
        <label htmlFor='reason' className='mr-2'>
          Reason:
        </label>
        <input
          id='reason'
          type='text'
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className='border border-gray-300 px-2 py-1 rounded text-black w-80'
        />
      </div>
      <div className='my-4 flex justify-between items-center w-96'>
        <label htmlFor='amount' className='mr-2'>
          Amount:
        </label>
        <input
          id='amount'
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='border border-gray-300 px-2 py-1 rounded text-black w-80'
        />
      </div>
      <div className='flex justify-between items-center'>
        <div className='my-4'>
          <button
            onClick={handleCredit}
            className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 ${
              !isFormValid && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Credit
          </button>
          <button
            onClick={handleDebit}
            className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ${
              !isFormValid && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Debit
          </button>
        </div>
        <div className='my-4'>
          <button
            onClick={handleDownload}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 ${
              isEnabled && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={isEnabled}
          >
            Download CSV
          </button>
          <button
            onClick={handleShowGraph}
            className={`bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded ${
              isEnabled && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={isEnabled}
          >
            Show {!showGraph ? 'Graph' : 'Table'}
          </button>
        </div>
      </div>

      {showGraph ? (
        <>
          <h2 className='text-2xl font-bold my-4'>Transactions</h2>
          <Line data={data} />
        </>
      ) : !isEnabled ? (
        <>
          <h2 className='text-2xl font-bold my-4'>Transactions</h2>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>Reason</th>
                <th className='border px-4 py-2'>Amount</th>
                <th className='border px-4 py-2'>Type</th>
                <th className='border px-4 py-2'>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className='border px-4 py-2'>{transaction.reason}</td>
                  <td
                    className={`border px-4 py-2 ${
                      transaction.type === 'Credit'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td
                    className={`border px-4 py-2 ${
                      transaction.type === 'Credit'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {transaction.type}
                  </td>
                  <td className='border px-4 py-2'>{transaction.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}

      <div className='mt-20'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-2'>Instructions:</h2>
          <h2 className='text-lg font-bold mb-2'>Duration: 1 hrs</h2>
        </div>
        <ol className='list-decimal ml-4'>
          <li>
            The application should have a user interface that allows users to
            enter the reason and amount for each transaction.
          </li>
          <li>
            The user should be able to select whether the transaction is a
            credit or debit. Upon entering the transaction details and selecting
            the transaction type, the transaction should be added to the
            transaction history.
          </li>
          <li>
            The application should display the transaction history in a table
            format, showing the reason, amount, type, and timestamp of each
            transaction. The initial amount should be set to $1000.
          </li>
          <li>
            The application should update the initial amount based on the
            credits and debits entered by the user. Users should be able to
            download their transaction history as a CSV file.
          </li>
          <li>
            The application should provide a line graph to visualize the
            transaction history. The graph should show the expenses over time,
            with the x-axis representing the transaction index and the y-axis
            representing the transaction amount. The line should be filled with
            a purple gradient.
          </li>
          <li>
            The graph should only be displayed if there are transactions in the
            transaction history. The &lsquo;Show Graph &rsquo; and
            &lsquo;Download &rsquo; buttons should be disabled if the
            transaction history is empty.
          </li>
        </ol>
        <br />
        <Link
          href={
            'https://codesandbox.io/s/fervent-mountain-xrp6pk?file=/src/App.js'
          }
          target='_blank'
          className='underline text-blue-600 mt-12'
        >
          Sandbox Template
        </Link>
      </div>
    </div>
  );
};

export default ExpenseTracker;
