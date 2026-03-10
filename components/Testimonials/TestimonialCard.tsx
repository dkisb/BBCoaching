// components/Testimonials/TestimonialCard.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  const fallback = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card
      size="sm"
      className="h-[280px] border-slate-200 bg-white flex flex-col"
      aria-label={`Testimonial by ${name}`}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar className="size-12 sm:size-14">
            <AvatarImage src={image} alt={imageAlt ?? name} className="object-cover object-top" />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-slate-900 text-base sm:text-lg leading-tight">{name}</CardTitle>
            {role ? <p className="text-sm text-[#7ba8ff]">{role}</p> : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <p className="h-full overflow-y-scroll pr-1 text-sm sm:text-base text-slate-700 leading-relaxed">
          &ldquo;{description}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}