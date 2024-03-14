import "../Competitive.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Comp3 = () => {
  return (
    <div>
      <div className="cp">
        <div className="cp-nav">
          <Navbar />
          <div className="lyr-dpn-cp"></div>
        </div>
        <div className="post-rules">
          <div className="rls">
            <h1>RULES COSPLAY</h1>
            <h2>A. PERSYARATAN LOMBA</h2>
            <p>
              1. Peserta merupakan Siswa/i SMP & SMA/K Se-kabupaten Kota Bekasi
              <br />
              <br />
              2. Dalam satu team terdiri dari 1-2 orang (single/couple)
              <br />
              <br />
              3. Perform perteam berdurasi 1-2 menit
              <br />
              <br />
              4. Kostum yang digunakan pada saat cosplay bersifat bebas dan
              sopan (tidak di anjurkan untuk menggunakan costum yang mengandung
              unsur SARA/menyinggung suatu pihak yang berakibat peserta
              di-diskualifikasi oleh pihak panitia)
              <br />
              <br />
              5. Peserta dilarang untuk menggunakan pakaian yang terlalu vulgar
              (jika menggunakan bawahan yang terlalu pendek, dapat menggunakan
              stocking)
              <br />
              <br />
              6. Peserta diperbolehkan untuk membawa makeup dan menggunakan
              properti sendiri (tidak disediakan oleh panitia), Namun tidak
              dianjurkan untuk membawa dan menggunakan conffeti / properti yang
              membahayakan penonton.
            </p>
            <h2>TECHNICAL MEETING</h2>
            <p>
              Adapun technical meeting yang di adakan panitia untuk mengetahui
              peraturan² selama berjalannya acara, jika tidak ikut hadir dalam
              technical meeting, maka peserta dianggap sudah menerima peraturan
              technical meeting tersebut.
              <br />
              <br /> - Perserta wajib datang dan mengetahui technical saat lomba
              berlangsung seperti menentukan peraturan dalam berpakaian
              <br></br> - Memberikan arahan selama berjalannya acara cosplay
            </p>
            <h2>ASPEK PENILAIAN</h2>
            <h3>Ketentuan Pemenang:</h3>
            <p>
              - Juara 1 : Rp. 500.000<br></br> - Juara 2 : Rp. 400.000<br></br>{" "}
              - Juara 3 : Rp. 300.000
            </p>
            <h3>Penilaian dinilai dari :</h3>
            <p>
              - Kemiripan karakter<br></br> - Penguasaan panggung<br></br> -
              Costum yang digunakan peserta<br></br> - Properti (tidak
              dianjurkan untuk membawa benda tajam)<br></br> - Ekspresi yang
              ditunjukan peserta sesuai dengan karakter cosplay
            </p>
            <h3>Estimasi Waktu</h3>
            <p>
              Prepare : 2 menit (untuk maju bergiliran)<br></br> Fashion Show :
              1-2 menit/Peserta<br></br> Overall Time : 60-65 menit
            </p>
            <h3>PERLENGKAPAN</h3>
            <p>
              - Speaker (backsound)<br></br> - Mic 2 (untuk juri)<br></br> -
              Meja 2 (untuk juri)<br></br> - Kursi 2 (untuk juri)<br></br> -
              Minuman 2 (untuk juri)<br></br> - Taplak meja (optional)
            </p>
          </div>
        </div>
        <div className="kotak">
          <h2>PENDAFTARAN</h2>
          <div className="page-center">
            <div className="container">
              <div className="text-row">
                <span>Biaya Pendaftaran :</span>
                <span>-- Ribu</span>
              </div>
              <div className="text-row">
                <span>WO/Jaminan :</span>
                <span>-- Ribu</span>
              </div>
              <button className="button-click">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Daftar Now!!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
