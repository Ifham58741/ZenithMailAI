"use client";

import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Hero from "@/components/public/hero";
import Nav from "@/components/public/nav";
import Pricing from "@/components/public/pricing";
import { Social } from "@/components/auth/social-variant";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import GridPattern from "@/components/ui/grid";
import { cn } from "@/utils/cn";
import DotPattern from "@/components/ui/dot";
import { useCookies } from "react-cookie";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BoxReveal from "@/components/ui/box-reveal";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconInbox, IconSparkles, IconListCheck } from "@tabler/icons-react"; // Corrected import

// This is the new, text-based feature component.
const TextFeatureSection = () => {
  const textFeatures = [
    {
      icon: <IconInbox className="h-8 w-8 text-neutral-300" />,
      title: "A Smarter, Cleaner Inbox",
      description:
        "ZenithMailAI automatically categorizes and prioritizes your emails, clearing the clutter so you can focus on what's truly important.",
    },
    {
      icon: <IconSparkles className="h-8 w-8 text-neutral-300" />,
      title: "AI-Powered Composition",
      description:
        "Draft professional emails in seconds. Our AI assistant helps with autocompletion, tone adjustment, and smart suggestions.",
    },
    {
      icon: <IconListCheck className="h-8 w-8 text-neutral-300" />, // Corrected icon
      title: "Actionable Insights",
      description:
        "Stop wasting time on long email chains. Get instant AI-powered summaries and suggested actions for every conversation.",
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="text-center mb-12">
        <h1 className="text-xl font-semibold bg-clip-text ThemeText w-max overflow-hidden text-white mx-auto">
          <span className="-mb-10">Unleash the power of AI</span>
          <GradualSpacing
            className="text-xl md:text-[2rem] font-bold mt-1 leading-none w-max overflow-hidden"
            text="in every aspect of your email"
          />
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textFeatures.map((feature, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {feature.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};


const MobileMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-2xl font-semibold text-white text-center">
          Full experience available only on Desktop
        </p>
      </BoxReveal>
    </div>
  );
};

export default function Home() {
  const [cookie, setCookie] = useCookies(["cookieConsent"]);
  const [showCookie, setShowCookie] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [pos, setPos] = useState("");
  const user = useCurrentUser();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!cookie.cookieConsent) {
      setShowCookie(true);
    }
  }, [cookie]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="max-w-screen overflow-hidden">
      <header>
        <Nav />
      </header>
      <main className="flex flex-col">
        <div
          className={`${pos} relative h-screen bg-gradient-to-b from-black to-gray-900`}
        >
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
            )}
          />
          <DotPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_top,white,transparent,transparent)] "
            )}
          />
          <Hero isMobile={isMobile} />
          {!user && !isMobile && (
            <div className="absolute bottom-24 translate-x-[21%] w-full z-50">
              <div className="flex justify-center items-center z-50">
                <Social />
              </div>
            </div>
          )}
        </div>

        {/* This section now uses the new, text-based features */}
        {isMobile ? (
          <MobileMessage />
        ) : (
          <>
            <TextFeatureSection />
            <div className="w-full">
              <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative">
                <DotPattern
                  width={20}
                  height={20}
                  x={-1}
                  y={-1}
                  className={cn(
                    "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] mt-2"
                  )}
                />
                <GridPattern
                  width={20}
                  height={20}
                  x={-1}
                  y={-1}
                  className={cn(
                    "[mask-image:linear-gradient(to_top,white,transparent,transparent)] "
                  )}
                />
                <Pricing noHeading />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}