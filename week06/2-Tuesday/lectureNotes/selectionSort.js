

//quadratic
//smallest = 0 i = 0


let arr = [4, 7, 2, 9, 0];  //[0, 2, 4, 7, 9]


function selectionSort(arr){

    for( let i = 0; i < arr.length; i++){
        let smallest = i;
        for (let j = i+1; j < arr.length; j++) {

            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        };
        if(i !== smallest){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        }
        
    }
    return arr;

}
console.log(selectionSort(arr));
