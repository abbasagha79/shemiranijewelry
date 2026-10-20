/* =====================================================================
   SHEMIRANI — every design on the site lives here.
   The newest design ("added") opens the home page; the hero then moves to
   the next design every 30 seconds.

   To add a design: copy one entry, give it a lower-case "id" (it becomes the
   page folder designs/<id>/), put its photos in assets/img/<id>/, its film (if
   any) in assets/video/<id>-360.mp4, convert its STL files with
   tools/convert_model.py, add it to MODELS at the top of assets/js/ring3d.js,
   and copy the folder designs/aurelis/ to designs/<id>/ (change data-design).
   ===================================================================== */
window.SHEMIRANI_DESIGNS = [
  {
    id: 'regalia',
    name: 'REGALIA',
    added: '2026-10-20T20:49',
    collection: 'rings',
    kind: { en: "Signet ring · 18K gold and diamonds", fa: 'انگشتر مُهری · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 16 diamonds', fa: 'طلای ۱۸ عیار · ۱۶ الماس' },
    description: {
      en: 'A blend of classic heritage and a majestic presence from every angle.',
      fa: 'تلفیقی از اصالت کلاسیک و جلوه‌ای باشکوه در هر زاویه.'
    },
    model: 'regalia',
    film: 'assets/video/regalia-360.mp4',
    poster: 'assets/img/regalia/film-poster.jpg',
    spin: 'assets/video/regalia-spin.mp4',
    spinPoster: 'assets/img/regalia/spin-poster.jpg',
    cover: 'assets/img/regalia/render-01.jpg',
    thumb: 'assets/img/regalia/render-01-sm.jpg',
    photos: [
      'assets/img/regalia/render-01.jpg',
      'assets/img/regalia/matrix-01.jpg', 'assets/img/regalia/matrix-02.jpg', 'assets/img/regalia/matrix-03.jpg',
      'assets/img/regalia/matrix-04.jpg', 'assets/img/regalia/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 5.25 g', fa: 'طلای زرد ۱۸ عیار: ۵٫۲۵ گرم' },
        { en: '18K white gold: 5.00 g', fa: 'طلای سفید ۱۸ عیار: ۵٫۰۰ گرم' },
        { en: '18K rose gold: 5.25 g', fa: 'طلای رزگلد ۱۸ عیار: ۵٫۲۵ گرم' },
        { en: '14K yellow gold: 4.39 g', fa: 'طلای زرد ۱۴ عیار: ۴٫۳۹ گرم' },
        { en: '22K yellow gold: 6.10 g', fa: 'طلای زرد ۲۲ عیار: ۶٫۱۰ گرم' },
        { en: 'Silver 925: 3.53 g', fa: 'نقره‌ی ۹۲۵: ۳٫۵۳ گرم' },
        { en: 'Platinum: 6.85 g', fa: 'پلاتین: ۶٫۸۵ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '16 round diamonds, 0.36 ct in total', fa: '۱۶ الماس گرد، در مجموع ۰٫۳۶ قیراط' },
        { en: '4 stones, 2.4 mm: 0.21 ct, in the centre flower', fa: '۴ نگین ۲٫۴ میلی‌متری: ۰٫۲۱ قیراط، در گل مرکزی' },
        { en: '12 stones, 1.5 mm: 0.15 ct, in rows of three on the four edges', fa: '۱۲ نگین ۱٫۵ میلی‌متری: ۰٫۱۵ قیراط، در ردیف‌های سه‌تایی روی چهار لبه' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 23.6 mm', fa: 'ارتفاع از پایین تا بالا: ۲۳٫۶ میلی‌متر' },
        { en: 'Width across the shoulders: 23.9 mm', fa: 'عرض از شانه تا شانه: ۲۳٫۹ میلی‌متر' },
        { en: 'Top, along the finger: 13.0 mm', fa: 'بالای انگشتر در امتداد انگشت: ۱۳٫۰ میلی‌متر' },
        { en: 'Inner diameter: 19.0 mm', fa: 'قطر داخلی: ۱۹٫۰ میلی‌متر' },
        { en: 'Band at the base: 0.8 mm', fa: 'ضخامت حلقه در پایین: ۰٫۸ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Four-diamond flower on a raised round seat', fa: 'گل چهار الماس روی نشیمن گرد برجسته' },
        { en: 'Cushion-shaped top plate inside a stepped, chamfered frame', fa: 'صفحه‌ی بالایی بالشتکی داخل قاب پله‌دار و پخ‌خورده' },
        { en: 'Ribbed gold tiers and open cut-outs down both shoulders', fa: 'پله‌های راه‌راه طلایی و بریدگی‌های باز روی هر دو شانه' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'imperia',
    name: 'IMPERIA',
    added: '2026-10-20T15:24',
    collection: 'rings',
    kind: { en: "Men's ring · 18K gold and diamonds", fa: 'انگشتر مردانه · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 17 diamonds', fa: 'طلای ۱۸ عیار · ۱۷ الماس' },
    description: {
      en: 'Inspired by royal authority and grace, for an unforgettable presence.',
      fa: 'الهام‌گرفته از اقتدار و ظرافت سلطنتی، برای حضوری فراموش‌نشدنی.'
    },
    model: 'imperia',
    film: 'assets/video/imperia-360.mp4',      /* 360° turn rendered from the 3D model */
    poster: 'assets/img/imperia/film-poster.jpg',
    spin: 'assets/video/imperia-spin.mp4',          /* loop for the works wheel cards */
    spinPoster: 'assets/img/imperia/spin-poster.jpg',
    cover: 'assets/img/imperia/render-01.jpg',
    thumb: 'assets/img/imperia/render-01-sm.jpg',
    photos: [
      'assets/img/imperia/render-01.jpg',
      'assets/img/imperia/matrix-01.jpg', 'assets/img/imperia/matrix-02.jpg', 'assets/img/imperia/matrix-03.jpg',
      'assets/img/imperia/matrix-04.jpg', 'assets/img/imperia/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 5.76 g', fa: 'طلای زرد ۱۸ عیار: ۵٫۷۶ گرم' },
        { en: '18K white gold: 5.48 g', fa: 'طلای سفید ۱۸ عیار: ۵٫۴۸ گرم' },
        { en: '18K rose gold: 5.76 g', fa: 'طلای رزگلد ۱۸ عیار: ۵٫۷۶ گرم' },
        { en: '14K yellow gold: 4.81 g', fa: 'طلای زرد ۱۴ عیار: ۴٫۸۱ گرم' },
        { en: '22K yellow gold: 6.69 g', fa: 'طلای زرد ۲۲ عیار: ۶٫۶۹ گرم' },
        { en: 'Silver 925: 3.87 g', fa: 'نقره‌ی ۹۲۵: ۳٫۸۷ گرم' },
        { en: 'Platinum: 7.51 g', fa: 'پلاتین: ۷٫۵۱ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '17 round diamonds, 0.19 ct in total', fa: '۱۷ الماس گرد، در مجموع ۰٫۱۹ قیراط' },
        { en: '1 centre stone, 2.0 mm: 0.03 ct, bezel set', fa: '۱ نگین مرکزی ۲٫۰ میلی‌متری: ۰٫۰۳ قیراط، با رکاب دور' },
        { en: '16 stones, 1.4 mm: 0.16 ct, held in prongs', fa: '۱۶ نگین ۱٫۴ میلی‌متری: ۰٫۱۶ قیراط، با چنگ' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 22.6 mm', fa: 'ارتفاع از پایین تا بالا: ۲۲٫۶ میلی‌متر' },
        { en: 'Width across the shoulders: 22.9 mm', fa: 'عرض از شانه تا شانه: ۲۲٫۹ میلی‌متر' },
        { en: 'Top, along the finger: 9.0 mm', fa: 'بالای انگشتر در امتداد انگشت: ۹٫۰ میلی‌متر' },
        { en: 'Inner diameter: 19.0 mm', fa: 'قطر داخلی: ۱۹٫۰ میلی‌متر' },
        { en: 'Band at the base: 0.9 mm', fa: 'ضخامت حلقه در پایین: ۰٫۹ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Eight-point star cut into the top around the centre stone', fa: 'ستاره‌ی هشت‌پر روی صفحه، دور نگین مرکزی' },
        { en: 'Greek-key cut-outs through both shoulders', fa: 'بریدگی‌های طرح یونانی (مئاندر) روی هر دو شانه' },
        { en: 'Four corner settings and a row of five stones down each shoulder', fa: 'چهار نشیمن در گوشه‌ها و ردیف پنج‌تایی الماس روی هر شانه' },
        { en: 'Gently curved top plate', fa: 'صفحه‌ی بالایی با انحنای ملایم' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'aurelis',
    name: 'AURELIS',
    added: '2026-10-20T13:48',
    collection: 'rings',
    kind: { en: "Men's ring · 18K gold and diamonds", fa: 'انگشتر مردانه · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 47 diamonds', fa: 'طلای ۱۸ عیار · ۴۷ الماس' },
    description: {
      en: 'A symbol of golden splendour and lasting brilliance, designed for discerning taste.',
      fa: 'نمادی از شکوه طلایی و درخششی ماندگار؛ طراحی‌شده برای سلیقه‌های خاص.'
    },
    model: 'aurelis',
    film: 'assets/video/aurelis-360.mp4',
    poster: 'assets/img/aurelis/film-poster.jpg',
    spin: 'assets/video/aurelis-spin.mp4',
    spinPoster: 'assets/img/aurelis/spin-poster.jpg',
    cover: 'assets/img/aurelis/render-01.jpg',
    thumb: 'assets/img/aurelis/render-01-sm.jpg',
    photos: [
      'assets/img/aurelis/render-01.jpg',
      'assets/img/aurelis/matrix-01.jpg', 'assets/img/aurelis/matrix-02.jpg', 'assets/img/aurelis/matrix-03.jpg',
      'assets/img/aurelis/matrix-04.jpg', 'assets/img/aurelis/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 5.76 g', fa: 'طلای زرد ۱۸ عیار: ۵٫۷۶ گرم' },
        { en: '18K white gold: 5.48 g', fa: 'طلای سفید ۱۸ عیار: ۵٫۴۸ گرم' },
        { en: '18K rose gold: 5.76 g', fa: 'طلای رزگلد ۱۸ عیار: ۵٫۷۶ گرم' },
        { en: '14K yellow gold: 4.81 g', fa: 'طلای زرد ۱۴ عیار: ۴٫۸۱ گرم' },
        { en: '22K yellow gold: 6.69 g', fa: 'طلای زرد ۲۲ عیار: ۶٫۶۹ گرم' },
        { en: 'Silver 925: 3.87 g', fa: 'نقره‌ی ۹۲۵: ۳٫۸۷ گرم' },
        { en: 'Platinum: 7.51 g', fa: 'پلاتین: ۷٫۵۱ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '47 round diamonds, 0.61 ct in total', fa: '۴۷ الماس گرد، در مجموع ۰٫۶۱ قیراط' },
        { en: '1 centre stone, 3.0 mm: 0.11 ct', fa: '۱ نگین مرکزی ۳٫۰ میلی‌متری: ۰٫۱۱ قیراط' },
        { en: '38 stones, 1.4 mm: 0.43 ct', fa: '۳۸ نگین ۱٫۴ میلی‌متری: ۰٫۴۳ قیراط' },
        { en: '8 stones, 1.3 mm: 0.07 ct', fa: '۸ نگین ۱٫۳ میلی‌متری: ۰٫۰۷ قیراط' },
        { en: 'Each stone held by its own prongs', fa: 'هر نگین با چنگ‌های خودش نگه داشته می‌شود' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 23.9 mm', fa: 'ارتفاع از پایین تا بالا: ۲۳٫۹ میلی‌متر' },
        { en: 'Width across the shoulders: 23.8 mm', fa: 'عرض از شانه تا شانه: ۲۳٫۸ میلی‌متر' },
        { en: 'Top, along the finger: 8.7 mm', fa: 'بالای انگشتر در امتداد انگشت: ۸٫۷ میلی‌متر' },
        { en: 'Inner diameter: 20.0 mm', fa: 'قطر داخلی: ۲۰٫۰ میلی‌متر' },
        { en: 'Band at the base: 1.1 mm', fa: 'ضخامت حلقه در پایین: ۱٫۱ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Woven, wave-pattern gold across the top', fa: 'طلای بافته با طرح موج روی سطح بالا' },
        { en: 'Square seat for the centre stone', fa: 'نشیمن مربعی برای نگین مرکزی' },
        { en: 'Two screw-head details on the sides', fa: 'دو جزئیات پیچ‌مانند روی دو طرف' },
        { en: 'Pavé rows framing the top and running down both shoulders', fa: 'ردیف‌های الماس که بالا را قاب می‌کنند و روی دو شانه پایین می‌آیند' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  }
].sort(function(a, b){ return a.added < b.added ? 1 : -1; });   /* newest first */

window.SHEMIRANI_COLLECTIONS = [
  { id: 'rings',     en: 'Rings',     fa: 'انگشتر',        c: '#3b82ff', icon: '<polygon points="38,22 62,22 70,32 50,50 30,32"/><circle cx="50" cy="70" r="20"/>' },
  { id: 'earrings',  en: 'Earrings',  fa: 'گوشواره',       c: '#9b5cff', icon: '<circle cx="34" cy="20" r="8"/><path d="M34 28v18M34 46C26 56 28 70 34 74 40 70 42 56 34 46Z"/><circle cx="66" cy="20" r="8"/><path d="M66 28v18M66 46C58 56 60 70 66 74 72 70 74 56 66 46Z"/>' },
  { id: 'bracelets', en: 'Bracelets', fa: 'دستبند',        c: '#14c8c0', icon: '<ellipse cx="50" cy="52" rx="40" ry="26"/><ellipse cx="50" cy="52" rx="30" ry="17" stroke-dasharray="8 7"/>' },
  { id: 'bangles',   en: 'Bangles',   fa: 'النگو و بنگل',  c: '#ff3d6e', icon: '<ellipse cx="50" cy="50" rx="40" ry="25"/><ellipse cx="50" cy="50" rx="29" ry="15"/>' },
  { id: 'necklaces', en: 'Necklaces', fa: 'گردنبند',       c: '#17d68a', icon: '<path d="M12 14C20 72 80 72 88 14"/><polygon points="50,66 61,80 50,96 39,80"/>' },
  { id: 'pendants',  en: 'Pendants',  fa: 'آویز',          c: '#ff9a3d', icon: '<polyline points="26,6 50,38 74,6"/><ellipse cx="50" cy="68" rx="19" ry="25"/><ellipse cx="50" cy="68" rx="9" ry="14"/>' }
];
