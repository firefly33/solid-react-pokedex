import { ReactNode } from "react";
import { getTagBgColor, getTypeBgColor } from "../../utils/TypeHelper";

export interface TypeTagProps {
  selected: boolean;
  name: string;
  icon?: ReactNode;
  onClick: (selected: boolean, name: string) => void;
}

function TypeTag(props: TypeTagProps) {
  const { selected, name, icon, onClick } = props;
  const tagColor = getTagBgColor(selected, name);
  const activeColor = getTypeBgColor(name);

  return (
    <div
      onClick={() => onClick(selected, name)}
      key={name}
      className={`flex items-center min-w-fit gap-2 cursor-pointer ${tagColor} shadow-xl hover:${activeColor} shadow-${tagColor} rounded-full text-white font-pokemon px-4 py-2 text-2xl `}
    >
      {icon}
      <span className="text-base capitalize">{name}</span>
    </div>
  );
}

export default TypeTag;
