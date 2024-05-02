import React, { useState, useEffect } from "react";
import "../styles/Competitive.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Comp1 = () => {
  const handleButtonClick = () => {
    // Redirect to the Google Form URL when the button is clicked
    window.open("https://s.id/mobile_legends", "_blank");
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div className="ml">
        <div className="ml-nav">
          <Navbar />
          <div className="lyr-dpn-ml"></div>
        </div>
        <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
          <button onClick={scrollToTop} title="Go to top">
            &#8593;
          </button>
        </div>
        <div className="post-rules">
          <div className="rls">
            <h1>RULES MOBILE LEGEND</h1>
            <h2>A. PENGERTIAN</h2>
            <p>
              1. Peserta adalah kelompok yang terdiri dari 5 orang pemain utama
              dan 2 orang pemain cadangan yang telah memenuhi persyaratan
              peserta.
              <br />
              <br />
              2. Peserta adalah siswa SMP/SMA/SMK/MTs sederajat.
              <br />
              <br />
            </p>
            <h2>B. PERSYARATAN PESERTA</h2>
            <p>
              1. Terbuka untuk siswa SMP/SMA/SMK/MTs sederajat lingkup kota dan
              kabupaten Bekasi.
              <br />
              <br />
              2. Masing masing sekolah hanya bisa mengirimkan maksimal 2 team.
              <br />
              <br />
              3. Pendaftaran hanya dibuka untuk 32 team tercepat yang sudah
              mengisi link g-form pendaftaran.
              <br />
              <br />
              4. Peserta wajib membayar WO sebesar Rp.50.000 dan biaya
              pendaftaran Rp.150.000.
              <br />
              <br />
              5. Peserta wajib melampirkan kartu pelajar, pas foto 3x4 dan nama
              lengkap pada saat mengisi link pendaftaran. <br />
              <br />
              6. Satu tim berisikan peserta peserta yang berasal dari sekolah
              yang sama.
              <br />
              <br />
            </p>
            <h2>C. ATURAN LOMBA</h2>
            <p>
              1. Peserta WAJIB mengikuti Technical Meeting. Sekolah tidak
              diperbolehkan melakukan pergantian peserta lomba sebelum H-5
              Technical Meeting.
              <br />
              <br />
              2. Panitia berhak menghentikan pertandingan kapanpun saat ada
              kesalahan permainan.<br></br>
              <br></br>3. Jika ada kendala jaringan atau hal hal yang tidak
              terprediksi maka akan diberikan kompensasi pause untuk
              masing-masing tim selama 3 kali × 2 menit.<br></br>
              <br></br>4. Saat salah satu tim menandakan SURREND/MENYERAH, maka
              tim yang menang akan langsung bermain ke pertandingan selanjutnya
              dan tim yang melakukan SURRENDER akan dinyatakan kalah pada match
              ke-2 pertandingan.<br></br>
              <br></br>5. Peserta wajib mengikuti pengecekan akun Cheat, Bug,
              Aplikasi Pihak ke-3 lainnya. Jika peserta diketahui menggunakannya
              maka satu tim akan langsung di diskualifikasi.<br></br>
              <br></br>6. Peserta diwajibkan memakai jaringan wifi yang telah di
              sediakan panitia.<br></br>
              <br></br>7. Peserta diwajibkan hadir 30 menit sebelum pertandingan
              dimulai. Jika 10 menit sebelum pertandingan belum hadir maka tim
              akan di diskualifikasi dan tim berhak menerima WO.<br></br>
              <br></br>8. Peserta wajib membawa headset pribadi masing-masing.
              <br></br>
              <br></br>9. Peserta dilarang berkata kasar, tidak pantas.<br></br>
              <br></br>10. Peserta diusahakan memiliki device yang mumpuni.
              <br></br>
              <br></br>11. Peserta diwajibkan membawa lima orang supporter.
              <br></br>
              <br></br>12. Peserta wajib mengikuti aturan yang berlaku di
              lingkungan sekolah Ananda<br></br>
              <br></br>13. Nama tim & Nickname tidak mengandung unsur
              politik/SARA<br></br>
              <br></br>14. Dilarang menggunakan radio all<br></br>
              <br></br>15. Diperbolehkan taunting sewajarnya seperti Emote dan
              Recall-Recall<br></br>
              <br></br>16. Dilarang menggunakan chat all (kecuali “P” sebagai
              isyarat pause) Jika ada penggunaan chat all segera laporkan kepada
              pihak panitia dan mengirim bukti Screenshoot<br></br>
              <br></br>17. Detail pelaksanaan per babak:
              <br></br> • Kualifikasi
              <br></br> • Babak 16 besar: Eliminasi
              <div className="spacing-box">
                <div className="spacing">
                  <p>• Semi Final (8 Besar) </p>
                  <p>: Best Off 3</p>
                </div>
                <div className="spacing">
                  <p>• Final (4 Besar) </p>
                  <p>: Best Off 3</p>
                </div>
                <div className="spacing">
                  <p>• Grand Final </p>
                  <p>: Best Off 5</p>
                </div>
                <br></br>
              </div>
              <br></br>18. Perwakilan setiap tim wajib mengirimkan bukti
              Screenshoot
              <br></br> • Screenshoot lobi
              <br></br> • Screenshoot hasil pertandingan<br></br>
              <br></br>19. Peserta tim wajib sudah berlangganan
              <br></br> • Instagram: @smk_ananda @osissmkananda
              <br></br> • Youtube: @smk_ananda
              <br />
              <br />
            </p>
            <h2>D. JADWAL LOMBA</h2>
            <p>
              1.Periode pendaftaran<br></br>
              2.Proses verifikasi peserta<br></br>
              3.Technical meeting<br></br>
              4.Kualifikasi<br></br>
              5.Babak 16 besar<br></br>
              6.Semi Final<br></br>
              7.Grand Final<br></br>
              8.Final
              <br />
              <br />
            </p>
            <h2>E. DOKUMENTASI ACARA</h2>
            <p>
              1.Pertandingan akan disiarkan secara Live Streaming di Youtube:
              @smk_ananda
              <br />
              <br />
              2.Score game akan di publish di Instagram: @smk_ananda
              @osissmkananda <br></br><br></br>
            </p>
            <h2>F. HADIAH  LOMBA</h2>
            <p>
                • Juara 1 : Rp. 1.500.000
                <br></br>• Juara 2 : Rp. 1.000.000
                <br></br>• Juara 3 : Rp. 750.000
            </p>
          </div>
        </div>
        <div className="daftar">
          <h2>PENDAFTARAN</h2>
        </div>
        <div className="page-center">
          <div className="container">
            <div className="text-row" style={{marginTop: "20px"}}>
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

export default Comp1;
