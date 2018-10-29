import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormControl, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";


export interface Cash {
    global_id: number,
    COUNTRY: string,
    CODE: string,
    STRCODE: string,
    NAME: string
}

@Component({
  selector: 'app-currency-tranfer',
  templateUrl: './currency-tranfer.component.html',
  styleUrls: ['./currency-tranfer.component.scss'],
  providers: [DatePipe]
})
export class CurrencyTranferComponent implements OnInit {
    
    form: FormGroup;
    cols2: number;
    cols3: number;
    cashes: Cash [];
        
    constructor(private builder: FormBuilder, private _router: Router) {}
    
    ngOnInit() {
        this.initForm();
        this.cols2 = (window.innerWidth <= 600) ? 1 : 2;
        this.cols3 = (window.innerWidth <= 600) ? 1 : 3;
        this.initCashes();
    }
    
    
    initForm() {
        const now = new Date();
        const nowDt = new Date(now.getFullYear(), now.getMonth() , now.getDate());
        this.form = this.builder.group({
            docDate:     new FormControl(nowDt, [Validators.required]),
            docNumber:   new FormControl(1, [Validators.required])
        });
    }
    
    onClickCancel() {
        this._router.navigate(['/currency']);
    }
    
    onClickSave() {
        this._router.navigate(['/currency']);
    }
    
    onResize(event) {
        this.cols2 = (event.target.innerWidth <= 600) ? 1 : 2;
        this.cols3 = (event.target.innerWidth <= 600) ? 1 : 3;
    }
    
