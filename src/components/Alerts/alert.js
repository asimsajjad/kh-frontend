import React from "react";
import { useTranslation } from 'react-i18next';

function Alert(props){
    const { t, i18n } = useTranslation();
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

return(
    
    props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert" dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
    <strong>{t(`${capitalize(props.alert.type)}`)}</strong>: {t(`${props.alert.msg}`)}
  </div>
)
}

export default Alert;