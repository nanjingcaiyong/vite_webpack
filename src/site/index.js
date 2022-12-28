import { createI18n } from 'vue-i18n';
import languages from '../language'
import au from './au'
import ca from './ca'
import de from './de'
import en from './en'
import fr from './fr';
import www from './www'

const sites = {au, ca, de, en, fr, www}
const defaultSite = 'www';

const prefixReg = /[\.]\w+/g;
const hostPrefix = window.location.host.replace(prefixReg, ''); 
const siteName = window.location.protocol === 'https:' ? hostPrefix : defaultSite;

export const initI18n = () => {
  return createI18n({
    legacy: false,
    locale: sites[siteName].lang,
    messages: languages
  });
};

export const site = sites[siteName];
