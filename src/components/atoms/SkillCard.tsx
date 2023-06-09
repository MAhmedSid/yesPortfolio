import React from "react";

const SkillCard: React.FC<{ text: string; icon: React.ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <div className="w-[160px] h-[200px] flex flex-col gap-y-2 items-center justify-center p-8 rounded-md text-primaryBlue hover:text-white hover:bg-primaryBlue shadow-2xl transition-all duration-150 ">
      {icon}
      <h5 className="text-2xl">{text}</h5>
    </div>
  );
};

export default SkillCard;
