/* =====================================================================
   SHEMIRANI — every design on the site lives here.
   The newest design ("added") opens the home page; the hero then moves to
   the next design every 30 seconds.

   To add a design: copy one entry, give it a lower-case "id" (it becomes the
   page folder designs/<id>/), put its photos in assets/img/<id>/, its film (if
   any) in assets/video/<id>-360.mp4, convert its STL files with
   tools/convert_model.py, add it to MODELS at the top of assets/js/ring3d.js,
   make its corridor cards with tools/make_stream.py <id> (the "stream" line),
   and copy the folder designs/aurelis/ to designs/<id>/ (change data-design).
   ===================================================================== */
window.SHEMIRANI_DESIGNS = [
  {
    id: 'sovrana',
    name: 'SOVRANA',
    added: '2026-10-23T00:06',
    collection: 'rings',
    kind: { en: "Men's ring · 18K gold and diamonds", fa: 'انگشتر مردانه · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 17 diamonds', fa: 'طلای ۱۸ عیار · ۱۷ الماس' },
    description: {
      en: 'A dignified design that turns beauty into a sign of power.',
      fa: 'طراحی‌ای باوقار که زیبایی را به نشانه‌ای از قدرت تبدیل می‌کند.'
    },
    model: 'sovrana',
    film: 'assets/video/sovrana-360.mp4',
    poster: 'assets/img/sovrana/film-poster.jpg',
    spin: 'assets/video/sovrana-spin.mp4',
    spinPoster: 'assets/img/sovrana/spin-poster.jpg',
    cover: 'assets/img/sovrana/render-01.jpg',
    thumb: 'assets/img/sovrana/render-01-sm.jpg',
    stream: ['assets/img/sovrana/stream-a.jpg', 'assets/img/sovrana/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/sovrana/render-01.jpg',
      'assets/img/sovrana/matrix-01.jpg', 'assets/img/sovrana/matrix-02.jpg',
      'assets/img/sovrana/matrix-03.jpg', 'assets/img/sovrana/matrix-04.jpg',
      'assets/img/sovrana/matrix-05.jpg', 'assets/img/sovrana/matrix-06.jpg',
      'assets/img/sovrana/matrix-07.jpg', 'assets/img/sovrana/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 4.26 g', fa: 'طلای زرد ۱۸ عیار: ۴٫۲۶ گرم' },
        { en: '18K white gold: 4.06 g', fa: 'طلای سفید ۱۸ عیار: ۴٫۰۶ گرم' },
        { en: '18K rose gold: 4.26 g', fa: 'طلای رزگلد ۱۸ عیار: ۴٫۲۶ گرم' },
        { en: '14K yellow gold: 3.56 g', fa: 'طلای زرد ۱۴ عیار: ۳٫۵۶ گرم' },
        { en: '22K yellow gold: 4.95 g', fa: 'طلای زرد ۲۲ عیار: ۴٫۹۵ گرم' },
        { en: 'Silver 925: 2.87 g', fa: 'نقره‌ی ۹۲۵: ۲٫۸۷ گرم' },
        { en: 'Platinum: 5.56 g', fa: 'پلاتین: ۵٫۵۶ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '17 round diamonds, 0.14 ct in total', fa: '۱۷ الماس گرد، در مجموع ۰٫۱۴ قیراط' },
        { en: 'All 17 stones 1.3 mm, prong-set in three rows of 6, 5 and 6', fa: 'هر ۱۷ نگین ۱٫۳ میلی‌متری، چنگی، در سه ردیف ۶، ۵ و ۶ تایی' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 23.4 mm', fa: 'ارتفاع از پایین تا بالا: ۲۳٫۴ میلی‌متر' },
        { en: 'Width across: 21.8 mm', fa: 'عرض کلی: ۲۱٫۸ میلی‌متر' },
        { en: 'Top width along the finger: 7.6 mm', fa: 'پهنای بالای انگشتر در امتداد انگشت: ۷٫۶ میلی‌متر' },
        { en: 'Inner diameter: 19.0 mm', fa: 'قطر داخلی: ۱۹٫۰ میلی‌متر' },
        { en: 'Band at the base: 1.0 mm', fa: 'ضخامت حلقه در پایین: ۱٫۰ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Three rows of diamonds on a flat rectangular top, the middle row raised', fa: 'سه ردیف الماس روی سطح تخت و مستطیلی بالا، با ردیف وسطِ برجسته‌تر' },
        { en: 'Tapered shoulders, each cut through with three open slots', fa: 'شانه‌های باریک‌شونده، هر کدام با سه شیار باز' },
        { en: 'Clean, polished band that narrows toward the base', fa: 'حلقه‌ی صاف و براق که به سمت پایین باریک می‌شود' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'royale',
    name: 'ROYALE',
    added: '2026-10-22T22:20',
    collection: 'rings',
    kind: { en: 'Solitaire ring · 18K gold and diamond', fa: 'انگشتر تک‌نگین · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · solitaire diamond', fa: 'طلای ۱۸ عیار · تک‌نگین الماس' },
    description: {
      en: 'A blend of elegance, brilliance and beauty, with an aristocratic signature.',
      fa: 'ترکیبی از ظرافت، درخشش و زیبایی با امضای اشرافی.'
    },
    model: 'royale',
    film: 'assets/video/royale-360.mp4',
    poster: 'assets/img/royale/film-poster.jpg',
    spin: 'assets/video/royale-spin.mp4',
    spinPoster: 'assets/img/royale/spin-poster.jpg',
    cover: 'assets/img/royale/render-01.jpg',
    thumb: 'assets/img/royale/render-01-sm.jpg',
    stream: ['assets/img/royale/stream-a.jpg', 'assets/img/royale/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/royale/render-01.jpg',
      'assets/img/royale/matrix-01.jpg', 'assets/img/royale/matrix-02.jpg',
      'assets/img/royale/matrix-03.jpg', 'assets/img/royale/matrix-04.jpg',
      'assets/img/royale/matrix-05.jpg', 'assets/img/royale/matrix-06.jpg',
      'assets/img/royale/matrix-07.jpg', 'assets/img/royale/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 4.77 g', fa: 'طلای زرد ۱۸ عیار: ۴٫۷۷ گرم' },
        { en: '18K white gold: 4.54 g', fa: 'طلای سفید ۱۸ عیار: ۴٫۵۴ گرم' },
        { en: '18K rose gold: 4.77 g', fa: 'طلای رزگلد ۱۸ عیار: ۴٫۷۷ گرم' },
        { en: '14K yellow gold: 3.99 g', fa: 'طلای زرد ۱۴ عیار: ۳٫۹۹ گرم' },
        { en: '22K yellow gold: 5.54 g', fa: 'طلای زرد ۲۲ عیار: ۵٫۵۴ گرم' },
        { en: 'Silver 925: 3.21 g', fa: 'نقره‌ی ۹۲۵: ۳٫۲۱ گرم' },
        { en: 'Platinum: 6.22 g', fa: 'پلاتین: ۶٫۲۲ گرم' }
      ]},
      { title: { en: 'Diamond', fa: 'الماس' }, items: [
        { en: '1 round diamond, 5.8 mm: 0.73 ct', fa: '۱ الماس گرد ۵٫۸ میلی‌متری: ۰٫۷۳ قیراط' },
        { en: 'Held in a six-prong head', fa: 'نشانده در سرِ شش‌چنگ' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 26.0 mm', fa: 'ارتفاع از پایین تا بالا: ۲۶٫۰ میلی‌متر' },
        { en: 'Width across: 21.5 mm', fa: 'عرض کلی: ۲۱٫۵ میلی‌متر' },
        { en: 'Top, along the finger: 9.1 mm', fa: 'بالای انگشتر در امتداد انگشت: ۹٫۱ میلی‌متر' },
        { en: 'Inner diameter: 17.9 mm', fa: 'قطر داخلی: ۱۷٫۹ میلی‌متر' },
        { en: 'Band at the base: 1.3 mm', fa: 'ضخامت حلقه در پایین: ۱٫۳ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Six-prong head on a stepped, angular seat', fa: 'سرِ شش‌چنگ روی نشیمنی پله‌دار و زاویه‌دار' },
        { en: 'One shoulder sweeps around the head in a single curve', fa: 'یکی از شانه‌ها در یک قوس پیوسته دور سرِ نگین می‌چرخد' },
        { en: 'Faceted, asymmetric shoulders', fa: 'شانه‌های تراش‌خورده و نامتقارن' }
      ]}
    ],
    note: { en: 'Weights and stone size come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'monarch',
    name: 'MONARCH',
    added: '2026-10-22T21:41',
    collection: 'rings',
    kind: { en: 'Wide band ring · 18K gold and diamonds', fa: 'انگشتر رینگی پهن · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 55 diamonds', fa: 'طلای ۱۸ عیار · ۵۵ الماس' },
    description: {
      en: 'A powerful, noble presence, with a character that outlasts time.',
      fa: 'جلوه‌ای قدرتمند و اصیل با شخصیتی فراتر از زمان.'
    },
    model: 'monarch',
    film: 'assets/video/monarch-360.mp4',
    poster: 'assets/img/monarch/film-poster.jpg',
    spin: 'assets/video/monarch-spin.mp4',
    spinPoster: 'assets/img/monarch/spin-poster.jpg',
    cover: 'assets/img/monarch/render-01.jpg',
    thumb: 'assets/img/monarch/render-01-sm.jpg',
    stream: ['assets/img/monarch/stream-a.jpg', 'assets/img/monarch/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/monarch/render-01.jpg',
      'assets/img/monarch/matrix-01.jpg', 'assets/img/monarch/matrix-02.jpg',
      'assets/img/monarch/matrix-03.jpg', 'assets/img/monarch/matrix-04.jpg',
      'assets/img/monarch/matrix-05.jpg', 'assets/img/monarch/matrix-06.jpg',
      'assets/img/monarch/matrix-07.jpg', 'assets/img/monarch/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 4.68 g', fa: 'طلای زرد ۱۸ عیار: ۴٫۶۸ گرم' },
        { en: '18K white gold: 4.46 g', fa: 'طلای سفید ۱۸ عیار: ۴٫۴۶ گرم' },
        { en: '18K rose gold: 4.68 g', fa: 'طلای رزگلد ۱۸ عیار: ۴٫۶۸ گرم' },
        { en: '14K yellow gold: 3.92 g', fa: 'طلای زرد ۱۴ عیار: ۳٫۹۲ گرم' },
        { en: '22K yellow gold: 5.44 g', fa: 'طلای زرد ۲۲ عیار: ۵٫۴۴ گرم' },
        { en: 'Silver 925: 3.15 g', fa: 'نقره‌ی ۹۲۵: ۳٫۱۵ گرم' },
        { en: 'Platinum: 6.11 g', fa: 'پلاتین: ۶٫۱۱ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '55 round diamonds, 0.38 ct in total', fa: '۵۵ الماس گرد، در مجموع ۰٫۳۸ قیراط' },
        { en: '7 stones, 1.34 mm: 0.07 ct, each in the centre of a gold disc', fa: '۷ نگین ۱٫۳۴ میلی‌متری: ۰٫۰۷ قیراط، هر کدام در مرکز یک دیسک طلایی' },
        { en: '48 stones, 1.2 mm: 0.31 ct, in pavé rows along both edges', fa: '۴۸ نگین ۱٫۲ میلی‌متری: ۰٫۳۱ قیراط، در ردیف‌های پاوه روی هر دو لبه' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 21.7 mm', fa: 'ارتفاع از پایین تا بالا: ۲۱٫۷ میلی‌متر' },
        { en: 'Width across: 22.8 mm', fa: 'عرض کلی: ۲۲٫۸ میلی‌متر' },
        { en: 'Band width along the finger: 8.5 mm', fa: 'پهنای رینگ در امتداد انگشت: ۸٫۵ میلی‌متر' },
        { en: 'Inner diameter: 18.1 mm', fa: 'قطر داخلی: ۱۸٫۱ میلی‌متر' },
        { en: 'Band at the base: 1.2 mm', fa: 'ضخامت حلقه در پایین: ۱٫۲ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'A row of overlapping oval gold discs, each set with a diamond', fa: 'ردیفی از دیسک‌های بیضی طلایی روی هم، هر کدام با یک الماس' },
        { en: 'Two pavé rows framing the discs on both edges', fa: 'دو ردیف پاوه که دیسک‌ها را از دو لبه قاب می‌گیرند' },
        { en: 'Open, split shank at the back', fa: 'بدنه‌ی باز و چندشاخه در پشت انگشتر' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'valoria',
    name: 'VALORIA',
    added: '2026-10-22T21:25',
    collection: 'rings',
    kind: { en: 'Solitaire ring · 18K gold and diamonds', fa: 'انگشتر تک‌نگین · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 25 diamonds', fa: 'طلای ۱۸ عیار · ۲۵ الماس' },
    description: {
      en: 'For those who find true value in the details, and in a design that stands apart.',
      fa: 'برای کسانی که ارزش واقعی را در جزئیات و طراحی متمایز می‌بینند.'
    },
    model: 'valoria',
    film: 'assets/video/valoria-360.mp4',
    poster: 'assets/img/valoria/film-poster.jpg',
    spin: 'assets/video/valoria-spin.mp4',
    spinPoster: 'assets/img/valoria/spin-poster.jpg',
    cover: 'assets/img/valoria/render-01.jpg',
    thumb: 'assets/img/valoria/render-01-sm.jpg',
    stream: ['assets/img/valoria/stream-a.jpg', 'assets/img/valoria/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/valoria/render-01.jpg',
      'assets/img/valoria/matrix-01.jpg', 'assets/img/valoria/matrix-02.jpg',
      'assets/img/valoria/matrix-03.jpg', 'assets/img/valoria/matrix-04.jpg',
      'assets/img/valoria/matrix-05.jpg', 'assets/img/valoria/matrix-06.jpg',
      'assets/img/valoria/matrix-07.jpg', 'assets/img/valoria/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 3.98 g', fa: 'طلای زرد ۱۸ عیار: ۳٫۹۸ گرم' },
        { en: '18K white gold: 3.79 g', fa: 'طلای سفید ۱۸ عیار: ۳٫۷۹ گرم' },
        { en: '18K rose gold: 3.98 g', fa: 'طلای رزگلد ۱۸ عیار: ۳٫۹۸ گرم' },
        { en: '14K yellow gold: 3.33 g', fa: 'طلای زرد ۱۴ عیار: ۳٫۳۳ گرم' },
        { en: '22K yellow gold: 4.62 g', fa: 'طلای زرد ۲۲ عیار: ۴٫۶۲ گرم' },
        { en: 'Silver 925: 2.68 g', fa: 'نقره‌ی ۹۲۵: ۲٫۶۸ گرم' },
        { en: 'Platinum: 5.20 g', fa: 'پلاتین: ۵٫۲۰ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '25 round diamonds, 0.97 ct in total', fa: '۲۵ الماس گرد، در مجموع ۰٫۹۷ قیراط' },
        { en: '1 centre stone, 6.0 mm: 0.81 ct, in a four-prong head', fa: '۱ نگین مرکزی ۶٫۰ میلی‌متری: ۰٫۸۱ قیراط، در سرِ چهارچنگ' },
        { en: '8 stones, 1.3 mm: 0.07 ct · 8 stones, 1.2 mm: 0.05 ct', fa: '۸ نگین ۱٫۳ میلی‌متری: ۰٫۰۷ قیراط · ۸ نگین ۱٫۲ میلی‌متری: ۰٫۰۵ قیراط' },
        { en: '8 stones, 1.1 mm: 0.04 ct', fa: '۸ نگین ۱٫۱ میلی‌متری: ۰٫۰۴ قیراط' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height, base to top: 27.0 mm', fa: 'ارتفاع از پایین تا بالا: ۲۷٫۰ میلی‌متر' },
        { en: 'Width across the shoulders: 21.3 mm', fa: 'عرض از شانه تا شانه: ۲۱٫۳ میلی‌متر' },
        { en: 'Top, along the finger: 8.8 mm', fa: 'بالای انگشتر در امتداد انگشت: ۸٫۸ میلی‌متر' },
        { en: 'Inner diameter: 17.5 mm', fa: 'قطر داخلی: ۱۷٫۵ میلی‌متر' },
        { en: 'Band at the base: 2.4 mm', fa: 'ضخامت حلقه در پایین: ۲٫۴ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Raised four-prong head holding the 6 mm centre diamond', fa: 'سرِ چهارچنگِ برجسته که الماس مرکزی ۶ میلی‌متری را نگه می‌دارد' },
        { en: 'Pavé clusters on both shoulders and a row beneath the head', fa: 'خوشه‌های پاوه روی هر دو شانه و یک ردیف زیر سرِ نگین' },
        { en: 'Triangular pavé insets on both sides of the band', fa: 'نشیمن‌های مثلثی پاوه در دو طرف حلقه' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'sovereign',
    name: 'SOVEREIGN',
    added: '2026-10-21T13:45',
    collection: 'bangles',
    kind: { en: "Hinged bangle · 18K gold and diamonds", fa: 'النگوی لولایی · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 37 diamonds', fa: 'طلای ۱۸ عیار · ۳۷ الماس' },
    description: {
      en: 'A statement of confidence, independence and power — in the form of jewellery.',
      fa: 'بیانی از اعتمادبه‌نفس، استقلال و قدرت در قالب جواهر.'
    },
    model: 'sovereign',
    film: 'assets/video/sovereign-360.mp4',
    poster: 'assets/img/sovereign/film-poster.jpg',
    spin: 'assets/video/sovereign-spin.mp4',
    spinPoster: 'assets/img/sovereign/spin-poster.jpg',
    cover: 'assets/img/sovereign/render-01.jpg',
    thumb: 'assets/img/sovereign/render-01-sm.jpg',
    stream: ['assets/img/sovereign/stream-a.jpg', 'assets/img/sovereign/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/sovereign/render-01.jpg',
      'assets/img/sovereign/matrix-01.jpg', 'assets/img/sovereign/matrix-02.jpg',
      'assets/img/sovereign/matrix-03.jpg', 'assets/img/sovereign/matrix-04.jpg',
      'assets/img/sovereign/matrix-05.jpg', 'assets/img/sovereign/matrix-06.jpg',
      'assets/img/sovereign/matrix-07.jpg', 'assets/img/sovereign/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 20.40 g', fa: 'طلای زرد ۱۸ عیار: ۲۰٫۴۰ گرم' },
        { en: '18K white gold: 20.72 g', fa: 'طلای سفید ۱۸ عیار: ۲۰٫۷۲ گرم' },
        { en: '18K rose gold: 20.40 g', fa: 'طلای رزگلد ۱۸ عیار: ۲۰٫۴۰ گرم' },
        { en: '14K yellow gold: 17.05 g', fa: 'طلای زرد ۱۴ عیار: ۱۷٫۰۵ گرم' },
        { en: '22K yellow gold: 23.68 g', fa: 'طلای زرد ۲۲ عیار: ۲۳٫۶۸ گرم' },
        { en: 'Silver 925: 13.71 g', fa: 'نقره‌ی ۹۲۵: ۱۳٫۷۱ گرم' },
        { en: 'Platinum: 26.61 g', fa: 'پلاتین: ۲۶٫۶۱ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '37 round diamonds, about 0.20 ct in total', fa: '۳۷ الماس گرد، در مجموع حدود ۰٫۲۰ قیراط' },
        { en: '3 stones, 1.4 mm · 5 stones, 1.3 mm · 4 stones, 1.2 mm', fa: '۳ نگین ۱٫۴ میلی‌متری · ۵ نگین ۱٫۳ میلی‌متری · ۴ نگین ۱٫۲ میلی‌متری' },
        { en: '4 stones, 1.1 mm · 21 stones, 1.0 mm', fa: '۴ نگین ۱٫۱ میلی‌متری · ۲۱ نگین ۱٫۰ میلی‌متری' },
        { en: 'Pavé-set in a long row and a short block along the band', fa: 'نشانده به‌صورت پاوه در یک ردیف بلند و یک بلوک کوتاه روی بدنه' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Outer, long axis: 63.3 mm', fa: 'قطر بیرونی، محور بلند: ۶۳٫۳ میلی‌متر' },
        { en: 'Outer, short axis: 52.4 mm', fa: 'قطر بیرونی، محور کوتاه: ۵۲٫۴ میلی‌متر' },
        { en: 'Band width: 7.2 mm', fa: 'پهنای بدنه: ۷٫۲ میلی‌متر' },
        { en: 'Band thickness: 2.8 mm', fa: 'ضخامت بدنه: ۲٫۸ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Hinged oval bangle with a concealed box clasp', fa: 'النگوی بیضی لولایی با قفل جعبه‌ای پنهان' },
        { en: 'A long single row of pavé set flush into the band', fa: 'یک ردیف بلند پاوه، هم‌تراز نشانده در بدنه' },
        { en: 'A short pavé block beside a cluster of raised gold beads', fa: 'یک بلوک کوتاه پاوه در کنار خوشه‌ای از گوی‌های طلایی برجسته' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
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
    stream: ['assets/img/regalia/stream-a.jpg', 'assets/img/regalia/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
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
    stream: ['assets/img/imperia/stream-a.jpg', 'assets/img/imperia/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
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
    stream: ['assets/img/aurelis/stream-a.jpg', 'assets/img/aurelis/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
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
