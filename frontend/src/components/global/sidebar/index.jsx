"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconLogout2,
    IconBrandTabler,
    IconPingPong,
    IconUserBolt,
    IconMapDollar
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SidebarDemo({ children }) {
    const links = [
        {
            label: "Dashboard",
            href: "/",
            icon: (
                <IconBrandTabler className="text-neutral-700  h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Income",
            href: "/income",
            icon: (
                <IconMapDollar className="text-neutral-700  h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Budgets",
            href: "/budgets",
            icon: (
                <IconPingPong className="text-neutral-700 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconLogout2 className="text-neutral-700  h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        (<div
            className={cn(
                "rounded-md flex flex-col md:flex-row  bg-[#FAF7F0] w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-min"
            )}>
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10 border border-r-2 bg-[#FAF7F0] text-[#4A4947] h-full">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} className={""}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Uttam Seervi",
                                href: "#",
                                icon: (
                                    <Image
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar" />
                                ),
                            }} />
                    </div>
                </SidebarBody>
            </Sidebar>
            <div className="flex flex-col w-screen ">
                <header className="w-full bg-[#FAF7F0] text-black font-bold p-4 flex items-center justify-center">
                    <h2>Track Your Expenses Here</h2>
                </header>
                <hr />
                <main className="bg-[#FAF7F0]">
                    {children}
                </main>
            </div>
        </div>)
    );
}
export const Logo = () => {
    return (
        (<Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-[#3F3F44] py-1 relative z-20">
            <div
                className="h-5 w-6 bg-black  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-sans text-blue-600 font-bold whitespace-pre">
                FinTrack
            </motion.span>
        </Link>)
    );
};
export const LogoIcon = () => {
    return (
        (<Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <div
                className="h-5 w-6 bg-blue-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>)
    );
};

// Dummy dashboard component with content
// const Dashboard = () => {
//     return (
//         (<div className="flex flex-1">
//             <div
//                 className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
//                 <div className="flex gap-2">
//                     {[...new Array(4)].map((i) => (
//                         <div
//                             key={"first-array" + i}
//                             className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
//                     ))}
//                 </div>
//                 <div className="flex gap-2 flex-1">
//                     {[...new Array(2)].map((i) => (
//                         <div
//                             key={"second-array" + i}
//                             className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
//                     ))}
//                 </div>
//             </div>
//         </div>)
//     );
// };
