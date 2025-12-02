import type { ImageMetadata } from "astro";

interface News {
    image: ImageMetadata;
    date: string;
    title: string;
    extract: string;
    description: string;
    gallery?: ImageMetadata[];
}

import Noticia01Item01 from "../assets/images/noticias/noticias-01-item01.webp";
import Noticia01Item02 from "../assets/images/noticias/noticias-01-item02.webp";

import PortadaNoticiaDos from "../assets/images/noticias/noticias-dos/portada-noticias-dos.webp";
import Noticia02Item01 from "../assets/images/noticias/noticias-dos/noticia-02-01.webp";
import Noticia02Item02 from "../assets/images/noticias/noticias-dos/noticia-02-02.webp";
import Noticia02Item03 from "../assets/images/noticias/noticias-dos/noticia-02-03.webp";
import Noticia02Item04 from "../assets/images/noticias/noticias-dos/noticia-02-04.webp";
import Noticia02Item05 from "../assets/images/noticias/noticias-dos/noticia-02-05.webp";
import Noticia02Item06 from "../assets/images/noticias/noticias-dos/noticia-02-06.webp";
import Noticia02Item07 from "../assets/images/noticias/noticias-dos/noticia-02-07.webp";
import Noticia02Item08 from "../assets/images/noticias/noticias-dos/noticia-02-08.webp";
import Noticia02Item09 from "../assets/images/noticias/noticias-dos/noticia-02-09.webp";
import Noticia02Item10 from "../assets/images/noticias/noticias-dos/noticia-02-10.webp";
import Noticia02Item11 from "../assets/images/noticias/noticias-dos/noticia-02-11.webp";
import Noticia02Item12 from "../assets/images/noticias/noticias-dos/noticia-02-12.webp";
import Noticia02Item13 from "../assets/images/noticias/noticias-dos/noticia-02-13.webp";
import Noticia02Item14 from "../assets/images/noticias/noticias-dos/noticia-02-14.webp";
import Noticia02Item15 from "../assets/images/noticias/noticias-dos/noticia-02-15.webp";
import Noticia02Item16 from "../assets/images/noticias/noticias-dos/noticia-02-16.webp";
import Noticia02Item17 from "../assets/images/noticias/noticias-dos/noticia-02-17.webp";
import Noticia02Item18 from "../assets/images/noticias/noticias-dos/noticia-02-18.webp";
import Noticia02Item19 from "../assets/images/noticias/noticias-dos/noticia-02-19.webp";
import Noticia02Item20 from "../assets/images/noticias/noticias-dos/noticia-02-20.webp";
import Noticia02Item21 from "../assets/images/noticias/noticias-dos/noticia-02-21.webp";
import Noticia02Item22 from "../assets/images/noticias/noticias-dos/noticia-02-22.webp";
import Noticia02Item23 from "../assets/images/noticias/noticias-dos/noticia-02-23.webp";
import Noticia02Item24 from "../assets/images/noticias/noticias-dos/noticia-02-24.webp";



