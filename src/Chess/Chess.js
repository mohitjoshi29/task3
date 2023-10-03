import React from 'react'
import './Chess.css'

export default function Chess() {
    let SubmitNumber = () => {

        let inputValue = document.getElementById('inputfield').value;

        // debugger
        // let input1=document.getElementsByClassName('box').value;
        // input1.forEach(element => {
            
        //     // var len=input1.length;
        //     if(element.length<=3){
        //         // debugger
        //         document.getElementsByClassName('box').innerText=input1;
        //     }
        //     else{
        //         document.getElementsByClassName('box').innerText=input1.slice(0,4);
        //     }
        // });


        let wb1 = document.getElementById('wb1').innerText = inputValue;
        let bb1 = document.getElementById('bb1').innerText = `${wb1 * 2}`;
        if(bb1.length>3){
            document.getElementById('bb1').innerText = `${bb1.slice(0,3)}....`
        }
        else{
            document.getElementById('bb1').innerText = bb1
        }

        let wb2 = document.getElementById('wb2').innerText = bb1 * 2;
        let bb2 = document.getElementById('bb2').innerText = wb2 * 2;
        let wb3 = document.getElementById('wb3').innerText = bb2 * 2;
        let bb3 = document.getElementById('bb3').innerText = wb3 * 2;
        let wb4 = document.getElementById('wb4').innerText = bb3 * 2;
        let bb4 = document.getElementById('bb4').innerText = wb4 * 2;


        let wb8 = document.getElementById('wb8').innerText = bb4 * 2;
        let bb8 = document.getElementById('bb8').innerText = wb8 * 2;
        let wb7 = document.getElementById('wb7').innerText = bb8 * 2;
        let bb7 = document.getElementById('bb7').innerText = wb7 * 2;
        let wb6 = document.getElementById('wb6').innerText = bb7 * 2;
        let bb6 = document.getElementById('bb6').innerText = wb6 * 2;
        let wb5 = document.getElementById('wb5').innerText = bb6 * 2;
        let bb5 = document.getElementById('bb5').innerText = wb5 * 2;

        let wb9 = document.getElementById('wb9').innerText = bb5 * 2;
        let bb9 = document.getElementById('bb9').innerText = wb9 * 2;
        let wb10 = document.getElementById('wb10').innerText = bb9 * 2;
        let bb10 = document.getElementById('bb10').innerText = wb10 * 2;
        let wb11 = document.getElementById('wb11').innerText = bb10 * 2;
        let bb11 = document.getElementById('bb11').innerText = wb11 * 2;
        let wb12 = document.getElementById('wb12').innerText = bb11 * 2;
        let bb12 = document.getElementById('bb12').innerText = wb12 * 2;

        let wb16 = document.getElementById('wb16').innerText = bb12 * 2;
        let bb16 = document.getElementById('bb16').innerText = wb16 * 2;
        let wb15 = document.getElementById('wb15').innerText = bb16 * 2;
        let bb15 = document.getElementById('bb15').innerText = wb15 * 2;
        let wb14 = document.getElementById('wb14').innerText = bb15 * 2;
        let bb14 = document.getElementById('bb14').innerText = wb14 * 2;
        let wb13 = document.getElementById('wb13').innerText = bb14 * 2;
        let bb13 = document.getElementById('bb13').innerText = wb13 * 2;

        let wb17 = document.getElementById('wb17').innerText = bb13 * 2;
        let bb17 = document.getElementById('bb17').innerText = wb17 * 2;
        let wb18 = document.getElementById('wb18').innerText = bb17 * 2;
        let bb18 = document.getElementById('bb18').innerText = wb18 * 2;
        let wb19 = document.getElementById('wb19').innerText = bb18 * 2;
        let bb19 = document.getElementById('bb19').innerText = wb19 * 2;
        let wb20 = document.getElementById('wb20').innerText = bb19 * 2;
        let bb20 = document.getElementById('bb20').innerText = wb20 * 2;

        let wb24 = document.getElementById('wb24').innerText = bb20 * 2;
        let bb24 = document.getElementById('bb24').innerText = wb24 * 2;
        let wb23 = document.getElementById('wb23').innerText = bb24 * 2;
        let bb23 = document.getElementById('bb23').innerText = wb23 * 2;
        let wb22 = document.getElementById('wb22').innerText = bb23 * 2;
        let bb22 = document.getElementById('bb22').innerText = wb22 * 2;
        let wb21 = document.getElementById('wb21').innerText = bb22 * 2;
        let bb21 = document.getElementById('bb21').innerText = wb21 * 2;

        let wb25 = document.getElementById('wb25').innerText = bb21 * 2;
        let bb25 = document.getElementById('bb25').innerText = wb25 * 2;
        let wb26 = document.getElementById('wb26').innerText = bb25 * 2;
        let bb26 = document.getElementById('bb26').innerText = wb26 * 2;
        let wb27 = document.getElementById('wb27').innerText = bb26 * 2;
        let bb27 = document.getElementById('bb27').innerText = wb27 * 2;
        let wb28 = document.getElementById('wb28').innerText = bb27 * 2;
        let bb28 = document.getElementById('bb28').innerText = wb28 * 2;

        let wb29 = document.getElementById('wb29').innerText = `${bb28 * 2}`;
        if(wb29.length>3){
            document.getElementById('wb29').innerText = `${wb29.slice(0,3)}....`
        }
        else{
            document.getElementById('wb29').innerText = wb29
        }

        let bb29 = document.getElementById('bb29').innerText = `${wb29 * 2}`;
        if(bb29.length>3){
            document.getElementById('bb29').innerText = `${bb29.slice(0,3)}....`
        }
        else{
            document.getElementById('bb29').innerText = bb29
        }

        let wb30 = document.getElementById('wb30').innerText = `${bb29 * 2}`;
        if(wb30.length>3){
            document.getElementById('wb30').innerText = `${wb30.slice(0,3)}....`
        }
        else{
            document.getElementById('wb30').innerText = wb30
        }
        let bb30 = document.getElementById('bb30').innerText = wb30 * 2;
        let wb31 = document.getElementById('wb31').innerText = bb30 * 2;
        let bb31 = document.getElementById('bb31').innerText = `${wb31 * 2}`;
        if(bb31.length>3){
            document.getElementById('bb31').innerText = `${bb31.slice(0,3)}....`
        }
        else{
            document.getElementById('bb31').innerText = bb31
        }

        let wb32 = document.getElementById('wb32').innerText = `${bb31 * 2}`;
        if(wb32.length>3){
            document.getElementById('wb32').innerText = `${wb32.slice(0,3)}....`
        }
        else{
            document.getElementById('wb32').innerText = wb32
        }

    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='userInput row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <br />
                        <h2>ChessBox</h2>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <br />
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            User Choice
                        </button>

                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">User form...</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {/* form starts */}
                                        <div class="mb-3">
                                            <h2>Please Enter any number</h2>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Number</label>
                                            <input type="number" class="form-control" id='inputfield' />
                                        </div>
                                        {/* form end */}
                                    </div>
                                    <div class="modal-footer">
                                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={ResetFied}>Close</button> */}
                                        <button type="button" class="btn btn-primary" onClick={SubmitNumber}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <div className='Chess-board'>
                    <div className='boxrow' id='bx1'>
                        <div className='box white' id='wb1'></div>
                        <div className='box black' id='bb1'></div>
                        <div className='box white' id='wb2'></div>
                        <div className='box black' id='bb2'></div>
                        <div className='box white' id='wb3'></div>
                        <div className='box black' id='bb3'></div>
                        <div className='box white' id='wb4'></div>
                        <div className='box black' id='bb4'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx2'>
                        <div className='box black' id='bb5'></div>
                        <div className='box white' id='wb5'></div>
                        <div className='box black' id='bb6'></div>
                        <div className='box white' id='wb6'></div>
                        <div className='box black' id='bb7'></div>
                        <div className='box white' id='wb7'></div>
                        <div className='box black' id='bb8'></div>
                        <div className='box white' id='wb8'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx3'>
                        <div className='box white' id='wb9'></div>
                        <div className='box black' id='bb9'></div>
                        <div className='box white' id='wb10'></div>
                        <div className='box black' id='bb10'></div>
                        <div className='box white' id='wb11'></div>
                        <div className='box black' id='bb11'></div>
                        <div className='box white' id='wb12'></div>
                        <div className='box black' id='bb12'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx4'>
                        <div className='box black' id='bb13'></div>
                        <div className='box white' id='wb13'></div>
                        <div className='box black' id='bb14'></div>
                        <div className='box white' id='wb14'></div>
                        <div className='box black' id='bb15'></div>
                        <div className='box white' id='wb15'></div>
                        <div className='box black' id='bb16'></div>
                        <div className='box white' id='wb16'></div>
                    </div><br />
                    <div className='boxrow' id='bx5'>
                        <div className='box white' id='wb17'></div>
                        <div className='box black' id='bb17'></div>
                        <div className='box white' id='wb18'></div>
                        <div className='box black' id='bb18'></div>
                        <div className='box white' id='wb19'></div>
                        <div className='box black' id='bb19'></div>
                        <div className='box white' id='wb20'></div>
                        <div className='box black' id='bb20'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx6'>
                        <div className='box black' id='bb21'></div>
                        <div className='box white' id='wb21'></div>
                        <div className='box black' id='bb22'></div>
                        <div className='box white' id='wb22'></div>
                        <div className='box black' id='bb23'></div>
                        <div className='box white' id='wb23'></div>
                        <div className='box black' id='bb24'></div>
                        <div className='box white' id='wb24'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx7'>
                        <div className='box white' id='wb25'></div>
                        <div className='box black' id='bb25'></div>
                        <div className='box white' id='wb26'></div>
                        <div className='box black' id='bb26'></div>
                        <div className='box white' id='wb27'></div>
                        <div className='box black' id='bb27'></div>
                        <div className='box white' id='wb28'></div>
                        <div className='box black' id='bb28'></div>
                    </div>
                    <br />
                    <div className='boxrow' id='bx8'>
                        <div className='box black' id='bb29'></div>
                        <div className='box white' id='wb29'></div>
                        <div className='box black' id='bb30'></div>
                        <div className='box white' id='wb30'></div>
                        <div className='box black' id='bb31'></div>
                        <div className='box white' id='wb31'></div>
                        <div className='box black' id='bb32'></div>
                        <div className='box white' id='wb32'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
