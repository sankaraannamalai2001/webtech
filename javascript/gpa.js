const gpaBtn = document.querySelector("#gpabtn");
gpaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let select = document.querySelector("#subj1");
  let select2 = document.querySelector("#subj2");
  let select3 = document.querySelector("#subj3");
  let select4 = document.querySelector("#subj4");
  let select5 = document.querySelector("#subj5");
  const crdt = document.getElementsByName("crdt[]");
  const result = document.querySelector(".result");
  let value = select.options[select.selectedIndex].value;
  let value2 = select2.options[select2.selectedIndex].value;
  let value3 = select3.options[select3.selectedIndex].value;
  let value4 = select4.options[select4.selectedIndex].value;
  let value5 = select5.options[select5.selectedIndex].value;
  let sum = 0;
  let arr = [];
  let count = 0;
  for (i of crdt) {
    sum = sum + Number(i.value);
    arr.push(Number(i.value));
    count += 1;
  }
  console.log(arr);
  const res =
    (arr[0] * value +
      arr[1] * value2 +
      arr[2] * value3 +
      arr[3] * value4 +
      arr[4] * value5) /
    sum;
  if (isNaN(result)) result.textContent = "Wrong Input";
  else result.textContent = res.toFixed(2, 0);
});
