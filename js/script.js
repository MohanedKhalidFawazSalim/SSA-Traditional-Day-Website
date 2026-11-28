/* ================================================================
   يوم التراث السوداني - JavaScript
   المحتوى والتفاعلات موجودة هنا، منفصلة عن HTML و CSS.
   ================================================================ */

const welcomeGreetings = [
  "حبابكم عشرة", "يا مرحب بيكم", "نورتونا", "مرحبتين حبابكم",
  "أهلين وسهلين", "الدار داركم", "شرفتونا", "انستنا", "حبابك مليون","انست و شرفت","شوب شوب","ديهاني اتا","لوتانينا","كندي","نابياوديا","ماسكا فيونا"
];

const categoryMeta = {
  poetry: { title: "قصائد وأبيات شعرية", tag: "شعر سوداني" },
  literature: { title: "الأدب والرواية السودانية", tag: "أدب ورواية" },
  traditions: { title: "اختلاف العادات والثقافات السودانية", tag: "عادات وتقاليد" },
  personalities: { title: "أبرز الشخصيات السودانية", tag: "شخصيات مؤثرة" }
};

// بطاقات تجريبية؛ استبدل العناوين والنصوص والصور بالمحتوى الحقيقي لاحقاً.
const culturalData = Object.fromEntries(
  Object.entries(categoryMeta).map(([key, meta]) => [
    key,
    Array.from({ length: 10 }, (_, index) => ({
      title: `${meta.title} — البطاقة ${String(index + 1).padStart(2, "0")}`,
      text: "سيُضاف المحتوى لاحقاً",
      image: "" // مثال: "assets/images/poetry/poet-01.jpg"
    }))
  ])
);

const appState = {
  currentScreen: "screen-welcome",
  currentCategory: "poetry",
  currentCardIndex: 0,
  touchStartX: 0,
  touchEndX: 0
};

const getElement = (id) => document.getElementById(id);
const dom = {
  screens: document.querySelectorAll(".screen"),
  welcomeScreen: getElement("screen-welcome"),
  floatingGreetings: getElement("floating-greetings"),
  bubbleHub: getElement("bubble-hub"),
  bubbleCenter: getElement("bubble-center"),
  bubbleBranches: document.querySelectorAll(".bubble-branch"),
  hubConnectorsSvg: getElement("hub-connectors"),
  flashcardEl: getElement("flashcard-card"),
  flashcardCategoryBadge: getElement("flashcard-category-badge"),
  flashcardCategoryTitle: getElement("flashcard-category-title"),
  flashcardTag: getElement("flashcard-tag"),
  flashcardTitle: getElement("flashcard-title"),
  flashcardText: getElement("flashcard-text"),
  flashcardImageContainer: getElement("flashcard-image-container"),
  flashcardImage: getElement("flashcard-image"),
  flashcardCounter: getElement("flashcard-counter"),
  flashcardDots: getElement("flashcard-dots"),
  btnPrevCard: getElement("btn-prev-card"),
  btnNextCard: getElement("btn-next-card"),
  btnPrevMobile: getElement("btn-prev-card-mobile"),
  btnNextMobile: getElement("btn-next-card-mobile")
};

function navigateToScreen(targetId) {
  const targetScreen = getElement(targetId);
  if (!targetScreen || targetId === appState.currentScreen) return;

  dom.screens.forEach((screen) => {
    const isTarget = screen.id === targetId;
    screen.classList.toggle("screen--active", isTarget);
    screen.setAttribute("aria-hidden", String(!isTarget));
  });

  appState.currentScreen = targetId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (targetId === "screen-culture-hub") {
    requestAnimationFrame(() => setTimeout(drawHubConnectors, 100));
  }
}

function createFloatingGreetings() {
  if (!dom.floatingGreetings) return;
  dom.floatingGreetings.replaceChildren();

  const lanes = [6, 17, 29, 41, 54, 67, 79, 89, 23];
  const colorModifiers = ["", "floating-word--gold", "floating-word--terracotta"];

  welcomeGreetings.forEach((phrase, index) => {
    const wordEl = document.createElement("span");
    wordEl.className = `floating-word ${colorModifiers[index % colorModifiers.length]}`.trim();
    wordEl.textContent = phrase;
    wordEl.style.left = `${lanes[index % lanes.length]}%`;
    wordEl.style.fontSize = `clamp(1rem, ${1.15 + (index % 4) * .28}vw + .5rem, 2.2rem)`;
    wordEl.style.animationDuration = `${15 + (index % 5) * 3.2}s`;
    wordEl.style.animationDelay = `${-(index * 2.1)}s`;
    wordEl.style.setProperty("--word-opacity", (0.35 + (index % 3) * .16).toFixed(2));
    wordEl.style.setProperty("--drift-x", `${(index % 2 === 0 ? 1 : -1) * (10 + (index % 3) * 8)}px`);
    dom.floatingGreetings.appendChild(wordEl);
  });
}

