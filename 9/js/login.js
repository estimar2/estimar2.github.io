const loginInput = document.getElementById("login_btn");
const id = document.getElementById("login_id");
const pw = document.getElementById("pwd");
const loginBtn = document.getElementById("login_btn");

const login = () => {
  const id_lng = id.value.length;
  const pass_lng = pw.value.length;

  const idFlag = id_lng < 1;
  const passFlag = pass_lng < 1;

  const totalFlag = idFlag || passFlag;

  if (totalFlag) {
    alert("아이디와 비밀번호를 입력해주세요.");
    id.focus();
    return;
  } else {
    alert("로그인에 성공하였습니다.");
    id.value = "";
    pw.value = "";
    setTimeout(function() {
      location.href = "index.html";
    }, 1000);
  }
};

init = () => {
  loginBtn.addEventListener("click", login);
};

init();
