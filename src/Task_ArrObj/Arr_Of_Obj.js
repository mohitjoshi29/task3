// import React from 'react'

// export default function Arr_Of_Obj() {
//     var arr = [];
//     var countArray = [];
//     var data = [
//         { "debtor": "user2", "amount": 630, "creditor": "user1" },
//         { "debtor": "user2", "amount": 630, "creditor": "user1" },
//         { "debtor": "user2", "amount": 630, "creditor": "user1" },
//         { "debtor": "user3", "amount": 1180, "creditor": "user1" },
//         { "debtor": "user4", "amount": 250, "creditor": "user1" },
//         { "debtor": "user1", "amount": 480, "creditor": "user4" },
//         { "debtor": "user2", "amount": 240, "creditor": "user4" },
//         { "debtor": "user3", "amount": 240, "creditor": "user4" },
//         { "debtor": "user4", "amount": 140, "creditor": "user2" },
//     ]
//     // // OUTPUT
//     // [
//     //     { "debtor": "user2", "amount": 630, "creditor": "user1" },
//     //     { "debtor": "user3", "amount": 1180, "creditor": "user1" },
//     //     { "debtor": "user3", "amount": 240, "creditor": "user4" }
//     //     { "debtor": "user1", "amount": 230, "creditor": "user4" },
//     //     { "debtor": "user2", "amount": 100, "creditor": "user4" },
//     // ]

//     for (var i = 0; i < data.length; i++) {
//         for (var j = i + 1; j < data.length; j++) {
//             if ((data[i].debtor === data[j].creditor) && (data[j].debtor === data[i].creditor)) {
//                 var amount = Math.abs(data[i].amount - data[j].amount);

//                 if (data[i] > data[j]) {
//                     arr.push({ debtor: data[i].debtor, amount: amount, creditor: data[i].creditor });
//                 }
//                 else {
//                     arr.push({ debtor: data[i].creditor, amount: amount, creditor: data[i].debtor });
//                 }
//                 countArray.push(i, j)
//                 // console.log(arr);
//             }
//             else if ((data[i].debtor === data[j].debtor) && (data[i].creditor === data[j].creditor)) {
//                 var amount = Math.abs(data[i].amount + data[j].amount);

//                 // var RepeatValue=()=>{
//                 //     if(((arr[i].debtor)&&(arr[i].amount)&&(arr[i].creditor))===((data[j].debtor)&&(data[j].amount)&&(data[j])&&(data[j].creditor))){

//                 //     }
//                 // }
//                 // {arr.some(RepeatValue)}

//                 if (data[i] > data[j]) {
//                     arr.push({ debtor: data[i].debtor, amount: amount, creditor: data[i].creditor });
//                 }
//                 else {
//                     arr.push({ debtor: data[i].creditor, amount: amount, creditor: data[i].debtor });
//                 }
//                 countArray.push(i, j)
//                 // console.log(arr);
//             }
//         }
//     }
//     // var newarr=[];
//     // for (var i = 0; i < arr.length; i++) {
//     //     for (var j = i + 1; j < newarr.length; j++) {
//     //         debugger
//     //         if (((arr[i].debtor) == (arr[j].debtor)) && ((arr[i].amount)==(arr[j].amount)) && ((arr[i].creditor)==(arr[j].creditor)) ){
//     //         }
//     //         else{
//     //             newarr.push(arr[i]);
//     //         }
//     //     }
//     // }
//     // console.log(newarr);
//     // var newValr=Array.from(new Set(arr));

//     // const uniqueNames = [];
//     // const namesArr = arr.filter((val, id,Array) => {
//     //     return Array.indexOf(val) == id;  // this just returns true
//     // });
//     // // uniqueNames.push(namesArr);

//     // var filteredArr = Array.from(new Set(arr));
//     // console.log(filteredArr);

//     let ar1 = data.filter((item, index) => !countArray.includes(index))
//     let finalArray = [...ar1, ...arr]
//     // let filterdArray = finalArray.filter((item, index) =>{})
//     console.log(finalArray);

//     return (
//         <div>

//         </div>
//     )
// }

//**********************************************************/

import React from 'react'
export default function Arr_Of_Obj() {
    var arr = [];
    var countArray = [];
    var data = [
            { "debtor": "user2", "amount": 630, "creditor": "user1" },
            { "debtor": "user2", "amount": 630, "creditor": "user1" },
            { "debtor": "user2", "amount": 630, "creditor": "user1" },
            { "debtor": "user3", "amount": 1180, "creditor": "user1" },
            { "debtor": "user4", "amount": 250, "creditor": "user1" },
            { "debtor": "user1", "amount": 480, "creditor": "user4" },
            { "debtor": "user2", "amount": 240, "creditor": "user4" },
            { "debtor": "user3", "amount": 240, "creditor": "user4" },
            { "debtor": "user4", "amount": 140, "creditor": "user2" },
        ]
        // // OUTPUT
        // [
        //     { "debtor": "user2", "amount": 630, "creditor": "user1" },
        //     { "debtor": "user3", "amount": 1180, "creditor": "user1" },
        //     { "debtor": "user3", "amount": 240, "creditor": "user4" }
        //     { "debtor": "user1", "amount": 230, "creditor": "user4" },
        //     { "debtor": "user2", "amount": 100, "creditor": "user4" },
        // ]
    for (var i = 0; i < data.length; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if ((data[i].debtor === data[j].creditor) && (data[j].debtor === data[i].creditor)) {
                var amount = Math.abs(data[i].amount - data[j].amount);
                if (data[i] > data[j]) {
                    arr.push({ debtor: data[i].debtor, amount: amount, creditor: data[i].creditor });
                } else {
                    arr.push({ debtor: data[i].creditor, amount: amount, creditor: data[i].debtor });
                }
                countArray.push(i, j)
            } else if ((data[i].debtor === data[j].debtor) && (data[i].creditor === data[j].creditor)) {
                var amount = Math.abs(data[i].amount + data[j].amount);
                if (data[i] > data[j]) {
                    arr.push({ debtor: data[i].debtor, amount: amount, creditor: data[i].creditor });
                } else {
                    arr.push({ debtor: data[i].creditor, amount: amount, creditor: data[i].debtor });
                }
                countArray.push(i, j)
            }
        }
    }
    function removeDuplicates(array) {
        return array.filter((item, index, self) => {
            const firstIndex = self.findIndex(
                (innerItem) =>
                    innerItem.debtor === item.debtor &&
                    innerItem.amount === item.amount &&
                    innerItem.creditor === item.creditor
            );
            return index === firstIndex;
        });
    }
    // Remove duplicates from the 'arr' array
    arr = removeDuplicates(arr);
    // Merge the filtered 'arr' with the remaining items from 'data'
    let ar1 = data.filter((item, index) => !countArray.includes(index));
    let finalArray = [...ar1, ...arr];
    console.log(finalArray);
    return ( 
        <div></div>
    )
}
