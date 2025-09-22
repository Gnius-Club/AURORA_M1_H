// A.U.R.O.R.A. Mission 1 - Advanced IDE JavaScript

class AuroraIDE {
    constructor() {
        this.currentModule = null;
        this.completedModules = new Set();
        this.currentTutorialStep = 1;
        this.audioContext = null;
        this.timerInterval = null;
        this.startTime = 0;
        this.feedbackTimeout = null;
        
        // Tutorial data - (sin cambios)
        this.tutorialSteps = [
            {
                step: 1,
                title: "Bienvenido/a, Ingeniero/a Senior",
                description: "La corrupción ha alcanzado el núcleo lógico de A.U.R.O.R.A. Tu misión es auditar 6 módulos en busca de errores sutiles de lógica, estado y sintaxis.",
                icon: "👨‍💻"
            },
            {
                step: 2,
                title: "Explorador de Archivos Avanzado",
                description: "Tu acceso ha sido ampliado. Navega por la estructura de archivos del sistema para seleccionar un módulo.",
                icon: "📁"
            },
            {
                step: 3,
                title: "Entorno de Desarrollo Profesional",
                description: "Este es tu entorno de desarrollo. Nota el resaltado de sintaxis avanzado y la capacidad de navegación mejorada.",
                icon: "💻"
            },
            {
                step: 4,
                title: "¡ALERTA DE CÓDIGO COMENTADO!",
                description: "¡CUIDADO! Un simple '//' puede desactivar una línea de código vital. Si ves un comando importante en gris, podría ser un error. Bórralo para reactivarlo.",
                icon: "⚠️"
            },
            {
                step: 5,
                title: "Documentación y Consola Avanzada",
                description: "Tu documentación ahora incluye detalles sobre operadores lógicos. La nueva consola de salida mostrará mensajes y errores en tiempo real.",
                icon: "📚"
            },
            {
                step: 6,
                title: "Interfaz Responsiva",
                description: "En dispositivos móviles, la documentación y la consola se ubicarán en la parte inferior para optimizar el espacio.",
                icon: "📱"
            },
            {
                step: 7,
                title: "Iniciar Auditoría",
                description: "¡Todo listo! Comienza tu auditoría de código profesional.",
                icon: "🚀"
            }
        ];

        // Module data - REESCRITO CON CÓDIGO MÁS LARGO Y DIFÍCIL
        this.modules = {
             energia: {
                id: "energia",
                name: "Modulo_GestionDeEnergia.js",
                icon: "⚡",
                corruptCode: `// Protocolo de distribución de energía v4.2
function gestionarCicloEnergia(datosSensor, modoOperacion) {
  // Constantes de operación
  const CAPACIDAD_MAXIMA = 5000;
  const NIVEL_CRITICO = 1000;
  const UMBRAL_PANELES = 2500;
  const CONSUMO_BASE = 50;

  let consumoActual = datosSensor.consumo + CONSUMO_BASE;
  let nivelBateria = datosSensor.bateria;
  let estadoSistema = "Estable";
  let solarPanelStatus = "Inactivo";

  function logPowerState(estado, nivel) {
    let logMsg = "Estado: " + estado + " // Nivel Batería: " + nivel;
    console.log(logMsg)
  }

  // Activa paneles si es necesario y si no están ya activos
  if (nivelBateria <= UMBRAL_PANELES && solarPanelStatus = "Inactivo") {
    console.log("Activando paneles solares por bajo nivel.");
    // activarPanelesSolares();
    solarPanelStatus = "Activo";
  }

  // Lógica de balanceo de carga según el modo
  if (modoOperacion == "Combate") {
    consumoActual *= 2.5; // El modo combate consume mucho más
  } else if (modoOperacion == "Sigilo") {
    // balancearCargaSigilo();
  }

  // Lógica de distribución principal
  if (consumoActual > nivelBateria); {
    estadoSistema = "Déficit Energético";
    // Redireccionar energía de sistemas no críticos
    redigirEnergia(consumoActual, nivelBateria);
  } else if (nivelBateria >= CAPACIDAD_MAXIMA) {
    console.log("Batería llena, desactivando carga.");
    if (solarPanelStatus == "Activo") {
      desactivarPanelesSolares()
    }
  }

  logPowerState(estadoSistema, nivelBateria);
  return estadoSistema
`,
                correctCode: `// Protocolo de distribución de energía v4.2
function gestionarCicloEnergia(datosSensor, modoOperacion) {
  // Constantes de operación
  const CAPACIDAD_MAXIMA = 5000;
  const NIVEL_CRITICO = 1000;
  const UMBRAL_PANELES = 2500;
  const CONSUMO_BASE = 50;

  let consumoActual = datosSensor.consumo + CONSUMO_BASE;
  let nivelBateria = datosSensor.bateria;
  let estadoSistema = "Estable";
  let solarPanelStatus = "Inactivo";

  function logPowerState(estado, nivel) {
    let logMsg = "Estado: " + estado + " // Nivel Batería: " + nivel;
    console.log(logMsg);
  }

  // Activa paneles si es necesario y si no están ya activos
  if (nivelBateria <= UMBRAL_PANELES && solarPanelStatus == "Inactivo") {
    console.log("Activando paneles solares por bajo nivel.");
    activarPanelesSolares();
    solarPanelStatus = "Activo";
  }

  // Lógica de balanceo de carga según el modo
  if (modoOperacion == "Combate") {
    consumoActual *= 2.5; // El modo combate consume mucho más
  } else if (modoOperacion == "Sigilo") {
    balancearCargaSigilo();
  }

  // Lógica de distribución principal
  if (consumoActual > nivelBateria) {
    estadoSistema = "Déficit Energético";
    // Redireccionar energía de sistemas no críticos
    redigirEnergia(consumoActual, nivelBateria);
  } else if (nivelBateria >= CAPACIDAD_MAXIMA) {
    console.log("Batería llena, desactivando carga.");
    if (solarPanelStatus == "Activo") {
      desactivarPanelesSolares();
    }
  }

  logPowerState(estadoSistema, nivelBateria);
  return estadoSistema;
}`,
            },
            navegacion: {
                id: "navegacion",
                name: "Modulo_NavegacionAvanzada.js",
                icon: "🗺️",
                corruptCode: `// Sistema de Navegación Inercial Asistida v2.3
function calcularVectorDeRuta(coordenadas, threatLevel) {
  let velocidadCrucero = 1500;
  let navigationStatus = "Calculando...";
  const VELOCIDAD_WARP = 9500;

  // Función anidada para calcular consumo de combustible
  function estimarConsumo(distancia, velocidad) {
    let factor = velocidad > 2000 ? 1.5 : 1.1;
    let consumoEstimado = (distancia / velocidad) * factor
    // return consumoEstimado;
  }
  
  function plotEvasiveManeuver(threat) {
    console.log("Amenaza de nivel " + threat + " detectada. Maniobra evasiva...")
    // return "Ruta evasiva trazada";
  }

  // Ajuste de velocidad para rutas largas o peligrosas
  if (coordenadas.distanciaTotal > 100000 || threatLevel > 75%) {
    navigationStatus = "Ruta Larga/Peligrosa";
    velocidadCrucero = VELOCIDAD_WARP;
  }

  let tiempoEstimado = coordenadas.distanciaTotal / velocidadCrucero;
  let consumoFinal = estimarConsumo(coordenadas.distanciaTotal, velocidadCrucero);
  let maniobra = null

  if (coordenadas.hayObstaculos == true) {
    console.log("¡ALERTA! recalculando por obstáculos.";
    maniobra = plotEvasiveManeuver(threatLevel)
  }
  
  if (navigationStatus = "Calculando...") {
    navigationStatus = "Ruta Estándar Calculada";
  }

  console.log("Cálculo de vector finalizado."
  return {
    velocidad: velocidadCrucero,
    tiempo: tiempoEstimado
    consumo: consumoFinal,
    maniobra: maniobra,
    estado: navigationStatus
  };
}`,
                correctCode: `// Sistema de Navegación Inercial Asistida v2.3
function calcularVectorDeRuta(coordenadas, threatLevel) {
  let velocidadCrucero = 1500;
  let navigationStatus = "Calculando...";
  const VELOCIDAD_WARP = 9500;

  // Función anidada para calcular consumo de combustible
  function estimarConsumo(distancia, velocidad) {
    let factor = velocidad > 2000 ? 1.5 : 1.1;
    let consumoEstimado = (distancia / velocidad) * factor;
    return consumoEstimado;
  }
  
  function plotEvasiveManeuver(threat) {
    console.log("Amenaza de nivel " + threat + " detectada. Maniobra evasiva...");
    return "Ruta evasiva trazada";
  }

  // Ajuste de velocidad para rutas largas o peligrosas
  if (coordenadas.distanciaTotal > 100000 || threatLevel > 75) {
    navigationStatus = "Ruta Larga/Peligrosa";
    velocidadCrucero = VELOCIDAD_WARP;
  }

  let tiempoEstimado = coordenadas.distanciaTotal / velocidadCrucero;
  let consumoFinal = estimarConsumo(coordenadas.distanciaTotal, velocidadCrucero);
  let maniobra = null;

  if (coordenadas.hayObstaculos == true) {
    console.log("¡ALERTA! recalculando por obstáculos.");
    maniobra = plotEvasiveManeuver(threatLevel);
  }
  
  if (navigationStatus == "Calculando...") {
    navigationStatus = "Ruta Estándar Calculada";
  }

  console.log("Cálculo de vector finalizado.");
  return {
    velocidad: velocidadCrucero,
    tiempo: tiempoEstimado,
    consumo: consumoFinal,
    maniobra: maniobra,
    estado: navigationStatus
  };
}`,
            },
            comunicaciones: {
                id: "comunicaciones",
                name: "Modulo_Comunicaciones.js",
                icon: "🛰️",
                corruptCode: `// Protocolo de Transmisión de Datos Cuánticos v3.0
function procesarYEnviarPaquete(datos, prioridad) {
  const POTENCIA_MINIMA = 75;
  const TASA_ENCRIPTACION = 128;
  let transmissionLog = [];

  function encriptar(data, tasa) {
    if (!data) { return null; }
    // Simulación de encriptación
    return "ENC_" + data.substring(0, 10);
  }

  function checkSignalIntegrity(potencia) {
    // Si la potencia es muy alta, puede haber interferencia
    if (potencia > 150) {
      return "FAIL";
    }
    return "OK";
  }
  
  let paqueteEncriptado = encriptar(datos.mensaje, TASA_ENCRIPTACION);
  let potenciaTransmision = datos.potencia;
  
  if (prioridad == "URGENTE") {
    potenciaTransmision *= 1.5
  }

  // Verificación de la potencia
  if (potenciaTransmision < POTENCIA_MINIMA); {
    potenciaTransmision = POTENCIA_MINIMA;
  }

  let integrity = checkSignalIntegrity(potenciaTransmision);
  if (integrity = "FAIL") {
    transmissionLog.push("Integridad Fallida. Abortando.");
    // retransmitirPaquete(paqueteEncriptado);
  } else {
    // Transmitir el paquete de datos
    transmitirPaquete(paqueteEncriptado, potenciaTransmision)
    transmissionLog.push("Paquete transmitido con éxito.")
  }

  return transmissionLog
}`,
                correctCode: `// Protocolo de Transmisión de Datos Cuánticos v3.0
function procesarYEnviarPaquete(datos, prioridad) {
  const POTENCIA_MINIMA = 75;
  const TASA_ENCRIPTACION = 128;
  let transmissionLog = [];

  function encriptar(data, tasa) {
    if (!data) { return null; }
    // Simulación de encriptación
    return "ENC_" + data.substring(0, 10);
  }

  function checkSignalIntegrity(potencia) {
    // Si la potencia es muy alta, puede haber interferencia
    if (potencia > 150) {
      return "FAIL";
    }
    return "OK";
  }
  
  let paqueteEncriptado = encriptar(datos.mensaje, TASA_ENCRIPTACION);
  let potenciaTransmision = datos.potencia;
  
  if (prioridad == "URGENTE") {
    potenciaTransmision *= 1.5;
  }

  // Verificación de la potencia
  if (potenciaTransmision < POTENCIA_MINIMA) {
    potenciaTransmision = POTENCIA_MINIMA;
  }

  let integrity = checkSignalIntegrity(potenciaTransmision);
  if (integrity == "FAIL") {
    transmissionLog.push("Integridad Fallida. Abortando.");
    retransmitirPaquete(paqueteEncriptado);
  } else {
    // Transmitir el paquete de datos
    transmitirPaquete(paqueteEncriptado, potenciaTransmision);
    transmissionLog.push("Paquete transmitido con éxito.");
  }

  return transmissionLog;
}`,
            },
            diagnostico: {
                id: "diagnostico",
                name: "Modulo_Diagnostico.js",
                icon: "🩺",
                corruptCode: `// Sistema de Autodiagnóstico y Mantenimiento Predictivo v2.1
function ejecutarDiagnosticoProfundo() {
  const TEMP_MAXIMA_CPU = 85;
  const PRESION_MINIMA_CABINA = 90;
  const HULL_INTEGRITY_MIN = 99;

  let informe = {
    cpu: { temp: 92, estado: "OK" },
    cabina: { presion: 88, estado: "OK" },
    casco: { integridad: 98, estado: "OK" },
    general: "Sin Novedad",
  };

  // Verificación de temperatura del núcleo
  if (informe.cpu.temp > TEMP_MAXIMA_CPU) {
    informe.cpu.estado = "Sobrecalentamiento Crítico";
    // activarSistemaRefrigeracionForzada();
  }

  // Verificación de presión y casco
  if (informe.cabina.presion < PRESION_MINIMA_CABINA) {
    informe.cabina.estado = "Despresurización";
    sellarCompuertas()
  } else if (informe.casco.integridad < HULL_INTEGRITY_MIN%) {
    informe.casco.estado = "Microfisuras Detectadas";
    // activarReparadoresNano();
  }
  
  let alertasActivas = 0;
  if (informe.cpu.estado !== "OK") { alertasActivas++; }
  if (informe.cabina.estado !== "OK") { alertasActivas++; }
  if (informe.casco.estado == "OK") { 
    // No hacer nada si el casco está bien
  } else {
    alertasActivas++
  }

  // Generación del informe final
  if (alertasActivas > 1) {
    informe.general = "¡ALERTA MÚLTIPLE DETECTADA!";
    // activarProtocoloEmergencia(
  } else if (alertasActivas = 1) {
    informe.general = "Alerta Única Detectada. Revisar sistema.";
  }

  return informe;
`,
                correctCode: `// Sistema de Autodiagnóstico y Mantenimiento Predictivo v2.1
function ejecutarDiagnosticoProfundo() {
  const TEMP_MAXIMA_CPU = 85;
  const PRESION_MINIMA_CABINA = 90;
  const HULL_INTEGRITY_MIN = 99;

  let informe = {
    cpu: { temp: 92, estado: "OK" },
    cabina: { presion: 88, estado: "OK" },
    casco: { integridad: 98, estado: "OK" },
    general: "Sin Novedad",
  };

  // Verificación de temperatura del núcleo
  if (informe.cpu.temp > TEMP_MAXIMA_CPU) {
    informe.cpu.estado = "Sobrecalentamiento Crítico";
    activarSistemaRefrigeracionForzada();
  }

  // Verificación de presión y casco
  if (informe.cabina.presion < PRESION_MINIMA_CABINA) {
    informe.cabina.estado = "Despresurización";
    sellarCompuertas();
  } else if (informe.casco.integridad < HULL_INTEGRITY_MIN) {
    informe.casco.estado = "Microfisuras Detectadas";
    activarReparadoresNano();
  }
  
  let alertasActivas = 0;
  if (informe.cpu.estado !== "OK") { alertasActivas++; }
  if (informe.cabina.estado !== "OK") { alertasActivas++; }
  if (informe.casco.estado == "OK") { 
    // No hacer nada si el casco está bien
  } else {
    alertasActivas++;
  }

  // Generación del informe final
  if (alertasActivas > 1) {
    informe.general = "¡ALERTA MÚLTIPLE DETECTADA!";
    activarProtocoloEmergencia();
  } else if (alertasActivas == 1) {
    informe.general = "Alerta Única Detectada. Revisar sistema.";
  }

  return informe;
}`,
            },
            seguridad: {
                id: "seguridad",
                name: "Modulo_Seguridad.js",
                icon: "🔒",
                corruptCode: `// Protocolo de Escudos Deflectores y Contramedidas v3.5
function gestionarAmenazas(datosRadar) {
  const DISTANCIA_CRITICA = 1000;
  const DISTANCIA_MAX_ARMAS = 5000;
  
  let amenaza = datosRadar.getAmenazaMasCercana();
  let estadoEscudos = "Inactivo";
  let accionOfensiva = "Ninguna"

  function priorizarBlanco(amenazaDetectada) {
    if (amenazaDetectada.velocidad > 2000) {
      // return amenazaDetectada.id;
    }
    return amenazaDetectada.id;
  }
  
  if (amenaza) {
    let blancoPrioritario = priorizarBlanco(amenaza);
    
    // Lógica de activación de escudos
    if (amenaza.distancia < DISTANCIA_CRITICA); {
      estadoEscudos = "¡ESCUDOS AL MÁXIMO!";
      activarEscudos(100)
    }

    // Lógica ofensiva
    if (amenaza.distancia < DISTANCIA_MAX_ARMAS && blancoPrioritario) {
      accionOfensiva = "Blanco Fijado";
      if (amenaza.tipo == "caza") {
        // armarCanonesLaser(blancoPrioritario);
      } else {
        console.log("Blanco no hostil, no se activan armas.");
      }
    }
  } else {
    estadoEscudos == "Sin amenazas en el sector"
    console.log(estadoEscudos);
  }
  
  console.log("Estado de seguridad: " + estadoEscudos + " / Acción: " + accionOfensiva)
  return { escudos: estadoEscudos, ofensiva: accionOfensiva };
}`,
                correctCode: `// Protocolo de Escudos Deflectores y Contramedidas v3.5
function gestionarAmenazas(datosRadar) {
  const DISTANCIA_CRITICA = 1000;
  const DISTANCIA_MAX_ARMAS = 5000;
  
  let amenaza = datosRadar.getAmenazaMasCercana();
  let estadoEscudos = "Inactivo";
  let accionOfensiva = "Ninguna";

  function priorizarBlanco(amenazaDetectada) {
    if (amenazaDetectada.velocidad > 2000) {
      return amenazaDetectada.id;
    }
    return amenazaDetectada.id;
  }
  
  if (amenaza) {
    let blancoPrioritario = priorizarBlanco(amenaza);
    
    // Lógica de activación de escudos
    if (amenaza.distancia < DISTANCIA_CRITICA) {
      estadoEscudos = "¡ESCUDOS AL MÁXIMO!";
      activarEscudos(100);
    }

    // Lógica ofensiva
    if (amenaza.distancia < DISTANCIA_MAX_ARMAS && blancoPrioritario) {
      accionOfensiva = "Blanco Fijado";
      if (amenaza.tipo == "caza") {
        armarCanonesLaser(blancoPrioritario);
      } else {
        console.log("Blanco no hostil, no se activan armas.");
      }
    }
  } else {
    estadoEscudos = "Sin amenazas en el sector";
    console.log(estadoEscudos);
  }
  
  console.log("Estado de seguridad: " + estadoEscudos + " / Acción: " + accionOfensiva);
  return { escudos: estadoEscudos, ofensiva: accionOfensiva };
}`,
            },
            recoleccion: {
                id: "recoleccion",
                name: "Modulo_Recoleccion.js",
                icon: "🗿",
                corruptCode: `// Sistema Automatizado de Recolección y Análisis de Muestras v2.8
function procesarMuestra(muestra)
  
  const UMBRAL_CALIDAD = 95;
  const CONTAMINACION_MAX = 2; // en %

  let decision = "Rechazada";
  let necesitaEsterilizacion = false;
  
  function esTipoValido(tipo) {
    const TIPOS_VALIDOS = ['hielo', 'mineral', 'organico'];
    return TIPOS_VALIDOS.includes(tipo);
  }

  function esterilizar(muestraAProcesar) {
    console.log("Esterilizando muestra " + muestraAProcesar.id);
    // return true;
  }

  console.log("Analizando muestra tipo: " + muestra.tipo);

  if (esTipoValido(muestra.tipo)) {
    // Análisis de contaminación
    if (muestra.contaminacion > CONTAMINACION_MAX%) {
      necesitaEsterilizacion = true
    }
    
    if (necesitaEsterilizacion = true) {
      esterilizar(muestra)
    }

    // Análisis de calidad solo para tipos válidos
    if (muestra.calidad > UMBRAL_CALIDAD) {
      decision = "Aceptada para Almacenamiento";
      almacenarMuestraEnBodega(muestra);
    } else {
      decision = "Rechazada por baja calidad";
    }
  } else {
    decision = "Rechazada por tipo inválido"
  }
  
  registrarDecision(muestra.id, decision);
  return decision;
}`,
                correctCode: `// Sistema Automatizado de Recolección y Análisis de Muestras v2.8
function procesarMuestra(muestra) {
  
  const UMBRAL_CALIDAD = 95;
  const CONTAMINACION_MAX = 2; // en %

  let decision = "Rechazada";
  let necesitaEsterilizacion = false;
  
  function esTipoValido(tipo) {
    const TIPOS_VALIDOS = ['hielo', 'mineral', 'organico'];
    return TIPOS_VALIDOS.includes(tipo);
  }

  function esterilizar(muestraAProcesar) {
    console.log("Esterilizando muestra " + muestraAProcesar.id);
    return true;
  }

  console.log("Analizando muestra tipo: " + muestra.tipo);

  if (esTipoValido(muestra.tipo)) {
    // Análisis de contaminación
    if (muestra.contaminacion > CONTAMINACION_MAX) {
      necesitaEsterilizacion = true;
    }
    
    if (necesitaEsterilizacion == true) {
      esterilizar(muestra);
    }

    // Análisis de calidad solo para tipos válidos
    if (muestra.calidad > UMBRAL_CALIDAD) {
      decision = "Aceptada para Almacenamiento";
      almacenarMuestraEnBodega(muestra);
    } else {
      decision = "Rechazada por baja calidad";
    }
  } else {
    decision = "Rechazada por tipo inválido";
  }
  
  registrarDecision(muestra.id, decision);
  return decision;
}`,
            }
        };

        this.initAudio();
        this.initTutorial();
        this.bindEvents();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    playSound(frequency, duration = 200, type = 'sine') {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration / 1000);
    }

