const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              hallo! I'm a student from Faculty of Computer Science and majoring in Informatics
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="src/assets/img/beve.jpg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer</h3>
              <p className="fst-italic">
                Saya memiliki kemampuan yang cukup mendalam di bidang desain website
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Ulang Tahun : </strong> <span>22 Januari 2004</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Hobi : </strong> <span>Membaca Buku</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>No Telp : </strong>{" "}
                      <span>0895 1273 5774</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Asal : </strong> <span>Kota Bitung</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Umur : </strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Sarjana : </strong>{" "}
                      <span>Ilmu Komputer (S1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email : </strong> <span>beverly.lukas2020@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance : </strong> <span>Input Data</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Saya akan terus belajar untuk perkembangan website yang lebih dinamis demi kemajuan teknologi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};
export default About;
