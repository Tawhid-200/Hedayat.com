"use client";

import { useTheme } from "next-themes";

const themes = [
  "light",
  "dark",
  "serenity",
  "serenity_dark",
  "forest_dark",
  "sage",
  "sage_dark",
  "earth",
  "earth_dark",
  "lunar",
  "lunar_dark",
  "ocean",
  "ocean_dark",
  "vintage",
  "vintage_dark",
  "pure",
  "pure_dark",
];

export default function ThemePreview() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {themes.map((theme) => (
        <div
          key={theme}
          className="cursor-pointer w-[180px] rounded-lg p-4 border"
          onClick={() => setTheme(theme)}
          data-theme={theme}
        >
          <div className="bg-card p-4 rounded-md mb-2">
            <p className="text-card-foreground font-semibold">{theme}</p>
          </div>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded">
            Button
          </button>
        </div>
      ))}
    </div>
  );
}
