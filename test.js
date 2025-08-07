//LÀM VIỆC VỚI CHUỖI

var myString = 'Hoc JS tai JS F8'

//Keyword: Javascript string methods

//1.Length
    console.log(myString.length)

// 2.Find index
    console.log(myString.indexOf('JS')) //tìm chỗi theo thứ tự JS đầu tiên trong string -1: không tìm thấy
    console.log(myString.indexOf('JS', 6)) //tìm chữ JS tiếp theo sau thứ tự thứ 6
    console.log(myString.lastIndexOf('JS')) //tìm chuỗi JS cuối cùng trong String

// 3. Cut string
    console.log(myString.slice(4,6)) //cắt chuỗi từ vị trí số ...- ... theo thứ tự từ trái sang phải
    console.log(myString.slice(-3,-1)) //cắt chuỗi từ vị trí số ...- ... theo thứ tự từ phải sang trái

//4. Replace 
    console.log(myString.replace('JS', 'Javascript')) //Thay thế chứ JS đầu tiên bằng chữ 'Javascript'
    console.log(myString.replace(/JS/g, 'Javascript')) //Tìm và Thay thế tất cả các chữ JS bằng chữ 'Javascript'

//5. Convert to upper case
    console.log(mystring.toUpperCase()) //chuyển tất cả thành chữ in hoa
//6. Convert to lower case 
    console.log(mystring.toLowerCase()) //chuyển tất cả thành chữ in thường

//7. Trim
    console.log(myString.trim()) //loại bỏ khoảng trắng ở 2 đầu

//8. Split
    var languages = 'JavaScript, PHP, Ruby'
    console.log(languages.split(', ')) //cắt chuỗi bằng cách tìm điểm chung vd trong đoạn chuỗi là ", "

//9. Get a character by index
    const myString2 = 'Son Dang'
    //lấy chữ ở kí tự thứ ... trong chuỗi
    console.log(myString2.charAt(10))
    console.log(myString2[0])
