import "../styles/Competitive.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Comp2 = () => {
  const handleButtonClick = () => {
    // Redirect to the Google Form URL when the button is clicked
    window.open("https://s.id/Modern_dance", "_blank");
  };

  return (
    <div>
      <div className="md">
        <div className="md-nav">
          <Navbar />
          <div className="lyr-dpn-md"></div>
        </div>
        <div className="post-rules">
          <div className="rls">
            <h1>RULES MODERN DANCE</h1>
            <h2>A. PERSYARATAN PESERTA</h2>
            <p>
              1. Peserta lomba merupakan siswa SMP dan SMA/K dan dibuktikan
              dengan kartu pelajar <br />
              <br />
              2. Penggunaan nama tim peserta lomba MD tidak diperkenankan
              menggunakan nama tim yang mengandung unsur SARA dan seksualitas.
              Jika dilanggar, maka tim akan DIDISKUALIFIKASI <br></br>
              <br></br>
              3.Peserta wajib memberikan fotocopy kartu pelajar saat mendaftar
              ulang 4. Peserta menggunakan makeup dan kostum sendiri (tidak
              disediakan dari pihak panitia)<br></br>
              <br></br>
            </p>
            <h2>B. PERSYARATAN LOMBA</h2>
            <p>
              1. 1 tim berisi 3 - 8 orang. <br></br>
              <br></br>
              2. Lagu untuk perform berdurasi 3-4 menit.<br></br>
              <br></br>
              3. Lagu yang dipakai untuk lomba modern dance bersifat bebas,
              namun tidak boleh mengandung unsur SARA atau menyinggung suatu
              pihak.<br></br>
              <br></br>
              4. Diperbolehkan membawa dan menggunakan properti sendiri, seperti
              kipas, kursi, dll ( tidak sediakan dari panitia) . Namun, tidak
              diperbolehkan menggunakan confetti dan properti yang membahayakan
              penonton<br></br>
              <br></br>
              5. Kostum yang digunakan bebas & sopan.<br></br>
              <br></br>
              6. Lagu yang digunakan untuk perlombaan harus dikirimkan paling
              telat sebelum technical meeting dilaksanakan. Lagu dikirimkan ke
              PIC dalam bentuk MP3/MP4 <br></br>
              <br></br>
              7. Peserta diwajibkan datang tepat waktu saat lomba. Peserta akan
              dipanggil 3X untuk masuk ke dalam ruangan dan menampilkan
              performnya. Jika, peserta tidak maju, maka akan dianggap gugur/
              DIDISKUALIFIKASI<br></br>
              <br></br>
            </p>
            <h2>C. TECHNICAL MEETING</h2>
            <p>
              Sebelum perlombaan dilaksanakan, para peserta wajib mengikuti
              Technical Meeting yang diadakan oleh pihak panitia agar dapat
              mengetahui peraturan-peraturan serta informasi detail mengenai
              perlombaan yang akan diadakan. Dan Technical Meeting tersebut
              bersifat wajib diikuti oleh para peserta. <br></br>
              <br></br>• Peserta wajib datang tepat waktu dan mengikuti
              technical yang berlangsung/diadakan
              <br></br>• Para peserta akan diberikan informasi lebih lanjut
              mengenai pelaksaan technical meeting <br></br>
              <br></br>Para peserta yang tidak hadir/ikut dalam Technical
              Meeting, maka peserta dianggap sudah menerima dan akan mengikuti
              peraturan yang sudah diinformasikan dalam Technical Meeting
              tersebut<br></br>
              <br></br>
            </p>
            <h2>D. ASPEK PENILAIAN</h2>
            <h3>Penilaian dinilai dari :</h3>
            <p>
              • Sinkronisasi <br></br>• Keluwesan <br></br>• Power
              <br></br>• Ekspresi <br></br>• Kostum yang digunakan <br></br>•
              Blocking <br></br>• Kreativitas
            </p>
            <h3>Estimasi Waktu</h3>
            <p>
              Prepare: 1 menit/tim<br></br> Perform: 3-4 menit<br></br> Overall
              Time: 60 Menit<br></br>
              <br></br>
            </p>
            <h2>E. HADIAH LOMBA</h2>
            <p>
              • Juara 1 : Rp. 1.000.000
              <br></br>• Juara 2 : Rp. 750.000
              <br></br>• Juara 3 : Rp. 500.000
              <br></br>Juara Favorit (ditentukan dari like terbanyak pada video
              MD yang diupload di IG SMK ANANDA BEKASI)
            </p>
          </div>
        </div>
        <div className="daftar">
          <h2>PENDAFTARAN</h2>
        </div>
        <div className="page-center">
          <div className="container">
            <div className="text-row" style={{ marginTop: "20px" }}>
              <span>Biaya Pendaftaran :</span>
              <span>150 Ribu</span>
            </div>
            <button className="button-click" onClick={handleButtonClick}>
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Daftar Now!!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
