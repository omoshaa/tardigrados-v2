/* ============================================================
   IDENTIFICAÇÃO - CHAVE DICOTÔMICA INTERATIVA
   ============================================================ */

// Estado da chave
let currentStep = "1";
let choiceHistory = [];

// Dados da chave dicotômica completa
const keySteps = {
  // PASSO INICIAL
  1: {
    title: "Filo Tardigrada: Classes",
    question: "1. Observe a presença de cirros laterais A na cabeça:",
    options: [
      {
        text: "1. Cirros laterais A presentes.",
        next: "heterotardigrada_ordens",
        image: "../assets/fig1.png",
      },
      {
        text: "1'. Cirros laterais A ausentes.",
        next: "eutardigrada_ordens",
        noImage: true,
      },
    ],
  },

  // CLASSE HETEROTARDIGRADA
  heterotardigrada_ordens: {
    title: "Classe Heterotardigrada: Ordens",
    question: "1. Observe o cirro mediano e a inserção das garras:",
    options: [
      {
        text: "1. Cirro mediano geralmente presente; dígitos ou garras inseridos diretamente na perna.",
        next: "arthrotardigrada_result",
        image: "../assets/fig2.png",
      },
      {
        text: "1'. Cirro mediano ausente; cada garra inserida na perna.",
        next: "echiniscoidea_familias",
        noImage: true,
      },
    ],
  },

  arthrotardigrada_result: {
    title: "Resultado: Ordem Arthrotardigrada",
    result: "Ordem Arthrotardigrada",
    description:
      "Uma espécie: Styraconyx hallasi. Tardigrado marinho encontrado acidentalmente em fontes da Groenlândia.",
    image: "../assets/resultadoArthrotardigrada.png",
  },

  echiniscoidea_familias: {
    title: "Ordem Echiniscoidea: Famílias",
    question: "1. Observe o número de garras por perna e as placas dorsais:",
    options: [
      {
        text: "1. Quatro garras por perna em adultos; com placas dorsais-laterais.",
        next: "echiniscidae_familias",
        image: "../assets/fig4.png",
      },
      {
        text: "1'. Duas garras nas pernas I-III, uma garra na perna IV em adultos; cutícula sem placas dorsais; cirrus A muito curto.",
        next: "carphaniidae_result",
        noImage: true,
      },
    ],
  },

  echiniscidae_familias: {
    title: "Família Echiniscidae: Gêneros",
    question: "1. Observe a placa pseudosegmentar:",
    options: [
      {
        text: "1. Placa pseudosegmentar ausente.",
        next: "echiniscidae_generos_2",
        noImage: true,
      },
      {
        text: "1'. Placa pseudosegmentar presente entre a segunda placa em pares e a placa terminal.",
        next: "pseudechiniscus_result",
        image: "../assets/Pseudechiniscus.png",
      },
    ],
  },

  pseudechiniscus_result: {
    title: "Resultado: Gênero Pseudechiniscus",
    result: "Gênero Pseudechiniscus",
    description:
      "Placa pseudosegmentar presente entre a segunda placa em pares e a placa terminal.",
    image: "../assets/Pseudechiniscus.png",
  },

  echiniscidae_generos_2: {
    title: "Família Echiniscidae: Gêneros",
    question: "2(1). Observe a placa terminal:",
    options: [
      {
        text: "2. Placa terminal entalhada.",
        next: "echiniscus_result",
        image: "../assets/placa-entalhada.png",
      },
      {
        text: "2'. Placa terminal dividida por suturas; olhos em manchas pretas; acidental.",
        next: "hypechiniscus_result",
        image: "../assets/placa-dividida.png",
      },
    ],
  },

  echiniscus_result: {
    title: "Resultado: Gênero Echiniscus",
    result: "Gênero Echiniscus",
    description: "Placa terminal entalhada.",
    image: "../assets/placa-entalhada.png",
  },

  hypechiniscus_result: {
    title: "Resultado: Gênero Hypechiniscus",
    result: "Gênero Hypechiniscus",
    description:
      "Placa terminal dividida por suturas; olhos em manchas pretas; acidental.",
    image: "../assets/placa-dividida.png",
  },

  carphaniidae_result: {
    title: "Resultado: Família Carphaniidae",
    result: "Gênero Carphania",
    description:
      "Duas garras nas pernas I-III, uma garra na perna IV; cutícula sem placas dorsais; cirrus A muito curto; acidental.",
    image: "../assets/Carphania.png",
  },

  // CLASSE EUTARDIGRADA
  eutardigrada_ordens: {
    title: "Classe Eutardigrada: Ordens",
    question: "1. Observe as estruturas bucais:",
    options: [
      {
        text: "1. Sem estiletes bucais; um aparelho de sucção semelhante a ventosa com três lobos presente (marinho ou estuarino).",
        next: "apochela_result",
        noImage: true,
      },
      {
        text: "1'. Com estiletes bucais; sem aparelho de sucção (límnicos e terrestres).",
        next: "parachela_superfamilias",
        noImage: true,
      },
    ],
  },

  apochela_result: {
    title: "Resultado: Ordem Apochela",
    result: "Ordem Apochela",
    description:
      "Sem estiletes bucais; aparelho de sucção com três lobos presente. Duas espécies: Milnesium tardigradum e M. brachyungue (marinho ou estuarino).",
    noImage: true,
  },

  // ORDEM PARACHELA
  parachela_superfamilias: {
    title: "Ordem Parachela: Superfamílias",
    question: "1. Observe as garras e estruturas cuticulares:",
    options: [
      {
        text: "1. Garras em forma de Y; tronco encurtado; muitas pápulas ou tubérculos cuticulares.",
        next: "hypsibioidea_familias",
        image: "../assets/fig12.png",
      },
      {
        text: "1'. Garras em forma de L ou Y; corpo cilíndrico alongado; pápulas ausentes ou raras.",
        next: "macrobiotoidea_familias",
        noImage: true,
      },
    ],
  },

  // SUPERFAMÍLIA HYPSIBIOIDEA
  hypsibioidea_familias: {
    title: "Superfamília Hypsibioidea: Famílias",
    question: "1. Observe o número de macroplacóides:",
    options: [
      {
        text: "1. Dois macroplacóides e um microplacóide.",
        next: "hypsibiidae_generos",
        noImage: true,
      },
      {
        text: "1'. Dois macroplacóides alongados, sem microplacóide.",
        next: "calohypsibiidae_result",
        noImage: true,
      },
    ],
  },

  calohypsibiidae_result: {
    title: "Resultado: Família Calohypsibiidae",
    result: "Gênero Calohypsibius",
    description:
      "Dois macroplacóides alongados, sem microplacóide. Espécie: C. ornatus.",
    noImage: true,
  },

  // FAMÍLIA HYPSIBIIDAE
  hypsibiidae_generos: {
    title: "Família Hypsibiidae: Gêneros",
    question: "1. Observe as garras das pernas:",
    options: [
      {
        text: "1. Garras primárias e secundárias semelhantes em comprimento.",
        next: "hypsibiidae_generos_2",
        noImage: true,
      },
      {
        text: "1'. Garras primárias distintamente mais longas que as secundárias.",
        next: "hypsibiidae_generos_4",
        noImage: true,
      },
    ],
  },

  hypsibiidae_generos_2: {
    title: "Família Hypsibiidae: Gêneros (2/7)",
    question: "2(1). Observe os pontos cuticulares:",
    options: [
      {
        text: "2. Cutícula com pontos redondos; 10 peribuccal lamellae.",
        next: "ramazzottius_result",
        noImage: true,
      },
      {
        text: "2'. Cutícula sem pontos redondos; peribuccal lamellae ausentes.",
        next: "hypsibiidae_generos_3",
        noImage: true,
      },
    ],
  },

  ramazzottius_result: {
    title: "Resultado: Gênero Ramazzottius",
    result: "Gênero Ramazzottius",
    description:
      "Cutícula com pontos redondos; 10 peribuccal lamellae. Espécies: R. oberhaeuseri, R. varieornatus.",
    noImage: true,
  },

  hypsibiidae_generos_3: {
    title: "Família Hypsibiidae: Gêneros (3/7)",
    question: "3(2). Observe as lúnulas e poros dorsais:",
    options: [
      {
        text: "3. Com lúnulas cuticulares grandes; 10 poros dorsais.",
        next: "hypsibius_result",
        noImage: true,
      },
      {
        text: "3'. Sem lúnulas cuticulares grandes; poros dorsais ausentes ou inconspícuos.",
        next: "isohypsibius_result",
        noImage: true,
      },
    ],
  },

  hypsibius_result: {
    title: "Resultado: Gênero Hypsibius",
    result: "Gênero Hypsibius",
    description:
      "Com lúnulas cuticulares grandes; 10 poros dorsais. Espécies: H. dujardini, H. convergens, H. microps.",
    noImage: true,
  },

  isohypsibius_result: {
    title: "Resultado: Gênero Isohypsibius",
    result: "Gênero Isohypsibius",
    description:
      "Sem lúnulas cuticulares grandes; poros dorsais ausentes ou inconspícuos. Espécie: I. prosostomus.",
    noImage: true,
  },

  hypsibiidae_generos_4: {
    title: "Família Hypsibiidae: Gêneros (4/7)",
    question: "4(1). Observe a forma dos macroplacóides:",
    options: [
      {
        text: "4. Macroplacóides em forma de haste.",
        next: "hypsibiidae_generos_5",
        noImage: true,
      },
      {
        text: "4'. Macroplacóides em forma de gota.",
        next: "doryphoribius_result",
        noImage: true,
      },
    ],
  },

  doryphoribius_result: {
    title: "Resultado: Gênero Doryphoribius",
    result: "Gênero Doryphoribius",
    description: "Macroplacóides em forma de gota. Espécie: D. flavus.",
    noImage: true,
  },

  hypsibiidae_generos_5: {
    title: "Família Hypsibiidae: Gêneros (5/7)",
    question: "5(4). Observe o septo entre macroplacóides:",
    options: [
      {
        text: "5. Dois macroplacóides semelhantes em comprimento, organizados em fileiras (parecem parênteses); septo presente.",
        next: "pilatobius_result",
        noImage: true,
      },
      {
        text: "5'. Dois macroplacóides sem septo OU três macroplacóides com ou sem septo.",
        next: "diphascon_result",
        noImage: true,
      },
    ],
  },

  pilatobius_result: {
    title: "Resultado: Gênero Pilatobius",
    result: "Gênero Pilatobius",
    description:
      "Dois macroplacóides semelhantes em comprimento, organizados em fileiras (parecem parênteses); septo presente.",
    noImage: true,
  },

  diphascon_result: {
    title: "Resultado: Gênero Diphascon",
    result: "Gênero Diphascon",
    description:
      "Dois macroplacóides sem septo ou três macroplacóides com ou sem septo. Espécie: D. pingue.",
    noImage: true,
  },

  // SUPERFAMÍLIA MACROBIOTOIDEA
  macrobiotoidea_familias: {
    title: "Superfamília Macrobiotoidea: Famílias",
    question: "1. Observe o formato das garras e a lâmina ventral:",
    options: [
      {
        text: "1. Garras em formato L ou V (ramos das garras divergindo desde a base); gancho evidente na lâmina ventral.",
        next: "murrayidae_generos",
        image: "../assets/fig9.png",
      },
      {
        text: "1'. Garras em formato Y (ramos das garras fundidos por um trecho); sem gancho evidente na lâmina ventral.",
        next: "macrobiotidae_generos_1",
        image: "../assets/fig6.png",
      },
    ],
  },

  // FAMÍLIA MURRAYIDAE
  murrayidae_generos: {
    title: "Família Murrayidae: Gêneros",
    question: "1. Observe as garras e espessamentos cuticulares:",
    options: [
      {
        text: "1. Garras em forma de L muito bem desenvolvidas, com espessamentos cuticulares conectando a base das garras em cada perna.",
        next: "dactylobiotus_result",
        noImage: true,
      },
      {
        text: "1'. Garras em forma de V, sem espessamentos cuticulares conectando a base das garras em cada perna, com lunulas.",
        next: "murrayon_result",
        noImage: true,
      },
    ],
  },

  dactylobiotus_result: {
    title: "Resultado: Gênero Dactylobiotus",
    result: "Gênero Dactylobiotus",
    description:
      "Garras em forma de L muito bem desenvolvidas, com espessamentos cuticulares conectando a base das garras em cada perna; limnoterrestres.",
    noImage: true,
  },

  murrayon_result: {
    title: "Resultado: Gênero Murrayon",
    result: "Gênero Murrayon",
    description:
      "Garras em forma de V, sem espessamentos cuticulares conectando a base das garras em cada perna, com lunulas; limnoterrestres.",
    noImage: true,
  },

  // FAMÍLIA MACROBIOTIDAE
  macrobiotidae_generos_1: {
    title: "Família Macrobiotidae: Gêneros (1/3)",
    question: "1. Conte os macroplacóides na faringe:",
    options: [
      {
        text: "1. Três macroplacóides.",
        next: "macrobiotidae_generos_2",
        noImage: true,
      },
      {
        text: "1'. Dois macroplacóides; microplacóide, se presente, próximo ao segundo macroplacóide.",
        next: "macrobiotus_result",
        image: "../assets/fig7.png",
      },
    ],
  },

  macrobiotus_result: {
    title: "Resultado: Gênero Macrobiotus",
    result: "Gênero Macrobiotus",
    description:
      "Dois macroplacóides; microplacóide, se presente, próximo ao segundo macroplacóide; cutícula com ou sem poros; ovos com processos de vários tipos. Espécies: M. hufelandi, M. sapiens, M. occidentalis.",
    image: "../assets/fig8.png",
  },

  macrobiotidae_generos_2: {
    title: "Família Macrobiotidae: Gêneros (2/3)",
    question: "2(1). Observe a forma dos macroplacóides e lamelas bucais:",
    options: [
      {
        text: "2. Macroplacóides em forma de haste; lamelas bucais presentes.",
        next: "macrobiotidae_generos_3",
        noImage: true,
      },
      {
        text: "2'. Macroplacóides redondos; microplacóide presente; lamelas bucais ausentes.",
        next: "minibiotus_result",
        noImage: true,
      },
    ],
  },

  minibiotus_result: {
    title: "Resultado: Gênero Minibiotus",
    result: "Gênero Minibiotus",
    description:
      "Macroplacóides redondos; microplacóide presente; lamelas bucais ausentes; pápulas presentes. Espécies: M. intermedius, M. weinerorum.",
    noImage: true,
  },

  macrobiotidae_generos_3: {
    title: "Família Macrobiotidae: Gêneros (3/3)",
    question: "3(2). Observe a posição do microplacóide (se presente):",
    options: [
      {
        text: "3. Microplacóide sempre presente e claramente próximo ao terceiro macroplacóide (menos que seu comprimento).",
        next: "mesobiotus_result",
        noImage: true,
      },
      {
        text: "3'. Microplacóide, se presente, distante do terceiro macroplacóide (mais que seu comprimento).",
        next: "paramacrobiotus_result",
        noImage: true,
      },
    ],
  },

  mesobiotus_result: {
    title: "Resultado: Gênero Mesobiotus",
    result: "Gênero Mesobiotus",
    description:
      "Microplacóide sempre presente e claramente próximo ao terceiro macroplacóide (menos que seu comprimento); garra característica com septo interno. Espécie: M. harmsworthi.",
    noImage: true,
  },

  paramacrobiotus_result: {
    title: "Resultado: Gênero Paramacrobiotus",
    result: "Gênero Paramacrobiotus",
    description:
      "Microplacóide, se presente, distante do terceiro macroplacóide (mais que seu comprimento); ovos sempre com grandes processos reticulados. Espécies: P. richtersi, P. areolatus.",
    noImage: true,
  },
};

