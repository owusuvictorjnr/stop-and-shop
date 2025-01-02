"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="w-full bg-gray-800 rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to Top
        </Button>
      </div>

      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/page/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/page/help" className="hover:underline">
            Help
          </Link>
        </div>

        <div className="flex justify-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center mt-8 text-sm text-gray-400">
          <p>
            Built by{" "}
            <a
              href="https://github.com/AnmolGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Vitech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
