let buttonView = document.querySelector(".chat-widget");
let robotText = ["Никого нет дома", "Позвоните позже", "Автопилот пьян"];

function buttonViewClick() {
  buttonView.classList.add("chat-widget_active");
}

buttonView.addEventListener("click", buttonViewClick);

let chatEnter = document.getElementById("chat-widget__input");

chatEnter.addEventListener("keydown", event => {
  if (event.keyCode === 13){
    let txt = "";
    chatEnter.setAttribute ("minlength", "1");
    let a = chatEnter.getAttribute("minlength")
    console.log(a);
    if (!chatEnter.checkValidity()) {
      console.log("Поле не должно быть пустым");
    } else {
      function answer(messClass, messTxt) {
        now = new Date();
        timeNow = (now.getHours() + ":" + now.getMinutes());
        let messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `
          <div class="${messClass}">
            <div class="message__time">${timeNow}</div>
              <div class="message__text">
              ${messTxt}
              </div>
          </div>
        `;
        chatEnter.value = "";
  }

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  answer("message message_client", chatEnter.value);
  
  let i = randomInteger(0, robotText.length);
  setTimeout(answer, 1000, "message", robotText[i]);
  
  }
}    
});




