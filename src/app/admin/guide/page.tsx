"use client";

import Link from "next/link";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { ArrowLeft, FileText, ShieldCheck, Save, AlertTriangle, CheckCircle2 } from "lucide-react";

const safeEditingSteps = [
  "Open the correct section first (Courses, FAQs, Testimonials, Site Settings, Resources).",
  "Edit only the field you intend to change and keep existing structure intact.",
  "Use valid links for URLs (for example https://... or /path).",
  "Click Save and wait for success confirmation before leaving the page.",
  "Refresh the page once to verify your saved values are still present."
];

const validationTips = [
  "Keep JSON-like text values clean; avoid accidental extra characters.",
  "Use complete URLs for social links and payment links.",
  "For uploads, wait until upload completes and path auto-populates.",
  "If content looks wrong on website, re-open admin section and confirm field mapping."
];

const troubleshooting = [
  {
    issue: "Changes are not visible on website",
    fix: "Save again, then refresh browser. If still not visible, verify you edited the correct admin section."
  },
  {
    issue: "Button or action does nothing",
    fix: "Check if session expired. Re-login in Admin and retry action."
  },
  {
    issue: "Invalid link or media path",
    fix: "Use either a full URL (https://...) or a valid public path such as /testimonials/file.jpg."
  }
];

export default function AdminGuidePage() {
  const { isAuthenticated, isLoading } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-[#2D1B33]/70 hover:text-[#D9A15B] mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#D9A15B]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#D9A15B]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-2">Help & Guide</h1>
              <p className="text-[#2D1B33]/70 text-lg">Best practices for safe editing and publishing from admin panel</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-2xl p-6 border border-[#2D1B33]/10 shadow-sm">
            <h2 className="text-xl font-bold text-[#2D1B33] mb-4 flex items-center gap-2">
              <Save className="w-5 h-5 text-[#D9A15B]" />
              Safe Editing Checklist
            </h2>
            <div className="space-y-3">
              {safeEditingSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 text-[#2D1B33]/80">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-[#2D1B33]/10 shadow-sm">
            <h2 className="text-xl font-bold text-[#2D1B33] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D9A15B]" />
              Validation Tips
            </h2>
            <ul className="space-y-3 text-[#2D1B33]/80">
              {validationTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D9A15B]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6 bg-white rounded-2xl p-6 border border-[#2D1B33]/10 shadow-sm">
          <h2 className="text-xl font-bold text-[#2D1B33] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#D9A15B]" />
            Quick Troubleshooting
          </h2>
          <div className="space-y-4">
            {troubleshooting.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#2D1B33]/10">
                <p className="font-semibold text-[#2D1B33]">{item.issue}</p>
                <p className="text-[#2D1B33]/75 mt-1">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
