import TitleCategoryProps from "../../models/TitleCategoryProps";

function TitleCategory({ title, bgColor, style }: TitleCategoryProps) {
  return (
    <div
      className="category-title flex text-white items-center gap-2 rounded-none lg:rounded-2xl font-bold  lg:w-[350px] h-[100px] w-full justify-center py-1"
      style={{ backgroundColor: bgColor, ...style }}
    >
      <h1 className="text-[55px] font-Roboto font-bold">{title}</h1>
    </div>
  );
}

export default TitleCategory;
