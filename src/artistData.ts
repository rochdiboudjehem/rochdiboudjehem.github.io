// Content of the Arabic artist CV (artist/ page).
// First transcribed from cv-source/artist-cv-rochdi-boudjehem.pdf; now maintained here.
//
// Rich text: a paragraph is a list of runs:
//   "..."                    plain text
//   { b: "..." }             bold
//   { a: "...", href }       link (e.g. to a section of the academic CV)
//   { b: "...", href }       bold link

/** Sections of the academic CV (index.html); the hash opens that section. */
export const academic = {
  education: "/#education",
  experience: "/#experience",
  publications: "/#publications",
  conferences: "/#conferences",
};

export type Run = string | { b: string; href?: string } | { a: string; href: string };
export type Paragraph = Run[];

/** Marks information the PDF does not give. Never displayed on the page. */
export const TODO = "TODO";
export const isKnown = (v?: string): v is string => !!v && v !== TODO;

/** One artwork. `file` = file name (without extension) in artwork-originals/<group>/. */
export interface Artwork {
  file: string;
  /** Arabic title */
  title: string;
  /** Composition / style, as captioned in the PDF */
  style: string;
  /** Technique or extra note (e.g. background), if any */
  technique: string;
  year: string;
  /** Event or exhibition */
  event: string;
  /** Physical size, e.g. "85 × 200 سم" */
  dimensions: string;
  /** Arabic alt text for the image */
  alt: string;
}

