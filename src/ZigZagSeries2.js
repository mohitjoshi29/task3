import React from 'react'

export default function ZigZagSeries2() {
    let series = 'THISISSAMPLESENTENCE';
    // let ROW = 3
    // let ROW = 4;
    let str = '';
    // var zigzag =
    //     T          I        M       S         E
    //     H    S     S   A    P   E   E   T     N    E
    //     I          S        L       N         C
    // output = 'TIMSEHSSAPEETNEISLNC'

    //****-------row 3 start------****//

    // for (let i = 0; i < ROW; i++) {
    //     for (let j = i; j < series.length; j++) {
    //         if (i == 0) {
    //             str += series[j] + " ";
    //             j = j + 3;
    //         }
    //         else {
    //             if (i == 1) {
    //                 str += series[j];
    //                 j = j + 1;
    //             }
    //             else {
    //                 if (i == 2) {
    //                     str += series[j] + " ";
    //                     j = j + 3;
    //                 }
    //             }
    //         }
    //     }
    //     str += '\n';
    // }
    // console.log(str);

    //****-------row 3 end------****//
    //****-------row 4 start------****//
    var arr = [];
    var ROW = 4;
    var minRow = false;
    let h = 0;
    for (var i = 0; i < ROW; i++) {
        arr.push(new Array());
    }
    for (let j = 0; j < series.length; j++) {
        arr[h].push(series[j]);
        // if (minRow) {
        //     h++;
        //     if (h > ROW - 1) {
        //         h = ROW - 1;
        //         // debugger
        //         minRow = false;
        //     }
            // else {
                // h--;
                // debugger
                // if (h == 0) {
                //     h = ROW-1;
                //     minRow = true;
                // }
            // }
    //     }
    if(h==ROW-1){
        minRow=false;
    }
    if(h==0){
        minRow=true;
    }
    if(!minRow){
        h--;
    }
    else{
        h++;
    }
    }


    console.log(arr);



    //****-------row 4 end------****//

    return (
        <div>

        </div>
    )
}
