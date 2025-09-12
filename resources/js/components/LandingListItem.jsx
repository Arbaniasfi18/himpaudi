import LandingItem from "./LandingItem";

function LandingListItem ({ title, item }) {
    return (
        <section className="">
            <div className="flex flex-wrap items-center gap-5">
                <div className="text-3xl txt-primary">{title}</div>
                <div className="flex-1 h-[2px] dark-blue"></div>
                <div className="text-xl text-[#05B8FF] hover:cursor-pointer hover:text-[#011F2A]">Selengkapnya ...</div>
            </div>
            <div className="flex justify-between max-sm:justify-center flex-wrap gap-y-15 mt-5">
                {
                    item.map((data, index) => {
                        return <LandingItem key={index} item={data} />
                    })
                }
            </div>
        </section>
    )
}

export default LandingListItem;