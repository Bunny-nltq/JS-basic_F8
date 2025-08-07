// 1. To String
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

// 2. Join
console.log(languages.join(', ')) // chèn kí tự vào giữa các phần tử trong mảng

// 3. Pop
console.log(languages.pop()) //Xóa element cuối bảng và trả về phần tử đã xóa

// 4. Push
console.log(languages.push('Dart')) //Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về số phần tử trong mảng

// 5. Shift
console.log(languages.shift()) //Xóa phần tử đầu mảng và trả về phần tử đã xóa

// 6. Unshift
console.log(languages.shift()) //Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về số phần tử trong mảng

// 7. Splicing
languages.splice(1, 2, 'Dart')//đặt con trỏ ở phần tử số ..., từ vị trí đặt con trỏ xóa đi ... phần tử, truyền thêm phần tử tên '...' vào ngay vị trí con trỏ

// 8. Concat
var languages2 = [
    'Dart',
    'Ruby'
]
console.log(languages.concat(languages2)) //Gộp 2 mảng lại theo thứ tự trước sau

// 9. Slicing
console.log(languages.slice())//Cắt lấy element từ số ... trong mảng (còn lại bỏ)