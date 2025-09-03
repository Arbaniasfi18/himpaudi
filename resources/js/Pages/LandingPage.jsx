import ayangmePic from '../../../public/assets/images/Ayames.png';
import '../../css/landingpage.css';

function LandingPage({}) {
    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='w-100'>
                    <div>
                        <img src={ayangmePic} alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Ayangme</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;