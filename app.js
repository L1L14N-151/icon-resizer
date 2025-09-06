const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.prototype.slice.call(document.querySelectorAll(sel));

// Système de traduction
const translations = {
  fr: {
    // Header
    "history": "Historique",
    
    // Drop zone
    "dropZone.title": "Glissez votre image ici",
    "dropZone.subtitle": "ou cliquez pour parcourir • Ctrl+V pour coller",
    "dropZone.formats": "PNG • SVG • JPG • WebP",
    
    // Sections
    "section.chooseFormat": "1. Choisir un format",
    "section.options": "2. Options (facultatif)",
    
    // Presets
    "preset.chrome": "Chrome",
    "preset.firefox": "Firefox",
    "preset.safari": "Safari",
    "preset.favicon": "Favicon",
    "preset.android": "Android",
    "preset.ios": "iOS",
    "preset.macos": "macOS",
    "preset.windows": "Windows",
    "preset.custom": "Custom",
    "preset.sizes": "tailles",
    
    // Custom templates
    "templates.title": "Mes templates",
    "templates.new": "+ Nouveau",
    "customSizes.label": "Tailles personnalisées (en pixels)",
    "customSizes.placeholder": "Ex: 16, 32, 48, 128, 256",
    "customSizes.hint": "Séparez les tailles par des virgules",
    "selectedFormat": "Format sélectionné :",
    
    // Options
    "background.label": "Arrière-plan",
    "background.transparent": "Transparent",
    "background.color": "Couleur",
    "sizes.label": "Tailles incluses",
    
    // Actions
    "generate": "Générer les icônes",
    "save": "Sauvegarder",
    "downloadZip": "Télécharger ZIP",
    "download.formats": "Formats à inclure",
    "download.confirm": "Télécharger",
    
    // Results
    "results.title": "Icônes générées",
    
    // Modal
    "modal.title": "Créer un template personnalisé",
    "modal.templateName": "Nom du template",
    "modal.templateNamePlaceholder": "Mon template",
    "modal.sizes": "Tailles (en pixels)",
    "modal.sizesPlaceholder": "16, 32, 48, 128, 256",
    "modal.suggestedSizes": "Tailles suggérées",
    "modal.small": "Petites (16-48)",
    "modal.medium": "Moyennes (64-256)",
    "modal.large": "Grandes (512-1024)",
    "modal.allSizes": "Toutes tailles",
    "modal.cancel": "Annuler",
    "modal.save": "Sauvegarder",
    
    // Status messages
    "status.generating": "Génération en cours...",
    "status.success": "✓ Icônes générées avec succès !",
    "status.error": "Erreur lors de la génération",
    "status.noImage": "Veuillez d'abord sélectionner une image",
    "status.invalidSizes": "Veuillez entrer des tailles valides",
    
    // History page
    "history.title": "Historique des générations",
    "history.clear": "Effacer tout",
    "history.empty": "Aucun historique",
    "history.delete": "Supprimer",
    "history.back": "Retour",
    "history.confirmClear": "Êtes-vous sûr de vouloir effacer tout l'historique ?",
    "history.confirmDelete": "Supprimer cet élément de l'historique ?",
    
    // File support
    "support.folder": "💡 Votre navigateur supporte l'enregistrement direct dans un dossier",
    "support.noFolder": "Votre navigateur ne supporte pas l'enregistrement direct"
  },
  
  en: {
    // Header
    "history": "History",
    
    // Drop zone
    "dropZone.title": "Drop your image here",
    "dropZone.subtitle": "or click to browse • Ctrl+V to paste",
    "dropZone.formats": "PNG • SVG • JPG • WebP",
    
    // Sections
    "section.chooseFormat": "1. Choose a format",
    "section.options": "2. Options (optional)",
    
    // Presets
    "preset.chrome": "Chrome",
    "preset.firefox": "Firefox",
    "preset.safari": "Safari",
    "preset.favicon": "Favicon",
    "preset.android": "Android",
    "preset.ios": "iOS",
    "preset.macos": "macOS",
    "preset.windows": "Windows",
    "preset.custom": "Custom",
    "preset.sizes": "sizes",
    
    // Custom templates
    "templates.title": "My templates",
    "templates.new": "+ New",
    "customSizes.label": "Custom sizes (in pixels)",
    "customSizes.placeholder": "Ex: 16, 32, 48, 128, 256",
    "customSizes.hint": "Separate sizes with commas",
    "selectedFormat": "Selected format:",
    
    // Options
    "background.label": "Background",
    "background.transparent": "Transparent",
    "background.color": "Color",
    "sizes.label": "Included sizes",
    
    // Actions
    "generate": "Generate icons",
    "save": "Save",
    "downloadZip": "Download ZIP",
    "download.formats": "Formats to include",
    "download.confirm": "Download",
    
    // Results
    "results.title": "Generated icons",
    
    // Modal
    "modal.title": "Create custom template",
    "modal.templateName": "Template name",
    "modal.templateNamePlaceholder": "My template",
    "modal.sizes": "Sizes (in pixels)",
    "modal.sizesPlaceholder": "16, 32, 48, 128, 256",
    "modal.suggestedSizes": "Suggested sizes",
    "modal.small": "Small (16-48)",
    "modal.medium": "Medium (64-256)",
    "modal.large": "Large (512-1024)",
    "modal.allSizes": "All sizes",
    "modal.cancel": "Cancel",
    "modal.save": "Save",
    
    // Status messages
    "status.generating": "Generating...",
    "status.success": "✓ Icons generated successfully!",
    "status.error": "Error during generation",
    "status.noImage": "Please select an image first",
    "status.invalidSizes": "Please enter valid sizes",
    
    // History page
    "history.title": "Generation history",
    "history.clear": "Clear all",
    "history.empty": "No history",
    "history.delete": "Delete",
    "history.back": "Back",
    "history.confirmClear": "Are you sure you want to clear all history?",
    "history.confirmDelete": "Delete this item from history?",
    
    // File support
    "support.folder": "💡 Your browser supports direct folder saving",
    "support.noFolder": "Your browser doesn't support direct saving"
  }
};

let currentLanguage = localStorage.getItem('iconResizerLanguage') || 'fr';

// Fonction de traduction
function t(key) {
  return translations[currentLanguage][key] || translations['fr'][key] || key;
}

// Fonction pour changer de langue
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('iconResizerLanguage', lang);
  updateUILanguage();
}

