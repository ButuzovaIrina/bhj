let activeWind = document.getElementById("signin");

if (localStorage.user_id) {
  document.getElementById("user_id").textContent = localStorage.user_id;
  document.getElementById("welcome").classList.add("welcome_active");
} else {
activeWind.classList.add("signin_active");
let formName = document.getElementById("signin__form");
let submitBtn = document.getElementById("signin__btn");

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  let formData = new FormData(formName);
  let request = new XMLHttpRequest();
  request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  request.addEventListener("readystatechange", function() {
    if (this.readyState == request.DONE && this.status == 200) {
      let data = JSON.parse(this.responseText); 
      console.log(data);
        if (data.success === true) {    
          localStorage.setItem("user_id", data.user_id);
          document.getElementById("user_id").textContent = data.user_id;
          activeWind.classList.remove("signin_active");
          document.getElementById("welcome").classList.add("welcome_active");
      } else {
          alert("Неверный логин/пароль");
      }
    };
  });
  request.send(formData);
});
}
