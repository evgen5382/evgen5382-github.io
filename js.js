 function myFunction (){

  let inp1 = document.querySelector('.inp-1');
  let s1 = document.querySelector('.s-1');
  let s2 = document.querySelector('.s-2');
  let s3 = document.querySelector('.s-3');
  let out1 = +inp1.value * 15000 * +s1.value ; // кол-во шутов * 15000 * на множитель
  // out1 = Math.round(out1 * 100) / 100;
  let out = out1 / 100 * 6;                       // переменная для обителя знаний 6 процентов
  console.log(out)
  console.log(out1)
  let out2 = out1 / 100 * +s2.value + out;          //выявили проценты с книги колдуна
  console.log(out2)
  let out3 = out1 + out2;                     //сложили шуты с множителем + книгу колдуна
  console.log(out3)
  let out4 = out3 / 100 * +s3.value;          //узнали процент знамя
  console.log(out4)
  
  document.querySelector('.out').innerHTML = out3 + out4;
}
document.querySelector('.btn').onclick = myFunction;
