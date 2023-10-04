import React from "react";

const SkillCard: React.FC<{ text: string; icon: React.ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <div className="flex h-48  w-44 flex-col items-center justify-center gap-y-2 rounded-md p-8 text-primaryBlue shadow-md transition-all duration-150 hover:bg-primaryBlue hover:text-white tablet:h-48 tablet:w-44 lp:h-56 lp:w-52 lp:p-3 ">
      {icon}
      <h5 className="text-xl md:text-2xl text-center">{text}</h5>
    </div>
  );
};

export default SkillCard;
