// // - Đối tượng arguments
// function writeLog() {
//     console.log(arguments)//Tạo thành mảng có tên Arguments 
// }
// writeLog();

// // - Vòng lặp for of

// function writeLog() {
//     for(var param of arguments) { //chạy và in ra lấy phần tử của arguments và chạy số lần bằng số phần tử trong arguments
//         console.log(param)
//     }
// }
// writeLog('Log 1', 'Log2', 'Log3')

// VD
function writeLog() {
    var myString = '';
    for (var param of arguments) { //chạy và in ra lấy phần tử của arguments và chạy số lần bằng số phần tử trong arguments
        myString += `${param} - `;
    }
    console.log(myString)
}

writeLog('Log1', 'Log2', 'Log3', 'Log4')