// ai 도움 받아 작업 완료
document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    {
      퀴즈: "가수 샤이니가 다니는 고등학교는?",
      정답: ["아미고", "SM고", "JYP고", "YG고"],
      답안: 0,
    },
    {
      퀴즈: "간짜장이 일반 짜장보다 비싼 이유는?",
      정답: [
        "재료가 좋아서",
        "간 때문이야",
        "요리사가 유명해서",
        "맛이 더 좋아서",
      ],
      답안: 1,
    },
    {
      퀴즈: "간첩이 동물원에 가면 찾는 새는?",
      정답: ["공작새", "독수리", "비둘기", "앵무새"],
      답안: 0,
    },
    {
      퀴즈: "강아지의 생일을 영어로 하면?",
      정답: [
        "퍼피 버스데이 투 유",
        "해피 버스데이 투 유",
        "도그 버스데이 투 유",
        "캐닌 버스데이 투 유",
      ],
      답안: 1,
    },
    {
      퀴즈: "'개가 사람을 가르친다'를 네 글자로 하면?",
      정답: ["개인교습", "개인지도", "개인강의", "개인수업"],
      답안: 1,
    },
    {
      퀴즈: "개미가 사는 집 주소는?",
      정답: [
        "허리도 가늘군 만지면 부러지리",
        "땅속마을",
        "개미굴로",
        "작은집동네",
      ],
      답안: 0,
    },
    {
      퀴즈: "개성공단의 반대말은?",
      정답: ["고양이실패단", "폐쇄공단", "개인공단", "단일공단"],
      답안: 0,
    },
    {
      퀴즈: "거북하고 공룡은 파충류, 원숭이하고 사람은 포유류, 개구리하고 도롱뇽은 양서류다. 그렇다면 오징어하고 쥐치는?",
      정답: ["안주류", "어류", "연체동물", "갑각류"],
      답안: 0,
    },
    {
      퀴즈: "겨울에 설경이 아름다운 섬은?",
      정답: ["태권도", "설운도", "제주도", "울릉도"],
      답안: 1,
    },
    {
      퀴즈: "금은 금인데 도둑고양이에게 가장 잘 어울리는 금은?",
      정답: ["야금야금", "순금", "백금", "금반지"],
      답안: 0,
    },
    {
      퀴즈: "꼬마마법사 레미의 아들과 딸 이름은?",
      정답: [
        "아들레미 딸레미",
        "마법레미 요정레미",
        "해리레미 헤르미온레미",
        "론레미 지니레미",
      ],
      답안: 0,
    },
    {
      퀴즈: "꿀처럼 단 귤은?",
      정답: ["뀰", "꿀귤", "달귤", "오렌지"],
      답안: 0,
    },
    {
      퀴즈: "나라 두개가 합쳐지면?",
      정답: ["콤비네이션", "유니온", "얼라이언스", "페더레이션"],
      답안: 0,
    },
    {
      퀴즈: "나무가 네그루 있으면?",
      정답: ["목포", "숲", "정원", "공원"],
      답안: 0,
    },
    {
      퀴즈: "나무로 지은 아파트는?",
      정답: ["트리지움", "우드빌", "포레스트타워", "나무하우스"],
      답안: 0,
    },
    {
      퀴즈: "낙타의 엄마는 누구일까요?",
      정답: ["늑대", "낙타", "사막", "오아시스"],
      답안: 0,
    },
    {
      퀴즈: "남자 두 명이 연애를 하면?",
      정답: ["사내 연애", "브로맨스", "게이 커플", "동성애"],
      답안: 0,
    },
    {
      퀴즈: "너를 사랑하는 대륙은?",
      정답: ["유럽", "아시아", "아프리카", "남미"],
      답안: 0,
    },
    {
      퀴즈: "노루가 다니는 길은?",
      정답: ["노루웨이", "사슴로드", "노루길", "동물통로"],
      답안: 0,
    },
    {
      퀴즈: "닭이 스키니 바지를 입고 하는 말?",
      정답: ["꼬끼오", "꽉 끼어", "힘들어", "멋져"],
      답안: 0,
    },
    {
      퀴즈: "대한민국 국민 5천만과 60억 지구촌 사람들이 발 벗고 나설 수 있는 일은?",
      정답: ["발 닦는 일", "신발 벗기", "걷기 운동", "맨발 마라톤"],
      답안: 0,
    },
    {
      퀴즈: "돈은 돈인데 혼인을 해야 생기는 돈은?",
      정답: ["사돈", "결혼자금", "예물", "신혼여행비"],
      답안: 0,
    },
    {
      퀴즈: "돌은 돌인데 사람이 먹을 수 있는 돌은?",
      정답: ["덴타돌", "보석", "돌멩이", "화산석"],
      답안: 0,
    },
    {
      퀴즈: "돼지가 술을 마시면?",
      정답: ["돈 주앙", "술돼지", "돼지주", "포크와인"],
      답안: 0,
    },
    {
      퀴즈: "맞아야 사는 것은?",
      정답: ["팽이", "주사위", "공", "북"],
      답안: 0,
    },
    {
      퀴즈: "머리가 세개있으면?",
      정답: ["헤드셋", "삼두수", "세뇌", "삼각산"],
      답안: 0,
    },
    {
      퀴즈: "모자 매장 진열대 사이에 신발을 두면?",
      정답: ["캡사이신", "모자신발", "신발모자", "캡슐신발"],
      답안: 0,
    },
    {
      퀴즈: "물고기의 반댓말은?",
      정답: ["불고기", "땅고기", "공중고기", "하늘고기"],
      답안: 0,
    },
    {
      퀴즈: "미국에 비가 오면?",
      정답: ["USB", "미국비", "아메리칸레인", "스테이츠스톰"],
      답안: 0,
    },
    {
      퀴즈: "바다 중에 가장 더운 바다는?",
      정답: ["열바다", "사하라바다", "적도바다", "용암바다"],
      답안: 0,
    },
    {
      퀴즈: "백 마리의 소가 모여 사는 산은?",
      정답: ["소백산", "우산", "카우마운틴", "목장산"],
      답안: 0,
    },
    {
      퀴즈: "뱀과 벌이 없는 달은?",
      정답: ["11월(노뱀벌)", "1월", "7월", "12월"],
      답안: 0,
    },
    {
      퀴즈: "보리하고 돌멩이 영어 단어로 풀이하면?",
      정답: ["맥스톤", "바리스톤", "호프락", "그레인록"],
      답안: 0,
    },
    {
      퀴즈: "비가 얼어죽으면?",
      정답: ["비동사", "얼음비", "고체비", "죽은비"],
      답안: 0,
    },
    {
      퀴즈: "빵이 목장에 간 이유는?",
      정답: ["소보로", "우유빵", "치즈빵", "버터빵"],
      답안: 0,
    },
    {
      퀴즈: "사과가 웃으면?",
      정답: ["풋사과", "웃는사과", "해피애플", "조이프루트"],
      답안: 0,
    },
    {
      퀴즈: "새우가 좋아하는 소설은?",
      정답: ["대하소설", "해양소설", "갑각류문학", "새우이야기"],
      답안: 0,
    },
    {
      퀴즈: "세상에서 가장 뜨거운 바다는?",
      정답: ["열바다", "적도바다", "용암바다", "사하라바다"],
      답안: 0,
    },
    {
      퀴즈: "소금 장수가 세상에서 제일 좋아하는 사람은?",
      정답: ["싱거운 사람", "짠 사람", "단 사람", "매운 사람"],
      답안: 0,
    },
    {
      퀴즈: "술을 좋아하는 사람들이 찾아가고 싶어하는 도시는?",
      정답: ["청주시", "소주시", "맥주시", "위스키시"],
      답안: 0,
    },
  ];
  const quizContain = document.getElementById("quizContainer");
  const ques = document.getElementById("question");
  const answer = document.getElementById("answer");
  const nextBtn = document.getElementById("next");
  const preBtn = document.getElementById("previous");
  const hintBtn = document.getElementById("hint");
  const resultDis = document.getElementById("result");
  const btnSection = document.getElementById("btnSection");

  let quizsIndex = 0;
  let resultScore = 0;

  function answerCheck(e) {
    console.log("답변 체크 시작");
    const userChoiceBtn = e.target;
    const userAnswer = parseInt(userChoiceBtn.dataset.index);
    const correctAnswer = quizData[quizsIndex].답안;
    if (userAnswer === correctAnswer) {
      console.log("정답 선택");
      resultScore++;
      userChoiceBtn.classList.add("correct");
      resultDis.innerHTML = "정답입니다!";
      disableButtons();
      nextBtn.style.display = "block";
    } else {
      userChoiceBtn.classList.add("incorrect");
      resultDis.innerHTML = "오답입니다! 다시 선택해주세요!";
      userChoiceBtn.disabled = true;

      if (!document.querySelector("#btnSection .retryBtn")) {
        const retryBtn = document.createElement("button");
        retryBtn.innerHTML = "다시 풀기";
        retryBtn.classList.add("retryBtn");
        retryBtn.addEventListener("click", retryQuestion);
        btnSection.insertBefore(retryBtn, btnSection.firstChild);
      }
    }

    const buttons = answer.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
      if (parseInt(button.dataset.index) === correctAnswer) {
        button.classList.add("correct");
      }
    });
    nextBtn.style.display = "block";
  }

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  function randomQuizData() {
    for (let i = quizData.length - 1; i > 0; i--) {
      const j = getRandomIndex(i + 1);
      [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
  }

  function resetState() {
    nextBtn.style.display = "none";
    while (answer.firstChild) {
      answer.removeChild(answer.firstChild);
    }
    resultDis.innerHTML = "";

    const retryBtn = document.querySelector("#btnSection button:last-child");
    if (retryBtn && retryBtn.innerHTML === "다시 풀기") {
      retryBtn.remove();
    }
  }

  function nextQuestion() {
    quizsIndex++;
    if (quizsIndex < quizData.length) {
      showQuiz();
    } else {
      showScore();
    }
  }

  function showScore() {
    resetState();
    resultDis.innerHTML = `당신의 점수는 ${quizData.length}점 중 ${resultScore} 점 이네요!`;
    nextBtn.innerHTML = "다시 시작하기!";
    nextBtn.style.display = "block";
  }

  function disableButtons() {
    const buttons = answer.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
      if (parseInt(button.dataset.index) === quizData[quizsIndex].답안) {
        button.classList.add("correct");
      }
    });
  }

  function retryQuestion() {
    const retryBtn = document.querySelector("#btnSection button.retry");
    if (retryBtn) {
      retryBtn.remove();
    }
    const buttons = answer.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("incorrect");
    });
    resultDis.innerHTML = "";
  }

  function quizStart() {
    quizsIndex = 0;
    resultScore = 0;
    nextBtn.innerHTML = "다음 퀴즈 보기!";
    randomQuizData();
    showQuiz();
  }

  function showQuiz() {
    resetState();
    let NowQuiz = quizData[quizsIndex];
    let questionNo = quizsIndex + 1;
    ques.innerHTML = questionNo + ". " + NowQuiz.퀴즈;

    NowQuiz.정답.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.innerHTML = ans;
      btn.classList.add("btn");
      answer.appendChild(btn);
      btn.dataset.index = i;
      btn.addEventListener("click", answerCheck);
    });
  }

  window.addEventListener("load", quizStart);
  nextBtn.addEventListener("click", () => {
    if (quizsIndex < quizData.length - 1) {
      nextQuestion();
    } else {
      showScore();
    }
  });
  document.getElementById("previous").addEventListener("click", () => {
    if (quizsIndex > 0) {
      quizsIndex--;
      showQuiz();
    }
  });
  document.getElementById("hint").addEventListener("click", () => {
    alert("힌트: 답은 이 퀴즈에 주제인 넌센스라는것을 기억해주세요!");
  });
});
