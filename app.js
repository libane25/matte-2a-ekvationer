const BANK = window.BANK;
const STORAGE_KEY = "matte2a-ekvationer-v1";
const LETTERS = ["A", "B", "C", "D"];

const FORMULAS = [
  {
    title: "Linjär ekvation",
    text: "Gör samma sak på båda sidor tills variabeln står ensam. En term som byter led byter tecken. Parenteser multipliceras in först.",
  },
  {
    title: "Kvadreringsreglerna",
    text: "(a + b)² = a² + 2ab + b² och (a − b)² = a² − 2ab + b². Det räcker inte att kvadrera varje term.",
  },
  {
    title: "Konjugatregeln",
    text: "(a + b)(a − b) = a² − b². Regeln används också baklänges när du faktoriserar en skillnad av kvadrater.",
  },
  {
    title: "Kvadratrotsmetoden",
    text: "Om x² = a och a > 0 är x = ±√a. Om a = 0 är x = 0. Om a < 0 finns ingen reell lösning.",
  },
  {
    title: "Nollproduktmetoden",
    text: "A·B = 0 betyder att A = 0 eller B = 0. Bryt ut gemensam faktor först, och flytta så att högerledet är 0.",
  },
  {
    title: "Kvadratkomplettering och pq",
    text: "För x² + px + q = 0 är x = −p/2 ± √((p/2)² − q). Dela med a om x² inte har koefficient 1. Talet under rottecknet kallas diskriminant: positivt ger två rötter, noll en dubbelrot, negativt inga reella rötter.",
  },
  {
    title: "Andragradsfunktion",
    text: "För f(x) = ax² + bx + c är symmetrilinjen x = −b/(2a). Extrempunkten ligger där. a > 0 ger minimum, a < 0 maximum. Nollställena är rötterna till f(x) = 0.",
  },
  {
    title: "Ekvationssystem",
    text: "Substitution: lös ut en variabel och sätt in den i den andra ekvationen. Addition: gör en variabels koefficienter lika eller motsatta och addera ledvis. Olika k ger en lösning, samma k och olika m ingen, samma linje oändligt många.",
  },
  {
    title: "Potens och exponential",
    text: "Samma bas ger samma exponent. x³ = a har en reell rot, x² = a har två om a > 0. När baserna inte går att göra lika är x = lg(b) / lg(a) lösningen till aˣ = b.",
  },
];

const state = loadState();
let view = { name: "home" };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      correct: saved.correct && typeof saved.correct === "object" ? saved.correct : {},
      wrong: saved.wrong && typeof saved.wrong === "object" ? saved.wrong : {},
    };
  } catch {
    return { correct: {}, wrong: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ correct: state.correct, wrong: state.wrong }));
}

function topicById(id) {
  return BANK.topics.find((topic) => topic.id === id);
}

function inTopic(id) {
  return BANK.questions.filter((question) => question.topic === id);
}

function masteredCount(list) {
  return list.filter((question) => state.correct[question.id]).length;
}

function unmastered(list) {
  return list.filter((question) => !state.correct[question.id]);
}

function wrongQuestions() {
  return BANK.questions.filter((question) => state.wrong[question.id] && !state.correct[question.id]);
}

function pickRound(list, limit) {
  const pending = unmastered(list);
  const source = pending.length ? pending : list;
  return source.slice(0, limit || source.length);
}

function el(tag, props, kids) {
  const node = document.createElement(tag);
  Object.entries(props || {}).forEach(([key, value]) => {
    if (value == null || value === false) return;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, String(value));
  });
  (kids || []).forEach((kid) => {
    if (kid == null || kid === false) return;
    node.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  });
  return node;
}

function render() {
  const root = document.querySelector("#app");
  root.replaceChildren(shell());
}

function shell() {
  if (view.name === "home") return homeView();
  if (view.name === "formulas") return formulaView();
  if (view.name === "summary") return summaryView();
  return practiceView();
}

