"use client";

import { useAppDispatch, useTheme } from "@/lib/redux/hooks";
import { changeTheme } from "@/lib/redux/theme-slice";

function ToggleThemeButton() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const onClick = () => {
    if (theme.name === "light") {
      dispatch(changeTheme("dark"));
      return;
    }
    dispatch(changeTheme("light"));
  };
  return (
    <button
      onClick={onClick}
      className={`border px-3 py-1 rounded-lg text-lg text-slate-800`}
      style={{ backgroundColor: theme.main }}
    >
      Toggle theme (Theme: {theme.name})
    </button>
  );
}

export function TitleAndSubTitle() {
  const paramatersOftheComponent = {
    name: "Mr. Redux",
    age: 25,
    address: "sale",
  };
  return (
    <div>
      <h1
        className={"text-4xl font-extrabold text-blue-900 flex justify-between"}
      >
        <span>Silent Todo</span>
        <ToggleThemeButton />
      </h1>
      <p className={"text-lg text-gray-700"}>
        A simple todo app with no noise.
      </p>
    </div>
  );
}
