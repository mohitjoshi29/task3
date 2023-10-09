// import React from 'react'

// export default function Task() {
//     var arr=[4,2.1,3,-4.1,2.4];
//     var newarr=[];
//     var newarr1=[];
//     var nearVal=1;

//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<nearVal){
//             newarr.push(arr[i]);
//             // debugger
//         }
//         else{
//             newarr1.push(arr[i]);
//             // debugger
//         }
//     }
//     // console.log(newarr);
//     // console.log(newarr1);
//     newarr.sort((a,b)=>{return (b-a)})
//     var newarr2=newarr1.concat(newarr);
//     console.log(newarr2.sort((a,b)=>{return (a+b)}))
//   return (
//     <div>
      
//     </div>
//   )
// }
import React from 'react'

export default function Task() {
        let arr = [4, 7, 3.5, 6, 5.3, 11, 9, -4.1, 2.4];
        // let arr = [2,3,-1,5,1]
        // let arr=[3,2,-1,5,6,8,1,10,-10];
        var arr1 = [];
        let finalarr = []
        let findnum = 12;
        for (var i = 0; i < arr.length; i++) {
            var diff = Math.abs(findnum - arr[i]);
            // console.log(` < li key=${arr[i]}> ${diff} = ${arr[i]} < /li>`);
            arr1.push({
                diff:diff,
                value: arr[i]
            });
            arr1.sort((a, b) => {
                    return (a.diff - b.diff)
                })
                // arr1.forEach(item => delete item.diff);
        }
        console.log(arr1);
        for (let i = 0; i < arr1.length; i++) {
          finalarr.push(arr1[i].value)          
        }
        console.log(finalarr)
  return (
    <div>
      
    </div>
  )
}
