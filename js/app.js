// js/app.js
  /* ======================
       DATOS DE CUMPLEAÑOS
    ======================*/
import{birthdays} from "./cumples.js";
document.addEventListener("DOMContentLoaded", () => {

  /* ======================
       FONDOS DE CUMPLEAÑOS (Imagenes temáticas)
    ======================*/
  const birthdayBackgrounds = [
    "imagenes/fondos/marco_1.png",    "imagenes/fondos/marco_2.png",    "imagenes/fondos/marco_3.jpg",    "imagenes/fondos/marco_4.png",
    "imagenes/fondos/marco_5.jpg",    "imagenes/fondos/marco_6.jpg",    "imagenes/fondos/marco_7.jpg",    "imagenes/fondos/marco_8.png",
    "imagenes/fondos/marco_9.png",    "imagenes/fondos/marco_10.jpg",    "imagenes/fondos/marco_11.jpg", "imagenes/fondos/marco_12.jpg",
    "imagenes/fondos/marco_13.png", "imagenes/fondos/marco_14.png",  "imagenes/fondos/marco_15.png", "imagenes/fondos/marco_16.png", 
    "imagenes/fondos/marco_17.jpg", "imagenes/fondos/marco_18.png",  "imagenes/fondos/marco_19.jpg", "imagenes/fondos/marco_20.png", 
  
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
    "En tu cumpleaños, celebra que eres una creación maravillosa de Dios, diseñada para grandes cosas.",
    "Que el Señor abra ventanas de bendición sobre tu vida y te sorprenda con Su bondad infinita.",
    "Que cada vela en tu pastel represente una promesa cumplida de Dios en tu caminar.",
    "Que en este nuevo año descubras nuevas facetas del amor de Dios y te deleites en Su misericordia.",
    "Hoy pedimos que la luz de Cristo resplandezca en ti, iluminando a todos los que te conocen.",
    "Que Dios te conceda los deseos más profundos de tu corazón conforme a Su perfecta voluntad.",
    "Celebramos que hoy cumples un año más bajo el abrigo del Altísimo; nada podrá faltarte.",
    "Que este día sea el inicio de la temporada más fructífera y bendecida de toda tu vida.",
    "Que el Señor te dé la paciencia para esperar Sus tiempos y la fe para creer en Sus milagros.",
    "En tu cumpleaños, que el Espíritu Santo te susurre palabras de ánimo y te llene de valentía.",
    "Damos gracias por el regalo de tu amistad y pedimos que Dios te recompense con creces por tu bondad.",
    "Que este año nuevo de vida sea un testimonio vivo de la fidelidad y el poder restaurador de Dios.",
    "Que el Señor te libre de todo mal y guarde tu salida y tu entrada desde ahora y para siempre.",
    "En este día de fiesta, que el banquete de la Palabra de Dios alimente tu alma y te dé vida eterna.",
    "Que tu sonrisa refleje hoy la alegría de saberte amado por el Creador del universo.",
    "Que Dios multiplique tus años con salud física, vigor espiritual y mucha prosperidad familiar.",
    "Hoy es un día para agradecer por el ayer, vivir el hoy y confiar plenamente en el mañana que Dios preparó.",
    "Que el Señor sea la roca sobre la cual construyas todos tus proyectos en este nuevo ciclo.",
    "Que en cada despertar de este año, sientas que las misericordias de Dios se renuevan para ti.",
    "En tu cumpleaños, que la presencia divina sea tan real que no quede espacio para la duda o el temor.",
    "Que Dios te use como un instrumento de paz y amor en medio de un mundo que tanto lo necesita.",
    "Celebramos la bendición de tenerte y rogamos que el Señor te llene de frutos de justicia y verdad.",
    "Que la esperanza sea el ancla de tu alma en este año, manteniéndote firme frente a cualquier tormenta.",
    "Que el Señor te conceda la gracia de ver Sus maravillas en lo cotidiano y sencillo de la vida.",
    "En este día especial, recibe un abrazo del cielo que te recuerde cuán valioso eres para el Padre.",
    "Que Dios ilumine tu entendimiento para que comprendas la anchura y la profundidad de Su amor por ti.",
    "Que este nuevo año de vida esté marcado por encuentros divinos que transformen tu caminar.",
    "Damos gracias a Dios porque Su mano te ha sostenido hasta aquí y seguirá contigo hasta el fin.",
    "Que el Señor te conceda un corazón agradecido que sepa reconocer cada detalle de Su bondad.",
    "Que en tu cumpleaños se renueven tus alas como las de las águilas para volar alto en Dios.",
    "Que la palabra del Señor sea el mapa que guíe tus pies hacia el destino de gloria que Él te dio.",
    "Hoy celebramos que eres luz en la oscuridad y pedimos que esa luz nunca deje de brillar.",
    "Que Dios te regale un año de abundancia, no solo material, sino sobre todo de paz mental y espiritual.",
    "En este día, que el Señor sane cualquier herida del pasado y te dé un corazón nuevo para amar.",
    "Que tu casa sea un refugio de la presencia de Dios y que en ella siempre reine la armonía.",
    "Que el Señor te dé discernimiento para distinguir lo eterno de lo pasajero en este nuevo año.",
    "En tu cumpleaños, que la alegría no sea algo pasajero, sino un estado permanente de tu alma.",
    "Que Dios te bendiga con amigos leales y familiares que te acerquen cada día más a Su camino.",
    "Que este año experimentes que para Dios no hay nada imposible y que Él pelea tus batallas.",
    "Celebra hoy la victoria de estar vivo y la esperanza de que lo mejor de Dios aún está por venir.",
    "Que el Señor te rodee con cantos de liberación y te libre de toda angustia en este nuevo ciclo.",
    "Que la unción de Dios repose sobre ti, capacitándote para todo lo que tengas que emprender.",
    "En tu día especial, que el rocío del cielo refresque tu espíritu y te dé una nueva vitalidad.",
    "Que Dios te conceda la sabiduría de Salomón y la valentía de David para enfrentar tus desafíos.",
    "Damos gracias por tu vida, que es un reflejo de la gracia inmerecida que Dios derrama sobre nosotros.",
    "Que este año puedas decir con confianza: 'Hasta aquí nos ayudó Jehová', y seguir adelante.",
    "Que el Señor te dé ojos para ver las oportunidades de bendición que otros pasan por alto.",
    "En tu cumpleaños, que la voz de Dios sea más fuerte que cualquier otra voz que intente desanimarte.",
    "Que cada meta que te propongas este año cuente con el respaldo y el sello del Espíritu Santo.",
    "Que Dios te llene de una fe inquebrantable que mueva montañas y transforme realidades.",
    "Que en este nuevo año de vida, tu comunión con el Padre sea más íntima y profunda que nunca.",
    "Celebramos tu existencia y declaramos que el favor de Dios va delante de ti abriendo caminos.",
    "Que el Señor te bendiga hoy con una paz que sobrepase todo entendimiento humano.",
    // Segundo Bloque
    "Que en este nuevo año de vida el Señor te conceda la capacidad de ver Su mano en los detalles más pequeños de tu día a día.",
    "Damos gracias a Dios por el regalo de tu presencia en nuestras vidas; eres un testimonio vivo de Su amor y bondad.",
    "Que el Señor te conceda un año de conquistas espirituales y que cada paso que des sea firme y seguro en Su palabra.",
    "En tu cumpleaños, pedimos que el Espíritu Santo sople un aire nuevo de creatividad y entusiasmo sobre todo lo que hagas.",
    "Que la bendición del Padre, el Hijo y el Espíritu Santo descienda sobre ti hoy y te acompañe durante los próximos 365 días.",
    "Que este nuevo año sea una temporada de puertas abiertas y de cielos despejados para que veas la gloria de Dios en tu vida.",
    "Celebramos tu vida con alegría, sabiendo que Dios te ha preservado con un propósito grande y maravilloso.",
    "Que el Señor te dé la fuerza de Sansón para vencer obstáculos y la fe de Abraham para creer en lo invisible.",
    "En este día especial, que la alegría del Señor inunde tu hogar y se convierta en el motor de tus sueños.",
    "Que Dios te conceda un año de salud plena, tanto en tu cuerpo como en tu alma, renovando tu vigor como el de las águilas.",
    "Que en cada dificultad que enfrentes este año, encuentres el consuelo y la dirección perfecta en las promesas de Dios.",
    "Hoy oramos para que el Señor te bendiga con una sabiduría que te permita administrar bien cada talento que te ha dado.",
    "Que este cumpleaños sea el inicio de una etapa donde experimentes milagros inesperados y bendiciones sobrenaturales.",
    "Que la luz de la verdad de Dios disipe cualquier sombra de duda en tu corazón y te dé una claridad total para tu futuro.",
    "Damos gracias al Creador por tu vida, pidiéndole que te proteja de todo mal y que Su ángel acampe alrededor de ti.",
    "Que este año nuevo de vida esté marcado por una gratitud profunda que atraiga aún más bendiciones a tu mesa.",
    "Que el Señor te enseñe a descansar en Sus brazos cuando el camino se ponga difícil, recordándote que Él tiene el control.",
    "En tu cumpleaños, declaramos que ninguna arma forjada contra ti prosperará, porque el Señor es tu escudo y defensor.",
    "Que Dios te regale la dicha de ver a tus seres queridos bendecidos y en paz, como fruto de Su amor en tu familia.",
    "Que este año tu fe crezca tanto que puedas inspirar a otros a buscar el rostro del Señor con la misma pasión.",
    "Que el Señor te conceda la mansedumbre necesaria para aprender de cada lección que la vida y Dios te pongan delante.",
    "En este día de celebración, que el amor del Padre sea el abrazo que reconforte tu corazón y te dé seguridad.",
    "Que Dios te dé un oído atento a Su voz, para que nunca te desvíes ni a derecha ni a izquierda del camino correcto.",
    "Que este nuevo ciclo sea un tiempo de restauración para cualquier área de tu vida que haya estado en pausa.",
    "Celebramos que hoy Dios te regala un nuevo lienzo en blanco para escribir una historia llena de fe y victorias.",
    "Que el Señor multiplique tus recursos y te dé un corazón generoso para seguir siendo un canal de bendición para otros.",
    "En tu cumpleaños, que la esperanza no sea solo un deseo, sino una certeza absoluta basada en la fidelidad de Dios.",
    "Que el Señor te libre de ansiedades y te regale una mente tranquila, enfocada en lo que es verdadero, noble y puro.",
    "Que este año puedas caminar con la frente en alto, sabiendo que eres un hijo amado del Dios Altísimo.",
    "Oramos para que el Señor te conceda un espíritu de discernimiento para reconocer las oportunidades divinas que vienen hacia ti.",
    "Que tu vida siga siendo ese jardín regado por la presencia de Dios, donde siempre florezca el amor y la paz.",
    "En este día especial, que el Señor te dé la capacidad de perdonar y soltar cualquier carga que no te pertenezca.",
    "Que Dios te bendiga con una paciencia inquebrantable, sabiendo que al final Su justicia siempre prevalece.",
    "Que este nuevo año de vida sea un viaje emocionante de la mano de Jesús, descubriendo nuevos tesoros en Su Palabra.",
    "Damos gracias por tu corazón dispuesto y pedimos que Dios te colme de favores y misericordias en este día.",
    "Que el Señor te dé la valentía para salir de tu zona de confort y alcanzar las metas que Él ha puesto en tu espíritu.",
    "En tu cumpleaños, que la paz de Cristo sea el árbitro en tu corazón, guiándote en cada sentimiento y emoción.",
    "Que Dios te regale un año de risas sinceras, de abrazos cálidos y de una comunión ininterrumpida con Su Espíritu.",
    "Que la provisión de Dios nunca falte en tu casa y que siempre tengas más que suficiente para compartir con el necesitado.",
    "Oramos para que en este nuevo año experimentes una sanidad integral que te permita servir a Dios con alegría.",
    "Que el Señor te dé la gracia de ser un pacificador en todo lugar, llevando la luz de Cristo a donde quiera que vayas.",
    "En tu día especial, que el Señor te revele más profundamente cuál es el ancho y largo de Su infinito amor por ti.",
    "Que este año nuevo de vida esté libre de distracciones y que tu mirada permanezca puesta en el autor y consumador de la fe.",
    "Celebramos que Dios te ha traído hasta aquí y confiamos en que Sus planes para ti son mucho mejores que los tuyos.",
    "Que el Señor te bendiga con una familia unida y con amigos que sean como hermanos en tiempos de angustia.",
    "En tu cumpleaños, que el aceite de la alegría sea derramado sobre tu cabeza, ungiéndote para una nueva temporada.",
    "Que Dios te conceda el deseo de buscarle en la intimidad, donde se encuentran las fuerzas para vencer al mundo.",
    "Que este año veas el fruto de tus oraciones pasadas y que tu fe sea fortalecida al ver las respuestas de Dios.",
    "Oramos para que el Señor te dé un espíritu de excelencia en todo lo que emprendas, para gloria de Su nombre.",
    "Que en este día de fiesta, sientas que el cielo entero celebra tu existencia junto con nosotros.",
    "Que Dios te regale la sabiduría para administrar tu tiempo, priorizando siempre lo que tiene valor eterno.",
    "Que este nuevo año sea una escalera de crecimiento espiritual, donde cada peldaño te acerque más a la santidad.",
    "En tu cumpleaños, que el Señor te rodee con Su favor como con un escudo, protegiéndote de toda acechanza.",
    "Que la palabra de Dios more en abundancia en ti, llenándote de sabiduría y de cánticos espirituales.",
    "Damos gracias a Dios por tu vida y le pedimos que te conceda la dicha de cumplir muchos años más con salud.",
    "Que el Señor te dé un corazón valiente para defender la verdad y un alma compasiva para ayudar al caído.",
    "Que este nuevo año de vida esté lleno de 'Eben-ezer', momentos donde puedas decir: 'Hasta aquí me ayudó el Señor'.",
    "Que en tu día especial, la presencia de Dios sea tan palpable que transforme tu entorno y traiga paz a los tuyos.",
    "Que Dios te bendiga con una fe que no se rinde ante las circunstancias, sino que se apoya en el poder del Todopoderoso.",
    "Que este año experimentes que la bondad y la misericordia de Dios te siguen a donde quiera que vayas.",
    "Oramos para que el Señor te use para consolar a otros con el mismo consuelo que tú has recibido de Él.",
    "En tu cumpleaños, que Dios renueve tu visión y te dé metas claras que glorifiquen Su santo nombre.",
    "Que el Señor te bendiga con una humildad que te haga grande ante Sus ojos y un amor que te haga luz ante los hombres.",
    "Que este nuevo año sea una cosecha de todo lo bueno que has sembrado con esfuerzo y lágrimas en el pasado.",
    "Que el Señor guarde tu mente de pensamientos de derrota y te llene de la mentalidad de victoria que hay en Cristo.",
    "En tu día especial, que el amor de Dios sea la melodía que alegre tu corazón desde el amanecer hasta el ocaso.",
    "Que Dios te regale un año de sorpresas divinas, donde Su gracia se manifieste de formas que nunca imaginaste.",
    "Que el Señor bendiga tus manos para que todo lo que toquen prospere y sea de bendición para muchos.",
    "Celebramos tu vida y pedimos que Dios te conceda la gracia de terminar cada día con la satisfacción del deber cumplido.",
    "Que este nuevo año de vida sea un tiempo de madurez y de frutos abundantes en tu carácter y en tu fe.",
    "Que el Señor te dé la paciencia de Job y la sabiduría de Salomón para manejar los asuntos de la vida cotidiana.",
    "En tu cumpleaños, declaramos que el gozo que Dios te da será tu fuerza inagotable para enfrentar cualquier reto.",
    "Que Dios te bendiga con una salud de hierro y un espíritu de fuego que nunca se apague ante las pruebas.",
    "Que este año nuevo de vida esté marcado por una obediencia gozosa a la voluntad de nuestro buen Dios.",
    "Oramos para que el Señor te conceda la alegría de ver cumplidos aquellos sueños que solo Tú y Él conocen.",
    "Que en este día especial, el Señor te dé una nueva canción de alabanza por todo lo que Él es y por lo que ha hecho.",
    "Que Dios te bendiga con una inteligencia espiritual para entender los tiempos y saber siempre qué hacer.",
    "Que este año tu testimonio sea una luz brillante que guíe a muchos hacia el amor salvador de Jesucristo.",
    "En tu cumpleaños, que el Señor te dé el regalo de una paz interior que ninguna tormenta externa pueda arrebatar.",
    "Que Dios te regale la compañía de personas que edifiquen tu vida y te desafíen a ser mejor cada día.",
    "Que este nuevo año de vida sea un reflejo de la belleza de la santidad de Dios en todo lo que digas y hagas.",
    "Oramos para que el Señor te dé una visión clara de tu propósito y la disciplina necesaria para caminar hacia él.",
    "Que en este día de celebración, el amor de tus amigos y familiares sea un pequeño reflejo del inmenso amor de Dios.",
    "Que el Señor te bendiga con una memoria que guarde las bendiciones y un olvido que deje atrás las ofensas.",
    "Que este nuevo ciclo sea un tiempo de refrigerio para tu alma y de renovación para tus sueños más anhelados.",
    "En tu cumpleaños, que el Señor te unja con aceite fresco para que tu luz brille con más fuerza que nunca.",
    "Que Dios te conceda la sabiduría para elegir siempre lo que edifica y lo que trae honra a Su nombre.",
    "Que este año experimentes la provisión milagrosa de Dios en todas las áreas de tu necesidad, sea física o emocional.",
    "Oramos para que el Señor te guarde de toda tentación y que tu caminar sea siempre por la senda de la justicia.",
    "Que en este día especial, el gozo de la salvación sea tu mayor motivo de festejo y agradecimiento.",
    "Que Dios te bendiga con una creatividad que abra caminos donde no los hay y soluciones donde hay problemas.",
    "Que este nuevo año de vida sea una oportunidad para profundizar en el conocimiento de la gracia de Dios.",
    "En tu cumpleaños, que el Señor te regale momentos de silencio y soledad con Él para renovar tus fuerzas.",
    "Que Dios te bendiga con un espíritu de oración constante, para que siempre estés conectado a la fuente de vida.",
    "Que este año veas la restauración de relaciones y la sanidad de memorias que han estado lastimadas.",
    "Oramos para que el Señor te dé la victoria sobre tus miedos y que camines con la seguridad de un conquistador.",
    "Que en este día de fiesta, la palabra del Señor sea el alimento que satisfaga tu alma y te dé sabiduría.",
    "Que Dios te regale la dicha de ser un testimonio de Su poder transformador ante toda tu familia y conocidos.",
    "Que este nuevo año de vida sea el mejor que hayas vivido hasta ahora, lleno de la plenitud de la presencia de Dios.",
    "En tu cumpleaños, que el Señor te diga al oído: 'No temas, que yo estoy contigo', y que esa promesa te sostenga siempre."


  ];

  /* ======================
       CITAS BÍBLICAS
    ======================*/
 
 const originalVerses = [
 // BLOQUE RV1960 (TEXTO ÍNTEGRO)
  "Santifícalos en tu verdad; tu palabra es verdad. - Juan 17:17 (RV1960)",
  "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis. - Jeremías 29:11 (RV1960)",
  "En el principio creó Dios los cielos y la tierra. - Génesis 1:1 (RV1960)",
  "Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día. - Génesis 1:5 (RV1960)",
  "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia. - Isaías 41:10 (RV1960)",
  "Jehová es mi roca y mi fortaleza, y mi libertador; Dios mío, fortaleza mía, en él confiaré; mi escudo, y el fuerte de mi salvación, mi alto refugio. - Salmo 18:2 (RV1960)",
  "Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos. - Salmo 19:1 (RV1960)",
  "La ley de Jehová es perfecta, que convierte el alma; el testimonio de Jehová es fiel, que hace sabio al sencillo. - Salmo 19:7 (RV1960)",
  "Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, Oh Jehová, roca mía, y redentor mío. - Salmo 19:14 (RV1960)",
  "Jehová te oiga en el día de conflicto; el nombre del Dios de Jacob te defienda. - Salmo 20:1 (RV1960)",
  "Concede a tu siervo un corazón que entienda para juzgar a tu pueblo, y para discernir entre lo bueno y lo malo. - 1 Reyes 3:9 (RV1960)",
  "Reconócelo en todos tus caminos, y él enderezará tus veredas. - Proverbios 3:6 (RV1960)",
  "No seas sabio en tu propia opinión; teme a Jehová, y apártate del mal. - Proverbios 3:7 (RV1960)",
  "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia. - Proverbios 2:6 (RV1960)",
  "Guarda tu corazón con toda diligencia; porque de él mana la vida. - Proverbios 4:23 (RV1960)",

  // BLOQUE NVI (TEXTO ÍNTEGRO)
  "Santifícalos en la verdad; tu palabra es la verdad. - Juan 17:17 (NVI)",
  "Por tanto, el que está en Cristo es una nueva creación; lo viejo ha pasado, ha llegado ya lo nuevo. - 2 Corintios 5:17 (NVI)",
  "Hagan todo con amor. - 1 Corintios 16:14 (NVI)",
  "No se cansen de hacer el bien, porque a su debido tiempo cosecharemos si no nos damos por vencidos. - Gálatas 6:9 (NVI)",
  "El que habita al abrigo del Altísimo se acoge a la sombra del Todopoderoso. - Salmo 91:1 (NVI)",
  "Diré yo al Señor: «Tú eres mi refugio, mi fortaleza, el Dios en quien confío». - Salmo 91:2 (NVI)",
  "Él te librará del lazo del cazador y de la peste destructora. - Salmo 91:3 (NVI)",
  "Con sus plumas te cubrirá y bajo sus alas hallarás refugio. ¡Su fidelidad será tu escudo y baluarte! - Salmo 91:4 (NVI)",
  "No temerás el terror de la noche, ni la flecha que vuela de día. - Salmo 91:5 (NVI)",
  "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso. - Mateo 11:28 (NVI)",
  "Carguen con mi yugo y aprendan de mí, pues soy apacible y humilde de corazón, y encontrarán descanso para su alma. - Mateo 11:29 (NVI)",
  "Porque mi yugo es suave y mi carga es liviana. - Mateo 11:30 (NVI)",
  "En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros. - 1 Juan 4:10 (NVI)",
  "Ustedes son la luz del mundo. Una ciudad en lo alto de una colina no puede esconderse. - Mateo 5:14 (NVI)",
  "Hagan brillar su luz delante de todos, para que ellos vean sus buenas obras y alaben a su Padre que está en el cielo. - Mateo 5:16 (NVI)",

  // BLOQUE PDT (TEXTO ÍNTEGRO)
  "Usa tu verdad para apartarlos para ti; tu enseñanza es la verdad. - Juan 17:17 (PDT)",
  "Den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús. - 1 Tesalonicenses 5:18 (PDT)",
  "No se dejen vencer por el mal, sino venzan el mal con el bien. - Romanos 12:21 (PDT)",
  "Hagan todo sin quejarse y sin discutir. - Filipenses 2:14 (PDT)",
  "Toda la Escritura es un mensaje de Dios y es útil para enseñar, ayudar, corregir y mostrar cómo vivir. - 2 Timoteo 3:16 (PDT)",
  "Así que, manténganse alerta, permanezcan firmes en la fe, sean valientes y fuertes. - 1 Corintios 16:13 (PDT)",
  "El amor es paciente y bondadoso. El amor no es envidioso. El amor no es presumido ni orgulloso. - 1 Corintios 13:4 (PDT)",
  "El amor no es grosero ni egoísta. No se enoja fácilmente ni lleva cuenta de las ofensas. - 1 Corintios 13:5 (PDT)",
  "Al amor no le gusta la injusticia, sino que se alegra cuando triunfa la verdad. - 1 Corintios 13:6 (PDT)",
  "El amor todo lo disculpa, todo lo cree, todo lo espera y todo lo soporta. - 1 Corintios 13:7 (PDT)",
  "El amor nunca deja de ser. Las profecías se acabarán, el don de lenguas terminará y el conocimiento desaparecerá. - 1 Corintios 13:8 (PDT)",
  "Confía en el Señor y haz el bien; vive en la tierra y mantente fiel. - Salmo 37:3 (PDT)",
  "Deléitate en el Señor, y él te concederá los deseos de tu corazón. - Salmo 37:4 (PDT)",
  "Entrega tu camino al Señor; confía en él, y él actuará. - Salmo 37:5 (PDT)",
  "Pónganse toda la armadura de Dios para que puedan mantenerse firmes contra las trampas del diablo. - Efesios 6:11 (PDT)",

  // BLOQUE TLA (TEXTO ÍNTEGRO)
  "Tu mensaje es la verdad; ¡conságralos a ti por medio de esa verdad! - Juan 17:17 (TLA)",
  "Dios amó tanto al mundo, que dio a su único Hijo, para que todo el que cree en él no se pierda, sino que tenga vida eterna. - Juan 3:16 (TLA)",
  "No vivan ya como vive todo el mundo. Al contrario, cambien de manera de ser y de pensar. - Romanos 12:2 (TLA)",
  "Si Dios está de nuestra parte, ¿quién podrá ponerse en contra nuestra? - Romanos 8:31 (TLA)",
  "Nadie tiene amor más grande que el dar la vida por sus amigos. - Juan 15:13 (TLA)",
  "Yo estaré con ustedes todos los días, hasta el fin del mundo. - Mateo 28:20 (TLA)",
  "Dios ama a la gente que da con alegría. - 2 Corintios 9:7 (TLA)",
  "No se preocupen por nada. Más bien, oren y pídanle a Dios todo lo que necesiten, y sean agradecidos. - Filipenses 4:6 (TLA)",
  "Hagan lo que hagan, háganlo bien, como si en vez de estar trabajando para amos humanos, estuvieran trabajando para el Señor. - Colosenses 3:23 (TLA)",
  "Si alguno de ustedes necesita sabiduría, pídasela a Dios. Él se la dará, pues Dios da a todos por igual y sin condiciones. - Santiago 1:5 (TLA)",
  "Mis queridos hermanos, pongan atención a esto: Todos deben estar listos para escuchar, pero no deben apresurarse a hablar ni a enojarse. - Santiago 1:19 (TLA)",
  "Dejen que Dios los bendiga y los cuide. Dejen que Dios los mire con amor y les dé su paz. - Números 6:24-26 (TLA)",
  "Ustedes son mis amigos, si hacen lo que yo les mando. - Juan 15:14 (TLA)",
  "Tengan confianza en Dios, y tengan confianza también en mí. - Juan 14:1 (TLA)",
  "Yo soy el camino, la verdad y la vida. Sin mí, nadie puede llegar a Dios el Padre. - Juan 14:6 (TLA)",
  // BLOQUE RV1960 (TEXTO ÍNTEGRO)
  "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley. - Gálatas 5:22-23 (RV1960)",
  "Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro. - Hebreos 4:16 (RV1960)",
  "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús. - 1 Tesalonicenses 5:16-18 (RV1960)",
  "Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón. - Hebreos 4:12 (RV1960)",
  "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo. - Romanos 5:1 (RV1960)",
  "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. - Filipenses 4:6 (RV1960)",
  "Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado. - Salmo 1:1 (RV1960)",
  "Sino que en la ley de Jehová está su delicia, y en su ley medita de día y de noche. - Salmo 1:2 (RV1960)",
  "Será como árbol plantado junto a corrientes de aguas, que da su fruto en su tiempo, y su hoja no cae; y todo lo que hace, prosperará. - Salmo 1:3 (RV1960)",
  "No son así los malos, que son como el tamo que arrebata el viento. - Salmo 1:4 (RV1960)",
  "Porque Jehová conoce el camino de los justos; mas la senda de los malos perecerá. - Salmo 1:6 (RV1960)",
  "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme? - Salmo 27:1 (RV1960)",
  "Aunque un ejército acampe contra mí, no temerá mi corazón; aunque contra mí se levante guerra, yo estaré confiado. - Salmo 27:3 (RV1960)",
  "Una cosa he demandado a Jehová, esta buscaré; que esté yo en la casa de Jehová todos los días de mi vida, para contemplar la hermosura de Jehová, y para inquirir en su templo. - Salmo 27:4 (RV1960)",
  "Hubiera yo desmayado, si no creyese que veré la bondad de Jehová en la tierra de los vivientes. - Salmo 27:13 (RV1960)",

  // BLOQUE NVI (TEXTO ÍNTEGRO)
  "Por tanto, acérquense confiadamente al trono de la gracia para recibir misericordia y hallar la gracia que nos ayude en el momento que más la necesitemos. - Hebreos 4:16 (NVI)",
  "Porque la palabra de Dios es viva y poderosa, y más cortante que cualquier espada de dos filos. - Hebreos 4:12 (NVI)",
  "Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo. - Colosenses 3:23 (NVI)",
  "No se cansen de hacer el bien, porque a su debido tiempo cosecharemos si no nos damos por vencidos. - Gálatas 6:9 (NVI)",
  "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad. - 1 Juan 1:9 (NVI)",
  "Queridos hermanos, amémonos los unos a los otros, porque el amor viene de Dios, y todo el que ama ha nacido de él y conoce a Dios. - 1 Juan 4:7 (NVI)",
  "En el amor no hay temor, sino que el amor perfecto echa fuera el temor. - 1 Juan 4:18 (NVI)",
  "Nosotros amamos porque él nos amó primero. - 1 Juan 4:19 (NVI)",
  "Y este es el mandamiento que tenemos de él: El que ama a Dios, ame también a su hermano. - 1 Juan 4:21 (NVI)",
  "Hijo mío, no te olvides de mi enseñanza; más bien, guarda en tu corazón mis mandamientos. - Proverbios 3:1 (NVI)",
  "Porque ellos prolongarán tu vida muchos años y te traerán prosperidad. - Proverbios 3:2 (NVI)",
  "Que nunca te abandonen el amor y la verdad; llévalos atados al cuello y escríbelos en el libro de tu corazón. - Proverbios 3:3 (NVI)",
  "Así contarás con el favor de Dios y de los hombres, y ganarás buena fama. - Proverbios 3:4 (NVI)",
  "Confía en el Señor de todo corazón, y no en tu propia inteligencia. - Proverbios 3:5 (NVI)",
  "Reconócelo en todos tus caminos, y él allanará tus sendas. - Proverbios 3:6 (NVI)",

  // BLOQUE PDT (TEXTO ÍNTEGRO)
  "Pero el Espíritu produce amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio. No existe ninguna ley en contra de esas cosas. - Gálatas 5:22-23 (PDT)",
  "Así que acerquémonos con confianza al trono de Dios, quien nos da su favor de manera gratuita. - Hebreos 4:16 (PDT)",
  "Por lo tanto, no se preocupen por el mañana, porque el mañana traerá sus propias preocupaciones. Cada día tiene ya sus propios problemas. - Mateo 6:34 (PDT)",
  "Busquen primero el reino de Dios y su justicia, y Dios les dará todo lo que necesiten. - Mateo 6:33 (PDT)",
  "Toda la Escritura es un mensaje de Dios y es útil para enseñar, ayudar, corregir y mostrar cómo vivir. - 2 Timoteo 3:16 (PDT)",
  "Hagan todo sin quejarse y sin discutir. - Filipenses 2:14 (PDT)",
  "Él sana a los que tienen el corazón roto y venda sus heridas. - Salmo 147:3 (PDT)",
  "El Señor da sabiduría; el conocimiento y la ciencia brotan de sus labios. - Proverbios 2:6 (PDT)",
  "Instruye al niño en el camino correcto y aun de viejo no lo abandonará. - Proverbios 22:6 (PDT)",
  "No se dejen vencer por el mal, sino venzan el mal con el bien. - Romanos 12:21 (PDT)",
  "Honra al Señor con tus riquezas y con los primeros frutos de tus cosechas. - Proverbios 3:9 (PDT)",
  "Hijo mío, presta atención a mi sabiduría y escucha bien mi consejo. - Proverbios 5:1 (PDT)",
  "El que es generoso prospera; el que ayuda a otros se ayuda a sí mismo. - Proverbios 11:25 (PDT)",
  "¡Qué bueno y qué agradable es que el pueblo de Dios viva en armonía! - Salmo 133:1 (PDT)",
  "Él cuenta el número de las estrellas y a cada una le pone nombre. - Salmo 147:4 (PDT)",

  // BLOQUE TLA (TEXTO ÍNTEGRO)
  "En cambio, el Espíritu de Dios nos hace amar a los demás, estar siempre alegres y vivir en paz con todos. Nos hace ser pacientes y amables, y tratar bien a los demás, tener confianza en Dios, ser humildes, y saber controlar nuestros deseos. - Gálatas 5:22-23 (TLA)",
  "Si alguno de ustedes necesita sabiduría, pídasela a Dios. Él se la dará, pues Dios da a todos por igual y sin condiciones. - Santiago 1:5 (TLA)",
  "Todo lo que es bueno y perfecto baja del cielo, de Dios, el Creador de todos los luceros del cielo. - Santiago 1:17 (TLA)",
  "Pero deben ser buenos para escuchar, pero lentos para hablar y para enojarse. - Santiago 1:19 (TLA)",
  "Dios ama a la gente que da con alegría. - 2 Corintios 9:7 (TLA)",
  "No se preocupen por nada. Más bien, oren y pídanle a Dios todo lo que necesiten, y sean agradecidos. - Filipenses 4:6 (TLA)",
  "Así Dios les dará su paz, que es más grande de lo que podemos entender. La paz de Dios cuidará sus corazones y sus pensamientos. - Filipenses 4:7 (TLA)",
  "Todo lo puedo hacer con la ayuda de Cristo, que me da la fuerza necesaria. - Filipenses 4:13 (TLA)",
  "Mi Dios les dará todo lo que necesiten, conforme a sus gloriosas riquezas en Cristo Jesús. - Filipenses 4:19 (TLA)",
  "Nuestro Dios es un Dios que salva; nuestro Dios puede librarnos de la muerte. - Salmo 68:20 (TLA)",
  "Den gracias a Dios en toda ocasión, porque esto es lo que él quiere de ustedes como creyentes en Cristo Jesús. - 1 Tesalonicenses 5:18 (TLA)",
  "¡Alaben a Dios, porque él es bueno! ¡Dios nunca deja de amarnos! - Salmo 106:1 (TLA)",
  "Aunque pase yo por el valle más oscuro, no temeré peligro alguno, porque tú estás a mi lado; tu vara y tu bastón me dan seguridad. - Salmo 23:4 (TLA)",
  "Me preparas un banquete delante de mis enemigos. Has vertido perfume sobre mi cabeza, y has llenado mi copa a rebosar. - Salmo 23:5 (TLA)",
  "Estoy completamente seguro de que tu bondad y tu amor me acompañarán mientras yo viva, y de que para siempre viviré donde tú vives. - Salmo 23:6 (TLA)"
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
      "imagenes/fondos/predeterminado.jpg";
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
