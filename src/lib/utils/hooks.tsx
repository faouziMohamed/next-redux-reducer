"use client";

import { TabName, tabNames } from "@/lib/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export { default as useLocalStorage } from "react-use/lib/useLocalStorage";

export function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function useTabs() {
  let tab = useSearchParams().get("tab") as TabName;
  if (!tabNames.includes(tab)) {
    tab = tabNames[0];
  }
  return tab;
}