function homeView() {
  const done = masteredCount(BANK.questions);
  const total = BANK.questions.length;
  const pending = unmastered(BANK.questions);
  const wrong = wrongQuestions();
  return el("main", { class: "wrap" }, [
    header(false),
    el("h1", { text: "Ekvationer" }),
    el("p", { class: "lede", text: BANK.blurb }),
    el("div", { class: "status" }, [
      el("i"),
      el("span", { text: "Statistik är avklarad. Nu tränar du ekvationer." }),
    ]),
    el("section", { class: "score" }, [
      el("div", {}, [
        el("strong", { text: `${done}/${total}` }),
        el("p", { text: "frågor med rätt svar minst en gång" }),
      ]),
      el("div", {}, [
        el("p", { text: pending.length ? `${pending.length} frågor kvar i kapitlet.` : "Hela kapitlet är grönt. Du kan öva om vilka avsnitt du vill." }),
        meter(done / total),
      ]),
    ]),
    el("div", { class: "actions" }, [
      el("button", {
        class: "btn primary",
        type: "button",
        text: pending.length ? "Fortsätt med tio nya" : "Öva tio blandade",
        onclick: () => startRound(pending.length ? pickRound(BANK.questions, 10) : sample(BANK.questions, 10), "Tio frågor"),
      }),
      el("button", {
        class: "btn",
        type: "button",
        text: "Blandat pass",
        onclick: () => startRound(sample(pending.length >= 10 ? pending : BANK.questions, 10), "Blandat pass"),
      }),
      el("button", {
        class: "btn",
        type: "button",
        text: wrong.length ? `Repetera fel (${wrong.length})` : "Repetera fel",
        disabled: wrong.length === 0,
        onclick: () => startRound(wrong, "Repetera fel"),
      }),
      el("button", { class: "btn", type: "button", text: "Formelblad", onclick: () => { view = { name: "formulas" }; render(); } }),
    ]),
    el("section", { class: "topics", "aria-label": "Avsnitt" }, BANK.topics.map((topic, index) => {
      const list = inTopic(topic.id);
      const got = masteredCount(list);
      return el("button", { class: "topic", type: "button", onclick: () => openTopic(topic.id) }, [
        el("span", { class: "num", text: String(index + 1).padStart(2, "0") }),
        el("span", {}, [
          el("span", { class: "topic-title", text: topic.title }),
          el("p", { text: topic.lead }),
        ]),
        el("span", { class: "count", text: `${got}/${list.length}` }),
        el("span", { class: "mini" }, [el("span", { style: `width:${list.length ? (got / list.length) * 100 : 0}%` })]),
      ]);
    })),
    el("p", { class: "note", text: "Frågorna är egna övningar till avsnitten i Matteboken och på Mattecentrum. De är inte kopierade ur boken." }),
    done || wrong.length ? el("button", {
      class: "text-btn",
      type: "button",
      text: "Nollställ framsteg",
      onclick: () => {
        if (window.confirm("Nollställ alla rätt och fel?")) {
          state.correct = {};
          state.wrong = {};
          saveState();
          render();
        }
      },
    }) : null,
  ]);
}

function formulaView() {
  return el("main", { class: "wrap" }, [
    header(true),
    el("h1", { text: "Formelblad" }),
    el("p", { class: "lede", text: "Kort stöd till metoderna i kapitlet. Använd det innan du svarar, inte i stället för att räkna." }),
    el("div", { class: "formulas" }, FORMULAS.map((item) => el("article", { class: "formula" }, [
      el("h3", { text: item.title }),
      el("p", { text: item.text }),
    ]))),
  ]);
}

function openTopic(id) {
  const topic = topicById(id);
  const list = inTopic(id);
  const round = pickRound(list);
  startRound(round, topic.title);
}

function startRound(questions, title) {
  if (!questions.length) return;
  view = {
    name: "practice",
    title,
    ids: questions.map((question) => question.id),
    index: 0,
    right: 0,
    answered: 0,
    revealed: false,
    hint: false,
  };
  render();
}

function currentQuestion() {
  return BANK.questions.find((question) => question.id === view.ids[view.index]);
}

