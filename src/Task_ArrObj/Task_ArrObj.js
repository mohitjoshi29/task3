import React, { useState, useEffect } from 'react'

export default function Task_ArrObj() {
    // INPUT
    // [
    //     { "debtor": "user2", "amount": 630, "creditor": "user1" },
    //     { "debtor": "user3", "amount": 1180, "creditor": "user1" },
    //     { "debtor": "user4", "amount": 250, "creditor": "user1" },
    //     { "debtor": "user1", "amount": 480, "creditor": "user4" },
    //     { "debtor": "user2", "amount": 240, "creditor": "user4" },
    //     { "debtor": "user3", "amount": 240, "creditor": "user4" },
    //     { "debtor": "user4", "amount": 140, "creditor": "user2" },
    // ]
    // // OUTPUT
    // [
    //     { "debtor": "user2", "amount": 630, "creditor": "user1" },
    //     { "debtor": "user3", "amount": 1180, "creditor": "user1" },
    //     { "debtor": "user3", "amount": 240, "creditor": "user4" }
    //     { "debtor": "user1", "amount": 230, "creditor": "user4" },
    //     { "debtor": "user2", "amount": 100, "creditor": "user4" },
    // ]
    var [debitor, setDebitor] = useState('');
    var [amount, setAmount] = useState('');
    var [creditor, setCreditor] = useState('');
    var [data, setData] = useState([]);

    var handleclick = (e) => {
        e.preventDefault();
        var list = { debitor: debitor, amount: amount, creditor: creditor };
        // debugger
        setData(prev => [...prev, list]);
        // console.log(data);
    }
    useEffect(() => {
        console.log(data);
    }, [data])
    
    return (
        <div>
            <div className='container' style={{ marginTop: '20px' }}>
                <h1 className='h1 text-primary'>Form</h1>
                <form onSubmit={handleclick}>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <label className='form-label' htmlFor='debitor'>debitor</label>
                            <input className='form-control' type='text' value={debitor} name='debitor' onChange={(e) => setDebitor(e.target.value)} />
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <label className='form-label' htmlFor='amount'>amount</label>
                            <input className='form-control' type='amount' value={amount} name='amount' onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <label className='form-label' htmlFor='creditor'>creditor</label>
                            <input className='form-control' type='creditor' value={creditor} name='creditor' onChange={(e) => setCreditor(e.target.value)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <br />
                            <button className='btn btn-primary form-control' type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
        </div>
    )
}