// Mettre à jour tous les textes de l'interface
function updateUILanguage() {
  // Mettre à jour les éléments avec data-i18n
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  // Mettre à jour les attributs title et placeholder
  $$('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });
  
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  
  // Mettre à jour le bouton de langue
  const langToggle = $('#langToggle');
  if (langToggle) {
    const flags = langToggle.querySelectorAll('.lang-flag');
    flags.forEach(flag => {
      if (flag.dataset.lang === currentLanguage) {
        flag.classList.remove('hidden');
      } else {
        flag.classList.add('hidden');
      }
    });
  }
  
  // Mettre à jour les tailles des presets
  $$('.preset-sizes').forEach(el => {
    const count = el.dataset.count || el.textContent.match(/\d+/)?.[0];
    if (count) {
      el.textContent = `${count} ${t('preset.sizes')}`;
    }
  });
}

const defaultPresets = {
  chrome: {
    label: "Chrome Extension",
    // Tailles officielles pour Chrome Web Store et manifest.json
    sizes: [16, 32, 48, 128],
    name: (n) => `icon${n}.png`,
  },
  firefox: {
    label: "Firefox Add-on",
    // Tailles officielles pour Firefox Add-ons
    sizes: [16, 32, 48, 64, 96, 128],
    name: (n) => `icon-${n}.png`,
  },
  safari: {
    label: "Safari Extension",
    // Tailles officielles pour Safari Web Extensions
    sizes: [16, 32, 64, 128, 256, 512, 1024],
    name: (n) => `icon-${n}.png`,
  },
  favicon: {
    label: "Favicon",
    // Tailles standard pour favicon.ico et navigateurs modernes
    sizes: [16, 32, 48, 64, 96, 180],
    name: (n) => n === 180 ? `apple-touch-icon.png` : `favicon-${n}.png`,
  },
  pwa: {
    label: "Android / Play Store",
    // Tailles officielles pour Google Play Store et Android
    sizes: [72, 96, 128, 144, 152, 192, 384, 512],
    name: (n) => `android-chrome-${n}x${n}.png`,
  },
  ios: {
    label: "iOS App",
    // Tailles officielles pour iOS App Store et Xcode
    sizes: [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024],
    name: (n) => `icon-${n}.png`,
  },
  macos: {
    label: "macOS App",
    // Explicit entries to satisfy Apple's required naming pairs
    entries: [
      { size: 16, name: "icon_16x16.png" },
      { size: 32, name: "icon_16x16@2x.png" },
      { size: 32, name: "icon_32x32.png" },
      { size: 64, name: "icon_32x32@2x.png" },
      { size: 128, name: "icon_128x128.png" },
      { size: 256, name: "icon_128x128@2x.png" },
      { size: 256, name: "icon_256x256.png" },
      { size: 512, name: "icon_256x256@2x.png" },
      { size: 512, name: "icon_512x512.png" },
      { size: 1024, name: "icon_512x512@2x.png" },
    ],
  },
  windows: {
    label: "Windows",
    // Tailles recommandées pour Windows Store et applications
    sizes: [16, 24, 32, 48, 256],
    name: (n) => `icon-${n}.png`,
  },
};

// Clone presets pour permettre les modifications
const presets = {...defaultPresets};

// Restaurer les fonctions name
Object.keys(presets).forEach(key => {
  if (defaultPresets[key].name) {
    presets[key].name = defaultPresets[key].name;
  }
  // Copier les entries si présentes
  if (defaultPresets[key].entries) {
    presets[key].entries = [...defaultPresets[key].entries];
  }
});

const fileInput = $("#fileInput");
let currentPreset = 'chrome';
const customWrap = $("#customSizesWrap");
const customSizes = $("#customSizes");
const customTemplatesSection = $("#customTemplatesSection");
const customTemplatesList = $("#customTemplatesList");
const optionsToggle = $("#optionsToggle");
const optionsContent = $("#optionsContent");
const bgHexInput = $("#bgHex");
const sizesCustomization = $("#sizesCustomization");
const sizesList = $("#sizesList");
const addSizeBtn = $("#addSize");
const removeFileBtn = $("#removeFile");
const fileNameSpan = $("#fileName");
const fileInfoDiv = $("#fileInfo");
const dropZone = $("#dropZone");
const uploadLabel = $(".upload-label");
const resultsSection = $("#resultsSection");
const exportActions = $("#exportActions");
const alphaValue = $("#alphaValue");
const genBtn = $("#generate");
const saveFolderBtn = $("#saveFolder");
const downloadZipBtn = $("#downloadZip");
const downloadZipConfirmBtn = $("#downloadZipConfirm");
const downloadOptions = $("#downloadOptions");
const svgOptionEl = $("#svgOption");
const folderSupport = $("#folderSupport");
const outputs = $("#outputs");
const statusEl = $("#status");
// cropper removed
const bgControls = document.querySelector("#bgControls");
const bgColorInput = document.querySelector("#bgColor");
const bgAlphaInput = document.querySelector("#bgAlpha");

// Template modal elements
const createTemplateBtn = $("#createTemplate");
const templateModal = $("#templateModal");
const closeModalBtn = $("#closeModal");
const cancelTemplateBtn = $("#cancelTemplate");
const saveTemplateBtn = $("#saveTemplate");
const templateNameInput = $("#templateName");
const templateSizesInput = $("#templateSizes");
const modalBackdrop = $(".modal-backdrop");

let imageBitmap = null;
let originalName = "icon";
let hasGenerated = false;
let originalSVGContent = null;
let isSVGFile = false;
//

const supportsFS = "showDirectoryPicker" in window;
folderSupport.textContent = supportsFS ? "Sauvegarde directe de multiples fichiers prise en charge." : "Votre navigateur peut bloquer les téléchargements multiples.";
if (!supportsFS) saveFolderBtn.classList.add("hidden");

let currentPresetSizes = [];
let addSizeInputShown = false;

// Gestion des boutons de preset
document.querySelectorAll('.preset-card').forEach(card => {
  card.addEventListener('click', () => {
    // Retirer la classe active de tous les boutons
    document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.template-item').forEach(t => t.classList.remove('active'));
    
    // Activer le bouton cliqué
    card.classList.add('active');
    currentPreset = card.dataset.preset;
    
    // Réinitialiser les tailles activées lors du changement de preset
    enabledSizes.clear();
    
    // Mettre à jour l'affichage
    const presetName = card.querySelector('.preset-name').textContent;
    
    // Gérer l'affichage des sections
    if (currentPreset === 'custom') {
      customWrap.classList.remove('hidden');
      sizesCustomization.classList.add('hidden');
      // Afficher les templates personnalisés
      if (Object.keys(customTemplates).length > 0) {
        customTemplatesSection.classList.remove('hidden');
      }
    } else {
      customWrap.classList.add('hidden');
      customTemplatesSection.classList.add('hidden');
      sizesCustomization.classList.remove('hidden');
      updatePresetEditor();
    }
  });
});

// Toggle options panel
if (optionsToggle) {
  optionsToggle.addEventListener('click', () => {
    const section = optionsToggle.closest('.config-section');
    section.classList.toggle('collapsed');
  });
}

// Background toggle buttons
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const bgType = btn.dataset.bg;
    if (bgType === 'color') {
      bgControls.classList.remove('hidden');
    } else {
      bgControls.classList.add('hidden');
    }
    
    // Mettre à jour les radio buttons (pour compatibilité)
    const radio = document.querySelector(`input[name="bg"][value="${bgType}"]`);
    if (radio) radio.checked = true;
  });
});