function initWelcomeScreen() {
  createFloatingGreetings();
  const enterMain = () => {
    if (appState.currentScreen === "screen-welcome") navigateToScreen("screen-culture-hub");
  };
  dom.welcomeScreen.addEventListener("click", enterMain);
  dom.welcomeScreen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      enterMain();
    }
  });
}

function initNavigationButtons() {
  document.querySelectorAll("[data-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-target");
      if (targetId) navigateToScreen(targetId);
    });
  });
}

function drawHubConnectors() {
  const svg = dom.hubConnectorsSvg;
  const hub = dom.bubbleHub;
  const center = dom.bubbleCenter;
  if (!svg || !hub || !center) return;

  const hubRect = hub.getBoundingClientRect();
  if (!hubRect.width || !hubRect.height) return;
  const centerRect = center.getBoundingClientRect();
  const cx = centerRect.left - hubRect.left + centerRect.width / 2;
  const cy = centerRect.top - hubRect.top + centerRect.height / 2;
  const svgNS = "http://www.w3.org/2000/svg";

  svg.setAttribute("viewBox", `0 0 ${hubRect.width} ${hubRect.height}`);
  svg.replaceChildren();

  dom.bubbleBranches.forEach((branch) => {
    const rect = branch.getBoundingClientRect();
    const bx = rect.left - hubRect.left + rect.width / 2;
    const by = rect.top - hubRect.top + rect.height / 2;
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M ${cx} ${cy} Q ${(cx + bx) / 2} ${cy}, ${bx} ${by}`);
    path.setAttribute("class", "hub-line");
    svg.appendChild(path);

    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", bx);
    dot.setAttribute("cy", by);
    dot.setAttribute("r", "4.5");
    dot.setAttribute("class", "hub-line-node");
    svg.appendChild(dot);
  });
}

function initBubbleHub() {
  dom.bubbleBranches.forEach((branch) => {
    branch.addEventListener("click", () => {
      const categoryKey = branch.getAttribute("data-category");
      if (categoryKey && culturalData[categoryKey]) openCategoryFlashcards(categoryKey);
    });
  });
}

function formatCounterNumber(number) {
  return String(number).padStart(2, "0");
}

function buildProgressDots() {
  const cards = culturalData[appState.currentCategory] || [];
  dom.flashcardDots.replaceChildren();

  cards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "flashcard-dot";
    dot.setAttribute("aria-label", `الانتقال إلى البطاقة ${index + 1}`);
    dot.addEventListener("click", () => {
      if (index === appState.currentCardIndex) return;
      const direction = index > appState.currentCardIndex ? "next" : "prev";
      appState.currentCardIndex = index;
      renderFlashcard(direction);
    });
    dom.flashcardDots.appendChild(dot);
  });
}

function openCategoryFlashcards(categoryKey) {
  appState.currentCategory = categoryKey;
  appState.currentCardIndex = 0;
  const meta = categoryMeta[categoryKey];
  dom.flashcardCategoryBadge.textContent = meta.title;
  dom.flashcardCategoryTitle.textContent = meta.title;
  dom.flashcardTag.textContent = meta.tag;
  buildProgressDots();
  renderFlashcard();
  navigateToScreen("screen-flashcards");
}

function renderFlashcard(direction = null) {
  const cards = culturalData[appState.currentCategory] || [];
  const total = cards.length;
  const index = appState.currentCardIndex;
  const card = cards[index];
  if (!card) return;

  dom.flashcardEl.classList.remove("card-anim-next", "card-anim-prev");
  if (direction) {
    void dom.flashcardEl.offsetWidth;
    dom.flashcardEl.classList.add(direction === "next" ? "card-anim-next" : "card-anim-prev");
  }

  dom.flashcardTitle.textContent = card.title;
  dom.flashcardText.textContent = card.text;

  if (card.image && card.image.trim()) {
    dom.flashcardImage.src = card.image;
    dom.flashcardImage.alt = card.title;
    dom.flashcardImageContainer.classList.remove("is-empty");
  } else {
    dom.flashcardImage.removeAttribute("src");
    dom.flashcardImage.alt = "";
    dom.flashcardImageContainer.classList.add("is-empty");
  }

  dom.flashcardCounter.textContent = `${formatCounterNumber(index + 1)} / ${formatCounterNumber(total)}`;
  dom.flashcardDots.querySelectorAll(".flashcard-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });

  const first = index === 0;
  const last = index === total - 1;
  dom.btnPrevCard.disabled = first;
  dom.btnPrevMobile.disabled = first;
  dom.btnNextCard.disabled = last;
  dom.btnNextMobile.disabled = last;
}

function goToNextCard() {
  const total = (culturalData[appState.currentCategory] || []).length;
  if (appState.currentCardIndex < total - 1) {
    appState.currentCardIndex += 1;
    renderFlashcard("next");
  }
}

function goToPrevCard() {
  if (appState.currentCardIndex > 0) {
    appState.currentCardIndex -= 1;
    renderFlashcard("prev");
  }
}

function initFlashcardControls() {
  dom.btnNextCard.addEventListener("click", goToNextCard);
  dom.btnPrevCard.addEventListener("click", goToPrevCard);
  dom.btnNextMobile.addEventListener("click", goToNextCard);
  dom.btnPrevMobile.addEventListener("click", goToPrevCard);

  dom.flashcardEl.addEventListener("touchstart", (event) => {
    appState.touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  dom.flashcardEl.addEventListener("touchend", (event) => {
    appState.touchEndX = event.changedTouches[0].screenX;
    const difference = appState.touchEndX - appState.touchStartX;
    if (Math.abs(difference) < 45) return;
    // في واجهة RTL: السحب لليمين يعرض البطاقة التالية.
    if (difference > 0) goToNextCard();
    else goToPrevCard();
  }, { passive: true });
}

function initKeyboardAndResize() {
  document.addEventListener("keydown", (event) => {
    if (appState.currentScreen === "screen-flashcards") {
      if (event.key === "ArrowLeft") goToNextCard();
      else if (event.key === "ArrowRight") goToPrevCard();
      else if (event.key === "Escape") navigateToScreen("screen-culture-hub");
    } else if (event.key === "Escape" && appState.currentScreen === "screen-culture-hub") {
      navigateToScreen("screen-welcome");
    }
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (appState.currentScreen === "screen-culture-hub") drawHubConnectors();
    }, 120);
  });
}

function initThemeToggle() {
  const toggle = getElement("theme-toggle");
  const label = getElement("theme-toggle-label");
  const icon = getElement("theme-toggle-icon");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (!toggle || !label || !icon) return;

  function applyTheme(theme, savePreference = true) {
    const useSudanMode = theme === "sudan";
    document.documentElement.dataset.theme = useSudanMode ? "sudan" : "light";

    toggle.setAttribute("aria-pressed", String(useSudanMode));
    toggle.setAttribute("aria-label", useSudanMode ? "العودة إلى الوضع الافتراضي" : "تفعيل وضع السودان");
    toggle.setAttribute("title", useSudanMode ? "العودة إلى الوضع الافتراضي" : "تفعيل وضع السودان");
    label.textContent = useSudanMode ? "الوضع الافتراضي" : "وضع السودان";
    icon.textContent = useSudanMode ? "☀" : "☾";

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", useSudanMode ? "#F6F3EB" : "#FAF5ED");
    }

    if (savePreference) {
      try {
        window.localStorage.setItem("sudanese-heritage-theme-v4", useSudanMode ? "sudan" : "default");
      } catch (error) {
        // The theme still works when browser storage is unavailable.
      }
    }
  }

  let savedTheme = "default";
  try {
    savedTheme = window.localStorage.getItem("sudanese-heritage-theme-v4") || "default";
  } catch (error) {
    // Use the light theme when browser storage is unavailable.
  }

  applyTheme(savedTheme === "sudan" ? "sudan" : "default", false);

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    applyTheme(currentTheme === "sudan" ? "light" : "sudan");
  });
}

function initApp() {
  initThemeToggle();
  initWelcomeScreen();
  initNavigationButtons();
  initBubbleHub();
  initFlashcardControls();
  initKeyboardAndResize();
}

// السكربت محمّل باستخدام defer، لذلك عناصر الصفحة أصبحت قابلة للوصول هنا.
initApp();
