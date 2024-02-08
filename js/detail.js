document.querySelectorAll(".open-modal").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 방지
    var modalId = this.getAttribute("href"); // href 속성에서 모달 ID 추출
    var modal = document.querySelector(modalId);
    if (modal) {
      modal.style.display = "block"; // 해당 모달 표시
    } else {
      console.error("No modal found for ID:", modalId);
    }
  });
});

// 닫기 버튼에 대한 이벤트 리스너
document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".modal").style.display = "none"; // 가장 가까운 모달 닫기
  });
});

// 첫 실행시 모달이 안 열리게
window.onload = function() {
  document.querySelectorAll(".modal").forEach(function(modal) {
    modal.style.display = "none";
  });
};