// Funções de navegação entre seções
function showSection(sectionId) {
  // Esconde o header da página
  const pageHeader = document.querySelector(".page-header");
  if (pageHeader) {
    pageHeader.style.display = "none";
  }

  // Esconde a grid de tools
  const toolsGrid = document.querySelector(".tools-grid");
  if (toolsGrid) {
    toolsGrid.style.display = "none";
  }

  // Esconde todas as seções
  const allSections = document.querySelectorAll(".content-panel");
  allSections.forEach((section) => {
    section.style.display = "none";
  });

  // Mostra a seção selecionada
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function hideAllSections() {
  // Mostra o header da página
  const pageHeader = document.querySelector(".page-header");
  if (pageHeader) {
    pageHeader.style.display = "block";
  }

  // Esconde todas as seções de conteúdo
  const sections = document.querySelectorAll(".content-panel");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Mostra a grid de tools
  const toolsGrid = document.querySelector(".tools-grid");
  if (toolsGrid) {
    toolsGrid.style.display = "grid";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  showStep(keySteps[currentStep]);
  setupEventListeners();
});

// Navega para o próximo passo
function nextStep(stepId) {
  const step = keySteps[stepId];
  if (!step) {
    console.error("Passo não encontrado:", stepId);
    return;
  }

  // Adiciona ao histórico
  const currentStepData = keySteps[currentStep];
  if (currentStepData && currentStepData.question) {
    const chosenOption = currentStepData.options?.find(
      (opt) => opt.next === stepId
    );
    const response = chosenOption
      ? chosenOption.text
      : "Resposta não identificada";

    choiceHistory.push({
      question: currentStepData.question,
      answer: response,
    });

    updateHistory();
  }

  currentStep = stepId;

  if (step.result) {
    showResult(step);
  } else {
    showStep(step);
  }
}

// Mostra um passo da chave
function showStep(step) {
  document.getElementById("step-title").textContent = step.title;
  const content = document.getElementById("step-content");

  content.innerHTML = `
    <div class="key-question">
      <p><strong>${escapeHtml(step.question)}</strong></p>
    </div>
    <div class="key-options">
      ${step.options
        .map(
          (option) => `
        <button class="key-option" onclick="nextStep('${option.next}')">
          ${
            option.noImage
              ? `
            <div class="no-image-placeholder">
              <div class="no-image-text">Sem imagem</div>
            </div>
          `
              : `
            <img src="${
              option.image || "../assets/tardigrade-icon.png"
            }" onerror="this.onerror=null;this.src='../assets/tardigrade-icon.png'" alt="Imagem para ${escapeHtml(
                  option.text
                )}" class="key-option-image">
          `
          }
          <div class="key-option-text">${escapeHtml(option.text)}</div>
        </button>
      `
        )
        .join("")}
    </div>
  `;

  // Mostra step, esconde result
  document.getElementById("key-step").style.display = "block";
  document.getElementById("key-result").classList.remove("active");
}

// Mostra o resultado
function showResult(step) {
  const parabensMsg = step.result.toLowerCase().includes("gênero")
    ? `<div class="congrats-message">🎉 Parabéns, você identificou o ${step.result}! 🎉</div>`
    : "";

  document.getElementById("result-content").innerHTML = `
    <div class="result-card">
      ${parabensMsg}
      <h4>Identificação: ${escapeHtml(step.result)}</h4>
      <p>${escapeHtml(step.description)}</p>
      ${
        step.noImage
          ? `
        <div class="no-image-placeholder" style="margin: 20px auto;">
          <div class="no-image-text">Sem imagem disponível</div>
        </div>
      `
          : `
        <img src="${
          step.image || "../assets/tardigrade-icon.png"
        }" onerror="this.onerror=null;this.src='../assets/tardigrade-icon.png'" alt="Imagem de ${escapeHtml(
              step.result
            )}" class="result-image">
      `
      }
      <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
        <button class="btn-save-result" onclick="saveKeyResult()">
          <i class="fas fa-save"></i> Salvar Resultado
        </button>
        <button class="btn-view-saved" onclick="showSavedResults()">
          <i class="fas fa-list"></i> Ver Salvos
        </button>
      </div>
    </div>
  `;

  // Esconde step, mostra result
  document.getElementById("key-step").style.display = "none";
  document.getElementById("key-result").classList.add("active");
}

