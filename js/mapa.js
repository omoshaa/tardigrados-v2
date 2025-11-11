/* ============================================================
   MAPA TARDIGRADA - FUNCIONALIDADES
   ============================================================ */

// Dados de Exemplo (20+ registros)
const SAMPLE_DATA = [
  {
    id: 1,
    latitude: -23.5505,
    longitude: -46.6333,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Macrobiotus",
    especie: "hufelandi",
    localidade: "São Paulo, SP",
    habitat: "Musgo urbano",
    pesquisador: "Dr. Silva",
    instituicao: "USP",
    data: "2024-01-15",
  },
  {
    id: 2,
    latitude: -22.9068,
    longitude: -43.1729,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Hypsibius",
    especie: "dujardini",
    localidade: "Rio de Janeiro, RJ",
    habitat: "Líquen",
    pesquisador: "Dra. Costa",
    instituicao: "UFRJ",
    data: "2024-02-20",
  },
  {
    id: 3,
    latitude: -19.9167,
    longitude: -43.9345,
    classe: "Heterotardigrada",
    ordem: "Echiniscoidea",
    familia: "Echiniscidae",
    genero: "Echiniscus",
    especie: "testudo",
    localidade: "Belo Horizonte, MG",
    habitat: "Musgo de árvore",
    pesquisador: "Prof. Santos",
    instituicao: "UFMG",
    data: "2024-03-10",
  },
  {
    id: 4,
    latitude: -25.4284,
    longitude: -49.2733,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Paramacrobiotus",
    especie: "richtersi",
    localidade: "Curitiba, PR",
    habitat: "Solo florestal",
    pesquisador: "Dr. Oliveira",
    instituicao: "UFPR",
    data: "2024-01-25",
  },
  {
    id: 5,
    latitude: -30.0346,
    longitude: -51.2177,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Ramazzottius",
    especie: "oberhaeuseri",
    localidade: "Porto Alegre, RS",
    habitat: "Musgo de jardim",
    pesquisador: "Dra. Ferreira",
    instituicao: "UFRGS",
    data: "2024-02-05",
  },
  {
    id: 6,
    latitude: -3.7172,
    longitude: -38.5433,
    classe: "Heterotardigrada",
    ordem: "Echiniscoidea",
    familia: "Echiniscidae",
    genero: "Pseudechiniscus",
    especie: "suillus",
    localidade: "Fortaleza, CE",
    habitat: "Líquen costeiro",
    pesquisador: "Prof. Almeida",
    instituicao: "UFC",
    data: "2024-03-15",
  },
  {
    id: 7,
    latitude: -12.9714,
    longitude: -38.5014,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Minibiotus",
    especie: "intermedius",
    localidade: "Salvador, BA",
    habitat: "Areia de praia",
    pesquisador: "Dra. Rocha",
    instituicao: "UFBA",
    data: "2024-01-30",
  },
  {
    id: 8,
    latitude: -15.7942,
    longitude: -47.8822,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Isohypsibius",
    especie: "prosostomus",
    localidade: "Brasília, DF",
    habitat: "Musgo cerrado",
    pesquisador: "Dr. Martins",
    instituicao: "UnB",
    data: "2024-02-14",
  },
  {
    id: 9,
    latitude: -8.0476,
    longitude: -34.877,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Macrobiotus",
    especie: "sapiens",
    localidade: "Recife, PE",
    habitat: "Líquen urbano",
    pesquisador: "Dra. Lima",
    instituicao: "UFPE",
    data: "2024-03-01",
  },
  {
    id: 10,
    latitude: -1.4558,
    longitude: -48.5039,
    classe: "Heterotardigrada",
    ordem: "Echiniscoidea",
    familia: "Echiniscidae",
    genero: "Echiniscus",
    especie: "merokensis",
    localidade: "Belém, PA",
    habitat: "Musgo amazônico",
    pesquisador: "Prof. Carvalho",
    instituicao: "UFPA",
    data: "2024-02-28",
  },
  {
    id: 11,
    latitude: -20.3155,
    longitude: -40.3128,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Hypsibius",
    especie: "convergens",
    localidade: "Vitória, ES",
    habitat: "Restinga",
    pesquisador: "Dra. Souza",
    instituicao: "UFES",
    data: "2024-01-20",
  },
  {
    id: 12,
    latitude: -27.5954,
    longitude: -48.548,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Mesobiotus",
    especie: "harmsworthi",
    localidade: "Florianópolis, SC",
    habitat: "Duna costeira",
    pesquisador: "Dr. Pereira",
    instituicao: "UFSC",
    data: "2024-03-05",
  },
  {
    id: 13,
    latitude: -5.7945,
    longitude: -35.211,
    classe: "Heterotardigrada",
    ordem: "Echiniscoidea",
    familia: "Echiniscidae",
    genero: "Pseudechiniscus",
    especie: "facettalis",
    localidade: "Natal, RN",
    habitat: "Musgo de rocha",
    pesquisador: "Dra. Barbosa",
    instituicao: "UFRN",
    data: "2024-02-10",
  },
  {
    id: 14,
    latitude: -16.6869,
    longitude: -49.2648,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Diphascon",
    especie: "pingue",
    localidade: "Goiânia, GO",
    habitat: "Solo agrícola",
    pesquisador: "Prof. Nunes",
    instituicao: "UFG",
    data: "2024-01-18",
  },
  {
    id: 15,
    latitude: -10.9095,
    longitude: -37.0748,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Macrobiotus",
    especie: "occidentalis",
    localidade: "Aracaju, SE",
    habitat: "Mangue",
    pesquisador: "Dra. Campos",
    instituicao: "UFS",
    data: "2024-03-12",
  },
  {
    id: 16,
    latitude: -7.1195,
    longitude: -34.845,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Hypsibius",
    especie: "microps",
    localidade: "João Pessoa, PB",
    habitat: "Bromélias",
    pesquisador: "Dr. Reis",
    instituicao: "UFPB",
    data: "2024-02-22",
  },
  {
    id: 17,
    latitude: -2.5387,
    longitude: -44.2825,
    classe: "Heterotardigrada",
    ordem: "Echiniscoidea",
    familia: "Echiniscidae",
    genero: "Echiniscus",
    especie: "trisetosus",
    localidade: "São Luís, MA",
    habitat: "Lençóis maranhenses",
    pesquisador: "Dra. Teixeira",
    instituicao: "UFMA",
    data: "2024-01-28",
  },
  {
    id: 18,
    latitude: -9.6658,
    longitude: -35.735,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Paramacrobiotus",
    especie: "areolatus",
    localidade: "Maceió, AL",
    habitat: "Coqueirais",
    pesquisador: "Prof. Moreira",
    instituicao: "UFAL",
    data: "2024-03-08",
  },
  {
    id: 19,
    latitude: -5.0892,
    longitude: -42.8019,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Hypsibiidae",
    genero: "Ramazzottius",
    especie: "varieornatus",
    localidade: "Teresina, PI",
    habitat: "Caatinga",
    pesquisador: "Dra. Dias",
    instituicao: "UFPI",
    data: "2024-02-18",
  },
  {
    id: 20,
    latitude: -23.9618,
    longitude: -46.3322,
    classe: "Eutardigrada",
    ordem: "Parachela",
    familia: "Macrobiotidae",
    genero: "Minibiotus",
    especie: "weinerorum",
    localidade: "Santos, SP",
    habitat: "Mata Atlântica",
    pesquisador: "Dr. Andrade",
    instituicao: "UNIFESP",
    data: "2024-03-20",
  },
];

