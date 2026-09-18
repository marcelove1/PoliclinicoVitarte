// Datos y Configuración para Policlínico Vitarte
export const CLINIC_INFO = {
  name: "Policlínico Vitarte",
  tagline: "Tu salud en manos expertas y de confianza",
  location: "Ate Vitarte, Lima - Perú",
  addressShort: "Av. Nicolás Ayllón / Zona Céntrica de Ate Vitarte, Lima",
  phone: "+51 921 974 988",
  whatsappNumber: "51921974988",
  hours: "Lunes a Viernes: 8:00 am - 6:00 pm | Sábados: 8:00 am - 3:00 pm",
  emergencyNote: "Atención ambulatoria y consultas médicas programadas.",
  baseWhatsAppUrl: "https://wa.me/51921974988"
};

export const SPECIALTIES = [
  {
    id: "medicina-interna",
    name: "Medicina Interna",
    icon: "stethoscope",
    summary: "Diagnóstico y tratamiento integral de enfermedades del adulto, hipertensión y chequeos preventivos.",
    symptoms: ["Hipertensión", "Diabetes", "Chequeo General", "Fatiga", "Fiebre persistente"],
    badge: "Alta Demanda",
    whatsappMessage: "Hola Policlínico Vitarte, deseo consultar sobre una atención en Medicina Interna."
  },
  {
    id: "urologia",
    name: "Urología",
    icon: "kidney",
    summary: "Cuidado especializado de vías urinarias masculinas y femeninas, próstata y litiasis renal.",
    symptoms: ["Salud Prostática", "Infecciones Urinarias", "Cálculos Renales", "Dolor lumbar bajo"],
    badge: "Especializado",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera información para una consulta en Urología."
  },
  {
    id: "gastroenterologia",
    name: "Gastroenterología",
    icon: "stomach",
    summary: "Especialistas en salud digestiva, tratamiento de gastritis, reflujo, colon irritable y problemas hepáticos.",
    symptoms: ["Gastritis", "Reflujo / Acidez", "Dolor Abdominal", "Hígado Graso", "Colon"],
    badge: "Frecuente",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera consultar sobre el servicio de Gastroenterología."
  },
  {
    id: "neurologia",
    name: "Neurología",
    icon: "brain",
    summary: "Evaluación de trastornos del sistema nervioso, migrañas crónicas, mareos y afecciones neuromusculares.",
    symptoms: ["Migrañas / Cefaleas", "Mareos", "Problemas de Sueño", "Memoria", "Adormecimientos"],
    badge: "Especializado",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera solicitar informes sobre consulta de Neurología."
  },
  {
    id: "endocrinologia",
    name: "Endocrinología",
    icon: "activity",
    summary: "Tratamiento de alteraciones hormonales, tiroides, control metabólico, diabetes y obesidad.",
    symptoms: ["Tiroides (Hipotiroidismo)", "Diabetes Mellitus", "Metabolismo", "Hormonas"],
    badge: "Control Crónico",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera consultar sobre la especialidad de Endocrinología."
  },
  {
    id: "traumatologia",
    name: "Traumatología",
    icon: "bone",
    summary: "Atención de lesiones en huesos, articulaciones, tendones, esguinces, fracturas y dolor de espalda.",
    symptoms: ["Dolor Articular", "Dolor de Rodilla / Espalda", "Esguinces", "Lesiones", "Fracturas"],
    badge: "Alta Demanda",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera información sobre consultas de Traumatología."
  },
  {
    id: "neumologia",
    name: "Neumología",
    icon: "lungs",
    summary: "Prevención y cuidado de afecciones respiratorias, asma, bronquitis, tos persistente y alergias pulmonares.",
    symptoms: ["Tos Persistente", "Asma", "Bronquitis", "Falta de Aire", "Alergias Respiratorias"],
    badge: "Clínico",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera consultar sobre la atención en Neumología."
  },
  {
    id: "pediatria",
    name: "Pediatría",
    icon: "baby",
    summary: "Cuidado cálido y profesional para bebés, niños y adolescentes. Control de crecimiento y desarrollo.",
    symptoms: ["Control CRED", "Vacunas", "Fiebre Infantil", "Nutrición Infantil", "Resfríos"],
    badge: "Familiar",
    whatsappMessage: "Hola Policlínico Vitarte, deseo consultar sobre la atención médica en Pediatría."
  },
  {
    id: "ginecologia",
    name: "Ginecología",
    icon: "female",
    summary: "Salud integral femenina, chequeos ginecológicos preventivos, control prenatal y salud reproductiva.",
    symptoms: ["Chequeo Preventivo", "Papanicolaou", "Control de Ciclo", "Planificación", "Ecografías"],
    badge: "Preventivo",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera consultar sobre la especialidad de Ginecología."
  },
  {
    id: "nutricion",
    name: "Nutrición",
    icon: "apple",
    summary: "Planes de alimentación personalizados para control de peso, diabetes, hipertensión y estilo de vida saludable.",
    symptoms: ["Control de Peso", "Nutrición Clínica", "Hígado Graso", "Plan Personalizado"],
    badge: "Bienestar",
    whatsappMessage: "Hola Policlínico Vitarte, quisiera consultar sobre el servicio de Nutrición."
  }
];

