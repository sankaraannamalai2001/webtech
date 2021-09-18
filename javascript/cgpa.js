const resultBtn = document.querySelector(".sub");

resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getValues();
});
function getValues() {
  let sum = 0,
    count = 0;
  const gpa = document.getElementsByName("gpa[]");
  for (i of gpa) {
    if (Number(i.value) == 0) continue;
    sum = sum + Number(i.value);
    count += 1;
  }

  const cgpa = sum / count;
  document.querySelector(".cgpa").textContent = cgpa.toFixed(4);
}
