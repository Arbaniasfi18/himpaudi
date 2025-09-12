import ayangmePic from '../../../public/assets/images/Ayames.png';
import '../../css/landingpage.css';
import Jumbotron from '../components/Jumbotron';
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
            <div className='w-full h-[100vh] bg-blue-500'>
                <img className='' src={item[0].image} alt="" />
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