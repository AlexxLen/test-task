type formatDateTimeOptions = {
  day?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
};

type formatDateTimeType = (date: Date, locale?: string, options?: formatDateTimeOptions) => string;

const defaultOptions: formatDateTimeOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const formatDateTime: formatDateTimeType = (date, locale = 'ru-RU', options) => {
  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
};
