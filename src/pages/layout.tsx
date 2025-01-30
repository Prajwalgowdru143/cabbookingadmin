"use client"

import { type ReactNode, useState } from "react"
import TopBar from "../components/top-bar"
import Sidebar from "../components/sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex min-h-[calc(100vh-64px)]">
        <div
          className={`fixed inset-0 z-20 bg-black/50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
          onClick={() => setSidebarOpen(false)}
        />
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-full mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

