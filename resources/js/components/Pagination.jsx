import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination({ item, totalData, pageDetail, callbackSetPageDetail }) {

    const OtherPagination = () => {
        var element = [];
        var countData = parseInt(totalData / pageDetail.limit) + 1;

        var forLoopIndex = 0;
        var stopedIndex = 5;
        if (pageDetail.curPage > 3) {
            forLoopIndex = pageDetail.curPage - 3;
            stopedIndex = pageDetail.curPage + 2;
        }

        console.log(stopedIndex);
        

        for (let index = forLoopIndex; index < countData; index++) {
            if (index == stopedIndex) {
                break
            }
            element.push(
                <button key={index} onClick={ pageDetail.curPage == (index + 1) ? null : () => {
                    var newData = {
                        'offset':  (index) * pageDetail.limit,
                        'curPage': index + 1,
                    };

                    callbackSetPageDetail(newData);
                }} className={pageDetail.curPage == (index + 1) ? "hover:cursor-no-drop h-full w-10 px-4 bg-stone-200 flex items-center" : "hover:cursor-pointer hover:text-white hover:bg-[#01719D] text-[#01719D] bg-white border-[#01719D] border-1 h-full w-10 bg-blue-200"}>{index + 1}</button>
            )
        }
        
        
        return element;
    } 

    return (
        <section className="w-full flex flex-wrap justify-between items-center">
            <div>
                Show {item.length} from {totalData}
            </div>
            <div className="flex h-10 bg-pink-500">
                <button onClick={ pageDetail.curPage == 1 ? null : () => {
                    var newData = {
                        'offset':  (pageDetail.offset - pageDetail.limit),
                        'curPage': pageDetail.curPage - 1,
                    };

                    callbackSetPageDetail(newData);
                }} className={pageDetail.curPage == 1 ? "hover:cursor-no-drop h-full px-3 bg-stone-200 flex items-center" : "hover:cursor-pointer hover:text-white hover:bg-[#01719D] h-full px-3 bg-white border-1 border-[#01719D] flex items-center"}>
                    <div>
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                </button>
                <OtherPagination/>
                <button onClick={ pageDetail.offset >= (totalData - item.length) ? null : () => {
                    var newData = {
                        'offset':  (pageDetail.offset + pageDetail.limit),
                        'curPage': pageDetail.curPage + 1,
                    };

                    callbackSetPageDetail(newData);
                }} className={ pageDetail.offset >= (totalData - item.length) ? "hover:cursor-no-drop h-full px-3 bg-stone-200 flex items-center" : "hover:cursor-pointer hover:text-white hover:bg-[#01719D] h-full px-3 bg-white border-1 border-[#01719D] flex items-center"}>
                    <div>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </button>
            </div>
        </section>
    )
}

export default Pagination;