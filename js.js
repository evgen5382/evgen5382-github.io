 function f1 (){

  let inp1 = document.querySelector('.inp-1');
  let inp2 = document.querySelector('.inp-2');
  let inp3 = document.querySelector('.inp-3');
  let inp4 = document.querySelector('.inp-4');
  
  let out = +inp1.value * 15000 * +inp2.value;
  // console.log(out)
  let out0 = (out / 100) * +inp3.value;
  // console.log(out0)
  let out1 = (out + out0) / 100 * +inp4.value
  // console.log(out1)
  document.querySelector('.out').innerHTML = out + out0 + out1;
}
document.querySelector('.btn').onclick = f1;