// Sync color picker with hex input
if (bgColorInput && bgHexInput) {
  bgColorInput.addEventListener('input', () => {
    bgHexInput.value = bgColorInput.value;
  });
  
  bgHexInput.addEventListener('input', () => {
    if (/^#[0-9A-F]{6}$/i.test(bgHexInput.value)) {
      bgColorInput.value = bgHexInput.value;
    }
  });
}

function updatePresetEditor() {
  const presetKey = currentPreset;
  if (presetKey === "custom") return;
  
  const preset = presets[presetKey];
  // Pour macOS, extraire les tailles uniques des entries
  if (preset && preset.entries) {
    const uniqueSizes = [...new Set(preset.entries.map(e => e.size))].sort((a, b) => a - b);
    currentPresetSizes = uniqueSizes;
  } else if (preset) {
    currentPresetSizes = [...preset.sizes];
  }
  
  renderSizesList();
}

// Stocker les tailles activées/désactivées
let enabledSizes = new Set();

function renderSizesList() {
  sizesList.innerHTML = '';
  
  // Si c'est la première fois, activer toutes les tailles par défaut
  if (enabledSizes.size === 0 && currentPresetSizes.length > 0) {
    currentPresetSizes.forEach(size => enabledSizes.add(size));
  }
  
  currentPresetSizes.forEach((size, index) => {
    const sizeButton = document.createElement('button');
    sizeButton.className = 'size-button';
    sizeButton.type = 'button';
    
    // Ajouter ou retirer la classe active selon l'état
    if (enabledSizes.has(size)) {
      sizeButton.classList.add('active');
    }
    
    sizeButton.textContent = `${size}px`;
    
    sizeButton.addEventListener('click', () => {
      if (enabledSizes.has(size)) {
        enabledSizes.delete(size);
        sizeButton.classList.remove('active');
      } else {
        enabledSizes.add(size);
        sizeButton.classList.add('active');
      }
    });
    
    sizesList.appendChild(sizeButton);
  });
}

function addSize(size) {
  currentPresetSizes.push(size);
  currentPresetSizes.sort((a, b) => a - b);
  addSizeInputShown = false;
  renderSizesList();
}

function removeSize(index) {
  currentPresetSizes.splice(index, 1);
  renderSizesList();
}





// Remove file button
if (removeFileBtn) {
  removeFileBtn.addEventListener("click", () => {
    fileInput.value = '';
    imageBitmap = null;
    originalSVGContent = null;
    isSVGFile = false;
    hasGenerated = false;
    
    dropZone.classList.remove('has-file');
    uploadLabel.classList.remove('hidden');
    fileInfoDiv.classList.add('hidden');
    resultsSection.classList.add('hidden');
    exportActions.classList.add('hidden');
    outputs.innerHTML = '';
    
    genBtn.disabled = true;
    if (svgOptionEl) svgOptionEl.classList.add('hidden');
  });
}

// Initialiser l'interface avec Chrome sélectionné par défaut
document.querySelector('.preset-card[data-preset="chrome"]').classList.add('active');
updatePresetEditor();

// no manual cropper toggle

// Toggle background color controls
$$('input[name="bg"]').forEach(function(radio){
  radio.addEventListener('change', function(){
    const isColor = getBackground().type === 'color';
    if (bgControls) {
      if (isColor) bgControls.classList.remove('hidden');
      else bgControls.classList.add('hidden');
    }
  });
});

// Update alpha value display
if (bgAlphaInput) {
  bgAlphaInput.addEventListener('input', function() {
    if (alphaValue) alphaValue.textContent = this.value + '%';
  });
}

// Drag and Drop support
if (dropZone) {
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  
  dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      fileInput.dispatchEvent(new Event('change'));
    }
  });
}

// Paste support (Ctrl+V / Cmd+V)
document.addEventListener('paste', async (e) => {
  e.preventDefault();
  
  // Récupérer les éléments du presse-papier
  const items = e.clipboardData?.items;
  if (!items) return;
  
  // Chercher une image dans le presse-papier
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile();
      if (file) {
        // Créer un nom de fichier basé sur le timestamp
        const fileName = `pasted-image-${Date.now()}.${file.type.split('/')[1]}`;
        
        // Créer un nouveau File avec un nom
        const newFile = new File([file], fileName, { type: file.type });
        
        // Créer une DataTransfer pour simuler un file input
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(newFile);
        fileInput.files = dataTransfer.files;
        
        // Déclencher l'événement change
        fileInput.dispatchEvent(new Event('change'));
        
        // Afficher un message de confirmation
        setStatus("Image collée avec succès", false);
        break;
      }
    }
  }
});


fileInput.addEventListener("change", async (e) => {
  const file = (e.target.files && e.target.files[0]) || null;
  if (!file) return;
  try {
    originalName = (file.name || "icon").replace(/\.[^.]+$/, "") || "icon";
    setStatus("Décodage de l'image…");
    
    // Sauvegarder l'URL de l'image pour l'historique
    imageDataUrl = URL.createObjectURL(file);
    
    // Vérifier si c'est un SVG
    isSVGFile = file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg');
    
    if (isSVGFile) {
      // Lire le contenu SVG original
      originalSVGContent = await file.text();
      if (svgOptionEl) svgOptionEl.classList.remove('hidden');
    } else {
      originalSVGContent = null;
      if (svgOptionEl) svgOptionEl.classList.add('hidden');
    }
    
    imageBitmap = await readImage(file);
    clearStatus();
    
    // Update UI
    fileNameSpan.textContent = file.name;
    dropZone.classList.add('has-file');
    uploadLabel.classList.add('hidden');
    fileInfoDiv.classList.remove('hidden');
    
    genBtn.disabled = false;
    saveFolderBtn.disabled = true;
    downloadZipBtn.disabled = true;
    hasGenerated = false;
    outputs.innerHTML = "";
    resultsSection.classList.add('hidden');
    exportActions.classList.add('hidden');
  } catch (err) {
    setStatus("Impossible de lire l'image — essaye PNG/JPG/SVG.", true);
    console.error(err);
  }
});