    playUISound() { this.playSound(800, 150); }
    playTypingSound() { this.playSound(400, 100); }
    playSuccessSound() {
        [523, 659, 784].forEach((freq, i) => {
            setTimeout(() => this.playSound(freq, 300), i * 100);
        });
    }
    playErrorSound() { this.playSound(200, 500, 'sawtooth'); }
    
    showFeedback(message, type) {
        const feedbackBar = document.getElementById('feedback-bar');
        if (!feedbackBar) return;

        clearTimeout(this.feedbackTimeout);

        feedbackBar.textContent = message;
        feedbackBar.className = `feedback-bar ${type}`;
        
        feedbackBar.classList.remove('hidden');

        this.feedbackTimeout = setTimeout(() => {
            feedbackBar.classList.add('hidden');
        }, 3000);
    }
    
    initTutorial() {
        this.updateTutorialStep(1);
    }

    updateTutorialStep(step) {
        const stepData = this.tutorialSteps[step - 1];
        if (!stepData) return;

        document.getElementById('currentStep').textContent = step;
        document.getElementById('tutorialTitle').textContent = stepData.title;
        document.getElementById('tutorialIcon').textContent = stepData.icon;
        document.getElementById('tutorialText').textContent = stepData.description;

        const prevBtn = document.getElementById('tutorialPrev');
        const nextBtn = document.getElementById('tutorialNext');
        const startBtn = document.getElementById('tutorialStart');

        prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
        
        if (step === 7) {
            nextBtn.classList.add('hidden');
            startBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            startBtn.classList.add('hidden');
        }

        this.currentTutorialStep = step;
    }