export const artistData = {
  meta: {
    pageTitle: "رشدي بوجاهم – فنان تشكيلي",
    description: "رشدي بوجاهم – فنان تشكيلي وخطاط · أستاذ محاضر في الإعلام الآلي، جامعة 08 ماي 1945 – قالمة.",
  },

  // ---------------- Page 1: main column ----------------
  name: "رشدي بوجاهم",
  subtitle: ["فنان تشكيلي وخطاط · ", { a: "أستاذ محاضر في الإعلام الآلي", href: academic.experience }] as Paragraph,

  about: {
    title: "نبذة عامة",
    paragraphs: [
      [
        "من مواليد مدينة قالمة سنة 1979، ",
        { a: "أستاذ جامعي وباحث في الإعلام الآلي", href: academic.experience },
        "، وفنان تشكيلي يجد في الحرف العربي مساحته الإبداعية. يدرّس بقسم الإعلام الآلي بجامعة 08 ماي 1945 – قالمة، وهو عضو في ",
        { a: "مخبر علوم وتكنولوجيات الإعلام والاتصال (LabSTIC)", href: academic.experience },
        ". تنقّل في مساره البحثي بين موازنة الحمل في الشبكات، ومعالجة الصور، والذكاء الاصطناعي، والأنظمة متعددة الوكلاء، وتوّج مساره الأكاديمي ",
        { a: "بأطروحة دكتوراه في مجال التعليم عن بُعد وأنظمة التعليم الإلكتروني", href: academic.education },
        ". له ",
        { a: "مقالات علمية منشورة في مجلات دولية", href: academic.publications },
        "، و",
        { a: "مشاركات في ملتقيات علمية عديدة", href: academic.conferences },
        ". ويشتغل حاليًا في مجال الحوسبة عالية الأداء (High Performance Computing)، وهي من المواد التي يدرّسها.",
      ],
    ] as Paragraph[],
  },

  education: {
    title: "المسار الدراسي",
    href: academic.education,
    items: [
      // The PDF shows no year for the doctorate.
      { year: "", degree: "دكتوراه في الإعلام الآلي", place: "جامعة 08 ماي 1945 – قالمة" },
      { year: "2016", degree: "ماستر في الإعلام الآلي", place: "جامعة 08 ماي 1945 – قالمة" },
      { year: "2002", degree: "مهندس دولة في الإعلام الآلي", place: "جامعة باجي مختار – عنابة" },
    ],
  },

  design: {
    title: "التصميم الغرافيكي",
    /** Accessible name of the poster gallery */
    galleryLabel: "التصميم الغرافيكي – لافتات X-Banner",
    paragraphs: [
      [
        "يمتد حسّه الفني إلى التصميم الغرافيكي، إذ صمّم العديد من مواقع الواب والملصقات، آخرها ملصقات ",
        { b: "الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية", href: academic.conferences },
        "، المنظَّم من طرف ",
        { a: "مخبر LabSTIC", href: academic.experience },
        " وقسم الإعلام الآلي بجامعة 08 ماي 1945 – قالمة.",
      ],
      [
        "يجمع بين صرامة الخوارزميات وانسياب الحرف؛ فكما تقوم البرمجة على البنية والتوازن والإيقاع، يقوم التصميم على ضبط النِّسب وتوزيع الكتلة والفراغ.",
      ],
    ] as Paragraph[],
  },

  quote: "«الخطُّ هندسةٌ روحانية، ظهرت بآلةٍ جسمانية»",

  // ---------------- Page 1: sidebar ----------------
  personal: {
    title: "معلومات شخصية",
    items: [
      { label: "الميلاد", lines: ["1979، قالمة – الجزائر"], href: "" },
      { label: "العنوان", lines: ["قالمة، الجزائر"], href: "" },
      { label: "المهنة", lines: ["أستاذ محاضر", "قسم علوم الإعلام الآلي", "جامعة 08 ماي 1945 – قالمة"], href: academic.experience },
      { label: "البريد الإلكتروني", lines: ["boudjehem.rochdi@univ-guelma.dz"], email: true, href: "" },
    ],
  },

  languages: {
    title: "اللغات",
    items: ["العربية (اللغة الأم)", "الفرنسية", "الإنجليزية"],
  },

  research: {
    title: "مجالات البحث",
    href: academic.publications,
    items: ["الحوسبة عالية الأداء (HPC)", "الذكاء الاصطناعي", "التعلم العميق", "الشبكات والأمن"],
  },

  // ---------------- Page 2 ----------------
  artist: {
    title: "الفنان",
    subtitle: "الخط العربي · التراكيب الخطية",
    paragraphs: [
      [
        "يمارس الدكتور رشدي بوجاهم فن الخط العربي منذ سنوات، ويشتغل بشكل خاص على التراكيب الخطية بخط جلي الثلث، حيث يبني النص داخل أشكال هندسية متوازنة: تراكيب عمودية تتصاعد فيها الألفات واللامات كأعمدة متوازية، وتراكيب دائرية متماسكة يلتفّ فيها الحرف حول مركزه، وأخرى على هيئة المحراب تقوم فوق خلفيات من الكتابة المتداخلة.",
      ],
      [
        "بين الرتق والانخساف والعراقة، تعكس أعماله احترامًا لقواعد الخط الكلاسيكية، مع بحث دائم عن التكوين المتوازن والإيقاع البصري؛ ذلك أن شغفه باللغة العربية جعله يعشقها حتى النخاع: كتابةً ونطقًا، شعرًا ونثرًا.",
      ],
      [
        "شارك في العديد من التظاهرات والمعارض، أبرزها ",
        { b: "«المهرجان الدولي الأول لفن الخط العربي والزخرفة الإسلامية»" },
        "، وبعده ",
        { b: "«مهرجان التراث المغاربي»" },
        " بدولة تونس الشقيقة، ثم ابتعد عن الساحة الفنية فترةً من الزمن بسبب انشغاله بالتدريس والبحث العلمي، غير أنه يعود إلى قلمه ومحبرته بين الفينة والأخرى، فيجدّد صلته بالحرف العربي ويستعيد معه متعة الإبداع.",
      ],
    ] as Paragraph[],
  },

  // Places: participations in Algeria always end with "، الجزائر" (or "الجزائر العاصمة").
  exhibitions: {
    title: "المشاركات الفنية",
    items: [
      { year: "2005", title: "معرض جماعي", place: "دار الشباب محمدي يوسف – قالمة، الجزائر" },
      {
        year: "2007",
        title: "المهرجان الدولي الأول لفن الخط العربي والزخرفة الإسلامية",
        place: "«الجزائر عاصمة الثقافة العربية 2007» – قصر رياس البحر، الجزائر العاصمة",
      },
      { year: "2007", title: "أيام قوس قزح", place: "قصر الثقافة – قالمة، الجزائر" },
      { year: "2009", title: "مهرجان التراث المغاربي – ممثلاً عن الجزائر", place: "المركب الشبابي المغاربي – رادس، تونس" },
      {
        year: "2026",
        title: "الملتقى الوطني الأول للفن الإسلامي",
        place: "«اليوم العالمي للفن الإسلامي 2026» – دار الثقافة عبد المجيد الشافعي، قالمة، الجزائر",
      },
    ],
  },

  calligraphyLabel: "أعمال الخط العربي",

  footer: "د. رشدي بوجاهم · قالمة – الجزائر",
};

