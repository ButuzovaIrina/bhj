var sendForm = document.getElementById("form");

sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let progress = document.getElementById("progress");
  let file = document.getElementsByTagName("input")[0].files[0];
  upload(file);
});

function upload(file) {
  let request = new XMLHttpRequest();
  request.upload.onprogress = function(event) {
    progress.value =  Number(event.total) / Number(event.loaded);
    console.log(event.loaded);
  }

let formData = new FormData(sendForm);
request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
request.send(formData);
}
