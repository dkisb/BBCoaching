import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ResumeCardProps = {
  icon: string;
  role: string;
  company?: string;
  duration?: string;
  description?: string;
  imageAlt?: string;
  compact?: boolean;
  className?: string;
};

export default function ResumeCard({
  icon,
  role,
  company,
  duration,
  description,
  imageAlt,
  compact = false,
  className,
}: ResumeCardProps) {
  const title = company ?? role;
  const subtitle = company ? role : undefined;

  if (compact) {
    return (
      <Card
        size="sm"
        className={cn("h-auto min-h-[140px] border-slate-200 bg-white", className)}
        aria-label={role}
      >
        <div className="flex h-full items-start gap-4 p-4">
          <div className="flex-shrink-0 w-20 h-20 rounded-md flex items-center justify-center overflow-hidden bg-slate-50">
            <Image
              src={icon}
              alt={imageAlt ?? company ?? role}
              width={80}
              height={80}
              className="object-contain w-18 h-18"
              sizes="80px"
              priority={false}
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-snug line-clamp-2">{title}</h3>
            {subtitle ? (
              <p
                className={cn(
                  "mt-1 leading-snug line-clamp-1",
                  description
                    ? "text-slate-700 text-xs sm:text-sm"
                    : "text-slate-900 text-sm sm:text-base font-semibold"
                )}
              >
                {subtitle}
              </p>
            ) : null}
            {duration ? (
              <p className="mt-1 text-slate-500 text-xs font-medium">{duration}</p>
            ) : null}
            <p className="mt-2 text-slate-700 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {description ?? "\u00A0"}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      size="sm"
      className={cn("h-full min-h-[180px] border-slate-200 bg-white", className)}
      aria-label={role}
    >
      <div className="flex h-full items-start gap-5 p-4 sm:p-5">
        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center overflow-hidden bg-slate-50">
          <Image
            src={icon}
            alt={imageAlt ?? company ?? role}
            width={96}
            height={96}
            className="object-contain w-16 h-16 sm:w-20 sm:h-20"
            sizes="96px"
            priority={false}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-snug line-clamp-2">{title}</h3>
          {subtitle ? (
            <p
              className={cn(
                "mt-1 leading-snug line-clamp-1",
                description
                  ? "text-slate-700 text-sm"
                  : "text-slate-900 text-base sm:text-lg font-semibold"
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {duration ? (
            <p className="mt-1 text-slate-500 text-xs sm:text-sm font-medium">{duration}</p>
          ) : null}
          <p className="mt-3 text-slate-700 text-sm leading-relaxed line-clamp-3">
            {description ?? "\u00A0"}
          </p>
        </div>
      </div>
    </Card>
  );
}