    initCashes() {
        this.cashes = [
                {
                    "global_id":62838349,
                    "COUNTRY":"Албания",
                    "CODE":"008",
                    "STRCODE":"ALL",
                    "NAME":"Лек"
                 },
                 {
                    "global_id":62838350,
                    "COUNTRY":"Алжир",
                    "CODE":"012",
                    "STRCODE":"DZD",
                    "NAME":"Алжирский динар"
                 },
                 {
                    "global_id":62838351,
                    "COUNTRY":"Аргентина",
                    "CODE":"032",
                    "STRCODE":"ARS",
                    "NAME":"Аргентинское песо"
                 },
                 {
                    "global_id":62838352,
                    "COUNTRY":"Австралия; Кирибати; Кокосовые (Килинг) острова;  Науру;  Остров Норфолк; Остров Рождества; Остров Херд и острова Макдональд;  Тувалу",
                    "CODE":"036",
                    "STRCODE":"AUD",
                    "NAME":"Австралийский доллар"
                 },
                 {
                    "global_id":62838353,
                    "COUNTRY":"Багамы",
                    "CODE":"044",
                    "STRCODE":"BSD",
                    "NAME":"Багамский доллар"
                 },
                 {
                    "global_id":62838354,
                    "COUNTRY":"Бахрейн",
                    "CODE":"048",
                    "STRCODE":"BHD",
                    "NAME":"Бахрейнский динар"
                 },
                 {
                    "global_id":63061340,
                    "COUNTRY":"Бангладеш",
                    "CODE":"050",
                    "STRCODE":"BDT",
                    "NAME":"Така"
                 },
                 {
                    "global_id":63061341,
                    "COUNTRY":"Армения",
                    "CODE":"051",
                    "STRCODE":"AMD",
                    "NAME":"Армянский драм"
                 },
                 {
                    "global_id":62838355,
                    "COUNTRY":"Барбадос",
                    "CODE":"052",
                    "STRCODE":"BBD",
                    "NAME":"Барбадосский доллар"
                 },
                 {
                    "global_id":62838356,
                    "COUNTRY":"Бермуды",
                    "CODE":"060",
                    "STRCODE":"BMD",
                    "NAME":"Бермудский доллар"
                 },
                 {
                    "global_id":62838357,
                    "COUNTRY":"Бутан",
                    "CODE":"064",
                    "STRCODE":"BTN",
                    "NAME":"Нгултрум"
                 },
                 {
                    "global_id":62838358,
                    "COUNTRY":"Боливия, многонациональное государство",
                    "CODE":"068",
                    "STRCODE":"BOB",
                    "NAME":"Боливиано"
                 },
                 {
                    "global_id":62838359,
                    "COUNTRY":"Ботсвана",
                    "CODE":"072",
                    "STRCODE":"BWP",
                    "NAME":"Пула"
                 },
                 {
                    "global_id":62838360,
                    "COUNTRY":"Белиз",
                    "CODE":"084",
                    "STRCODE":"BZD",
                    "NAME":"Белизский доллар"
                 },
                 {
                    "global_id":62838361,
                    "COUNTRY":"Соломоновы Острова",
                    "CODE":"090",
                    "STRCODE":"SBD",
                    "NAME":"Доллар Соломоновых Островов"
                 },
                 {
                    "global_id":62838362,
                    "COUNTRY":"Бруней-Даруссалам",
                    "CODE":"096",
                    "STRCODE":"BND",
                    "NAME":"Брунейский доллар"
                 },
                 {
                    "global_id":62838363,
                    "COUNTRY":"Мьянма",
                    "CODE":"104",
                    "STRCODE":"MMK",
                    "NAME":"Кьят"
                 },
                 {
                    "global_id":62838364,
                    "COUNTRY":"Бурунди",
                    "CODE":"108",
                    "STRCODE":"BIF",
                    "NAME":"Бурундийский франк"
                 },
                 {
                    "global_id":62838365,
                    "COUNTRY":"Камбоджа",
                    "CODE":"116",
                    "STRCODE":"KHR",
                    "NAME":"Риель"
                 },
                 {
                    "global_id":62838366,
                    "COUNTRY":"Канада",
                    "CODE":"124",
                    "STRCODE":"CAD",
                    "NAME":"Канадский доллар"
                 },
                 {
                    "global_id":62838367,
                    "COUNTRY":"Кабо-Верде",
                    "CODE":"132",
                    "STRCODE":"CVE",
                    "NAME":"Эскудо Кабо-Верде"
                 },
                 {
                    "global_id":62838368,
                    "COUNTRY":"Острова Кайман",
                    "CODE":"136",
                    "STRCODE":"KYD",
                    "NAME":"Доллар Островов Кайман"
                 },
                 {
                    "global_id":62838369,
                    "COUNTRY":"Шри-Ланка",
                    "CODE":"144",
                    "STRCODE":"LKR",
                    "NAME":"Шри-ланкийская рупия"
                 },
                 {
                    "global_id":62838370,
                    "COUNTRY":"Чили",
                    "CODE":"152",
                    "STRCODE":"CLP",
                    "NAME":"Чилийское песо"
                 },
                 {
                    "global_id":62838371,
                    "COUNTRY":"Китай",
                    "CODE":"156",
                    "STRCODE":"CNY",
                    "NAME":"Юань"
                 },
                 {
                    "global_id":62838372,
                    "COUNTRY":"Колумбия",
                    "CODE":"170",
                    "STRCODE":"COP",
                    "NAME":"Колумбийское песо"
                 },
                 {
                    "global_id":62838373,
                    "COUNTRY":"Коморы",
                    "CODE":"174",
                    "STRCODE":"KMF",
                    "NAME":"Коморский франк"
                 },
                 {
                    "global_id":62838374,
                    "COUNTRY":"Коста-Рика",
                    "CODE":"188",
                    "STRCODE":"CRC",
                    "NAME":"Коста-риканский колон"
                 },
                 {
                    "global_id":62838375,
                    "COUNTRY":"Хорватия",
                    "CODE":"191",
                    "STRCODE":"HRK",
                    "NAME":"Куна"
                 },
                 {
                    "global_id":62838376,
                    "COUNTRY":"Куба",
                    "CODE":"192",
                    "STRCODE":"CUP",
                    "NAME":"Кубинское песо"
                 },
                 {
                    "global_id":62838377,
                    "COUNTRY":"Чехия",
                    "CODE":"203",
                    "STRCODE":"CZK",
                    "NAME":"Чешская крона"
                 },
                 {
                    "global_id":62838378,
                    "COUNTRY":"Гренландия; Дания; Фарерские острова",
                    "CODE":"208",
                    "STRCODE":"DKK",
                    "NAME":"Датская крона"
                 },
                 {
                    "global_id":62838379,
                    "COUNTRY":"Доминиканская Республика",
                    "CODE":"214",
                    "STRCODE":"DOP",
                    "NAME":"Доминиканское песо"
                 },
                 {
                    "global_id":62838380,
                    "COUNTRY":"Эль-Сальвадор",
                    "CODE":"222",
                    "STRCODE":"SVC",
                    "NAME":"Сальвадорский колон"
                 },
                 {
                    "global_id":62838381,
                    "COUNTRY":"Эфиопия",
                    "CODE":"230",
                    "STRCODE":"ETB",
                    "NAME":"Эфиопский быр"
                 },
                 {
                    "global_id":62838382,
                    "COUNTRY":"Эритрея",
                    "CODE":"232",
                    "STRCODE":"ERN",
                    "NAME":"Накфа"
                 },
                 {
                    "global_id":62838383,
                    "COUNTRY":"Фолклендские острова (Мальвинские)",
                    "CODE":"238",
                    "STRCODE":"FKP",
                    "NAME":"Фунт Фолклендских островов"
                 },
                 {
                    "global_id":62838384,
                    "COUNTRY":"Фиджи",
                    "CODE":"242",
                    "STRCODE":"FJD",
                    "NAME":"Доллар Фиджи"
                 },
                 {
                    "global_id":62838385,
                    "COUNTRY":"Джибути",
                    "CODE":"262",
                    "STRCODE":"DJF",
                    "NAME":"Франк Джибути"
                 },
                 {
                    "global_id":62838386,
                    "COUNTRY":"Гамбия",
                    "CODE":"270",
                    "STRCODE":"GMD",
                    "NAME":"Даласи"
                 },
                 {
                    "global_id":62838387,
                    "COUNTRY":"Гибралтар",
                    "CODE":"292",
                    "STRCODE":"GIP",
                    "NAME":"Гибралтарский фунт"
                 },
                 {
                    "global_id":62838388,
                    "COUNTRY":"Гватемала",
                    "CODE":"320",
                    "STRCODE":"GTQ",
                    "NAME":"Кетсаль"
                 },
                 {
                    "global_id":62838389,
                    "COUNTRY":"Гвинея",
                    "CODE":"324",
                    "STRCODE":"GNF",
                    "NAME":"Гвинейский франк"
                 },
                 {
                    "global_id":62838390,
                    "COUNTRY":"Гайана",
                    "CODE":"328",
                    "STRCODE":"GYD",
                    "NAME":"Гайанский доллар"
                 },
                 {
                    "global_id":62838391,
                    "COUNTRY":"Гаити",
                    "CODE":"332",
                    "STRCODE":"HTG",
                    "NAME":"Гурд"
                 },
                 {
                    "global_id":62838392,
                    "COUNTRY":"Гондурас",
                    "CODE":"340",
                    "STRCODE":"HNL",
                    "NAME":"Лемпира"
                 },
                 {
                    "global_id":62838393,
                    "COUNTRY":"Гонконг",
                    "CODE":"344",
                    "STRCODE":"HKD",
                    "NAME":"Гонконгский доллар"
                 },
                 {
                    "global_id":62838394,
                    "COUNTRY":"Венгрия",
                    "CODE":"348",
                    "STRCODE":"HUF",
                    "NAME":"Форинт"
                 },
                 {
                    "global_id":62838395,
                    "COUNTRY":"Исландия",
                    "CODE":"352",
                    "STRCODE":"ISK",
                    "NAME":"Исландская крона"
                 },
                 {
                    "global_id":62838396,
                    "COUNTRY":"Бутан; Индия",
                    "CODE":"356",
                    "STRCODE":"INR",
                    "NAME":"Индийская рупия"
                 },
                 {
                    "global_id":62838397,
                    "COUNTRY":"Индонезия",
                    "CODE":"360",
                    "STRCODE":"IDR",
                    "NAME":"Рупия"
                 },
                 {
                    "global_id":62838398,
                    "COUNTRY":"Иран (Исламская Республика)",
                    "CODE":"364",
                    "STRCODE":"IRR",
                    "NAME":"Иранский риал"
                 },
                 {
                    "global_id":62838399,
                    "COUNTRY":"Ирак",
                    "CODE":"368",
                    "STRCODE":"IQD",
                    "NAME":"Иракский динар"
                 },
                 {
                    "global_id":63061342,
                    "COUNTRY":"Израиль",
                    "CODE":"376",
                    "STRCODE":"ILS",
                    "NAME":"Новый израильский шекель"
                 },
                 {
                    "global_id":62838400,
                    "COUNTRY":"Ямайка",
                    "CODE":"388",
                    "STRCODE":"JMD",
                    "NAME":"Ямайский доллар"
                 },
                 {
                    "global_id":62838401,
                    "COUNTRY":"Япония",
                    "CODE":"392",
                    "STRCODE":"JPY",
                    "NAME":"Иена"
                 },
                 {
                    "global_id":63061343,
                    "COUNTRY":"Казахстан",
                    "CODE":"398",
                    "STRCODE":"KZT",
                    "NAME":"Тенге"
                 },
                 {
                    "global_id":62838402,
                    "COUNTRY":"Иордания",
                    "CODE":"400",
                    "STRCODE":"JOD",
                    "NAME":"Иорданский динар"
                 },
                 {
                    "global_id":62838403,
                    "COUNTRY":"Кения",
                    "CODE":"404",
                    "STRCODE":"KES",
                    "NAME":"Кенийский шиллинг"
                 },
                 {
                    "global_id":62838404,
                    "COUNTRY":"Корея, народно-демократическая республика",
                    "CODE":"408",
                    "STRCODE":"KPW",
                    "NAME":"Северокорейская вона"
                 },
                 {
                    "global_id":62838405,
                    "COUNTRY":"Корея, республика",
                    "CODE":"410",
                    "STRCODE":"KRW",
                    "NAME":"Вона"
                 },
                 {
                    "global_id":62838406,
                    "COUNTRY":"Кувейт",
                    "CODE":"414",
                    "STRCODE":"KWD",
                    "NAME":"Кувейтский динар"
                 },
                 {
                    "global_id":62838407,
                    "COUNTRY":"Киргизия",
                    "CODE":"417",
                    "STRCODE":"KGS",
                    "NAME":"Сом"
                 },
                 {
                    "global_id":62838408,
                    "COUNTRY":"Лаос",
                    "CODE":"418",
                    "STRCODE":"LAK",
                    "NAME":"Лаосский кип"
                 },
                 {
                    "global_id":62838409,
                    "COUNTRY":"Ливан",
                    "CODE":"422",
                    "STRCODE":"LBP",
                    "NAME":"Ливанский фунт"
                 },
                 {
                    "global_id":62838410,
                    "COUNTRY":"Лесото",
                    "CODE":"426",
                    "STRCODE":"LSL",
                    "NAME":"Лоти"
                 },
                 {
                    "global_id":62838411,
                    "COUNTRY":"Либерия",
                    "CODE":"430",
                    "STRCODE":"LRD",
                    "NAME":"Либерийский доллар"
                 },
                 {
                    "global_id":62838412,
                    "COUNTRY":"Ливия",
                    "CODE":"434",
                    "STRCODE":"LYD",
                    "NAME":"Ливийский динар"
                 },
                 {
                    "global_id":62838413,
                    "COUNTRY":"Макао",
                    "CODE":"446",
                    "STRCODE":"MOP",
                    "NAME":"Патака"
                 },
                 {
                    "global_id":62838414,
                    "COUNTRY":"Малави",
                    "CODE":"454",
                    "STRCODE":"MWK",
                    "NAME":"Малавийская квача"
                 },
                 {
                    "global_id":62838415,
                    "COUNTRY":"Малайзия",
                    "CODE":"458",
                    "STRCODE":"MYR",
                    "NAME":"Малайзийский ринггит"
                 },
                 {
                    "global_id":62838416,
                    "COUNTRY":"Мальдивы",
                    "CODE":"462",
                    "STRCODE":"MVR",
                    "NAME":"Руфия"
                 },
                 {
                    "global_id":62838417,
                    "COUNTRY":"Мавритания",
                    "CODE":"478",
                    "STRCODE":"MRO",
                    "NAME":"Угия"
                 },
                 {
                    "global_id":62838418,
                    "COUNTRY":"Маврикий",
                    "CODE":"480",
                    "STRCODE":"MUR",
                    "NAME":"Маврикийская рупия"
                 },
                 {
                    "global_id":63061344,
                    "COUNTRY":"Мексика",
                    "CODE":"484",
                    "STRCODE":"MXN",
                    "NAME":"Мексиканское песо"
                 },
                 {
                    "global_id":62838419,
                    "COUNTRY":"Монголия",
                    "CODE":"496",
                    "STRCODE":"MNT",
                    "NAME":"Тугрик"
                 },
                 {
                    "global_id":62838420,
                    "COUNTRY":"Молдова, республика",
                    "CODE":"498",
                    "STRCODE":"MDL",
                    "NAME":"Молдавский лей"
                 },
                 {
                    "global_id":62838421,
                    "COUNTRY":"Западная Сахара; Марокко",
                    "CODE":"504",
                    "STRCODE":"MAD",
                    "NAME":"Марокканский дирхам"
                 },
                 {
                    "global_id":62838422,
                    "COUNTRY":"Оман",
                    "CODE":"512",
                    "STRCODE":"OMR",
                    "NAME":"Оманский риал"
                 },
                 {
                    "global_id":62838423,
                    "COUNTRY":"Намибия",
                    "CODE":"516",
                    "STRCODE":"NAD",
                    "NAME":"Доллар Намибии"
                 },
                 {
                    "global_id":62838424,
                    "COUNTRY":"Непал",
                    "CODE":"524",
                    "STRCODE":"NPR",
                    "NAME":"Непальская рупия"
                 },
                 {
                    "global_id":62838425,
                    "COUNTRY":"Кюрасао; Сен-Мартен (нидерландская часть)",
                    "CODE":"532",
                    "STRCODE":"ANG",
                    "NAME":"Нидерландский антильский гульден"
                 },
                 {
                    "global_id":62838426,
                    "COUNTRY":"Аруба",
                    "CODE":"533",
                    "STRCODE":"AWG",
                    "NAME":"Арубанский флорин"
                 },
                 {
                    "global_id":62838427,
                    "COUNTRY":"Вануату",
                    "CODE":"548",
                    "STRCODE":"VUV",
                    "NAME":"Вату"
                 },
                 {
                    "global_id":62838428,
                    "COUNTRY":"Ниуэ; Новая Зеландия; Острова Кука; Питкерн; Токелау",
                    "CODE":"554",
                    "STRCODE":"NZD",
                    "NAME":"Новозеландский доллар"
                 },
                 {
                    "global_id":62838429,
                    "COUNTRY":"Никарагуа",
                    "CODE":"558",
                    "STRCODE":"NIO",
                    "NAME":"Золотая кордоба"
                 },
                 {
                    "global_id":62838430,
                    "COUNTRY":"Нигерия",
                    "CODE":"566",
                    "STRCODE":"NGN",
                    "NAME":"Найра"
                 },
                 {
                    "global_id":62838431,
                    "COUNTRY":"Норвегия; Остров Буве; Шпицберген и Ян Майен",
                    "CODE":"578",
                    "STRCODE":"NOK",
                    "NAME":"Норвежская крона"
                 },
                 {
                    "global_id":62838432,
                    "COUNTRY":"Пакистан",
                    "CODE":"586",
                    "STRCODE":"PKR",
                    "NAME":"Пакистанская рупия"
                 },
                 {
                    "global_id":62838433,
                    "COUNTRY":"Панама",
                    "CODE":"590",
                    "STRCODE":"PAB",
                    "NAME":"Бальбоа"
                 },
                 {
                    "global_id":62838434,
                    "COUNTRY":"Папуа Новая Гвинея",
                    "CODE":"598",
                    "STRCODE":"PGK",
                    "NAME":"Кина"
                 },
                 {
                    "global_id":62838435,
                    "COUNTRY":"Парагвай",
                    "CODE":"600",
                    "STRCODE":"PYG",
                    "NAME":"Гуарани"
                 },
                 {
                    "global_id":62838436,
                    "COUNTRY":"Перу",
                    "CODE":"604",
                    "STRCODE":"PEN",
                    "NAME":"Соль"
                 },
                 {
                    "global_id":62838437,
                    "COUNTRY":"Филиппины",
                    "CODE":"608",
                    "STRCODE":"PHP",
                    "NAME":"Филиппинское песо"
                 },
                 {
                    "global_id":62838438,
                    "COUNTRY":"Катар",
                    "CODE":"634",
                    "STRCODE":"QAR",
                    "NAME":"Катарский риал"
                 },
                 {
                    "global_id":62838439,
                    "COUNTRY":"Россия",
                    "CODE":"643",
                    "STRCODE":"RUB",
                    "NAME":"Российский рубль"
                 },
                 {
                    "global_id":63061345,
                    "COUNTRY":"Руанда",
                    "CODE":"646",
                    "STRCODE":"RWF",
                    "NAME":"Франк Руанды"
                 },
                 {
                    "global_id":62838440,
                    "COUNTRY":"Святая Елена, остров Вознесения, Тристан-да-Кунья",
                    "CODE":"654",
                    "STRCODE":"SHP",
                    "NAME":"Фунт Святой Елены."
                 },
                 {
                    "global_id":62838441,
                    "COUNTRY":"Сан-Томе и Принсипи",
                    "CODE":"678",
                    "STRCODE":"STD",
                    "NAME":"Добра"
                 },
                 {
                    "global_id":62838442,
                    "COUNTRY":"Саудовская Аравия",
                    "CODE":"682",
                    "STRCODE":"SAR",
                    "NAME":"Саудовский риял"
                 },
                 {
                    "global_id":62838443,
                    "COUNTRY":"Сейшелы",
                    "CODE":"690",
                    "STRCODE":"SCR",
                    "NAME":"Сейшельская рупия"
                 },
                 {
                    "global_id":62838444,
                    "COUNTRY":"Сьерра-Леоне",
                    "CODE":"694",
                    "STRCODE":"SLL",
                    "NAME":"Леоне"
                 },
                 {
                    "global_id":62838445,
                    "COUNTRY":"Сингапур",
                    "CODE":"702",
                    "STRCODE":"SGD",
                    "NAME":"Сингапурский доллар"
                 },
                 {
                    "global_id":62838446,
                    "COUNTRY":"Вьетнам",
                    "CODE":"704",
                    "STRCODE":"VND",
                    "NAME":"Донг"
                 },
                 {
                    "global_id":62838447,
                    "COUNTRY":"Сомали",
                    "CODE":"706",
                    "STRCODE":"SOS",
                    "NAME":"Сомалийский шиллинг"
                 },
                 {
                    "global_id":62838448,
                    "COUNTRY":"Лесото; Намибия; Южная Африка",
                    "CODE":"710",
                    "STRCODE":"ZAR",
                    "NAME":"Рэнд"
                 },
                 {
                    "global_id":62838449,
                    "COUNTRY":"Южный Судан",
                    "CODE":"728",
                    "STRCODE":"SSP",
                    "NAME":"Южносуданский фунт"
                 },
                 {
                    "global_id":62838450,
                    "COUNTRY":"Свазиленд",
                    "CODE":"748",
                    "STRCODE":"SZL",
                    "NAME":"Лилангени"
                 },
                 {
                    "global_id":62838451,
                    "COUNTRY":"Швеция",
                    "CODE":"752",
                    "STRCODE":"SEK",
                    "NAME":"Шведская крона"
                 },
                 {
                    "global_id":63061346,
                    "COUNTRY":"Лихтенштейн; Швейцария",
                    "CODE":"756",
                    "STRCODE":"CHF",
                    "NAME":"Швейцарский франк"
                 },
                 {
                    "global_id":62838452,
                    "COUNTRY":"Сирийская Арабская Республика",
                    "CODE":"760",
                    "STRCODE":"SYP",
                    "NAME":"Сирийский фунт"
                 },
                 {
                    "global_id":62838453,
                    "COUNTRY":"Таиланд",
                    "CODE":"764",
                    "STRCODE":"THB",
                    "NAME":"Бат"
                 },
                 {
                    "global_id":62838454,
                    "COUNTRY":"Тонга",
                    "CODE":"776",
                    "STRCODE":"TOP",
                    "NAME":"Паанга"
                 },
                 {
                    "global_id":62838455,
                    "COUNTRY":"Тринидад и Тобаго",
                    "CODE":"780",
                    "STRCODE":"TTD",
                    "NAME":"Доллар Тринидада и Тобаго"
                 },
                 {
                    "global_id":62838456,
                    "COUNTRY":"Объединенные Арабские Эмираты (ОАЭ)",
                    "CODE":"784",
                    "STRCODE":"AED",
                    "NAME":"Дирхам (ОАЭ)"
                 },
                 {
                    "global_id":62838457,
                    "COUNTRY":"Тунис",
                    "CODE":"788",
                    "STRCODE":"TND",
                    "NAME":"Тунисский динар"
                 },
                 {
                    "global_id":62838458,
                    "COUNTRY":"Уганда",
                    "CODE":"800",
                    "STRCODE":"UGX",
                    "NAME":"Угандийский шиллинг"
                 },
                 {
                    "global_id":62838459,
                    "COUNTRY":"Македония, бывшая Югославская Республика",
                    "CODE":"807",
                    "STRCODE":"MKD",
                    "NAME":"Денар"
                 },
                 {
                    "global_id":62838460,
                    "COUNTRY":"Египет",
                    "CODE":"818",
                    "STRCODE":"EGP",
                    "NAME":"Египетский фунт"
                 },
                 {
                    "global_id":62838461,
                    "COUNTRY":"Соединенное королевство",
                    "CODE":"826",
                    "STRCODE":"GBP",
                    "NAME":"Фунт стерлингов"
                 },
                 {
                    "global_id":62838462,
                    "COUNTRY":"Танзания, объединенная республика",
                    "CODE":"834",
                    "STRCODE":"TZS",
                    "NAME":"Танзанийский шиллинг"
                 },
                 {
                    "global_id":62838463,
                    "COUNTRY":"Американское Самоа; Британская территория в Индийском океане; Бонэйр, Синт-Эстатиус и Саба; Виргинские острова (Британские); Виргинские острова (США); Гаити; Гуам; Малые Тихоокеанские Отдаленные острова Соединенных Штатов; Маршалловы Острова; Микронезия, федеративные штаты; Острова Теркс и Кайкос; Палау; Панама; Пуэрто-Рико; Северные Марианские острова; Соединенные Штаты; Тимор-Лесте; Эквадор; Эль-Сальвадор",
                    "CODE":"840",
                    "STRCODE":"USD",
                    "NAME":"Доллар США"
                 },
                 {
                    "global_id":62838464,
                    "COUNTRY":"Уругвай",
                    "CODE":"858",
                    "STRCODE":"UYU",
                    "NAME":"Уругвайское песо"
                 },
                 {
                    "global_id":62838465,
                    "COUNTRY":"Узбекистан",
                    "CODE":"860",
                    "STRCODE":"UZS",
                    "NAME":"Узбекский сум"
                 },
                 {
                    "global_id":62838466,
                    "COUNTRY":"Самоа",
                    "CODE":"882",
                    "STRCODE":"WST",
                    "NAME":"Тала"
                 },
                 {
                    "global_id":62838467,
                    "COUNTRY":"Йемен",
                    "CODE":"886",
                    "STRCODE":"YER",
                    "NAME":"Йеменский риал"
                 },
                 {
                    "global_id":62838468,
                    "COUNTRY":"Тайвань (Китай)",
                    "CODE":"901",
                    "STRCODE":"TWD",
                    "NAME":"Новый тайваньский доллар"
                 },
                 {
                    "global_id":62838469,
                    "COUNTRY":"Куба",
                    "CODE":"931",
                    "STRCODE":"CUC",
                    "NAME":"Конвертируемое песо"
                 },
                 {
                    "global_id":62838470,
                    "COUNTRY":"Зимбабве",
                    "CODE":"932",
                    "STRCODE":"ZWL",
                    "NAME":"Доллар Зимбабве"
                 },
                 {
                    "global_id":277933656,
                    "COUNTRY":"Беларусь",
                    "CODE":"933",
                    "STRCODE":"BYN",
                    "NAME":"Белорусский рубль"
                 },
                 {
                    "global_id":63061347,
                    "COUNTRY":"Туркменистан",
                    "CODE":"934",
                    "STRCODE":"TMT",
                    "NAME":"Новый туркменский манат"
                 },
                 {
                    "global_id":62838471,
                    "COUNTRY":"Гана",
                    "CODE":"936",
                    "STRCODE":"GHS",
                    "NAME":"Ганский седи"
                 },
                 {
                    "global_id":62838472,
                    "COUNTRY":"Венесуэла (боливарианская республика)",
                    "CODE":"937",
                    "STRCODE":"VEF",
                    "NAME":"Боливар"
                 },
                 {
                    "global_id":62838473,
                    "COUNTRY":"Судан",
                    "CODE":"938",
                    "STRCODE":"SDG",
                    "NAME":"Суданский фунт"
                 },
                 {
                    "global_id":63061348,
                    "COUNTRY":"Уругвай",
                    "CODE":"940",
                    "STRCODE":"UYI",
                    "NAME":"Уругвайское песо в индексированных единицах"
                 },
                 {
                    "global_id":62838474,
                    "COUNTRY":"Сербия",
                    "CODE":"941",
                    "STRCODE":"RSD",
                    "NAME":"Сербский динар"
                 },
                 {
                    "global_id":62838475,
                    "COUNTRY":"Мозамбик",
                    "CODE":"943",
                    "STRCODE":"MZN",
                    "NAME":"Мозамбикский метикал"
                 },
                 {
                    "global_id":62838476,
                    "COUNTRY":"Азербайджан",
                    "CODE":"944",
                    "STRCODE":"AZN",
                    "NAME":"Азербайджанский манат"
                 },
                 {
                    "global_id":63061349,
                    "COUNTRY":"Румыния",
                    "CODE":"946",
                    "STRCODE":"RON",
                    "NAME":"Румынский лей"
                 },
                 {
                    "global_id":62838477,
                    "COUNTRY":"Турция",
                    "CODE":"949",
                    "STRCODE":"TRY",
                    "NAME":"Турецкая лира"
                 },
                 {
                    "global_id":62838478,
                    "COUNTRY":"Габон; Камерун; Конго; Центрально-Африканская  Республика; Чад; Экваториальная Гвинея",
                    "CODE":"950",
                    "STRCODE":"XAF",
                    "NAME":"Франк КФА ВЕАС"
                 },
                 {
                    "global_id":62838479,
                    "COUNTRY":"Ангилья; Антигуа и Барбуда; Гренада; Доминика; Монтсеррат; Сент-Винсент и Гренадины; Сент-Китс и Невис; Сент-Люсия",
                    "CODE":"951",
                    "STRCODE":"XCD",
                    "NAME":"Восточно-карибский доллар"
                 },
                 {
                    "global_id":62838480,
                    "COUNTRY":"Бенин; Буркина-Фасо; Гвинея-Бисау; Кот д\u0027Ивуар; Мали; Нигер; Сенегал; Того",
                    "CODE":"952",
                    "STRCODE":"XOF",
                    "NAME":"Франк КФА ВСЕАО"
                 },
                 {
                    "global_id":62838481,
                    "COUNTRY":"Новая Каледония; Французкая Полинезия; Уоллис и Футуна",
                    "CODE":"953",
                    "STRCODE":"XPF",
                    "NAME":"Франк КФП"
                 },
                 {
                    "global_id":63061350,
                    "COUNTRY":"Международный валютный фонд (МВФ)",
                    "CODE":"960",
                    "STRCODE":"XDR",
                    "NAME":"СДР (специальные права заимствования)"
                 },
                 {
                    "global_id":62838482,
                    "COUNTRY":"Замбия",
                    "CODE":"967",
                    "STRCODE":"ZMW",
                    "NAME":"Замбийская квача"
                 },
                 {
                    "global_id":62838483,
                    "COUNTRY":"Суринам",
                    "CODE":"968",
                    "STRCODE":"SRD",
                    "NAME":"Суринамский доллар"
                 },
                 {
                    "global_id":62838484,
                    "COUNTRY":"Мадагаскар",
                    "CODE":"969",
                    "STRCODE":"MGA",
                    "NAME":"Малагасийский ариари"
                 },
                 {
                    "global_id":62838485,
                    "COUNTRY":"Колумбия",
                    "CODE":"970",
                    "STRCODE":"COU",
                    "NAME":"Единица реальной стоимости"
                 },
                 {
                    "global_id":62838486,
                    "COUNTRY":"Афганистан",
                    "CODE":"971",
                    "STRCODE":"AFN",
                    "NAME":"Афгани"
                 },
                 {
                    "global_id":62838487,
                    "COUNTRY":"Таджикистан",
                    "CODE":"972",
                    "STRCODE":"TJS",
                    "NAME":"Сомони"
                 },
                 {
                    "global_id":62838488,
                    "COUNTRY":"Ангола",
                    "CODE":"973",
                    "STRCODE":"AOA",
                    "NAME":"Кванза"
                 },
                 {
                    "global_id":62838489,
                    "COUNTRY":"Беларусь",
                    "CODE":"974",
                    "STRCODE":"BYR",
                    "NAME":"Белорусский рубль"
                 },
                 {
                    "global_id":62838490,
                    "COUNTRY":"Болгария",
                    "CODE":"975",
                    "STRCODE":"BGN",
                    "NAME":"Болгарский лев"
                 },
                 {
                    "global_id":62838491,
                    "COUNTRY":"Конго, демократическая республика",
                    "CODE":"976",
                    "STRCODE":"CDF",
                    "NAME":"Конголезский франк"
                 },
                 {
                    "global_id":62838492,
                    "COUNTRY":"Босния и Герцеговина",
                    "CODE":"977",
                    "STRCODE":"BAM",
                    "NAME":"Конвертируемая марка"
                 },
                 {
                    "global_id":62838493,
                    "COUNTRY":"Австрия; Андорра; Бельгия; Гваделупа; Германия; Греция; Ирландия; Испания; Италия; Кипр; Латвия; Литва; Люксембург; Майотта; Мальта; Мартиника; Монако; Нидерланды; Папский Престол (Государство-город Ватикан); Португалия; Реюньон; Сан-Марино; Сен-Бартелеми; Сен-Мартен (французская часть); Сент-Пьер и Микелон; Словакия; Словения; Финляндия; Франция; Французская Гвиана; Французские Южные территории; Черногория; Эландские острова; Эстония",
                    "CODE":"978",
                    "STRCODE":"EUR",
                    "NAME":"Евро"
                 },
                 {
                    "global_id":62838494,
                    "COUNTRY":"Украина",
                    "CODE":"980",
                    "STRCODE":"UAH",
                    "NAME":"Гривна"
                 },
                 {
                    "global_id":62838495,
                    "COUNTRY":"Грузия",
                    "CODE":"981",
                    "STRCODE":"GEL",
                    "NAME":"Лари"
                 },
                 {
                    "global_id":62838496,
                    "COUNTRY":"Польша",
                    "CODE":"985",
                    "STRCODE":"PLN",
                    "NAME":"Злотый"
                 },
                 {
                    "global_id":62838497,
                    "COUNTRY":"Бразилия",
                    "CODE":"986",
                    "STRCODE":"BRL",
                    "NAME":"Бразильский реал"
                 }
              ]
    }
    
}
