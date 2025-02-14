const button = document.getElementById("button1");//وارد کردن
const button2 = document.getElementById("button2");// پاک کردن
const text = document.getElementById("text1");// متن
const num1 = document.getElementById("num1");//عدد

let squer_of_number = null;  // تعریف متغیر

button.addEventListener("click", function() {
    if (num1.value === "") {  // اصلاح برای چک کردن مقدار خالی
      text.innerText = "result : "+"\nPlease Enter a Number";
      return;
    } 
    squer_of_number = num1.value ** 2;  // محاسبه مربع عدد
    text.innerText += "\n"+ squer_of_number ;
    
});
button2.addEventListener("click", function() {
    text.innerText = "";  // پاک کردن متن
    num1.value = "";  // پاک کردن مقدار
    squer_of_number = null;  // پاک کردن مقدار متغیر
});
