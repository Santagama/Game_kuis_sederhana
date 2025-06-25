// Pertanyaan kuis
const soalKuis = [
  {
    pertanyaan: "Siapa Guru PIPAS X PPLG 1?",
    pilihan: ["Pak Jokowi", "Pak Yogi", "Pak Anies", "Pak Tata"],
    jawabanBenar: "Pak Yogi"
  },
  {
    pertanyaan: "Bahasa pemrograman untuk Game Web adalah?",
    pilihan: ["Python", "C++", "HTML", "Java"],
    jawabanBenar: "HTML"
  },
  {
    pertanyaan: "Pencipta lagu 'Indonesia Raya' adalah?",
    pilihan: ["Wage Rudolf Supratman", "Ismail Marzuki", "H. Mutahar", "Ibu Sud"],
    jawabanBenar: "Wage Rudolf Supratman"
  },
  {
    pertanyaan: "Apa itu Bitcoin?",
    pilihan: ["Aplikasi chatting untuk trader crypto", "Situs jual beli emas online", "Mata uang digital pertama yang terdesentralisasi", "Game blockchain populer"],
    jawabanBenar: "Mata uang digital pertama yang terdesentralisasi"
  },
  {
    pertanyaan: "Apa singkatan dari jurusan PPLG?",
    pilihan: ["Perkumpulan Pemalas Lupa Gajian", "Pasukan Pencari Listrik Gratis", "Pasukan Pecinta Lagu Galau", "Pengembangan Perangkat Lunak dan Gim"],
    jawabanBenar: "Pengembangan Perangkat Lunak dan Gim"
  },
  {
    pertanyaan: "Siapa penemu komputer pertama di dunia?",
    pilihan: ["Charles Babbage", "Timothy Ronald", "Kalimasada", "Elon Musk"],
    jawabanBenar: "Charles Babbage"
  },
  {
    pertanyaan: "Apa fungsi dari Hati dalam tubuh manusia?",
    pilihan: ["Mengobati sakit yg telah lama luka", "Menyimpan kenangan yg susah dilupakan", "Menyaring racun dari darah", "Tempat rasa cinta dan rindu"],
    jawabanBenar: "Menyaring racun dari darah"
  },
  {
    pertanyaan: "Siapa presiden pertama Republik Indonesia?",
    pilihan: ["Mr Tata", "Ir. Soekarno", "Gus Miftah", "Prof. Hanan Aria Santagama"],
    jawabanBenar: "Ir. Soekarno"
  },
  {
    pertanyaan: "Jika Hanan berangkat sekolah dgn jarak 16 KM dgn kecepatan 90KM/Jam, berapa menit dia sampai kesekolah?",
    pilihan: ["20 menit 30 detik", "10 menit 40 detik", "15 menit 20 detik", "7 menit 10 detik"],
    jawabanBenar: "10 menit 40 detik"
  },
  {
    pertanyaan: "Apa fungsi RAM pada komputer?",
    pilihan: ["Mendinginkan CPU", "Menyimpan data sementara", "Menampilkan gambar", "Menghubungkan ke internet"],
    jawabanBenar: "Menyimpan data sementara"
  }
];

let indeksSoal = 0;
let skor = 0;

const pertanyaanEl = document.getElementById("pertanyaan");
const pilihanEl = document.getElementById("pilihan-jawaban");
const nextBtn = document.getElementById("next-btn");
const skorBox = document.getElementById("skor-box");
const skorAkhir = document.getElementById("skor-akhir");
const welcomeBox = document.getElementById("welcome-box");
const mulaiBtn = document.getElementById("mulai-btn");
const kuisBox = document.getElementById("kuis-box");

// Sembunyikan kuis saat awal
kuisBox.classList.add("hidden");

// Event tombol mulai
mulaiBtn.addEventListener("click", () => {
  welcomeBox.classList.add("hidden");
  kuisBox.classList.remove("hidden");
  tampilkanSoal();
});

function tampilkanSoal() {
  resetState();
  const soal = soalKuis[indeksSoal];
  pertanyaanEl.textContent = soal.pertanyaan;

  soal.pilihan.forEach(pilihan => {
    const btn = document.createElement("button");
    btn.textContent = pilihan;
    btn.addEventListener("click", () => pilihJawaban(btn, soal.jawabanBenar));
    pilihanEl.appendChild(btn);
  });
}

function pilihJawaban(btn, jawabanBenar) {
  const semuaBtn = pilihanEl.querySelectorAll("button");
  semuaBtn.forEach(b => b.disabled = true);
  if (btn.textContent === jawabanBenar) {
    btn.classList.add("correct");
    skor++;
  } else {
    btn.classList.add("wrong");
    semuaBtn.forEach(b => {
      if (b.textContent === jawabanBenar) {
        b.classList.add("correct");
      }
    });
  }
  nextBtn.disabled = false;
}

function resetState() {
  nextBtn.disabled = true;
  pilihanEl.innerHTML = "";
}

nextBtn.addEventListener("click", () => {
  indeksSoal++;
  if (indeksSoal < soalKuis.length) {
    tampilkanSoal();
  } else {
    tampilkanSkor();
  }
});

function tampilkanSkor() {
  kuisBox.classList.add("hidden");
  skorBox.classList.remove("hidden");
  skorAkhir.textContent = `${skor} dari ${soalKuis.length} benar`;

  const pesanSkor = document.getElementById("pesan-skor");
  let pesan = "";
  pesanSkor.classList.remove("super-gacor");

  if (skor === 10) {
    pesan = "SUPER GACOR!!🔥💯✔️";
    pesanSkor.classList.add("super-gacor");
  } else if (skor === 9) {
    pesan = "Mantap Bree..✔️";
  } else if (skor === 8) {
    pesan = "Mayan Lahh..🤔";
  } else if (skor === 7) {
    pesan = "Lumayan Sihh..😐";
  } else if (skor <= 6) {
    pesan = "Ah Elu Cemen! 😹👎";
  }
  pesanSkor.textContent = pesan;
}