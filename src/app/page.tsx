import { MainContent } from "@/components/main-content";
import { Header } from "@/components/header";
import { SideBar } from "@/components/sidebar";
import { TabName, tabNames } from "@/lib/types";

type PageParams = {
  params: { id: string };
  searchParams: { tab: TabName };
};
export default function Home({ searchParams: { tab: tb } }: PageParams) {
  let tab: TabName = tb;
  if (!tabNames.includes(tab as TabName)) {
    tab = tabNames[0];
  }
  return (
    <div className="absolute inset-0 bg-slate-50 overflow-hidden text-black">
      <Header />
      <div className={"flex items-stretch overflow-hidden h-full"}>
        <MainContent tab={tab} />
        <SideBar tab={tab} />
      </div>
    </div>
  );
}
