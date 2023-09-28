import { useTranslation } from "react-i18next";

export const Links = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      to: "/",
      title: t("header.l1"),
    },
    {
      id: 2,
      to: "/medicine",
      title: t("header.l2"),
    },
    {
      id: 3,
      to: "/blog",
      title: t("header.l3"),
    },
    {
      id: 4,
      to: "/contact",
      title: t("header.l4"),
    },
  ];
};