// Salva o resultado da identificação no localStorage
function saveKeyResult() {
  const currentStepData = keySteps[currentStep];

  if (!currentStepData || !currentStepData.result) {
    alert("❌ Nenhum resultado para salvar.");
    return;
  }

  const savedResult = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    data: new Date().toLocaleDateString("pt-BR"),
    hora: new Date().toLocaleTimeString("pt-BR"),
    resultado: currentStepData.result,
    descricao: currentStepData.description,
    caminho: choiceHistory.map((choice) => choice.text),
    totalPassos: choiceHistory.length,
    imagem: currentStepData.image || null,
  };

  // Recupera resultados salvos
  let savedResults = JSON.parse(localStorage.getItem("keyResults") || "[]");
  savedResults.unshift(savedResult); // Adiciona no início (mais recente primeiro)

  // Limita a 50 resultados salvos
  if (savedResults.length > 50) {
    savedResults = savedResults.slice(0, 50);
  }

  localStorage.setItem("keyResults", JSON.stringify(savedResults));

  alert("✅ Resultado salvo com sucesso!");
}

// Mostra os resultados salvos
function showSavedResults() {
  const savedResults = JSON.parse(localStorage.getItem("keyResults") || "[]");

  if (savedResults.length === 0) {
    alert("ℹ️ Nenhum resultado salvo ainda.");
    return;
  }

  let html = `
    <div class="saved-results-container">
      <h3>📋 Resultados Salvos (${savedResults.length})</h3>
      <button class="btn-back-to-key" onclick="hideSavedResults()">
        <i class="fas fa-arrow-left"></i> Voltar
      </button>
      <div class="saved-results-list">
  `;

  savedResults.forEach((result, index) => {
    html += `
      <div class="saved-result-card">
        <div class="saved-result-header">
          <strong>${result.resultado}</strong>
          <span class="saved-date">${result.data} às ${result.hora}</span>
        </div>
        <p class="saved-description">${escapeHtml(result.descricao)}</p>
        <details>
          <summary>🔍 Ver caminho (${result.totalPassos} passos)</summary>
          <ol class="saved-path-list">
            ${result.caminho
              .map((step) => `<li>${escapeHtml(step)}</li>`)
              .join("")}
          </ol>
        </details>
        <button class="btn-delete-result" onclick="deleteSavedResult(${
          result.id
        })">
          <i class="fas fa-trash"></i> Excluir
        </button>
      </div>
    `;
  });

  html += `
      </div>
      <button class="btn-clear-all" onclick="clearAllResults()">
        <i class="fas fa-trash-alt"></i> Limpar Todos
      </button>
    </div>
  `;

  // Mostra na área de resultado
  document.getElementById("result-content").innerHTML = html;
  document.getElementById("key-step").style.display = "none";
  document.getElementById("key-result").classList.add("active");
}