function practiceView() {
  const question = currentQuestion();
  const topic = topicById(question.topic);
  const longPrompt = question.prompt.length > 88;
  return el("main", { class: "wrap" }, [
    header(true),
    el("div", { class: "practice-head" }, [
      el("div", {}, [
        el("p", { class: "kicker", text: view.title }),
        el("p", { class: "meta", text: `Fråga ${view.index + 1} av ${view.ids.length}` }),
      ]),
      el("span", { class: "pill", text: question.level }),
    ]),
    meter((view.index + (view.revealed ? 1 : 0)) / view.ids.length),
    el("p", { class: longPrompt ? "prompt prose" : "prompt", text: question.prompt }),
    question.graph ? graphCard(question.graph) : null,
    question.equation ? el("p", { class: longPrompt ? "eq support" : "eq", text: question.equation }) : null,
    el("div", { class: "choices" }, question.choices.map((choice, index) => {
      let klass = "choice";
      if (view.revealed && choice === question.correct) klass += " good";
      if (view.revealed && view.picked === choice && choice !== question.correct) klass += " bad";
      return el("button", {
        class: klass,
        type: "button",
        disabled: view.revealed,
        onclick: () => answer(choice),
      }, [
        el("span", { class: "letter", text: LETTERS[index] }),
        el("span", { text: choice }),
      ]);
    })),
    view.revealed ? feedback(question) : null,
    el("div", { class: "tools" }, [
      !view.revealed ? el("button", {
        class: "text-btn",
        type: "button",
        text: view.hint ? "Dölj ledtråd" : "Ledtråd",
        onclick: () => { view.hint = !view.hint; render(); },
      }) : null,
      view.revealed ? el("button", {
        class: "btn primary",
        type: "button",
        text: view.index + 1 === view.ids.length ? "Se resultat" : "Nästa fråga",
        onclick: next,
      }) : null,
    ]),
    view.hint && !view.revealed ? el("p", { class: "hint", text: question.hint }) : null,
  ]);
}

function feedback(question) {
  const ok = view.picked === question.correct;
  return el("div", {}, [
    el("div", { class: ok ? "feedback good" : "feedback bad", text: ok ? "Rätt." : `Inte riktigt. Rätt svar är ${question.correct}.` }),
    el("ol", { class: "steps" }, question.steps.map((step) => el("li", { text: step }))),
  ]);
}

function answer(choice) {
  if (view.revealed) return;
  const question = currentQuestion();
  view.revealed = true;
  view.picked = choice;
  view.answered += 1;
  const ok = choice === question.correct;
  if (ok) {
    view.right += 1;
    state.correct[question.id] = true;
    delete state.wrong[question.id];
  } else if (!state.correct[question.id]) {
    state.wrong[question.id] = true;
  }
  saveState();
  render();
}

function next() {
  if (view.index + 1 >= view.ids.length) {
    view = {
      name: "summary",
      title: view.title,
      right: view.right,
      answered: view.answered,
      ids: view.ids,
    };
  } else {
    view.index += 1;
    view.revealed = false;
    view.hint = false;
    view.picked = null;
  }
  render();
}

function summaryView() {
  const done = masteredCount(BANK.questions);
  return el("main", { class: "wrap" }, [
    header(true),
    el("p", { class: "kicker", text: view.title }),
    el("h1", { text: `${view.right} av ${view.answered}` }),
    el("p", { class: "lede", text: "rätt i den här omgången." }),
    el("section", { class: "score" }, [
      el("div", {}, [
        el("strong", { text: `${done}/${BANK.questions.length}` }),
        el("p", { text: "klara i hela ekvationskapitlet" }),
      ]),
      meter(done / BANK.questions.length),
    ]),
    el("div", { class: "actions" }, [
      el("button", {
        class: "btn primary",
        type: "button",
        text: "En omgång till",
        onclick: () => {
          const again = view.ids.map((id) => BANK.questions.find((question) => question.id === id));
          startRound(again, view.title);
        },
      }),
      el("button", { class: "btn", type: "button", text: "Till översikten", onclick: goHome }),
    ]),
  ]);
}

