import { create } from 'zustand';

export type Language = 'uz' | 'ru';

export const uz = {
  dashboard: 'Бошқарув панели',
  fleet: 'Транспортлар',
  drivers: 'Ҳайдовчилар',
  fuel: 'Ёқилғи',
  waybills: 'Йўл варақаси',
  reports: 'Ҳисоботлар',
  cargoStats: 'Юк ташиш ҳажми',
  liveTracking: 'Тезкор харита',
  smartStart: 'Смарт Старт',
  accessControl: 'Face ID Назорат',
  medicalChecks: 'Тиббий кўрик',
  vehicleInspections: 'Техник кўрик',
  totalVehicles: 'Жами транспорт',
  tonnage: 'Юк кўтариши',
  volume: 'Ҳажми',
  cargoType: 'Юк тури',
  weight: 'Оғирлиги',
  utilization: 'Юкланиш самарадорлиги',
  totalWeight: 'Жами ташилган юк',
  activeTrips: 'Фаол сафарлар',
  inRepair: 'Таъмирда',
  fuelEfficiency: 'Ёқилғи самарадорлиги',
  benzin: 'Бензин',
  metan: 'Метан',
  settings: 'Созламалар',
  users: 'Фойдаланувчилар',
  roles: 'Роллар ва ҳуқуқлар',
  admin: 'Администратор',
  dispatcher: 'Диспетчер',
  user: 'Фойдаланувчи',
  manager: 'Менежер',
  save: 'Сақлаш',
  edit: 'Таҳрирлаш',
  delete: 'Ўчириш',
  permissions: 'Рухсатлар',
};

export const ru = {
  dashboard: 'Дашборд',
  fleet: 'Транспорт',
  drivers: 'Водители',
  fuel: 'Топливо',
  waybills: 'Путевой лист',
  reports: 'Отчёты',
  cargoStats: 'Объем перевозок',
  liveTracking: 'Живая карта',
  smartStart: 'Смарт Старт',
  accessControl: 'Face ID Контроль',
  medicalChecks: 'Медосмотр',
  vehicleInspections: 'Техконтроль',
  totalVehicles: 'Всеgo ТС',
  tonnage: 'Грузоподъемность',
  volume: 'Объем',
  cargoType: 'Тип груза',
  weight: 'Вес',
  utilization: 'Эффективность загрузки',
  totalWeight: 'Всего перевезено',
  activeTrips: 'Активные рейсы',
  inRepair: 'В ремонте',
  fuelEfficiency: 'Топливная эфф.',
  benzin: 'Бензин',
  diesel: 'Дизель (Салярка)',
  propan: 'Пропан',
  metan: 'Метан',
  settings: 'Настройки',
  users: 'Пользователи',
  roles: 'Роли и права',
  admin: 'Администратор',
  dispatcher: 'Диспетчер',
  user: 'Пользователь',
  manager: 'Менеджер',
  save: 'Сохранить',
  edit: 'Редактировать',
  delete: 'Удалить',
  permissions: 'Разрешения',
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