async function onGenerate() {
  if (!imageBitmap) {
    setStatus("Charge d'abord une image.", true);
    return;
  }
  const preset = getCurrentPreset();
  const explicit = preset.entries || null;
  let sizes = preset.sizes || [];
  
  // Filtrer les tailles pour n'inclure que celles qui sont activées
  if (!explicit && sizes.length > 0) {
    sizes = sizes.filter(size => enabledSizes.has(size));
    if (sizes.length === 0) {
      setStatus("Veuillez sélectionner au moins une taille.", true);
      return;
    }
  }
  
  if (!explicit && !sizes.length) {
    setStatus("Aucune taille définie.", true);
    return;
  }
  outputs.innerHTML = "";
  const mode = getSelectedFit();
  const bg = getBackground();
  const items = explicit || sizes.map(function (s) { return { size: s, name: nameFor(preset.name, s) }; });
  const PREVIEW_MAX = 256; // accélère l'aperçu pour les grandes tailles
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    const size = item.size;
    const previewSize = Math.min(size, PREVIEW_MAX);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = previewSize;
    const ctx = canvas.getContext("2d");
    
    // Appliquer le fond AVANT de dessiner l'image pour l'aperçu
    if (bg && bg.type === 'color') {
      ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
      ctx.fillRect(0, 0, previewSize, previewSize);
    } else {
      ctx.clearRect(0, 0, previewSize, previewSize);
    }
    
    drawFitted(ctx, imageBitmap, previewSize, previewSize, mode, bg);

    const card = document.createElement("div");
    card.className = "card";
    const header = document.createElement("header");
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = String(size);
    label.title = (item.name || nameFor(preset.name, size));
    header.appendChild(label);
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    thumb.appendChild(canvas);
    card.appendChild(header);
    card.appendChild(thumb);
    outputs.appendChild(card);
    // Laisse souffler l'UI entre éléments
    await new Promise(requestAnimationFrame);
  }
  
  // Activer les boutons de téléchargement après génération
  hasGenerated = true;
  saveFolderBtn.disabled = false;
  downloadZipBtn.disabled = false;
  
  // Show results and export actions
  resultsSection.classList.remove('hidden');
  exportActions.classList.remove('hidden');
  
  // Sauvegarder dans l'historique
  saveToHistory();
}
genBtn.addEventListener("click", onGenerate);
window.__gen = onGenerate; // petit filet de sécurité si addEventListener échoue

async function onSaveFolder() {
  if (!supportsFS || !imageBitmap) return;
  if (!hasGenerated) {
    setStatus("Génère d'abord les icônes.", true);
    return;
  }
  const preset = getCurrentPreset();
  const handle = await window.showDirectoryPicker();

  // For macOS iconset, suggest creating "icon.iconset" folder
  let target = handle;
  if (currentPreset === "macos") {
    target = await ensureSubdir(handle, "icon.iconset");
  }

  const explicit = preset.entries || null;
  const items = explicit || (preset.sizes || []).map(function (s) { return { size: s, name: nameFor(preset.name, s) }; });

  setStatus("Sauvegarde en cours...");
  
  // Créer des sous-dossiers pour organiser
  const pngFolder = await ensureSubdir(handle, "png");
  const webpFolder = await ensureSubdir(handle, "webp");
  
  for (var i = 0; i < items.length; i++) {
    const size = items[i].size;
    const baseName = (items[i].name || nameFor(preset.name, size)).replace(/\.png$/, '');
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    const mode = getSelectedFit();
    const bg = getBackground();
    
    // Appliquer le fond AVANT de dessiner l'image
    if (bg && bg.type === 'color') {
      ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
      ctx.fillRect(0, 0, size, size);
    } else {
      ctx.clearRect(0, 0, size, size);
    }
    
    drawFitted(ctx, imageBitmap, size, size, mode, bg);
    
    // PNG - toujours généré
    let fileHandle = await pngFolder.getFileHandle(baseName + '.png', { create: true });
    let ws = await fileHandle.createWritable();
    let blob = await canvasToBlob(canvas, 'png');
    await ws.write(blob);
    await ws.close();
    
    // WebP - toujours généré
    fileHandle = await webpFolder.getFileHandle(baseName + '.webp', { create: true });
    ws = await fileHandle.createWritable();
    blob = await canvasToBlob(canvas, 'webp');
    await ws.write(blob);
    await ws.close();
    
    if (i % 2 === 0) await new Promise(requestAnimationFrame);
  }
  
  // Créer un seul favicon.ico multi-tailles (16, 32, 48, 64px)
  const faviconSizes = [16, 32, 48, 64];
  const faviconCanvases = [];
  const bg = getBackground();
  for (const size of faviconSizes) {
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    
    // Appliquer le fond AVANT de dessiner l'image
    if (bg && bg.type === 'color') {
      ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
      ctx.fillRect(0, 0, size, size);
    } else {
      ctx.clearRect(0, 0, size, size);
    }
    
    drawFitted(ctx, imageBitmap, size, size, getSelectedFit(), bg);
    faviconCanvases.push(c);
  }
  const fileHandle = await handle.getFileHandle('favicon.ico', { create: true });
  const ws = await fileHandle.createWritable();
  const blob = createICO(faviconCanvases);
  await ws.write(blob);
  await ws.close();
  
  clearStatus();
  setStatus("Fichiers sauvegardés dans des dossiers organisés !", false);
  setTimeout(clearStatus, 3000);
  
  if (currentPreset === "macos") {
    alert("Dossier icon.iconset créé. Sur macOS: iconutil -c icns icon.iconset");
  }
}
saveFolderBtn.addEventListener("click", onSaveFolder);
window.__saveFolder = onSaveFolder;

