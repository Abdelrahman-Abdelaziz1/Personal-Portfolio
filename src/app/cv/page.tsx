"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Download,
  Printer,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  // Path to your PDF in the public folder
  const pdfUrl = "/cv%20datascience.pdf";

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-24 pb-12 px-4 md:px-8">
      {/* 1. Modern Control Bar */}
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-muted">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>
          <div className="h-6 w-[1px] bg-border hidden sm:block" />
          <div className="flex items-center gap-2 px-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm hidden sm:inline-block">
              Abdelrahman_CV.pdf
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Print Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex gap-2"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>

          {/* Open in New Tab */}
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              <span className="hidden xs:inline">Full Screen</span>
            </Button>
          </a>

          {/* Direct Download */}
          <a href={pdfUrl} download="Abdelrahman_Abdelaziz_CV.pdf">
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </a>
        </div>
      </div>

      {/* 2. PDF Viewer Container */}
      <div className="w-full max-w-5xl grow bg-card rounded-3xl border border-border shadow-2xl overflow-hidden relative group">
        {/* Subtle decorative gradient glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          className="relative w-full h-[75vh] md:h-[85vh] rounded-3xl"
          title="Curriculum Vitae"
        />
      </div>

      {/* 3. Footer Hint */}
      <p className="mt-6 text-muted-foreground text-xs text-center italic">
        Viewing in preview mode. For the best experience, download the PDF.
      </p>
    </div>
  );
}