// Esconde resultados salvos e volta para o resultado atual
function hideSavedResults() {
  if (keySteps[currentStep] && keySteps[currentStep].result) {
    showResult(keySteps[currentStep]);
  } else {
    resetKey();
  }
}

// Deleta um resultado específico
function deleteSavedResult(id) {
  if (!confirm("⚠️ Tem certeza que deseja excluir este resultado?")) {
    return;
  }

  let savedResults = JSON.parse(localStorage.getItem("keyResults") || "[]");
  savedResults = savedResults.filter((result) => result.id !== id);
  localStorage.setItem("keyResults", JSON.stringify(savedResults));

  showSavedResults(); // Atualiza a lista
}

// Limpa todos os resultados
function clearAllResults() {
  if (
    !confirm(
      "⚠️ Tem certeza que deseja excluir TODOS os resultados salvos? Esta ação não pode ser desfeita."
    )
  ) {
    return;
  }

  localStorage.removeItem("keyResults");
  alert("✅ Todos os resultados foram excluídos.");
  resetKey();
}

// Reseta a chave
function resetKey() {
  currentStep = "1";
  choiceHistory = [];
  updateHistory();
  showStep(keySteps[currentStep]);
}

// Atualiza o histórico
function updateHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  if (choiceHistory.length === 0) {
    historyList.innerHTML = `
      <li class="history-item">
        <div class="history-answer" style="text-align: center; color: #999;">
          Suas escolhas aparecerão aqui durante a identificação.
        </div>
      </li>
    `;
    return;
  }

  choiceHistory.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "history-item";
    li.innerHTML = `
      <div class="history-question">Passo ${index + 1}: ${escapeHtml(
      item.question
    )}</div>
      <div class="history-answer"><strong>Escolha:</strong> ${escapeHtml(
        item.answer
      )}</div>
    `;
    historyList.appendChild(li);
  });
}

