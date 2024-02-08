document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 관련 초기화
  const navLinks = document.querySelectorAll("nav ul a");

  // 초기에 'HOME' 메뉴 선택
  setInitialSelectedMenu();

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // 모든 메뉴 항목에서 'selected' 클래스 제거
      navLinks.forEach(navLink => {
        navLink.classList.remove("selected");
      });

      // 현재 클릭된 메뉴 항목에 'selected' 클래스 추가
      this.classList.add("selected");

      // 선택된 섹션으로 스크롤
      const href = this.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 초기 선택된 메뉴 설정 함수
  function setInitialSelectedMenu() {
    const homeLink = document.querySelector('nav ul a[href="#home"]');
    if (homeLink && !homeLink.classList.contains("selected")) {
      homeLink.classList.add("selected");
      // 여기서 직접 스타일을 적용하는 대신, CSS에서 'selected' 클래스에 대한 스타일을 정의하세요.
    }
  }

  // 텍스트 변경 관련 초기화
  const welcomeText = document.querySelector(".welcome h1");
  const textList = ["WELCOME TO MY PAGE!", "안녕하세요! 환영합니다!", "ようこそ！!"];
  let currentIndex = 0;

  function changeText() {
    welcomeText.textContent = textList[currentIndex];
    currentIndex = (currentIndex + 1) % textList.length;
  }

  setInterval(changeText, 1000);
});
