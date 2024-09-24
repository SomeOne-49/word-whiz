import { clsx, type ClassValue } from 'clsx';
import qs from 'query-string';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const speakText = (text: string, lang = 'en-US') => {
  console.log(text);

  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(text); // إنشاء كائن للنطق
    speech.lang = lang; // تحديد اللغة (يمكنك تغييرها)
    speech.pitch = 1; // درجة الصوت
    speech.rate = 1; // سرعة الكلام
    speech.volume = 1; // مستوى الصوت
    window.speechSynthesis.speak(speech); // تفعيل النطق
  } else {
    alert('متصفحك لا يدعم ميزة تحويل النص إلى كلام.');
  }
};

type FormUrlParams = {
  params: string;
  key: string;
  value: string;
};

export const formUrlQuery = ({ params, key, value }: FormUrlParams) => {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export const removeKeyesFromQuery = ({
  params,
  keys,
}: {
  params: string;
  keys: string[];
}) => {
  const currentUrl = qs.parse(params);

  keys.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
