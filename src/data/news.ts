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

export const newsCards: News[] = [
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
