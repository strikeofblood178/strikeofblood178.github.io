import { useState } from "react"
import { Controls } from "../../components/Controls/Controls";
import OrderInfo from "../../components/Travels/OrderInfo/OrderInfo";
import Logout from "../../components/Travels/Logout/Logout";
import Travels from "../../components/Travels/Travels";
import Modal from "../../components/UI/Modal/Modal";
import styles from './SliderBuilder.module.css';
import Window from "../../components/Travels/Window/Window";
import Example from "../../components/Travels/Example/Example";
import WindowTwo from "../../components/Travels/WindowTwo/WindowTwo";
import IconSelect from "../../components/IconSelect/IconSelect";
import Certificate from "../../components/Certificate/Certificate";
import Footer from "../../components/Footer/Footer";
import SliderGo from "../../components/SliderGo/SliderGo";
import SliderToo from "../../components/SliderToo/SliderToo";
import Acordion from "../../components/Acordion/Acordion";
import Header from "../../components/Header/Header";



const SliderBuilder = () => {
    const [slider, setSlider] = useState({

 // firstSlider: {img: "firstSlider.png", name: "Конная прогулка", count: 990, button: "Заказать", text: "Подробнее" },
        // twoSlider: {img: "twoSlider.png", name: "Полет на мотопараплане", count: 3+" "+000 , button: "Заказать", text: "Подробнее" },
        // threeSlider: {img: "threeSlider.png", name: "Полет в аэротрубе", count: "от"+" "+1+" "+800, button: "Заказать", text: "Подробнее" },
        // fourSlider: {img: "fourSlider.png", name: "Вечер в куполе", count: 3+" "+000, button: "Заказать", text: "Подробнее" },
        // fiveSlider: {img: "fiveSlider.png", name: "Прогулка на яхте «Чайка»", count: "от"+" "+3+" "+500, button: "Заказать", text: "Подробнее" },
        // sixSlider: {img: "sixSlider.png", name: "Велопрогулка с пикником", count: 2+" "+000, button: "Заказать", text: "Подробнее" },
        // sevenSlider: {img: "sevenSlider.png", name: "Драйв на квадроциклах", count: "от"+" "+1+" "+800, button: "Заказать", text: "Подробнее" },
        // eightSlider: {img: "eightSlider.png", name: "Запись песни в студии", count: 5+" "+000, button: "Заказать", text: "Подробнее" },
        // nineSlider: {img: "nineSlider.png", name: "Поездка на болотоходах", count: 3+" "+500, button: "Заказать", text: "Подробнее" },
        // tenSlider: {img: "tenSlider.png", name: "Игра в виртуальной реальности", count: 600, button: "Заказать", text: "Подробнее" },
        // elevenSlider: {img: "elevenSlider.png", name: "Романтический пикник", count: 2+" "+500, button: "Заказать", text: "Подробнее" },

        firstSlider: {name: "Конная прогулка", count: 990, button: "Заказать", text: "Подробнее", ot: "от" },
        twoSlider: {name: "Полет на мотопараплане", count: 3000 , button: "Заказать", text: "Подробнее" },
        threeSlider: {name: "Полет в аэротрубе", count: 1800, button: "Заказать", text: "Подробнее", ot: "от", stock: "Акция", stoking: 10 },
        fourSlider: {name: "Вечер в куполе", count: 3000, button: "Заказать", text: "Подробнее" },
        fiveSlider: {name: "Прогулка на яхте «Чайка»", count: 3500, button: "Заказать", text: "Подробнее", ot: "от", stock: "Акция", stoking: 10 },
        sixSlider: {name: "Велопрогулка с пикником", count: 2000, button: "Заказать", text: "Подробнее" },
        sevenSlider: {name: "Драйв на квадроциклах", count: 1800, button: "Заказать", text: "Подробнее", ot: "от", stock: "Акция", stoking: 10 },
        eightSlider: {name: "Запись песни в студии", count: 5000, button: "Заказать", text: "Подробнее" },
        nineSlider: {name: "Поездка на болотоходах", count: 3500, button: "Заказать", text: "Подробнее" },
        tenSlider: {name: "Игра в виртуальной реальности", count: 600, button: "Заказать", text: "Подробнее" },
        elevenSlider: {name: "Романтический пикник", count: 2500, button: "Заказать", text: "Подробнее", stock: "Акция", stoking: 10 },
    });


    // стейт для слайдера

    const [go, setGo] = useState({
             twoSlider: {name: "Полет на мотопараплане", count: 3000 , button: "Заказать впечатление", img: "Rectangle" },
             fourSlider: {name: "Вечер в куполе", count: 3000, button: "Заказать впечатление", img: "Rectangle2" },
             fiveSlider: {name: "Прогулка на яхте «Чайка»", count: 3500, button: "Заказать впечатление", img: "Rectangle1", ot: "от" },
         });




    // второй большой устейт

    const [mod, setMod] = useState({
             firstSlider: {
             name: "Конная прогулка", 
             count: 990, 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
             ot: "от",
             select: 1,
             cancel: 1,
             option: "30 мин",
             option1: "1 час",
             option2: "1,5 часа",
             context_text:  "Конные прогулки подходят как для взрослых, так и для детей от 3 лет.",
            //  context_copy: "Уютный вечер - 3 000 рублей",
             context_li: "Для взрослых — гнедые рысаки, выдерживающие до 90 кг",
             context_li1: "Для детей — милые пони, которые вызывают восторг у малышей",
             context_ul: 1,
             price_text: 1,
             price_context: "Наш инструктор Анастасия познакомит вас с лошадьми, подробно расскажет и покажет особенности общения с этими животными, проведет короткий инструктаж и поможет сесть верхом. ",
             price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
             price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
             context_block: 1,
             block_copy: "Варианты прогулок:",
            //  price_ul: 1,
            //  price_li: "Продолжительность — 2 часа",
            buttom_text: 1,
            buttom_p: "Стандартная — 30 минут - 990 рублей",
            buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            buttom_p4: "Локация - ипподром за Парком Победы",
            context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image: 655,
            image1: 656,
            image2: 657,
            image3: 658,
            },






             twoSlider: { 
              name: "Полёт на мотопараплане", 
              count: 3000, 
              button: "Заказать впечатление", 
              text: "Подробнее о впечатлении: ",
              // ot: "от",
              // select: 1,
              // option: "30 мин",
              // option1: "1 час",
              // option2: "1,5 часа",
              context_text:  "Людям всегда было свойственно мечтать о небе, стремиться к простору и горизонтам",
              context_text1:  "Мотопараплан позволит исполнить эту мечту и посмотреть на мир с высоты птичьего полёта. Все заботы и неприятности останутся на земле, а вы будете ловить облака, дышать полной грудью и наслаждаться свободой 🔥",
             //  context_copy: "Уютный вечер - 3 000 рублей",
              context_li: "Продолжительность полёта - 10 мин ",
              context_li1: "Высота полета — 250 м",
              context_li2: "Скорость полета — 60 км/ч",
              context_li3: "Короткий инструктаж по технике безопасности",
              context_li4: "Защитный шлем со связью с инструктором",
              context_li5: "Возраст — от 6 лет",

              cancel: 1,
              context_ul: 1,
              price_text: 1,
              price_context: "Полеты проходят совсем рядом с городом — около с. Архангельская Слобода ",
              price_context1: "Мотопараплан — самый безопасный вид летательного аппарата. Особая конструкция парашюта позволяет сделать взлет и приземление плавными, а управление полетом легким и безопасным.",
              // price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
              // price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
              // context_block: 1,
              // block_copy: "Варианты прогулок:",
              // price_ul: 1,
              // price_li: "Классический на земле",
              // price_li2: "Столик на двоих",


            //  buttom_text: 1,
            //  buttom_p: "Данное впечатление с элементом квеста подойдет для пар, которые любят активно проводить время, хотят разнообразить свои будни и отвлечься от быта, а также классный способ необычно отпраздновать годовщину свадьбы.",
            //  buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            //  buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            //  buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            //  buttom_p4: "Локация - ипподром за Парком Победы",
            //  context_bottom: 1,
             // block_bottom: "День рождения - 8 000 рублей",
             // price_roster: 1,
             // roster_li: "Продолжительность — 2 часа"
             image:  695,
             image1: 696,
             image2: 697,
             image3: 698,
             },
             
             threeSlider: {
              name: "Полет в аэротрубе", 
             count:  1800, 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
             ot: "от",
             select: 1,
             option: "3 минуты",
             option1: "6 минут",
             option2: "10 минут",
             context_text:  "Аэротруба – это тренажер, имитирующий полёт в свободном падении. В ней человек испытывает примерно те же эмоции, что и от прыжка с парашютом. ",
             context_text1:  "Только в среднем полет в небе длится 60 секунд, а в аэротрубе сможете летать от 3 минут. То есть вы получите тот же восторг, как от прыжка с парашютом, помноженный на три, и при этом абсолютно безопасно.",
             context_text2:  "Вам выдадут комбинезон и шлем для полёта.",
             context_text3:  "Специальные навыки не требуются – в течение всего полета рядом с вами будет находиться надежный инструктор.",
             context_text4:  "Перед полетом вы пройдете специальную подготовку – инструктор объяснит основы движения в воздухе и проинформирует о технике безопасности. ",
             context_text5:  "Локация - ул. Портовая 25 (перед зданием речного вокзала)",
            //  context_copy: "Уютный вечер - 3 000 рублей",
            //  context_li: "Продолжительность — 2 часа",
            //  context_li1: "Уютный, стильно декорированный купол",
            //  context_li2: "Bluetooth-колонка, через которую вы сможете поставить любимую музыку",
            //  context_li3: "Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время",
            //  context_li4: "Вкусные и сытные закуски",
            //  context_li5: "Ароматный чай",
            //  context_ul: 1,
            //  price_text: 1,
            //  price_context: "Наш инструктор Анастасия познакомит вас с лошадьми, подробно расскажет и покажет особенности общения с этими животными, проведет короткий инструктаж и поможет сесть верхом. ",
            //  price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
            //  price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
            //  context_block: 1,
            //  block_copy: "Романтическое свидание - 4 500 рублей",
            //  price_ul: 1,
            //  price_li: "Продолжительность — 2 часа",
            //  price_li1: "Уютный, стильно декорированный купол",
            //  price_li2: "Bluetooth-колонка, через которую вы сможете поставить любимую музыку",
            //  price_li3: "Лепестки роз для романтичной атмосферы",
            //  price_li4: "Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время",
            //  price_li5: "Сытный ужин для двоих",
            //  price_li6: "Сладкий десерт",
            //  price_li7: "Ароматный чай",

            // buttom_text: 1,
            // buttom_p: "Стандартная — 30 минут - 990 рублей",
            // buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            // buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            // buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            // buttom_p4: "Локация - ипподром за Парком Победы",
            // context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image:  645,
            image1: 646,
            image2: 647,
            image3: 648,
              },

             fourSlider: {
             name: "Вечер в куполе", 
             count:  3000 , 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
             ot: "от",
             select: 1,
             option: "На двоих",
             option1: "До 6 чел.",
            //  option2: "1,5 часа",
             context_text:  "Уютный вечер под открытым небом в любое время года — это абсолютно реально!",
             context_text1:  "В обогреваемом прозрачном куполе на крыше в самом центре города можно и любоваться закатом, и отгадывать созвездия, и наслаждаться обществом друг друга.",
             context_text2:  "Вас ждут мягкие диваны, любимая музыка, красивые огоньки, стильный декор. И, конечно же, вкусные угощения 😏 ",
             context_text3:  "Купола находятся в самом центре города на улице. Крымова",
             context_copy: "Уютный вечер - 3 000 рублей",
             context_li: "Продолжительность — 2 часа",
             context_li1: "Уютный, стильно декорированный купол",
             context_li2: "Bluetooth-колонка, через которую вы сможете поставить любимую музыку",
             context_li3: "Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время",
             context_li4: "Вкусные и сытные закуски",
             context_li5: "Ароматный чай",
             context_ul: 1,
            //  price_text: 1,
            //  price_context: "Наш инструктор Анастасия познакомит вас с лошадьми, подробно расскажет и покажет особенности общения с этими животными, проведет короткий инструктаж и поможет сесть верхом. ",
            //  price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
            //  price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
             context_block: 1,
             block_copy: "Романтическое свидание - 4 500 рублей",
             price_ul: 1,
             cancel: 1,
             price_li: "Продолжительность — 2 часа",
             price_li1: "Уютный, стильно декорированный купол",
             price_li2: "Bluetooth-колонка, через которую вы сможете поставить любимую музыку",
             price_li3: "Лепестки роз для романтичной атмосферы",
             price_li4: "Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время",
             price_li5: "Сытный ужин для двоих",
             price_li6: "Сладкий десерт",
             price_li7: "Ароматный чай",

            // buttom_text: 1,
            // buttom_p: "Стандартная — 30 минут - 990 рублей",
            // buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            // buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            // buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            // buttom_p4: "Локация - ипподром за Парком Победы",
            // context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image:  665,
            image1: 666,
            image2: 667,
            image3: 668,
             },

             fiveSlider: {
             name: "Прогулка на яхте «Чайка»", 
             count: 3500, 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
             ot: "от",
             select: 1,
             option: "1 час",
             option1: "2 часа",
             option2: "3 час",
             context_text:  "Прогулка на комфортабельной яхте 'Чайка' ",
             context_text1:  "Теплое солнце, шум волн, крик чаек и мерное покачивание яхты — вам захочется, чтобы эти мгновения продлились дольше!  ",
             context_copy: "Стоимость:",

            //  cancel: 1,

            //  context_li: "Для взрослых — гнедые рысаки, выдерживающие до 90 кг",
            //  context_li1: "Для детей — милые пони, которые вызывают восторг у малышей",
            //  context_ul: 1,
             price_text: 1,
             price_context: "Прогулка вдоль побережья (1 час) — 3 500 рублей",
             price_context1: "Отдых на яхте посреди Волги (2 часа) — 6 500 рублей",
             price_context2: "Путешествие в сторону Пальцинского острова (3 часа) — 9 000 рублей",
             context_block: 1,
            //  block_copy: "Варианты прогулок:",
             price_ul: 1,
             price_li: "Вместимость — до 5 человек",
             price_li1: "Допустимый возраст — от 7 лет",
             price_li2: "Точка старта — Речной Порт",
             price_li3: "С собой можно взять угощение и напитки",

            // buttom_text: 1,
            // buttom_p: "Стандартная — 30 минут - 990 рублей",
            // buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            // buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            // buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            // buttom_p4: "Локация - ипподром за Парком Победы",
            // context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image:  635,
            image1: 636,
            image2: 637,
            image3: 638,
             },
             
             sixSlider: {
              name: "Велопрогулка с пикником", 
              count: 3000, 
              button: "Заказать впечатление", 
              text: "Подробнее о впечатлении: ",
              // ot: "от",
              // select: 1,
              // option: "30 мин",
              // option1: "1 час",
              // option2: "1,5 часа",
              context_text:  "Что может быть романтичнее, чем прокатиться вдвоем по городу на велосипедах, любоваться прекрасным видом на Волгу, а затем отдохнуть и перекусить в уединенном месте на пикнике? 😍",
             //  context_copy: "Уютный вечер - 3 000 рублей",
              context_li: "Общая продолжительность — 2 часа (1.5 часа дорога на велосипедах,30-40 мин пикник)",
              context_li1: "Старт из центра города",
              context_li2: "Подробная карта маршрута",
              context_li3: "2 синих, французских велосипеда",
              context_li4: "Романтический пикник с угощением",

              cancel: 1,
              context_ul: 1,
              price_text: 1,
              price_context: "Возможны 2 варианта пикника:",
              // price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
              // price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
              context_block: 1,
              // block_copy: "Варианты прогулок:",
              price_ul: 1,
              price_li: "Классический на земле",
              price_li2: "Столик на двоих",


             buttom_text: 1,
             buttom_p: "Данное впечатление с элементом квеста подойдет для пар, которые любят активно проводить время, хотят разнообразить свои будни и отвлечься от быта, а также классный способ необычно отпраздновать годовщину свадьбы.",
            //  buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            //  buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            //  buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            //  buttom_p4: "Локация - ипподром за Парком Победы",
            //  context_bottom: 1,
             // block_bottom: "День рождения - 8 000 рублей",
             // price_roster: 1,
             // roster_li: "Продолжительность — 2 часа"
             image:  625,
             image1: 626,
             image2: 627,
             image3: 628,

             },

             sevenSlider: { 
              name: "Драйв на квадроциклах", 
              count: 1800, 
              button: "Заказать впечатление", 
              text: "Подробнее о впечатлении: ",
              ot: "от",
              select: 1,
              option: "1 маршрут",
              option1: "2 маршрут",
              option2: "3 маршрут",
              
              context_text:  "У нас мощные, двухместные квадроциклы, на которых вы сможете прокатиться вдвоем и в процессе меняться местами. ",
              context_text1:  "Квадроциклы — это юркая, маневренная техника. Здесь не нужны опыт вождения, водительские права или еще какие-то особенные условия. Инструктор подробно всё объяснит и к тому же будет сопровождать вас на маршруте и помогать на сложных участках.",
              context_text2:  "У нас есть несколько маршрутов, которые ведут по живописным местам к Волге.",
             //  context_copy: "Уютный вечер - 3 000 рублей",
              context_li: "1 маршрут (для новичков)",
              context_li1: "Продолжительность: 30 минут",
              context_li2: "2 маршрут (для тех, кто любит активный отдых) ",
              context_li3: "Продолжительность: 1 час",
              context_li4: "3 маршрут (для экстремалов)",
              context_li5: "Продолжительность: 2 часа ",

              cancel: 1,
              context_ul: 1,
              price_text: 1,
              price_context: "Все маршруты стартуют от Архангельской Слободы",
              // price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
              // price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
              // context_block: 1,
              // block_copy: "Варианты прогулок:",
              // price_ul: 1,
              // price_li: "Классический на земле",
              // price_li2: "Столик на двоих",


            //  buttom_text: 1,
            //  buttom_p: "Данное впечатление с элементом квеста подойдет для пар, которые любят активно проводить время, хотят разнообразить свои будни и отвлечься от быта, а также классный способ необычно отпраздновать годовщину свадьбы.",
            //  buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            //  buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            //  buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            //  buttom_p4: "Локация - ипподром за Парком Победы",
            //  context_bottom: 1,
             // block_bottom: "День рождения - 8 000 рублей",
             // price_roster: 1,
             // roster_li: "Продолжительность — 2 часа"
             image:  615,
             image1: 616,
             image2: 617,
             image3: 618,
             },

             eightSlider: {
              name: "Запись песни в студии", 
             count: 5000, 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
            //  ot: "от",
            //  select: 1,
            //  option: "1 час",
            //  option1: "2 часа",
            //  option2: "3 час",
             context_text:  "Запись песни в профессиональной студии — очень необычное впечатление, которое точно произведет фурор!",
             context_text1:  "Только представьте, как здорово почувствовать себя настоящей звездой: микрофон, наушники, звукорежиссер, аппаратура — все это будет при записи трека 🔥",
             context_copy: "Вы можете:",

            //  cancel: 1,

            //  context_li: "Для взрослых — гнедые рысаки, выдерживающие до 90 кг",
            //  context_li1: "Для детей — милые пони, которые вызывают восторг у малышей",
            //  context_ul: 1,
             price_text: 1,
             price_context: "Сами записать песню-поздравление, если предпочитаете создавать подарки 'своими руками'",
             price_context1: "Подарить сертификат на запись тому, кто не смыслит свою жизнь без музыки и песен",
            //  price_context2: "Путешествие в сторону Пальцинского острова (3 часа) — 9 000 рублей",
             context_block: 1,
            //  block_copy: "Варианты прогулок:",
             price_ul: 1,
             price_li: "Продолжительность — 2 часа (за это время вы запишите полноценный трек)",
             price_li1: "Помощь профессионалов при выборе и исполнении композиции",
             price_li2: "Продолжительность обработки трека — 5-7 дней",
             price_li3: "Студия находится в центре города",

            // buttom_text: 1,
            // buttom_p: "Стандартная — 30 минут - 990 рублей",
            // buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            // buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            // buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            // buttom_p4: "Локация - ипподром за Парком Победы",
            // context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image:  685,
            image1: 686,
            image2: 687,
            image3: 688,
             },
             
             nineSlider: {
              name: "Поездка на болотоходах", 
              count: 3500, 
              button: "Заказать впечатление", 
              text: "Подробнее о впечатлении: ",
              // ot: "от",
              // select: 1,
              // option: "1 маршрут",
              // option1: "2 маршрут",
              // option2: "3 маршрут",
              
              context_text:  "Болотоходы на летний период переехали под Сызрань. Всего 100 км от Ульяновска! ",
              context_text1:  "Летняя трасса включает в себя проезд по бездорожью в лесу через ручьи, овражки и кочки. То есть это классная трасса, позволяющая в полной мере ощутить мощь и проходимость болотоходов 🔥",
              context_text2:  "Инструктор покажет трассу, расскажет о самых интересных местах, а дальше болотоходом вы управляете самостоятельно.",
              context_text3:  "Стоимость — 3 500 руб\час",
              //  context_copy: "Уютный вечер - 3 000 рублей",
              context_li: "Продолжительность поездки — от 1 часа ",
              context_li1: "Вместимость болотохода — 3 человека",
              context_li2: "Допустимый возраст — от 4 лет ",
              context_li3: "Средняя скорость — 40 км/час",
              context_li4: "Мощность — 1000 кубов",

              cancel: 1,
              context_ul: 1,
              // price_text: 1,
              // price_context: "Все маршруты стартуют от Архангельской Слободы",
              // price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
              // price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
              // context_block: 1,
              // block_copy: "Варианты прогулок:",
              // price_ul: 1,
              // price_li: "Классический на земле",
              // price_li2: "Столик на двоих",


            //  buttom_text: 1,
            //  buttom_p: "Данное впечатление с элементом квеста подойдет для пар, которые любят активно проводить время, хотят разнообразить свои будни и отвлечься от быта, а также классный способ необычно отпраздновать годовщину свадьбы.",
            //  buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            //  buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            //  buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            //  buttom_p4: "Локация - ипподром за Парком Победы",
            //  context_bottom: 1,
             // block_bottom: "День рождения - 8 000 рублей",
             // price_roster: 1,
             // roster_li: "Продолжительность — 2 часа"
             image:  605,
             image1: 606,
             image2: 607,
             image3: 608,

             },

             tenSlider: {
              name: "Игра в виртуальной реальности", 
             count:  600, 
             button: "Заказать впечатление", 
             text: "Подробнее о впечатлении: ",
            //  ot: "от",
            //  select: 1,
            //  option: "На двоих",
            //  option1: "До 6 чел.",
            //  option2: "1,5 часа",
             context_text:  "Играя в очках виртуальной реальности, вы погружаетесь в совершенно другой мир — у вас другая картинка, другие ощущения, другое восприятие. ",
             context_text1:  "Неважно, сколько вам лет и чем вы занимаетесь, вы можете собраться компанией и провести командное VR-сражение. ",
             context_text2:  "Чтобы победить в сражении придется активно двигаться, прятаться за укрытиями и быстро перемещаться! Не вы управляете героем, вы и есть герои!",
            //  context_text3:  "Купола находятся в самом центре города на улице. Крымова",
             context_copy: "Что вас ждет на арене виртуальной реальности:",
             context_li: "Командное сражение — от 2 до 10 человек",
             context_li1: "Продолжительность — от 1 часа",
             context_li2: "Возраст — от 8 лет",
             context_li3: "Фуршетная комната для праздников",
             context_li4: "Playstation 4",
             context_li5: "Горячий чай и кофе",
             context_ul: 1,
            //  price_text: 1,
            //  price_context: "Наш инструктор Анастасия познакомит вас с лошадьми, подробно расскажет и покажет особенности общения с этими животными, проведет короткий инструктаж и поможет сесть верхом. ",
            //  price_context1: "Под присмотром инструктора вы сможете погладить лошадь, покормить ее, взять под уздцы и самостоятельно поуправлять во время прогулки. ",
            //  price_context2: "Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы даже новички чувствовали себя комфортно.",
             context_block: 1,
             block_copy: "Что вас ждет на арене виртуальной реальности:",
             price_ul: 1,
             cancel: 1,
             price_li: "Присоединиться к другой команде в открытой игре (от 2 человек)",
             price_li1: "Собрать свою команду и сразиться друг против друга (от 2 до 10 человек)",
             price_li2: "Провести закрытое мероприятие с фуршетом в отдельной комнате (до 15 игроков)",
            // buttom_text: 1,
            // buttom_p: "Стандартная — 30 минут - 990 рублей",
            // buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            // buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            // buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            // buttom_p4: "Локация - ипподром за Парком Победы",
            // context_bottom: 1,
            // block_bottom: "День рождения - 8 000 рублей",
            // price_roster: 1,
            // roster_li: "Продолжительность — 2 часа"
            image:  675,
            image1: 676,
            image2: 677,
            image3: 678,

             },


             elevenSlider: {
              name: "Романтический пикник", 
              count: 2500, 
              button: "Заказать впечатление", 
              text: "Подробнее о впечатлении: ",
              // ot: "от",
              // select: 1,
              // option: "30 мин",
              // option1: "1 час",
              // option2: "1,5 часа",
              
              context_text:  "Вспомните, как в романтических фильмах главные герои уютно устраиваются на природе с чашечкой горячего чая и ведут неспешные беседы друг с другом 😍",
              context_text: "Именно эту картинку мы воспроизвели в нашем впечатлении.",
               context_copy: "В пикник входит:",
              context_li: "Горячий, ароматный чай",
              context_li1: "Круассаны со сладкой начинкой",
              context_li2: "Сладости к чаю",
              context_li3: "Стильный декор",
              context_li4: "Свеча в подсвечнике для романтической обстановки",
              context_li5: "Теплые пледы для уютного отдыха",

              cancel: 1,
              context_ul: 1,
              price_text: 1,
              price_context: "Продукты закупаем непосредственно перед вашим приходом, чтобы вы наслаждались свежими и вкусными угощениями.",
              price_context1: "Как правило, пикники мы организуем в тихих и красивых местах, чтобы никто не смог помешать вашему общению. Наш сотрудник подготовит столик к свиданию, встретит вас, и все время будет в 5-минутной доступности, чтобы помочь в случае необходимости.",
              price_context2: "Есть 3 варианта Романтического пикника на природе:",
              context_block: 1,
              // block_copy: "Варианты прогулок:",
              price_ul: 1,
              price_li: "Столик в прекрасном уединенном месте для двоих",
              price_li2: "Продолжительность — 1 час",
              price_li3: "Конная прогулка для двоих + пикник",
              price_li4: "(1 час — прогулка + 30 минут — пикник",
              price_li5: "Поездка на болотоходе + пикник",
              price_li6: "Продолжительность — 1.5 часа",
              price_li7: "(1 час — заезд + 30 минут — пикник)",


            //  buttom_text: 1,
            //  buttom_p: "Данное впечатление с элементом квеста подойдет для пар, которые любят активно проводить время, хотят разнообразить свои будни и отвлечься от быта, а также классный способ необычно отпраздновать годовщину свадьбы.",
            //  buttom_p1: "Полноценная — 1 час - 1 500 рублей",
            //  buttom_p2: "Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)",
            //  buttom_p3: "Фотосессия с лошадью или пони — 30 минут - 3 000 руб",
            //  buttom_p4: "Локация - ипподром за Парком Победы",
            //  context_bottom: 1,
             // block_bottom: "День рождения - 8 000 рублей",
             // price_roster: 1,
             // roster_li: "Продолжительность — 2 часа"
             image:  705,
             image1: 706,
             image2: 707,
             image3: 708,
             },
         });





// модальное окно открывающее по кнопке заказать

    const [isPurchasing, setIsPurchasing] = useState(false);

    const purchaseHandler = () => setIsPurchasing(true);

    const purchaseCancelHandler = () => setIsPurchasing(false);

    const purchaseContinuedHandler = () => {
      alert(" to be continued")
    };

    // окно открывающееся по кнопке подробнее

    const [isLogout, setIsLogout] = useState(false);

    const inLogout = () => setIsLogout(true);

    const CancelLogout = () => setIsLogout(false);


    const ToBeLogout = () => alert('To be continued');



    // сложение чисел

    // const addSumma = (type) =>{
    //   setSlider((slider) =>{
    //     const sum = { ...slider[type]};
    //     sum.count = sum.count+1000;

    //     return {
    //       ...slider,
    //       [type]: { ...sum},
    //     };
    //   });
    // };


    // пробник

    // псевдо добавить сумму
     const [typee, setTypee] = useState('firstSlider')

    let addSumma = (type) =>{
      // let sum = type;
      console.log(type, typee);
      setTypee(type)
      
      };

    // удалить сумму

    const removeSumma = (type, event) =>{
      event.stopPropagation();


      setSlider((slider) =>{
        const sum = { ...slider[type]};
        sum.count = sum.count-1000;

        return {
          ...slider,
          [type]: { ...sum},
        };
      });
    };



  return (
    <div className={styles}>
      {/* <Modal isVissible={isPurchasing} close={purchaseCancelHandler}>
        <OrderInfo ings={slider} 
        cancelled={purchaseCancelHandler} 
        continued={purchaseContinuedHandler}
        />
      </Modal> */}

      <Modal isVissible={isPurchasing} close={purchaseCancelHandler}>
      <WindowTwo 
      prop={mod} 
      add={typee}
      cancelled={purchaseCancelHandler} 
      vissible={inLogout}
      /> 
      </Modal>

      <Modal isVissible={isLogout} close={CancelLogout}>
        <Logout
        can={CancelLogout} 
        cont={ToBeLogout}
        />
        
      </Modal>


      {/* <Window /> */}

      {/* <Example prop={slider} add={typee}/> */}
      {/* <WindowTwo prop={mod} add={typee}/> */}


        {/* <Travels slider={slider} /> */}


        <Header />
        
        <SliderGo 
        vis={inLogout}
        />


        <IconSelect />

        <Controls slider={slider}  
        add={addSumma} 
        remove={removeSumma}
        ordered={purchaseHandler}
        go={inLogout}
        />

        <SliderToo />


        <Certificate />

        <Acordion />

        <Footer vis={inLogout}/>

    </div>
  )
}

export default SliderBuilder