"use client";
import { TitleAndSubTitle } from "@/components/title-and-sub-title";
import { Divider } from "@/components/divider";
import { TodoInputForm } from "@/components/todo-input-form";
import { TodoList } from "@/components/todo-list";
import { TabName } from "@/lib/types";
import { capitalize } from "@/lib/utils/operations";

export function MainContent({ tab }: { tab: TabName }) {
  return (
    <main className={"basis-3/4 overflow-y-auto"}>
      <div className={"py-4 px-4"}>
        <TitleAndSubTitle />
        <Divider />
        <div className={"py-4"}>
          <h2 className={"text-2xl text-end font-bold text-blue-900 pb-4"}>
            {capitalize(tab)}&apos;s List
          </h2>
          <TodoInputForm />
          <TodoList tab={tab} />
        </div>
      </div>
    </main>
  );
}
