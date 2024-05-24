

function max_heapify(arr, n, i) {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        max_heapify(arr, n, largest);
    }
}

function heap_Sort(arr) {

    let n = arr.length;

    // build heap (rearrange array) 

    //     Step-by-Step Build Heap Process
    // 1.Initial Array: [3, 19, 1, 14, 8, 7]

    // 2. Calculate Start Index: Math.floor(6 / 2) - 1 = 2

    // 3. First heapify call: heapify(arr, 6, 2)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        max_heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {

        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        max_heapify(arr, i, 0);
    }

}

/* A utility function to print array of size n */
function printArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; ++i)
        console.log(arr[i] + " ");

}



let arr = [12, 11, 13, 5, 6, 7];
let N = arr.length;

heap_Sort(arr);

console.log("Sorted array is");
printArray(arr, N);