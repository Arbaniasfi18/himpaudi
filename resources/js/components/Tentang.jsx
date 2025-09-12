import logo from '../../../public/assets/logo/logo.png';
import '../../css/tentang.css';

function Tentang({ }) {
    return (
        <section className='relative'>
            <div className="p-10 tentang-himpaudi" >
                <div className="text-3xl font-bold text-white">
                    Tentang HIMPAUDI
                </div>
                <div className="text-lg font-bold text-white text-justify mt-10">
                    Organisasi HIMPAUDI dibentuk untuk membantu menangani tugas-tugas yang tidak mungkin dilakukan Pemerintah karena keterbatasan sumber daya manusia. HIMPAUDI Pusat dideklarasikan di Kota Batu Provinsi Jawa Timur pada tanggal 31 Agustus 2005 oleh utusan dari 33 Provinsi di seluruh Indonesia pada saat itu nama HIMPAUDI disepakati untuk organisasi profesi PAUD non formal. Musyawarah Nasional pertama kali diselenggarakan di Denpasar, Bali pada tanggal 2-4 Agustus 2006 yang bertujuan untuk menyempurnakan Anggaran Dasar/Anggaran Rumah Tangga (AD/ART), program kerja, dan rekomendasi serta mengukuhkan kepengurusan HIMPAUDI tingkat pusat.
                </div>
            </div>
            <div className="tentang-logo pt-20">
                <div className="pl-10 text-3xl font-bold text-white">
                    Logo HIMPAUDI
                </div>
                <div className="p-10 text-lg font-bold txt-secondary text-justify mt-10 flex flex-wrap justify-around items-center bg-trasnparent">
                    <div>
                        <img className='w-80' src={logo} alt="" />
                    </div>
                    <div className='text-white max-w-280 pt-5'>
                        <p>
                            <ol>
                                <li>1. BENDERA MERAH PUTIH BERKIBAR : Kibaran melambangkan semangat Indonesia dan dinamika HIMPAUDI</li>
                                <li>2. LOMPATAN ANAK DAN ORANG DEWASA MEMEGANG BENDERA : Gambaran upaya meraih cita-cita bangsa Indonesia</li>
                                <li>3. ANAK (KUNING EMAS) : Melambangkan Anak Indonesia dalam usia Perkembangan Emas (Golden Age)</li>
                                <li>4. ORANG DEWASA (BIRU): Melambangkan kematangan dan kemapanan Pendidik dan Tenaga Kependidikan anak usia dini</li>
                                <li>5. HATI DIANTARA ANAK DAN ORANG DEWASA : Melambangkan pertautan hati dan kasih sayang</li>
                            </ol>
                        </p>
                        <p className='mt-5'>
                            KESIMPULAN : “Gerakan, Semangat HIMPAUDI Berkibar di Seluruh Nusantara Dengan Berlandaskan Iman dan Taqwa, Saling Asah, Asih dan Asuh”
                        </p>
                    </div>
                </div>
                <div className='w-full h-100 bg-blue-500 absolute bottom-0 -z-1'></div>
            </div>
        </section>
    )
}

export default Tentang;