 function f1 (){

  let inp1 = document.querySelector('.inp-1');
  let s1 = document.querySelector('.s-1');
  let s2 = document.querySelector('.s-2');
  let s3 = document.querySelector('.s-3');
  
  let out1 = +inp1.value * 15000 * +s1.value;
  // console.log(out)
  let out2 = +s2.value + +s3.value;
  let out3 = out1/100 * out2;
  console.log(out3)
  // console.log(out1)
  document.querySelector('.out').innerHTML = out1 + out3;
}
document.querySelector('.btn').onclick = f1;