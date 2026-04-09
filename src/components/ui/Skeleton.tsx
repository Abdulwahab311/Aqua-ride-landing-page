// Reusable shimmer skeleton for lazy-loaded sections
import React from "react";

/** Base shimmer block with configurable dimensions and shape */
export const Skeleton = ({
  className = "",
  rounded = "rounded-lg",
}: {
  className?: string;
  rounded?: string;
}) => (
  <div
    className={`relative overflow-hidden bg-slate-200/60 ${rounded} ${className}`}
  >
    <div className="absolute inset-0 animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/60 to-transparent" />
  </div>
);

/** Skeleton shaped like a text line */
export const SkeletonText = ({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        rounded="rounded"
      />
    ))}
  </div>
);

/** Skeleton for a card element */
export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`rounded-2xl border border-slate-200/50 bg-white/50 p-6 space-y-4 ${className}`}
  >
    <Skeleton className="h-40 w-full" rounded="rounded-xl" />
    <Skeleton className="h-5 w-2/3" rounded="rounded" />
    <SkeletonText lines={2} />
  </div>
);

/** Skeleton for a full section with a heading and content grid */
export const SkeletonSection = ({
  cards = 3,
  className = "",
}: {
  cards?: number;
  className?: string;
}) => (
  <section className={`py-16 md:py-24 px-6 max-w-7xl mx-auto ${className}`}>
    {/* Section heading */}
    <div className="flex flex-col items-center mb-12 space-y-4">
      <Skeleton className="h-3 w-20" rounded="rounded-full" />
      <Skeleton className="h-8 w-64 md:w-96" rounded="rounded" />
      <Skeleton className="h-4 w-48 md:w-72" rounded="rounded" />
    </div>
    {/* Card grid */}
    <div
      className={`grid gap-6 ${
        cards <= 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {Array.from({ length: cards }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </section>
);

/** Skeleton for a hero-like section (large image + text) */
export const SkeletonHeroBlock = ({
  className = "",
}: {
  className?: string;
}) => (
  <section
    className={`py-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ${className}`}
  >
    <div className="flex-1 space-y-6">
      <Skeleton className="h-10 w-3/4" rounded="rounded" />
      <SkeletonText lines={4} />
      <Skeleton className="h-12 w-40" rounded="rounded-full" />
    </div>
    <div className="flex-1">
      <Skeleton className="h-64 md:h-80 w-full" rounded="rounded-2xl" />
    </div>
  </section>
);

/** Skeleton for a CTA / banner section */
export const SkeletonBanner = ({
  className = "",
}: {
  className?: string;
}) => (
  <section
    className={`py-16 md:py-20 px-6 max-w-5xl mx-auto text-center space-y-6 ${className}`}
  >
    <Skeleton className="h-8 w-72 mx-auto" rounded="rounded" />
    <Skeleton className="h-4 w-96 max-w-full mx-auto" rounded="rounded" />
    <Skeleton className="h-12 w-44 mx-auto" rounded="rounded-full" />
  </section>
);

export default Skeleton;
