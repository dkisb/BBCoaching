// components/Experiences/ExperienceCard.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  image: string;
  title: string;
  company?: string;
  imageAlt?: string;
};

export default function ExperienceCard({ image, title, company, imageAlt }: Props) {
  return (
    <Card size="sm" className="h-[330px] border-slate-200 bg-white">
      <div className="relative h-44 w-full overflow-hidden bg-slate-50">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-slate-900 text-lg sm:text-xl leading-snug line-clamp-2 text-center">
          {title}
        </CardTitle>
      </CardHeader>
      {company ? (
        <CardContent className="text-center">
          <p className="text-slate-700 text-base sm:text-lg font-medium">{company}</p>
        </CardContent>
      ) : null}
    </Card>
  );
}