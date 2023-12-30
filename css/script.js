"use strict";
// Ẩn hiện thông tin cá nhân khi nhập Email (info-detail)

const btnSubmit = document.querySelector(".submit");

function validation() {
  let formControl = document.querySelector(".form-control");
  let infoDetail = document.querySelector(".info-detail");
  let email = document.getElementById("inputEmail").value;
  let text = document.getElementById("text");
  let pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.match(pattern)) {
    document.getElementById("message").innerHTML =
      "Email sai định dạng, vui lòng nhập lại!";
  } else {
    infoDetail.classList.remove("hidden");
    formControl.classList.add("hidden");
  }
}

btnSubmit.addEventListener("click", validation);
//Bổ sung thêm chức năng kiểm tra định dạng Email khi bấm phím Enter
let inputEmail = document.getElementById("inputEmail");
inputEmail.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validation();
  }
});

//Ẩn hiện thông tin Section Job-Info
function toggle(button) {
  let Text = button.parentElement.querySelector(".more-detail");
  let btn = button.parentElement.querySelector(".viewmore");

  if (Text.classList.contains("hidden")) {
    Text.classList.remove("hidden");
    btn.innerHTML = `<i class="fa-solid fa-caret-down" ></i> View less`;
  } else {
    Text.classList.add("hidden");
    btn.innerHTML = `<i class="fa-solid fa-caret-down"></i> View more`;
  }
}

// function hover(btn) {
//   let row1 = btn.parentElement.querySelector(".row1");
//   let btnView = btn.parentElement.querySelector(".viewmore");
// }
