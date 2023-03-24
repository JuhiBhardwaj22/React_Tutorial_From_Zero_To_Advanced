const Shimmer = () => {
  return (
    <div className="mt-10 ml-20 flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className=" bg-gray-400 h-48 w-52 m-10" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