// ---------------- Artworks (add one entry per file in artwork-originals/) ----------------

/** X-banners (roll-ups) for the National Conference on New Educational Technologies and Informatics (NCNETI). */
export const banners: Artwork[] = [
  {
    file: "ncneti-2025-1",
    title: "ملصق الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية",
    style: "لافتة X-Banner – نسخة محدّثة من تصميم 2023",
    technique: TODO,
    year: "2025",
    event: "الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية، المنظَّم من طرف مخبر LabSTIC وقسم الإعلام الآلي بجامعة 08 ماي 1945 – قالمة",
    dimensions: TODO,
    alt: "لافتة X-Banner: ملصق الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية – جامعة 08 ماي 1945 قالمة",
  },
  {
    file: "ncneti-2025-2",
    title: "ملصق الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية",
    style: "لافتة X-Banner – نسخة محدّثة من تصميم 2023",
    technique: TODO,
    year: "2025",
    event: "الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية، المنظَّم من طرف مخبر LabSTIC وقسم الإعلام الآلي بجامعة 08 ماي 1945 – قالمة",
    dimensions: TODO,
    alt: "لافتة X-Banner: ملصق الملتقى الوطني حول تكنولوجيات التعليم الجديدة والمعلوماتية – جامعة 08 ماي 1945 قالمة",
  },
];

/** Calligraphy works, in the PDF order (right to left). */
export const calligraphy: Artwork[] = [
  {
    file: "inna-anzalnahu-vertical",
    title: "«إنّا أنزلناه قرآنًا عربيًا»",
    style: "تركيب عمودي – خط جلي الثلث",
    technique: "خلفية مصممة بالفوتوشوب",
    year: TODO,
    event: TODO,
    dimensions: TODO,
    alt: "لوحة خط عربي: «إنّا أنزلناه قرآنًا عربيًا» – تركيب عمودي – خط جلي الثلث",
  },
  {
    file: "rabbi-yassir-circular",
    title: "«ربي يسّر ولا تعسّر وتمّم بالخير»",
    style: "تركيب دائري – خط جلي الثلث",
    technique: "",
    year: TODO,
    event: TODO,
    dimensions: TODO,
    alt: "لوحة خط عربي: «ربي يسّر ولا تعسّر وتمّم بالخير» – تركيب دائري – خط جلي الثلث",
  },
  {
    file: "law-yaalam-mihrab",
    title: "«لو يعلم المناجي من يناجي»",
    style: "تركيب محرابي – خط جلي الثلث",
    technique: "خلفية مصممة بالفوتوشوب",
    year: TODO,
    event: TODO,
    dimensions: TODO,
    alt: "لوحة خط عربي: «لو يعلم المناجي من يناجي» – تركيب محرابي – خط جلي الثلث",
  },
];
