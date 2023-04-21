import Image from "next/image";
import Logo from "@/public/logo.png";
import { useRouter } from "next/router";

type dataType = { [key: string]: { price: number; desc?: string } };
function Box(props: { title: string; data: dataType }) {
  return (
    <div className="flex flex-col w-full">
      <div className="px-1 py-2 border-b border-green">
        <p className="text-green text-xl" style={{ fontFamily: "vazir" }}>
          {props.title}
        </p>
      </div>
      <div className="p-2 space-y-1">
        {Object.entries(props.data).map((item, index) => (
          <div key={index} className="w-full flex items-center justify-between">
            <p className="text-lg text-text" style={{ fontFamily: "vazir" }}>
              {item[0]}
              {item[1].desc && (
                <small
                  className="text-text/50 text-xs"
                  style={{ fontFamily: "vazir" }}
                >
                  {" "}
                  {item[1].desc}
                </small>
              )}
            </p>
            <p style={{ fontFamily: "vazir" }} className="text-xl">
              {Intl.NumberFormat("fa").format(item[1].price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const data: { [key: string]: dataType } = {
  قهوه: {
    "قهوه دمی روزانه": { price: 25000 },
    "اسپرسو تک": { price: 28000 },
    "اسپرسو دبل": { price: 35000 },
    کاپوچینو: { price: 50000 },
    "کافه لاته": { price: 50000 },
    موکا: { price: 55000 },
    "آیس موکا": { price: 55000 },
    ماکیاتو: { price: 60000, desc: "لاته،گارامل،وانیل" },
    "فرنچ پرس": { price: 50000, desc: "سه کاپ" },
    "قهوه ترک": { price: 40000 },
    نسکافه: { price: 45000 },
    "آیس کافی": { price: 50000 },
    "کوک اسپرسو": { price: 50000 },
    "هایپ اسپرسو": { price: 55000 },
    آفوگاتو: { price: 65000 },
  },
  "چای و دمنوش": {
    "چای ایرانی": { price: 35000, desc: "تک نفره" },
    "چای ایرانی ": { price: 60000, desc: "دونفره" },
    "چای سبز": { price: 50000 },
    "چای ترش": { price: 40000 },
    "چای ماسالا": { price: 55000 },
    "چای میوه ای": { price: 40000 },
    "چای لاته": { price: 55000 },
    "دمنوش گل گاوزبان": { price: 55000, desc: "ضد قلنج،تقویت جنسی" },
    "دمنوش بابونه": { price: 50000, desc: "آرامش،ضد انگل،اشتها آور" },
    "دمنوش به لیمو": { price: 50000, desc: "آرامش،درمان بی خوابی" },
    "دمنوش دارچین": { price: 50000, desc: "ضد درد،ضد مسمومیت" },
    "دمنوش آویشن": { price: 50000, desc: "ضد انگل،اشتها آور" },
    "دمنوش گزنه": { price: 50000, desc: "ضد میگرن،ضد سرماخوردگی" },
    "دمنوش اسطوخودوس": { price: 50000, desc: "آرامش،ضد میگرن" },
    "دمنوش پونه": { price: 50000, desc: "جلوگیری از ریزش مو و سفیدی" },
    "دمنوش های ترکیبی": { price: 65000, desc: "انتخاب باریستا" },
    "دمنوش بانوان": { price: 50000, desc: "قاعده آور،کاهش درد پریودی" },
  },
  "بار گرم": {
    "هات چاکلت ": { price: 65000, desc: "فندقی" },
    "هات چاکلت": { price: 55000, desc: "کوچک" },
    " هات چاکلت": { price: 65000, desc: "بزرگ" },
    "شیر عسل": { price: 50000 },
    "شیر شکلات": { price: 50000 },
  },
  "آب میوه": {
    "آب سیب": { price: 40000 },
    "آب آلبالو": { price: 40000 },
    "آب انبه": { price: 40000 },
    "آب پرتقال": { price: 40000 },
    "آب انار": { price: 40000 },
  },
  "نوشیدنی خنک": {
    "شیر موز": { price: 55000 },
    "شیر خرما": { price: 55000 },
    "انرژی زا": { price: 35000 },
    نوشابه: { price: 15000 },
  },
  فراپه: {
    "فراپه شکلات": { price: 65000 },
    "فراپه موز": { price: 70000 },
    "فراپه توت فرنگی": { price: 60000 },
    "فراپاچینو کارامل": { price: 75000 },
    "فراپه وانیل": { price: 60000 },
  },
  "کیک و بستنی": {
    "کیک روز": { price: 45000 },
    "کیک بستنی": { price: 60000 },
    "کیک بستنی مخصوص": { price: 75000 },
  },
  اسموتی: {
    "اسموتی موز": { price: 65000 },
    "اسموتی توت فرنگی": { price: 65000 },
    "اسموتی شکلات": { price: 65000 },
    "اسموتی کره بادوم زمینی": { price: 70000 },
  },
  شیک: {
    "شیک شکلات": { price: 70000 },
    "شیک نسکافه": { price: 70000 },
    "شیک وانیل": { price: 70000 },
    "شیک موز": { price: 70000 },
    "شیک توت فرنگی": { price: 70000 },
    "شیک نوتلا": { price: 75000 },
    "شیک ترامیسولا": { price: 65000 },
    "شیک ویژه": { price: 90000, desc: "نوتلا + اسپرسو" },
    "نوتلا توت فرنگی": { price: 75000 },
    "نوتلا موز": { price: 80000 },
    "بیسکو شیک": { price: 65000 },
  },
  گلاسه: {
    "کافه گلاسه": { price: 65000 },
    "سیب گلاسه": { price: 60000 },
    "آلبالو گلاسه": { price: 60000 },
    "پرتقال گلاسه": { price: 60000 },
    "موز گلاسه": { price: 65000 },
    "شکلات گلاسه": { price: 65000 },
    "کوکا گلاسه": { price: 55000 },
    "وانیل گلاسه": { price: 55000 },
  },
  کوکتل: {
    موهیتو: { price: 60000 },
    لیموناد: { price: 60000 },
    "کوکتل جامائیکا": { price: 60000 },
    "کوکتل ترش": { price: 60000 },
    "کوکتل هاوایی": { price: 60000 },
    "کوکتل بلوهاوایی": { price: 60000 },
    "کوکتل چری وری": { price: 60000 },
  },
  "میان وعده": {
    "چیپس و پنیر": { price: 70000 },
    "اسنک دو تیکه": { price: 50000 },
    "اسنک چهار تیکه": { price: 70000 },
    "پاستا آلفردو": { price: 90000 },
    "سالاد ماکارونی": { price: 70000 },
    "سالاد سزار": { price: 85000 },
    "سیب زمینی سرخ کرده": { price: 65000 },
    "سیب زمینی ویژه": { price: 90000, desc: "قارچ + پنیر + ژامبون" },
    "سالاد همراه با وعده غذایی": { price: 25000 },
  },
};

export default function MenuPage(props: {}) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center p-5">
      <button
        onClick={() => router.push("/")}
        className="flex flex-row items-center space-x-5 mb-10"
      >
        <Image src={Logo} className="w-20 h-20" alt="logo" />
        <h1 className="text-4xl  text-text">Raha Caffe</h1>
      </button>
      <div
        style={{ direction: "rtl" }}
        className="w-full gap-10 grid grid-cols-auto"
      >
        {Object.entries(data).map((item, index) => (
          <Box key={index} title={item[0]} data={item[1]} />
        ))}
      </div>
    </div>
  );
}
