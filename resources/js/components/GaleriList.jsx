import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function GaleriList({ item, loading }) {
    return (
        <section className="flex flex-wrap gap-10 my-10 items-center">
            <h1>{item.id}</h1>
            <div className="w-150 h-80">
                {
                    loading 
                    ? <Skeleton height={'310px'}/>
                    : <img className="w-full h-full object-cover" src={item.data} alt="Foto" />
                }
            </div>
            <div className="flex-1 text-justify">
                {
                    loading 
                    ? <Skeleton count={3}/>
                    : item.desc
                }
            </div>
        </section>
    )
}

export default GaleriList;