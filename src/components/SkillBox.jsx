import useFetchTechIcon from "../hooks/FetchTechIcon";

function SkillBox(props) {
  const { skill } = props.data;
  const { getIcon } = useFetchTechIcon();

  return (
    <div className="flex flex-row border rounded text-sm text-slate-700">
      <div className="flex flex-col justify-center items-center p-3 bg-white border-r-[1px]">
        {getIcon(skill)}
      </div>
      <div className="flex flex-col justify-center items-center ml-2">
        {skill}
      </div>
    </div>
  );
}

export default SkillBox;
