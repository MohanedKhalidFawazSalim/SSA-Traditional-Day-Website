/* ==========================================================================
   1. CONTENT DATA (بيانات المحتوى - عدّل العناوين والنصوص والصور هنا فقط)
   ========================================================================== */

/**
 * العبارات الترحيبية السودانية العائمة في شاشة الافتتاح
 */
const welcomeGreetings = [
  "حبابكم عشرة",
  "يا مرحب بيكم",
  "نورتونا",
  "مرحبتين حبابكم",
  "أهلين وسهلين",
  "الدار داركم",
  "شرفتونا",
  "يا زول",
  "حبابك مليون"
];

/**
 * بيانات الفئات الأربع وعناوينها
 */
const categoryMeta = {
  poetry: {
    title: "قصائد وأبيات شعرية",
    tag: "شعر سوداني"
  },
  literature: {
    title: "الأدب والرواية السودانية",
    tag: "أدب ورواية"
  },
  traditions: {
    title: "اختلاف العادات والثقافات السودانية",
    tag: "عادات وتقاليد"
  },
  personalities: {
    title: "أبرز الشخصيات السودانية",
    tag: "شخصيات مؤثرة"
  }
};

/**
 * كائن البيانات الرئيسي للبطاقات (10 بطاقات لكل فئة).
 * لإضافة صورة لأي بطاقة مستقبلاً، ضع رابط الصورة في خاصية "image"،
 * مثال: image: "images/card1.jpg"
 */
const culturalData = {
  poetry: [
    { title: "قصيدة وأبيات شعرية — البطاقة 01", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 02", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 03", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 04", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 05", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 06", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 07", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 08", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 09", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "قصيدة وأبيات شعرية — البطاقة 10", text: "سيُضاف المحتوى لاحقاً", image: "" }
  ],

  literature: [
    { title: "الأدب والرواية السودانية — البطاقة 01", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 02", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 03", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 04", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 05", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 06", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 07", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 08", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 09", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "الأدب والرواية السودانية — البطاقة 10", text: "سيُضاف المحتوى لاحقاً", image: "" }
  ],

  traditions: [
    { title: "العادات والثقافات السودانية — البطاقة 01", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 02", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 03", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 04", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 05", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 06", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 07", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 08", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 09", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "العادات والثقافات السودانية — البطاقة 10", text: "سيُضاف المحتوى لاحقاً", image: "" }
  ],

  personalities: [
    { title: "أبرز الشخصيات السودانية — البطاقة 01", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 02", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 03", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 04", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 05", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 06", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 07", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 08", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 09", text: "سيُضاف المحتوى لاحقاً", image: "" },
    { title: "أبرز الشخصيات السودانية — البطاقة 10", text: "سيُضاف المحتوى لاحقاً", image: "" }
  ]
};

/* ==========================================================================
   2. APPLICATION STATE & DOM REFERENCES (حالة التطبيق وعناصر الواجهة)
   ========================================================================== */
const appState = {
  currentScreen: "screen-welcome",
  currentCategory: "poetry",
  currentCardIndex: 0,
  touchStartX: 0,
  touchEndX: 0
};

const dom = {
  screens: document.querySelectorAll(".screen"),
  welcomeScreen: document.getElementById("screen-welcome"),
  floatingGreetings: document.getElementById("floating-greetings"),

  bubbleHub: document.getElementById("bubble-hub"),
  bubbleCenter: document.getElementById("bubble-center"),
  bubbleBranches: document.querySelectorAll(".bubble-branch"),
  hubConnectorsSvg: document.getElementById("hub-connectors"),

  flashcardEl: document.getElementById("flashcard-card"),
  flashcardCategoryBadge: document.getElementById("flashcard-category-badge"),
  flashcardCategoryTitle: document.getElementById("flashcard-category-title"),
  flashcardTag: document.getElementById("flashcard-tag"),
  flashcardTitle: document.getElementById("flashcard-title"),
  flashcardText: document.getElementById("flashcard-text"),
  flashcardImageContainer: document.getElementById("flashcard-image-container"),
  flashcardImage: document.getElementById("flashcard-image"),
  flashcardCounter: document.getElementById("flashcard-counter"),
  flashcardDots: document.getElementById("flashcard-dots"),

  btnPrevCard: document.getElementById("btn-prev-card"),
  btnNextCard: document.getElementById("btn-next-card"),
  btnPrevMobile: document.getElementById("btn-prev-card-mobile"),
  btnNextMobile: document.getElementById("btn-next-card-mobile")
};

/* ==========================================================================
   3. SCREEN NAVIGATION (التنقل السلس بين الشاشات)
   ========================================================================== */