// Gestion du dropdown pour les options de téléchargement
downloadZipBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  downloadOptions.classList.toggle('hidden');
});

// Fermer le dropdown en cliquant ailleurs
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown-container')) {
    downloadOptions.classList.add('hidden');
  }
});

if (downloadZipConfirmBtn) {
  downloadZipConfirmBtn.addEventListener("click", () => {
    downloadOptions.classList.add('hidden');
    onDownloadZip();
  });
}
window.__zip = onDownloadZip;



function getCurrentPreset() {
  if (currentPreset === "custom") {
    var parts = (customSizes.value || "").split(",");
    var sizes = [];
    for (var i = 0; i < parts.length; i++) {
      var n = parseInt(parts[i].trim(), 10);
      if (isFinite(n) && n > 0) sizes.push(n);
    }
    return { sizes: sizes, name: function (n) { return originalName + "-" + n + ".png"; } };
  }
  
  // Vérifier si c'est un template personnalisé
  if (currentPreset && currentPreset.startsWith('template_')) {
    const templateId = currentPreset.replace('template_', '');
    const template = customTemplates[templateId];
    if (template) {
      return { sizes: template.sizes, name: function(n) { return originalName + "-" + n + ".png"; } };
    }
  }
  
  const p = presets[currentPreset];
  if (!p) return { sizes: [], name: function(n) { return originalName + "-" + n + ".png"; } };
  
  // Pour macOS, on garde toujours toutes les entries (nécessaires pour l'iconset)
  if (p.entries) {
    return { entries: p.entries };
  }
  
  // Utiliser les tailles du preset
  return { sizes: p.sizes, name: p.name };
}

function nameFor(namer, size) {
  var n = namer && namer(size);
  return n || (originalName + "-" + size + ".png");
}

async function readImage(file) {
  // Try ImageBitmap first
  try {
    if ("createImageBitmap" in window) {
      const bmp = await createImageBitmap(file);
      if (bmp && bmp.width && bmp.height) return bmp;
    }
  } catch (e) {
    // fall through to HTMLImageElement
  }
  // Fallback: decode via HTMLImageElement
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    // Convert HTMLImageElement to ImageBitmap if supported for better drawImage perf
    if ("createImageBitmap" in window) {
      try { return await createImageBitmap(img); } catch (e) { /* ignore */ }
    }
    return img; // canvas accepts either ImageBitmap or HTMLImageElement
  } finally {
    // Keep URL alive until after decode
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }
}

function drawFitted(ctx, src, w, h, mode = "contain", bg) {
  const sw = src.width, sh = src.height;
  const sAspect = sw / sh;
  const dAspect = w / h;
  let dw = w, dh = h, dx = 0, dy = 0;
  // Fill background if requested (else keep transparency)
  if (bg && bg.type === 'color') {
    ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
    ctx.fillRect(0, 0, w, h);
  } else {
    ctx.clearRect(0, 0, w, h);
  }
  if (mode === "contain") {
    if (sAspect > dAspect) {
      dw = w; dh = Math.round(w / sAspect); dy = Math.floor((h - dh) / 2);
    } else {
      dh = h; dw = Math.round(h * sAspect); dx = Math.floor((w - dw) / 2);
    }
    ctx.imageSmoothingEnabled = true;
    try { ctx.imageSmoothingQuality = "high"; } catch (e) {}
    ctx.drawImage(src, dx, dy, dw, dh);
  }
}

function getSelectedFormat() {
  // On génère toujours PNG + WebP + ICO (si applicable)
  return 'all';
}

function getQuality() {
  // Qualité fixe optimale pour WebP
  return 0.85;
}

async function canvasToBlob(canvas, format = null, quality = null) {
  const selectedFormat = format || getSelectedFormat();
  const q = quality !== null ? quality : getQuality();
  
  if (selectedFormat === 'webp') {
    return new Promise((resolve) => canvas.toBlob(resolve, "image/webp", q));
  } else if (selectedFormat === 'jpeg' || selectedFormat === 'jpg') {
    return new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", q));
  } else {
    // PNG doesn't use quality parameter
    return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  }
}

// Fonction pour créer un ICO à partir de plusieurs tailles
function createICO(canvases) {
  // ICO header
  const sizes = canvases.map(c => c.width);
  const images = [];
  let offset = 6 + (16 * canvases.length); // Header + directory
  
  for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases[i];
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const png = canvasToPNGArrayBuffer(canvas);
    
    images.push({
      width: canvas.width,
      height: canvas.height,
      data: png,
      offset: offset
    });
    
    offset += png.byteLength;
  }
  
  // Create ICO file
  const totalSize = offset;
  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);
  
  // ICO header
  view.setUint16(0, 0, true); // Reserved
  view.setUint16(2, 1, true); // Type (1 = ICO)
  view.setUint16(4, canvases.length, true); // Number of images
  
  // Directory entries
  let dirOffset = 6;
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    view.setUint8(dirOffset, img.width < 256 ? img.width : 0); // Width
    view.setUint8(dirOffset + 1, img.height < 256 ? img.height : 0); // Height
    view.setUint8(dirOffset + 2, 0); // Color palette
    view.setUint8(dirOffset + 3, 0); // Reserved
    view.setUint16(dirOffset + 4, 1, true); // Color planes
    view.setUint16(dirOffset + 6, 32, true); // Bits per pixel
    view.setUint32(dirOffset + 8, img.data.byteLength, true); // Size
    view.setUint32(dirOffset + 12, img.offset, true); // Offset
    dirOffset += 16;
  }
  
  // Image data
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const uint8 = new Uint8Array(img.data);
    const target = new Uint8Array(buffer, img.offset, img.data.byteLength);
    target.set(uint8);
  }
  
  return new Blob([buffer], { type: 'image/x-icon' });
}

