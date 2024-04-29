import "../styles/AboutUs.css";
import Navbar from "./Navbar.js";

const pageUs = () => {
  return (
    <div>
      <div className="page-us">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="bg-about">
          <div className="About-pandora">
            <h1>PANDORA</h1>
            <h3>(Play And Dance in Non-academic Raise)</h3>
            <p>
              Pandora adalah sebuah nama yang membawa makna mendalam, merujuk
              pada hadiah atau pemberian yang mengandung banyak makna filosofis.
              Dalam legenda kuno, Pandora dianggap sebagai perwujudan
              keingintahuan manusia yang tak terbatas. Ketika dia membuka kotak
              yang diberikan oleh para dewa, dia tidak hanya melepaskan berbagai
              macam tantangan ke dunia, tetapi juga membebaskan satu-satunya hal
              yang tersisa: harapan. Kotak Pandora yang berisi segala macam
              pengalaman hidup mencerminkan realitas kehidupan yang tidak selalu
              mudah, tetapi keberadaan harapan menawarkan sinar terang di tengah
              kegelapan. <br></br>Dalam konteks ini, kisah Pandora menjadi
              sebuah alegori yang mengajarkan kita bahwa meskipun kita mungkin
              dihadapkan pada tantangan yang besar, harapan selalu ada sebagai
              pengingat bahwa setiap kesulitan memiliki potensi untuk diatasi.
              Dengan harapan, kita mampu melihat jalan keluar dari kesulitan dan
              menuju kepada kesuksesan serta kebahagiaan yang kita dambakan.
            </p>
            <div className="maps">
              <h1 style={{ textAlign: "center", marginTop: "25px" }}>
                Location
              </h1>
              <h3>(Lokasi tepatnya di SMK Ananda Bekasi)</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.2326699158284!2d107.01927857453134!3d-6.233222561040469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e9652540235%3A0xb2a0314f822c2de3!2sSEKOLAH%20ANANDA%20BEKASI!5e1!3m2!1sid!2sid!4v1714357379034!5m2!1sid!2sid"
                  width="900"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageUs;
