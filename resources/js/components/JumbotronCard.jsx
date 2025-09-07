function JumbotronCard ({ className, img }) {
    return (
        <div className={className ?? "w-70 h-40 bg-red-500 grayscale-70 hover:w-75 hover:h-45 hover:cursor-pointer transition-all hover:grayscale-0 max-lg:hidden max-lg:hidden"}>
            <img className="w-full h-full object-cover" src={img} alt="" srcSet="" />
        </div>
    )
}

export default JumbotronCard;