function canvasToPNGArrayBuffer(canvas) {
  // Simple PNG encoding - this is a placeholder
  // In production, you'd want to use a proper PNG encoder
  const ctx = canvas.getContext('2d');
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // For now, we'll use a data URL conversion as a workaround
  const dataURL = canvas.toDataURL('image/png');
  const base64 = dataURL.split(',')[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  
  return bytes.buffer;
}

async function downloadCanvas(canvas, fileName) {
  const format = getSelectedFormat();
  let blob;
  let finalName = fileName;
  
  // Adjust file extension based on format
  if (format === 'webp') {
    finalName = fileName.replace(/\.png$/, '.webp');
    blob = await canvasToBlob(canvas, 'webp');
  } else if (format === 'ico' && canvas.width <= 256) {
    finalName = fileName.replace(/\.png$/, '.ico');
    blob = createICO([canvas]);
  } else if (format === 'all') {
    // Download multiple formats
    const baseName = fileName.replace(/\.png$/, '');
    
    // PNG
    blob = await canvasToBlob(canvas, 'png');
    downloadFile(blob, baseName + '.png');
    
    // WebP
    blob = await canvasToBlob(canvas, 'webp');
    downloadFile(blob, baseName + '.webp');
    
    // ICO if size is appropriate
    if (canvas.width <= 256) {
      blob = createICO([canvas]);
      downloadFile(blob, baseName + '.ico');
    }
    return;
  } else {
    blob = await canvasToBlob(canvas, 'png');
  }
  
  downloadFile(blob, finalName);
}

function downloadFile(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; 
  a.download = fileName;
  document.body.appendChild(a); 
  a.click(); 
  a.remove();
  URL.revokeObjectURL(url);
}

async function ensureSubdir(dirHandle, name) {
  return dirHandle.getDirectoryHandle(name, { create: true });
}

function loadImage(url) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () { resolve(img); };
    img.onerror = function (e) { reject(e); };
    img.src = url;
  });
}

function rgbaFromHex(hex, alpha) {
  var h = (hex || '').replace('#','');
  if (h.length === 3) { h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2]; }
  var r = parseInt(h.slice(0,2), 16) || 0;
  var g = parseInt(h.slice(2,4), 16) || 0;
  var b = parseInt(h.slice(4,6), 16) || 0;
  var a = (typeof alpha === 'number') ? alpha : 1;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function getSelectedFit() { return 'contain'; }

function getBackground() {
  const radios = $$('input[name="bg"]');
  var val = 'transparent';
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) val = radios[i].value; }
  if (val === 'color') {
    var color = (bgColorInput && bgColorInput.value) || '#000000';
    var alpha = (bgAlphaInput && parseInt(bgAlphaInput.value, 10) / 100);
    if (!isFinite(alpha)) alpha = 1;
    if (alpha < 0) alpha = 0; if (alpha > 1) alpha = 1;
    return { type: 'color', color: color, alpha: alpha };
  }
  return { type: 'transparent' };
}

function setStatus(msg, isError) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.classList.remove("hidden", "success", "error", "info");
  if (isError) {
    statusEl.classList.add("error");
  } else {
    statusEl.classList.add("info");
  }
}

function clearStatus() {
  if (!statusEl) return;
  statusEl.textContent = "";
  statusEl.classList.add("hidden");
  statusEl.classList.remove("error", "success", "info");
}

// cropper logic removed for a clean, simple resizer

async function onDownloadZip() {
  if (!imageBitmap) { setStatus("Charge d'abord une image.", true); return; }
  if (!hasGenerated) {
    setStatus("Génère d'abord les icônes.", true);
    return;
  }
  
  // Vérifier les formats sélectionnés
  const includePNG = $("#includePNG").checked;
  const includeWebP = $("#includeWebP").checked;
  const includeICO = $("#includeICO").checked;
  const includeSVG = $("#includeSVG").checked;
  
  if (!includePNG && !includeWebP && !includeICO && !includeSVG) {
    setStatus("Sélectionnez au moins un format.", true);
    return;
  }
  
  setStatus("Préparation du ZIP…");
  const preset = getCurrentPreset();
  const explicit = preset.entries || null;
  const items = explicit || (preset.sizes || []).map(function (s) { return { size: s, name: nameFor(preset.name, s) }; });
  const mode = getSelectedFit();
  const bg = getBackground();
  const files = [];
  
  for (var i = 0; i < items.length; i++) {
    const it = items[i];
    const c = document.createElement("canvas");
    c.width = c.height = it.size;
    const ctx = c.getContext("2d");
    
    // Appliquer le fond AVANT de dessiner l'image
    if (bg && bg.type === 'color') {
      ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
      ctx.fillRect(0, 0, it.size, it.size);
    } else {
      ctx.clearRect(0, 0, it.size, it.size);
    }
    
    drawFitted(ctx, imageBitmap, it.size, it.size, mode, bg);
    
    const baseName = (it.name || nameFor(preset.name, it.size)).replace(/\.png$/, '');
    const baseFolder = currentPreset === "macos" ? "icon.iconset/" : "";
    
    // PNG - si sélectionné (dans dossier PNG/)
    if (includePNG) {
      let blob = await canvasToBlob(c, 'png');
      let bytes = new Uint8Array(await blob.arrayBuffer());
      files.push({ name: (baseFolder || "PNG/") + baseName + '.png', data: bytes });
    }
    
    // WebP - si sélectionné (dans dossier WebP/)
    if (includeWebP) {
      let blob = await canvasToBlob(c, 'webp');
      let bytes = new Uint8Array(await blob.arrayBuffer());
      files.push({ name: (baseFolder || "WebP/") + baseName + '.webp', data: bytes });
    }
    
    if (i % 2 === 0) await new Promise(requestAnimationFrame);
  }
  
  // Ajouter favicon.ico si sélectionné (dans dossier ICO/)
  if (includeICO) {
    const faviconSizes = [16, 32, 48, 64];
    const faviconCanvases = [];
    for (const size of faviconSizes) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      
      // Appliquer le fond AVANT de dessiner l'image
      if (bg && bg.type === 'color') {
        ctx.fillStyle = rgbaFromHex(bg.color, bg.alpha);
        ctx.fillRect(0, 0, size, size);
      } else {
        ctx.clearRect(0, 0, size, size);
      }
      
      drawFitted(ctx, imageBitmap, size, size, mode, bg);
      faviconCanvases.push(c);
    }
    const faviconBlob = createICO(faviconCanvases);
    const faviconBytes = new Uint8Array(await faviconBlob.arrayBuffer());
    files.push({ name: "ICO/favicon.ico", data: faviconBytes });
  }
  
  // Ajouter le SVG original si sélectionné et disponible (dans dossier SVG/)
  if (includeSVG && originalSVGContent && isSVGFile) {
    const svgBytes = new TextEncoder().encode(originalSVGContent);
    files.push({ name: "SVG/" + originalName + ".svg", data: svgBytes });
  }
  
  if (files.length === 0) {
    setStatus("Aucun fichier à télécharger.", true);
    return;
  }
  
  const zipBlob = makeZip(files);
  clearStatus();
  const a = document.createElement("a");
  const zipName = (originalName || "icons") + ".zip";
  a.href = URL.createObjectURL(zipBlob);
  a.download = zipName;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// Minimal ZIP (store) generator
