import landingImage from '../../../public/assets/images/landing.png';
import '../../css/landingpage.css';
import LandingListItem from '../components/LandingListItem';
import Layout from '../components/Layout';

function LandingPage({ }) {
    const item = [
        {
            'id': 1,
            'image': 'assets/images/1.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 2,
            'image': 'assets/images/2.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 3,
            'image': 'assets/images/3.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 4,
            'image': 'assets/images/4.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
    ];

    return (
        <Layout title={"Home"}>
            <div className='w-full h-20'></div>
            <div className='w-full h-[50vh] relative'>
                <div className='absolute w-full h-full z-1 pl-10 text-4xl font-bold flex flex-col justify-center text-white'>SELAMAT DATANG, <br/> DI WEBSITE HIMPAUDI SUMATERA UTARA</div>
                <div className='absolute w-full h-full landingJumbo'></div>
                <img className='w-full h-full object-cover' src={landingImage} alt="" />
            </div>
            <div>
                <div className='mx-10 my-25'>
                    <LandingListItem title={'Berita Terbaru'} item={item}/>
                </div>
                <div className='mx-10 my-25'>
                    <LandingListItem title={'Kegiatan Terbaru'} item={item}/>
                </div>
                <div className='mx-10 my-25'>
                    <LandingListItem title={'Video'} item={item}/>
                </div>
            </div>
        </Layout>
    )
}

export default LandingPage;