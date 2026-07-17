export type Locale = "en" | "zh";

export type PortfolioItem = {
  id: string;
  src: string;
  alt: { en: string; zh: string };
  category: "editorial" | "beauty" | "lifestyle";
  aspect: "portrait" | "tall" | "square";
};

export const portfolio: PortfolioItem[] = [
  {
    id: "01",
    src: "/images/hero.jpg",
    alt: {
      en: "Juliana Liu in sparkle editorial portrait",
      zh: "Juliana Liu 亮片編輯肖像",
    },
    category: "editorial",
    aspect: "portrait",
  },
  {
    id: "02",
    src: "/images/work-01.jpg",
    alt: {
      en: "Full-body studio look with metallic bodysuit",
      zh: "金屬連身衣工作室全身造型",
    },
    category: "editorial",
    aspect: "tall",
  },
  {
    id: "03",
    src: "/images/work-02.jpg",
    alt: {
      en: "Lifestyle balcony portrait with lace detail",
      zh: "陽台生活風格肖像",
    },
    category: "lifestyle",
    aspect: "portrait",
  },
  {
    id: "04",
    src: "/images/work-03.jpg",
    alt: {
      en: "Street style in camel coat and denim",
      zh: "駱駝色大衣街頭造型",
    },
    category: "lifestyle",
    aspect: "portrait",
  },
  {
    id: "05",
    src: "/images/work-04.jpg",
    alt: {
      en: "Coastal swimwear editorial on rocks",
      zh: "海岸泳裝編輯寫真",
    },
    category: "editorial",
    aspect: "portrait",
  },
  {
    id: "06",
    src: "/images/work-05.jpg",
    alt: {
      en: "Beauty close-up with natural light",
      zh: "自然光美妝特寫",
    },
    category: "beauty",
    aspect: "portrait",
  },
  {
    id: "07",
    src: "/images/work-07.jpg",
    alt: {
      en: "Black dress seated studio portrait",
      zh: "黑色洋裝坐姿棚拍",
    },
    category: "editorial",
    aspect: "portrait",
  },
  {
    id: "08",
    src: "/images/about.jpg",
    alt: {
      en: "Sheer black studio fashion pose",
      zh: "黑色薄紗棚拍造型",
    },
    category: "editorial",
    aspect: "tall",
  },
];

export const measurements = [
  { key: "height", en: "Height", zh: "身高", value: "161 cm" },
  { key: "bust", en: "Bust", zh: "胸圍", value: "85 cm" },
  { key: "waist", en: "Waist", zh: "腰圍", value: "66 cm" },
  { key: "hips", en: "Hips", zh: "臀圍", value: "91 cm" },
  { key: "shoes", en: "Shoes", zh: "鞋碼", value: "24.5 cm" },
  { key: "hair", en: "Hair", zh: "髮色", value: { en: "Black", zh: "黑色" } },
  { key: "eyes", en: "Eyes", zh: "瞳色", value: { en: "Brown", zh: "棕色" } },
  {
    key: "languages",
    en: "Languages",
    zh: "語言",
    value: { en: "Chinese, English", zh: "中文、英文" },
  },
] as const;

export const services = [
  { en: "Editorial", zh: "編輯拍攝" },
  { en: "Beauty", zh: "美妝" },
  { en: "Lifestyle", zh: "生活風格" },
  { en: "E-commerce / Lookbook", zh: "電商／型錄" },
  { en: "Brand campaigns", zh: "品牌形象" },
  { en: "Creative collaborations", zh: "創意合作" },
] as const;

export const projectTypes = [
  { value: "editorial", en: "Editorial", zh: "編輯拍攝" },
  { value: "beauty", en: "Beauty", zh: "美妝" },
  { value: "lifestyle", en: "Lifestyle", zh: "生活風格" },
  { value: "ecommerce", en: "E-commerce / Lookbook", zh: "電商／型錄" },
  { value: "campaign", en: "Brand campaign", zh: "品牌形象" },
  { value: "creative", en: "Creative collaboration", zh: "創意合作" },
  { value: "other", en: "Other", zh: "其他" },
] as const;