export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "¿Cuándo acudir al médico por un dolor de cabeza o cefalea persistente?",
    category: "Neurología & Medicina",
    date: "18 de Agosto, 2026",
    readTime: "3 min de lectura",
    summary: "Aprende a diferenciar una cefalea tensional común de signos de alerta que requieren evaluación médica especializada.",
    content: `
      <p>El dolor de cabeza es una de las molestias más frecuentes en la consulta médica. Sin embargo, cuando el dolor cambia de patrón, se vuelve recurrente o se acompaña de otros síntomas, es crucial buscar una opinión médica profesional.</p>
      
      <h4>Signos de alarma que no debes pasar por alto:</h4>
      <ul>
        <li>Dolor repentino y de máxima intensidad en pocos segundos.</li>
        <li>Cefalea acompañada de visión borrosa, mareos intensos o adormecimiento facial.</li>
        <li>Dolor de cabeza acompañado de fiebre alta y rigidez de nuca.</li>
        <li>Falta de respuesta a analgésicos habituales o necesidad de automedicación diaria.</li>
      </ul>

      <p>En <strong>Policlínico Vitarte</strong> contamos con especialistas en Medicina Interna y Neurología para brindarte un diagnóstico oportuno y seguro en nuestra sede de Ate Vitarte.</p>
    `,
    specialtyRef: "neurologia",
    whatsappQuery: "Hola Policlínico Vitarte, leí el artículo sobre dolor de cabeza y quisiera consultar con un médico especialista."
  },
  {
    id: 2,
    title: "Prevención de la Gastritis: 5 hábitos diarios para proteger tu estómago",
    category: "Gastroenterología",
    date: "12 de Agosto, 2026",
    readTime: "4 min de lectura",
    summary: "El ritmo de vida y la alimentación influyen directamente en la mucosa gástrica. Conoce cómo evitar ardores y reflujo.",
    content: `
      <p>La gastritis y el reflujo gastroesofágico afectan a gran parte de la población en Lima debido a horarios irregulares de comida, comidas copiosas y estrés.</p>
      
      <h4>Recomendaciones clave de nuestros especialistas:</h4>
      <ol>
        <li><strong>Respeta tus horarios de comida:</strong> Evita ayunos prolongados que aumenten la acidez gástrica.</li>
        <li><strong>Modera irritantes y grasas:</strong> Reduce el consumo excesivo de condimentos picantes, café en ayunas, frituras y gaseosas.</li>
        <li><strong>Cena ligera y con tiempo:</strong> Procura cenar al menos 2 horas antes de ir a dormir para prevenir el reflujo nocturno.</li>
        <li><strong>Evita la automedicación:</strong> El uso indiscriminado de analgésicos (como ibuprofeno o naproxeno) sin protección gástrica daña la mucosa.</li>
        <li><strong>Controla la presencia de <em>Helicobacter pylori</em>:</strong> Una bacteria común que debe ser detectada y tratada a tiempo.</li>
      </ol>

      <p>Si sientes ardor frecuente o pesadez tras comer, consulta con nuestro servicio de Gastroenterología en Ate.</p>
    `,
    specialtyRef: "gastroenterologia",
    whatsappQuery: "Hola Policlínico Vitarte, leí el artículo sobre prevención de gastritis y deseo agendar una consulta en Gastroenterología."
  },
  {
    id: 3,
    title: "Control de Crecimiento y Desarrollo (CRED): Cuidando el futuro de tus hijos",
    category: "Pediatría",
    date: "05 de Agosto, 2026",
    readTime: "3 min de lectura",
    summary: "El control periódico en niños no es solo para cuando están enfermos, sino para asegurar su desarrollo físico y cognitivo óptimo.",
    content: `
      <p>La etapa de la infancia es una ventana de oportunidad crítica. El control pediátrico regular permite detectar a tiempo problemas nutricionales, evaluar el esquema de vacunación y monitorizar los hitos del desarrollo motor y del lenguaje.</p>
      
      <h4>¿Qué se evalúa en una consulta de control pediátrico?</h4>
      <ul>
        <li>Curva de peso, talla y perímetro cefálico acorde a la edad.</li>
        <li>Detección temprana de anemia y recomendaciones nutricionales.</li>
        <li>Revisión de reflejos, motricidad y lenguaje.</li>
        <li>Orientación integral a los padres sobre lactancia, hábitos de sueño y prevención de infecciones respiratorias.</li>
      </ul>

      <p>Bríndale a tus pequeños una atención cálida y profesional en Policlínico Vitarte.</p>
    `,
    specialtyRef: "pediatria",
    whatsappQuery: "Hola Policlínico Vitarte, leí el artículo de Pediatría y quisiera consultar sobre el control de mi hijo/a."
  },
  {
    id: 4,
    title: "Chequeo Preventivo del Adulto: Por qué no debes esperar a sentir dolor",
    category: "Medicina Interna",
    date: "28 de Julio, 2026",
    readTime: "4 min de lectura",
    summary: "Enfermedades como la hipertensión y la diabetes suelen ser silenciosas en sus etapas iniciales. La prevención salva vidas.",
    content: `
      <p>Muchas de las enfermedades crónicas más frecuentes no presentan dolor ni síntomas llamativos al inicio. Un chequeo clínico anual permite identificar factores de riesgo y corregirlos antes de que causen complicaciones.</p>
      
      <h4>Evaluaciones recomendadas para todo adulto:</h4>
      <ul>
        <li>Monitoreo de presión arterial.</li>
        <li>Perfil lipídico y glucosa en sangre.</li>
        <li>Evaluación de peso, masa muscular y función cardiovascular.</li>
        <li>Exámenes preventivos según edad y antecedentes familiares.</li>
      </ul>

      <p>Solicita tu orientación médica preventiva en nuestra sede en Ate Vitarte directamente por WhatsApp.</p>
    `,
    specialtyRef: "medicina-interna",
    whatsappQuery: "Hola Policlínico Vitarte, leí el artículo sobre chequeos preventivos y quisiera informes para una evaluación médica general."
  }
];

