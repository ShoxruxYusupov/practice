import styles from "./Language.module.css";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const locales = [
    {
      lng: "ru",
    },
    {
      lng: "uz",
    },
  ];

  const { i18n } = useTranslation();

  const toogleLng = (e) => {
    i18n.changeLanguage(e);
  };

  return (
    <select onChange={(e) => toogleLng(e.target.value)}>
      {locales.map((i) => (
        <option key={i.lng} value={i.lng}>
          {i.lng}
        </option>
      ))}
    </select>
  );
};
