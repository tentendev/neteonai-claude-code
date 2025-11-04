"use client";

import Image from "next/image";
import Link from "next/link";
import "../../app/ascent-gx10/styles.css";

export function AscentHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-[#00543C] to-gray-800 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#01A982]/10 rounded-full blur-3xl pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 enterprise-badge px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#01A982] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">AI Supercomputer • Powered by NVIDIA GB10</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Desktop AI Supercomputer
              <br />
              <span className="text-[#01A982]">That Actually Fits</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Get 1 petaFLOP of AI performance on your desk. No data center required. Just plug it in
              and start training models up to 200B parameters.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#ascent"
                className="cta-button relative bg-[#01A982] text-white px-8 py-4 rounded font-bold hover:bg-[#00543C] transition text-center"
              >
                Explore Ascent GX10
              </Link>
              <button className="enterprise-badge text-white px-8 py-4 rounded font-semibold hover:bg-white/20 transition">
                Download Datasheet
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-[#01A982]">1 PF</div>
                <div className="text-sm text-gray-400 mt-1">AI Performance</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#01A982]">128GB</div>
                <div className="text-sm text-gray-400 mt-1">Unified Memory</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#01A982]">200B</div>
                <div className="text-sm text-gray-400 mt-1">Parameter Models</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10">
              <Image
                src="https://dlcdnwebimgs.asus.com/gain/c66958f8-57de-4563-b0db-bd317bfaf1f3/w800"
                alt="Neteon AI Ascent GX10"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-[#01A982]/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