function makeZip(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const centrals = [];
  let offset = 0;
  for (let i = 0; i < files.length; i++) {
    const nameBytes = encoder.encode(files[i].name);
    const data = files[i].data;
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const dv = new DataView(local.buffer);
    dv.setUint32(0, 0x04034b50, true); // local header sig
    dv.setUint16(4, 20, true); // version
    dv.setUint16(6, 0, true); // flags
    dv.setUint16(8, 0, true); // method: store
    dv.setUint16(10, 0, true); // time
    dv.setUint16(12, 0, true); // date
    dv.setUint32(14, crc >>> 0, true);
    dv.setUint32(18, data.length, true);
    dv.setUint32(22, data.length, true);
    dv.setUint16(26, nameBytes.length, true);
    dv.setUint16(28, 0, true); // extra len
    local.set(nameBytes, 30);
    chunks.push(local);
    chunks.push(data);
    const localOffset = offset;
    offset += local.length + data.length;

    const central = new Uint8Array(46 + nameBytes.length);
    const dv2 = new DataView(central.buffer);
    dv2.setUint32(0, 0x02014b50, true); // central sig
    dv2.setUint16(4, 20, true); // version made
    dv2.setUint16(6, 20, true); // version needed
    dv2.setUint16(8, 0, true); // flags
    dv2.setUint16(10, 0, true); // method
    dv2.setUint16(12, 0, true); // time
    dv2.setUint16(14, 0, true); // date
    dv2.setUint32(16, crc >>> 0, true);
    dv2.setUint32(20, data.length, true);
    dv2.setUint32(24, data.length, true);
    dv2.setUint16(28, nameBytes.length, true);
    dv2.setUint16(30, 0, true); // extra
    dv2.setUint16(32, 0, true); // comment
    dv2.setUint16(34, 0, true); // disk start
    dv2.setUint16(36, 0, true); // int attr
    dv2.setUint32(38, 0, true); // ext attr
    dv2.setUint32(42, localOffset, true);
    central.set(nameBytes, 46);
    centrals.push(central);
  }
  const centralSize = centrals.reduce((n, c) => n + c.length, 0);
  const centralOffset = offset;
  for (let i = 0; i < centrals.length; i++) chunks.push(centrals[i]);
  offset += centralSize;
  const end = new Uint8Array(22);
  const dv3 = new DataView(end.buffer);
  dv3.setUint32(0, 0x06054b50, true);
  dv3.setUint16(4, 0, true); // disk
  dv3.setUint16(6, 0, true); // disk
  dv3.setUint16(8, files.length, true);
  dv3.setUint16(10, files.length, true);
  dv3.setUint32(12, centralSize, true);
  dv3.setUint32(16, centralOffset, true);
  dv3.setUint16(20, 0, true); // comment len
  chunks.push(end);
  const total = chunks.reduce((n, c) => n + c.length, 0);
  const out = new Uint8Array(total);
  let p = 0;
  for (let i = 0; i < chunks.length; i++) { out.set(chunks[i], p); p += chunks[i].length; }
  return new Blob([out], { type: 'application/zip' });
}

// CRC32 (IEEE 802.3)
const CRC_TABLE = (function(){
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c >>> 0;
  }
  return t;
})();
function crc32(u8) {
  let c = 0 ^ (-1);
  for (let i = 0; i < u8.length; i++) c = (c >>> 8) ^ CRC_TABLE[(c ^ u8[i]) & 0xFF];
  return (c ^ (-1)) >>> 0;
}

// ============================================
// HISTORY MANAGEMENT
// ============================================
let generationHistory = [];
const MAX_HISTORY = 15;

// Charger l'historique depuis localStorage
function loadHistory() {
  const saved = localStorage.getItem('iconResizerHistory');
  if (saved) {
    try {
      generationHistory = JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lors du chargement de l\'historique:', e);
    }
  }
}

// Sauvegarder l'historique dans localStorage
function saveHistoryToStorage() {
  localStorage.setItem('iconResizerHistory', JSON.stringify(generationHistory));
}

// Ajouter une génération à l'historique
function saveToHistory() {
  const preset = getCurrentPreset();
  const sizes = preset.sizes || [];
  const entries = preset.entries || [];
  
  // Créer une miniature à partir du premier canvas
  const firstCanvas = outputs.querySelector('canvas');
  let thumbnail = '';
  if (firstCanvas) {
    // Créer une version réduite pour la miniature
    const thumbCanvas = document.createElement('canvas');
    thumbCanvas.width = 48;
    thumbCanvas.height = 48;
    const ctx = thumbCanvas.getContext('2d');
    ctx.drawImage(firstCanvas, 0, 0, 48, 48);
    thumbnail = thumbCanvas.toDataURL('image/png');
  }
  
  // Obtenir le nom du preset actuel
  let presetName = 'Custom';
  if (currentPreset && presets[currentPreset]) {
    presetName = presets[currentPreset].label || currentPreset;
  } else if (currentPreset && currentPreset.startsWith('template_')) {
    const templateId = currentPreset.replace('template_', '');
    if (customTemplates[templateId]) {
      presetName = customTemplates[templateId].label;
    }
  }
  
  const historyItem = {
    id: Date.now(),
    name: originalName || 'icon',
    date: new Date().toISOString(),
    preset: presetName,
    sizes: entries.length > 0 ? entries.map(e => e.size) : sizes.filter(size => enabledSizes.has(size)),
    thumbnail: thumbnail,
    imageData: imageBitmap ? imageDataUrl : null,
    isSVG: isSVGFile,
    svgContent: originalSVGContent
  };
  
  // Ajouter au début et limiter à MAX_HISTORY
  generationHistory.unshift(historyItem);
  if (generationHistory.length > MAX_HISTORY) {
    generationHistory = generationHistory.slice(0, MAX_HISTORY);
  }
  
  saveHistoryToStorage();
}



// Variable pour stocker l'URL de l'image
let imageDataUrl = null;

// Charger l'historique au démarrage
loadHistory();

// ============================================
// CUSTOM TEMPLATES MANAGEMENT
// ============================================
let customTemplates = {};

