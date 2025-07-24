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
    'hero.title': 'شركة درة العالم',
    'hero.subtitle': 'شركة متخصصة في إدارة وتأجير العقارات والاستثمار العقاري والضيافة',
    'hero.cta': 'Contact Us',
    
    // Features
    'features.security.title': 'إدارة عقارية متميزة',
    'features.security.description': 'خدمات إدارة عقارية احترافية وشاملة',
    'features.quality.title': 'استثمار عقاري',
    'features.quality.description': 'حلول استثمارية عقارية مبتكرة ومربحة',
    'features.service.title': 'خدمات الضيافة',
    'features.service.description': 'مشاريع فندقية وخدمات ضيافة متطورة',
    'features.location.title': 'مواقع استراتيجية',
    'features.location.description': 'عقارات في أفضل المواقع بالكويت',
    
    // Properties







    'properties.title': 'مشاريعنا',


    'properties.hotel.title': 'فندق تحت الإنشاء - الجابرية',
    'properties.hotel.description': 'مشروع فندقي متطور تحت الإنشاء في منطقة الجابرية، يتضمن غرف وأجنحة فاخرة، مركز صحي، قاعات مؤتمرات، مواقف سيارات، ومرافق ترفيهية متنوعة.',
    'properties.hotel.features.0': 'غرف وأجنحة فاخرة',
    'properties.hotel.features.1': 'مركز صحي وقاعات مؤتمرات',
    'properties.hotel.features.2': 'مرافق ترفيهية ومواقف سيارات',












    'properties.mahboula.title': 'مجمع المهبولة السكني',
    'properties.mahboula.description': 'مجمع سكني يتكون من 16 عمارة في منطقة المهبولة - قطعة 3، يوفر وحدات سكنية متنوعة بمواصفات عالية.',
    'properties.mahboula.features.0': '16 عمارة سكنية',
    'properties.mahboula.features.1': 'وحدات سكنية متنوعة',
    'properties.mahboula.features.2': 'موقع متميز في المهبولة',
    'properties.residential.title': 'مشاريع فلل سكنية',
    'properties.residential.description': 'مجموعة من الفلل والمنازل السكنية المطورة والمُدارة، تتميز بالتصميم العصري والمواقع المتميزة.',
    'properties.residential.features.0': 'فلل ومنازل سكنية',
    'properties.residential.features.1': 'تصميم عصري ومواصفات عالية',
    'properties.residential.features.2': 'إدارة وصيانة شاملة',
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
    'properties.previous.title': 'مشاريع سابقة',
    'properties.previous.description': 'مشاريع تم إدارتها سابقاً من خلال السيد حامد عوض شخصياً قبل تأسيس شركة درة العالم، تشمل إدارة مول السلام ومجمع الحمراء والتعامل مع علامات تجارية مختلفة مثل لولو هايبر والبنك التجاري.',
    'properties.previous.features.0': 'إدارة مول السلام (فترة محددة)',
    'properties.previous.features.1': 'إدارة مجمع الحمراء (فترة محددة)',
    'properties.previous.features.2': 'التعامل مع علامات تجارية مختلفة',
    'footer.services': 'Services',
    'properties.office.title': 'المكتب الرئيسي',
    'properties.office.description': 'المكتب الرئيسي لشركة درة العالم يقع في أبراج مزايا بالكويت.',
    'properties.office.features.0': 'موقع متميز في أبراج مزايا',
    'properties.office.features.1': 'مكتب حديث ومجهز',
    'properties.office.features.2': 'سهولة الوصول والمواصلات',
    
    // About
    'about.title': 'حول شركة درة العالم',
    'about.description': 'شركة درة العالم هي شركة متخصصة في إدارة وتأجير العقارات والاستثمار العقاري وخدمات الضيافة. نقدم حلولاً شاملة ومتطورة في السوق العقاري الكويتي.',
    'about.stats.experience': 'سنوات الخبرة',
    'about.stats.projects': 'المشاريع المُدارة',
    'about.stats.locations': 'المواقع الاستراتيجية',
    'about.companies.title': 'الشركات التابعة',
    'about.companies.description': 'مجموعة من الشركات المتخصصة تعمل تحت مظلة درة العالم لتقديم خدمات متكاملة.',
    
    // Location
    'location.title': 'موقعنا',
    'location.description': 'المكتب الرئيسي لشركة درة العالم في موقع استراتيجي بالكويت.',
    'location.headquarters': 'المكتب الرئيسي',
    'location.projects': 'مناطق المشاريع',
    'location.projectsText': 'الجابرية، المهبولة، وأكثر',
    'location.coordinates': 'الإحداثيات: 29.3743° N, 47.9894° E',
    'location.openInMaps': 'فتح في خرائط جوجل',
    
    // Contact
    'contact.title': 'تواصل مع شركة درة العالم',
    'contact.description': 'تواصل مع فريقنا المتخصص لجميع احتياجاتك العقارية والاستثمارية.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'تواصل معنا',
    
    // Footer
    'footer.description': 'شركة درة العالم - متخصصة في إدارة وتأجير العقارات والاستثمار العقاري وخدمات الضيافة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.companies': 'الشركات',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بمعرفة المزيد عن خدمات شركة درة العالم.',
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