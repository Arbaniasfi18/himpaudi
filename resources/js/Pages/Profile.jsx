import Tentang from '../components/Tentang';
import VisiMisi from '../components/VisiMisi';
import Pengurus from '../components/Pengurus';
import Layout from '../components/Layout';

function Profile({ page }) {
    if (page == 'tentang') {
        return <Layout title={"Tentang Himpaudi"}><div className='w-full h-25'></div><Tentang/></Layout>
    } else if (page == 'visi-misi') {
        return <Layout title={"Visi & Misi Himpaudi"}><div className='w-full h-25'></div><VisiMisi/></Layout>
    } else if (page == 'pengurus') {
        return <Layout title={"Pengurus Himpaudi"}><div className='w-full h-25'></div><Pengurus/></Layout>
    }
}

export default Profile;