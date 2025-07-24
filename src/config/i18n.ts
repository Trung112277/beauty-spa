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
        about_company: 'Về chúng tôi',
        resent_post: 'Bài viết mới',
        useful_links: 'Liên kết',
        newsletter: 'Nhận thông báo',
        social_links: 'Mạng xã hội',
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
        login: 'Login',
        contact_us: 'Contact us',
        about_company: 'About Company',
        resent_post: 'Resent Post',
        useful_links: 'Useful links',
        newsletter: 'Newsletter',
        social_links: 'Social Links',
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
