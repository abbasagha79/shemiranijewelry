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
    id: 'azerion',
    name: "AZÉRION",
    added: '2026-11-08T04:06',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 14 diamonds each", fa: "طلای ۱۸ عیار · ۱۴ الماس در هر لنگه" },
    description: {
      en: "A pavé heart in bloom over a fluted gold flower.",
      fa: "قلبی از الماس که بر گلی طلایی با گلبرگ‌های شیاردار شکفته است."
    },
    model: 'azerion',
    pose: { az: 0.4, el: 0.14, d: 1, ty: 0 },
    tour: [
      { az: 0.4, el: 0.14, d: 1, ty: 0 },
      { az: 0, el: 0.06, d: 0.9, ty: 0 },
      { az: 0.22, el: 0.18, d: 0.55, ty: 0 },
      { az: -0.5, el: 0.12, d: 0.95, ty: 0 }
    ],
    spin: 'assets/video/azerion-spin.mp4',
    spinPoster: 'assets/img/azerion/spin-poster.jpg',
    cover: 'assets/img/azerion/render-01.jpg',
    thumb: 'assets/img/azerion/render-01-sm.jpg',
    stream: ['assets/img/azerion/stream-a.jpg', 'assets/img/azerion/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/azerion/render-01.jpg',
      'assets/img/azerion/matrix-01.jpg',
      'assets/img/azerion/matrix-02.jpg',
      'assets/img/azerion/matrix-03.jpg',
      'assets/img/azerion/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 0.99 g", fa: "طلای زرد ۱۸ عیار: ۰٫۹۹ گرم" },
        { en: "18K white gold: 0.94 g", fa: "طلای سفید ۱۸ عیار: ۰٫۹۴ گرم" },
        { en: "18K rose gold: 0.99 g", fa: "طلای رزگلد ۱۸ عیار: ۰٫۹۹ گرم" },
        { en: "14K yellow gold: 0.83 g", fa: "طلای زرد ۱۴ عیار: ۰٫۸۳ گرم" },
        { en: "22K yellow gold: 1.15 g", fa: "طلای زرد ۲۲ عیار: ۱٫۱۵ گرم" },
        { en: "Silver 925: 0.67 g", fa: "نقره‌ی ۹۲۵: ۰٫۶۷ گرم" },
        { en: "Platinum: 1.29 g", fa: "پلاتین: ۱٫۲۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 14 diamonds, 0.17 ct", fa: "هر لنگه: ۱۴ الماس، ۰٫۱۷ قیراط" },
        { en: "7 stones, 1.5 mm: 0.09 ct", fa: "۷ نگین ۱٫۵ میلی‌متری: ۰٫۰۹ قیراط" },
        { en: "4 stones, 1.4 mm: 0.04 ct", fa: "۴ نگین ۱٫۴ میلی‌متری: ۰٫۰۴ قیراط" },
        { en: "2 stones, 1.6 mm: 0.03 ct", fa: "۲ نگین ۱٫۶ میلی‌متری: ۰٫۰۳ قیراط" },
        { en: "1 stone, 1.3 mm: 0.008 ct", fa: "۱ نگین ۱٫۳ میلی‌متری: ۰٫۰۰۸ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 12.8 mm", fa: "طول: ۱۲٫۸ میلی‌متر" },
        { en: "Width: 10.1 mm", fa: "عرض: ۱۰٫۱ میلی‌متر" },
        { en: "Depth with the post: 6.8 mm", fa: "عمق با پایه: ۶٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A heart set with pavé diamonds rests on a five-petal gold flower", fa: "قلبی با الماس‌های پاوه روی گلی طلایی با پنج گلبرگ" },
        { en: "Fine lines run along each petal", fa: "خطوط ظریف در امتداد هر گلبرگ" },
        { en: "Post fitting behind each earring", fa: "پایه‌ی میخی پشت هر گوشواره" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است. ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'celestre',
    name: "CÉLESTRÉ",
    added: '2026-11-08T04:05',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 19 diamonds each", fa: "طلای ۱۸ عیار · ۱۹ الماس در هر لنگه" },
    description: {
      en: "Three petals of light held in outlines of open gold.",
      fa: "سه گلبرگ از نور، در قاب‌های باز طلا."
    },
    model: 'celestre',
    pose: { az: 0.4, el: 0.14, d: 1, ty: 0 },
    tour: [
      { az: 0.4, el: 0.14, d: 1, ty: 0 },
      { az: 0, el: 0.06, d: 0.9, ty: 0 },
      { az: 0.22, el: 0.18, d: 0.55, ty: 0 },
      { az: -0.5, el: 0.12, d: 0.95, ty: 0 }
    ],
    spin: 'assets/video/celestre-spin.mp4',
    spinPoster: 'assets/img/celestre/spin-poster.jpg',
    cover: 'assets/img/celestre/render-01.jpg',
    thumb: 'assets/img/celestre/render-01-sm.jpg',
    stream: ['assets/img/celestre/stream-a.jpg', 'assets/img/celestre/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/celestre/render-01.jpg',
      'assets/img/celestre/matrix-01.jpg',
      'assets/img/celestre/matrix-02.jpg',
      'assets/img/celestre/matrix-03.jpg',
      'assets/img/celestre/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.68 g", fa: "طلای زرد ۱۸ عیار: ۱٫۶۸ گرم" },
        { en: "18K white gold: 1.59 g", fa: "طلای سفید ۱۸ عیار: ۱٫۵۹ گرم" },
        { en: "18K rose gold: 1.68 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۶۸ گرم" },
        { en: "14K yellow gold: 1.40 g", fa: "طلای زرد ۱۴ عیار: ۱٫۴۰ گرم" },
        { en: "22K yellow gold: 1.94 g", fa: "طلای زرد ۲۲ عیار: ۱٫۹۴ گرم" },
        { en: "Silver 925: 1.13 g", fa: "نقره‌ی ۹۲۵: ۱٫۱۳ گرم" },
        { en: "Platinum: 2.18 g", fa: "پلاتین: ۲٫۱۸ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 19 diamonds, 0.19 ct", fa: "هر لنگه: ۱۹ الماس، ۰٫۱۹ قیراط" },
        { en: "11 stones, 1.4 mm: 0.115 ct", fa: "۱۱ نگین ۱٫۴ میلی‌متری: ۰٫۱۱۵ قیراط" },
        { en: "6 stones, 1.3 mm: 0.05 ct", fa: "۶ نگین ۱٫۳ میلی‌متری: ۰٫۰۵ قیراط" },
        { en: "2 stones, 1.5 mm: 0.025 ct", fa: "۲ نگین ۱٫۵ میلی‌متری: ۰٫۰۲۵ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 14.0 mm", fa: "طول: ۱۴٫۰ میلی‌متر" },
        { en: "Width: 18.6 mm", fa: "عرض: ۱۸٫۶ میلی‌متر" },
        { en: "Depth with the post: 8.5 mm", fa: "عمق با پایه: ۸٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Three triangular petals set with pavé diamonds, with a small round stone above", fa: "سه گلبرگ مثلثی با الماس‌های پاوه و یک نگین گرد کوچک در بالا" },
        { en: "Open gold leaf outlines frame the petals", fa: "خطوط باز برگ‌های طلایی دور گلبرگ‌ها" },
        { en: "Post fitting behind each earring", fa: "پایه‌ی میخی پشت هر گوشواره" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است. ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'velorian',
    name: "VÉLORIAN",
    added: '2026-11-08T04:04',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 13 diamonds each", fa: "طلای ۱۸ عیار · ۱۳ الماس در هر لنگه" },
    description: {
      en: "One great stone at the centre, a halo of light around it.",
      fa: "یک نگین بزرگ در مرکز و هاله‌ای از نور دور آن."
    },
    model: 'velorian',
    pose: { az: 0.4, el: 0.14, d: 1, ty: 0 },
    tour: [
      { az: 0.4, el: 0.14, d: 1, ty: 0 },
      { az: 0, el: 0.06, d: 0.9, ty: 0 },
      { az: 0.22, el: 0.18, d: 0.55, ty: 0 },
      { az: -0.5, el: 0.12, d: 0.95, ty: 0 }
    ],
    spin: 'assets/video/velorian-spin.mp4',
    spinPoster: 'assets/img/velorian/spin-poster.jpg',
    cover: 'assets/img/velorian/render-01.jpg',
    thumb: 'assets/img/velorian/render-01-sm.jpg',
    stream: ['assets/img/velorian/stream-a.jpg', 'assets/img/velorian/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/velorian/render-01.jpg',
      'assets/img/velorian/matrix-01.jpg',
      'assets/img/velorian/matrix-02.jpg',
      'assets/img/velorian/matrix-03.jpg',
      'assets/img/velorian/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.91 g", fa: "طلای زرد ۱۸ عیار: ۱٫۹۱ گرم" },
        { en: "18K white gold: 1.82 g", fa: "طلای سفید ۱۸ عیار: ۱٫۸۲ گرم" },
        { en: "18K rose gold: 1.91 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۹۱ گرم" },
        { en: "14K yellow gold: 1.60 g", fa: "طلای زرد ۱۴ عیار: ۱٫۶۰ گرم" },
        { en: "22K yellow gold: 2.22 g", fa: "طلای زرد ۲۲ عیار: ۲٫۲۲ گرم" },
        { en: "Silver 925: 1.29 g", fa: "نقره‌ی ۹۲۵: ۱٫۲۹ گرم" },
        { en: "Platinum: 2.50 g", fa: "پلاتین: ۲٫۵۰ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 13 diamonds, 1.00 ct", fa: "هر لنگه: ۱۳ الماس، ۱٫۰۰ قیراط" },
        { en: "1 oval diamond, 7.2 × 5.2 mm: 0.74 ct", fa: "۱ الماس بیضی ۷٫۲ × ۵٫۲ میلی‌متری: ۰٫۷۴ قیراط" },
        { en: "12 round stones, 1.8 mm: 0.26 ct", fa: "۱۲ نگین گرد ۱٫۸ میلی‌متری: ۰٫۲۶ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 13.6 mm", fa: "طول: ۱۳٫۶ میلی‌متر" },
        { en: "Width: 11.5 mm", fa: "عرض: ۱۱٫۵ میلی‌متر" },
        { en: "Depth with the post: 11.7 mm", fa: "عمق با پایه: ۱۱٫۷ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A large oval diamond held by claws at the centre", fa: "الماس بیضی بزرگ با چنگک در مرکز" },
        { en: "A ring of petal-shaped settings around it, each with a diamond", fa: "حلقه‌ای از گلبرگ‌های نگین‌دار دور آن" },
        { en: "Post fitting behind each earring", fa: "پایه‌ی میخی پشت هر گوشواره" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است. ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'sylvera',
    name: "SYLVÉRA",
    added: '2026-11-08T04:03',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 30 diamonds each", fa: "طلای ۱۸ عیار · ۳۰ الماس در هر لنگه" },
    description: {
      en: "A flower at the crown, two drops of light below.",
      fa: "گلی در بالا و دو قطره‌ی نور در پایین."
    },
    model: 'sylvera',
    pose: { az: 0.4, el: 0.14, d: 1, ty: 0 },
    tour: [
      { az: 0.4, el: 0.14, d: 1, ty: 0 },
      { az: 0, el: 0.06, d: 0.9, ty: 0 },
      { az: 0.22, el: 0.18, d: 0.55, ty: 0 },
      { az: -0.5, el: 0.12, d: 0.95, ty: 0 }
    ],
    spin: 'assets/video/sylvera-spin.mp4',
    spinPoster: 'assets/img/sylvera/spin-poster.jpg',
    cover: 'assets/img/sylvera/render-01.jpg',
    thumb: 'assets/img/sylvera/render-01-sm.jpg',
    stream: ['assets/img/sylvera/stream-a.jpg', 'assets/img/sylvera/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/sylvera/render-01.jpg',
      'assets/img/sylvera/matrix-01.jpg',
      'assets/img/sylvera/matrix-02.jpg',
      'assets/img/sylvera/matrix-03.jpg',
      'assets/img/sylvera/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.80 g", fa: "طلای زرد ۱۸ عیار: ۱٫۸۰ گرم" },
        { en: "18K white gold: 1.71 g", fa: "طلای سفید ۱۸ عیار: ۱٫۷۱ گرم" },
        { en: "18K rose gold: 1.80 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۸۰ گرم" },
        { en: "14K yellow gold: 1.51 g", fa: "طلای زرد ۱۴ عیار: ۱٫۵۱ گرم" },
        { en: "22K yellow gold: 2.09 g", fa: "طلای زرد ۲۲ عیار: ۲٫۰۹ گرم" },
        { en: "Silver 925: 1.21 g", fa: "نقره‌ی ۹۲۵: ۱٫۲۱ گرم" },
        { en: "Platinum: 2.35 g", fa: "پلاتین: ۲٫۳۵ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 30 diamonds, 0.23 ct", fa: "هر لنگه: ۳۰ الماس، ۰٫۲۳ قیراط" },
        { en: "9 stones, 1.5 mm: 0.115 ct", fa: "۹ نگین ۱٫۵ میلی‌متری: ۰٫۱۱۵ قیراط" },
        { en: "15 stones, 1.1 mm: 0.075 ct", fa: "۱۵ نگین ۱٫۱ میلی‌متری: ۰٫۰۷۵ قیراط" },
        { en: "6 stones, 1.2 mm: 0.04 ct", fa: "۶ نگین ۱٫۲ میلی‌متری: ۰٫۰۴ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 19.5 mm", fa: "طول: ۱۹٫۵ میلی‌متر" },
        { en: "Width: 11.5 mm", fa: "عرض: ۱۱٫۵ میلی‌متر" },
        { en: "Depth with the post: 9.1 mm", fa: "عمق با پایه: ۹٫۱ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A flower of marquise and round diamonds at the top", fa: "گلی از الماس‌های مارکیز و گرد در بالا" },
        { en: "An outer drop-shaped loop, beaded on one side and set with pavé along the bottom", fa: "حلقه‌ی قطره‌ای بیرونی، دانه‌دار در یک سو و با نگین پاوه در پایین" },
        { en: "An inner open loop with three stones", fa: "حلقه‌ی باز داخلی با سه نگین" },
        { en: "Post fitting behind each earring", fa: "پایه‌ی میخی پشت هر گوشواره" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است. ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'emerove',
    name: "ÉMEROVÉ",
    added: '2026-11-08T04:02',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 21 diamonds each", fa: "طلای ۱۸ عیار · ۲۱ الماس در هر لنگه" },
    description: {
      en: "A five-pointed star of light, set among open leaves of gold.",
      fa: "ستاره‌ای پنج‌پر از نور، میان برگ‌های باز طلا."
    },
    model: 'emerove',
    pose: { az: 0.4, el: 0.14, d: 1, ty: 0 },
    tour: [
      { az: 0.4, el: 0.14, d: 1, ty: 0 },
      { az: 0, el: 0.06, d: 0.9, ty: 0 },
      { az: 0.22, el: 0.18, d: 0.55, ty: 0 },
      { az: -0.5, el: 0.12, d: 0.95, ty: 0 }
    ],
    spin: 'assets/video/emerove-spin.mp4',
    spinPoster: 'assets/img/emerove/spin-poster.jpg',
    cover: 'assets/img/emerove/render-01.jpg',
    thumb: 'assets/img/emerove/render-01-sm.jpg',
    stream: ['assets/img/emerove/stream-a.jpg', 'assets/img/emerove/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/emerove/render-01.jpg',
      'assets/img/emerove/matrix-01.jpg',
      'assets/img/emerove/matrix-02.jpg',
      'assets/img/emerove/matrix-03.jpg',
      'assets/img/emerove/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.11 g", fa: "طلای زرد ۱۸ عیار: ۲٫۱۱ گرم" },
        { en: "18K white gold: 2.01 g", fa: "طلای سفید ۱۸ عیار: ۲٫۰۱ گرم" },
        { en: "18K rose gold: 2.11 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۱۱ گرم" },
        { en: "14K yellow gold: 1.77 g", fa: "طلای زرد ۱۴ عیار: ۱٫۷۷ گرم" },
        { en: "22K yellow gold: 2.45 g", fa: "طلای زرد ۲۲ عیار: ۲٫۴۵ گرم" },
        { en: "Silver 925: 1.42 g", fa: "نقره‌ی ۹۲۵: ۱٫۴۲ گرم" },
        { en: "Platinum: 2.75 g", fa: "پلاتین: ۲٫۷۵ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 21 diamonds, 0.28 ct", fa: "هر لنگه: ۲۱ الماس، ۰٫۲۸ قیراط" },
        { en: "1 stone, 2.0 mm: 0.03 ct", fa: "۱ نگین ۲٫۰ میلی‌متری: ۰٫۰۳ قیراط" },
        { en: "20 stones, 1.5 mm: 0.25 ct", fa: "۲۰ نگین ۱٫۵ میلی‌متری: ۰٫۲۵ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 19.2 mm", fa: "طول: ۱۹٫۲ میلی‌متر" },
        { en: "Width: 20.2 mm", fa: "عرض: ۲۰٫۲ میلی‌متر" },
        { en: "Depth with the post: 9.6 mm", fa: "عمق با پایه: ۹٫۶ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Five diamond-set panels form a star around a larger centre stone", fa: "پنج صفحه‌ی نگین‌دار ستاره‌ای دور یک نگین مرکزی بزرگ‌تر می‌سازند" },
        { en: "Five open gold leaves between the points", fa: "پنج برگ باز طلایی میان پره‌ها" },
        { en: "Post fitting behind each earring", fa: "پایه‌ی میخی پشت هر گوشواره" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است. ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'zorelian',
    name: "ZORÉLIAN",
    added: '2026-11-08T04:01',
    collection: 'rings',
    kind: { en: "Pavé ring · 18K gold and diamonds", fa: "انگشتر پاوه · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 46 diamonds", fa: "طلای ۱۸ عیار · ۴۶ الماس" },
    description: {
      en: "A circle of diamonds held between two flowered links.",
      fa: "حلقه‌ای از الماس میان دو حلقه‌ی گل‌دار."
    },
    model: 'zorelian',
    spin: 'assets/video/zorelian-spin.mp4',
    spinPoster: 'assets/img/zorelian/spin-poster.jpg',
    cover: 'assets/img/zorelian/render-01.jpg',
    thumb: 'assets/img/zorelian/render-01-sm.jpg',
    stream: ['assets/img/zorelian/stream-a.jpg', 'assets/img/zorelian/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/zorelian/render-01.jpg',
      'assets/img/zorelian/matrix-01.jpg',
      'assets/img/zorelian/matrix-02.jpg',
      'assets/img/zorelian/matrix-03.jpg',
      'assets/img/zorelian/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.40 g", fa: "طلای زرد ۱۸ عیار: ۳٫۴۰ گرم" },
        { en: "18K white gold: 3.24 g", fa: "طلای سفید ۱۸ عیار: ۳٫۲۴ گرم" },
        { en: "18K rose gold: 3.40 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۴۰ گرم" },
        { en: "14K yellow gold: 2.84 g", fa: "طلای زرد ۱۴ عیار: ۲٫۸۴ گرم" },
        { en: "22K yellow gold: 3.95 g", fa: "طلای زرد ۲۲ عیار: ۳٫۹۵ گرم" },
        { en: "Silver 925: 2.29 g", fa: "نقره‌ی ۹۲۵: ۲٫۲۹ گرم" },
        { en: "Platinum: 4.44 g", fa: "پلاتین: ۴٫۴۴ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "46 round diamonds, 0.19 ct in total", fa: "۴۶ الماس گرد، در مجموع ۰٫۱۹ قیراط" },
        { en: "12 stones, 1.2 mm: 0.08 ct", fa: "۱۲ نگین ۱٫۲ میلی‌متری: ۰٫۰۸ قیراط" },
        { en: "22 stones, 1.0 mm: 0.085 ct", fa: "۲۲ نگین ۱٫۰ میلی‌متری: ۰٫۰۸۵ قیراط" },
        { en: "12 stones, 0.9 mm: 0.033 ct", fa: "۱۲ نگین ۰٫۹ میلی‌متری: ۰٫۰۳۳ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.3 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۳ میلی‌متر" },
        { en: "Width across: 21.5 mm", fa: "عرض کلی: ۲۱٫۵ میلی‌متر" },
        { en: "Inner diameter: 17.0 mm", fa: "قطر داخلی: ۱۷٫۰ میلی‌متر" },
        { en: "Width along the finger: 7.5 mm", fa: "عرض در امتداد انگشت: ۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A pavé-set circle on top, linked to two scalloped gold flower settings", fa: "حلقه‌ی پاوه در بالا، متصل به دو قاب گل‌مانند با لبه‌ی موجی" },
        { en: "Two rows of pavé diamonds along each side of the band", fa: "دو ردیف الماس پاوه در هر طرف رینگ" },
        { en: "Split shank", fa: "بازوی دوشاخه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'evorien',
    name: "ÉVORIEN",
    added: '2026-11-07T23:06',
    collection: 'rings',
    kind: { en: "Open ring · 18K gold and diamonds", fa: "انگشتر باز · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 36 diamonds", fa: "طلای ۱۸ عیار · ۳۶ الماس" },
    description: {
      en: "Soft curves that meet without closing: light on one side, polished gold on the other.",
      fa: "منحنی‌هایی نرم که بی‌آنکه ببندند به هم می‌رسند؛ از یک سو نور، از سوی دیگر طلای براق."
    },
    model: 'evorien',
    spin: 'assets/video/evorien-spin.mp4',
    spinPoster: 'assets/img/evorien/spin-poster.jpg',
    cover: 'assets/img/evorien/render-01.jpg',
    thumb: 'assets/img/evorien/render-01-sm.jpg',
    stream: ['assets/img/evorien/stream-a.jpg', 'assets/img/evorien/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/evorien/render-01.jpg',
      'assets/img/evorien/matrix-01.jpg',
      'assets/img/evorien/matrix-02.jpg',
      'assets/img/evorien/matrix-03.jpg',
      'assets/img/evorien/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.24 g", fa: "طلای زرد ۱۸ عیار: ۳٫۲۴ گرم" },
        { en: "18K white gold: 3.08 g", fa: "طلای سفید ۱۸ عیار: ۳٫۰۸ گرم" },
        { en: "18K rose gold: 3.24 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۲۴ گرم" },
        { en: "14K yellow gold: 2.71 g", fa: "طلای زرد ۱۴ عیار: ۲٫۷۱ گرم" },
        { en: "22K yellow gold: 3.76 g", fa: "طلای زرد ۲۲ عیار: ۳٫۷۶ گرم" },
        { en: "Silver 925: 2.18 g", fa: "نقره‌ی ۹۲۵: ۲٫۱۸ گرم" },
        { en: "Platinum: 4.23 g", fa: "پلاتین: ۴٫۲۳ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "36 round diamonds, 0.23 ct in total", fa: "۳۶ الماس گرد، در مجموع ۰٫۲۳ قیراط" },
        { en: "15 stones, 1.3 mm: 0.12 ct", fa: "۱۵ نگین ۱٫۳ میلی‌متری: ۰٫۱۲ قیراط" },
        { en: "10 stones, 1.2 mm: 0.07 ct", fa: "۱۰ نگین ۱٫۲ میلی‌متری: ۰٫۰۷ قیراط" },
        { en: "5 stones, 1.1 mm: 0.025 ct", fa: "۵ نگین ۱٫۱ میلی‌متری: ۰٫۰۲۵ قیراط" },
        { en: "4 stones, 1.0 mm: 0.015 ct", fa: "۴ نگین ۱٫۰ میلی‌متری: ۰٫۰۱۵ قیراط" },
        { en: "2 stones, 0.9 mm: 0.005 ct", fa: "۲ نگین ۰٫۹ میلی‌متری: ۰٫۰۰۵ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.4 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۴ میلی‌متر" },
        { en: "Width across: 21.2 mm", fa: "عرض کلی: ۲۱٫۲ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two open ends meet on top: a pavé-edged scroll and a pavé loop around a polished teardrop", fa: "دو سرِ باز انگشتر در بالا به هم می‌رسند: یک پیچکِ نگین‌دار و یک حلقه‌ی پاوه دور قطره‌ای براق" },
        { en: "Split shank", fa: "بازوی دوشاخه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'zephoria',
    name: "ZÉPHORIA",
    added: '2026-11-07T23:05',
    collection: 'rings',
    kind: { en: "Leaf bypass ring · 18K gold and diamonds", fa: "انگشتر برگ · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 46 diamonds", fa: "طلای ۱۸ عیار · ۴۶ الماس" },
    description: {
      en: "Light as a breeze, drawn as a vine of diamond-set leaves.",
      fa: "سبک مثل نسیم، با طرحی از شاخه‌ای از برگ‌های نگین‌دار."
    },
    model: 'zephoria',
    spin: 'assets/video/zephoria-spin.mp4',
    spinPoster: 'assets/img/zephoria/spin-poster.jpg',
    cover: 'assets/img/zephoria/render-01.jpg',
    thumb: 'assets/img/zephoria/render-01-sm.jpg',
    stream: ['assets/img/zephoria/stream-a.jpg', 'assets/img/zephoria/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/zephoria/render-01.jpg',
      'assets/img/zephoria/matrix-01.jpg',
      'assets/img/zephoria/matrix-02.jpg',
      'assets/img/zephoria/matrix-03.jpg',
      'assets/img/zephoria/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.47 g", fa: "طلای زرد ۱۸ عیار: ۲٫۴۷ گرم" },
        { en: "18K white gold: 2.35 g", fa: "طلای سفید ۱۸ عیار: ۲٫۳۵ گرم" },
        { en: "18K rose gold: 2.47 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۴۷ گرم" },
        { en: "14K yellow gold: 2.06 g", fa: "طلای زرد ۱۴ عیار: ۲٫۰۶ گرم" },
        { en: "22K yellow gold: 2.87 g", fa: "طلای زرد ۲۲ عیار: ۲٫۸۷ گرم" },
        { en: "Silver 925: 1.66 g", fa: "نقره‌ی ۹۲۵: ۱٫۶۶ گرم" },
        { en: "Platinum: 3.22 g", fa: "پلاتین: ۳٫۲۲ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "46 round diamonds, 0.38 ct in total", fa: "۴۶ الماس گرد، در مجموع ۰٫۳۸ قیراط" },
        { en: "17 stones, 1.3 mm: 0.14 ct", fa: "۱۷ نگین ۱٫۳ میلی‌متری: ۰٫۱۴ قیراط" },
        { en: "19 stones, 1.2 mm: 0.12 ct", fa: "۱۹ نگین ۱٫۲ میلی‌متری: ۰٫۱۲ قیراط" },
        { en: "5 stones, 1.5 mm: 0.06 ct", fa: "۵ نگین ۱٫۵ میلی‌متری: ۰٫۰۶ قیراط" },
        { en: "5 stones, 1.4 mm: 0.05 ct", fa: "۵ نگین ۱٫۴ میلی‌متری: ۰٫۰۵ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.3 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۳ میلی‌متر" },
        { en: "Width across: 21.2 mm", fa: "عرض کلی: ۲۱٫۲ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two pavé-set vines cross over the top", fa: "دو شاخه‌ی پاوه روی هم از بالا می‌گذرند" },
        { en: "Leaf-shaped settings of paired diamonds between the vines", fa: "برگ‌هایی با دو نگین، میان دو شاخه" },
        { en: "A small leaf tipped with two stones", fa: "برگی کوچک با دو نگین در سر شاخه" },
        { en: "Open split shank", fa: "بازوی باز و دوشاخه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'aurevant',
    name: "AURÉVANT",
    added: '2026-11-07T23:04',
    collection: 'rings',
    kind: { en: "Beaded cluster ring · 18K gold and diamonds", fa: "انگشتر خوشه‌ای دانه‌دار · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 35 diamonds", fa: "طلای ۱۸ عیار · ۳۵ الماس" },
    description: {
      en: "Golden grain and a crown of light, a texture made to catch every glance.",
      fa: "دانه‌های طلا و تاجی از نور؛ بافتی که هر نگاهی را می‌گیرد."
    },
    model: 'aurevant',
    spin: 'assets/video/aurevant-spin.mp4',
    spinPoster: 'assets/img/aurevant/spin-poster.jpg',
    cover: 'assets/img/aurevant/render-01.jpg',
    thumb: 'assets/img/aurevant/render-01-sm.jpg',
    stream: ['assets/img/aurevant/stream-a.jpg', 'assets/img/aurevant/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/aurevant/render-01.jpg',
      'assets/img/aurevant/matrix-01.jpg',
      'assets/img/aurevant/matrix-02.jpg',
      'assets/img/aurevant/matrix-03.jpg',
      'assets/img/aurevant/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 4.61 g", fa: "طلای زرد ۱۸ عیار: ۴٫۶۱ گرم" },
        { en: "18K white gold: 4.39 g", fa: "طلای سفید ۱۸ عیار: ۴٫۳۹ گرم" },
        { en: "18K rose gold: 4.61 g", fa: "طلای رزگلد ۱۸ عیار: ۴٫۶۱ گرم" },
        { en: "14K yellow gold: 3.86 g", fa: "طلای زرد ۱۴ عیار: ۳٫۸۶ گرم" },
        { en: "22K yellow gold: 5.36 g", fa: "طلای زرد ۲۲ عیار: ۵٫۳۶ گرم" },
        { en: "Silver 925: 3.10 g", fa: "نقره‌ی ۹۲۵: ۳٫۱۰ گرم" },
        { en: "Platinum: 6.02 g", fa: "پلاتین: ۶٫۰۲ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "35 round diamonds, 0.36 ct in total", fa: "۳۵ الماس گرد، در مجموع ۰٫۳۶ قیراط" },
        { en: "14 stones, 1.5 mm: 0.18 ct", fa: "۱۴ نگین ۱٫۵ میلی‌متری: ۰٫۱۸ قیراط" },
        { en: "10 stones, 1.3 mm: 0.08 ct", fa: "۱۰ نگین ۱٫۳ میلی‌متری: ۰٫۰۸ قیراط" },
        { en: "7 stones, 1.4 mm: 0.07 ct", fa: "۷ نگین ۱٫۴ میلی‌متری: ۰٫۰۷ قیراط" },
        { en: "1 stone, 1.6 mm: 0.015 ct", fa: "۱ نگین ۱٫۶ میلی‌متری: ۰٫۰۱۵ قیراط" },
        { en: "2 stones, 1.2 mm: 0.013 ct", fa: "۲ نگین ۱٫۲ میلی‌متری: ۰٫۰۱۳ قیراط" },
        { en: "1 stone, 1.1 mm: 0.005 ct", fa: "۱ نگین ۱٫۱ میلی‌متری: ۰٫۰۰۵ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 28.3 mm", fa: "ارتفاع از پایین تا بالا: ۲۸٫۳ میلی‌متر" },
        { en: "Width across: 22.9 mm", fa: "عرض کلی: ۲۲٫۹ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A domed oval top with a beaded gold texture", fa: "سرِ بیضی و برآمده با بافت دانه‌دار طلا" },
        { en: "A raised round cluster of claw-set diamonds at the centre", fa: "خوشه‌ی گرد و برجسته‌ی الماس با چنگک در مرکز" },
        { en: "A pavé panel on one shoulder", fa: "صفحه‌ای پاوه روی یک شانه" },
        { en: "Tapering band", fa: "رینگ باریک‌شونده" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'calveron',
    name: "CALVÉRON",
    added: '2026-11-07T23:03',
    collection: 'rings',
    kind: { en: "Pavé leaf ring · 18K gold and diamonds", fa: "انگشتر برگ پاوه · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 25 diamonds", fa: "طلای ۱۸ عیار · ۲۵ الماس" },
    description: {
      en: "Clean geometry softened by a single gold leaf.",
      fa: "هندسه‌ای ساده که یک برگ طلایی نرمش کرده است."
    },
    model: 'calveron',
    spin: 'assets/video/calveron-spin.mp4',
    spinPoster: 'assets/img/calveron/spin-poster.jpg',
    cover: 'assets/img/calveron/render-01.jpg',
    thumb: 'assets/img/calveron/render-01-sm.jpg',
    stream: ['assets/img/calveron/stream-a.jpg', 'assets/img/calveron/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/calveron/render-01.jpg',
      'assets/img/calveron/matrix-01.jpg',
      'assets/img/calveron/matrix-02.jpg',
      'assets/img/calveron/matrix-03.jpg',
      'assets/img/calveron/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.52 g", fa: "طلای زرد ۱۸ عیار: ۲٫۵۲ گرم" },
        { en: "18K white gold: 2.40 g", fa: "طلای سفید ۱۸ عیار: ۲٫۴۰ گرم" },
        { en: "18K rose gold: 2.52 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۵۲ گرم" },
        { en: "14K yellow gold: 2.11 g", fa: "طلای زرد ۱۴ عیار: ۲٫۱۱ گرم" },
        { en: "22K yellow gold: 2.93 g", fa: "طلای زرد ۲۲ عیار: ۲٫۹۳ گرم" },
        { en: "Silver 925: 1.70 g", fa: "نقره‌ی ۹۲۵: ۱٫۷۰ گرم" },
        { en: "Platinum: 3.29 g", fa: "پلاتین: ۳٫۲۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "25 round diamonds, 0.20 ct in total", fa: "۲۵ الماس گرد، در مجموع ۰٫۲۰ قیراط" },
        { en: "11 stones, 1.3 mm: 0.09 ct", fa: "۱۱ نگین ۱٫۳ میلی‌متری: ۰٫۰۹ قیراط" },
        { en: "10 stones, 1.2 mm: 0.07 ct", fa: "۱۰ نگین ۱٫۲ میلی‌متری: ۰٫۰۷ قیراط" },
        { en: "4 stones, 1.4 mm: 0.041 ct", fa: "۴ نگین ۱٫۴ میلی‌متری: ۰٫۰۴۱ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 24.2 mm", fa: "ارتفاع از پایین تا بالا: ۲۴٫۲ میلی‌متر" },
        { en: "Width across: 21.0 mm", fa: "عرض کلی: ۲۱٫۰ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A square pavé frame meets a gold leaf plate with petal cut-outs", fa: "قابی چهارگوش با نگین پاوه به صفحه‌ی برگ طلایی با برش‌های گلبرگی می‌رسد" },
        { en: "Three claw-set stones on a teardrop curl", fa: "سه نگین با چنگک روی پیچکی قطره‌ای" },
        { en: "Pavé set along one shoulder", fa: "نگین‌های پاوه در امتداد یک شانه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'verenza',
    name: "VÉRÉNZA",
    added: '2026-11-07T23:02',
    collection: 'rings',
    kind: { en: "Interlaced ring · 18K gold and diamonds", fa: "انگشتر درهم‌تنیده · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 37 diamonds", fa: "طلای ۱۸ عیار · ۳۷ الماس" },
    description: {
      en: "Two loops that meet and hold, an embrace drawn in diamonds.",
      fa: "دو حلقه که به هم می‌رسند و یکدیگر را نگه می‌دارند؛ آغوشی از الماس."
    },
    model: 'verenza',
    spin: 'assets/video/verenza-spin.mp4',
    spinPoster: 'assets/img/verenza/spin-poster.jpg',
    cover: 'assets/img/verenza/render-01.jpg',
    thumb: 'assets/img/verenza/render-01-sm.jpg',
    stream: ['assets/img/verenza/stream-a.jpg', 'assets/img/verenza/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/verenza/render-01.jpg',
      'assets/img/verenza/matrix-01.jpg',
      'assets/img/verenza/matrix-02.jpg',
      'assets/img/verenza/matrix-03.jpg',
      'assets/img/verenza/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.89 g", fa: "طلای زرد ۱۸ عیار: ۲٫۸۹ گرم" },
        { en: "18K white gold: 2.75 g", fa: "طلای سفید ۱۸ عیار: ۲٫۷۵ گرم" },
        { en: "18K rose gold: 2.89 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۸۹ گرم" },
        { en: "14K yellow gold: 2.42 g", fa: "طلای زرد ۱۴ عیار: ۲٫۴۲ گرم" },
        { en: "22K yellow gold: 3.36 g", fa: "طلای زرد ۲۲ عیار: ۳٫۳۶ گرم" },
        { en: "Silver 925: 1.94 g", fa: "نقره‌ی ۹۲۵: ۱٫۹۴ گرم" },
        { en: "Platinum: 3.77 g", fa: "پلاتین: ۳٫۷۷ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "37 round diamonds, 0.24 ct in total", fa: "۳۷ الماس گرد، در مجموع ۰٫۲۴ قیراط" },
        { en: "16 stones, 1.2 mm: 0.10 ct", fa: "۱۶ نگین ۱٫۲ میلی‌متری: ۰٫۱۰ قیراط" },
        { en: "9 stones, 1.3 mm: 0.07 ct", fa: "۹ نگین ۱٫۳ میلی‌متری: ۰٫۰۷ قیراط" },
        { en: "2 stones, 1.4 mm: 0.021 ct", fa: "۲ نگین ۱٫۴ میلی‌متری: ۰٫۰۲۱ قیراط" },
        { en: "3 stones, 1.1 mm: 0.015 ct", fa: "۳ نگین ۱٫۱ میلی‌متری: ۰٫۰۱۵ قیراط" },
        { en: "3 stones, 1.0 mm: 0.011 ct", fa: "۳ نگین ۱٫۰ میلی‌متری: ۰٫۰۱۱ قیراط" },
        { en: "4 stones, 0.9 mm: 0.011 ct", fa: "۴ نگین ۰٫۹ میلی‌متری: ۰٫۰۱۱ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 20.9 mm", fa: "ارتفاع از پایین تا بالا: ۲۰٫۹ میلی‌متر" },
        { en: "Width across: 20.8 mm", fa: "عرض کلی: ۲۰٫۸ میلی‌متر" },
        { en: "Inner diameter: 17.0 mm", fa: "قطر داخلی: ۱۷٫۰ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two interlaced loops edged with pavé", fa: "دو حلقه‌ی درهم‌تنیده با لبه‌ی پاوه" },
        { en: "A pavé-set branch runs along one shoulder", fa: "شاخه‌ای پاوه در امتداد یک شانه" },
        { en: "Twisted, split band", fa: "رینگ دوشاخه و پیچ‌خورده" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'orlevian',
    name: "ORLÉVIAN",
    added: '2026-11-07T23:01',
    collection: 'rings',
    kind: { en: "Leaf wrap ring · 18K gold and diamonds", fa: "انگشتر برگ پیچ · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 104 diamonds", fa: "طلای ۱۸ عیار · ۱۰۴ الماس" },
    description: {
      en: "Branches of diamond-set leaves wrapped around the finger.",
      fa: "شاخه‌هایی از برگ‌های نگین‌دار که دور انگشت می‌پیچند."
    },
    model: 'orlevian',
    spin: 'assets/video/orlevian-spin.mp4',
    spinPoster: 'assets/img/orlevian/spin-poster.jpg',
    cover: 'assets/img/orlevian/render-01.jpg',
    thumb: 'assets/img/orlevian/render-01-sm.jpg',
    stream: ['assets/img/orlevian/stream-a.jpg', 'assets/img/orlevian/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/orlevian/render-01.jpg',
      'assets/img/orlevian/matrix-01.jpg',
      'assets/img/orlevian/matrix-02.jpg',
      'assets/img/orlevian/matrix-03.jpg',
      'assets/img/orlevian/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 5.16 g", fa: "طلای زرد ۱۸ عیار: ۵٫۱۶ گرم" },
        { en: "18K white gold: 4.91 g", fa: "طلای سفید ۱۸ عیار: ۴٫۹۱ گرم" },
        { en: "18K rose gold: 5.16 g", fa: "طلای رزگلد ۱۸ عیار: ۵٫۱۶ گرم" },
        { en: "14K yellow gold: 4.31 g", fa: "طلای زرد ۱۴ عیار: ۴٫۳۱ گرم" },
        { en: "22K yellow gold: 5.99 g", fa: "طلای زرد ۲۲ عیار: ۵٫۹۹ گرم" },
        { en: "Silver 925: 3.47 g", fa: "نقره‌ی ۹۲۵: ۳٫۴۷ گرم" },
        { en: "Platinum: 6.73 g", fa: "پلاتین: ۶٫۷۳ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "104 round diamonds, 0.55 ct in total", fa: "۱۰۴ الماس گرد، در مجموع ۰٫۵۵ قیراط" },
        { en: "79 stones, 1.0 mm: 0.29 ct", fa: "۷۹ نگین ۱٫۰ میلی‌متری: ۰٫۲۹ قیراط" },
        { en: "25 stones, 1.4 mm: 0.26 ct", fa: "۲۵ نگین ۱٫۴ میلی‌متری: ۰٫۲۶ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 20.5 mm", fa: "ارتفاع از پایین تا بالا: ۲۰٫۵ میلی‌متر" },
        { en: "Width across: 20.3 mm", fa: "عرض کلی: ۲۰٫۳ میلی‌متر" },
        { en: "Inner diameter: 16.8 mm", fa: "قطر داخلی: ۱۶٫۸ میلی‌متر" },
        { en: "Length along the finger: 35.5 mm", fa: "طول در امتداد انگشت: ۳۵٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two diamond-set branches wrap around the finger, one over the other", fa: "دو شاخه‌ی نگین‌دار یکی روی دیگری دور انگشت می‌پیچند" },
        { en: "Leaf-shaped settings, each holding diamonds", fa: "برگ‌هایی که هر کدام چند الماس در خود دارند" },
        { en: "Small leaves at the tips", fa: "برگ‌های کوچک در سر شاخه‌ها" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'quorven',
    name: "QUORVÉN",
    added: '2026-11-03T22:38',
    collection: 'rings',
    kind: { en: "Open ring · 18K gold and diamonds", fa: "انگشتر باز · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 32 diamonds", fa: "طلای ۱۸ عیار · ۳۲ الماس" },
    description: {
      en: "An exclusive design combining distinctive form with enduring sophistication.",
      fa: "طرحی انحصاری؛ تلفیق فرمی متمایز با ظرافتی ماندگار."
    },
    model: 'quorven',
    spin: 'assets/video/quorven-spin.mp4',
    spinPoster: 'assets/img/quorven/spin-poster.jpg',
    cover: 'assets/img/quorven/render-01.jpg',
    thumb: 'assets/img/quorven/render-01-sm.jpg',
    stream: ['assets/img/quorven/stream-a.jpg', 'assets/img/quorven/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/quorven/render-01.jpg',
      'assets/img/quorven/matrix-01.jpg',
      'assets/img/quorven/matrix-02.jpg',
      'assets/img/quorven/matrix-03.jpg',
      'assets/img/quorven/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.77 g", fa: "طلای زرد ۱۸ عیار: ۲٫۷۷ گرم" },
        { en: "18K white gold: 2.64 g", fa: "طلای سفید ۱۸ عیار: ۲٫۶۴ گرم" },
        { en: "18K rose gold: 2.77 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۷۷ گرم" },
        { en: "14K yellow gold: 2.32 g", fa: "طلای زرد ۱۴ عیار: ۲٫۳۲ گرم" },
        { en: "22K yellow gold: 3.22 g", fa: "طلای زرد ۲۲ عیار: ۳٫۲۲ گرم" },
        { en: "Silver 925: 1.86 g", fa: "نقره‌ی ۹۲۵: ۱٫۸۶ گرم" },
        { en: "Platinum: 3.62 g", fa: "پلاتین: ۳٫۶۲ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "32 round diamonds, 0.21 ct in total", fa: "۳۲ الماس گرد، در مجموع ۰٫۲۱ قیراط" },
        { en: "18 stones, 1.2 mm: 0.12 ct", fa: "۱۸ نگین ۱٫۲ میلی‌متری: ۰٫۱۲ قیراط" },
        { en: "14 stones, 1.1–1.4 mm: 0.09 ct", fa: "۱۴ نگین ۱٫۱ تا ۱٫۴ میلی‌متری: ۰٫۰۹ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.5 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۵ میلی‌متر" },
        { en: "Width across: 20.7 mm", fa: "عرض کلی: ۲۰٫۷ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two ends meet on top: a pavé ring and a plain polished ring", fa: "دو سرِ انگشتر در بالا به هم می‌رسند: یک حلقه‌ی پاوه و یک حلقه‌ی ساده‌ی براق" },
        { en: "A tapering pavé panel on one shoulder", fa: "صفحه‌ای پاوه و باریک‌شونده روی یک شانه" },
        { en: "Clean polished band", fa: "رینگ صاف و براق" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'elystron',
    name: "ELYSTRON",
    added: '2026-11-03T22:36',
    collection: 'rings',
    kind: { en: "Flower ring · 18K gold and diamonds", fa: "انگشتر گل · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 11 diamonds", fa: "طلای ۱۸ عیار · ۱۱ الماس" },
    description: {
      en: "Refined geometry and balanced proportions create a memorable, elegant design.",
      fa: "هندسه‌ای ظریف و تناسباتی متوازن، طرحی ماندگار و برازنده می‌سازند."
    },
    model: 'elystron',
    spin: 'assets/video/elystron-spin.mp4',
    spinPoster: 'assets/img/elystron/spin-poster.jpg',
    cover: 'assets/img/elystron/render-01.jpg',
    thumb: 'assets/img/elystron/render-01-sm.jpg',
    stream: ['assets/img/elystron/stream-a.jpg', 'assets/img/elystron/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/elystron/render-01.jpg',
      'assets/img/elystron/matrix-01.jpg',
      'assets/img/elystron/matrix-02.jpg',
      'assets/img/elystron/matrix-03.jpg',
      'assets/img/elystron/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.76 g", fa: "طلای زرد ۱۸ عیار: ۳٫۷۶ گرم" },
        { en: "18K white gold: 3.58 g", fa: "طلای سفید ۱۸ عیار: ۳٫۵۸ گرم" },
        { en: "18K rose gold: 3.76 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۷۶ گرم" },
        { en: "14K yellow gold: 3.15 g", fa: "طلای زرد ۱۴ عیار: ۳٫۱۵ گرم" },
        { en: "22K yellow gold: 4.37 g", fa: "طلای زرد ۲۲ عیار: ۴٫۳۷ گرم" },
        { en: "Silver 925: 2.53 g", fa: "نقره‌ی ۹۲۵: ۲٫۵۳ گرم" },
        { en: "Platinum: 4.91 g", fa: "پلاتین: ۴٫۹۱ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "11 round diamonds, 0.13 ct in total", fa: "۱۱ الماس گرد، در مجموع ۰٫۱۳ قیراط" },
        { en: "Two centre stones, 1.79 and 1.7 mm", fa: "دو نگین مرکزی ۱٫۷۹ و ۱٫۷ میلی‌متری" },
        { en: "9 stones, 1.1–1.6 mm, set in the petals", fa: "۹ نگین ۱٫۱ تا ۱٫۶ میلی‌متری، نشانده‌شده در گلبرگ‌ها" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 23.6 mm", fa: "ارتفاع از پایین تا بالا: ۲۳٫۶ میلی‌متر" },
        { en: "Width across: 20.7 mm", fa: "عرض کلی: ۲۰٫۷ میلی‌متر" },
        { en: "Flower along the finger: 13.5 mm", fa: "طول گل در امتداد انگشت: ۱۳٫۵ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A gold flower with diamond-set and open petals", fa: "گلی طلایی با گلبرگ‌های نگین‌دار و باز" },
        { en: "Two raised diamonds at its heart", fa: "دو الماس برجسته در مرکز گل" },
        { en: "A double shank that twists beneath", fa: "بدنه‌ی دوتایی که در زیر می‌پیچد" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'dravenza',
    name: "DRAVÉNZA",
    added: '2026-11-03T22:35',
    collection: 'rings',
    kind: { en: "Crossover ring · 18K gold and diamonds", fa: "انگشتر ضربدری · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 43 diamonds", fa: "طلای ۱۸ عیار · ۴۳ الماس" },
    description: {
      en: "A confident expression of contemporary luxury with powerful, expressive contours.",
      fa: "بیانی مطمئن از تجمل معاصر، با خطوطی قدرتمند و گویا."
    },
    model: 'dravenza',
    spin: 'assets/video/dravenza-spin.mp4',
    spinPoster: 'assets/img/dravenza/spin-poster.jpg',
    cover: 'assets/img/dravenza/render-01.jpg',
    thumb: 'assets/img/dravenza/render-01-sm.jpg',
    stream: ['assets/img/dravenza/stream-a.jpg', 'assets/img/dravenza/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/dravenza/render-01.jpg',
      'assets/img/dravenza/matrix-01.jpg',
      'assets/img/dravenza/matrix-02.jpg',
      'assets/img/dravenza/matrix-03.jpg',
      'assets/img/dravenza/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.67 g", fa: "طلای زرد ۱۸ عیار: ۳٫۶۷ گرم" },
        { en: "18K white gold: 3.50 g", fa: "طلای سفید ۱۸ عیار: ۳٫۵۰ گرم" },
        { en: "18K rose gold: 3.67 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۶۷ گرم" },
        { en: "14K yellow gold: 3.07 g", fa: "طلای زرد ۱۴ عیار: ۳٫۰۷ گرم" },
        { en: "22K yellow gold: 4.27 g", fa: "طلای زرد ۲۲ عیار: ۴٫۲۷ گرم" },
        { en: "Silver 925: 2.47 g", fa: "نقره‌ی ۹۲۵: ۲٫۴۷ گرم" },
        { en: "Platinum: 4.79 g", fa: "پلاتین: ۴٫۷۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "43 round diamonds, 0.37 ct in total", fa: "۴۳ الماس گرد، در مجموع ۰٫۳۷ قیراط" },
        { en: "35 stones, 1.3 mm: 0.29 ct", fa: "۳۵ نگین ۱٫۳ میلی‌متری: ۰٫۲۹ قیراط" },
        { en: "8 stones, 1.4 mm: 0.08 ct, at the crossing", fa: "۸ نگین ۱٫۴ میلی‌متری: ۰٫۰۸ قیراط، در محل تقاطع" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.6 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۶ میلی‌متر" },
        { en: "Width across: 21.8 mm", fa: "عرض کلی: ۲۱٫۸ میلی‌متر" },
        { en: "Top width along the finger: 9.3 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۹٫۳ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two pavé bands crossing in an X over the top", fa: "دو رینگ پاوه که به شکل X روی هم رد می‌شوند" },
        { en: "A plain polished bar running straight through the middle", fa: "میله‌ای ساده و براق که مستقیم از وسط عبور می‌کند" },
        { en: "Open, split shank", fa: "بدنه‌ی باز و دوشاخه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'opheryx',
    name: "OPHERYX",
    added: '2026-11-03T22:34',
    collection: 'rings',
    kind: { en: "Solitaire ring · 18K gold and diamonds", fa: "انگشتر تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.21 ct solitaire", fa: "طلای ۱۸ عیار · تک‌نگین ۰٫۲۱ قیراط" },
    description: {
      en: "Inspired by gemstones, celebrating brilliance, depth, and distinctive character.",
      fa: "الهام‌گرفته از سنگ‌های قیمتی؛ جشنی از درخشش، عمق و شخصیتی متمایز."
    },
    model: 'opheryx',
    spin: 'assets/video/opheryx-spin.mp4',
    spinPoster: 'assets/img/opheryx/spin-poster.jpg',
    cover: 'assets/img/opheryx/render-01.jpg',
    thumb: 'assets/img/opheryx/render-01-sm.jpg',
    stream: ['assets/img/opheryx/stream-a.jpg', 'assets/img/opheryx/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/opheryx/render-01.jpg',
      'assets/img/opheryx/matrix-01.jpg',
      'assets/img/opheryx/matrix-02.jpg',
      'assets/img/opheryx/matrix-03.jpg',
      'assets/img/opheryx/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.29 g", fa: "طلای زرد ۱۸ عیار: ۲٫۲۹ گرم" },
        { en: "18K white gold: 2.18 g", fa: "طلای سفید ۱۸ عیار: ۲٫۱۸ گرم" },
        { en: "18K rose gold: 2.29 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۲۹ گرم" },
        { en: "14K yellow gold: 1.92 g", fa: "طلای زرد ۱۴ عیار: ۱٫۹۲ گرم" },
        { en: "22K yellow gold: 2.66 g", fa: "طلای زرد ۲۲ عیار: ۲٫۶۶ گرم" },
        { en: "Silver 925: 1.54 g", fa: "نقره‌ی ۹۲۵: ۱٫۵۴ گرم" },
        { en: "Platinum: 2.99 g", fa: "پلاتین: ۲٫۹۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "27 round diamonds, 0.47 ct in total", fa: "۲۷ الماس گرد، در مجموع ۰٫۴۷ قیراط" },
        { en: "Centre: 3.8 mm diamond, 0.21 ct, six-prong", fa: "مرکز: الماس ۳٫۸ میلی‌متری، ۰٫۲۱ قیراط، شش‌چنگ" },
        { en: "26 stones, 1.3–1.4 mm: 0.27 ct, along the crossing shoulders", fa: "۲۶ نگین ۱٫۳ تا ۱٫۴ میلی‌متری: ۰٫۲۷ قیراط، روی شانه‌های متقاطع" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 23.4 mm", fa: "ارتفاع از پایین تا بالا: ۲۳٫۴ میلی‌متر" },
        { en: "Width across: 20.4 mm", fa: "عرض کلی: ۲۰٫۴ میلی‌متر" },
        { en: "Top width along the finger: 6.2 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۶٫۲ میلی‌متر" },
        { en: "Inner diameter: 17.6 mm", fa: "قطر داخلی: ۱۷٫۶ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A tall six-prong solitaire head", fa: "سرِ تک‌نگین بلند و شش‌چنگ" },
        { en: "Two twisting strands on each shoulder, set with diamonds, around a polished leaf", fa: "دو رشته‌ی پیچان نگین‌دار روی هر شانه، دور یک برگ براق" },
        { en: "Bow-tie silhouette seen from above", fa: "فرم پاپیونی از نمای بالا" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'vantheris',
    name: "VANTHÉRIS",
    added: '2026-11-03T22:23',
    collection: 'rings',
    kind: { en: "Crown ring · 18K gold and diamonds", fa: "انگشتر تاجی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 23 diamonds", fa: "طلای ۱۸ عیار · ۲۳ الماس" },
    description: {
      en: "A bold yet polished creation combining dramatic presence with refined craftsmanship.",
      fa: "خلقی جسورانه اما آراسته؛ تلفیق حضوری چشمگیر با ساختی ظریف."
    },
    model: 'vantheris',
    spin: 'assets/video/vantheris-spin.mp4',
    spinPoster: 'assets/img/vantheris/spin-poster.jpg',
    cover: 'assets/img/vantheris/render-01.jpg',
    thumb: 'assets/img/vantheris/render-01-sm.jpg',
    stream: ['assets/img/vantheris/stream-a.jpg', 'assets/img/vantheris/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/vantheris/render-01.jpg',
      'assets/img/vantheris/matrix-01.jpg',
      'assets/img/vantheris/matrix-02.jpg',
      'assets/img/vantheris/matrix-03.jpg',
      'assets/img/vantheris/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.44 g", fa: "طلای زرد ۱۸ عیار: ۳٫۴۴ گرم" },
        { en: "18K white gold: 3.27 g", fa: "طلای سفید ۱۸ عیار: ۳٫۲۷ گرم" },
        { en: "18K rose gold: 3.44 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۴۴ گرم" },
        { en: "14K yellow gold: 2.87 g", fa: "طلای زرد ۱۴ عیار: ۲٫۸۷ گرم" },
        { en: "22K yellow gold: 3.99 g", fa: "طلای زرد ۲۲ عیار: ۳٫۹۹ گرم" },
        { en: "Silver 925: 2.31 g", fa: "نقره‌ی ۹۲۵: ۲٫۳۱ گرم" },
        { en: "Platinum: 4.49 g", fa: "پلاتین: ۴٫۴۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "23 round diamonds, 0.32 ct in total", fa: "۲۳ الماس گرد، در مجموع ۰٫۳۲ قیراط" },
        { en: "Crown points: one 2.5 mm and two 2.02 mm diamonds, 0.12 ct", fa: "نوک‌های تاج: یک الماس ۲٫۵ و دو الماس ۲٫۰۲ میلی‌متری، ۰٫۱۲ قیراط" },
        { en: "20 stones, 1.4 mm: 0.21 ct, in a row along the band", fa: "۲۰ نگین ۱٫۴ میلی‌متری: ۰٫۲۱ قیراط، در یک ردیف روی رینگ" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 22.0 mm", fa: "ارتفاع از پایین تا بالا: ۲۲٫۰ میلی‌متر" },
        { en: "Width across: 20.8 mm", fa: "عرض کلی: ۲۰٫۸ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A crown of gold arches with ball tips around one side of the band", fa: "تاجی از قوس‌های طلایی با سرهای گوی‌مانند دور یک طرف رینگ" },
        { en: "Three diamonds rise as the crown's jewels", fa: "سه الماس مثل جواهرهای تاج بالا آمده‌اند" },
        { en: "A diamond-set band beside the crown", fa: "رینگی نگین‌دار در کنار تاج" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'kryselon',
    name: "KRYSELON",
    added: '2026-11-03T22:10',
    collection: 'rings',
    kind: { en: "Solitaire ring · 18K gold and diamond", fa: "انگشتر تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.33 ct solitaire", fa: "طلای ۱۸ عیار · تک‌نگین ۰٫۳۳ قیراط" },
    description: {
      en: "A modern design defined by precision, symmetry, and architectural elegance.",
      fa: "طراحی‌ای مدرن، با دقت، تقارن و ظرافتی معمارانه."
    },
    model: 'kryselon',
    spin: 'assets/video/kryselon-spin.mp4',
    spinPoster: 'assets/img/kryselon/spin-poster.jpg',
    cover: 'assets/img/kryselon/render-01.jpg',
    thumb: 'assets/img/kryselon/render-01-sm.jpg',
    stream: ['assets/img/kryselon/stream-a.jpg', 'assets/img/kryselon/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/kryselon/render-01.jpg',
      'assets/img/kryselon/matrix-01.jpg',
      'assets/img/kryselon/matrix-02.jpg',
      'assets/img/kryselon/matrix-03.jpg',
      'assets/img/kryselon/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.69 g", fa: "طلای زرد ۱۸ عیار: ۲٫۶۹ گرم" },
        { en: "18K white gold: 2.56 g", fa: "طلای سفید ۱۸ عیار: ۲٫۵۶ گرم" },
        { en: "18K rose gold: 2.69 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۶۹ گرم" },
        { en: "14K yellow gold: 2.25 g", fa: "طلای زرد ۱۴ عیار: ۲٫۲۵ گرم" },
        { en: "22K yellow gold: 3.12 g", fa: "طلای زرد ۲۲ عیار: ۳٫۱۲ گرم" },
        { en: "Silver 925: 1.81 g", fa: "نقره‌ی ۹۲۵: ۱٫۸۱ گرم" },
        { en: "Platinum: 3.51 g", fa: "پلاتین: ۳٫۵۱ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "1 round diamond, 4.5 mm, 0.33 ct, four-prong", fa: "۱ الماس گرد ۴٫۵ میلی‌متری، ۰٫۳۳ قیراط، چهارچنگ" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 23.2 mm", fa: "ارتفاع از پایین تا بالا: ۲۳٫۲ میلی‌متر" },
        { en: "Width across: 20.0 mm", fa: "عرض کلی: ۲۰٫۰ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A four-prong solitaire beside a small gold padlock", fa: "تک‌نگینی چهارچنگ در کنار یک قفل کوچک طلایی" },
        { en: "The padlock has a keyhole cut through its face", fa: "قفل یک سوراخ کلید روی سطح خود دارد" },
        { en: "A slim bypass shank", fa: "بدنه‌ی باریک و پیچان" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'azmoriel',
    name: "AZMORIEL",
    added: '2026-11-03T22:08',
    collection: 'rings',
    kind: { en: "Men's solitaire ring · 18K gold and diamonds", fa: "انگشتر مردانه‌ی تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.59 ct centre", fa: "طلای ۱۸ عیار · نگین مرکزی ۰٫۵۹ قیراط" },
    description: {
      en: "Inspired by rare treasures, featuring striking details and elegant form.",
      fa: "الهام‌گرفته از گنجینه‌های کمیاب، با جزئیاتی چشمگیر و فرمی برازنده."
    },
    model: 'azmoriel',
    spin: 'assets/video/azmoriel-spin.mp4',
    spinPoster: 'assets/img/azmoriel/spin-poster.jpg',
    cover: 'assets/img/azmoriel/render-01.jpg',
    thumb: 'assets/img/azmoriel/render-01-sm.jpg',
    stream: ['assets/img/azmoriel/stream-a.jpg', 'assets/img/azmoriel/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/azmoriel/render-01.jpg',
      'assets/img/azmoriel/matrix-01.jpg',
      'assets/img/azmoriel/matrix-02.jpg',
      'assets/img/azmoriel/matrix-03.jpg',
      'assets/img/azmoriel/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 7.32 g", fa: "طلای زرد ۱۸ عیار: ۷٫۳۲ گرم" },
        { en: "18K white gold: 6.97 g", fa: "طلای سفید ۱۸ عیار: ۶٫۹۷ گرم" },
        { en: "18K rose gold: 7.32 g", fa: "طلای رزگلد ۱۸ عیار: ۷٫۳۲ گرم" },
        { en: "14K yellow gold: 6.12 g", fa: "طلای زرد ۱۴ عیار: ۶٫۱۲ گرم" },
        { en: "22K yellow gold: 8.50 g", fa: "طلای زرد ۲۲ عیار: ۸٫۵۰ گرم" },
        { en: "Silver 925: 4.92 g", fa: "نقره‌ی ۹۲۵: ۴٫۹۲ گرم" },
        { en: "Platinum: 9.55 g", fa: "پلاتین: ۹٫۵۵ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "37 round diamonds, 1.06 ct in total", fa: "۳۷ الماس گرد، در مجموع ۱٫۰۶ قیراط" },
        { en: "Centre: 5.4 mm diamond, 0.59 ct, four-prong in a square seat", fa: "مرکز: الماس ۵٫۴ میلی‌متری، ۰٫۵۹ قیراط، چهارچنگ در نشیمن مربعی" },
        { en: "36 stones, 1.52 mm: 0.47 ct, in rows along both edges", fa: "۳۶ نگین ۱٫۵۲ میلی‌متری: ۰٫۴۷ قیراط، در ردیف‌هایی روی هر دو لبه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 25.8 mm", fa: "ارتفاع از پایین تا بالا: ۲۵٫۸ میلی‌متر" },
        { en: "Width across: 24.5 mm", fa: "عرض کلی: ۲۴٫۵ میلی‌متر" },
        { en: "Top width along the finger: 11.8 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۱۱٫۸ میلی‌متر" },
        { en: "Inner diameter: 20.0 mm", fa: "قطر داخلی: ۲۰٫۰ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A solitaire in a raised square seat on a flat, wide top", fa: "تک‌نگینی در نشیمن مربعی برجسته روی سطحی تخت و پهن" },
        { en: "Diamond rows along both edges, broken into panels", fa: "ردیف‌های الماس روی هر دو لبه، تقسیم‌شده به چند بخش" },
        { en: "Bolt-head details on both sides of the head", fa: "جزئیات پیچ‌مانند در دو طرف سرِ انگشتر" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'thalver',
    name: "THALVÉR",
    added: '2026-11-03T22:06',
    collection: 'rings',
    kind: { en: "Men's ring · 18K gold and diamonds", fa: "انگشتر مردانه · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 20 diamonds", fa: "طلای ۱۸ عیار · ۲۰ الماس" },
    description: {
      en: "Flowing forms and balanced proportions create a graceful, refined statement.",
      fa: "فرم‌های روان و تناسبات متوازن، بیانی برازنده و ظریف می‌سازند."
    },
    model: 'thalver',
    spin: 'assets/video/thalver-spin.mp4',
    spinPoster: 'assets/img/thalver/spin-poster.jpg',
    cover: 'assets/img/thalver/render-01.jpg',
    thumb: 'assets/img/thalver/render-01-sm.jpg',
    stream: ['assets/img/thalver/stream-a.jpg', 'assets/img/thalver/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/thalver/render-01.jpg',
      'assets/img/thalver/matrix-01.jpg',
      'assets/img/thalver/matrix-02.jpg',
      'assets/img/thalver/matrix-03.jpg',
      'assets/img/thalver/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 4.68 g", fa: "طلای زرد ۱۸ عیار: ۴٫۶۸ گرم" },
        { en: "18K white gold: 4.45 g", fa: "طلای سفید ۱۸ عیار: ۴٫۴۵ گرم" },
        { en: "18K rose gold: 4.68 g", fa: "طلای رزگلد ۱۸ عیار: ۴٫۶۸ گرم" },
        { en: "14K yellow gold: 3.91 g", fa: "طلای زرد ۱۴ عیار: ۳٫۹۱ گرم" },
        { en: "22K yellow gold: 5.43 g", fa: "طلای زرد ۲۲ عیار: ۵٫۴۳ گرم" },
        { en: "Silver 925: 3.15 g", fa: "نقره‌ی ۹۲۵: ۳٫۱۵ گرم" },
        { en: "Platinum: 6.10 g", fa: "پلاتین: ۶٫۱۰ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "20 round diamonds, 0.16 ct in total", fa: "۲۰ الماس گرد، در مجموع ۰٫۱۶ قیراط" },
        { en: "A pavé triangle of 1.5–1.6 mm stones, and a chevron row of 1.0–1.3 mm stones running down one shoulder", fa: "مثلثی پاوه از نگین‌های ۱٫۵ تا ۱٫۶ میلی‌متری و ردیفی هشتی از نگین‌های ۱ تا ۱٫۳ میلی‌متری که روی یک شانه ادامه دارد" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 22.6 mm", fa: "ارتفاع از پایین تا بالا: ۲۲٫۶ میلی‌متر" },
        { en: "Width across: 22.4 mm", fa: "عرض کلی: ۲۲٫۴ میلی‌متر" },
        { en: "Top width along the finger: 7.8 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۷٫۸ میلی‌متر" },
        { en: "Inner diameter: 19.0 mm", fa: "قطر داخلی: ۱۹٫۰ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Chevron arrows cut through a flat polished top", fa: "پیکان‌های هشتی که از سطح تخت و براق عبور می‌کنند" },
        { en: "A diamond triangle and a diamond chevron side by side", fa: "یک مثلث و یک هشت نگین‌دار در کنار هم" },
        { en: "A diamond line that carries on down one shoulder", fa: "ردیفی از الماس که روی یک شانه پایین می‌آید" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'myravex',
    name: "MYRAVEX",
    added: '2026-11-03T22:03',
    collection: 'rings',
    kind: { en: "Halo cluster ring · 18K gold and diamonds", fa: "انگشتر خوشه‌ای هاله‌ای · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 52 diamonds", fa: "طلای ۱۸ عیار · ۵۲ الماس" },
    description: {
      en: "A contemporary design that expresses individuality through luxurious details.",
      fa: "طراحی‌ای معاصر که با جزئیات فاخر، فردیت را بیان می‌کند."
    },
    model: 'myravex',
    spin: 'assets/video/myravex-spin.mp4',
    spinPoster: 'assets/img/myravex/spin-poster.jpg',
    cover: 'assets/img/myravex/render-01.jpg',
    thumb: 'assets/img/myravex/render-01-sm.jpg',
    stream: ['assets/img/myravex/stream-a.jpg', 'assets/img/myravex/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/myravex/render-01.jpg',
      'assets/img/myravex/matrix-01.jpg',
      'assets/img/myravex/matrix-02.jpg',
      'assets/img/myravex/matrix-03.jpg',
      'assets/img/myravex/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.57 g", fa: "طلای زرد ۱۸ عیار: ۳٫۵۷ گرم" },
        { en: "18K white gold: 3.39 g", fa: "طلای سفید ۱۸ عیار: ۳٫۳۹ گرم" },
        { en: "18K rose gold: 3.57 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۵۷ گرم" },
        { en: "14K yellow gold: 2.98 g", fa: "طلای زرد ۱۴ عیار: ۲٫۹۸ گرم" },
        { en: "22K yellow gold: 4.14 g", fa: "طلای زرد ۲۲ عیار: ۴٫۱۴ گرم" },
        { en: "Silver 925: 2.40 g", fa: "نقره‌ی ۹۲۵: ۲٫۴۰ گرم" },
        { en: "Platinum: 4.65 g", fa: "پلاتین: ۴٫۶۵ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "52 round diamonds, 0.57 ct in total", fa: "۵۲ الماس گرد، در مجموع ۰٫۵۷ قیراط" },
        { en: "A raised cluster of 9 stones, 1.5 mm: 0.11 ct", fa: "خوشه‌ای برجسته از ۹ نگین ۱٫۵ میلی‌متری: ۰٫۱۱ قیراط" },
        { en: "43 stones, 1.3–1.6 mm: 0.46 ct, in the halo and on both shoulders", fa: "۴۳ نگین ۱٫۳ تا ۱٫۶ میلی‌متری: ۰٫۴۶ قیراط، در هاله و روی هر دو شانه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 29.5 mm", fa: "ارتفاع از پایین تا بالا: ۲۹٫۵ میلی‌متر" },
        { en: "Width across: 21.6 mm", fa: "عرض کلی: ۲۱٫۶ میلی‌متر" },
        { en: "Halo across: 9.4 mm", fa: "قطر هاله: ۹٫۴ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A nine-stone cluster that reads as one large diamond", fa: "خوشه‌ای از نه نگین که مثل یک الماس درشت دیده می‌شود" },
        { en: "A floating halo on a tall cathedral basket", fa: "هاله‌ای شناور روی سبدی بلند و کلیسایی" },
        { en: "Split pavé shoulders", fa: "شانه‌های دوتایی پاوه" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'orovant',
    name: "OROVANT",
    added: '2026-11-03T22:02',
    collection: 'rings',
    kind: { en: "Five-stone halo band · 18K gold and diamonds", fa: "انگشتر پنج‌نگین هاله‌ای · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 5 oval diamonds", fa: "طلای ۱۸ عیار · ۵ الماس بیضی" },
    description: {
      en: "A celebration of precious gold, defined by distinctive character and timeless elegance.",
      fa: "جشنی از طلای ارزشمند، با شخصیتی متمایز و ظرافتی بی‌زمان."
    },
    model: 'orovant',
    spin: 'assets/video/orovant-spin.mp4',
    spinPoster: 'assets/img/orovant/spin-poster.jpg',
    cover: 'assets/img/orovant/render-01.jpg',
    thumb: 'assets/img/orovant/render-01-sm.jpg',
    stream: ['assets/img/orovant/stream-a.jpg', 'assets/img/orovant/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/orovant/render-01.jpg',
      'assets/img/orovant/matrix-01.jpg',
      'assets/img/orovant/matrix-02.jpg',
      'assets/img/orovant/matrix-03.jpg',
      'assets/img/orovant/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 2.45 g", fa: "طلای زرد ۱۸ عیار: ۲٫۴۵ گرم" },
        { en: "18K white gold: 2.33 g", fa: "طلای سفید ۱۸ عیار: ۲٫۳۳ گرم" },
        { en: "18K rose gold: 2.45 g", fa: "طلای رزگلد ۱۸ عیار: ۲٫۴۵ گرم" },
        { en: "14K yellow gold: 2.05 g", fa: "طلای زرد ۱۴ عیار: ۲٫۰۵ گرم" },
        { en: "22K yellow gold: 2.85 g", fa: "طلای زرد ۲۲ عیار: ۲٫۸۵ گرم" },
        { en: "Silver 925: 1.65 g", fa: "نقره‌ی ۹۲۵: ۱٫۶۵ گرم" },
        { en: "Platinum: 3.20 g", fa: "پلاتین: ۳٫۲۰ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "47 diamonds, 0.73 ct in total", fa: "۴۷ الماس، در مجموع ۰٫۷۳ قیراط" },
        { en: "5 oval diamonds in a row: centre 4.28 × 2.67 mm, then 4.0 × 2.5 mm and 3.59 × 2.24 mm on each side, 0.38 ct", fa: "۵ الماس بیضی در یک ردیف: مرکز ۴٫۲۸ × ۲٫۶۷، سپس ۴ × ۲٫۵ و ۳٫۵۹ × ۲٫۲۴ میلی‌متر در هر طرف، ۰٫۳۸ قیراط" },
        { en: "42 round stones, 1.3 mm: 0.35 ct, in a halo around each oval", fa: "۴۲ نگین گرد ۱٫۳ میلی‌متری: ۰٫۳۵ قیراط، در هاله‌ای دور هر بیضی" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 20.1 mm", fa: "ارتفاع از پایین تا بالا: ۲۰٫۱ میلی‌متر" },
        { en: "Width across: 20.8 mm", fa: "عرض کلی: ۲۰٫۸ میلی‌متر" },
        { en: "Top width along the finger: 7.4 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۷٫۴ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Five bezel-set oval diamonds graduating from the centre", fa: "پنج الماس بیضی قاب‌نشان که از مرکز کوچک‌تر می‌شوند" },
        { en: "Each oval wrapped in its own scalloped pavé halo", fa: "هر بیضی درون هاله‌ی پاوه‌ی کنگره‌ای خودش" },
        { en: "A tapered polished shank", fa: "بدنه‌ی براق و باریک‌شونده" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'calystre',
    name: "CALYSTRÉ",
    added: '2026-11-03T22:00',
    collection: 'rings',
    kind: { en: "Sculptural ring · 18K gold and diamonds", fa: "انگشتر حجمی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 48 diamonds", fa: "طلای ۱۸ عیار · ۴۸ الماس" },
    description: {
      en: "Inspired by architectural beauty, blending sculptural lines with sophisticated brilliance.",
      fa: "الهام‌گرفته از زیبایی معماری؛ تلفیق خطوط حجمی با درخششی پیچیده و ظریف."
    },
    model: 'calystre',
    spin: 'assets/video/calystre-spin.mp4',
    spinPoster: 'assets/img/calystre/spin-poster.jpg',
    cover: 'assets/img/calystre/render-01.jpg',
    thumb: 'assets/img/calystre/render-01-sm.jpg',
    stream: ['assets/img/calystre/stream-a.jpg', 'assets/img/calystre/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/calystre/render-01.jpg',
      'assets/img/calystre/matrix-01.jpg',
      'assets/img/calystre/matrix-02.jpg',
      'assets/img/calystre/matrix-03.jpg',
      'assets/img/calystre/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.24 g", fa: "طلای زرد ۱۸ عیار: ۳٫۲۴ گرم" },
        { en: "18K white gold: 3.08 g", fa: "طلای سفید ۱۸ عیار: ۳٫۰۸ گرم" },
        { en: "18K rose gold: 3.24 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۲۴ گرم" },
        { en: "14K yellow gold: 2.71 g", fa: "طلای زرد ۱۴ عیار: ۲٫۷۱ گرم" },
        { en: "22K yellow gold: 3.76 g", fa: "طلای زرد ۲۲ عیار: ۳٫۷۶ گرم" },
        { en: "Silver 925: 2.18 g", fa: "نقره‌ی ۹۲۵: ۲٫۱۸ گرم" },
        { en: "Platinum: 4.23 g", fa: "پلاتین: ۴٫۲۳ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "48 round diamonds, 0.36 ct in total", fa: "۴۸ الماس گرد، در مجموع ۰٫۳۶ قیراط" },
        { en: "30 stones, 1.3 mm: 0.25 ct", fa: "۳۰ نگین ۱٫۳ میلی‌متری: ۰٫۲۵ قیراط" },
        { en: "18 stones, 1.1–1.2 mm: 0.11 ct", fa: "۱۸ نگین ۱٫۱ تا ۱٫۲ میلی‌متری: ۰٫۱۱ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.8 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۸ میلی‌متر" },
        { en: "Width across: 20.7 mm", fa: "عرض کلی: ۲۰٫۷ میلی‌متر" },
        { en: "Top along the finger: 15.6 mm", fa: "بالای انگشتر در امتداد انگشت: ۱۵٫۶ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Three sweeping pavé ribbons that curl into a loop", fa: "سه روبان پاوه‌ی پیچان که به یک حلقه ختم می‌شوند" },
        { en: "Polished gold petals rising behind the ribbons", fa: "گلبرگ‌های طلای براق که پشت روبان‌ها بالا می‌آیند" },
        { en: "A slim double shank", fa: "بدنه‌ی دوتایی و باریک" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'zafyren',
    name: "ZAFYREN",
    added: '2026-11-03T21:59',
    collection: 'rings',
    kind: { en: "Cluster ring · 18K gold and diamonds", fa: "انگشتر خوشه‌ای · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 69 diamonds", fa: "طلای ۱۸ عیار · ۶۹ الماس" },
    description: {
      en: "A striking expression of luxury, combining refined craftsmanship with an unforgettable silhouette.",
      fa: "بیانی چشمگیر از تجمل؛ ترکیب ساخت ظریف با فرمی فراموش‌نشدنی."
    },
    model: 'zafyren',
    spin: 'assets/video/zafyren-spin.mp4',
    spinPoster: 'assets/img/zafyren/spin-poster.jpg',
    cover: 'assets/img/zafyren/render-01.jpg',
    thumb: 'assets/img/zafyren/render-01-sm.jpg',
    stream: ['assets/img/zafyren/stream-a.jpg', 'assets/img/zafyren/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/zafyren/render-01.jpg',
      'assets/img/zafyren/matrix-01.jpg',
      'assets/img/zafyren/matrix-02.jpg',
      'assets/img/zafyren/matrix-03.jpg',
      'assets/img/zafyren/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 6.28 g", fa: "طلای زرد ۱۸ عیار: ۶٫۲۸ گرم" },
        { en: "18K white gold: 5.98 g", fa: "طلای سفید ۱۸ عیار: ۵٫۹۸ گرم" },
        { en: "18K rose gold: 6.28 g", fa: "طلای رزگلد ۱۸ عیار: ۶٫۲۸ گرم" },
        { en: "14K yellow gold: 5.25 g", fa: "طلای زرد ۱۴ عیار: ۵٫۲۵ گرم" },
        { en: "22K yellow gold: 7.30 g", fa: "طلای زرد ۲۲ عیار: ۷٫۳۰ گرم" },
        { en: "Silver 925: 4.23 g", fa: "نقره‌ی ۹۲۵: ۴٫۲۳ گرم" },
        { en: "Platinum: 8.20 g", fa: "پلاتین: ۸٫۲۰ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "69 round diamonds, 0.72 ct in total", fa: "۶۹ الماس گرد، در مجموع ۰٫۷۲ قیراط" },
        { en: "Raised centre: a 1.8 mm diamond ringed by six 1.7 mm stones", fa: "مرکز برجسته: الماس ۱٫۸ میلی‌متری با حلقه‌ای از شش نگین ۱٫۷ میلی‌متری" },
        { en: "A halo of ten 1.42 mm stones, each on its own tall prong-set head", fa: "هاله‌ای از ده نگین ۱٫۴۲ میلی‌متری، هر کدام روی سرِ چنگی بلند خودش" },
        { en: "52 stones, 1.2–1.4 mm, in pavé rows along both shoulders", fa: "۵۲ نگین ۱٫۲ تا ۱٫۴ میلی‌متری، در ردیف‌های پاوه روی هر دو شانه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 29.2 mm", fa: "ارتفاع از پایین تا بالا: ۲۹٫۲ میلی‌متر" },
        { en: "Width across: 23.6 mm", fa: "عرض کلی: ۲۳٫۶ میلی‌متر" },
        { en: "Top width along the finger: 10.0 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۱۰٫۰ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A two-tier cluster head: a raised flower of seven diamonds over a halo of ten", fa: "سرِ خوشه‌ای دوطبقه: گلی برجسته از هفت الماس روی هاله‌ای از ده نگین" },
        { en: "Openwork gold lattice in both sides of the shank", fa: "مشبک‌کاری طلا در دو طرف بدنه" },
        { en: "Wide pavé shoulders that sweep up to the head", fa: "شانه‌های پهن پاوه که تا سرِ انگشتر بالا می‌آیند" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'seravel',
    name: "SERAVÉL",
    added: '2026-10-24T23:14',
    collection: 'rings',
    kind: { en: "Solitaire band ring · 18K gold and diamonds", fa: "انگشتر رینگی تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.44 ct centre", fa: "طلای ۱۸ عیار · نگین مرکزی ۰٫۴۴ قیراط" },
    description: {
      en: "An elegant statement of rarity and devotion.",
      fa: "بیانی ظریف از کمیابی و دلدادگی."
    },
    model: 'seravel',
    spin: 'assets/video/seravel-spin.mp4',
    spinPoster: 'assets/img/seravel/spin-poster.jpg',
    cover: 'assets/img/seravel/render-01.jpg',
    thumb: 'assets/img/seravel/render-01-sm.jpg',
    stream: ['assets/img/seravel/stream-a.jpg', 'assets/img/seravel/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/seravel/render-01.jpg',
      'assets/img/seravel/matrix-01.jpg',
      'assets/img/seravel/matrix-02.jpg',
      'assets/img/seravel/matrix-03.jpg',
      'assets/img/seravel/matrix-04.jpg',
      'assets/img/seravel/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 4.88 g", fa: "طلای زرد ۱۸ عیار: ۴٫۸۸ گرم" },
        { en: "18K white gold: 4.64 g", fa: "طلای سفید ۱۸ عیار: ۴٫۶۴ گرم" },
        { en: "18K rose gold: 4.88 g", fa: "طلای رزگلد ۱۸ عیار: ۴٫۸۸ گرم" },
        { en: "14K yellow gold: 4.08 g", fa: "طلای زرد ۱۴ عیار: ۴٫۰۸ گرم" },
        { en: "22K yellow gold: 5.66 g", fa: "طلای زرد ۲۲ عیار: ۵٫۶۶ گرم" },
        { en: "Silver 925: 3.28 g", fa: "نقره‌ی ۹۲۵: ۳٫۲۸ گرم" },
        { en: "Platinum: 6.36 g", fa: "پلاتین: ۶٫۳۶ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "43 round diamonds, 0.76 ct in total", fa: "۴۳ الماس گرد، در مجموع ۰٫۷۶ قیراط" },
        { en: "Centre: 5 mm diamond, 0.44 ct, four-prong", fa: "مرکز: الماس ۵ میلی‌متری، ۰٫۴۴ قیراط، چهارچنگ" },
        { en: "42 stones, 1.2–1.3 mm: 0.31 ct, in a row along each edge", fa: "۴۲ نگین ۱٫۲ تا ۱٫۳ میلی‌متری: ۰٫۳۱ قیراط، در یک ردیف روی هر لبه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 22.7 mm", fa: "ارتفاع از پایین تا بالا: ۲۲٫۷ میلی‌متر" },
        { en: "Width across: 21.6 mm", fa: "عرض کلی: ۲۱٫۶ میلی‌متر" },
        { en: "Top width along the finger: 7.8 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۷٫۸ میلی‌متر" },
        { en: "Inner diameter: 17.8 mm", fa: "قطر داخلی: ۱۷٫۸ میلی‌متر" },
        { en: "Band at the base: 1.3 mm", fa: "ضخامت حلقه در پایین: ۱٫۳ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A four-prong solitaire in the middle of a wide band", fa: "تک‌نگینی چهارچنگ در میان یک رینگ پهن" },
        { en: "Ribbed, fluted gold on both sides of the centre stone", fa: "طلای شیاردار در دو طرف نگین مرکزی" },
        { en: "A row of diamonds along both edges of the band", fa: "ردیفی از الماس روی هر دو لبه‌ی رینگ" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model where not marked.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی است؛ ابعادی که مشخص نشده بود از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'avelis',
    name: "AVELIS",
    added: '2026-10-24T23:13',
    collection: 'sets',
    kind: { en: "Set: pendant and earrings · 18K gold and diamonds", fa: "ست: آویز و گوشواره · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 41 diamonds", fa: "طلای ۱۸ عیار · ۴۱ الماس" },
    description: {
      en: "A quiet expression of enduring elegance.",
      fa: "بیانی آرام از ظرافتی ماندگار."
    },
    model: 'avelis',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: 0 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/avelis-spin.mp4',
    spinPoster: 'assets/img/avelis/spin-poster.jpg',
    cover: 'assets/img/avelis/render-01.jpg',
    thumb: 'assets/img/avelis/render-01-sm.jpg',
    stream: ['assets/img/avelis/stream-a.jpg', 'assets/img/avelis/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/avelis/render-01.jpg',
      'assets/img/avelis/matrix-01.jpg',
      'assets/img/avelis/matrix-02.jpg',
      'assets/img/avelis/matrix-03.jpg',
      'assets/img/avelis/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.85 g", fa: "طلای زرد ۱۸ عیار: ۱٫۸۵ گرم" },
        { en: "18K white gold: 1.76 g", fa: "طلای سفید ۱۸ عیار: ۱٫۷۶ گرم" },
        { en: "18K rose gold: 1.85 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۸۵ گرم" },
        { en: "14K yellow gold: 1.54 g", fa: "طلای زرد ۱۴ عیار: ۱٫۵۴ گرم" },
        { en: "22K yellow gold: 2.14 g", fa: "طلای زرد ۲۲ عیار: ۲٫۱۴ گرم" },
        { en: "Silver 925: 1.24 g", fa: "نقره‌ی ۹۲۵: ۱٫۲۴ گرم" },
        { en: "Platinum: 2.41 g", fa: "پلاتین: ۲٫۴۱ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "The set: 41 round diamonds, 0.26 ct", fa: "کل ست: ۴۱ الماس گرد، ۰٫۲۶ قیراط" },
        { en: "27 stones, 1.1 mm: 0.13 ct, around the pendant's teardrop", fa: "۲۷ نگین ۱٫۱ میلی‌متری: ۰٫۱۳ قیراط، دور قطره‌ی آویز" },
        { en: "2 stones, 1.5 mm: 0.025 ct, in the pendant's scrolls", fa: "۲ نگین ۱٫۵ میلی‌متری: ۰٫۰۲۵ قیراط، در پیچک‌های آویز" },
        { en: "12 stones, 1.3 mm: 0.10 ct, six in each earring flower", fa: "۱۲ نگین ۱٫۳ میلی‌متری: ۰٫۱۰ قیراط، شش تا در گل هر گوشواره" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Pendant length: about 20.7 mm", fa: "طول آویز: حدود ۲۰٫۷ میلی‌متر" },
        { en: "Pendant width: about 10.4 mm", fa: "عرض آویز: حدود ۱۰٫۴ میلی‌متر" },
        { en: "Earring length: about 8.5 mm", fa: "طول گوشواره: حدود ۸٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A teardrop pendant edged with pavé, filled with gold scrolls", fa: "آویز قطره‌ای با لبه‌ی پاوه، پر از پیچک‌های طلایی" },
        { en: "Two diamonds set in the scrolls", fa: "دو الماس در میان پیچک‌ها" },
        { en: "Matching earrings: a six-stone diamond flower under a small loop", fa: "گوشواره‌های هماهنگ: گلی از شش الماس زیر یک حلقه‌ی کوچک" }
      ]}
    ],
    note: { en: "Metal weight and stones are for the whole set, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای کل ست و از فایل طراحی است؛ ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'orvessa',
    name: "ORVESSA",
    added: '2026-10-24T23:12',
    collection: 'rings',
    kind: { en: "Cluster ring · 18K gold and diamonds", fa: "انگشتر خوشه‌ای · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 57 diamonds", fa: "طلای ۱۸ عیار · ۵۷ الماس" },
    description: {
      en: "Distinctive structure, extraordinary brilliance.",
      fa: "ساختاری متمایز، درخششی فوق‌العاده."
    },
    model: 'orvessa',
    spin: 'assets/video/orvessa-spin.mp4',
    spinPoster: 'assets/img/orvessa/spin-poster.jpg',
    cover: 'assets/img/orvessa/render-01.jpg',
    thumb: 'assets/img/orvessa/render-01-sm.jpg',
    stream: ['assets/img/orvessa/stream-a.jpg', 'assets/img/orvessa/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/orvessa/render-01.jpg',
      'assets/img/orvessa/matrix-01.jpg',
      'assets/img/orvessa/matrix-02.jpg',
      'assets/img/orvessa/matrix-03.jpg',
      'assets/img/orvessa/matrix-04.jpg',
      'assets/img/orvessa/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 4.09 g", fa: "طلای زرد ۱۸ عیار: ۴٫۰۹ گرم" },
        { en: "18K white gold: 3.89 g", fa: "طلای سفید ۱۸ عیار: ۳٫۸۹ گرم" },
        { en: "18K rose gold: 4.09 g", fa: "طلای رزگلد ۱۸ عیار: ۴٫۰۹ گرم" },
        { en: "14K yellow gold: 3.42 g", fa: "طلای زرد ۱۴ عیار: ۳٫۴۲ گرم" },
        { en: "22K yellow gold: 4.74 g", fa: "طلای زرد ۲۲ عیار: ۴٫۷۴ گرم" },
        { en: "Silver 925: 2.75 g", fa: "نقره‌ی ۹۲۵: ۲٫۷۵ گرم" },
        { en: "Platinum: 5.33 g", fa: "پلاتین: ۵٫۳۳ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "57 round diamonds, 0.48 ct in total", fa: "۵۷ الماس گرد، در مجموع ۰٫۴۸ قیراط" },
        { en: "Centre: 1.6 mm diamond, 0.015 ct", fa: "مرکز: الماس ۱٫۶ میلی‌متری، ۰٫۰۱۵ قیراط" },
        { en: "56 stones, 1.3 mm: 0.46 ct, in three stepped rings", fa: "۵۶ نگین ۱٫۳ میلی‌متری: ۰٫۴۶ قیراط، در سه حلقه‌ی پله‌ای" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 25.2 mm", fa: "ارتفاع از پایین تا بالا: ۲۵٫۲ میلی‌متر" },
        { en: "Width across: 19.6 mm", fa: "عرض کلی: ۱۹٫۶ میلی‌متر" },
        { en: "Top along the finger: 16.2 mm", fa: "بالای انگشتر در امتداد انگشت: ۱۶٫۲ میلی‌متر" },
        { en: "Inner diameter: 17.7 mm", fa: "قطر داخلی: ۱۷٫۷ میلی‌متر" },
        { en: "Band at the base: 1.0 mm", fa: "ضخامت حلقه در پایین: ۱٫۰ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Three concentric rings of diamonds rising in steps to a raised centre stone", fa: "سه حلقه‌ی هم‌مرکز الماس که پله‌پله تا نگین مرکزی بالا می‌آیند" },
        { en: "A broad round top on sweeping shoulders", fa: "سطح گرد و پهن روی شانه‌های پیچان" },
        { en: "Band narrows toward the base", fa: "حلقه به سمت پایین باریک می‌شود" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model where not marked.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی است؛ ابعادی که مشخص نشده بود از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'kaverin',
    name: "KAVÉRIN",
    added: '2026-10-24T23:09',
    collection: 'earrings',
    kind: { en: "Stud earrings · 18K gold and diamonds", fa: "گوشواره‌ی میخی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 22 diamonds each", fa: "طلای ۱۸ عیار · ۲۲ الماس در هر لنگه" },
    description: {
      en: "Sculpted with precision, made to be remembered.",
      fa: "تراش‌خورده با دقت، ساخته‌شده برای ماندگاری در یاد."
    },
    model: 'kaverin',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: 0 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/kaverin-spin.mp4',
    spinPoster: 'assets/img/kaverin/spin-poster.jpg',
    cover: 'assets/img/kaverin/render-01.jpg',
    thumb: 'assets/img/kaverin/render-01-sm.jpg',
    stream: ['assets/img/kaverin/stream-a.jpg', 'assets/img/kaverin/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/kaverin/render-01.jpg',
      'assets/img/kaverin/matrix-01.jpg',
      'assets/img/kaverin/matrix-02.jpg',
      'assets/img/kaverin/matrix-03.jpg',
      'assets/img/kaverin/matrix-04.jpg',
      'assets/img/kaverin/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.09 g", fa: "طلای زرد ۱۸ عیار: ۱٫۰۹ گرم" },
        { en: "18K white gold: 1.03 g", fa: "طلای سفید ۱۸ عیار: ۱٫۰۳ گرم" },
        { en: "18K rose gold: 1.09 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۰۹ گرم" },
        { en: "14K yellow gold: 0.91 g", fa: "طلای زرد ۱۴ عیار: ۰٫۹۱ گرم" },
        { en: "22K yellow gold: 1.26 g", fa: "طلای زرد ۲۲ عیار: ۱٫۲۶ گرم" },
        { en: "Silver 925: 0.73 g", fa: "نقره‌ی ۹۲۵: ۰٫۷۳ گرم" },
        { en: "Platinum: 1.42 g", fa: "پلاتین: ۱٫۴۲ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 22 round diamonds, 0.13 ct", fa: "هر لنگه: ۲۲ الماس گرد، ۰٫۱۳ قیراط" },
        { en: "17 stones, 1.2 mm: 0.11 ct", fa: "۱۷ نگین ۱٫۲ میلی‌متری: ۰٫۱۱ قیراط" },
        { en: "5 stones, 1.0–1.1 mm: 0.02 ct", fa: "۵ نگین ۱ تا ۱٫۱ میلی‌متری: ۰٫۰۲ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 16.9 mm", fa: "طول: ۱۶٫۹ میلی‌متر" },
        { en: "Width: 13.9 mm", fa: "عرض: ۱۳٫۹ میلی‌متر" },
        { en: "Height: 7.9 mm", fa: "ارتفاع: ۷٫۹ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Two parallel diamond-set bars laid on the diagonal", fa: "دو میله‌ی نگین‌دار موازی و مورب" },
        { en: "Polished gold loops weave between them like a flower or bow", fa: "حلقه‌های طلای براق مثل گل یا پاپیون از میانشان رد می‌شوند" },
        { en: "Post fitting behind", fa: "پین در پشت" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است." }
  },
  {
    id: 'lumeria',
    name: "LUMÉRIA",
    added: '2026-10-24T23:08',
    collection: 'earrings',
    kind: { en: "Statement drop earrings · 18K gold and diamonds", fa: "گوشواره‌ی آویزی شاخص · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 136 diamonds each", fa: "طلای ۱۸ عیار · ۱۳۶ الماس در هر لنگه" },
    description: {
      en: "A constellation of brilliance, held in gold.",
      fa: "صورت‌فلکی‌ای از درخشش، در آغوش طلا."
    },
    model: 'lumeria',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -0.1 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/lumeria-spin.mp4',
    spinPoster: 'assets/img/lumeria/spin-poster.jpg',
    cover: 'assets/img/lumeria/render-01.jpg',
    thumb: 'assets/img/lumeria/render-01-sm.jpg',
    stream: ['assets/img/lumeria/stream-a.jpg', 'assets/img/lumeria/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/lumeria/render-01.jpg',
      'assets/img/lumeria/matrix-01.jpg',
      'assets/img/lumeria/matrix-02.jpg',
      'assets/img/lumeria/matrix-03.jpg',
      'assets/img/lumeria/matrix-04.jpg',
      'assets/img/lumeria/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 5.82 g", fa: "طلای زرد ۱۸ عیار: ۵٫۸۲ گرم" },
        { en: "18K white gold: 5.54 g", fa: "طلای سفید ۱۸ عیار: ۵٫۵۴ گرم" },
        { en: "18K rose gold: 5.82 g", fa: "طلای رزگلد ۱۸ عیار: ۵٫۸۲ گرم" },
        { en: "14K yellow gold: 4.86 g", fa: "طلای زرد ۱۴ عیار: ۴٫۸۶ گرم" },
        { en: "22K yellow gold: 6.76 g", fa: "طلای زرد ۲۲ عیار: ۶٫۷۶ گرم" },
        { en: "Silver 925: 3.91 g", fa: "نقره‌ی ۹۲۵: ۳٫۹۱ گرم" },
        { en: "Platinum: 7.59 g", fa: "پلاتین: ۷٫۵۹ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 136 round diamonds, 0.87 ct", fa: "هر لنگه: ۱۳۶ الماس گرد، ۰٫۸۷ قیراط" },
        { en: "92 stones, 1.2 mm: 0.60 ct", fa: "۹۲ نگین ۱٫۲ میلی‌متری: ۰٫۶۰ قیراط" },
        { en: "36 stones, 1.1 mm: 0.18 ct", fa: "۳۶ نگین ۱٫۱ میلی‌متری: ۰٫۱۸ قیراط" },
        { en: "8 stones, 1.4–1.6 mm: 0.09 ct", fa: "۸ نگین ۱٫۴ تا ۱٫۶ میلی‌متری: ۰٫۰۹ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 41.7 mm", fa: "طول: ۴۱٫۷ میلی‌متر" },
        { en: "Width: 26.9 mm", fa: "عرض: ۲۶٫۹ میلی‌متر" },
        { en: "Height: 7.4 mm", fa: "ارتفاع: ۷٫۴ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Three pavé leaves at the top, each framing a larger stone", fa: "سه برگ پاوه در بالا، هر کدام دور یک نگین درشت‌تر" },
        { en: "A diamond bar leads down into a wide disc with two pavé rings", fa: "میله‌ای نگین‌دار به دیسکی پهن با دو حلقه‌ی پاوه می‌رسد" },
        { en: "A pavé diamond-shaped drop swings free in the centre", fa: "آویزی لوزی و پاوه که در مرکز آزادانه تاب می‌خورد" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است." }
  },
  {
    id: 'elune',
    name: "ELUNÉ",
    added: '2026-10-24T23:05',
    collection: 'rings',
    kind: { en: "Band ring · 18K gold and diamond", fa: "انگشتر رینگی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · single diamond", fa: "طلای ۱۸ عیار · تک الماس" },
    description: {
      en: "Inspired by moonlight, designed to captivate.",
      fa: "الهام‌گرفته از نور ماه، طراحی‌شده برای مسحور کردن."
    },
    model: 'elune',
    spin: 'assets/video/elune-spin.mp4',
    spinPoster: 'assets/img/elune/spin-poster.jpg',
    cover: 'assets/img/elune/render-01.jpg',
    thumb: 'assets/img/elune/render-01-sm.jpg',
    stream: ['assets/img/elune/stream-a.jpg', 'assets/img/elune/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/elune/render-01.jpg',
      'assets/img/elune/matrix-01.jpg',
      'assets/img/elune/matrix-02.jpg',
      'assets/img/elune/matrix-03.jpg',
      'assets/img/elune/matrix-04.jpg',
      'assets/img/elune/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 4.78 g", fa: "طلای زرد ۱۸ عیار: ۴٫۷۸ گرم" },
        { en: "18K white gold: 4.55 g", fa: "طلای سفید ۱۸ عیار: ۴٫۵۵ گرم" },
        { en: "18K rose gold: 4.78 g", fa: "طلای رزگلد ۱۸ عیار: ۴٫۷۸ گرم" },
        { en: "14K yellow gold: 4.00 g", fa: "طلای زرد ۱۴ عیار: ۴٫۰۰ گرم" },
        { en: "22K yellow gold: 5.55 g", fa: "طلای زرد ۲۲ عیار: ۵٫۵۵ گرم" },
        { en: "Silver 925: 3.22 g", fa: "نقره‌ی ۹۲۵: ۳٫۲۲ گرم" },
        { en: "Platinum: 6.24 g", fa: "پلاتین: ۶٫۲۴ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "1 round diamond, 2.5 mm, 0.06 ct", fa: "۱ الماس گرد ۲٫۵ میلی‌متری، ۰٫۰۶ قیراط" },
        { en: "Set flush in a polished channel across the band", fa: "نشانده‌شده هم‌سطح در کانالی براق در عرض حلقه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 21.0 mm", fa: "ارتفاع از پایین تا بالا: ۲۱٫۰ میلی‌متر" },
        { en: "Width across: 20.9 mm", fa: "عرض کلی: ۲۰٫۹ میلی‌متر" },
        { en: "Band width along the finger: 4.8 mm", fa: "پهنای رینگ در امتداد انگشت: ۴٫۸ میلی‌متر" },
        { en: "Inner diameter: 17.3 mm", fa: "قطر داخلی: ۱۷٫۳ میلی‌متر" },
        { en: "Band thickness: 1.6 mm", fa: "ضخامت حلقه: ۱٫۶ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A clean, polished band with bevelled edges", fa: "حلقه‌ای صاف و براق با لبه‌های پخ‌خورده" },
        { en: "One diamond in a recessed cross-channel on top", fa: "یک الماس در کانالی عرضی و فرورفته در بالای حلقه" },
        { en: "Comfortable rounded inside", fa: "داخل گرد و راحت" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model where not marked.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی است؛ ابعادی که مشخص نشده بود از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'virelune',
    name: "VIRELUNE",
    added: '2026-10-24T21:06',
    collection: 'rings',
    kind: { en: "Solitaire ring · 18K gold and diamonds", fa: "انگشتر تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.47 ct solitaire", fa: "طلای ۱۸ عیار · تک‌نگین ۰٫۴۷ قیراط" },
    description: {
      en: "A meeting of celestial light and golden elegance.",
      fa: "تلاقی نور آسمانی و ظرافت طلایی."
    },
    model: 'virelune',
    spin: 'assets/video/virelune-spin.mp4',
    spinPoster: 'assets/img/virelune/spin-poster.jpg',
    cover: 'assets/img/virelune/render-01.jpg',
    thumb: 'assets/img/virelune/render-01-sm.jpg',
    stream: ['assets/img/virelune/stream-a.jpg', 'assets/img/virelune/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/virelune/render-01.jpg',
      'assets/img/virelune/matrix-01.jpg',
      'assets/img/virelune/matrix-02.jpg',
      'assets/img/virelune/matrix-03.jpg',
      'assets/img/virelune/matrix-04.jpg',
      'assets/img/virelune/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.20 g", fa: "طلای زرد ۱۸ عیار: ۳٫۲۰ گرم" },
        { en: "18K white gold: 3.05 g", fa: "طلای سفید ۱۸ عیار: ۳٫۰۵ گرم" },
        { en: "18K rose gold: 3.20 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۲۰ گرم" },
        { en: "14K yellow gold: 2.68 g", fa: "طلای زرد ۱۴ عیار: ۲٫۶۸ گرم" },
        { en: "22K yellow gold: 3.72 g", fa: "طلای زرد ۲۲ عیار: ۳٫۷۲ گرم" },
        { en: "Silver 925: 2.15 g", fa: "نقره‌ی ۹۲۵: ۲٫۱۵ گرم" },
        { en: "Platinum: 4.18 g", fa: "پلاتین: ۴٫۱۸ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "13 round diamonds, 0.62 ct in total", fa: "۱۳ الماس گرد، در مجموع ۰٫۶۲ قیراط" },
        { en: "Centre: 5.0 mm diamond, 0.47 ct, four triangular prongs", fa: "مرکز: الماس ۵ میلی‌متری، ۰٫۴۷ قیراط، با چهار چنگ مثلثی" },
        { en: "12 stones, 1.2–1.6 mm: 0.15 ct, in a tapering row on each shoulder", fa: "۱۲ نگین ۱٫۲ تا ۱٫۶ میلی‌متری: ۰٫۱۵ قیراط، در ردیفی باریک‌شونده روی هر شانه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 25.5 mm", fa: "ارتفاع از پایین تا بالا: ۲۵٫۵ میلی‌متر" },
        { en: "Width across: 21.4 mm", fa: "عرض کلی: ۲۱٫۴ میلی‌متر" },
        { en: "Top width along the finger: 5.7 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۵٫۷ میلی‌متر" },
        { en: "Inner diameter: 17.7 mm", fa: "قطر داخلی: ۱۷٫۷ میلی‌متر" },
        { en: "Band at the base: 1.1 mm", fa: "ضخامت حلقه در پایین: ۱٫۱ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A tall, tapered head with four triangular prongs", fa: "سرِ بلند و مخروطی با چهار چنگ مثلثی" },
        { en: "Pointed channels on the shoulders, each set with a row of diamonds", fa: "کانال‌های نوک‌تیز روی شانه‌ها، هر کدام با یک ردیف الماس" },
        { en: "Clean, polished band below", fa: "حلقه‌ی صاف و براق در پایین" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model where not marked.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی است؛ ابعادی که مشخص نشده بود از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'thevora',
    name: "THÉVORA",
    added: '2026-10-24T21:05',
    collection: 'earrings',
    kind: { en: "Drop earrings · 18K gold and diamonds", fa: "گوشواره‌ی آویزی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 28 diamonds each", fa: "طلای ۱۸ عیار · ۲۸ الماس در هر لنگه" },
    description: {
      en: "Bold character, refined luxury, unmistakable presence.",
      fa: "شخصیتی جسور، تجملی ظریف و حضوری بی‌همتا."
    },
    model: 'thevora',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -0.15 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/thevora-spin.mp4',
    spinPoster: 'assets/img/thevora/spin-poster.jpg',
    cover: 'assets/img/thevora/render-01.jpg',
    thumb: 'assets/img/thevora/render-01-sm.jpg',
    stream: ['assets/img/thevora/stream-a.jpg', 'assets/img/thevora/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/thevora/render-01.jpg',
      'assets/img/thevora/matrix-01.jpg',
      'assets/img/thevora/matrix-02.jpg',
      'assets/img/thevora/matrix-03.jpg',
      'assets/img/thevora/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.35 g", fa: "طلای زرد ۱۸ عیار: ۱٫۳۵ گرم" },
        { en: "18K white gold: 1.28 g", fa: "طلای سفید ۱۸ عیار: ۱٫۲۸ گرم" },
        { en: "18K rose gold: 1.35 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۳۵ گرم" },
        { en: "14K yellow gold: 1.13 g", fa: "طلای زرد ۱۴ عیار: ۱٫۱۳ گرم" },
        { en: "22K yellow gold: 1.56 g", fa: "طلای زرد ۲۲ عیار: ۱٫۵۶ گرم" },
        { en: "Silver 925: 0.91 g", fa: "نقره‌ی ۹۲۵: ۰٫۹۱ گرم" },
        { en: "Platinum: 1.76 g", fa: "پلاتین: ۱٫۷۶ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "Each earring: 28 round diamonds, 0.19 ct", fa: "هر لنگه: ۲۸ الماس گرد، ۰٫۱۹ قیراط" },
        { en: "7 stones, 1.48 mm: 0.08 ct, in a flower cluster in the drop", fa: "۷ نگین ۱٫۴۸ میلی‌متری: ۰٫۰۸ قیراط، به شکل گل درون آویز" },
        { en: "21 stones, 1.0–1.4 mm: 0.10 ct, along the scroll", fa: "۲۱ نگین ۱ تا ۱٫۴ میلی‌متری: ۰٫۱۰ قیراط، روی پیچک" },
        { en: "The pair: 56 diamonds, 0.38 ct", fa: "جفت گوشواره: ۵۶ الماس، ۰٫۳۸ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length of each earring: 25.8 mm", fa: "طول هر لنگه: ۲۵٫۸ میلی‌متر" },
        { en: "Width: about 8.6 mm", fa: "عرض: حدود ۸٫۶ میلی‌متر" },
        { en: "Depth with the post: 6.1 mm", fa: "عمق همراه با پین: ۶٫۱ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A diamond-set scroll that curls into a spiral, with a plain gold leaf at the top", fa: "پیچکی نگین‌دار که به مارپیچ ختم می‌شود، با برگی طلایی و ساده در بالا" },
        { en: "A round drop hangs below, holding a seven-stone diamond flower", fa: "آویزی گرد در پایین با گلی از هفت الماس" },
        { en: "Post fitting behind each earring", fa: "پین پشت هر لنگه" }
      ]}
    ],
    note: { en: "Metal weights and stones are per earring, from the design file. Dimensions are measured on the 3D model.", fa: "وزن فلز و نگین‌ها برای هر لنگه و از فایل طراحی است؛ ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'zarelle',
    name: "ZARELLE",
    added: '2026-10-24T21:03',
    collection: 'rings',
    kind: { en: "Solitaire ring · 18K gold and diamonds", fa: "انگشتر تک‌نگین · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 0.81 ct solitaire", fa: "طلای ۱۸ عیار · تک‌نگین ۰٫۸۱ قیراط" },
    description: {
      en: "Where golden artistry meets timeless beauty.",
      fa: "جایی که هنر طلاکاری با زیبایی بی‌زمان یکی می‌شود."
    },
    model: 'zarelle',
    spin: 'assets/video/zarelle-spin.mp4',
    spinPoster: 'assets/img/zarelle/spin-poster.jpg',
    cover: 'assets/img/zarelle/render-01.jpg',
    thumb: 'assets/img/zarelle/render-01-sm.jpg',
    stream: ['assets/img/zarelle/stream-a.jpg', 'assets/img/zarelle/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/zarelle/render-01.jpg',
      'assets/img/zarelle/matrix-01.jpg',
      'assets/img/zarelle/matrix-02.jpg',
      'assets/img/zarelle/matrix-03.jpg',
      'assets/img/zarelle/matrix-04.jpg',
      'assets/img/zarelle/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 5.15 g", fa: "طلای زرد ۱۸ عیار: ۵٫۱۵ گرم" },
        { en: "18K white gold: 4.90 g", fa: "طلای سفید ۱۸ عیار: ۴٫۹۰ گرم" },
        { en: "18K rose gold: 5.15 g", fa: "طلای رزگلد ۱۸ عیار: ۵٫۱۵ گرم" },
        { en: "14K yellow gold: 4.31 g", fa: "طلای زرد ۱۴ عیار: ۴٫۳۱ گرم" },
        { en: "22K yellow gold: 5.98 g", fa: "طلای زرد ۲۲ عیار: ۵٫۹۸ گرم" },
        { en: "Silver 925: 3.47 g", fa: "نقره‌ی ۹۲۵: ۳٫۴۷ گرم" },
        { en: "Platinum: 6.72 g", fa: "پلاتین: ۶٫۷۲ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "37 round diamonds, 1.04 ct in total", fa: "۳۷ الماس گرد، در مجموع ۱٫۰۴ قیراط" },
        { en: "Centre: 6.0 mm round diamond, 0.81 ct, six-prong head", fa: "مرکز: الماس گرد ۶ میلی‌متری، ۰٫۸۱ قیراط، سرِ شش‌چنگ" },
        { en: "36 stones, 1.2 mm: 0.23 ct, in two rows along each shoulder", fa: "۳۶ نگین ۱٫۲ میلی‌متری: ۰٫۲۳ قیراط، در دو ردیف روی هر شانه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 25.0 mm", fa: "ارتفاع از پایین تا بالا: ۲۵٫۰ میلی‌متر" },
        { en: "Width across: 21.7 mm", fa: "عرض کلی: ۲۱٫۷ میلی‌متر" },
        { en: "Top width along the finger: 7.3 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۷٫۳ میلی‌متر" },
        { en: "Inner diameter: 17.3 mm", fa: "قطر داخلی: ۱۷٫۳ میلی‌متر" },
        { en: "Band at the base: 1.6 mm", fa: "ضخامت حلقه در پایین: ۱٫۶ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A raised six-prong head holding the 6 mm centre diamond", fa: "سرِ شش‌چنگ برجسته که الماس مرکزی ۶ میلی‌متری را نگه می‌دارد" },
        { en: "Woven, infinity-like gold strands inside each shoulder", fa: "رشته‌های طلای درهم‌بافته و بی‌نهایت‌مانند درون هر شانه" },
        { en: "Each shoulder framed by two rows of diamonds", fa: "هر شانه با دو ردیف الماس قاب گرفته شده" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'solvera',
    name: "SOLVÉRA",
    added: '2026-10-24T21:02',
    collection: 'rings',
    kind: { en: "Halo bypass ring · 18K gold and diamonds", fa: "انگشتر هاله‌ای پیچان · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · oval diamond halo", fa: "طلای ۱۸ عیار · الماس بیضی با هاله" },
    description: {
      en: "A brilliant symbol of light, love, and eternity.",
      fa: "نمادی درخشان از نور، عشق و جاودانگی."
    },
    model: 'solvera',
    spin: 'assets/video/solvera-spin.mp4',
    spinPoster: 'assets/img/solvera/spin-poster.jpg',
    cover: 'assets/img/solvera/render-01.jpg',
    thumb: 'assets/img/solvera/render-01-sm.jpg',
    stream: ['assets/img/solvera/stream-a.jpg', 'assets/img/solvera/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/solvera/render-01.jpg',
      'assets/img/solvera/matrix-01.jpg',
      'assets/img/solvera/matrix-02.jpg',
      'assets/img/solvera/matrix-03.jpg',
      'assets/img/solvera/matrix-04.jpg',
      'assets/img/solvera/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.64 g", fa: "طلای زرد ۱۸ عیار: ۳٫۶۴ گرم" },
        { en: "18K white gold: 3.46 g", fa: "طلای سفید ۱۸ عیار: ۳٫۴۶ گرم" },
        { en: "18K rose gold: 3.64 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۶۴ گرم" },
        { en: "14K yellow gold: 3.04 g", fa: "طلای زرد ۱۴ عیار: ۳٫۰۴ گرم" },
        { en: "22K yellow gold: 4.22 g", fa: "طلای زرد ۲۲ عیار: ۴٫۲۲ گرم" },
        { en: "Silver 925: 2.44 g", fa: "نقره‌ی ۹۲۵: ۲٫۴۴ گرم" },
        { en: "Platinum: 4.74 g", fa: "پلاتین: ۴٫۷۴ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "37 diamonds, 0.96 ct in total", fa: "۳۷ الماس، در مجموع ۰٫۹۶ قیراط" },
        { en: "Centre: oval diamond 7.2 × 5.3 mm, 0.75 ct, four-prong", fa: "مرکز: الماس بیضی ۷٫۲ × ۵٫۳ میلی‌متر، ۰٫۷۵ قیراط، چهارچنگ" },
        { en: "36 round stones, 1.0–1.3 mm: 0.22 ct, in the halo and along both shoulders", fa: "۳۶ نگین گرد ۱ تا ۱٫۳ میلی‌متری: ۰٫۲۲ قیراط، در هاله و روی هر دو شانه" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Height, base to top: 22.7 mm", fa: "ارتفاع از پایین تا بالا: ۲۲٫۷ میلی‌متر" },
        { en: "Width across: 20.9 mm", fa: "عرض کلی: ۲۰٫۹ میلی‌متر" },
        { en: "Top width along the finger: 11.0 mm", fa: "پهنای بالای انگشتر در امتداد انگشت: ۱۱٫۰ میلی‌متر" },
        { en: "Inner diameter: 17.5 mm", fa: "قطر داخلی: ۱۷٫۵ میلی‌متر" },
        { en: "Band at the base: 1.5 mm", fa: "ضخامت حلقه در پایین: ۱٫۵ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "Oval centre diamond in a pavé halo", fa: "الماس بیضی مرکزی درون هاله‌ای پاوه" },
        { en: "Bypass shank: the two shoulders sweep past each other around the halo", fa: "بدنه‌ی پیچان: دو شانه از کنار هم و دور هاله عبور می‌کنند" },
        { en: "Pavé diamonds continue down both shoulders", fa: "الماس‌های پاوه روی هر دو شانه ادامه پیدا می‌کنند" }
      ]}
    ],
    note: { en: "Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.", fa: "وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'velora',
    name: "VELORA",
    added: '2026-10-24T21:01',
    collection: 'pendants',
    kind: { en: "Heart pendant · 18K gold and diamonds", fa: "آویز قلب · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 37 diamonds", fa: "طلای ۱۸ عیار · ۳۷ الماس" },
    description: {
      en: "Grace in every curve, elegance in every detail.",
      fa: "ظرافت در هر انحنا، شکوه در هر جزئیات."
    },
    model: 'velora',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: 0 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/velora-spin.mp4',
    spinPoster: 'assets/img/velora/spin-poster.jpg',
    cover: 'assets/img/velora/render-01.jpg',
    thumb: 'assets/img/velora/render-01-sm.jpg',
    stream: ['assets/img/velora/stream-a.jpg', 'assets/img/velora/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/velora/render-01.jpg',
      'assets/img/velora/matrix-01.jpg',
      'assets/img/velora/matrix-02.jpg',
      'assets/img/velora/matrix-03.jpg',
      'assets/img/velora/matrix-04.jpg',
      'assets/img/velora/matrix-05.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 3.03 g", fa: "طلای زرد ۱۸ عیار: ۳٫۰۳ گرم" },
        { en: "18K white gold: 2.88 g", fa: "طلای سفید ۱۸ عیار: ۲٫۸۸ گرم" },
        { en: "18K rose gold: 3.03 g", fa: "طلای رزگلد ۱۸ عیار: ۳٫۰۳ گرم" },
        { en: "14K yellow gold: 2.53 g", fa: "طلای زرد ۱۴ عیار: ۲٫۵۳ گرم" },
        { en: "22K yellow gold: 3.52 g", fa: "طلای زرد ۲۲ عیار: ۳٫۵۲ گرم" },
        { en: "Silver 925: 2.04 g", fa: "نقره‌ی ۹۲۵: ۲٫۰۴ گرم" },
        { en: "Platinum: 3.95 g", fa: "پلاتین: ۳٫۹۵ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "37 round diamonds, 0.29 ct in total", fa: "۳۷ الماس گرد، در مجموع ۰٫۲۹ قیراط" },
        { en: "31 stones, 1.3 mm: 0.26 ct", fa: "۳۱ نگین ۱٫۳ میلی‌متری: ۰٫۲۶ قیراط" },
        { en: "2 stones each of 1.0, 1.1 and 1.2 mm: 0.03 ct", fa: "از هر کدام ۲ نگین ۱، ۱٫۱ و ۱٫۲ میلی‌متری: ۰٫۰۳ قیراط" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 22.4 mm", fa: "طول: ۲۲٫۴ میلی‌متر" },
        { en: "Width: 17.8 mm", fa: "عرض: ۱۷٫۸ میلی‌متر" },
        { en: "Height: 5.8 mm", fa: "ارتفاع: ۵٫۸ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A heart drawn by two diamond-set strands and one plain gold sweep", fa: "قلبی که با دو رشته‌ی نگین‌دار و یک انحنای طلای ساده کشیده شده" },
        { en: "The strands cross and fold over at the top of the heart", fa: "رشته‌ها در بالای قلب از روی هم رد می‌شوند و تا می‌خورند" },
        { en: "A double gold ribbon loops up to form the bail", fa: "روبان دوتایی طلایی بالا می‌پیچد و گیره‌ی آویز را می‌سازد" }
      ]}
    ],
    note: { en: "Weights, stone sizes and dimensions come from the design file.", fa: "وزن‌ها، اندازه‌ی نگین‌ها و ابعاد از فایل طراحی است." }
  },
  {
    id: 'aureve',
    name: "AUREVÉ",
    added: '2026-10-24T20:59',
    collection: 'pendants',
    kind: { en: "Pear halo pendant · 18K gold and diamonds", fa: "آویز هاله‌ای گلابی · طلای ۱۸ عیار و الماس" },
    line: { en: "18K gold · 22 diamonds", fa: "طلای ۱۸ عیار · ۲۲ الماس" },
    description: {
      en: "A golden dream, crafted to last forever.",
      fa: "رؤیایی طلایی، ساخته‌شده برای همیشه ماندن."
    },
    model: 'aureve',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -0.2 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/aureve-spin.mp4',
    spinPoster: 'assets/img/aureve/spin-poster.jpg',
    cover: 'assets/img/aureve/render-01.jpg',
    thumb: 'assets/img/aureve/render-01-sm.jpg',
    stream: ['assets/img/aureve/stream-a.jpg', 'assets/img/aureve/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/aureve/render-01.jpg',
      'assets/img/aureve/matrix-01.jpg',
      'assets/img/aureve/matrix-02.jpg',
      'assets/img/aureve/matrix-03.jpg',
      'assets/img/aureve/matrix-04.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: "18K yellow gold: 1.15 g", fa: "طلای زرد ۱۸ عیار: ۱٫۱۵ گرم" },
        { en: "18K white gold: 1.10 g", fa: "طلای سفید ۱۸ عیار: ۱٫۱۰ گرم" },
        { en: "18K rose gold: 1.15 g", fa: "طلای رزگلد ۱۸ عیار: ۱٫۱۵ گرم" },
        { en: "14K yellow gold: 0.96 g", fa: "طلای زرد ۱۴ عیار: ۰٫۹۶ گرم" },
        { en: "22K yellow gold: 1.34 g", fa: "طلای زرد ۲۲ عیار: ۱٫۳۴ گرم" },
        { en: "Silver 925: 0.78 g", fa: "نقره‌ی ۹۲۵: ۰٫۷۸ گرم" },
        { en: "Platinum: 1.51 g", fa: "پلاتین: ۱٫۵۱ گرم" }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: "22 diamonds", fa: "۲۲ الماس" },
        { en: "Centre: pear diamond, about 6 × 4 mm, four-prong", fa: "مرکز: الماس گلابی، حدود ۶ × ۴ میلی‌متر، چهارچنگ" },
        { en: "21 round stones, 1.0–1.3 mm, in the halo and along the twist", fa: "۲۱ نگین گرد ۱ تا ۱٫۳ میلی‌متری، در هاله و روی پیچ" }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: "Length: 16.7 mm", fa: "طول: ۱۶٫۷ میلی‌متر" },
        { en: "Width: 8.0 mm", fa: "عرض: ۸٫۰ میلی‌متر" },
        { en: "Height: 5.3 mm", fa: "ارتفاع: ۵٫۳ میلی‌متر" }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: "A pear diamond in a halo of prong-set round stones", fa: "الماس گلابی در هاله‌ای از نگین‌های گرد چنگی" },
        { en: "A twisted gold ribbon rises from the halo to form the bail", fa: "روبان طلایی پیچان از هاله بالا می‌رود و گیره‌ی آویز را می‌سازد" },
        { en: "One strand of the twist is set with diamonds", fa: "یکی از رشته‌های پیچ با الماس نگین‌کاری شده است" }
      ]}
    ],
    note: { en: "Weights and dimensions come from the design file; stone sizes are measured on the 3D model.", fa: "وزن‌ها و ابعاد از فایل طراحی و اندازه‌ی نگین‌ها از مدل سه‌بعدی اندازه‌گیری شده است." }
  },
  {
    id: 'imperio',
    name: 'IMPERIO',
    added: '2026-10-23T23:41',
    collection: 'pendants',
    kind: { en: 'Pear diamond pendant · 18K gold and diamonds', fa: 'آویز الماس گلابی · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 1.20 ct pear diamond', fa: 'طلای ۱۸ عیار · الماس گلابی ۱٫۲۰ قیراط' },
    description: {
      en: 'A majestic presence, with a design that draws the eye without needing to exaggerate.',
      fa: 'حضوری باشکوه با طراحی‌ای که توجه را بی‌نیاز از اغراق جلب می‌کند.'
    },
    model: 'imperio',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -.22 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/imperio-spin.mp4',
    spinPoster: 'assets/img/imperio/spin-poster.jpg',
    cover: 'assets/img/imperio/render-01.jpg',
    thumb: 'assets/img/imperio/render-01-sm.jpg',
    stream: ['assets/img/imperio/stream-a.jpg', 'assets/img/imperio/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/imperio/render-01.jpg',
      'assets/img/imperio/matrix-01.jpg', 'assets/img/imperio/matrix-02.jpg',
      'assets/img/imperio/matrix-03.jpg', 'assets/img/imperio/matrix-04.jpg',
      'assets/img/imperio/matrix-05.jpg', 'assets/img/imperio/matrix-06.jpg',
      'assets/img/imperio/matrix-07.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 1.95 g', fa: 'طلای زرد ۱۸ عیار: ۱٫۹۵ گرم' },
        { en: '18K white gold: 1.85 g', fa: 'طلای سفید ۱۸ عیار: ۱٫۸۵ گرم' },
        { en: '18K rose gold: 1.95 g', fa: 'طلای رزگلد ۱۸ عیار: ۱٫۹۵ گرم' },
        { en: '14K yellow gold: 1.63 g', fa: 'طلای زرد ۱۴ عیار: ۱٫۶۳ گرم' },
        { en: '22K yellow gold: 2.26 g', fa: 'طلای زرد ۲۲ عیار: ۲٫۲۶ گرم' },
        { en: 'Silver 925: 1.31 g', fa: 'نقره‌ی ۹۲۵: ۱٫۳۱ گرم' },
        { en: 'Platinum: 2.54 g', fa: 'پلاتین: ۲٫۵۴ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '14 diamonds, 1.28 ct in total', fa: '۱۴ الماس، در مجموع ۱٫۲۸ قیراط' },
        { en: 'Centre: pear diamond 9 × 6 mm, 1.20 ct, three-prong', fa: 'مرکز: الماس گلابی ۹ × ۶ میلی‌متر، ۱٫۲۰ قیراط، سه‌چنگ' },
        { en: '13 round stones, 0.9–1.4 mm: 0.08 ct, along the ribbon', fa: '۱۳ نگین گرد ۰٫۹ تا ۱٫۴ میلی‌متری: ۰٫۰۸ قیراط، روی روبان' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height: 19.5 mm', fa: 'ارتفاع: ۱۹٫۵ میلی‌متر' },
        { en: 'Width: 9.3 mm', fa: 'عرض: ۹٫۳ میلی‌متر' },
        { en: 'Thickness: 6.8 mm', fa: 'ضخامت: ۶٫۸ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'A pear diamond hung from a looping gold ribbon', fa: 'الماس گلابی آویخته از روبانی طلایی و پیچان' },
        { en: 'The ribbon is set with a line of small diamonds and forms the bail', fa: 'روبان با ردیفی از الماس‌های ریز نگین‌کاری شده و خودش گیره‌ی آویز است' },
        { en: 'Open basket seat with three prongs', fa: 'نشیمن باز سبدی با سه چنگ' }
      ]}
    ],
    note: { en: 'Weights and stone sizes come from the design file. Dimensions are measured on the 3D model.', fa: 'وزن‌ها و اندازه‌ی نگین‌ها از فایل طراحی و ابعاد از مدل سه‌بعدی اندازه‌گیری شده است.' }
  },
  {
    id: 'lumiere',
    name: 'LUMIÈRE',
    added: '2026-10-23T23:38',
    collection: 'pendants',
    kind: { en: 'Cluster pendant · 18K gold and diamonds', fa: 'آویز خوشه‌ای · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 36 diamonds', fa: 'طلای ۱۸ عیار · ۳۶ الماس' },
    description: {
      en: 'Inspired by light; a soft brilliance that comes alive with every movement.',
      fa: 'الهام‌گرفته از نور؛ درخششی لطیف که با هر حرکت جان می‌گیرد.'
    },
    model: 'lumiere',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .6, ty: -.2 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/lumiere-spin.mp4',
    spinPoster: 'assets/img/lumiere/spin-poster.jpg',
    cover: 'assets/img/lumiere/render-01.jpg',
    thumb: 'assets/img/lumiere/render-01-sm.jpg',
    stream: ['assets/img/lumiere/stream-a.jpg', 'assets/img/lumiere/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/lumiere/render-01.jpg',
      'assets/img/lumiere/matrix-01.jpg', 'assets/img/lumiere/matrix-02.jpg',
      'assets/img/lumiere/matrix-03.jpg', 'assets/img/lumiere/matrix-04.jpg',
      'assets/img/lumiere/matrix-05.jpg', 'assets/img/lumiere/matrix-06.jpg',
      'assets/img/lumiere/matrix-07.jpg', 'assets/img/lumiere/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 2.10 g', fa: 'طلای زرد ۱۸ عیار: ۲٫۱۰ گرم' },
        { en: '18K white gold: 1.99 g', fa: 'طلای سفید ۱۸ عیار: ۱٫۹۹ گرم' },
        { en: '18K rose gold: 2.10 g', fa: 'طلای رزگلد ۱۸ عیار: ۲٫۱۰ گرم' },
        { en: '14K yellow gold: 1.75 g', fa: 'طلای زرد ۱۴ عیار: ۱٫۷۵ گرم' },
        { en: '22K yellow gold: 2.43 g', fa: 'طلای زرد ۲۲ عیار: ۲٫۴۳ گرم' },
        { en: 'Silver 925: 1.41 g', fa: 'نقره‌ی ۹۲۵: ۱٫۴۱ گرم' },
        { en: 'Platinum: 2.73 g', fa: 'پلاتین: ۲٫۷۳ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '36 round diamonds, 0.45 ct in total', fa: '۳۶ الماس گرد، در مجموع ۰٫۴۵ قیراط' },
        { en: 'All 36 stones 1.5 mm, prong-set over a domed cluster', fa: 'هر ۳۶ نگین ۱٫۵ میلی‌متری، چنگی، روی یک خوشه‌ی گنبدی' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Length: 16.4 mm', fa: 'طول: ۱۶٫۴ میلی‌متر' },
        { en: 'Width: 10.4 mm', fa: 'عرض: ۱۰٫۴ میلی‌متر' },
        { en: 'Thickness: 5.2 mm', fa: 'ضخامت: ۵٫۲ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'A domed cluster of diamonds, their prongs radiating like rays of light', fa: 'خوشه‌ای گنبدی از الماس، با چنگ‌هایی که مثل پرتوهای نور باز می‌شوند' },
        { en: 'A polished gold dome above, joined by a hidden link', fa: 'گنبدی طلایی و براق در بالا، متصل با اتصالی پنهان' },
        { en: 'Open gallery with windows around both parts', fa: 'بدنه‌ی باز با پنجره‌هایی دور هر دو بخش' }
      ]}
    ],
    note: { en: 'Weights, stone sizes and dimensions come from the design file.', fa: 'وزن‌ها، اندازه‌ی نگین‌ها و ابعاد از فایل طراحی است.' }
  },
  {
    id: 'asterion',
    name: 'ASTERION',
    added: '2026-10-23T23:28',
    collection: 'pendants',
    kind: { en: 'Pendant · 18K gold and diamonds', fa: 'آویز · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · 61 diamonds', fa: 'طلای ۱۸ عیار · ۶۱ الماس' },
    description: {
      en: 'A star-like splendour in a modern, distinctive design.',
      fa: 'شکوهی ستاره‌گون در طراحی‌ای مدرن و متمایز.'
    },
    model: 'asterion',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -.1 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/asterion-spin.mp4',
    spinPoster: 'assets/img/asterion/spin-poster.jpg',
    cover: 'assets/img/asterion/render-01.jpg',
    thumb: 'assets/img/asterion/render-01-sm.jpg',
    stream: ['assets/img/asterion/stream-a.jpg', 'assets/img/asterion/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/asterion/render-01.jpg',
      'assets/img/asterion/matrix-01.jpg', 'assets/img/asterion/matrix-02.jpg',
      'assets/img/asterion/matrix-03.jpg', 'assets/img/asterion/matrix-04.jpg',
      'assets/img/asterion/matrix-05.jpg', 'assets/img/asterion/matrix-06.jpg',
      'assets/img/asterion/matrix-07.jpg', 'assets/img/asterion/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 3.79 g', fa: 'طلای زرد ۱۸ عیار: ۳٫۷۹ گرم' },
        { en: '18K white gold: 3.60 g', fa: 'طلای سفید ۱۸ عیار: ۳٫۶۰ گرم' },
        { en: '18K rose gold: 3.79 g', fa: 'طلای رزگلد ۱۸ عیار: ۳٫۷۹ گرم' },
        { en: '14K yellow gold: 3.16 g', fa: 'طلای زرد ۱۴ عیار: ۳٫۱۶ گرم' },
        { en: '22K yellow gold: 4.40 g', fa: 'طلای زرد ۲۲ عیار: ۴٫۴۰ گرم' },
        { en: 'Silver 925: 2.55 g', fa: 'نقره‌ی ۹۲۵: ۲٫۵۵ گرم' },
        { en: 'Platinum: 4.94 g', fa: 'پلاتین: ۴٫۹۴ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '61 round diamonds, 0.36 ct in total', fa: '۶۱ الماس گرد، در مجموع ۰٫۳۶ قیراط' },
        { en: '48 stones, 1.1 mm: 0.24 ct', fa: '۴۸ نگین ۱٫۱ میلی‌متری: ۰٫۲۴ قیراط' },
        { en: '7 stones, 1.4 mm: 0.07 ct', fa: '۷ نگین ۱٫۴ میلی‌متری: ۰٫۰۷ قیراط' },
        { en: '4 stones, 1.3 mm: 0.033 ct', fa: '۴ نگین ۱٫۳ میلی‌متری: ۰٫۰۳۳ قیراط' },
        { en: '2 stones, 1.2 mm: 0.013 ct', fa: '۲ نگین ۱٫۲ میلی‌متری: ۰٫۰۱۳ قیراط' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Length: 30.7 mm', fa: 'طول: ۳۰٫۷ میلی‌متر' },
        { en: 'Width: 12.8 mm', fa: 'عرض: ۱۲٫۸ میلی‌متر' },
        { en: 'Thickness: 3.2 mm', fa: 'ضخامت: ۳٫۲ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'A teardrop frame lined with a row of pavé diamonds', fa: 'قاب قطره‌ای با یک ردیف الماس پاوه' },
        { en: 'A pear-shaped diamond cluster inside a sweeping inner curve', fa: 'خوشه‌ی الماس گلابی‌شکل درون یک قوس داخلی' },
        { en: 'Sculpted gold leaves at the neck, under a diamond-set loop', fa: 'برگ‌های طلایی تراش‌خورده در گردن آویز، زیر حلقه‌ای نگین‌دار' }
      ]}
    ],
    note: { en: 'Weights, stone sizes and dimensions come from the design file.', fa: 'وزن‌ها، اندازه‌ی نگین‌ها و ابعاد از فایل طراحی است.' }
  },
  {
    id: 'crownelle',
    name: 'CROWNELLE',
    added: '2026-10-23T23:27',
    collection: 'pendants',
    kind: { en: 'Halo pendant · 18K gold and diamonds', fa: 'آویز هاله‌ای · طلای ۱۸ عیار و الماس' },
    line: { en: '18K gold · oval diamond halo', fa: 'طلای ۱۸ عیار · الماس بیضی با هاله' },
    description: {
      en: 'Inspired by a crown; a symbol of singular brilliance and refined beauty.',
      fa: 'الهام‌گرفته از تاج؛ نمادی از درخشش منحصربه‌فرد و زیبایی فاخر.'
    },
    model: 'crownelle',
    /* pendants stand upright: front-on views instead of the ring tour */
    pose: { az: .4, el: .14, d: 1, ty: 0 },
    tour: [{ az: .4, el: .14, d: 1, ty: 0 }, { az: 0, el: .06, d: .9, ty: 0 }, { az: .22, el: .18, d: .55, ty: -.32 }, { az: -.5, el: .12, d: .95, ty: 0 }],
    spin: 'assets/video/crownelle-spin.mp4',
    spinPoster: 'assets/img/crownelle/spin-poster.jpg',
    cover: 'assets/img/crownelle/render-01.jpg',
    thumb: 'assets/img/crownelle/render-01-sm.jpg',
    stream: ['assets/img/crownelle/stream-a.jpg', 'assets/img/crownelle/stream-b.jpg'],   /* portrait cards for the collections corridor (tools/make_stream.py) */
    photos: [
      'assets/img/crownelle/render-01.jpg',
      'assets/img/crownelle/matrix-01.jpg', 'assets/img/crownelle/matrix-02.jpg',
      'assets/img/crownelle/matrix-03.jpg', 'assets/img/crownelle/matrix-04.jpg',
      'assets/img/crownelle/matrix-05.jpg', 'assets/img/crownelle/matrix-06.jpg',
      'assets/img/crownelle/matrix-07.jpg', 'assets/img/crownelle/matrix-08.jpg'
    ],
    specs: [
      { title: { en: 'Metal weight', fa: 'وزن فلز' }, items: [
        { en: '18K yellow gold: 3.17 g', fa: 'طلای زرد ۱۸ عیار: ۳٫۱۷ گرم' },
        { en: '18K white gold: 3.02 g', fa: 'طلای سفید ۱۸ عیار: ۳٫۰۲ گرم' },
        { en: '18K rose gold: 3.17 g', fa: 'طلای رزگلد ۱۸ عیار: ۳٫۱۷ گرم' },
        { en: '14K yellow gold: 2.65 g', fa: 'طلای زرد ۱۴ عیار: ۲٫۶۵ گرم' },
        { en: '22K yellow gold: 3.68 g', fa: 'طلای زرد ۲۲ عیار: ۳٫۶۸ گرم' },
        { en: 'Silver 925: 2.13 g', fa: 'نقره‌ی ۹۲۵: ۲٫۱۳ گرم' },
        { en: 'Platinum: 4.14 g', fa: 'پلاتین: ۴٫۱۴ گرم' }
      ]},
      { title: { en: 'Diamonds', fa: 'الماس‌ها' }, items: [
        { en: '46 diamonds, 1.84 ct in total', fa: '۴۶ الماس، در مجموع ۱٫۸۴ قیراط' },
        { en: 'Centre: oval diamond 9.5 × 6.5 mm, 1.61 ct, four-prong', fa: 'مرکز: الماس بیضی ۹٫۵ × ۶٫۵ میلی‌متر، ۱٫۶۱ قیراط، چهارچنگ' },
        { en: '45 round stones, 1.1 mm: 0.23 ct, in the halo and the scroll', fa: '۴۵ نگین گرد ۱٫۱ میلی‌متری: ۰٫۲۳ قیراط، در هاله و پیچک بالا' }
      ]},
      { title: { en: 'Dimensions', fa: 'ابعاد' }, items: [
        { en: 'Height: 23.9 mm', fa: 'ارتفاع: ۲۳٫۹ میلی‌متر' },
        { en: 'Width: 10.9 mm', fa: 'عرض: ۱۰٫۹ میلی‌متر' },
        { en: 'Thickness: 5.6 mm', fa: 'ضخامت: ۵٫۶ میلی‌متر' }
      ]},
      { title: { en: 'Details', fa: 'جزئیات' }, items: [
        { en: 'Oval centre diamond held by four prongs inside a pavé halo', fa: 'الماس بیضی مرکزی با چهار چنگ درون هاله‌ای از الماس پاوه' },
        { en: 'A crown-like scroll on top, set with diamonds', fa: 'پیچکی تاج‌مانند در بالا، نگین‌کاری‌شده' },
        { en: 'Open gallery with windows around the sides', fa: 'بدنه‌ی باز با پنجره‌هایی دور تا دور' }
      ]}
    ],
    note: { en: 'Weights, stone sizes and dimensions come from the design file.', fa: 'وزن‌ها، اندازه‌ی نگین‌ها و ابعاد از فایل طراحی است.' }
  },
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
  { id: 'pendants',  en: 'Pendants',  fa: 'آویز',          c: '#ff9a3d', icon: '<polyline points="26,6 50,38 74,6"/><ellipse cx="50" cy="68" rx="19" ry="25"/><ellipse cx="50" cy="68" rx="9" ry="14"/>' },
  { id: 'sets',      en: 'Sets',      fa: 'ست',            c: '#f2c94c', icon: '<path d="M30 10v10M70 10v10"/><circle cx="30" cy="27" r="7"/><circle cx="70" cy="27" r="7"/><polyline points="38,44 50,58 62,44"/><ellipse cx="50" cy="76" rx="14" ry="18"/>' }
];

/* =====================================================================
   ACTION FIGURES — the second section of the site (menu: "Action Figure").
   Figures are kept apart from the jewellery above, so they never appear in the
   home hero or the jewellery collections.

   To add a figure: run  python3 tools/convert_figure.py figure.obj <id>  (it prints the
   volume, surface and size used below and writes assets/models/<id>.bin), copy one entry,
   put its renders in assets/img/<id>/, copy figures/catball/ to figures/<id>/ and change
   data-figure, then run python3 tools/build_seo.py (add the figure to FIGURES there too).
   Weights are computed on the page from volume x density, so they follow the size slider.
   ===================================================================== */
window.SHEMIRANI_FIGURES = [
  {
    id: 'catball',
    name: "CATBALL",
    added: '2026-11-08T05:00',
    kind: { en: "Action figure · 3D-print and cast file", fa: "اکشن فیگور · فایل چاپ سه‌بعدی و ریخته‌گری" },
    line: { en: "OBJ + STL · any size · any colour", fa: "OBJ و STL · هر اندازه · هر رنگ" },
    description: {
      en: "A round-faced cat head sculpted in ZBrush. The file is watertight and ready to print or cast, and the figure can be made larger or smaller to any size you need.",
      fa: "سر گربه‌ای با صورت گرد که در زی‌براش مجسمه‌سازی شده. فایل آب‌بندی (بدون سوراخ) و آماده‌ی چاپ یا ریخته‌گری است و فیگور را می‌توان به هر اندازه‌ای بزرگ‌تر یا کوچک‌تر ساخت."
    },
    model: 'catball',
    rot: [0, 0, 0],                         /* degrees, applied to the file so the figure stands upright */
    volume: 75.77,                          /* cm3 at the file's own size (tools/convert_figure.py) */
    surface: 101.6,                         /* cm2 */
    size: { w: 58.6, d: 61.6, h: 53.8 },    /* mm at 100% (width, depth, height after rot) */
    cover: 'assets/img/catball/render-01.jpg',
    thumb: 'assets/img/catball/render-01.jpg',
    photos: [
      'assets/img/catball/render-01.jpg',
      'assets/img/catball/render-02.jpg',
      'assets/img/catball/render-03.jpg',
      'assets/img/catball/render-04.jpg',
      'assets/img/catball/render-05.jpg',
      'assets/img/catball/render-06.jpg'
    ]
  },
  {
    id: 'cthulhu',
    name: "CTHULHU",
    added: '2026-11-08T19:50',
    kind: { en: "Action figure with base · 3D-print and cast file", fa: "اکشن فیگور همراه با پایه · فایل چاپ سه‌بعدی و ریخته‌گری" },
    line: { en: "STL · figure + base · any size · any colour", fa: "STL · فیگور و پایه · هر اندازه · هر رنگ" },
    description: {
      en: "A chibi Cthulhu with a big round head, a face of tentacles, bat-like wings and small clawed feet, standing on his own rocky R'lyeh base. The base has two pins that fit the feet. Fine skin detail, made to be printed, cast in metal or painted, in any size you need.",
      fa: "کتولوی چیبی با سر گرد و بزرگ، صورتی از شاخک‌ها، بال‌هایی شبیه خفاش و پاهای کوچک چنگال‌دار، ایستاده روی پایه‌ی صخره‌ای مخصوص خودش (R'lyeh). پایه دو میخ دارد که در پاها جا می‌شوند. با ریزه‌کاری‌های پوست مجسمه‌سازی شده و برای چاپ، ریخته‌گری فلز یا رنگ‌آمیزی در هر اندازه‌ای ساخته شده است."
    },
    model: 'cthulhu',
    rot: [-90, 0, 0],
    volume: 16.68,                          /* cm3, figure + base together (tools/convert_figure.py prints the total) */
    surface: 75.0,                          /* cm2 */
    size: { w: 57.3, d: 38.6, h: 51.0 },    /* mm at 100%: the figure standing on its base */
    parts: [                                /* the weights add up the parts; the thin base is always solid */
      { name: { en: "Figure", fa: "فیگور" }, volume: 14.71, surface: 56.7 },
      { name: { en: "R'lyeh base", fa: "پایه‌ی R'lyeh" }, volume: 1.96, surface: 18.3, solid: true }
    ],
    cover: 'assets/img/cthulhu/render-01.jpg',
    thumb: 'assets/img/cthulhu/render-01.jpg',
    photos: [
      'assets/img/cthulhu/render-01.jpg',
      'assets/img/cthulhu/render-02.jpg',
      'assets/img/cthulhu/render-03.jpg',
      'assets/img/cthulhu/render-04.jpg',
      'assets/img/cthulhu/render-05.jpg',
      'assets/img/cthulhu/render-06.jpg'
    ]
  }
];

/* densities in g/cm3 (the gold, silver and platinum values match the jewellery weight tables) */
window.SHEMIRANI_FIGURE_MATERIALS = [
  { title: { en: 'Weight · 3D print and wax', fa: 'وزن · چاپ سه‌بعدی و واکس' }, items: [
    { en: 'Standard resin', fa: 'رزین استاندارد', d: 1.10 },
    { en: 'PLA filament', fa: 'فیلامنت PLA', d: 1.24 },
    { en: 'PETG filament', fa: 'فیلامنت PETG', d: 1.27 },
    { en: 'ABS filament', fa: 'فیلامنت ABS', d: 1.04 },
    { en: 'Casting wax', fa: 'واکس ریخته‌گری', d: 0.95 }
  ]},
  { title: { en: 'Weight · cast metal', fa: 'وزن · فلز ریخته‌گری' }, items: [
    { en: 'Bronze', fa: 'برنز', d: 8.8 },
    { en: 'Brass', fa: 'برنج', d: 8.5 },
    { en: 'Silver 925', fa: 'نقره‌ی ۹۲۵', d: 10.4 },
    { en: '14K yellow gold', fa: 'طلای زرد ۱۴ عیار', d: 13.0 },
    { en: '18K yellow gold', fa: 'طلای زرد ۱۸ عیار', d: 15.5 },
    { en: '18K white gold', fa: 'طلای سفید ۱۸ عیار', d: 14.7 },
    { en: '18K rose gold', fa: 'طلای رزگلد ۱۸ عیار', d: 15.5 },
    { en: '22K yellow gold', fa: 'طلای زرد ۲۲ عیار', d: 18.0 },
    { en: 'Platinum', fa: 'پلاتین', d: 20.2 }
  ]}
];

/* colour combos for the figure viewer: stops run from the base up to the top of the figure */
window.SHEMIRANI_FIGURE_COMBOS = [
  { id: 'royal',    en: 'Royal Gold',          fa: 'طلایی سلطنتی',        stops: ['#a87722', '#e3bd74', '#fff1c1'], metal: 1,   rough: .22, clear: 0,  bg: ['#17285a', '#040818'], glow: '#e3bd74' },
  { id: 'obsidian', en: 'Obsidian & Gold',     fa: 'سیاه و طلا',          stops: ['#e3bd74', '#16161d', '#07070b'], metal: .55, rough: .24, clear: 1,  bg: ['#2a2110', '#050508'], glow: '#e3bd74' },
  { id: 'neon',     en: 'Neon Nights',         fa: 'نئون شب',             stops: ['#00e5ff', '#7b2cff', '#ff2fa0'], metal: .12, rough: .22, clear: 1,  bg: ['#25104f', '#05030f'], glow: '#9b5cff' },
  { id: 'rose',     en: 'Rose Gold & Pearl',   fa: 'رزگلد و مروارید',     stops: ['#b76e79', '#f4c2c2', '#fff5ee'], metal: .9,  rough: .27, clear: 0,  bg: ['#3a1f2b', '#0c0508'], glow: '#f4a6b0' },
  { id: 'candy',    en: 'Cyber Candy',         fa: 'آب‌نبات سایبری',      stops: ['#14e0c8', '#ff7ac6', '#ffd9f2'], metal: 0,   rough: .3,  clear: 1,  bg: ['#10315a', '#050918'], glow: '#ff7ac6' },
  { id: 'emerald',  en: 'Emerald & Champagne', fa: 'زمرد و شامپاین',      stops: ['#06402f', '#0f9b6c', '#ecdca8'], metal: .35, rough: .3,  clear: 1,  bg: ['#073a2d', '#02080a'], glow: '#3de0a8' },
  { id: 'sunset',   en: 'Sunset Blaze',        fa: 'غروب آتشین',          stops: ['#6a1fff', '#ff3d6e', '#ffb347'], metal: .1,  rough: .35, clear: .8, bg: ['#401530', '#0a0410'], glow: '#ff7a45' },
  { id: 'arctic',   en: 'Arctic Chrome',       fa: 'کروم قطبی',           stops: ['#6f84a0', '#dbe6f2', '#ffffff'], metal: 1,   rough: .1,  clear: 0,  bg: ['#233049', '#06090f'], glow: '#9fc6ff' }
];
