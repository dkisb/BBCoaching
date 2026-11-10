import Image from "next/image";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export type TimelineItemProps = {
  type: "work" | "achievement";
  tagLabel: string;
  role: string;
  company?: string;
  duration: string;
  description?: string;
  icon?: string;
  imageAlt?: string;
  isLast?: boolean;
};

export default function TimelineItem({
  type,
  tagLabel,
  role,
  company,
  duration,
  description,
  icon,
  imageAlt,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className={cn("relative pl-12", isLast ? "pb-0" : "pb-6")}>
      {!isLast ? (
        <span className="absolute left-4 top-8 bottom-0 w-px bg-slate-200" aria-hidden="true" />
      ) : null}

      <span
        className={cn(
          "absolute left-0 top-0 w-8 h-8 rounded-lg border flex items-center justify-center overflow-hidden bg-white",
          type === "achievement" ? "border-brand/20" : "border-slate-200"
        )}
      >
        {icon ? (
          <Image
            src={icon}
            alt={imageAlt ?? role}
            width={32}
            height={32}
            className="object-contain w-5 h-5"
          />
        ) : (
          <Trophy className="w-4 h-4 text-brand" aria-hidden="true" />
        )}
      </span>

      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-slate-950 text-sm sm:text-base">{role}</h3>
          <span
            className={cn(
              "text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full",
              type === "achievement" ? "bg-brand/10 text-brand" : "bg-slate-100 text-slate-500"
            )}
          >
            {tagLabel}
          </span>
        </div>

        <p className="mt-0.5 text-sm text-slate-500">
          {company ? `${company} · ` : ""}
          {duration}
        </p>

        {description ? (
          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
