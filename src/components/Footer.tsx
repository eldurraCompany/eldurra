import * as React from 'react';
import { Facebook,  Instagram,
 // Twitter,
  // Linkedin, Youtube
 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'شركة درة العالم' : 'WORLD DURRA CO'}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mahmoudeosama2" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/eldurraworld/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
                {/* <a href="https://www.linkedin.com/in/mahmoud-osama-6030a52a3/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                  <Linkedin size={20} />
                </a> */}
              {/* <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#properties" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.properties')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.contact')}</a></li>
            </ul>
            
            <div className="mt-6 space-y-3">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">{t('footer.companies')}</h4>
                <p className="text-gray-300">
                  {language === 'ar' ? 'شركة درة العالم' : 'WORLD DURRA CO'}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-amber-400">{t('footer.services')}</h4>
                <p className="text-gray-300">
                  {language === 'ar' ? 'إدارة وتأجير العقارات والاستثمار العقاري' : 'Property Management, Leasing & Real Estate Investment'}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>الهاتف: +965 2226 9916</li>
              <li>durraworld.co@gmail.com</li>
              <li>الكويت - المرقاب</li>
              <li>شارع خالد بن الوليد</li>
              <li>برج مزايا 1 - الدور 11</li>
              <li>مكتب رقم: ب 1</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {language === 'ar' ? 'شركة درة العالم' : 'WORLD DURRA CO'}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;