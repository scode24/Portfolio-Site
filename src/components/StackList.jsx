const StackList = ({ data }) => {
  const { stacks } = data;
  // Assuming stacks is a comma-separated string: "React,Node,Express"
  const stackList = stacks.split(",");

  return (
    <div className="flex flex-wrap gap-2">
      {stackList.map((stack, index) => (
        <div key={index} className="px-2 py-1 bg-gray-200 rounded text-xs">
          {stack.trim()}
        </div>
      ))}
    </div>
  );
};

export default StackList;
