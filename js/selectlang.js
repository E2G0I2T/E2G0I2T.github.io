const isKorean = navigator.language === "ko-KR";
if (isKorean) {
  document
    .getElementById("lang")
    .options[1].setAttribute("selected", true);
}
i18next.init(
  {
    lng: isKorean ? "ko" : "en",
    debug: true,
    resources: {
      ko: {
        translation: {
          html: "ko",
          wcontent: "개발자를 꿈꾸는 이지형이라고 합니다 아직 미숙한 점이 많지만 배우고자 하는 열망은 그 누구에게도 뒤처지지 않는다고 자신합니다",
          name: "이지형",
          story: "저는 한국과 일본의 혼혈로 태어났습니다. 두 국가에 모두 도움이 될 서비스를 개발하는 것이 꿈입니다"
        }
      },
      en: {
        translation: {
          html: "en",
          wcontent: "I'm Lee Ji-hyung who dreams of becoming a developer. I'm still not good at many things, but I'm confident that my desire to learn is second to none.",
          name: "Lee Ji Hyung",
          story: "I was born of mixed race between Korea and Japan. My dream is to develop a service that will help both countries"
        }
      },
      ja: {
        translation: {
          html: "ja",
          wcontent: "開発者を夢見るイジヒョンと申します まだ未熟な点が多いですが、学びたいという熱望は誰にも負けないと自信を持っています",
          name: "イ·ジヒョン",
          story: "私は韓国と日本のハーフで生まれました。 両国に役立つサービスを開発することが夢です"
        }
      }
    }
  },
  function(err, t) {
    // init set content
    if (err) {
      console.error(err);
    } else {
      updateContent();
    }
  }
);

function updateContent() {
  document.querySelector("html").setAttribute('lang', i18next.t("html"));
  document.querySelector(".welcome p").innerHTML = i18next.t("wcontent");
  document.querySelector(".name").innerHTML = i18next.t("name");
  document.querySelector(".story").innerHTML = i18next.t("story");
}

i18next.on("languageChanged", () => {
  updateContent();
});