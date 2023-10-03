import React from 'react'
import './Flexprop.css'

export default function Flexprop() {
    var S = "THISISSAMPLESENTENCE"
    var newarr=[];
    var newarr1=[];
    var newarr2=[];

    var arr1=S.split('');
    console.log(arr1);
    // var ROW = 3
    // var zigzag =
    //     T          I        M       S         E
    //     H    S     S   A    P   E   E   T     N    E
    //     I          S        L       N         C
    // output = 'TIMSEHSSAPEETNEISLNC'
    for(var i=0;i<arr1.length;i++){
             newarr.push(arr1[i])
            console.log(newarr);

            i=i+3;
        }
        for(var j=1;j<arr1.length;j++){
            newarr1.push(arr1[j]);
            console.log(arr1[j]);
            j=j+1;
        }
        for(var k=2;k<arr1.length;k++){
            newarr2.push(arr1[k]);
            console.log(arr1[k]);
            k=k+3;
        }
        var arr4=newarr.concat(newarr1,newarr2);
        console.log(arr4);
        document.write(arr4);
    return (
        <div>
            

        </div>
    )
}