// Variáveis globais
let tardiRecords = [];
let map;
let markersLayer;

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  // Carrega dados do localStorage ou usa dados de exemplo
  const storedData = localStorage.getItem("tardiRecords");
  tardiRecords = storedData ? JSON.parse(storedData) : SAMPLE_DATA;

  // Salva dados de exemplo se não houver nada
  if (!storedData) {
    localStorage.setItem("tardiRecords", JSON.stringify(SAMPLE_DATA));
  }

  initMap();
  populateFilters();
  updateStats();
  renderRecordsTable();
  setupEventListeners();
});

// Inicializa o mapa
function initMap() {
  // Cria o mapa centrado no Brasil
  map = L.map("mapa").setView([-14.235, -51.9253], 4);

  // Adiciona tiles do OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Cria camada de marcadores
  markersLayer = L.layerGroup().addTo(map);

  // Adiciona marcadores iniciais
  addMarkers();
}

// Adiciona marcadores ao mapa
function addMarkers() {
  markersLayer.clearLayers();

  const filteredRecords = getFilteredRecords();

  filteredRecords.forEach((record) => {
    // Define cor do marcador baseado na classe
    const markerColor =
      record.classe === "Eutardigrada" ? "#2e7d32" : "#ff6f00";

    // Cria ícone personalizado
    const markerIcon = L.divIcon({
      html: `<div style="background-color: ${markerColor}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
      className: "custom-marker",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Cria marcador
    const marker = L.marker([record.latitude, record.longitude], {
      icon: markerIcon,
    });

    // Cria popup
    const popupContent = `
      <div style="min-width: 200px;">
        <h4 style="margin: 0 0 8px 0; color: ${markerColor}; font-size: 16px;">
          <i class="fas fa-microscope"></i> ${record.genero} ${
      record.especie || "sp."
    }
        </h4>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Classe:</strong> ${
          record.classe
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Ordem:</strong> ${
          record.ordem
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Família:</strong> ${
          record.familia
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Local:</strong> ${
          record.localidade
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Habitat:</strong> ${
          record.habitat
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Pesquisador:</strong> ${
          record.pesquisador || "N/A"
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Instituição:</strong> ${
          record.instituicao || "N/A"
        }</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Data:</strong> ${formatDate(
          record.data
        )}</p>
      </div>
    `;

    marker.bindPopup(popupContent);
    markersLayer.addLayer(marker);
  });
}

// Popula os filtros
function populateFilters() {
  const grupoFilter = document.getElementById("grupo-filter");
  const ordemFilter = document.getElementById("ordem-filter");
  const generoFilter = document.getElementById("genero-filter");

  // Preenche filtro de Classe
  const classes = [...new Set(tardiRecords.map((r) => r.classe))].sort();
  classes.forEach((classe) => {
    const option = document.createElement("option");
    option.value = classe;
    option.textContent = classe;
    grupoFilter.appendChild(option);
  });

  // Preenche filtro de Ordem
  const ordens = [...new Set(tardiRecords.map((r) => r.ordem))].sort();
  ordens.forEach((ordem) => {
    const option = document.createElement("option");
    option.value = ordem;
    option.textContent = ordem;
    ordemFilter.appendChild(option);
  });

  // Preenche filtro de Gênero
  const generos = [...new Set(tardiRecords.map((r) => r.genero))].sort();
  generos.forEach((genero) => {
    const option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoFilter.appendChild(option);
  });
}

// Filtra registros
function getFilteredRecords() {
  const grupoFilter = document.getElementById("grupo-filter")?.value;
  const ordemFilter = document.getElementById("ordem-filter")?.value;
  const generoFilter = document.getElementById("genero-filter")?.value;

  return tardiRecords.filter((record) => {
    const grupoMatch = !grupoFilter || record.classe === grupoFilter;
    const ordemMatch = !ordemFilter || record.ordem === ordemFilter;
    const generoMatch = !generoFilter || record.genero === generoFilter;
    return grupoMatch && ordemMatch && generoMatch;
  });
}

// Atualiza estatísticas
function updateStats() {
  const filteredRecords = getFilteredRecords();

  const totalRegistros = filteredRecords.length;
  const totalClasses = [...new Set(filteredRecords.map((r) => r.classe))]
    .length;
  const totalOrdens = [...new Set(filteredRecords.map((r) => r.ordem))].length;
  const totalGeneros = [...new Set(filteredRecords.map((r) => r.genero))]
    .length;

  document.getElementById("total-registros").textContent = totalRegistros;
  document.getElementById("total-grupos").textContent = totalClasses;
  document.getElementById("total-ordens").textContent = totalOrdens;
  document.getElementById("total-especies").textContent = totalGeneros;
}

// Renderiza tabela de registros
function renderRecordsTable() {
  const tbody = document.getElementById("records-body");
  const records = getFilteredRecords().sort((a, b) => {
    if (a.ordem !== b.ordem) return a.ordem.localeCompare(b.ordem);
    if (a.genero !== b.genero) return a.genero.localeCompare(b.genero);
    return new Date(b.data) - new Date(a.data);
  });

  tbody.innerHTML = "";

  if (records.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 40px; color: #999;">
          <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
          Nenhum registro encontrado com os filtros selecionados.
        </td>
      </tr>
    `;
    return;
  }

  records.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.classe}</td>
      <td>${record.ordem}</td>
      <td>${record.familia}</td>
      <td><strong>${record.genero}</strong></td>
      <td><em>${record.especie || "sp."}</em></td>
      <td>${record.localidade}</td>
      <td>${record.habitat}</td>
      <td>${record.pesquisador || "N/A"}</td>
      <td>${record.instituicao || "N/A"}</td>
      <td>${formatDate(record.data)}</td>
    `;
    tbody.appendChild(row);
  });
}

// Formata data
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Event Listeners
function setupEventListeners() {
  document
    .getElementById("grupo-filter")
    .addEventListener("change", handleFilterChange);
  document
    .getElementById("ordem-filter")
    .addEventListener("change", handleFilterChange);
  document
    .getElementById("genero-filter")
    .addEventListener("change", handleFilterChange);
  document
    .getElementById("reset-filters")
    .addEventListener("click", resetFilters);
}

function handleFilterChange() {
  updateStats();
  renderRecordsTable();
  addMarkers();
}

function resetFilters() {
  document.getElementById("grupo-filter").value = "";
  document.getElementById("ordem-filter").value = "";
  document.getElementById("genero-filter").value = "";
  handleFilterChange();
}
