import ItemList from "./itemList";

const ResCategory = ({ data,showItem,setshowIndex }) => {
    const handleClick = ()=>{
        setshowIndex();
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
