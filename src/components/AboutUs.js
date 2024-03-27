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
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageUs;
