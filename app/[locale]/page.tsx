"use client";
import { redirect } from "next/navigation";

const page = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  redirect(`${locale}/home`);
};

export default page;