export const newsCards: News[] = [
    {
        image: PortadaNoticiaDos,
        date: "25 y 26 de noviembre de 2025",
        title: "Revive el Seminario \"Ecosistemas en Peligro: Salvaguardando el Desierto\"",
        extract:
            "El Seminario Ecosistemas en Peligro reunió a expertos en Copiapó y lanzó el Programa XPP Copiapoa, iniciativa para proteger los cactus del desierto.",
        description: `Más de 70 participantes, junto a decenas de asistentes vía streaming, formaron parte del Seminario Ecosistemas en Peligro: Salvaguardando el Desierto, realizado el 25 y 26 de noviembre en Copiapó. La actividad reunió a especialistas, organizaciones locales y representantes del sector público y privado para reflexionar sobre los desafíos urgentes que enfrenta la biodiversidad del desierto de Atacama y fortalecer las acciones de conservación en el territorio.<br><br>Durante dos jornadas se realizaron conferencias magistrales, paneles de conversación y una salida a terreno por el desierto costero entre Totoral y Carrizal, donde las y los participantes pudieron observar en primera persona la riqueza ecológica del paisaje y las amenazas que afectan a especies únicas de la zona.<br><br>El programa reunió a investigadoras de trayectoria internacional, como Tania Hernández (Desert Botanical Garden); especialistas en ecología del desierto, entre ellas la bióloga Raquel Pinto; y referentes globales en conservación de cactus, como Barbara Goettsch (UICN). Sus exposiciones entregaron un panorama actualizado sobre restauración, financiamiento y estrategias de protección para especies amenazadas del desierto de Atacama.<br><br>El encuentro también marcó el lanzamiento del Programa XPP Copiapoa, una iniciativa de Prevención de Extinciones liderada por Cienciambiental, el Instituto de Ecología y Biodiversidad (IEB) y B Insular Chile. El programa busca proteger a las especies del género Copiapoa —cactus endémicos del desierto costero de Atacama— mediante investigación aplicada, acciones de restauración ecológica y trabajo con comunidades locales. Su objetivo es enfrentar las principales amenazas que afectan a estas especies, como el cambio climático, la pérdida de hábitat y el tráfico ilegal.<br><br>Quienes no pudieron asistir pueden ver fotos y videos que resumen el seminario directamente más abajo.<br><br><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/lnsIjrlf53Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/KTdevbBrlSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/x0wdrXI2xT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><!--PENDIENTE: Video Raquel Pinto - Reemplazar URL_VIDEO_RAQUEL_PINTO cuando esté disponible--><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/URL_VIDEO_RAQUEL_PINTO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/0O98zsH-UCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><br><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/wY4MTRMTGQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`,
        gallery: [Noticia02Item01, Noticia02Item02, Noticia02Item03, Noticia02Item04, Noticia02Item05, Noticia02Item06, Noticia02Item07, Noticia02Item08, Noticia02Item09, Noticia02Item10, Noticia02Item11, Noticia02Item12, Noticia02Item13, Noticia02Item14, Noticia02Item15, Noticia02Item16, Noticia02Item17, Noticia02Item18, Noticia02Item19, Noticia02Item20, Noticia02Item21, Noticia02Item22, Noticia02Item23, Noticia02Item24],
    },
    {
        image: Noticia01Item01,
        date: "21 de noviembre de 2025",
        title: "Especies del desierto en peligro de extinción: Seminario abordará desafíos de conservación en ecosistemas áridos",
        extract:
            "El encuentro, que se realizará el 25 y 26 de noviembre, contará con la participación de especialistas que compartirán experiencias y enfoques para abordar los desafíos y oportunidades de conservación del desierto de Atacama y del género Copiapoa, uno de los grupos florísticos más amenazados del país.",
        description: `El desierto está vivo. Aun en condiciones de aridez extrema, el desierto de Atacama sostiene una sorprendente diversidad de flora y fauna que ha desarrollado estrategias únicas para persistir. Desde esta mirada —que desafía la idea de un territorio desprovisto de vida— el seminario "Ecosistemas en Peligro: Salvaguardando el Desierto" convoca a la comunidad científica, organizaciones locales, instituciones públicas y privadas, y a la ciudadanía interesada en la conservación de los ecosistemas áridos.<br><br>El encuentro, que se realizará el 25 y 26 de noviembre en Copiapó, incluirá conferencias magistrales y una salida de observación en terreno, con el objetivo de profundizar en la urgencia de proteger estos ecosistemas tan frágiles como diversos y avanzar hacia una comprensión más amplia de su valor ecológico y cultural.<br><br>Las charlas magistrales estarán a cargo de tres destacadas especialistas en conservación de cactus y ecosistemas áridos: Barbara Goettsch, doctora en ecología y co-directora del "Cactus and Succulent Plant Specialist Group" de la Unión Internacional para la Conservación de la Naturaleza (UICN); Raquel Pinto, bióloga de la Pontificia Universidad Católica de Chile y referente nacional en flora del desierto y conservación de especies amenazadas; y Tania Hernández, investigadora del "Desert Botanical Garden" de Estados Unidos, experta en genética, diversificación y evolución de cactus en ambientes extremos.<br><br>Asimismo, el programa contempla una visita guiada al desierto costero —entre Totoral y Carrizal— para observar en terreno la biodiversidad que sostiene este paisaje único y conocer de primera fuente sus amenazas y oportunidades de conservación.<br><br>"Queremos invitar a la comunidad científica, a las organizaciones locales y al público general a sumarse a este seminario y mirar el desierto desde otra perspectiva: no como un territorio vacío, sino como un ecosistema vivo y diverso que necesita de nuestra acción urgente", dice Marcela Torres, directora del proyecto XPP Copiapoa.<br><br>Este seminario marca el lanzamiento del Programa de Prevención de Extinciones XPP Copiapoa, que mediante un trabajo colaborativo, investigación aplicada, estrategias de restauración y propagación de especies, y un plan de desarrollo local, busca prevenir la extinción de los cactus Copiapoa y de parte importante del patrimonio natural y cultural del desierto de Atacama.<br><br>La iniciativa —liderada por la consultora Cienciambiental, el Instituto de Ecología y Biodiversidad (IEB) y la empresa B Insular Chile, y que cuenta con el apoyo inicial del fondo de inversión social de BHP— surge ante un escenario urgente: el género Copiapoa enfrenta presiones crecientes asociadas al cambio climático, la pérdida de hábitat y el tráfico ilegal, lo que ha puesto a buena parte de sus especies en niveles preocupantes de amenaza.<br><br>"La situación del género Copiapoa es crítica: más del 80% de sus especies presenta algún nivel de amenaza. Este proyecto busca responder a esa urgencia con ciencia, restauración y trabajo comunitario, construyendo capacidades locales para proteger uno de los patrimonios naturales más emblemáticos de Atacama", señala Iñigo Ricalde, de Insular.<br><br>El seminario se realizará en el Hotel Las Pircas de Copiapó y es gratuito con cupos limitados. Quienes deseen participar pueden revisar el programa completo e inscribirse en el siguiente enlace: <a href="https://eventos.registrointegral.cl/seminarioextintion/t/150">https://eventos.registrointegral.cl/seminarioextintion/t/150</a>. La invitación es a sumarse, aprender y contribuir a la construcción de una nueva mirada sobre los desiertos y su conservación.`,
        gallery: [Noticia01Item01, Noticia01Item02],
    },
];