// Event Listeners
function setupEventListeners() {
  document.getElementById("reset-key-btn").addEventListener("click", resetKey);

  // Form de cadastro
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }
}

// Função GPS (global para ser chamada pelo onclick no HTML)
window.getGPSLocation = function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        document.getElementById("latitude").value =
          position.coords.latitude.toFixed(6);
        document.getElementById("longitude").value =
          position.coords.longitude.toFixed(6);
        alert("✅ Localização obtida com sucesso!");
      },
      (error) => {
        alert(
          "❌ Erro ao obter localização. Verifique as permissões do navegador."
        );
        console.error(error);
      }
    );
  } else {
    alert("❌ Geolocalização não suportada pelo navegador.");
  }
};

// Manipula envio do formulário
function handleRegisterSubmit(e) {
  e.preventDefault();

  const formData = {
    genero: document.getElementById("genero").value,
    especie: document.getElementById("especie").value || "sp.",
    localidade: document.getElementById("localidade").value,
    habitat: document.getElementById("habitat").value,
    latitude: document.getElementById("latitude").value,
    longitude: document.getElementById("longitude").value,
    pesquisador: document.getElementById("pesquisador").value,
    instituicao: document.getElementById("instituicao").value || "N/A",
    observacoes: document.getElementById("observacoes").value || "",
    data: new Date().toISOString().split("T")[0],
  };

  // Salva no localStorage
  let records = JSON.parse(localStorage.getItem("tardiRecords") || "[]");

  // Gera dados taxonômicos básicos (simplificado)
  const newRecord = {
    id: Date.now(),
    classe: "Eutardigrada", // Padrão
    ordem: "Parachela", // Padrão
    familia: "Macrobiotidae", // Padrão
    genero: formData.genero,
    especie: formData.especie,
    localidade: formData.localidade,
    habitat: formData.habitat,
    latitude: parseFloat(formData.latitude) || 0,
    longitude: parseFloat(formData.longitude) || 0,
    pesquisador: formData.pesquisador,
    instituicao: formData.instituicao,
    observacoes: formData.observacoes,
    data: formData.data,
  };

  records.push(newRecord);
  localStorage.setItem("tardiRecords", JSON.stringify(records));

  alert(
    "✅ Registro salvo com sucesso! Você pode visualizá-lo na página do Mapa."
  );
  e.target.reset();
}

// Escape HTML para segurança
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