function navigateToScreen(targetId) {
  const targetScreen = document.getElementById(targetId);
  if (!targetScreen || targetId === appState.currentScreen) return;

  dom.screens.forEach((screen) => {
    const isTarget = screen.id === targetId;
    screen.classList.toggle("screen--active", isTarget);
    screen.setAttribute("aria-hidden", String(!isTarget));
  });

  appState.currentScreen = targetId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // عند فتح شاشة الفقاعات نعيد رسم خطوط الربط بدقة بعد استقرار التخطيط
  if (targetId === "screen-culture-hub") {
    requestAnimationFrame(() => {
      setTimeout(drawHubConnectors, 80);
    });
  }
}

/* ==========================================================================
   4. WELCOME SCREEN INTERACTIONS (تفاعلات شاشة الترحيب والعبارات العائمة)
   ========================================================================== */
function createFloatingGreetings() {
  if (!dom.floatingGreetings) return;
  dom.floatingGreetings.innerHTML = "";

  // توزيع أفقي متوازن في مسارات لمنع تداخل العبارات بشكل مفرط
  const lanes = [6, 17, 29, 41, 54, 67, 79, 89, 23];
  const colorModifiers = ["", "floating-word--gold", "floating-word--terracotta"];

  welcomeGreetings.forEach((phrase, index) => {
    const wordEl = document.createElement("span");
    const modifier = colorModifiers[index % colorModifiers.length];

    wordEl.className = `floating-word ${modifier}`.trim();
    wordEl.textContent = phrase;

    const laneX = lanes[index % lanes.length];
    const fontSize = (1.15 + (index % 4) * 0.28).toFixed(2);
    const duration = 15 + (index % 5) * 3.2;
    const delay = -(index * 2.1); // بدء متدرج لتكون الشاشة نابضة بالحياة فوراً
    const opacity = (0.35 + (index % 3) * 0.16).toFixed(2);
    const driftX = (index % 2 === 0 ? 1 : -1) * (10 + (index % 3) * 8);

    wordEl.style.left = `${laneX}%`;
    wordEl.style.fontSize = `clamp(1rem, ${fontSize}vw + 0.5rem, 2.2rem)`;
    wordEl.style.animationDuration = `${duration}s`;
    wordEl.style.animationDelay = `${delay}s`;
    wordEl.style.setProperty("--word-opacity", opacity);
    wordEl.style.setProperty("--drift-x", `${driftX}px`);

    dom.floatingGreetings.appendChild(wordEl);
  });
}

function initWelcomeScreen() {
  createFloatingGreetings();

  const enterMain = () => {
    if (appState.currentScreen === "screen-welcome") {
      navigateToScreen("screen-main");
    }
  };

  dom.welcomeScreen.addEventListener("click", enterMain);
  dom.welcomeScreen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      enterMain();
    }
  });
}

/* ==========================================================================
   5. MAIN MENU & BACK BUTTON INTERACTIONS (القائمة الرئيسية وأزرار الرجوع)
   ========================================================================== */
function initNavigationButtons() {
  // أي عنصر يحمل data-target ينتقل للشاشة المحددة بسلاسة
  document.querySelectorAll("[data-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-target");
      if (targetId) {
        navigateToScreen(targetId);
      }
    });
  });
}

/* ==========================================================================
   6. BUBBLE NAVIGATION & CONNECTORS (الفقاعات المتفرعة وخطوط الربط)
   ========================================================================== */
function drawHubConnectors() {
  const svg = dom.hubConnectorsSvg;
  const hub = dom.bubbleHub;
  const center = dom.bubbleCenter;

  if (!svg || !hub || !center) return;

  const hubRect = hub.getBoundingClientRect();
  if (hubRect.width === 0 || hubRect.height === 0) return;

  const centerRect = center.getBoundingClientRect();
  const cx = centerRect.left - hubRect.left + centerRect.width / 2;
  const cy = centerRect.top - hubRect.top + centerRect.height / 2;

  svg.setAttribute("viewBox", `0 0 ${hubRect.width} ${hubRect.height}`);
  svg.innerHTML = "";

  const svgNS = "http://www.w3.org/2000/svg";

  dom.bubbleBranches.forEach((branch) => {
    const bRect = branch.getBoundingClientRect();
    const bx = bRect.left - hubRect.left + bRect.width / 2;
    const by = bRect.top - hubRect.top + bRect.height / 2;

    // رسم مسار منحني أنيق يربط المركز بالفقاعة الفرعية
    const midX = (cx + bx) / 2;
    const path = document.createElementNS(svgNS, "path");
    const d = `M ${cx} ${cy} Q ${midX} ${cy}, ${bx} ${by}`;

    path.setAttribute("d", d);
    path.setAttribute("class", "hub-line");
    svg.appendChild(path);

    // نقطة ذهبية صغيرة عند نقطة التقاء الخط بالفقاعة
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
      if (categoryKey && culturalData[categoryKey]) {
        openCategoryFlashcards(categoryKey);
      }
    });
  });
}

