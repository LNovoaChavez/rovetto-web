"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsCommunityOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="sticky top-0 z-50 hidden w-full lg:block mb-5">
        <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full bg-white/95 px-6 py-3 shadow-sm backdrop-blur-md">
          {/* Logo / Nombre */}
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold tracking-tight text-primary"
          >
            Jessica Rovetto
          </Link>

          {/* Links */}
          <div className="flex items-center gap-7">
            {/* Quién soy */}
            <Link
              href="/#quien-soy"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              Quién soy
            </Link>

            {/* Trabajo legislativo */}
            <Link
              href="/#trabajo-legislativo"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              Trabajo legislativo
            </Link>

            {/* Comunidad */}
            <div
              className="relative"
              onMouseEnter={() => setIsCommunityOpen(true)}
              onMouseLeave={() => setIsCommunityOpen(false)}
            >
              <Link
                href="/#comunidad"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                Comunidad
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isCommunityOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 w-44 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isCommunityOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-lg">
                  {/* Territorio */}
                  <Link
                    href="/comunidad#territorio"
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                  >
                    Territorio
                  </Link>

                  {/* Juventud */}
                  <Link
                    href="/comunidad#juventud"
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                  >
                    Juventud
                  </Link>
                </div>
              </div>
            </div>

            {/* CXLL */}
            <Link
              href="/#cxll"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              CXLL
            </Link>

            {/* Haz tu reclamo */}
            <Link
              href="/#haz-tu-reclamo"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Haz tu reclamo
            </Link>
          </div>
        </nav>
      </header>

      {/* ================= TABLET / MOBILE ================= */}
      <header className="fixed top-0 left-0 z-50 w-full lg:hidden">
        <nav className="flex items-center justify-between bg-white/95 px-5 py-4 shadow-sm backdrop-blur-md">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-primary"
          >
            Jessica Rovetto
          </Link>

          {/* Hamburguesa */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-gray-100"
          >
            <Menu size={25} />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Side panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-lg font-semibold text-primary"
            >
              Jessica Rovetto
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="mt-12 flex flex-col">
            {/* Quién soy */}
            <Link
              href="/#quien-soy"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-800"
            >
              Quién soy
            </Link>

            {/* Trabajo legislativo */}
            <Link
              href="/#trabajo-legislativo"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-800"
            >
              Trabajo legislativo
            </Link>

            {/* Comunidad */}
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <Link
                  href="/#comunidad"
                  onClick={closeMenu}
                  className="py-4 text-base font-medium text-gray-800"
                >
                  Comunidad
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setIsCommunityOpen(!isCommunityOpen)
                  }
                  aria-label="Mostrar opciones de Comunidad"
                  className="p-2 text-gray-700"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isCommunityOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Opciones de Comunidad */}
              {isCommunityOpen && (
                <div className="mb-3 flex flex-col rounded-xl bg-gray-50">
                  <Link
                    href="/comunidad#territorio"
                    onClick={closeMenu}
                    className="border-b border-gray-100 px-4 py-3 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    Territorio
                  </Link>

                  <Link
                    href="/comunidad#juventud"
                    onClick={closeMenu}
                    className="px-4 py-3 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    Juventud
                  </Link>
                </div>
              )}
            </div>

            {/* CXLL */}
            <Link
              href="/#cxll"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-800"
            >
              CXLL
            </Link>

            {/* Haz tu reclamo */}
            <Link
              href="/#haz-tu-reclamo"
              onClick={closeMenu}
              className="mt-8 rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Haz tu reclamo
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}