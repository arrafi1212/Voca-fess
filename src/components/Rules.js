import React, { useState, useEffect } from "react";
import "../styles/Rules.css";
import Navbar from "./Navbar.js";

const Rules = () => {
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
      <div className="all-page">
        <div className="navbar-rls">
          <Navbar />
        </div>
        <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
          <button onClick={scrollToTop} title="Go to top">
            &#8593;
          </button>
        </div>
        <div className="box-rules">
          <div className="mobile-l">
            <h1>RULES MOBILE LEGEND</h1>
            <h3>A. PENGERTIAN</h3>
            <p>
              1. Peserta adalah kelompok yang terdiri dari 5 orang pemain utama
              dan 2 orang pemain cadangan yang telah memenuhi persyaratan
              peserta.
              <br />
              2. Peserta adalah siswa SMP/SMA/SMK/MTs sederajat
              <br />
              <br />
            </p>
            <h3>B. PERSYARATAN PESERTA</h3>
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
              4. Peserta wajib membayar biaya pendaftaran Rp.150.000.
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
            <h3>C. ATURAN LOMBA</h3>
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
              politik/SARA
              <br></br>
              <br></br>14. Dilarang menggunakan radio all<br></br>
              <br></br>15. Diperbolehkan taunting sewajarnya seperti Emote dan
              Recall-Recall<br></br>
              <br></br>16. Dilarang menggunakan chat all (kecuali “P” sebagai
              isyarat pause) Jika ada penggunaan chat all segera laporkan kepada
              pihak panitia dan mengirim bukti Screenshoot<br></br>
              <br></br>17. Detail pelaksanaan per babak:
              <br></br> • Kualifikasi
              <br></br> • Babak 16 besar: Eliminasi
              <br></br> • Semi Final (8 Besar): Best Off 3<br></br> • Final (4
              Besar) :Best Off 3<br></br> • Grand Final : Best Off 5<br></br>
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
            <h3>D. JADWAL LOMBA</h3>
            <p>
              1. Periode pendaftaran<br></br>
              2. Proses verifikasi peserta<br></br>
              3. Technical meeting<br></br>
              4. Kualifikasi<br></br>
              5. Babak 16 besar<br></br>
              6. Semi Final<br></br>
              7. Grand Final<br></br>
              8. Final
              <br />
              <br />
            </p>
            <h3>E. DOKUMENTASI ACARA</h3>
            <p>
              1. Pertandingan akan disiarkan secara Live Streaming di Youtube:
              @smk_ananda
              <br />
              2. Score game akan di publish di Instagram: @smk_ananda
              @osissmkananda
              <br></br>
              <br></br>
            </p>
            <h3>F. HADIAH LOMBA</h3>
            <p>
              • Juara 1 : Rp. 1.500.000
              <br></br>• Juara 2 : Rp. 1.000.000
              <br></br>• Juara 3 : Rp. 750.000
            </p>
          </div>
          <div className="modern-d">
            <h1>RULES MODERN DANCE</h1>
            <h3>A. PERSYARATAN PESERTA</h3>
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
              disediakan dari pihak panitia)
              <br />
              <br />
            </p>
            <h3>B. PERSYARATAN LOMBA</h3>
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
              DIDISKUALIFIKASI
              <br />
              <br />
            </p>
            <h3>C. TECHNICAL MEETING</h3>
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
              tersebut
              <br />
              <br />
            </p>
            <h3>D. ASPEK PENILAIAN</h3>
            <h4>a. Penilaian dinilai dari :</h4>
            <p>
              • Sinkronisasi <br></br>• Keluwesan <br></br>• Power
              <br></br>• Ekspresi <br></br>• Kostum yang digunakan <br></br>•
              Blocking <br></br>• Kreativitas
              <br />
              <br />
            </p>
            <h4>b. Estimasi Waktu</h4>
            <p>
              Prepare: 1 menit/tim<br></br> Perform: 3-4 menit<br></br> Overall
              Time: 60 Menit
              <br />
              <br />
            </p>
            <h3>E. HADIAH LOMBA</h3>
            <p>
              • Juara 1 : Rp. 1.000.000
              <br></br>• Juara 2 : Rp. 750.000
              <br></br>• Juara 3 : Rp. 500.000
              <br></br>Juara Favorit (ditentukan dari like terbanyak pada video
              MD yang diupload di IG SMK ANANDA BEKASI)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
