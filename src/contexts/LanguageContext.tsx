import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Projects',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'WORLD DURRA CO',
    'hero.subtitle': 'For Management and Leasing Owned or Leased Real Estate • Authorized Agent: MÖVENPICK',
    'hero.cta': 'Contact Us',
    
    // Features
    'features.security.title': 'Premium Management',
    'features.security.description': 'Professional management under Mövenpick brand standards',
    'features.quality.title': 'International Standards',
    'features.quality.description': 'Operated by Accor Group with global excellence',
    'features.service.title': 'Luxury Experience',
    'features.service.description': 'Five-star hotel and modern shopping mall',
    'features.location.title': 'Prime Location',
    'features.location.description': 'Strategic location in the heart of Jabriya',
    
    // Properties







    'properties.title': 'PROJECT COMPONENTS',


    'properties.hotel.title': 'MÖVENPICK HOTEL',
    'properties.hotel.description': 'Modern 5-star hotel with luxury suites & rooms, wellness center & gym, meeting & event halls, private parking spaces, variety swimming pools, men\'s and women\'s salon, and 4 luxurious penthouses each with a private pool.',
    'properties.hotel.features.0': 'Luxury suites & rooms',
    'properties.hotel.features.1': 'Wellness center & gym',
    'properties.hotel.features.2': '4 luxurious penthouses with private pools',












    'properties.mall.title': 'HAMED AWADH INTERNATIONAL REAL ESTATE',
    'properties.mall.description': 'Hamed Awadh International Real Estate owns a diverse portfolio of residential, commercial, and investment projects across strategic urban areas in Kuwait.',
    'properties.mall.features.0': 'Residential complexes',
    'properties.mall.features.1': 'Commercial developments',
    'properties.mall.features.2': 'Investment properties',
    'properties.portfolio.title': 'REAL ESTATE PORTFOLIO',
    'properties.portfolio.description': 'Hamed Awadh International Real Estate owns a diverse portfolio of residential, commercial, and investment projects across strategic urban areas in Kuwait.',
    'properties.portfolio.features.0': 'Residential complexes',
    'properties.portfolio.features.1': 'Commercial developments',
    'properties.portfolio.features.2': 'Investment properties',
    'properties.jabriya.title': 'JABRIYA PROJECTS',
    'properties.jabriya.description': 'Mövenpick Hotel & Mall and Mahboula residential complex of 16 buildings in strategic locations.',
    'properties.jabriya.features.0': 'Mövenpick Hotel & Mall',
    'properties.jabriya.features.1': 'Mahboula - Block 3: 16 buildings',
    'properties.jabriya.features.2': 'Prime Jabriya location',
    'properties.salmiya.title': 'SALMIYA DEVELOPMENTS',
    'properties.salmiya.description': 'Multiple premium complexes including La Plage, Al Hamra, Al Rayan complexes and Salam Mall.',
    'properties.salmiya.features.0': 'La Plage Complex',
    'properties.salmiya.features.1': 'Al Hamra & Al Rayan Complexes',
    'properties.salmiya.features.2': 'Salam Mall',
    
    // Additional Properties
    'properties.residential.title': 'Premium Residential Complex',
    'properties.residential.description': 'Modern residential towers with luxury amenities and prime location in Kuwait\'s most sought-after neighborhoods.',
    'properties.residential.features.0': 'Luxury apartments and penthouses',
    'properties.residential.features.1': 'Premium amenities and facilities',
    'properties.residential.features.2': 'Strategic location with easy access',
    
    'properties.luxury.title': 'Luxury Development Project',
    'properties.luxury.description': 'High-end residential and commercial development featuring contemporary architecture and world-class facilities.',
    'properties.luxury.features.0': 'Contemporary architectural design',
    'properties.luxury.features.1': 'World-class facilities',
    'properties.luxury.features.2': 'Premium location and accessibility',
    
    'properties.btbuilding.title': 'Blue Tower Complex',
    'properties.btbuilding.description': 'Iconic blue tower offering premium office spaces and commercial units with stunning city views and modern infrastructure.',
    'properties.btbuilding.features.0': 'Premium office spaces',
    'properties.btbuilding.features.1': 'Modern infrastructure',
    'properties.btbuilding.features.2': 'Stunning city views',
    
    'properties.lolohyber.title': 'Lulu Hypermarket Complex',
    'properties.lolohyber.description': 'Major retail and commercial complex anchored by Lulu Hypermarket, offering diverse shopping and dining experiences.',
    'properties.lolohyber.features.0': 'Lulu Hypermarket anchor tenant',
    'properties.lolohyber.features.1': 'Diverse retail and dining options',
    'properties.lolohyber.features.2': 'High foot traffic location',
    
    'properties.lolohyber2.title': 'Lulu Commercial Center',
    'properties.lolohyber2.description': 'Extended commercial development with additional retail spaces, restaurants, and service providers complementing the main hypermarket.',
    'properties.lolohyber2.features.0': 'Extended retail spaces',
    'properties.lolohyber2.features.1': 'Restaurant and service areas',
    'properties.lolohyber2.features.2': 'Complementary commercial units',
    
    'properties.lolohyber3.title': 'Lulu Mixed-Use Development',
    'properties.lolohyber3.description': 'Comprehensive mixed-use development combining retail, office, and residential components in a single integrated complex.',
    'properties.lolohyber3.features.0': 'Mixed-use development',
    'properties.lolohyber3.features.1': 'Integrated retail and office spaces',
    'properties.lolohyber3.features.2': 'Residential components',
    
    'properties.altijari.title': 'Al Tijari Commercial Tower',
    'properties.altijari.description': 'Prestigious commercial tower in Kuwait\'s business district, offering premium office spaces and corporate facilities.',
    'properties.altijari.features.0': 'Premium office spaces',
    'properties.altijari.features.1': 'Business district location',
    'properties.altijari.features.2': 'Corporate facilities',
    
    'properties.daralawad.title': 'Dar Al Awadh Complex',
    'properties.daralawad.description': 'Elegant residential and commercial complex featuring traditional Kuwaiti architectural elements with modern amenities.',
    'properties.daralawad.features.0': 'Traditional Kuwaiti architecture',
    'properties.daralawad.features.1': 'Modern amenities',
    'properties.daralawad.features.2': 'Residential and commercial units',
    
    'properties.building1.title': 'Premium Tower Development',
    'properties.building1.description': 'State-of-the-art tower development with cutting-edge design and premium facilities in a prime Kuwait location.',
    'properties.building1.features.0': 'Cutting-edge design',
    'properties.building1.features.1': 'Premium facilities',
    'properties.building1.features.2': 'Prime Kuwait location',
    
    'properties.building2.title': 'Modern Commercial Complex',
    'properties.building2.description': 'Contemporary commercial complex designed for modern businesses with flexible spaces and advanced infrastructure.',
    'properties.building2.features.0': 'Contemporary design',
    'properties.building2.features.1': 'Flexible business spaces',
    'properties.building2.features.2': 'Advanced infrastructure',
    
    'properties.building3.title': 'Integrated Business Center',
    'properties.building3.description': 'Comprehensive business center offering office spaces, meeting facilities, and support services for growing enterprises.',
    'properties.building3.features.0': 'Comprehensive office spaces',
    'properties.building3.features.1': 'Meeting facilities',
    'properties.building3.features.2': 'Business support services',

    // About
    'about.title': 'About WORLD DURRA CO',
    'about.description': 'A leading company specialized in management and leasing of owned or leased real estate properties. We work with authorized agents including MÖVENPICK to ensure the highest standards of property management and leasing services.',
    'about.stats.experience': 'Years of Excellence',
    'about.stats.projects': 'Managed Properties',
    'about.stats.locations': 'Strategic Locations',
    'about.hamed.title': 'HAMED AWADH INTERNATIONAL REAL ESTATE',
    'about.hamed.description': 'A leading real estate firm in Kuwait, owning a diverse portfolio of residential, commercial, and investment projects across strategic urban areas.',
    
    // Location
    'location.title': 'Our Locations',
    'location.description': 'Strategic presence across Kuwait\'s prime areas with diverse real estate portfolio.',
    'location.headquarters': 'Main Office',
    'location.projects': 'Project Areas',
    'location.projectsText': 'Jabriya, Salmiya, Hawally, Rumaithiya, and more',
    'location.coordinates': 'Coordinates: 29.3743° N, 47.9894° E',
    'location.openInMaps': 'Open in Google Maps',
    
    // Contact
    'contact.title': 'Contact WORLD DURRA CO',
    'contact.description': 'Get in touch with our professional team for all your hospitality and real estate needs.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.description': 'WORLD DURRA CO - For Management and Leasing Owned or Leased Real Estate. Authorized Agent: MÖVENPICK.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.agent': 'Authorized Agent',
    'footer.company': 'Company',
    'footer.services': 'Services',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in learning more about Mövenpick Hotel & Mall Al-Jabriya project.',
    'whatsapp.label': 'Chat on WhatsApp'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.properties': 'المشاريع',
    'nav.about': 'من نحن',
    'nav.location': 'الموقع',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'شركة الدرة العالمية',
    'hero.subtitle': 'لإدارة وتأجير العقارات المملوكة أو المؤجرة • الوكيل المعتمد: موڤنبيك',
    'hero.cta': 'تواصل معنا',
    
    // Features
    'features.security.title': 'إدارة متميزة',
    'features.security.description': 'إدارة احترافية وفق معايير علامة موڤنبيك',
    'features.quality.title': 'معايير عالمية',
    'features.quality.description': 'مُشغل من قبل مجموعة أكور بتميز عالمي',
    'features.service.title': 'تجربة فاخرة',
    'features.service.description': 'فندق خمس نجوم ومول تجاري عصري',
    'features.location.title': 'موقع استراتيجي',
    'features.location.description': 'موقع استراتيجي في قلب منطقة الجابرية',
    
    // Properties
    'properties.title': 'مكونات المشروع',
    'properties.hotel.title': 'فندق موڤنبيك',
    'properties.hotel.description': 'فندق خمس نجوم بتصميم عصري مع أجنحة وغرف فاخرة، مركز صحي وناد رياضي، قاعات اجتماعات ومناسبات، مواقف سيارات، مسابح متنوعة، صالون رجالي ونسائي، و4 بنتهاوس فاخرة كل منها مزودة بمسبح خاص.',
    'properties.hotel.features.0': 'أجنحة وغرف فاخرة',
    'properties.hotel.features.1': 'مركز صحي وناد رياضي',
    'properties.hotel.features.2': '4 بنتهاوس فاخرة مع مسابح خاصة',
    'properties.mall.title': "شركة حامد عوض العقارية",
    'properties.mall.description': 'تمتلك شركة حامد عوض إنترناشونال العقارية محفظة استثمارية واسعة من المشاريع السكنية والتجارية والاستثمارية في أهم المناطق الحيوية بالكويت.',
    'properties.mall.features.0': 'مجمعات سكنية',
    'properties.mall.features.1':  'تطوير تجاري',
    'properties.mall.features.2':'عقارات استثمارية',
    'properties.portfolio.title': 'المحفظة العقارية',
    'properties.portfolio.description': 'تمتلك شركة حامد عوض إنترناشونال العقارية محفظة استثمارية واسعة من المشاريع السكنية والتجارية والاستثمارية في أهم المناطق الحيوية بالكويت.',
    'properties.portfolio.features.0': 'مجمعات سكنية',
    'properties.portfolio.features.1': 'تطوير تجاري',
    'properties.portfolio.features.2': 'عقارات استثمارية',
    'properties.jabriya.title': 'مشاريع الجابرية',
    'properties.jabriya.description': 'فندق ومول موڤنبيك ومجمع المهبولة السكني المكون من 16 عمارة في مواقع استراتيجية.',
    'properties.jabriya.features.0': 'فندق ومول موڤنبيك',
    'properties.jabriya.features.1': 'المهبولة - قطعة 3: 16 عمارة',
    'properties.jabriya.features.2': 'موقع متميز في الجابرية',
    'properties.salmiya.title': 'تطوير السالمية',
    'properties.salmiya.description': 'مجمعات متميزة متعددة تشمل مجمع لابلاج والحمراء والريان ومجمع السلام مول.',
    'properties.salmiya.features.0': 'مجمع لابلاج',
    'properties.salmiya.features.1': 'مجمع الحمراء والريان',
    'properties.salmiya.features.2': 'مجمع السلام مول',
    
    // Additional Properties
    'properties.residential.title': 'مجمع سكني متميز',
    'properties.residential.description': 'أبراج سكنية حديثة مع مرافق فاخرة وموقع متميز في أرقى أحياء الكويت.',
    'properties.residential.features.0': 'شقق فاخرة وبنتهاوس',
    'properties.residential.features.1': 'مرافق ومنشآت متميزة',
    'properties.residential.features.2': 'موقع استراتيجي وسهولة الوصول',
    
    'properties.luxury.title': 'مشروع تطوير فاخر',
    'properties.luxury.description': 'تطوير سكني وتجاري راقي يتميز بالعمارة المعاصرة والمرافق عالمية المستوى.',
    'properties.luxury.features.0': 'تصميم معماري معاصر',
    'properties.luxury.features.1': 'مرافق عالمية المستوى',
    'properties.luxury.features.2': 'موقع متميز وسهولة الوصول',
    
    'properties.btbuilding.title': 'مجمع البرج الأزرق',
    'properties.btbuilding.description': 'برج أيقوني أزرق يوفر مساحات مكتبية متميزة ووحدات تجارية مع إطلالات خلابة على المدينة وبنية تحتية حديثة.',
    'properties.btbuilding.features.0': 'مساحات مكتبية متميزة',
    'properties.btbuilding.features.1': 'بنية تحتية حديثة',
    'properties.btbuilding.features.2': 'إطلالات خلابة على المدينة',
    
    'properties.lolohyber.title': 'مجمع لولو هايبر ماركت',
    'properties.lolohyber.description': 'مجمع تجاري وتسوق كبير يضم لولو هايبر ماركت، ويوفر تجارب تسوق وطعام متنوعة.',
    'properties.lolohyber.features.0': 'لولو هايبر ماركت كمستأجر رئيسي',
    'properties.lolohyber.features.1': 'خيارات تسوق وطعام متنوعة',
    'properties.lolohyber.features.2': 'موقع عالي الحركة',
    
    'properties.lolohyber2.title': 'مركز لولو التجاري',
    'properties.lolohyber2.description': 'تطوير تجاري موسع مع مساحات تجارية إضافية ومطاعم ومقدمي خدمات يكمل الهايبر ماركت الرئيسي.',
    'properties.lolohyber2.features.0': 'مساحات تجارية موسعة',
    'properties.lolohyber2.features.1': 'مناطق مطاعم وخدمات',
    'properties.lolohyber2.features.2': 'وحدات تجارية مكملة',
    
    'properties.lolohyber3.title': 'تطوير لولو متعدد الاستخدامات',
    'properties.lolohyber3.description': 'تطوير شامل متعدد الاستخدامات يجمع بين المكونات التجارية والمكتبية والسكنية في مجمع واحد متكامل.',
    'properties.lolohyber3.features.0': 'تطوير متعدد الاستخدامات',
    'properties.lolohyber3.features.1': 'مساحات تجارية ومكتبية متكاملة',
    'properties.lolohyber3.features.2': 'مكونات سكنية',
    
    'properties.altijari.title': 'برج التجاري',
    'properties.altijari.description': 'برج تجاري مرموق في منطقة الأعمال بالكويت، يوفر مساحات مكتبية متميزة ومرافق شركات.',
    'properties.altijari.features.0': 'مساحات مكتبية متميزة',
    'properties.altijari.features.1': 'موقع في منطقة الأعمال',
    'properties.altijari.features.2': 'مرافق شركات',
    
    'properties.daralawad.title': 'مجمع دار العوض',
    'properties.daralawad.description': 'مجمع سكني وتجاري أنيق يتميز بعناصر العمارة الكويتية التقليدية مع المرافق الحديثة.',
    'properties.daralawad.features.0': 'عمارة كويتية تقليدية',
    'properties.daralawad.features.1': 'مرافق حديثة',
    'properties.daralawad.features.2': 'وحدات سكنية وتجارية',
    
    'properties.building1.title': 'تطوير برج متميز',
    'properties.building1.description': 'تطوير برج حديث بتصميم متطور ومرافق متميزة في موقع رئيسي بالكويت.',
    'properties.building1.features.0': 'تصميم متطور',
    'properties.building1.features.1': 'مرافق متميزة',
    'properties.building1.features.2': 'موقع رئيسي بالكويت',
    
    'properties.building2.title': 'مجمع تجاري حديث',
    'properties.building2.description': 'مجمع تجاري معاصر مصمم للأعمال الحديثة مع مساحات مرنة وبنية تحتية متقدمة.',
    'properties.building2.features.0': 'تصميم معاصر',
    'properties.building2.features.1': 'مساحات أعمال مرنة',
    'properties.building2.features.2': 'بنية تحتية متقدمة',
    
    'properties.building3.title': 'مركز أعمال متكامل',
    'properties.building3.description': 'مركز أعمال شامل يوفر مساحات مكتبية ومرافق اجتماعات وخدمات دعم للمؤسسات النامية.',
    'properties.building3.features.0': 'مساحات مكتبية شاملة',
    'properties.building3.features.1': 'مرافق اجتماعات',
    'properties.building3.features.2': 'خدمات دعم الأعمال',
    
    // About
    'about.title': 'حول شركة الدرة العالمية',
    'about.description': 'شركة رائدة متخصصة في إدارة وتأجير العقارات المملوكة أو المؤجرة. نعمل مع وكلاء معتمدين مثل موڤنبيك لضمان أعلى معايير إدارة وتأجير العقارات.',
    'about.stats.experience': 'سنوات التميز',
    'about.stats.projects': 'العقارات المُدارة',
    'about.stats.locations': 'المواقع الاستراتيجية',
    'about.hamed.title': 'شركة حامد عوض إنترناشونال العقارية',
    'about.hamed.description': 'شركة رائدة في السوق العقاري الكويتي، تمتلك محفظة استثمارية واسعة من المشاريع السكنية والاستثمارية والتجارية في أهم المناطق الحيوية.',
    
    // Location
    'location.title': 'مواقعنا',
    'location.description': 'تواجد استراتيجي في أهم مناطق الكويت مع محفظة عقارية متنوعة.',
    'location.headquarters': 'المكتب الرئيسي',
    'location.projects': 'مناطق المشاريع',
    'location.projectsText': 'الجابرية، السالمية، حولي، الرميثية، وأكثر',
    'location.coordinates': 'الإحداثيات: 29.3743° N, 47.9894° E',
    'location.openInMaps': 'فتح في خرائط جوجل',
    
    // Contact
    'contact.title': 'تواصل مع شركة الدرة العالمية',
    'contact.description': 'تواصل مع فريقنا المهني لجميع احتياجاتك الفندقية والعقارية.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'تواصل معنا',
    
    // Footer
    'footer.description': 'شركة الدرة العالمية - لإدارة وتأجير العقارات المملوكة أو المؤجرة. الوكيل المعتمد: موڤنبيك.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.agent': 'الوكيل المعتمد',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بمعرفة المزيد عن خدمات شركة الدرة العالمية العقارية.',
    'whatsapp.label': 'محادثة على واتساب'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};