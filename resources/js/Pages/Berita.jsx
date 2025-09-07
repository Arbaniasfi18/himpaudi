import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";

function Berita ({ cur_url }) {
    return (
        <Layout title={'Berita'} cur_url={cur_url}>
            <Jumbotron/>
            <h1>Berita</h1>
        </Layout>
    )
}

export default Berita;