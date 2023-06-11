import React from "react";

const SkillCard: React.FC<{ text: string; icon: React.ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <div className="w-36 h-40  md:w-52 md:h-56 flex flex-col gap-y-2 items-center justify-center p-8 md:p-3 rounded-md text-primaryBlue hover:text-white hover:bg-primaryBlue shadow-2xl transition-all duration-150 ">
      {icon}
      <h5 className="text-xl md:text-2xl">{text}</h5>
    </div>
  );
};

export default SkillCard;
