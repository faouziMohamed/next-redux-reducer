"use client";

import { TabName, tabNames } from "@/lib/types";
import { capitalize } from "@/lib/utils/operations";
import { usePathname, useRouter } from "next/navigation";
import { filterToDo, useTodos } from "@/lib/redux/hooks";
import { useIsMounted } from "@/lib/utils/hooks";

export function SideBar({ tab }: { tab: TabName }) {
  const router = useRouter();
  const pathName = usePathname();
  const todos = useTodos("all");
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return (
    <div className={"bg-sky-100 grow"}>
      <div className={"py-4 px-2 flex flex-col gap-4"}>
        <UserInfo />
        <div className={"flex flex-col gap-0.5"}>
          {todos.todos.length &&
            tabNames.map((name) => (
              <button
                key={name}
                className={`group px-4 py-2 text-lg text-start hover:bg-pink-700 
                hover:text-slate-100 rounded-2xl
                flex items-center justify-between
                ${tab === name ? " bg-blue-400 text-slate-100" : ""}
                `}
                onClick={() => {
                  router.push(`${pathName}?tab=${name}`);
                }}
              >
                <span>{capitalize(name)}</span>
                {
                  <span
                    className={
                      "flex bg-blue-500 group-hover:bg-pink-900 text-white px-1 py-1 text-xs rounded-full"
                    }
                  >
                    {filterToDo(name, todos).length}
                  </span>
                }
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className={"flex flex-col bg-pink-700 rounded-2xl px-4 py-1"}>
      <h2 className={"text-lg font-bold text-sky-50"}>Faouzi Mohamed</h2>
      <span className={"text-gray-50"}>Admin</span>
    </div>
  );
}
