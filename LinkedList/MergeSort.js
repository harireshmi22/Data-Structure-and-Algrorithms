


function merge(arr, l, m, r) {

    let n1 = m - l + 1; // Example: If l=0, m=2, then n1 = (2-0+1) = 3
    let n2 = r - m;  // Example: If m=2, r=4, then n2 = (4-2) = 2

    // Create temporary arrays L and R to hold the elements of the two subarrays
    let L = new Array(n1); // Example: If n1=3, creates an array of length 3
    let R = new Array(n2); // Example: If n2=2, creates an array of length 2

    // Copy elements from the original array into the temporary arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i]; // Example: If l=0, copies elements from arr[0] to arr[2] into L[]
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];  // Example: If m=2, copies elements from arr[3] to arr[4] into R[]


    // Merge the two temporary arrays back into the original array arr[l..r]
    // Initial index of the first subarray (L[])

    let i = 0;

    // Initial index of the second subarray (R[])
    let j = 0;

    // Merge the elements of the two subarrays in sorted order
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {

            arr[k] = L[i]; // Example: If L[i] <= R[j], copies L[i] into arr[k]
            i++;

        } else {

            arr[k] = R[j];
            j++;
        }

        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++
    }

}

function mergeSort(arr, l, r) {

    if (l >= r) {
        return;
    }

    let m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

// Function to print an array
function printArray(A, size) {
    for (var i = 0; i < size; i++)
        console.log(A[i] + " ");
}


let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length;

console.log("Given array is ");
printArray(arr, arr_size);

mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array is ");
printArray(arr, arr_size);