// Charger les templates personnalisés depuis localStorage
function loadCustomTemplates() {
  const saved = localStorage.getItem('iconResizerTemplates');
  if (saved) {
    try {
      customTemplates = JSON.parse(saved);
      
      // Ajouter les templates dans l'objet presets
      Object.keys(customTemplates).forEach(id => {
        const template = customTemplates[id];
        presets[`template_${id}`] = {
          label: template.label,
          sizes: template.sizes,
          name: function(n) { return originalName + "-" + n + ".png"; }
        };
      });
      
      renderCustomTemplates();
    } catch (e) {
      console.error('Erreur lors du chargement des templates:', e);
    }
  }
}

// Sauvegarder les templates dans localStorage
function saveCustomTemplates() {
  localStorage.setItem('iconResizerTemplates', JSON.stringify(customTemplates));
}

// Afficher les templates personnalisés
function renderCustomTemplates() {
  if (!customTemplatesList) return;
  
  // Vider la liste
  customTemplatesList.innerHTML = '';
  
  // Afficher ou cacher la section
  if (Object.keys(customTemplates).length === 0) {
    if (customTemplatesSection) customTemplatesSection.classList.add('hidden');
    return;
  }
  
  // Ajouter chaque template
  Object.keys(customTemplates).forEach(key => {
    const template = customTemplates[key];
    const templateItem = document.createElement('div');
    templateItem.className = 'template-item';
    templateItem.dataset.templateId = key;
    
    templateItem.innerHTML = `
      <div class="template-info">
        <span class="template-name">${template.label}</span>
        <span class="template-sizes-count">${template.sizes.length} tailles</span>
      </div>
      <button type="button" class="template-delete" title="Supprimer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    `;
    
    // Clic sur le template pour le sélectionner
    templateItem.addEventListener('click', (e) => {
      if (!e.target.closest('.template-delete')) {
        // Désactiver tous les autres
        document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.template-item').forEach(t => t.classList.remove('active'));
        
        // Activer celui-ci
        templateItem.classList.add('active');
        currentPreset = `template_${key}`;
        
        // Masquer les options personnalisées
        if (customWrap) customWrap.classList.add('hidden');
        if (sizesCustomization) sizesCustomization.classList.remove('hidden');
        
        // Charger les tailles du template
        currentPresetSizes = [...template.sizes];
        renderSizesList();
      }
    });
    
    // Bouton de suppression
    const deleteBtn = templateItem.querySelector('.template-delete');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Supprimer le template "${template.label}" ?`)) {
        delete customTemplates[key];
        saveCustomTemplates();
        renderCustomTemplates();
        
        // Si c'était le template sélectionné, revenir à Chrome
        if (currentPreset === `template_${key}`) {
          const chromeCard = document.querySelector('.preset-card[data-preset="chrome"]');
          if (chromeCard) chromeCard.click();
        }
      }
    });
    
    customTemplatesList.appendChild(templateItem);
  });
  
  // Afficher la section si on est en mode custom
  if (currentPreset === 'custom' && customTemplatesSection) {
    customTemplatesSection.classList.remove('hidden');
  }
}

// Ouvrir le modal de création
if (createTemplateBtn) {
  createTemplateBtn.addEventListener('click', () => {
    templateModal.classList.remove('hidden');
    templateNameInput.value = '';
    templateSizesInput.value = '';
    templateNameInput.focus();
  });
}

// Fermer le modal
function closeTemplateModal() {
  templateModal.classList.add('hidden');
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeTemplateModal);
}

if (cancelTemplateBtn) {
  cancelTemplateBtn.addEventListener('click', closeTemplateModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeTemplateModal);
}

// Suggestions de tailles
document.querySelectorAll('.size-suggestion').forEach(btn => {
  btn.addEventListener('click', (e) => {
    templateSizesInput.value = e.target.dataset.sizes;
  });
});

// Sauvegarder le template
if (saveTemplateBtn) {
  saveTemplateBtn.addEventListener('click', () => {
    const name = templateNameInput.value.trim();
    const sizesText = templateSizesInput.value.trim();
    
    if (!name) {
      alert('Veuillez entrer un nom pour le template');
      return;
    }
    
    if (!sizesText) {
      alert('Veuillez entrer au moins une taille');
      return;
    }
    
    // Parser les tailles
    const sizes = sizesText.split(',').map(s => parseInt(s.trim(), 10)).filter(s => s > 0);
    
    if (sizes.length === 0) {
      alert('Veuillez entrer des tailles valides');
      return;
    }
    
    // Créer un ID unique
    const id = 'custom_' + Date.now();
    
    // Ajouter le template
    customTemplates[id] = {
      label: name,
      sizes: sizes,
      name: function(n) { return originalName + "-" + n + ".png"; }
    };
    
    // Ajouter aussi dans l'objet presets pour qu'il soit utilisable
    presets[`template_${id}`] = customTemplates[id];
    
    // Sauvegarder et afficher
    saveCustomTemplates();
    renderCustomTemplates();
    
    // Sélectionner le nouveau template
    currentPreset = `template_${id}`;
    
    // Désactiver tous les boutons
    document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.template-item').forEach(t => t.classList.remove('active'));
    
    // Activer le nouveau template après re-render
    renderCustomTemplates();
    setTimeout(() => {
      const newTemplateItem = document.querySelector(`.template-item[data-template-id="${id}"]`);
      if (newTemplateItem) {
        newTemplateItem.classList.add('active');
      }
    }, 50);
    
    // Masquer les options personnalisées et charger les tailles
    if (customWrap) customWrap.classList.add('hidden');
    if (sizesCustomization) sizesCustomization.classList.remove('hidden');
    currentPresetSizes = [...sizes];
    renderSizesList();
    
    // Fermer le modal
    closeTemplateModal();
  });
}


// Charger les templates au démarrage
loadCustomTemplates();

// Système de thème
function initTheme() {
  const savedTheme = localStorage.getItem('iconResizerTheme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Utiliser le thème sauvegardé, sinon utiliser la préférence système
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(theme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('iconResizerTheme', theme);
  
  // Mettre à jour les icônes
  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    const icons = themeToggle.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      if (icon.dataset.theme === theme) {
        icon.classList.add('hidden');
      } else {
        icon.classList.remove('hidden');
      }
    });
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Initialiser le système de langue et thème
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le thème
  initTheme();
  
  // Charger la langue sauvegardée
  updateUILanguage();
  
  // Gestionnaire du bouton de changement de thème
  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Gestionnaire du bouton de changement de langue
  const langToggle = $('#langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
      setLanguage(newLang);
    });
  }
});
