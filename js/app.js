// js/app.js
// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  /* ======================
       DATOS DE CUMPLEAÑOS
    ======================*/
  const birthdays = {
    "01-24": [
      {
        nombre: "Juan Pérez",
        sexo: "M",
        imagen:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
      {
        nombre: "María Gómez",
        sexo: "F",
        imagen:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      },
    ],
    "01-25": [
      {
        nombre: "Carlos Rodríguez",
        sexo: "M",
        imagen:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      },
    ],
    "02-14": [
      {
        nombre: "Ana López",
        sexo: "F",
        imagen:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      },
    ],
    "03-08": [
      {
        nombre: "Patricia Sánchez",
        sexo: "F",
        imagen:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      },
    ],
    "04-15": [
      {
        nombre: "Roberto Díaz",
        sexo: "M",
        imagen:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      },
    ],
    "05-20": [
      {
        nombre: "Sofía Martínez",
        sexo: "F",
        imagen:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      },
    ],
  };

  /* ======================
       FONDOS DE CUMPLEAÑOS (Imágenes temáticas)
    ======================*/
  const birthdayBackgrounds = [
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",
  ];

  /* ======================
       MENSAJES CRISTIANOS
    ======================*/
  const originalMessages = [
    "Que el amor de Dios te acompañe en este nuevo año de vida y te llene de paz y esperanza cada día, guiando tus pasos y fortaleciendo tu corazón en todo momento.",
    "En tu cumpleaños damos gracias a Dios por tu vida y pedimos que Su gracia te fortalezca siempre, renovando tus fuerzas y llenándote de sabiduría para cada decisión.",
    "Que este nuevo año esté lleno de bendiciones, alegría y la presencia constante del Señor, acompañándote en cada desafío y celebrando contigo cada victoria.",
    "En este día especial, que la paz de Dios llene tu corazón y guíe cada uno de tus pasos, dándote confianza y serenidad en cada etapa de tu camino.",
    "Que Dios renueve tus fuerzas y te conceda sabiduría para cada decisión en este nuevo año, recordándote que nunca caminas solo bajo Su cuidado.",
    "Hoy celebramos tu vida y damos gracias a Dios por todo lo que ha hecho y hará en ti, confiando en que Sus planes seguirán cumpliéndose con amor y fidelidad.",
    "Que el Señor te cubra con Su amor y te regale un año lleno de propósito y fe, donde cada día sea una oportunidad para crecer y bendecir a otros.",
    "En tu cumpleaños, que sientas la cercanía de Dios en cada momento de tu vida, recordando que Su presencia es tu mayor fortaleza.",
    "Que este nuevo año sea una oportunidad para crecer en fe, amor y esperanza, confiando en que Dios obra en cada detalle de tu vida.",
    "Que la fidelidad de Dios te sostenga y Su paz gobierne tu corazón siempre, aun en los momentos de dificultad y espera.",
    "En este día especial, que Dios te rodee con Su presencia y Su protección, llenando tu hogar y tu vida de tranquilidad y confianza.",
    "Que el Señor derrame bendiciones abundantes sobre tu vida en este nuevo año, abriendo puertas y guiándote conforme a Su voluntad.",
    "Que cada día de este nuevo año esté lleno de la gracia y el amor de Dios, renovando tu fe y fortaleciendo tu espíritu.",
    "Hoy damos gracias a Dios por tu vida y por cada bendición que te ha concedido, celebrando el regalo que eres para quienes te rodean.",
    "Que el gozo del Señor sea tu fortaleza en cada etapa de este nuevo año, recordándote que Su alegría permanece contigo siempre.",
    "En tu cumpleaños, que Dios renueve tus sueños y fortalezca tu fe, dándote ánimo para seguir adelante con esperanza.",
    "Que la paz de Dios llene tu vida y te acompañe en cada camino, guiando tus decisiones y guardando tu corazón.",
    "Que este nuevo año sea guiado por la sabiduría y el amor del Señor, permitiéndote caminar con confianza en Su propósito.",
    "Que Dios te conceda un año lleno de esperanza, alegría y bendiciones, donde puedas ver Su mano obrando a tu favor.",
    "En este día especial, que sientas el amor de Dios rodeando tu vida, dándote seguridad y descanso en Su presencia.",
    "Que el Señor te bendiga y te guarde en este nuevo año que comienzas, protegiéndote y guiándote en todo momento.",
    "Que la gracia de Dios sea suficiente para ti en cada momento, recordándote que Su poder se perfecciona en la debilidad.",
    "Hoy celebramos tu cumpleaños dando gracias a Dios por tu vida, por Su cuidado constante y por Su amor fiel.",
    "Que este nuevo año esté lleno de paz, fe y propósito en Dios, y que cada día sea una oportunidad para glorificarle.",
    "Que el amor del Señor te acompañe hoy y siempre, fortaleciéndote y guiándote en cada paso que des.",
    "Que Dios te conceda salud, paz y alegría en este nuevo año, y que Su favor te acompañe en todo lo que emprendas.",
    "En tu cumpleaños, que la presencia de Dios sea tu mayor regalo, llenando tu corazón de gozo y esperanza.",
    "Que cada día de este nuevo año sea una bendición para tu vida, y una oportunidad para experimentar la bondad de Dios.",
    "Que el Señor fortalezca tu fe y renueve tu esperanza, dándote ánimo para seguir confiando en Sus promesas.",
    "Que Dios te guíe y te cuide en cada paso que des, recordándote que Él va delante de ti.",
    "Que este nuevo año esté lleno de oportunidades y bendiciones, y que puedas reconocer la mano de Dios en todo.",
    "En este día especial, que Dios llene tu vida de Su paz y te conceda descanso en Su presencia.",
    "Que la bondad del Señor te acompañe todos los días de tu vida, iluminando tu camino con Su amor.",
    "Que Dios te conceda un año lleno de crecimiento espiritual, acercándote cada día más a Su corazón.",
    "Hoy damos gracias a Dios por tu vida y Su amor constante, celebrando Su fidelidad en cada etapa.",
    "Que el Señor sea tu refugio y fortaleza en este nuevo año, dándote seguridad en medio de cualquier situación.",
    "Que la gracia de Dios ilumine tu camino siempre, guiándote con sabiduría y discernimiento.",
    "En tu cumpleaños, que Dios te conceda alegría y paz, recordándote que Él tiene cuidado de ti.",
    "Que este nuevo año esté lleno de bendiciones del cielo, y que puedas compartirlas con quienes te rodean.",
    "Que el Señor renueve tus fuerzas y tu fe cada día, sosteniéndote con Su mano poderosa.",
    "Que Dios te rodee con Su amor y Su cuidado, acompañándote en cada etapa de tu vida.",
    "Que cada día de este año sea una oportunidad para bendecir y ser bendición para otros.",
    "Que el Señor te conceda sabiduría y fortaleza para enfrentar cada reto con confianza en Él.",
    "Que la paz de Dios reine en tu corazón siempre, guardándote en medio de cualquier circunstancia.",
    "Que este nuevo año sea guiado por la mano de Dios, llevándote por caminos de bien.",
    "Que el amor del Señor llene tu vida abundantemente y renueve tu esperanza cada mañana.",
    "Que Dios te conceda un año lleno de esperanza y propósito, confiando siempre en Su voluntad.",
  ];

  /* ======================
       CITAS BÍBLICAS
    ======================*/
  const originalVerses = [
    "Jehová cumplirá su propósito en ti. - Salmo 138:8",
    "El Señor te bendiga y te guarde. - Números 6:24",
    "El gozo del Señor es tu fortaleza. - Nehemías 8:10",
    "Encomienda al Señor tu camino. - Salmo 37:5",
    "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
    "El Señor es mi pastor, nada me faltará. - Salmo 23:1",
    "La misericordia del Señor es eterna. - Salmo 103:17",
    "El Señor es mi luz y mi salvación. - Salmo 27:1",
    "Confía en el Señor con todo tu corazón. - Proverbios 3:5",
    "La paz de Dios guardará tu corazón. - Filipenses 4:7",
    "El Señor es bueno con todos. - Salmo 145:9",
    "Dios es nuestro amparo y fortaleza. - Salmo 46:1",
    "El Señor cumple todas sus promesas. - Salmo 145:13",
    "El amor del Señor es para siempre. - Salmo 136:1",
    "Dios fortalece al cansado. - Isaías 40:29",
    "El Señor te cuidará siempre. - Salmo 121:7",
    "El Señor es fiel en todo. - Salmo 145:17",
    "Dios tiene planes de bienestar. - Jeremías 29:11",
    "El Señor es refugio seguro. - Proverbios 18:10",
    "El Señor guía a los humildes. - Salmo 25:9",
    "Dios es amor. - 1 Juan 4:8",
    "El Señor sostiene al justo. - Salmo 37:17",
    "El Señor es mi ayuda. - Salmo 54:4",
    "Dios cuida de los suyos. - Salmo 33:18",
    "El Señor es mi fortaleza. - Salmo 28:7",
    "Dios nunca te dejará. - Hebreos 13:5",
    "El Señor escucha tu clamor. - Salmo 34:17",
    "Dios es tu protector. - Salmo 91:4",
    "El Señor te da paz. - Juan 14:27",
    "Dios renueva tus fuerzas. - Isaías 40:31",
    "El Señor te acompaña siempre. - Mateo 28:20",
    "Dios te bendice abundantemente. - Deuteronomio 28:2",
    "El Señor es tu guía. - Salmo 32:8",
    "Dios cuida tu camino. - Salmo 121:8",
    "El Señor es fiel. - 2 Tesalonicenses 3:3",
    "Dios te fortalece cada día. - Salmo 68:35",
    "El Señor es bueno. - Salmo 100:5",
    "Dios te concede paz. - Números 6:26",
    "El Señor te sostiene. - Salmo 55:22",
    "Dios es tu refugio. - Salmo 62:8",
    "El Señor te ama. - Jeremías 31:3",
    "Dios te guarda siempre. - Salmo 121:5",
    "El Señor es misericordioso. - Salmo 103:8",
    "Dios te bendice hoy. - Salmo 67:1",
    "El Señor es tu esperanza. - Salmo 71:5",
    "Dios te cuida con amor. - Salmo 91:1",
    "El Señor es tu paz. - Efesios 2:14",
    "Dios es fiel siempre. - Lamentaciones 3:23",
  ];

  /* ======================
       SISTEMA DE PLANTILLAS
    ======================*/
  let usedTemplates = {
    male: [],
    female: [],
  };

  // Array para llevar registro de fondos usados
  let usedBackgrounds = [];

  /* ======================
       UTILIDADES
    ======================*/
  function randomUnique(array, originalArray) {
    if (array.length === 0) {
      return originalArray[Math.floor(Math.random() * originalArray.length)];
    }
    const index = Math.floor(Math.random() * array.length);
    return array.splice(index, 1)[0];
  }

  function todayKey() {
    const d = new Date();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    return `${month}-${day}`;
  }

  function formatoFecha(fechaStr) {
    const [mes, dia] = fechaStr.split("-");
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return `${dia} de ${meses[parseInt(mes) - 1]}`;
  }

  function getRandomBackground(gender) {
    // Si ya se usaron todos los fondos, reiniciar
    if (birthdayBackgrounds.length === usedBackgrounds.length) {
      usedBackgrounds = [];
    }

    // Filtrar fondos no usados
    let availableBackgrounds = birthdayBackgrounds.filter(
      (bg) => !usedBackgrounds.includes(bg),
    );

    if (availableBackgrounds.length === 0) {
      // Si no hay fondos disponibles, usar todos
      availableBackgrounds = [...birthdayBackgrounds];
      usedBackgrounds = [];
    }

    // Seleccionar fondo aleatorio
    const randomIndex = Math.floor(Math.random() * availableBackgrounds.length);
    const selectedBackground = availableBackgrounds[randomIndex];

    // Registrar fondo usado
    usedBackgrounds.push(selectedBackground);

    return selectedBackground;
  }

  function getRandomTemplate(gender) {
    // Convertir 'M'/'F' a 'male'/'female'
    let genderClass = "";
    if (gender === "M" || gender === "male") {
      genderClass = "male";
    } else if (gender === "F" || gender === "female") {
      genderClass = "female";
    } else {
      genderClass = "unisex";
    }

    // Seleccionar todas las plantillas del género correspondiente
    const templates = document.querySelectorAll(
      `.birthday-template.${genderClass}`,
    );

    if (templates.length === 0) {
      console.error(`No hay plantillas para el género: ${genderClass}`);
      return null;
    }

    return getTemplateFromList(templates, genderClass);
  }

  function getTemplateFromList(templates, gender) {
    // Filtrar las plantillas que no han sido usadas
    const availableTemplates = Array.from(templates).filter(
      (template, index) => {
        return !usedTemplates[gender].includes(index);
      },
    );

    // Si todas han sido usadas, reiniciar el contador
    if (availableTemplates.length === 0) {
      usedTemplates[gender] = [];
      return getTemplateFromList(templates, gender);
    }

    // Seleccionar una plantilla aleatoria
    const randomIndex = Math.floor(Math.random() * availableTemplates.length);
    const selectedTemplate = availableTemplates[randomIndex];

    // Guardar el índice de la plantilla usada
    const allTemplates = Array.from(templates);
    const templateIndex = allTemplates.indexOf(selectedTemplate);
    usedTemplates[gender].push(templateIndex);

    return selectedTemplate.cloneNode(true);
  }

  function applyBackgroundToTemplate(template, gender) {
    // Obtener el contenedor principal
    const birthdayExport = template.querySelector(".birthday-export");

    if (birthdayExport) {
      // Obtener fondo aleatorio
      const backgroundImage = getRandomBackground(gender);

      // Aplicar el fondo como imagen
      birthdayExport.style.backgroundImage = `url('${backgroundImage}')`;
      birthdayExport.style.backgroundSize = "cover";
      birthdayExport.style.backgroundPosition = "center";
      birthdayExport.style.backgroundRepeat = "no-repeat";

      // Añadir un overlay para mejorar legibilidad del texto
      const overlay = document.createElement("div");
      overlay.style.position = "absolute";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.right = "0";
      overlay.style.bottom = "0";
      overlay.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      overlay.style.borderRadius = "inherit";
      overlay.style.zIndex = "1";
      birthdayExport.insertBefore(overlay, birthdayExport.firstChild);

      // Asegurar que el contenido esté sobre el overlay
      const contentElements = birthdayExport.querySelectorAll(
        ".birthday-header, .birthday-content, .birthday-image",
      );
      contentElements.forEach((el) => {
        el.style.position = "relative";
        el.style.zIndex = "2";
      });
    }

    return template;
  }

  function fixImageDatePosition(template) {
    // Buscar todos los elementos image-date
    const imageDates = template.querySelectorAll(".image-date");

    imageDates.forEach((dateElement) => {
      // Forzar posicionamiento consistente
      dateElement.style.position = "absolute";
      dateElement.style.bottom = "-20px";
      dateElement.style.left = "50%";
      dateElement.style.transform = "translateX(-50%)";
      dateElement.style.zIndex = "1000";
      dateElement.style.background = "white";
      dateElement.style.padding = "8px 20px";
      dateElement.style.borderRadius = "20px";
      dateElement.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
      dateElement.style.fontSize = "1.1rem";
      dateElement.style.minWidth = "120px";
      dateElement.style.textAlign = "center";
      dateElement.style.opacity = "1";
      dateElement.style.visibility = "visible";
      dateElement.style.display = "block";
    });

    return template;
  }

  /* ======================
       PROCESO PRINCIPAL
    ======================*/
  const container = document.getElementById("birthdayContainer");
  const today = todayKey();

  console.log("Fecha de hoy:", today);
  console.log("Cumpleaños para hoy:", birthdays[today]);

  if (!birthdays[today] || birthdays[today].length === 0) {
    container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info p-4" style="font-size: 1.2rem; border-radius: 15px;">
                    <i class="bi bi-calendar-x" style="font-size: 2rem;"></i>
                    <h4 class="mt-3">Hoy no hay cumpleaños registrados</h4>
                    <p class="mb-0">¡Vuelve mañana para celebrar!</p>
                </div>
            </div>
        `;
    return;
  }

  // Crear copias de los arrays para no modificar los originales
  const messagesCopy = [...originalMessages];
  const versesCopy = [...originalVerses];

  // Inicializar arrays de plantillas usadas
  usedTemplates = {
    male: [],
    female: [],
  };

  // Inicializar array de fondos usados
  usedBackgrounds = [];

  // Limpiar el contenedor
  container.innerHTML = "";

  // Procesar cada persona que cumple años hoy
  birthdays[today].forEach((person, index) => {
    // Obtener plantilla aleatoria que no se haya usado
    let template = getRandomTemplate(person.sexo);

    if (!template) {
      console.error(`No se pudo obtener plantilla para ${person.nombre}`);
      return;
    }

    template.classList.remove("d-none");

    // Aplicar fondo de imagen aleatorio
    template = applyBackgroundToTemplate(template, person.sexo);

    // Corregir posición del image-date
    template = fixImageDatePosition(template);

    // Agregar animación de retraso
    const birthdayWrapper = template.querySelector(".birthday-wrapper");
    if (birthdayWrapper) {
      birthdayWrapper.style.animationDelay = `${index * 0.2}s`;
    }

    // Llenar los datos
    const nameElement = template.querySelector(".name");
    const messageElement = template.querySelector(".message");
    const verseElement = template.querySelector(".verse");
    const imgElement = template.querySelector(".birthday-img");
    const dateElement = template.querySelector(".image-date");

    if (
      !nameElement ||
      !messageElement ||
      !verseElement ||
      !imgElement ||
      !dateElement
    ) {
      console.error("Elementos no encontrados en la plantilla");
      return;
    }

    nameElement.textContent = person.nombre;
    messageElement.textContent = randomUnique(messagesCopy, originalMessages);
    verseElement.textContent = randomUnique(versesCopy, originalVerses);

    // Establecer fecha
    dateElement.textContent = formatoFecha(today);

    // Manejar imagen
    imgElement.src =
      person.imagen ||
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop";
    imgElement.alt = `Foto de ${person.nombre}`;
    imgElement.onerror = function () {
      console.log("Error cargando imagen, usando fallback");
      this.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='80' text-anchor='middle' dy='.3em' fill='%23666'%3E" +
        encodeURIComponent(person.nombre.charAt(0)) +
        "%3C/text%3E%3C/svg%3E";
    };

    /* EXPORTAR PNG - CORREGIDO */
    const downloadBtn = template.querySelector(".download");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const card = template.querySelector(".birthday-export");
        if (!card) {
          console.error("No se encontró la tarjeta para exportar");
          return;
        }

        // Añadir indicador de carga
        const originalText = this.innerHTML;
        this.innerHTML =
          '<span class="spinner-border spinner-border-sm me-2"></span> Generando...';
        this.disabled = true;

        // Guardar estilos temporales
        const originalOverflow = card.style.overflow;
        card.style.overflow = "visible";

        // Asegurar que el image-date sea visible
        const imageDates = card.querySelectorAll(".image-date");
        imageDates.forEach((el) => {
          el.style.visibility = "visible";
          el.style.opacity = "1";
          el.style.display = "block";
        });

        // Configuración para html2canvas
        html2canvas(card, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
          logging: false,
          allowTaint: true,
          width: card.offsetWidth,
          height: card.offsetHeight,
        })
          .then((canvas) => {
            // Restaurar estilos
            card.style.overflow = originalOverflow;

            // Crear imagen con fondo blanco
            const finalCanvas = document.createElement("canvas");
            finalCanvas.width = canvas.width;
            finalCanvas.height = canvas.height;
            const ctx = finalCanvas.getContext("2d");

            // Dibujar fondo blanco
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

            // Dibujar la tarjeta
            ctx.drawImage(canvas, 0, 0);

            // Crear y descargar la imagen
            const link = document.createElement("a");
            const fileName = `Feliz_Cumpleaños_${person.nombre.replace(/\s+/g, "_")}.png`;
            link.download = fileName;
            link.href = finalCanvas.toDataURL("image/png");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Restaurar botón
            this.innerHTML = originalText;
            this.disabled = false;
          })
          .catch((err) => {
            console.error("Error al generar la imagen:", err);
            card.style.overflow = originalOverflow;
            alert("Hubo un error al generar la imagen. Intenta de nuevo.");
            this.innerHTML = originalText;
            this.disabled = false;
          });
      });
    }

    container.appendChild(template);
  });
});

/* ======================
   FORMATEAR FECHA ACTUAL
====================== */
function formatearFechaActual() {
  const fecha = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return fecha.toLocaleDateString("es-ES", opciones);
}

// Mostrar fecha actual en la página
document.addEventListener("DOMContentLoaded", function () {
  const fechaElement = document.getElementById("currentDate");
  if (fechaElement) {
    fechaElement.textContent = formatearFechaActual();
  }
});
