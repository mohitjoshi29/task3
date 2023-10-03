import React, { useState } from 'react'

export default function SearchKey() {
    const [hiddenInp, setHiddenInp] = useState(false);

    const ShowFun = () => {
        setHiddenInp(!hiddenInp)
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='input_field'>
                    {hiddenInp ?
                        <div>
                            <input type='text' className='input1' />
                            <button className='btn2' onClick={ShowFun}><i class="fa fa-search" ></i></button>
                        </div> :
                        <button className='btn1' onClick={ShowFun}><i class="fa fa-search" ></i></button>}
                </div>
            </div>
        </div>
    )
}
