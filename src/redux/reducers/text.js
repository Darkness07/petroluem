

const initState = {
    fax:{
        ru: 'Факс',
        es: 'Факс',
        en: 'Fax'
    },
    email:{
        ru: 'Email адрес',
        es: 'Email дарек',
        en: 'Email address'
    },
    phone:{
        ru: 'Телефон',
        es: 'Телефон',
        en: 'Telephone'
    },
    back: {
        ru: '< Назад',
        es: '< Артка',
        en: '< Back'
    },
    news: {
        ru: 'Новости',
        es: 'Жаңылыктар',
        en: 'News'
    },
    aboutUs: {
        ru: 'О нас',
        es: 'Биз жөнүндө',
        en: 'About Us'
    },
    laboratory: {
        ru: 'Лаборатория',
        es: 'Лаборатория',
        en: 'Laboratory'
    },
    leaders: {
        ru: 'Руководители',
        es: 'Жетекчилер',
        en: 'Leaders'
    },
    purchases: {
        ru: 'Наши закупки',
        es: 'Биздин сатып алуулар',
        en: 'Our purchases'
    },
    staff: {
        ru: 'Персонал',
        es: 'Кызматкерлер',
        en: 'Saff'
    },
    mainPage: {
        ru: 'Главная',
        es: 'Башкы бет',
        en: 'Main page',
    },
    contacts: {
        ru: 'Контакты',
        es: 'Байланышуу',
        en: 'Contacts'
    },
    requisites: {
        ru: 'Банковские реквезиты',
        es: 'Банк реквизиттери',
        en: 'Bank details'
    },
    jobs: {
        ru: 'Вакансии',
        es: 'Жумуштар',
        en: 'Jobs'
    },
    footerText: {
        ru: `Закрытое акционерное общество «Кыргыз Петролеум Компани» (ЗАО «КПК» или Компания) является, одним из ведущих производителей нефтепродуктов в Кыргызстане 100% акций компании принадлежит, ГП ОАО «Кыргызнефтегаз». Компания занимается производством нефтепродуктов из нефти и других видов сырья и предоставляет услуги по переработке. На данный момент предприятие производит 3 вида продукции: бензин, дизельное топливо, мазут.`,
        es: `«Кыргыз Петролеум Компани» жабык акционердик коому (ЖАК «КПК» же Коом) Кыргызстандагы мунай продуктуларын өндүрүүчүлөрдүн алдыңкыларынын бири болуп саналат, компаниянын 100% акциясы «Кыргызнефтегаз» МИге таандык. Компания мунайдан жана башка сырьедон мунай продуктуларын өндүрүү менен алектенет жана кайра иштетүү боюнча кызмат көрсөтөт. Учурда ишкана продукциянын 3 түрүн чыгарат: бензин, дизель майы, мазут.`,
        en: `Closed Joint Stock Company "Kyrgyz Petroleum Company" (CJSC "KPK" or the Company) is one of the leading producers of petroleum products in Kyrgyzstan, 100% of the company's shares belong to SE JSC "Kyrgyzneftegaz". The company is engaged in the production of petroleum products from oil and other raw materials and provides processing services. At the moment, the company produces 3 types of products: gasoline, diesel fuel, fuel oil.`
    },
    companyName: {
        ru: 'Кыргыз Петролеум Компани',
        es: 'Кыргыз Петролеум Компани',
        en: 'Kyrgyz Petroleum Company'
    },
    history: {
        ru: 'История',
        es: 'Тарых',
        en: 'History'
    },
    productionTitle: {
        ru: 'Центр управления производством',
        es: 'Башкаруу өндүрүш борбору',
        en: 'Center management production'
    },
    productPrices: {
        ru: 'Цены на продукцию',
        es: 'Продукция баалары',
        en: 'Product prices'
    },
    payment: {
        ru: 'Форма оплаты',
        es: 'Төлөм формасы',
        en: 'Payment form'
    },
    taxes: {
        ru: 'Налоги',
        es: 'Салыктар',
        en: 'Taxes'
    },
    ai_80: {
        ru: 'Бензин АИ-80',
        es: 'Бензин АИ-80',
        en: 'Gasoline AI-80'
    },
    diesel: {
        ru: 'Дизельное топливо марки Л-0,2-40',
        es: 'Дизель майы L-0,2-40',
        en: 'Diesel fuel grade L-0.2-40'
    },
    mazmut: {
        ru: 'Мазмут М-100',
        es: 'Мазмут М-100',
        en: 'Mazmut M-100'
    },
    more: {
        ru: 'Узнать подробнее',
        es: 'Кененирээк маалымат',
        en: 'More'
    },
    allNews: {
        ru: 'Все новости',
        es: 'Бардык жаңылыктар',
        en: 'All news'
    },
    historyTitle1: {
        ru: 'Договоренность о создании совместного предприятия',
        es: 'Биргелешкен ишкана түзүү боюнча макулдашуу',
        en: 'Arrangement to establish a joint venture'
    },
    historyText1: {
        ru: 'Между открытым акционерным обществом «Кыргызнефтегаз» и акционерным обществом с ограниченной ответственностью «ПетроКыргызстан» (Джерси) была достигнута договоренность о создании совместного предприятия ЗАО «Кыргыз Петролеум Компани».',
        es: '«Кыргызнефтегаз» ачык акционердик коому менен «ПетроКыргызстан» (Джерси) жоопкерчилиги чектелген коомунун ортосунда «Кыргыз Петролеум Компани» ЖАК биргелешкен ишканасын түзүү боюнча келишим түзүлдү.',
        en: 'An agreement was reached between the open joint stock company "Kyrgyzneftegaz" and the limited liability company "PetroKyrgyzstan" (Jersey) to establish a joint venture CJSC "Kyrgyz Petroleum Company".'
    },
    historyTitle2: {
        ru: 'Торжественное открытие',
        es: 'Салтанаттуу ачылыш',
        en: 'Grand opening'
    },
    historyText2: {
        ru: 'Строительство НПЗ в городе Жалал-Абад началось в январе 1996 года, и было завершено в установленные сроки - в сентябре 1996 года. Нефтеперерабатывающий завод ЗАО «КПК» был торжественно открыт 6 октября 1996 года.',
        es: 'Жалал-Абад шаарында нефтини кайра иштетүүчү заводдун курулушу 1996-жылдын январында башталып, өз мөөнөтүндө – 1996-жылдын сентябрь айында бүткөрүлгөн. КПК ЖАК нефтини кайра иштетүүчү заводу 1996-жылдын 6-октябрында салтанаттуу түрдө ачылган.',
        en: 'The construction of an oil refinery in the city of Jalal-Abad began in January 1996 and was completed on time - in September 1996. The refinery of CJSC KPC was solemnly opened on October 6, 1996.'
    },
    historyTitle3: {
        ru: 'Технические усовершенствования',
        es: 'Техникалык жакшыртуулар',
        en: 'Technical improvements'
    },
    historyText3: {
        ru: 'Новые технические усовершенствования на НПЗ были проведены в 1998-2001 годах для увеличения октанового числа производимого бензина.',
        es: '1998-2001-жылдары өндүрүлгөн бензиндин октандык көрсөткүчүн жогорулатуу үчүн заводдо жаңы техникалык өркүндөтүүлөр жүргүзүлгөн.',
        en: 'New technical improvements at the refinery were carried out in 1998-2001 to increase the octane rating of the gasoline produced.'
    },
    historyTitle4: {
        ru: 'Строительство Первого Железнодорожного Погрузочного Рукава.',
        es: 'Биринчи темир жол жүктөөчү колонкасынын курулушу.',
        en: 'Construction of the First Railway Loading Arm.'
    },
    historyText4: {
        ru: 'Строительство Первого Железнодорожного Погрузочного Рукава.',
        es: 'Биринчи темир жол жүктөөчү колонкасынын курулушу.',
        en: 'Construction of the First Railway Loading Arm.'
    },
    historyTitle5: {
        ru: 'Строительство Котельной НПЗ',
        es: 'Казан заводунун курулушу',
        en: 'Construction of the Boiler Refinery'
    },
    historyText5: {
        ru: 'Строительство Котельной НПЗ Паропроизводительностью 3 т/ч',
        es: 'Буунун кубаттуулугу 3 т/саат болгон нефтини кайра иштетүүчү завод үчүн котельныйдын курулушу',
        en: 'Construction of a Boiler House for a refinery with a steam capacity of 3 t/h'
    },
    historyTitle6: {
        ru: 'Строительство двух танкерных резервуаров',
        es: 'Эки танкердик резервуарды куруу',
        en: 'Construction of the Boiler Refinery'
    },
    historyText6: {
        ru: 'Строительство двух танкерных резервуаров (ТК 315 и ТК316), объемом 2000 куб. м. каждый (подрядчик КГСК)',
        es: 'Көлөмү 2000 кубометр эки танкердик цистерналарды (ТК 315 жана ТК316) куруу. м.ар бири (подрядчик КГСК)',
        en: 'Construction of two tanker tanks (TK 315 and TK316), with a volume of 2000 cubic meters. m. each (KGSK contractor)'
    },
    historyTitle7: {
        ru: 'Единственные акционеры',
        es: 'Жалгыз акционерлер',
        en: 'Sole Shareholders'
    },
    historyText7: {
        ru: 'В этот день были полностью оформлены все необходимые документы по покупке ОАО «Кыргызнефтегаз» 50% акций принадлежащих «Петро Кыргызстан ЛТД». Таким образом, ОАО «Кыргызнефтегаз» стал единственным акционером ЗАО «Кыргыз Петролеум Компани».',
        es: 'Бул күнү «Кыргызнефтегаз» ААК тарабынан «Петро Кыргызстан ЛТД» ЖЧКсына тиешелүү 50% акцияны сатып алуу боюнча бардык керектүү документтер бүткөрүлдү. Ошентип, «Кыргызнефтегаз» ААК «Кыргыз Петролеум Компани» ЖАКтын жалгыз акционери болуп калды.',
        en: 'On this day, all the necessary documents for the purchase of a 50% stake owned by Petro Kyrgyzstan LTD were completed by Kyrgyzneftegaz OJSC. Thus, Kyrgyzneftegaz OJSC became the sole shareholder of Kyrgyz Petroleum Company CJSC.'
    },
    historyTitle8: {
        ru: 'Реконструкция котельной НПЗ производительностью 3 т/ч',
        es: '3 т/саат кубаттуулуктагы нефтини кайра иштетүүчү заводдун отканасын реконструкциялоо',
        en: 'Reconstruction of a refinery boiler house with a capacity of 3 t/h'
    },
    historyText8: {
        ru: 'Реконструкция котельной НПЗ производительностью 3 т/ч',
        es: '3 т/саат кубаттуулуктагы нефтини кайра иштетүүчү заводдун отканасын реконструкциялоо',
        en: 'Reconstruction of a refinery boiler house with a capacity of 3 t/h'
    },
    historyTitle9: {
        ru: 'Реконструкция танкерного резервуара (ТК 400)',
        es: 'Танкер цистернасын реконструкциялоо (TC 400)',
        en: 'Reconstruction of the tanker tank (TC 400)'
    },
    historyText9: {
        ru: 'Реконструкция танкерного резервуара (ТК 400)',
        es: 'Танкер цистернасын реконструкциялоо (TC 400)',
        en: 'Reconstruction of the tanker tank (TC 400)'
    },
    historyTitle10: {
        ru: 'Строительство двух танкерных резервуаров',
        es: 'Эки танкердик резервуар куруу',
        en: 'Construction of two tanker tanks'
    },
    historyText10: {
        ru: 'Строительство двух танкерных резервуаров (ТК 317 и ТК 318), объемом 2000 куб. м. каждый',
        es: 'Көлөмү 2000 куб метр болгон эки цистерна (ТК 317 жана ТК 318) курулушу. м. ар бири',
        en: 'Construction of two tanker tanks (TK 317 and TK 318), with a volume of 2000 cubic meters. m. each'
    },
    historyTitle11: {
        ru: 'Строительство Автовесовой',
        es: 'Авто салмактын курулушу',
        en: 'Construction of Autoweight'
    },
    historyText11: {
        ru: 'Строительство Автовесовой (80 тонн)',
        es: 'Авто салмактын курулушу (80 тонна)',
        en: 'Construction of Autoweight (80 tons)'
    },
    historyTitle12: {
        ru: 'Ввод в эксплуатацию двух танкерных резервуаров',
        es: 'Эки танкердик цистерналарды ишке киргизүү',
        en: 'Commissioning of two tanker tanks'
    },
    historyText12: {
        ru: 'Ввод в эксплуатацию двух танкерных резервуаров (ТК 317 и ТК 318)',
        es: 'Эки танкердик цистерналарды ишке киргизүү (ТК 317 жана ТК 318)',
        en: 'Commissioning of two tanker tanks (TK 317 and TK 318)'
    },
    historyTitle13: {
        ru: 'Строительство Навеса над Автовесовой',
        es: 'Автовесовой үстүнөн чатыр куруу',
        en: 'CConstruction of a canopy over Avtovesovaya'
    },
    historyText13: {
        ru: 'Строительство Навеса над Автовесовой, благоустройство стоянки автоцистерн ЗАО «КПК»',
        es: 'Автовесоваяга навес куруу, «КПК» ЖАКтын танкерлеринин унаа токтотуучу жайын көрктөндүрүү',
        en: 'Construction of a canopy over Avtovesovaya, improvement of the tanker parking lot of CJSC KPK'
    },
    historyTitle14: {
        ru: 'Строительство Автовесовой',
        es: 'Авто салмактын курулушу',
        en: 'Construction of Autoweight'
    },
    historyText14: {
        ru: 'Строительство КПП №3',
        es: '№3 көзөмөл өткөрүү пунктунун курулушу',
        en: 'Construction of checkpoint №3'
    },
    historyText15: {
        ru: 'Истоки Компании уходят в далекий 1995 год. Между открытым акционерным обществом «Кыргызнефтегаз» и акционерным обществом с ограниченной ответственностью «ПетроКыргызстан» (Джерси) была достигнута договоренность о создании совместного предприятия ЗАО «Кыргыз Петролеум Компани». Доли акции между участниками данной сделки распределились 50/50. После подписания Инвестиционного соглашения с Правительством Кыргызской Республики в декабре 1995 года, иностранный инвестор обеспечил инвестиционные средства для финансирования обязательств по Инвестиционному соглашению, включая первоначальный вклад для строительства нефтеперерабатывающего завода (НПЗ) и разработки нефтяных месторождений. Строительство НПЗ в городе Жалал-Абад началось в январе 1996 года, и было завершено в установленные сроки — в сентябре 1996 года. Нефтеперерабатывающий завод ЗАО «КПК» был торжественно открыт 6 октября 1996 года.',
        es: 'Компаниянын келип чыгышы 1995-жылга барып такалат. «Кыргызнефтегаз» ачык акционердик коому менен «ПетроКыргызстан» (Джерси) жоопкерчилиги чектелген коомунун ортосунда «Кыргыз Петролеум Компани» ЖАК биргелешкен ишканасын түзүү боюнча келишим түзүлдү. Бул бүтүмдүн катышуучуларынын ортосунда үлүштөр 50/50 бөлүштүрүлгөн. 1995-жылдын декабрында Кыргыз Республикасынын Өкмөтү менен Инвестициялык макулдашууга кол коюлгандан кийин чет өлкөлүк инвестор Инвестициялык макулдашуу боюнча милдеттенмелерди каржылоо үчүн инвестициялык каражаттарды, анын ичинде мунай иштетүүчү заводду (ЖК) курууга жана өнүктүрүүгө алгачкы салымды берген. мунай кендеринин. Жалал-Абад шаарында нефтини кайра иштетүүчү заводдун курулушу 1996-жылдын январында башталып, өз мөөнөтүндө – 1996-жылдын сентябрь айында бүткөрүлгөн. КПК ЖАК нефтини кайра иштетүүчү заводу 1996-жылдын 6-октябрында салтанаттуу түрдө ачылган.',
        en: 'The origins of the Company go back to 1995. An agreement was reached between the open joint stock company "Kyrgyzneftegaz" and the limited liability company "PetroKyrgyzstan" (Jersey) to establish a joint venture CJSC "Kyrgyz Petroleum Company". Shares of shares between the participants of this transaction were distributed 50/50. Following the signing of the Investment Agreement with the Government of the Kyrgyz Republic in December 1995, the foreign investor provided investment funds to finance the obligations under the Investment Agreement, including an initial contribution for the construction of an oil refinery (OR) and the development of oil fields. The construction of an oil refinery in the city of Jalal-Abad began in January 1996 and was completed on time - in September 1996. The refinery of CJSC KPC was solemnly opened on October 6, 1996.'
    },
    historyText16: {
        ru: 'В июне 1996 года Компания начала разработку месторождений с использованием специального оборудования, необходимого для данной деятельности в Кыргызской Республике. Предварительная техническая оценка месторождений показала, что гидравлический разрыв нефтенесущих пластов является наиболее эффективным и выгодным методом улучшения нефтедобычи. Тестовая программа, включающая 21 нефтяную скважину, началась в октябре 1996 года. К концу 1996 года, инвестор полностью выполнил обязательства по вложению объема средств объема средств, предусмотренных как обязательство по документам Компании, и продолжал инвестировать в развитие НПЗ и месторождений.',
        es: '1996-жылдын июнь айында компания Кыргыз Республикасында бул иш үчүн зарыл болгон атайын жабдууларды колдонуу менен кендерди иштетүүнү баштаган. Кендерди алдын-ала техникалык баалоо мунайлуу катмарларды гидравлика-лык жардыруу мунай алууну жакшыртуунун эц эффективдуу жана рентабелдуу ыкмасы экендигин керсетту. 21 мунай скважинасын камтыган сыноо программасы 1996-жылдын октябрында башталган. 1996-жылдын акырына карата инвестор Компаниянын документтеринде милдеттенме катары каралган каражаттардын көлөмүндөгү каражаттардын көлөмүн инвестициялоо боюнча өз милдеттенмелерин толугу менен аткарып, мунайды кайра иштетүүчү заводдорду жана кендерди иштетүүгө инвестициялоону уланткан.',
        en: 'В июне 1996 года Компания начала разработку месторождений с использованием специального оборудования, необходимого для данной деятельности в Кыргызской Республике. Предварительная техническая оценка месторождений показала, что гидравлический разрыв нефтенесущих пластов является наиболее эффективным и выгодным методом улучшения нефтедобычи. Тестовая программа, включающая 21 нефтяную скважину, началась в октябре 1996 года. К концу 1996 года, инвестор полностью выполнил обязательства по вложению объема средств объема средств, предусмотренных как обязательство по документам Компании, и продолжал инвестировать в развитие НПЗ и месторождений.'
    },
    historyText17: {
        ru: 'В тоже время были установлены дополнительные резервуары и погрузочное оборудование для приспособления НПЗ к новым условиям. Новые технические усовершенствования на НПЗ были проведены в 1998-2001 годах для увеличения октанового числа производимого бензина. Это было вызвано увеличением количества иностранных современных машин, импортируемых в Кыргызстан. Июль 2010 – Май 2011 строительство Первого Железнодорожного Погрузочного Рукава.Ноябрь 2010 – Май 2011 строительство Котельной НПЗ Паропроизводительностью 3 т/ч Март 2011 – Ноябрь 2012 стоительство двух танкерных резервуаров (ТК 315 и ТК316), объемом 2000 куб. м. каждый (подрядчик КГСК)',
        es: 'Ошол эле учурда заводду жаңы шарттарга ылайыкташтыруу үчүн кошумча цистерналар жана жүктөөчү жабдуулар орнотулган. 1998-2001-жылдары өндүрүлгөн бензиндин октандык көрсөткүчүн жогорулатуу үчүн заводдо жаңы техникалык өркүндөтүүлөр жүргүзүлгөн. Буга Кыргызстанга алынып келинген чет элдик заманбап автоунаалардын көбөйүшү себеп болгон. 2010-жылдын июль – 2011-жылдын май айлары Биринчи темир жол жүктөөчү бөлүгүнүн курулушу 2010-жылдын ноябрь – 2011-жылдын май айлары Буу сыйымдуулугу 3 т/саат болгон нефтини кайра иштетүүчү заводдун отканасынын курулушу 2011-жылдын марты – 2012-жылдын ноябрь айы Эки танкер цистернасынын курулушу (ТК 315 жана ТК 316) , көлөмү 2000 метр куб. м.ар бири (KGSK подрядчы)',
        en: 'At the same time, additional tanks and loading equipment were installed to adapt the refinery to the new conditions. New technical improvements at the refinery were carried out in 1998-2001 to increase the octane rating of the gasoline produced. This was caused by an increase in the number of foreign modern cars imported to Kyrgyzstan. July 2010 – May 2011 construction of the First Railway Loading Arm. November 2010 – May 2011 construction of the Refinery Boiler House with a steam capacity of 3 t/h March 2011 – November 2012 construction of two tanker tanks (TK 315 and TK 316), with a volume of 2000 cubic meters. m. each (KGSK contractor)'
    },
    historyText18: {
        ru: 'В 2012 году Компания приостановила деятельность по добыче нефти из собственных скважин и сконцентрировала свое внимание на переработке нефти и других видов сырья.6 ноября 2012 года стало исторической датой для Компании. В этот день были полностью оформлены все необходимые документы по покупке ОАО «Кыргызнефтегаз» 50% акций принадлежащих «Петро Кыргызстан ЛТД». Таким образом, ОАО «Кыргызнефтегаз» стал единственным акционером ЗАО «Кыргыз Петролеум Компани».',
        es: '2012-жылы Компания өзүнүн скважиналарынан мунай өндүрүү ишин токтотуп, мунай жана чийки заттын башка түрлөрүн кайра иштетүүгө басым жасаган.2012-жылдын 6-ноябры Компания үчүн тарыхый дата болгон. Бул күнү «Кыргызнефтегаз» ААК тарабынан «Петро Кыргызстан ЛТД» ЖЧКсына тиешелүү 50% акцияны сатып алуу боюнча бардык керектүү документтер бүткөрүлдү. Ошентип, «Кыргызнефтегаз» ААК «Кыргыз Петролеум Компани» ЖАКтын жалгыз акционери болуп калды.',
        en: 'In 2012, the Company suspended its oil production activities from its own wells and focused on the processing of oil and other types of raw materials. November 6, 2012 was a historic date for the Company. On this day, all the necessary documents for the purchase of a 50% stake owned by Petro Kyrgyzstan LTD were completed by Kyrgyzneftegaz OJSC. Thus, Kyrgyzneftegaz OJSC became the sole shareholder of Kyrgyz Petroleum Company CJSC.'
    },
    historyText19: {
        ru: 'После приобретения ЗАО «Кыргыз Петролеум Компани», ОАО «Кыргызнефтегаз» стал единственным предприятием, которое имеет законченный цикл производства, начиная от геологоразведочных работ и добычи нефти и заканчивая производством и реализацией нефтепродуктов. Взамен иностранным специалистам, которые прекратили свою работу в Компании, пришли местные специалисты, имеющие достаточный набор знаний, умений и навыков. Сотрудниками предприятия в марте 2012 года создана «Первичная Профсоюзная организация», которая прошла регистрацию в органах юстиции КР в 2016г., и в настоящее время стала самостоятельной общественной профсоюзной организацией и входит в Ассоциацию профсоюзов ОАО «КНГ». Силами собственного Ремонтно Строительного Управления (РСУ) были спроектированны, построены и сданы в эксплуатацию',
        es: '«Кыргыз Петролеум Компани» ЖАКны сатып алгандан кийин «Кыргызнефтегаз» ААК мунай чалгындоо жана өндүрүүдөн баштап мунай продуктуларын өндүрүү жана сатууга чейинки толук өндүрүш циклине ээ болгон жалгыз компания болуп калды. Компанияда ишин токтоткон чет элдик адистердин ордун жетиштүү билими, жөндөмү жана жөндөмү бар жергиликтүү адистер ээледи. 2012-жылдын март айында ишкананын кызматкерлери тарабынан 2016-жылы Кыргыз Республикасынын юстиция органдарында каттоодон өткөн «Баштапкы профсоюз уюму» түзүлүп, учурда өз алдынча коомдук профсоюз уюмуна айланган жана «Башталгыч профсоюз уюму» ассоциациясынын мүчөсү болуп саналат. «КНГ» ААКнын профсоюздары. Биздин өзүбүздүн Ремонт-курулуш башкармасынын (РКУ) күчү менен төмөндөгүлөр долбоорлонуп, курулуп, пайдаланууга берилди',
        en: 'After the acquisition of CJSC "Kyrgyz Petroleum Company", OJSC "Kyrgyzneftegaz" became the only company that has a complete production cycle, from exploration and production of oil to the production and sale of petroleum products. The foreign specialists who stopped their work in the Company were replaced by local specialists with a sufficient set of knowledge, skills and abilities. In March 2012, the employees of the enterprise created the “Primary Trade Union Organization”, which was registered with the justice authorities of the Kyrgyz Republic in 2016, and has now become an independent public trade union organization and is a member of the Association of Trade Unions of OJSC “KNG”. By the forces of our own Repair and Construction Department (RCS), the following were designed, built and put into operation'
    },
    historyText20: {
        ru: 'Сентябрь 2013 – Сентябрь 2014 реконструкция котельной НПЗ производительностью 3 т/ч Август 2018 – Декабрь 2018 реконструкция танкерного резервуара (ТК 400) Август 2019 – Сентябрь 2020 строительство двух танкерных резервуаров (ТК 317 и ТК 318), объемом 2000 куб. м. каждый Январь 2019 – Апрель 2019 Строительство Автовесовой (80 тонн) Ноябрь 2021 ввод в эксплуатацию двух танкерных резервуаров (ТК 317 и ТК 318) Июнь 2021 – Июль 2021 Строительство Навеса над Автовесовой, благоустройство стоянки автоцистерн ЗАО «КПК»',
        es: 'Сентябрь 2013 – сентябрь 2014 Заводдун отканасын реконструкциялоо кубаттуулугу 3 т/саат 2018-жылдын август – декабрь 2018 Цистернаны реконструкциялоо (ТК 400) Август 2019 – сентябрь 2020 Эки танкер цистернасын куруу (ТК 317 жана ТК) , көлөмү 2000 метр куб ар бир январь 2019 – апрель 2019 Автовесовая курулушу (80 тонна) 2021-жылдын ноябрь айы эки танкердик цистерналарды ишке киргизүү (ТК 317 жана ТК 318) июнь 2021 – июль 2021',
        en: 'September 2013 – September 2014 Reconstruction of a refinery boiler house with a capacity of 3 t/h August 2018 – December 2018 Reconstruction of a tanker tank (TK 400) August 2019 – September 2020 Construction of two tanker tanks (TK 317 and TK 318), with a volume of 2000 cubic meters each January 2019 – April 2019 Construction of Avtovesovaya (80 tons) November 2021 commissioning of two tanker tanks (TK 317 and TK 318) June 2021 – July 2021'
    },
    historyText21: {
        ru: 'Сентябрь 2021 – Ноябрь 2021 Строительство КПП №3 Проводятся меры по модернизации производства. Перед Компанией ставятся смелые задачи и разносторонний комплекс мер по развитию предприятия. Компания и в дальнейшем собирается прилагать все усилия направленные на эффективное производство продукции и динамичное развитие предприятия с учетом современных требований и изменений в нефтеперерабатывающей отрасли, повышение качества и тесное сотрудничество с партнерами.',
        es: '2021-жылдын сентябрь – 2021-жылдын ноябрь айы №3 өткөрүү пунктунун курулушу Өндүрүштү модернизациялоо боюнча иш-чаралар жүргүзүлүүдө. Компаниянын алдында чоң милдеттер жана ишкананы өнүктүрүү боюнча чаралардын ар тараптуу комплекси турат. Компания заманбап талаптарды жана мунай иштетүү тармагындагы өзгөрүүлөрдү, сапатты жогорулатууну жана өнөктөштөр менен тыгыз кызматташууну эске алуу менен натыйжалуу өндүрүшкө жана ишкананын динамикалык өнүгүүсүнө багытталган бардык күч-аракетин мындан ары да жумшай бермекчи.',
        en: 'September 2021 – November 2021 Construction of checkpoint No. 3 Measures are being taken to modernize production. The Company is faced with ambitious tasks and a versatile set of measures for the development of the enterprise. The company is going to continue to make every effort aimed at efficient production and dynamic development of the enterprise, taking into account modern requirements and changes in the oil refining industry, improving quality and close cooperation with partners.'
    },
    gallery: {
        ru: 'Галерея',
        es: 'Галерея',
        en: 'Gallery'
    },
    leaderTitle1: {
        ru: 'Матисаков Байгазы Абдигапарович',
        es: 'Матисаков Байгазы Абдигапарович',
        en: 'Matisakov Baigazy Abdigaparovich'
    },
    leaderText1: {
        ru: 'Президент ЗАО "Кыргыз Петролеум Компани"',
        es: '«Кыргыз Петролеум Компани» ЖАКтын президенти',
        en: 'President of CJSC "Kyrgyz Petroleum Company"'
    },
    leaderTitle2: {
        ru: 'Каримов Азамат Абдукадырович',
        es: 'Каримов Азамат Абдукадырович',
        en: 'Matisakov Baigazy Abdigaparovich'
    },
    leaderText2: {
        ru: 'Управляющий нефтеперерабатывающего завода',
        es: 'Нефтини кайра иштетүүчү заводдун жетекчиси',
        en: 'Oil refinery manager'
    },
    leaderTitle3: {
        ru: 'Энназаров Эрмек Таджибаевич',
        es: 'Энназаров Эрмек Таджибаевич',
        en: 'Ennazarov Ermek Tadjibayevich'
    },
    leaderText3: {
        ru: 'Начальник отдела материально-технического обеспечения и закупок',
        es: 'материалдык-техникалык жабдуу жана сатып алуу бөлүмүнүн начальниги',
        en: 'Head of Logistics and Procurement Department'
    },
    prodactionText: {
        ru: 'Нефтеперерабатывающий завод состоит из взаимосвязанных установок. Управлять ими по отдельности сложно и неэффективно. Поэтому на НПЗ ЗАО «КПК» всё управление процессами сосредоточено в одном месте, а автоматика повышает эффективность контроля. Любая установка — это комплекс оборудования. На разных её частях установлены датчики, постоянно собирающие данные об определённых параметрах. Полученные с датчиков данные поступают в режиме реального времени операторам Центра управления производством. Таким образом специалисты удалённо контролируют и при необходимости корректируют работу установки. При отклонении от установленных параметров срабатывает световая и звуковая сигнализация. Датчики передают информацию не только о производительности установок, но и экологические параметры.',
        es: 'Нефтини кайра иштетүүчү завод бири-бири менен байланышкан агрегаттардан турат. Аларды өзүнчө башкаруу кыйын жана натыйжасыз. Ошондуктан КПК ЗАОнун нефтини кайра иштетүүчү заводунда бардык процессти башкаруу бир жерге топтолгон, автоматташтыруу башкаруунун эффективдүүлүгүн жогорулатат. Ар кандай орнотуу жабдуулардын жыйындысы болуп саналат. Сенсорлор анын ар кандай бөлүктөрүнө орнотулуп, белгилүү бир параметрлер боюнча маалыматтарды дайыма чогултат. Сенсорлордон алынган маалыматтар реалдуу убакыт режиминде өндүрүштү башкаруу борборунун операторлоруна жөнөтүлөт. Ошентип, адистер алыстан көзөмөлдөп, керек болсо орнотуунун иштешин оңдошот. Белгиленген параметрлерден четтөө болгон учурда жарык жана үн сигнализациясы ишке киргизилет. Сенсорлор орнотуулардын иштеши жөнүндө гана эмес, ошондой эле айлана-чөйрөнүн параметрлери жөнүндө маалымат берет.',
        en: 'An oil refinery is made up of interconnected units. Managing them separately is difficult and inefficient. Therefore, at the refinery of ZAO KPC, all process control is concentrated in one place, and automation increases the efficiency of control. Any installation is a set of equipment. Sensors are installed on its different parts, constantly collecting data on certain parameters. The data received from the sensors is sent in real time to the operators of the Production Control Center. Thus, specialists remotely control and, if necessary, correct the operation of the installation. In case of deviation from the set parameters, a light and sound alarm is triggered. Sensors transmit information not only about the performance of installations, but also environmental parameters.'
    },
    certificates: {
        ru: 'Аттестаты',
        es: 'Аттестаттар',
        en: 'Certificates'
    },
    laboratoryTitle1:{
        ru: 'Главная',
        es: 'Башкысы',
        en: 'Main'
    },
    laboratoryText1:{
        ru: 'Испытательная лаборатория входит в состав Закрытого Акционерного Общества «Кыргыз Петролеум Компани». Испытательная лаборатория размещается в специализированных помещениях. Управление лабораторией осуществляется только на основной территории ЗАО «КПК».',
        es: 'Сыноо лабораториясы «Кыргыз Петролеум Компани» жабык акционердик коомунун курамына кирет. Сыноо лабораториясы атайын жайларда жайгашкан. Лаборатория «КПК» ЖАКтын негизги аймагында гана башкарылат.',
        en: 'The testing laboratory is part of the Closed Joint Stock Company "Kyrgyz Petroleum Company". The testing laboratory is located in specialized premises. The laboratory is managed only in the main territory of CJSC "KPK".'
    },
    laboratoryTitle2:{
        ru: 'Про аттестат',
        es: 'Аттестат жөнүндө',
        en: 'About the certificate'
    },
    laboratoryText2:{
        ru: 'Аттестат аккредитации №KG 417/КЦА.ИЛ.042 и №KG 417/КЦА.ОК.069 и данная аккредитация демонстрирует техническую компетентность на проведения испытание и контроль согласно Области Аккредитации, действующую систему менеджмента качества.',
        es: '№KG 417/KTSA.IL.042 жана № KG 417/KTSA.OK.069 аккредитациялык күбөлүк жана бул аккредитация Аккредитациялоо чөйрөсүнө, учурдагы сапат менеджмент системасына ылайык тестирлөө жана контролдоо жүргүзүүгө техникалык компетенттүүлүгүн көрсөтөт.',
        en: 'Accreditation certificate No. KG 417/KTSA.IL.042 and No. KG 417/KTSA.OK.069 and this accreditation demonstrates the technical competence to carry out testing and control according to the Accreditation Scope, the current quality management system.'
    },
    laboratoryTitle3:{
        ru: 'Качество',
        es: 'Сапат',
        en: 'Quality'
    },
    laboratoryText3:{
        ru: 'Руководство Компании обеспечивает наличие ресурсов посредством материально-технического снабжения, обучения, а также создания соответствующей инфраструктуры и производственной среды. Руководство испытательной лаборатории гарантирует высокий уровень качества, объективности и достоверности испытаний в признанной при аккредитации области деятельности.',
        es: 'Компаниянын жетекчилиги сатып алуулар, окутуу жана тиешелүү инфраструктураны жана иш чөйрөсүн түзүү аркылуу ресурстардын жеткиликтүүлүгүн камсыздайт. Сыноо лабораториясынын жетекчилиги аккредитациялоодо таанылган иш чөйрөсүндөгү сыноолордун сапатынын, объективдүүлүгүнүн жана ишенимдүүлүгүнүн жогорку деңгээлине кепилдик берет.',
        en: `The Company's management ensures the availability of resources through procurement, training, and the creation of an appropriate infrastructure and work environment. The management of the testing laboratory guarantees a high level of quality, objectivity and reliability of tests in the field of activity recognized during accreditation.`
    },
    laboratoryTitle4:{
        ru: 'Аккредитация',
        es: 'Аккредитация',
        en: 'Accreditation'
    },
    laboratoryText4:{
        ru: 'Испытательная лаборатория аккредитована в соответствии с международным стандартом ГОСТ ISO/IEC 17025-2019 и аккредитован в качестве органа контроля типа «В» в соответствии с международным стандартом ISO/IEC 17020-2013 и участвует в контроле технологического процесса.',
        es: 'Сыноо лабораториясы эл аралык ГОСТ ISO/IEC 17025-2019 стандартына ылайык аккредиттелген жана ISO/IEC 17020-2013 эл аралык стандартына ылайык “В” типтеги контролдоочу орган катары аккредиттелген жана технологиялык процессти контролдоого катышат.',
        en: 'The testing laboratory is accredited in accordance with the international standard GOST ISO / IEC 17025-2019 and accredited as a type “B” control body in accordance with the international standard ISO / IEC 17020-2013 and participates in the control of the technological process.'
    },
    laboratoryTitle5:{
        ru: 'Обязанности',
        es: 'Жоопкерчиликтер',
        en: 'Responsibilities'
    },
    laboratoryText5:{
        ru: 'Руководящий и технический персонал имеют полномочия, и обязанности согласно разработанным должностным инструкциям и трудовым договором. Персонал лаборатории имеет ресурсы для внедрения, поддержания, улучшения системы менеджмента в лаборатории.',
        es: 'Жетекчилик жана техникалык персонал иштелип чыккан кызматтык нускамаларга жана эмгек келишимине ылайык ыйгарым укуктарга жана милдеттерге ээ. Лабораториянын кызматкерлери лабораторияда башкаруу системасын киргизүү, колдоо жана жакшыртуу үчүн ресурстарга ээ.',
        en: 'The management and technical staff have powers and responsibilities in accordance with the developed job descriptions and the employment contract. The laboratory staff has the resources to implement, maintain, improve the management system in the laboratory.'
    },
    laboratoryTitle6:{
        ru: 'Персонал',
        es: 'Кызматкерлер',
        en: 'Staff'
    },
    laboratoryText6:{
        ru: 'Лаборатория располагает достаточным числом руководящего и технического персонала, имеющих соответствующее образование и квалификацию, обеспечивающих проведение испытаний продукции в соответствии с областью аккредитации.',
        es: 'Лабораторияда аккредитация чөйрөсүнө ылайык продукцияны сыноону камсыз кылуу үчүн тийиштүү билими жана квалификациясы бар жетекчи жана техникалык персонал жетиштүү санда бар.',
        en: 'The laboratory has a sufficient number of managerial and technical personnel with the appropriate education and qualifications to ensure the testing of products in accordance with the scope of accreditation.'
    },
    laboratoryTitle7:{
        ru: 'Деятельность',
        es: 'Ишмердүүлүк',
        en: 'Activity'
    },
    laboratoryText7:{
        ru: 'Основной деятельностью испытательной лаборатории является проведение испытаний поступающего сырья и производимых нефтеперерабатывающим заводом нефтепродуктов.',
        es: 'Сыноо лабораториясынын ишинин негизги багыты болуп нефтини кайра иштетүүчү завод чыгарган сырьёлорду жана мунай продуктуларын текшерүү саналат.',
        en: `The main activity of the testing laboratory is testing of incoming raw materials and oil products produced by the refinery.`
    },
    laboratoryTitle8:{
        ru: 'Документация',
        es: 'Документация',
        en: 'Documentation'
    },
    laboratoryText8:{
        ru: 'Для обеспечения деятельности ИЛ документально оформлены: Положение, цель, политика, процедуры, паспорт, должностные и производственные инструкции и др. документы в объеме необходимой системы менеджмента.',
        es: 'ИЛдин ишин камсыз кылуу үчүн төмөнкүлөр документтештирилет: Жобо, максат, саясат, жол-жоболор, паспорт, кызматтык жана өндүрүштүк нускамалар жана башка документтер зарыл болгон башкаруу тутумунун деңгээлинде.',
        en: 'To ensure the activities of the IL, the following are documented: Regulations, purpose, policies, procedures, passport, job and production instructions, and other documents to the extent of the necessary management system.'
    },
};

export const text = (state = initState, action) => {
    switch (action.type) {


        default:
            return state
    }
};
