import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  name: string;
  description: string;
}

const ServiceCard = ({ Icon, name, description }: Props) => {
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="center">
      <Icon className='w-10 h-10 text-black'/>
      <h1 className='text-xl mt-6 md:text-2xl font-bold text-black'>{name}</h1>
      <h2 className="mt-6 text-black text-lg md:text-xl leading-relaxed">
        {description.split(/(data|video|feedback|improve|consistency|confident|setup|suspension|tire pressures|driving style|conditions|mental|tools|techniques|focused|pressure|clear head|get better|extra|goal|tenths|your|you|you’re)/gi).map((part, idx) => {
          // List of keywords to accent
          const keywords = [
            "data", "video", "feedback", "improve", "consistency", "confident",
            "setup", "suspension", "tire pressures", "driving style", "conditions",
            "mental", "tools", "techniques", "focused", "pressure", "clear head", "goal",
            "get better", "extra tenths", "you", "your", "tenths", "you’re"
          ];
          // Special handling for "your" and "you" inside "your"
          if (part.toLowerCase() === "your") {
            return (
              <span key={idx} className="text-[#0055ff] font-bold">your</span>
            );
          }
          if (part.toLowerCase() === "you’re") {
            // Accent both the "you" and the "'re"
            return (
              <span key={idx} className="text-[#0055ff] font-bold">you’re</span>
            );
          }
          if (part.toLowerCase() === "you") {
            return (
              <span key={idx} className="text-[#0055ff] font-bold">you</span>
            );
          }
          // Check if this part is a keyword (case-insensitive)
          if (keywords.some(kw => kw.toLowerCase() === part.trim().toLowerCase())) {
            return (
              <span key={idx} className="text-[#0055ff] font-bold">{part}</span>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
      </h2>
    </div>
  )
}

export default ServiceCard