    bindEvents() {
        document.getElementById('tutorialPrev').addEventListener('click', () => {
            this.playUISound();
            if (this.currentTutorialStep > 1) this.updateTutorialStep(this.currentTutorialStep - 1);
        });

        document.getElementById('tutorialNext').addEventListener('click', () => {
            this.playUISound();
            if (this.currentTutorialStep < 7) this.updateTutorialStep(this.currentTutorialStep + 1);
        });

        document.getElementById('tutorialStart').addEventListener('click', () => {
            this.playUISound();
            this.startMission();
        });

        document.querySelectorAll('.file-item').forEach(item => {
            item.addEventListener('click', () => {
                this.playUISound();
                this.loadModule(item.dataset.module);
            });
        });

        document.getElementById('compileBtn').addEventListener('click', () => {
            this.playUISound();
            this.compileCode();
        });

        document.getElementById('resetBtn').addEventListener('click', () => {
            this.playUISound();
            this.resetModule();
        });

        const codeArea = document.getElementById('codeArea');
        let typingTimeout;
        codeArea.addEventListener('input', () => {
            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(() => this.playTypingSound(), 50);
            this.updateLineNumbers();
        });

        document.getElementById('copyPasswordBtn').addEventListener('click', () => {
            this.playUISound();
            this.copyPassword();
        });

        document.getElementById('returnToTerminal').addEventListener('click', () => {
            this.playUISound();
            this.returnToTerminal();
        });
    }

