"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";
import AOSBlock from "../common/AOSBlock";
import { cn } from "@/lib/utils";

export type ResumeTranslations = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  tags: {
    work: string;
    achievement: string;
  };
  showMore: string;
  showLess: string;
  jobs: {
    tms: { role: string; company: string; duration: string };
    bdp: { role: string; company: string; duration: string };
    coaching: { role: string; duration: string; description?: string };
    renauer: { role: string; company: string; duration: string };
  };
  achievements: {
    rookie: { role: string; duration: string };
    nationalChampion: { role: string; duration: string };
    worldChampionship: { role: string; duration: string };
    coachChampion: { role: string; duration: string; description?: string };
    cee: { role: string; duration: string; description?: string };
    cez: { role: string; duration: string; description?: string };
  };
};

const VISIBLE_COUNT = 4;

export default function Resume({ t }: { t: ResumeTranslations }) {
  const [expanded, setExpanded] = useState(false);

  // Ordered reverse-chronologically, work and achievements interleaved into one timeline
  const timeline: TimelineItemProps[] = [
    {
      type: "work",
      tagLabel: t.tags.work,
      role: t.jobs.renauer.role,
      company: t.jobs.renauer.company,
      duration: t.jobs.renauer.duration,
      icon: "/images/renauer-logo.png",
      imageAlt: `${t.jobs.renauer.company} logo`,
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.cee.role,
      duration: t.achievements.cee.duration,
      description: t.achievements.cee.description,
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.cez.role,
      duration: t.achievements.cez.duration,
      description: t.achievements.cez.description,
    },
    {
      type: "work",
      tagLabel: t.tags.work,
      role: t.jobs.coaching.role,
      duration: t.jobs.coaching.duration,
      description: t.jobs.coaching.description,
      icon: "/images/logoDark.png",
      imageAlt: "BB Coaching logo",
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.coachChampion.role,
      duration: t.achievements.coachChampion.duration,
      description: t.achievements.coachChampion.description,
    },
    {
      type: "work",
      tagLabel: t.tags.work,
      role: t.jobs.bdp.role,
      company: t.jobs.bdp.company,
      duration: t.jobs.bdp.duration,
      icon: "/images/bdp-logo.jpg",
      imageAlt: `${t.jobs.bdp.company} logo`,
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.nationalChampion.role,
      duration: t.achievements.nationalChampion.duration,
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.worldChampionship.role,
      duration: t.achievements.worldChampionship.duration,
    },
    {
      type: "work",
      tagLabel: t.tags.work,
      role: t.jobs.tms.role,
      company: t.jobs.tms.company,
      duration: t.jobs.tms.duration,
      icon: "/images/tms-logo.png",
      imageAlt: `${t.jobs.tms.company} logo`,
    },
    {
      type: "achievement",
      tagLabel: t.tags.achievement,
      role: t.achievements.rookie.role,
      duration: t.achievements.rookie.duration,
    },
  ];

  const visibleTimeline = expanded ? timeline : timeline.slice(0, VISIBLE_COUNT);

  return (
    <div>
      <span className="section-eyebrow">{t.eyebrow}</span>
      <h2 className="mt-4 section-heading">
        {t.title} <span className="text-brand">{t.titleHighlight}</span>
      </h2>

      <div className="mt-14">
        <AOSBlock animation="fade-up" delay={100}>
          <div>
            {visibleTimeline.map((item, idx) => (
              <TimelineItem
                key={`${item.role}-${idx}`}
                {...item}
                isLast={idx === visibleTimeline.length - 1}
              />
            ))}
          </div>
        </AOSBlock>

        {timeline.length > VISIBLE_COUNT ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
          >
            {expanded ? t.showLess : t.showMore}
            <ChevronDown
              className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        ) : null}
      </div>
    </div>
  );
}
