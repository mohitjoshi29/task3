import React from 'react'

export default function TwoArr() {
    var arr1=[9,8,1,5,7,1];
    var arr2=[6,7,9,2,3,9];
    var arr3=[];
    var arr4=[];
    var arr5=[];
    var arr6=[];
    var count=1;
    for(var i=0;i<arr1.length;i++){
        for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]==arr1[j]){
                count+=1;
                arr3.push({val:arr1[i],times:count});
            }
        }
        count=1;
    }
    for(var i=0;i<arr2.length;i++){
        for(var j=i+1;j<arr2.length;j++){
            if(arr2[i]==arr2[j]){
                count+=1;
                arr3.push({val:arr2[i],times:count})
            }
        }
        count=1;
    }

    console.log(arr3);
    for(var i=0;i<arr1.length;i++){
        if(!arr1[i]==arr3[i])
        arr5.push(arr1[i]);
    }
    console.log(arr5);
    var counter=0;
    for(var i=0;i<arr3.length;i++){
        arr4.push(arr3[i].val*arr3[i].times);
    }
    console.log(arr4);

  return (
    <div>
    </div>
  )
}
