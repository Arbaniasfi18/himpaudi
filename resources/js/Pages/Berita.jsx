import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import LandingItem from '../components/LandingItem';

function Berita ({ }) {

     const item = [
        {
            'id': 1,
            'image': '/assets/images/1.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 2,
            'image': '/assets/images/2.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 3,
            'image': '/assets/images/3.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 4,
            'image': '/assets/images/4.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 5,
            'image': '/assets/images/1.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 6,
            'image': '/assets/images/2.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 7,
            'image': '/assets/images/3.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 8,
            'image': '/assets/images/4.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 9,
            'image': '/assets/images/3.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
        {
            'id': 10,
            'image': '/assets/images/4.jpg',
            'title': 'Lorem Ipsum Dolor Sit Amet',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
        },
    ];

    return (
        <Layout title={'Berita'}>
            <Jumbotron/>
            <div className="p-10 flex justify-center max-sm:justify-center flex-wrap gap-x-10 gap-y-15 mt-5">
                {
                    item.map((data, index) => {
                        return <LandingItem key={index} item={data} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Berita;