import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='language-selector'>
            <select onChange={changeLanguage} value={i18n.language}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="nl">Dutch</option>
                <option value="fr">Français</option>
                <option value="ta">தமிழ்</option>
                <option value="si">සිංහල</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
