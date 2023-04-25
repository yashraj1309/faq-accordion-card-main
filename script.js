  function show(id) {
    var answer = document.getElementById(id);
    var arrow = document.getElementById('arrow'+id[3]);
    console.log(arrow.classList);
    if(answer!== null) {
    if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      answer.classList.add("show");
      arrow.classList.add('rotate');
    } else {
      answer.classList.remove("show");
      answer.classList.add("hide");
      arrow.classList.remove('rotate');
    }
    }
  }