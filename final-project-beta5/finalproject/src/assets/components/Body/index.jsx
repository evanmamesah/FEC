const Body = () => {
  return (
    <div id="wrapper">
      
      {/*__--__--__--__--  M A I N   C O N T E N T  --__--__--__--___--__--__*/}
      <section>
        <div id="line">
          <div className="dline" />
          <h1>Kumpulan Berita</h1>
          <div className="dline" />
        </div>
        <div id="ourserv">
          <article>
            <h1>Dr. Novie P. Sibilang, SE, Ak, MSC, Tentang Kampus Transformatif</h1>
            <img src="images/1.jpg" alt />
            <p>
            Satu-satunya hal yang akan tetap konsisten terjadi adalah perubahan. Suka atau 
            tidak suka, semua harus berdamai dengan proses itu. 
            </p>
            <a href="fullwidth.html" className="rm">
              Read More
            </a>
          </article>
          <article>
            <h1>Lumiere D’Amore, Boys & Girls Formal</h1>
            <img src="images/2.jpg" alt />
            <p>
            “Mempesonanya kamu, menyungging senyummu Menghiasi raut wajahmu, 
            Mendiamkan detak jantungku Mataku jadi pencuri senyummu, yang menghantam 
            jantungku Bingung tak menentu... 
            </p>
            <a href="fullwidth.html" className="rm">
              Read More
            </a>
          </article>
          <article className="lastarticle">
            <h1>UNKLAB di 10th International Scholars’ Conference, Filipina</h1>
            <img src="images/3.jpg" alt />
            <p>
            Belum lama ini Universitas Klabat mengambil bagian dalam International Scholars’ 
            Conference yang berlangsung di Adventist University of the Philippines (AUP),...
            </p>
            <a href="fullwidth.html" className="rm">
              Read More
            </a>
          </article>
        </div>
        <div id="sline">
          <div className="sdline" />
          <h1>Berita Terkini</h1>
          <div className="sdline" />
        </div>
        <div id="latestp">
          <article>
            <h1>Sambangi SMKN 1 Manado, UNKLAB Perluas Dimensi dan Buka Wawasan para Siswa.</h1>
            <img src="images/1s.jpg" alt />
            <p>
            Bertepatan dengan peringatan Hari Pahlawan 10 November, Universitas Klabat (UNKLAB) 
            melakukan kunjungan ke SMK Negeri 1 Manado dalam rangkaian kegiatan...
            </p>
            <a href="singlepost.html" className="rm">
              Read More
            </a>
          </article>
          <article>
            <h1>The UNKLAB FEB Choir Home Coming Concert: Canticles of Praises Sparkling, TUFC is Back</h1>
            <img src="images/2s.jpg" alt />
            <p>
            Dulu namanya The UNKLAB Fekon Choir (TUFC). Tapi akrab dengan sebutan Fekon Choir. 
            Sempat ada friksi ketika nama hendak diubah...
            </p>
            <a href="singlepost.html" className="rm">
              Read More
            </a>
          </article>
          <article>
            <h1>Cerdas Cermat Pasar Modal: SMA Eben Haezar Manado Amankan Gelar Juara</h1>
            <img src="images/3s.jpg" alt />
            <p>
            Digitalisasi menjadi buah bibir di segala sektor industry, imbas dari 
            bergesernya dunia secara global ke pusaran Revolusi Industri 4.0 dimana...
            </p>
            <a href="singlepost.html" className="rm">
              Read More
            </a>
          </article>
          <article className="lastarticle">
            <h1>UNKLAB Meraih Prestasi Tertinggi dalam Kegiatan Gerakan Nasional 1000 Startup</h1>
            <img src="images/4s.jpg" alt />
            <p>
            Bertempat di Ruang SH Sarundajang Kantor Walikota Bitung, Pemerintah Kota Bitung 
            belum lama ini menggelar sebuah event bertajuk #Hack4ID. Kegiatan...
            </p>
            <a href="singlepost.html" className="rm">
              Read More
            </a>
          </article>
        </div>
      </section>
      {/*__--__--__--__--  T H E    F O O T E R --__--__--__--___--__--__--__*/}
      
    </div>
  );
}

export default Body