import { FaArrowLeft } from "react-icons/fa";
import Layout from "../components/Layout";
import { Link } from "@inertiajs/react";
import LandingListItem from '../components/LandingListItem';

function BeritaDetail ({ uuid }) {
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
    ];
    
    return (
        <Layout title={"Berita"} >
            <div className="w-full h-20"></div>
            <div className="p-10">
                <Link onClick={() => window.history.back()}>
                    <div className="text-3xl txt-primary">
                        <FaArrowLeft />
                    </div>
                </Link>
                <div className="w-full text-4xl font-bold mt-10 text-center">
                    Judul Berita
                </div>
                <div className="mt-10">
                    <img className="min-w-full" src='/assets/images/1.jpg' alt="Berita Image" srcSet="" />
                    <div className="w-full text-center text-gray-500">
                        Keterangan Gambar
                    </div>
                </div>
                <div className="mt-10 text-justify text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
                <div className="mt-30">
                    <LandingListItem title={"Berita Lainnya"} item={item} />
                </div>
            </div>
        </Layout>
    )
}

export default BeritaDetail;