export const FAQS = [
  {
    question: "¿Cómo puedo agendar una consulta médica?",
    answer: "Todas las consultas e informes se gestionan directamente a través de nuestro WhatsApp oficial (+51 921 974 988). Nuestro equipo de atención te indicará los horarios disponibles para la especialidad que necesitas."
  },
  {
    question: "¿Dónde se encuentra ubicado el Policlínico Vitarte?",
    answer: "Contamos con una sede céntrica y de fácil acceso en el distrito de Ate Vitarte, Lima - Perú. Al escribirnos a WhatsApp te compartiremos la ubicación exacta y cómo llegar."
  },
  {
    question: "¿Ofrecen convenios para colegios, empresas o instituciones?",
    answer: "Sí. Brindamos planes de atención preventiva y convenios institucionales adaptados para colegios, instituciones educativas y empresas de Ate y zonas aledañas. Puedes solicitar una propuesta institucional por WhatsApp."
  },
  {
    question: "¿Necesito llevar algún documento a mi consulta?",
    answer: "Te recomendamos acudir con tu Documento Nacional de Identidad (DNI o Carné de Extranjería) y, si los tienes, resultados de exámenes previos o recetas anteriores relacionadas a tu consulta."
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer: "Atendemos de Lunes a Viernes de 8:00 am a 6:00 pm y Sábados de 8:00 am a 3:00 pm. Recuerda consultar disponibilidad previa para tu especialidad por WhatsApp."
  }
];

export function buildWhatsAppLink(customMessage) {
  const cleanPhone = CLINIC_INFO.whatsappNumber;
  const encodedText = encodeURIComponent(customMessage || "Hola Policlínico Vitarte, quisiera información sobre sus servicios médicos.");
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
