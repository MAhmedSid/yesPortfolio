import React from "react";

const SkillCard: React.FC<{ text: string; icon: React.ReactNode }> = ({
  text,
  icon,
}) => {
  return (
    <div className="flex h-40  w-36 flex-col items-center justify-center gap-y-2 rounded-md p-8 text-primaryBlue shadow-2xl transition-all duration-150 hover:bg-primaryBlue hover:text-white md:h-56 md:w-52 md:p-3 ">
      {icon}
      <h5 className="text-xl md:text-2xl">{text}</h5>
    </div>
  );
};

export default SkillCard;
