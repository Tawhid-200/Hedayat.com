import React, { use } from "react";
import ThemePreview from "@/components/theme";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const Home = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use(params);
  // const t = useTranslations("home");
  setRequestLocale(locale);
  return <h1>Hello world</h1>;
};

export default Home;
