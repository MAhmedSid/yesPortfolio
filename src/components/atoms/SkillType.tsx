import React from "react";

const SkillType: React.FC<{ firstLetter: string; restWord: string }> = ({
  firstLetter,
  restWord,
}) => {
  return (
    <div>
      <h3 className="inline-block rounded-xl bg-primaryBlue p-2 text-2xl font-medium text-white md:text-3xl">
        <span className="text-3xl font-bold md:text-4xl">{firstLetter}</span>
        {restWord}
      </h3>
    </div>
  );
};

export default SkillType;
