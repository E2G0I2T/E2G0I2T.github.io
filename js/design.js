document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul a");

  // 현재 선택된 메뉴가 없을 때 'home'을 선택
  let selectedLink = null;

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // 현재 선택된 메뉴에 'selected' 클래스 추가
      navLinks.forEach(navLink => navLink.classList.remove("selected"));
      link.classList.add("selected");

      // 현재 선택된 메뉴 업데이트
      selectedLink = link;

      // 딜레이를 주고 스타일이 변경되도록 함
      setTimeout(() => {
        if (selectedLink) {
          selectedLink.querySelector("li").style.borderBottomColor = "orange";
        }
      }, 200); // 0.2초 딜레이
    });
  });

  // 초기에 선택된 메뉴가 없다면 'home'을 선택
  if (!selectedLink) {
    const homeLink = document.querySelector('nav ul a[href="#home"]');
    homeLink.classList.add("selected");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.querySelector(".welcome h1");

  // 변경될 텍스트 목록
  const textList = [
    "WELCOME TO MY PAGE!",
    "안녕하세요! 환영합니다!",
    "ようこそ！!"
    // 원하는 만큼 텍스트를 추가할 수 있습니다.
  ];

  let currentIndex = 0;

  function changeText() {
    welcomeText.textContent = textList[currentIndex];
    currentIndex = (currentIndex + 1) % textList.length;
  }

  // 1초마다 텍스트 변경
  setInterval(changeText, 1000);
});