function header(back) {
  return el("div", { class: "top" }, [
    el("div", { class: "brand" }, [
      el("p", { class: "kicker", text: "Matte 2a" }),
    ]),
    back
      ? el("button", { class: "text-btn", type: "button", text: "Översikt", onclick: goHome })
      : el("span", { class: "meta", text: "200 frågor" }),
  ]);
}

function goHome() {
  view = { name: "home" };
  render();
}

function meter(ratio) {
  const width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;
  return el("div", { class: "meter", role: "presentation" }, [el("span", { style: `width:${width}` })]);
}

function sample(list, count) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function graphCard(graph) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 320 280");
  svg.setAttribute("class", "graph");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", graph.lines.map((line) => line.label).join(". "));
  const pad = 32;
  const width = 320;
  const height = 280;
  const X = (x) => pad + ((x - graph.xmin) / (graph.xmax - graph.xmin)) * (width - pad * 2);
  const Y = (y) => pad + ((graph.ymax - y) / (graph.ymax - graph.ymin)) * (height - pad * 2);
  for (let x = Math.ceil(graph.xmin); x <= Math.floor(graph.xmax); x += 1) {
    svg.append(svgLine(X(x), pad, X(x), height - pad, x === 0 ? "axis" : "grid"));
    svg.append(svgText(X(x), height - 12, String(x), "middle"));
  }
  for (let y = Math.ceil(graph.ymin); y <= Math.floor(graph.ymax); y += 1) {
    svg.append(svgLine(pad, Y(y), width - pad, Y(y), y === 0 ? "axis" : "grid"));
    svg.append(svgText(16, Y(y) + 4, String(y), "start"));
  }
  graph.lines.forEach((line, index) => {
    const segment = clipLine(line.k, line.m, graph.xmin, graph.xmax, graph.ymin, graph.ymax);
    if (!segment) return;
    svg.append(svgLine(X(segment[0].x), Y(segment[0].y), X(segment[1].x), Y(segment[1].y), index === 0 ? "line-a" : "line-b"));
  });
  return el("figure", { class: "graph-card" }, [
    svg,
    el("figcaption", { class: "legend" }, graph.lines.map((line, index) => el("span", {}, [
      el("i", { class: index === 0 ? "swatch a" : "swatch b" }),
      el("span", { text: line.label }),
    ]))),
  ]);
}

function svgLine(x1, y1, x2, y2, klass) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("class", klass);
  return line;
}

function svgText(x, y, text, anchor) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", "text");
  node.setAttribute("x", x);
  node.setAttribute("y", y);
  node.setAttribute("text-anchor", anchor);
  node.textContent = text;
  return node;
}

function clipLine(k, m, xmin, xmax, ymin, ymax) {
  const points = [];
  const add = (x, y) => {
    if (x < xmin - 1e-6 || x > xmax + 1e-6 || y < ymin - 1e-6 || y > ymax + 1e-6) return;
    const key = `${x.toFixed(3)},${y.toFixed(3)}`;
    if (!points.some((point) => point.key === key)) points.push({ x, y, key });
  };
  add(xmin, k * xmin + m);
  add(xmax, k * xmax + m);
  if (Math.abs(k) > 1e-9) {
    add((ymin - m) / k, ymin);
    add((ymax - m) / k, ymax);
  }
  if (points.length < 2) return null;
  let best = [points[0], points[1]];
  let distance = -1;
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const gap = (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2;
      if (gap > distance) {
        distance = gap;
        best = [points[i], points[j]];
      }
    }
  }
  return best;
}

document.addEventListener("keydown", (event) => {
  if (view.name !== "practice") return;
  if (!view.revealed && event.key >= "1" && event.key <= "4") {
    const question = currentQuestion();
    const choice = question.choices[Number(event.key) - 1];
    if (choice) answer(choice);
  } else if (view.revealed && (event.key === "Enter" || event.key === "n" || event.key === "N")) {
    next();
  }
});

render();