/* ==========================================================================
   7. FLASHCARD RENDERING AND NAVIGATION (عرض البطاقات والتنقل بينها)
   ========================================================================== */
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

function buildProgressDots() {
  const cards = culturalData[appState.currentCategory] || [];
  dom.flashcardDots.innerHTML = "";

  cards.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "flashcard-dot";
    dot.setAttribute("aria-label", `الانتقال إلى البطاقة ${idx + 1}`);
    dot.addEventListener("click", () => {
      if (idx === appState.currentCardIndex) return;
      const direction = idx > appState.currentCardIndex ? "next" : "prev";
      appState.currentCardIndex = idx;
      renderFlashcard(direction);
    });
    dom.flashcardDots.appendChild(dot);
  });
}

function formatCounterNumber(num) {
  return String(num).padStart(2, "0");
}

function renderFlashcard(direction = null) {
  const cards = culturalData[appState.currentCategory] || [];
  const total = cards.length;
  const index = appState.currentCardIndex;
  const card = cards[index];

  if (!card) return;

  // إعادة تشغيل تأثير الحركة عند التنقل
  dom.flashcardEl.classList.remove("card-anim-next", "card-anim-prev");
  if (direction) {
    void dom.flashcardEl.offsetWidth; // إجبار إعادة التدفق لتشغيل الحركة بسلاسة
    dom.flashcardEl.classList.add(direction === "next" ? "card-anim-next" : "card-anim-prev");
  }

  dom.flashcardTitle.textContent = card.title;
  dom.flashcardText.textContent = card.text;

  // إظهار أو إخفاء منطقة الصورة الاختيارية بناءً على توفر رابط الصورة
  if (card.image && card.image.trim() !== "") {
    dom.flashcardImage.src = card.image;
    dom.flashcardImage.alt = card.title;
    dom.flashcardImageContainer.classList.remove("is-empty");
  } else {
    dom.flashcardImage.src = "";
    dom.flashcardImage.alt = "";
    dom.flashcardImageContainer.classList.add("is-empty");
  }

  // تحديث العداد بصيغة: 01 / 10
  dom.flashcardCounter.textContent = `${formatCounterNumber(index + 1)} / ${formatCounterNumber(total)}`;

  // تحديث النقاط المؤشرة للموضع الحالي
  const dots = dom.flashcardDots.querySelectorAll(".flashcard-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === index);
  });

  // تحديث حالة أزرار السابق والتالي
  const isFirst = index === 0;
  const isLast = index === total - 1;

  dom.btnPrevCard.disabled = isFirst;
  dom.btnPrevMobile.disabled = isFirst;
  dom.btnNextCard.disabled = isLast;
  dom.btnNextMobile.disabled = isLast;
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

  // دعم السحب باللمس على الهواتف (Touch Swipe)
  dom.flashcardEl.addEventListener(
    "touchstart",
    (e) => {
      appState.touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  dom.flashcardEl.addEventListener(
    "touchend",
    (e) => {
      appState.touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    },
    { passive: true }
  );
}

function handleSwipeGesture() {
  const threshold = 45;
  const diff = appState.touchEndX - appState.touchStartX;

  if (Math.abs(diff) < threshold) return;

  // في الواجهة العربية (RTL): السحب لليمين يفتح البطاقة التالية، ولليسار يعود للسابقة
  if (diff > 0) {
    goToNextCard();
  } else {
    goToPrevCard();
  }
}

/* ==========================================================================
   8. RESPONSIVE & KEYBOARD INTERACTIONS (التجاوب ودعم لوحة المفاتيح)
   ========================================================================== */
function initKeyboardAndResize() {
  document.addEventListener("keydown", (event) => {
    if (appState.currentScreen === "screen-flashcards") {
      if (event.key === "ArrowLeft") {
        goToNextCard();
      } else if (event.key === "ArrowRight") {
        goToPrevCard();
      } else if (event.key === "Escape") {
        navigateToScreen("screen-culture-hub");
      }
    } else if (appState.currentScreen === "screen-culture-hub" && event.key === "Escape") {
      navigateToScreen("screen-main");
    } else if (appState.currentScreen === "screen-songs" && event.key === "Escape") {
      navigateToScreen("screen-main");
    }
  });

  // إعادة حساب خطوط الربط عند تغيير حجم النافذة
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (appState.currentScreen === "screen-culture-hub") {
        drawHubConnectors();
      }
    }, 100);
  });
}

/* ==========================================================================
   9. INITIALIZATION (تشغيل التطبيق عند جاهزية المستند)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initWelcomeScreen();
  initNavigationButtons();
  initBubbleHub();
  initFlashcardControls();
  initKeyboardAndResize();
});