export const copy = {
  en: {
    brand: "Juliana Liu",
    role: "Model · Taiwan",
    tagline:
      "Editorial presence. Natural confidence. Available for fashion, beauty, lifestyle, and creative collaborations.",
    book: "Book Juliana",
    portfolio: "View portfolio",
    nav: {
      work: "Work",
      about: "Profile",
      details: "Details",
      services: "Services",
      book: "Book",
      menu: "Menu",
      close: "Close",
    },
    work: {
      title: "Selected work",
      all: "All",
      editorial: "Editorial",
      beauty: "Beauty",
      lifestyle: "Lifestyle",
    },
    about: {
      title: "Profile",
      bio: "Juliana Liu is a Taiwan-based model with a calm editorial presence and natural confidence on camera. Fluent in Chinese and English, she works across fashion, beauty, lifestyle, and creative collaborations.",
    },
    details: {
      title: "Model details",
      download: "Download comp card",
      note: "Comp card PDF available on request while the final file is prepared.",
    },
    services: {
      title: "Availability",
      subtitle: "Open to projects in Taiwan and selected travel.",
    },
    booking: {
      title: "Let’s create something memorable.",
      cta: "Request availability",
      secondary: "Or reach out on social",
      instagram: "Instagram",
      facebook: "Facebook",
      formTitle: "Project inquiry",
      quickInquiry: "Get in touch",
      detailedInquiry: "Project inquiry",
      name: "Name / company",
      email: "Email or preferred contact",
      projectType: "Project type",
      dates: "Shoot date or date range",
      location: "Location",
      duration: "Estimated duration",
      budget: "Budget range (optional)",
      details: "Project details",
      message: "Message",
      submit: "Send inquiry",
      sending: "Sending…",
      successTitle: "Inquiry received",
      successBody:
        "Thank you. Juliana will review your project and respond within 2–3 business days.",
      another: "Send another inquiry",
      sticky: "Book",
      required: "Required",
    },
    footer: {
      rights: "All rights reserved.",
      placeholder:
        "Prototype images cropped from provided social screenshots for concept review. Final site will use original high-resolution files.",
    },
  },
  zh: {
    brand: "Juliana Liu",
    role: "模特兒 · 台灣",
    tagline:
      "具編輯感的氣質與自然自信。開放時尚、美妝、生活風格與創意合作邀約。",
    book: "預約 Juliana",
    portfolio: "查看作品",
    nav: {
      work: "作品",
      about: "簡介",
      details: "資料",
      services: "服務",
      book: "預約",
      menu: "選單",
      close: "關閉",
    },
    work: {
      title: "精選作品",
      all: "全部",
      editorial: "編輯",
      beauty: "美妝",
      lifestyle: "生活",
    },
    about: {
      title: "簡介",
      bio: "Juliana Liu 是以台灣為基地的模特兒，鏡頭前展現沉穩的編輯氣質與自然自信。通中文與英文，合作範疇涵蓋時尚、美妝、生活風格與創意專案。",
    },
    details: {
      title: "模特資料",
      download: "下載資料卡",
      note: "正式 PDF 資料卡準備中，目前可先透過表單索取。",
    },
    services: {
      title: "可接案類型",
      subtitle: "以台灣為主，可評估出差拍攝。",
    },
    booking: {
      title: "一起做出令人記住的作品。",
      cta: "詢問檔期",
      secondary: "或透過社群聯繫",
      instagram: "Instagram",
      facebook: "Facebook",
      formTitle: "專案詢問",
      quickInquiry: "與我聯繫",
      detailedInquiry: "專案詢問",
      name: "姓名／公司",
      email: "Email 或偏好聯絡方式",
      projectType: "專案類型",
      dates: "拍攝日期或區間",
      location: "地點",
      duration: "預估時長",
      budget: "預算範圍（選填）",
      details: "專案說明",
      message: "訊息",
      submit: "送出詢問",
      sending: "送出中…",
      successTitle: "已收到詢問",
      successBody: "感謝您。Juliana 將審閱專案內容，並於 2–3 個工作天內回覆。",
      another: "再送一則詢問",
      sticky: "預約",
      required: "必填",
    },
    footer: {
      rights: "版權所有。",
      placeholder:
        "原型圖片裁切自提供的社群截圖，僅供概念審閱。正式網站將替換為原始高解析檔案。",
    },
  },
} as const;

export function t(locale: Locale) {
  return copy[locale];
}

export function measureValue(
  value: string | { en: string; zh: string },
  locale: Locale,
): string {
  return typeof value === "string" ? value : value[locale];
}
