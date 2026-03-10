import { create } from 'zustand';

export type Language = 'uz' | 'ru';

export const uz = {
  dashboard: 'Бошқарув панели',
  fleet: 'Транспортлар',
  drivers: 'Ҳайдовчилар',
  fuel: 'Ёқилғи',
  waybills: 'Йўл варақаси',
  reports: 'Ҳисоботлар',
  liveTracking: 'Тезкор харита',
  smartStart: 'Смарт Старт',
  accessControl: 'Face ID Назорат',
  medicalChecks: 'Тиббий кўрик',
  vehicleInspections: 'Техник кўрик',
  totalVehicles: 'Жами транспорт',
  activeTrips: 'Фаол сафарлар',
  inRepair: 'Таъмирда',
  fuelEfficiency: 'Ёқилғи самарадорлиги',
  benzin: 'Бензин',
  diesel: 'Салярка',
  propan: 'Пропан',
  metan: 'Метан',
};

export const ru = {
  dashboard: 'Дашборд',
  fleet: 'Транспорт',
  drivers: 'Водители',
  fuel: 'Топливо',
  waybills: 'Путевой лист',
  reports: 'Отчёты',
  liveTracking: 'Живая карта',
  smartStart: 'Смарт Старт',
  accessControl: 'Face ID Контроль',
  medicalChecks: 'Медосмотр',
  vehicleInspections: 'Техконтроль',
  totalVehicles: 'Всего ТС',
  activeTrips: 'Активные рейсы',
  inRepair: 'В ремонте',
  fuelEfficiency: 'Топливная эфф.',
  benzin: 'Бензин',
  diesel: 'Дизель (Салярка)',
  propan: 'Пропан',
  metan: 'Метан',
};

export const dicts = { uz, ru };

interface I18nState {
  lang: Language;
  t: (key: keyof typeof uz) => string;
  setLang: (lang: Language) => void;
}

export const useI18n = create<I18nState>((set, get) => ({
  lang: 'uz',
  t: (key) => dicts[get().lang][key],
  setLang: (lang) => set({ lang }),
}));
