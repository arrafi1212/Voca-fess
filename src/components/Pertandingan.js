import "../styles/Pertandingan.css";
import Navbar from "./Navbar.js";

const Pertandingan = () => {
  return (
    <div>
      <div className="page-us">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="tbl-bg">
          <div className="tbl-competition">
            <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
              Klasemen Group Mobile Legend
            </h1>
            <h3>Group 1</h3>
            <table className="group1" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Name Team</th>
                <th>T</th>
                <th>M</th>
                <th>K</th>
                <th>Total Kill</th>
                <th>Point</th>
              </tr>
              <tr>
                <td>SMP Ananda Team A</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
                <td>65</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Gacorrr</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>71</td>
                <td>6</td>
              </tr>
              <tr>
                <td>RJ 45</td>
                <td>3</td>
                <td>1</td>
                <td>2</td>
                <td>41</td>
                <td>3</td>
              </tr>
              <tr>
                <td>DTA</td>
                <td>3</td>
                <td>0</td>
                <td>3</td>
                <td>42</td>
                <td>6</td>
              </tr>
            </table>
            <h3>Group 2</h3>
            <table className="group2" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Name Team</th>
                <th>T</th>
                <th>M</th>
                <th>K</th>
                <th>Total Kill</th>
                <th>Point</th>
              </tr>
              <tr>
                <td>SMA Mutiara 17</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>38</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Cucu Zeus</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>25</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Jalan Baru</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
                <td>15</td>
                <td>0</td>
              </tr>
            </table>
            <h3>Group 3</h3>
            <table className="group3" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Name Team</th>
                <th>T</th>
                <th>M</th>
                <th>K</th>
                <th>Total Kill</th>
                <th>Point</th>
              </tr>
              <tr>
                <td>Ngantuk Gue</td>
                <td>3</td>
                <td>3</td>
                <td>0</td>
                <td>39</td>
                <td>9</td>
              </tr>
              <tr>
                <td>SMP Ananda Team B</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>48</td>
                <td>6</td>
              </tr>
              <tr>
                <td>PKI</td>
                <td>3</td>
                <td>1</td>
                <td>3</td>
                <td>36</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Hollow Purple</td>
                <td>3</td>
                <td>0</td>
                <td>3</td>
                <td>11</td>
                <td>0</td>
              </tr>
            </table>
            <h3>Group 4</h3>
            <table className="group4" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Name Team</th>
                <th>T</th>
                <th>M</th>
                <th>K</th>
                <th>Total Kill</th>
                <th>Point</th>
              </tr>
              <tr>
                <td>Manipulators</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>49</td>
                <td>6</td>
              </tr>
              <tr>
                <td>ACL</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>19</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Jek Ganteng</td>
                <td>2</td>
                <td>0</td>
                <td>2</td>
                <td>10</td>
                <td>0</td>
              </tr>
            </table>

            <h3>Keterangan:</h3>
            <h5>T : Tanding</h5>
            <h5>M : Menang</h5>
            <h5>K : Kalah</h5>
            <table className="ket-table">
              <tr>
                <td>Juara Grup</td>
              </tr>
              <tr>
                <td>Runner Up Group</td>
              </tr>
            </table>

            <h1 style={{ textAlign: "center", margin: "25px" }}>
              Jadwal Pertandingan
            </h1>

            <h3>22-04-2024</h3>
            <table className="tanggal-22" style={{ marginBottom: "25px" }}>
              <tr>
                <th></th>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td>Match I</td>
                <td>GACORRR</td>
                <td>08.15-09.05 </td>
                <td>DTA</td>
                <td>29 - 24 </td>
                <td>GACORRR</td>
              </tr>
              <tr>
                <td>Match II </td>
                <td>RJ45</td>
                <td>09.05-09..55 </td>
                <td>SMP ANANDA TEAM A </td>
                <td>18 - 30 </td>
                <td>SMP ANANDA TEAM A</td>
              </tr>
              <tr>
                <td>Match III</td>
                <td>GACORRR</td>
                <td>09.55-10.45 </td>
                <td>RJ45</td>
                <td>23 - 7 </td>
                <td>GACORRR</td>
              </tr>
              <tr>
                <td>Match IV</td>
                <td>DTA</td>
                <td>10.45-11.35 </td>
                <td>SMP ANANDA TEAM A </td>
                <td>5 - 18 </td>
                <td>SMP ANANDA TEAM A</td>
              </tr>
              <tr>
                <td>Match V</td>
                <td>GACORRR</td>
                <td>11.35-12.00 </td>
                <td>SMP ANANDA TEAM A </td>
                <td>19 - 17 </td>
                <td>SMP ANANDA TEAM A</td>
              </tr>
              <tr>
                <td>Match VI</td>
                <td>DTA</td>
                <td>13.00-13.50</td>
                <td>RJ45</td>
                <td>13 - 16</td>
                <td>RJ45</td>
              </tr>
              <tr>
                <td>Match VII</td>
                <td>SMA MUTIARA 17</td>
                <td>13.50-14.40 </td>
                <td>CUCU ZEUS</td>
                <td>18 - 3</td>
                <td>SMA MUTIARA 17</td>
              </tr>
              <tr>
                <td>Match VIII</td>
                <td>CUCU ZEUS</td>
                <td>14.40-15.30</td>
                <td>JALAN BARU</td>
                <td>22 - 11</td>
                <td>CUCU ZEUS</td>
              </tr>
              <tr>
                <td>Match IX</td>
                <td>JALAN BARU</td>
                <td>15.30-16.20</td>
                <td>SMA MUTIARA 17</td>
                <td>4 - 20</td>
                <td>SMA MUTIARA 17</td>
              </tr>
            </table>

            <h3>23-04-2024</h3>
            <table className="tanggal-23" style={{ marginBottom: "25px" }}>
              <tr>
                <th></th>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td>Match I</td>
                <td>PKI</td>
                <td>08.10-09.00 </td>
                <td>Hollow Purple</td>
                <td>25 - 2 </td>
                <td>PKI</td>
              </tr>
              <tr>
                <td>Match II</td>
                <td>Ngantuk Gua</td>
                <td>09.00-09.50 </td>
                <td>SMP Ananda Team B</td>
                <td>14 - 13 </td>
                <td>Ngantuk Gua</td>
              </tr>
              <tr>
                <td>Match III</td>
                <td>PKI</td>
                <td>09.50-10.40 </td>
                <td>Ngantuk Gua</td>
                <td>3 - 12 </td>
                <td>Ngantuk Gua</td>
              </tr>
              <tr>
                <td>Match IV</td>
                <td>Hollow Purple</td>
                <td>10.40-11.30 </td>
                <td>SMP Ananda Team B</td>
                <td>5 - 18 </td>
                <td>SMP Ananda Team B</td>
              </tr>
              <tr>
                <td>Match V</td>
                <td>PKI</td>
                <td>11.30-12.20 </td>
                <td>SMP Ananda Team B</td>
                <td>8 - 17</td>
                <td>SMP Ananda Team B</td>
              </tr>
              <tr>
                <td>Match VI</td>
                <td>Hollow Purple</td>
                <td>13.00-13.50 </td>
                <td>Ngantuk Gua</td>
                <td>4 - 13</td>
                <td>Ngantuk Gua</td>
              </tr>
              <tr>
                <td>Match VII</td>
                <td>Manipulators</td>
                <td>13.50-14.40 </td>
                <td>Jek Ganteng</td>
                <td>29 - 7</td>
                <td>Manipulators</td>
              </tr>
              <tr>
                <td>Match VIII</td>
                <td>Jek Ganteng</td>
                <td>14.40-15.30 </td>
                <td>ACL</td>
                <td>3 - 15</td>
                <td>ACL</td>
              </tr>
              <tr>
                <td>Match IX</td>
                <td>Manipulators</td>
                <td>15.30-16.20 </td>
                <td>ACL</td>
                <td>20 - 4</td>
                <td>Manipulators</td>
              </tr>
            </table>

            <h3>24-04-2024 (Semi-Final)</h3>
            <table className="tanggal-24" style={{ marginBottom: "25px" }}>
              <tr>
                <th></th>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td>Match I</td>
                <td>SMP Ananda Team A</td>
                <td>08.10-09.00 </td>
                <td>CUCU ZEUS</td>
                <td>1-0</td>
                <td>SMP Ananda Team A</td>
              </tr>
              <tr>
                <td>Match II</td>
                <td>SMP Ananda Team A</td>
                <td>09.00-09.50 </td>
                <td>CUCU ZEUS</td>
                <td>2-0</td>
                <td>SMP Ananda Team A</td>
              </tr>
              <tr>
                <td>Match III</td>
                <td>SMP Ananda Team A</td>
                <td>09.50-10.40 </td>
                <td>CUCU ZEUS</td>
                <td>-</td>
                <td>SMP Ananda Team A</td>
              </tr>
              <tr>
                <td>Match IV</td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>10.40-11.30 </td>
                <td>GACORRR</td>
                <td>1-0</td>
                <td>SMA Mutiara 17 Agustus</td>
              </tr>
              <tr>
                <td>Match V</td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>11.30-12.20 </td>
                <td>GACORRR</td>
                <td>2-0</td>
                <td>SMA Mutiara 17 Agustus</td>
              </tr>
              <tr>
                <td>Match VI</td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>13.00-13.50 </td>
                <td>GACORRR</td>
                <td>-</td>
                <td>SMA Mutiara 17 Agustus</td>
              </tr>
              <tr>
                <td>Match VII</td>
                <td>SMP Ananda Team A</td>
                <td>13.50-14.40 </td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>1-0</td>
                <td>SMP Ananda Team A</td>
              </tr>
              <tr>
                <td>Match VIII</td>
                <td>SMP Ananda Team A</td>
                <td>14.40-15.30 </td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>2-0</td>
                <td>SMP Ananda Team A</td>
              </tr>
              <tr>
                <td>Match IX</td>
                <td>SMP Ananda Team A</td>
                <td>15.30-16.20 </td>
                <td>SMA Mutiara 17 Agustus</td>
                <td>-</td>
                <td>SMP Ananda Team A</td>
              </tr>
            </table>

            <h3>25-04-2024 (Semi-Final)</h3>
            <table className="tanggal-25" style={{ marginBottom: "25px" }}>
              <tr>
                <th></th>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td>Match I</td>
                <td>NGANTUK GUE</td>
                <td>08.10-09.00 </td>
                <td>ACL</td>
                <td>1-0</td>
                <td>NGANTUK GUE</td>
              </tr>
              <tr>
                <td>Match II</td>
                <td>NGANTUK GUE</td>
                <td>09.00-09.50 </td>
                <td>ACL</td>
                <td>2-0</td>
                <td>NGANTUK GUE</td>
              </tr>
              <tr>
                <td>Match III</td>
                <td>NGANTUK GUE</td>
                <td>09.50-10.40 </td>
                <td>ACL</td>
                <td>-</td>
                <td>NGANTUK GUE</td>
              </tr>
              <tr>
                <td>Match IV</td>
                <td>MANIPULATORS</td>
                <td>10.40-11.30 </td>
                <td>SMP ANANDA TEAM B</td>
                <td>1-0</td>
                <td>MANIPULATORS</td>
              </tr>
              <tr>
                <td>Match V</td>
                <td>MANIPULATORS</td>
                <td>11.30-12.20 </td>
                <td>SMP ANANDA TEAM B</td>
                <td>2-0</td>
                <td>MANIPULATORS</td>
              </tr>
              <tr>
                <td>Match VI</td>
                <td>MANIPULATORS</td>
                <td>13.00-13.50 </td>
                <td>SMP ANANDA TEAM B</td>
                <td>-</td>
                <td>MANIPULATORS</td>
              </tr>
              <tr>
                <td>Match VII</td>
                <td>NGANTUK GUE</td>
                <td>13.50-14.40 </td>
                <td>MANIPULATORS</td>
                <td>1-0</td>
                <td>NGANTUK GUE</td>
              </tr>
              <tr>
                <td>Match VIII</td>
                <td>NGANTUK GUE</td>
                <td>14.40-15.30 </td>
                <td>MANIPULATORS</td>
                <td>1-1</td>
                <td>MANIPULATORS</td>
              </tr>
              <tr>
                <td>Match IX</td>
                <td>NGANTUK GUE</td>
                <td>15.30-16.20 </td>
                <td>MANIPULATORS</td>
                <td>1-2</td>
                <td>MANIPULATORS</td>
              </tr>
            </table>

            <h3>26-04-2024 (Bronze Match)</h3>
            <table className="tanggal-26" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td className="tanding-bronze">SMA MUTIARA 17</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">NGANTUK GUE </td>
                <td className="tanding-bronze-skor">1-0</td>
                <td className="tanding-bronze-win">SMA MUTIARA 17</td>
              </tr>
              <tr>
                <td className="tanding-bronze">SMA MUTIARA 17</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">NGANTUK GUE </td>
                <td className="tanding-bronze-skor">2-0</td>
                <td className="tanding-bronze-win">SMA MUTIARA 17</td>
              </tr>
            </table>

            <h3>26-04-2024 (Final Match)</h3>
            <table className="tanggal-26" style={{ marginBottom: "25px" }}>
              <tr>
                <th>Nama Team</th>
                <th>VS</th>
                <th>Nama Team</th>
                <th>Hasil Pertandingan</th>
                <th>Juara</th>
              </tr>
              <tr>
                <td className="tanding-bronze">SMP ANANDA TEAM A</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">MANIPULATORS</td>
                <td className="tanding-bronze-skor">0-1</td>
                <td className="tanding-bronze-final">MANIPULATORS</td>
              </tr>
              <tr>
                <td className="tanding-bronze">SMP ANANDA TEAM A</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">MANIPULATORS</td>
                <td className="tanding-bronze-skor">0-2</td>
                <td className="tanding-bronze-final">MANIPULATORS</td>
              </tr>
              <tr>
                <td className="tanding-bronze">SMP ANANDA TEAM A</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">MANIPULATORS</td>
                <td className="tanding-bronze-skor">1-2</td>
                <td className="tanding-bronze-final">SMP ANANDA TEAM A</td>
              </tr>
              <tr>
                <td className="tanding-bronze">SMP ANANDA TEAM A</td>
                <td className="tanding-bronze-vs">VS</td>
                <td className="tanding-bronze">MANIPULATORS</td>
                <td className="tanding-bronze-skor">1-3</td>
                <td className="tanding-bronze-final">MANIPULATORS &#129351;</td>
              </tr>
            </table>

            <h3>FINAL SKOR</h3>
            <table className="tanggal-26" style={{ marginBottom: "25px" }}>
              <tr>
                <td className="final-1">MANIPULATORS&#129351;</td>
              </tr>
              <tr>
                <td className="final-2">SMP ANANDA TEAM A&#129352;</td>
              </tr>
              <tr>
                <td className="final-3">SMA MUTIARA 17&#129353;</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pertandingan;
