import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    vietnamese: {
      translation: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        services: 'Dịch vụ',
        portfolio: 'Danh mục',
        gallery: 'Thư viện',
        faq: 'Hỏi đáp',
        ourTeam: 'Đội ngũ',
        career: 'Tuyển dụng',
        contact: 'Liên hệ',
        dashboard: 'Bảng điều khiển',
        blog: 'Bài viết',
        team: 'Đội ngũ',
        booking: 'Đặt lịch',
        login: 'Đăng nhập',
        contact_us: 'Liên hệ',
      },
    },
    english: {
      translation: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        gallery: 'Gallery',
        faq: 'FAQ',
        ourTeam: 'Our Team',
        career: 'Career',
        contact: 'Contact',
        dashboard: 'Dashboard',
        blog: 'Blog',
        team: 'Our Team',
        booking: 'Booking',
        login: 'login',
        contact_us: 'contact us',
      },
    },
  },
  lng: 'vietnamese',
  fallbackLng: 'vietnamese',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
