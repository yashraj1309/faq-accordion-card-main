  // function show(id) {
  //   var answer = document.getElementById(id);
  //   var arrow = document.getElementById('arrow'+id[3]);
  //   console.log(arrow.classList);
  //   if(answer!== null) {
  //   if (answer.classList.contains("hide")) {
  //     answer.classList.remove("hide");
  //     answer.classList.add("show");
  //     arrow.classList.add('rotate');
  //   } else {
  //     answer.classList.remove("show");
  //     answer.classList.add("hide");
  //     arrow.classList.remove('rotate');
  //   }
  //   }
  
  this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
        }

    }))
})