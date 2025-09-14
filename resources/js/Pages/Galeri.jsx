import GaleriList from "../components/GaleriList";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";

function Galeri({ type }) {
    const [loading, setLoading] = useState(true);
    const [pageDetail, setPageDetail] = useState({
        'limit': 10,
        'offset': 0,
        'curPage': 1
    })
    const [totalData, setTotalData] = useState(0);
    const [data, setData] = useState([]);

    console.log(pageDetail);
    

    useEffect(() => {
        fetchData();
    }, [pageDetail]);

    function fetchData() {
        fetch('/galeri/' + type + '/get-data?limit=' + pageDetail.limit + '&offset=' + pageDetail.offset + '&curPage=' + pageDetail.curPage)
        .then((response) => response.json())
        .then((data) => {
            setTotalData(data.total_data);
            setData(data.data);
            setLoading(false);
        });
    }

    function callbackSetPageDetail(newData) {
        setLoading(true);
        
        setPageDetail({
            ...pageDetail,
            ...newData,
        })

        setLoading(false);
    };

    return (
        <Layout title={"Galeri " + type}>
            <div className="w-full h-20"></div>
            <div className="p-10">
                {
                    data.map((data, index) => {
                        return <GaleriList key={index} loading={loading} item={data} />
                    })
                }
                <Pagination item={data} totalData={totalData} pageDetail={pageDetail} callbackSetPageDetail={callbackSetPageDetail}/>
            </div>
        </Layout>
    )
} 

export default Galeri;