    startMission() {
        document.getElementById('tutorialModal').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        const timerElement = document.getElementById('missionTimer');
        if (!timerElement) return;
        const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
        const seconds = (elapsedTime % 60).toString().padStart(2, '0');
        timerElement.textContent = `${minutes}:${seconds}`;
    }

    loadModule(moduleId) {
        const module = this.modules[moduleId];
        if (!module) return;

        document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));
        document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');

        this.currentModule = moduleId;
        document.getElementById('currentFileName').textContent = module.name;
        document.getElementById('codeArea').value = module.corruptCode;
        
        document.getElementById('compileBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;

        this.updateLineNumbers();
    }

    updateLineNumbers() {
        const codeArea = document.getElementById('codeArea');
        const lineNumbers = document.getElementById('lineNumbers');
        const lines = codeArea.value.split('\n').length;
        let lineNumbersHTML = '';
        for (let i = 1; i <= lines; i++) {
            lineNumbersHTML += `<div class="line-number">${i}</div>`;
        }
        lineNumbers.innerHTML = lineNumbersHTML;
    }

    compileCode() {
        if (!this.currentModule) return;

        const currentCode = document.getElementById('codeArea').value.trim();
        const module = this.modules[this.currentModule];
        const correctCode = module.correctCode.trim();

        setTimeout(() => {
            if (this.normalizeCode(currentCode) === this.normalizeCode(correctCode)) {
                this.playSuccessSound();
                this.showFeedback('✅ ¡COMPILACIÓN EXITOSA! Módulo reparado.', 'success');
                this.markModuleComplete(this.currentModule);
            } else {
                this.playErrorSound();
                this.showFeedback('❌ ERRORES DETECTADOS. Revisa la sintaxis del código.', 'error');
            }
        }, 500);
    }

    normalizeCode(code) {
        return code.replace(/\s+/g, ' ').replace(/\s*([{}();,])\s*/g, '$1').trim();
    }

    markModuleComplete(moduleId) {
        this.completedModules.add(moduleId);
        
        const fileItem = document.querySelector(`[data-module="${moduleId}"]`);
        fileItem.querySelector('.file-status').textContent = '🟢';

        document.getElementById('completedModules').textContent = this.completedModules.size;

        if (this.completedModules.size === 6) {
            clearInterval(this.timerInterval);
            setTimeout(() => this.showCompletionScreen(), 2000);
        }
    }

    resetModule() {
        if (!this.currentModule) return;
        const module = this.modules[this.currentModule];
        document.getElementById('codeArea').value = module.corruptCode;
        this.updateLineNumbers();
    }

    showCompletionScreen() {
        this.playSuccessSound();
        document.getElementById('mainApp').classList.add('hidden');
        document.getElementById('completionScreen').classList.remove('hidden');
        
        setTimeout(() => {
            const password = this.generatePassword();
            document.getElementById('generatedPassword').textContent = password;
        }, 2000);
    }

    generatePassword() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-/.';
        const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];
        return `AURORA${getRandomChar()}M${getRandomChar()}I${getRandomChar()}S${getRandomChar()}I${getRandomChar()}O${getRandomChar()}N${getRandomChar()}2`;
    }

    async copyPassword() {
        const password = document.getElementById('generatedPassword').textContent;
        try {
            await navigator.clipboard.writeText(password);
            this.showTemporaryMessage('Contraseña copiada al portapapeles!');
        } catch (err) {
            const textArea = document.createElement('textarea');
            textArea.value = password;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showTemporaryMessage('Contraseña copiada!');
        }
    }

    showTemporaryMessage(message) {
        const button = document.getElementById('copyPasswordBtn');
        const originalText = button.textContent;
        button.textContent = `✅ ${message}`;
        button.style.background = '#00ff88';
        button.style.color = '#000';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }

    returnToTerminal() {
        window.open('https://gnius-club.github.io/AURORA', '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.aurora = new AuroraIDE();
});

document.addEventListener('click', function resumeAudio() {
    if (window.aurora && window.aurora.audioContext && window.aurora.audioContext.state === 'suspended') {
        window.aurora.audioContext.resume();
    }
}, { once: true });
