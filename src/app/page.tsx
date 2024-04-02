import { MainContent } from "@/components/main-content";
import { SideBar } from "@/components/sidebar";
import { TabName, tabNames } from "@/lib/types";

type PageParams = {
  searchParams: { tab: TabName; theme: string };
};
export default function Home({ searchParams: { tab: tb } }: PageParams) {
  let tab: TabName = tb;
  if (!tabNames.includes(tab as TabName)) {
    tab = tabNames[0];
  }
  return (
    <div className={"flex overflow-hidden h-full"}>
      <MainContent tab={tab} />
      <SideBar tab={tab} />
    </div>
  );
}
