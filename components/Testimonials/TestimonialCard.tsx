// components/Testimonials/TestimonialCard.tsx
import Image from "next/image";
import { Quote } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type Testimonial = {
  image: string;
  name: string;
  role?: string;
  description: string;
  imageAlt?: string;
};

export default function TestimonialCard({
  image,
  name,
  role,
  description,
  imageAlt,
}: Testimonial) {
  return (
    <Card
      size="sm"
      className="h-[300px] rounded-2xl ring-0 border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
      aria-label={`Testimonial by ${name}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-12 sm:size-14 ring-2 ring-brand/10">
              <Image
                src={image}
                alt={imageAlt ?? name}
                fill
                sizes="56px"
                className="rounded-full object-cover object-top"
              />
            </Avatar>
            <div>
              <CardTitle className="text-slate-950 text-base sm:text-lg leading-tight">{name}</CardTitle>
              {role ? <p className="text-sm text-brand">{role}</p> : null}
            </div>
          </div>
          <Quote className="w-6 h-6 text-brand/20 shrink-0" aria-hidden="true" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <p className="h-full overflow-y-auto pr-1 text-sm sm:text-base text-slate-600 leading-relaxed">
          &ldquo;{description}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
