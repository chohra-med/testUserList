
import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
// Import all locales
import en from './en.json';
import ar from './es.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ar,
};


// Allow RTL alignment in RTL languages

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
