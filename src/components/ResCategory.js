const ResCategory = ({data})=>{
    console.log(data)
    return(
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between">
            {/* Header */}
            <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            {/* Accordion Body */}
        </div>
    )
}

export default ResCategory;