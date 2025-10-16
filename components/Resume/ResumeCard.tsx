import Image from "next/image";

export type ResumeCardProps = {
  icon: string;
  role: string;
  company?: string;
  duration?: string;
  description?: string;
  imageAlt?: string;
};

export default function ResumeCard({
  icon,
  role,
  company,
  duration,
  description,
  imageAlt,
}: ResumeCardProps) {
  return (
    <article className="mb-6" aria-label={role}>
      <div className="flex items-center space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src={icon}
            alt={imageAlt ?? company ?? role}
            width={80}
            height={80}
            className="object-contain w-16 h-16 sm:w-20 sm:h-20"
            style={{ width: "auto", height: "auto" }}
            sizes="80px"
            priority={false}
          />
        </div>

        <div className="flex-1">
          {company ? (
            <p
              className="mb-2 sm:p-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold justify-center mx-auto whitespace-nowrap overflow-hidden text-ellipsis"
              title={company}
            >
              {company}
            </p>
          ) : null}

          {duration ? (
            <p className="mb-2 sm:p-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-100 text-gray-700 w-fit sm:text-md text-xs font-medium flex justify-center mx-auto">
              {duration}
            </p>
          ) : null}

          <h3 className="text-gray-200 text-xl sm:text-2xl font-semibold text-center">
            {role}
          </h3>

          {description ? (
            <p className="text-gray-200 text-sm sm:text-base pt-3 text-center">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}