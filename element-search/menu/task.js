let elementList;
elementList = Array.from (document.getElementsByClassName("menu__link"));
console.log(elementList);

elementList.forEach.call( elementList, function(el) {
    el.onclick = function () {
      if (el.closest("ul")) {
    console.log(el.closest("ul").className);
        el.closest("ul").className = "menu menu_sub menu_active";
        console.log(el.closest("ul").className);
        return false;
      } 
    }
})
/*
//querySelectorAll();
 /выбираем нужные элементы
var a = document.querySelectorAll('.link');
    
//перебираем все найденные элементы и вешаем на них события
[].forEach.call( a, function(el) {
    //вешаем событие
    el.onclick = function(e) {
        //производим действия
    }
})*/