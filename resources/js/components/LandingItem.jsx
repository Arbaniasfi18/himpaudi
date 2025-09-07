import '../../css/landingitem.css'

function LandingItem ({ item }) {
    return (
        <div className="w-80 h-110 bg-[#05B8FF] rounded-md hover:bg-white card">
            <div className="m-5 h-50">
                <img className="rounded-md h-full object-cover" src={item.image} alt="" />
            </div>
            <div className="flex flex-col h-50 justify-around">
                <div className="px-6 font-bold text-xl">
                    {item.title.length > 50 ? item.title.substring(0, 45) + '...' : item.title}
                </div>
                <div className="px-6 text-sm text-justify">
                    {item.desc.length > 255 ? item.desc.substring(0, 150) + '...' : item.desc}
                </div>
                <button className="ml-6 mb-3 rounded-md px-6 w-50 h-10 hover:cursor-pointer card-button">
                    Baca Selengkapnya
                </button>
            </div>
        </div>
    )
}

export default LandingItem;