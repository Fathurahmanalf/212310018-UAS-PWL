from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Decision tree structure
decision_tree = {
    1: {
        "question": "Halooo, Selamat Datang di Happy Parenting.<br>Bantuan Apa Yang Anda Perlukan?",
        "answers": {
            "1. Mengatasi Anak Tantrum": 3,    
            "2. Mengatasi Anak Stunting": 13,
            "3. Berbagai Tips Parenting yang Baik": 11,
            "4. Menumbuhkan Minat Anak dalam Membaca": 6,
            "5. Keseimbangan Hidup yang Sehat": 10,
            "6. Cara Mengatasi Anak Kecanduan Gadget":12
        }
    },
    # 2: {
    #     "answers": {
    #         "1. Mengatasi Anak Tantrum": 3,    
    #         "2. Mengatasi Anak Stunting": 13,
    #         "3. Berbagai Tips Parenting yang Baik": 11,
    #         "4. Menumbuhkan Minat Anak dalam Membaca": 6,
    #         "5. Keseimbangan Hidup yang Sehat": 10,
    #         "6. Cara Mengatasi Anak Kecanduan Gadget":12
    #     }
    # },
    3: {
        "question": "Apa yang anak anda alami ketika tantrum?",
        "answers": {
           "1. Berteriak":8, 
           "2. Menangis":7, 
           "3. Berguling di lantai":9
        }
    },
    4: {
        "question": "",
        "answers": {
        
        }
    },
    6: {
        "question": "Bagaimana Menumbuhkan Minat Anak dalam Membaca?<br><br>Membaca merupakan kunci untuk mengembangkan pengetahuan dan imajinasi anak. Pertanyaan tentang parenting anak berkualitas pertama ini mengajak Bunda untuk merenung tentang cara menumbuhkan minat anak dalam membaca. Diskusikan kegiatan membaca bersama, pilihan buku yang sesuai, dan cara membuat proses membaca menjadi pengalaman yang menyenangkan. Dengan merenungkan dan merespons pertanyaan-pertanyaan tentang parenting anak berkualitas pertama ini, Bunda dapat membangun landasan yang kokoh untuk parenting anak berkualitas. Ingatlah, setiap anak unik, dan pendekatan yang penuh kasih sayang dan pengertian adalah kunci utama.<br><br>Apakah Jawaban Ini Membantu?",
         "answers": {
            "1. Mengatasi Anak Tantrum": 3,    
            "2. Mengatasi Anak Stunting": 6,
            "3. Berbagai Tips Parenting yang Baik": 11,
            "4. Menumbuhkan Minat Anak dalam Membaca": 6,
            "5. Keseimbangan Hidup yang Sehat": 10,
            "6. Cara Mengatasi Anak Kecanduan Gadget":12
        }
    },
    7: {
        "question": "<b>Mengatasi anak yang sedang tantrum dengan menangis</b> <br><br> membutuhkan pendekatan yang penuh pengertian dan sabar. Pertama, sangat penting bagi orang tua atau pengasuh untuk tetap tenang karena anak-anak sering kali meniru emosi orang dewasa di sekitarnya. Biarkan anak menangis untuk sementara waktu jika mereka berada di tempat yang aman. Menangis adalah cara anak untuk mengekspresikan emosi mereka, dan memberi mereka ruang untuk melakukannya bisa membantu mereka menenangkan diri.<br><br>Akui perasaan anak dengan mengatakan sesuatu seperti, Saya tahu kamu sedang merasa marah/sedih/frustrasi, untuk membantu anak merasa didengar dan dipahami. Pelukan atau sentuhan fisik yang lembut seperti tepukan di punggung bisa sangat menenangkan bagi anak yang sedang menangis, tetapi hanya jika anak tidak menolak sentuhan tersebut. Coba alihkan perhatian anak dengan sesuatu yang lain, seperti mainan favorit atau aktivitas yang mereka sukai.<br><br> Setelah anak tenang, bicarakan tentang apa yang terjadi dan bagaimana mereka bisa mengekspresikan perasaan mereka dengan cara yang lebih baik di masa mendatang. Pastikan untuk tetap konsisten dengan aturan dan batasan yang sudah ditetapkan karena konsistensi membantu anak merasa aman dan tahu apa yang diharapkan. Cobalah untuk memahami apa yang menyebabkan tantrum, seperti lapar, lelah, atau frustrasi, karena mengetahui penyebabnya dapat membantu mencegah tantrum di masa depan. Dengan pendekatan yang sabar dan penuh kasih, anak-anak akan belajar cara mengelola emosi mereka dengan lebih baik seiring waktu.",
         "answers": {
           "1. Berteriak":8, 
           "2. Berguling di lantai":9, 
           "Ada Yang Ingin Ditanyakan Lagi?":1
        }
    },
    8: {
        "question": "<b>Mengatasi anak yang sedang tantrum dan berteriak</b> <br><br>bisa menjadi tantangan, tetapi ada beberapa langkah yang dapat diambil untuk membantu menenangkan mereka. Sangat penting bagi orang tua atau pengasuh untuk tetap tenang karena anak-anak seringkali akan meniru emosi orang dewasa di sekitarnya. Jika aman, beri anak ruang untuk menenangkan diri, karena kadang-kadang, memberikan sedikit waktu dan ruang dapat membantu mereka menenangkan diri sendiri. <br><br> Akui perasaan mereka dengan mengatakan sesuatu seperti, Saya tahu kamu sedang merasa marah/sedih/frustrasi, untuk membantu anak merasa didengar dan dipahami. Coba alihkan perhatian anak dengan sesuatu yang lain, seperti mainan favorit atau aktivitas yang mereka sukai.<br><br> Sentuhan fisik yang lembut seperti pelukan atau tepukan di punggung bisa sangat menenangkan bagi anak yang sedang tantrum. Setelah anak tenang, bicarakan tentang apa yang terjadi dan bagaimana mereka bisa mengekspresikan perasaan mereka dengan cara yang lebih baik di masa mendatang. Pastikan untuk tetap konsisten dengan aturan dan batasan yang sudah ditetapkan, karena konsistensi membantu anak merasa aman dan tahu apa yang diharapkan. Cobalah untuk memahami apa yang menyebabkan tantrum, seperti lapar, lelah, atau frustrasi, karena mengetahui penyebabnya dapat membantu mencegah tantrum di masa depan. Dengan pendekatan yang sabar dan penuh kasih, anak-anak akan belajar cara mengelola emosi mereka dengan lebih baik seiring waktu.",  
        "answers": {
        "1. Berguling di lantai":9, 
        "2. Menangis":7, 
        "Ada Yang Ingin Ditanyakan Lagi?":1
        }
    },
    9: {
        "question": "<b>Mengatasi anak yang sedang tantrum sambil berguling di lantai</b><br><br> membutuhkan pendekatan yang tenang dan sabar. Pertama, sangat penting bagi orang tua atau pengasuh untuk tetap tenang karena anak-anak sering kali meniru emosi orang dewasa di sekitarnya. Jika anak berguling di tempat yang aman, biarkan mereka untuk sementara waktu. Memberikan ruang untuk mereka mengekspresikan emosi dapat membantu mereka menenangkan diri. Akui perasaan anak dengan mengatakan sesuatu seperti, <br><br>Saya tahu kamu sedang merasa marah/sedih/frustrasi, untuk membantu anak merasa didengar dan dipahami. Jika situasinya memungkinkan, coba alihkan perhatian anak dengan sesuatu yang lain, seperti mainan favorit atau aktivitas yang mereka sukai. Sentuhan fisik yang lembut seperti pelukan atau tepukan di punggung bisa sangat menenangkan bagi anak yang sedang tantrum, tetapi hanya jika anak tidak menolak sentuhan tersebut. <br><br>Setelah anak tenang, bicarakan tentang apa yang terjadi dan bagaimana mereka bisa mengekspresikan perasaan mereka dengan cara yang lebih baik di masa mendatang. Pastikan untuk tetap konsisten dengan aturan dan batasan yang sudah ditetapkan karena konsistensi membantu anak merasa aman dan tahu apa yang diharapkan. Cobalah untuk memahami apa yang menyebabkan tantrum, seperti lapar, lelah, atau frustrasi, karena mengetahui penyebabnya dapat membantu mencegah tantrum di masa depan. Dengan pendekatan yang sabar dan penuh kasih, anak-anak akan belajar cara mengelola emosi mereka dengan lebih baik seiring waktu.",
        "answers":{
            "1. Menangis":7, 
            "2. Berteriak":8, 
            "Ada Yang Ingin Ditanyakan Lagi?":1
        }
    },
    
    10: {
        "question": "Apa Cara Mengajarkan Anak tentang Keseimbangan Hidup yang Sehat?<br><br>Keseimbangan hidup sangat penting, bahkan bagi anak-anak. Bunda diajak untuk merenung tentang cara mengajarkan anak tentang pentingnya menjaga keseimbangan antara kegiatan akademis, sosial, dan rekreasi. Diskusikan praktik-praktik sehari-hari yang mendukung pola hidup sehat.<br><br>Apakah Jawaban Ini Cukup Membantu?",
         "answers": {
            "1. Mengatasi Anak Tantrum": 3,    
            "2. Mengatasi Anak Stunting": 6,
            "3. Berbagai Tips Parenting yang Baik": 11,
            "4. Menumbuhkan Minat Anak dalam Membaca": 6,
            "5. Keseimbangan Hidup yang Sehat": 10,
            "6. Cara Mengatasi Anak Kecanduan Gadget":12
        }
    },
    99: {
        "question": "Terima kasih atas jawaban Anda. Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami.",
        "answers": {}
    },
    11: {
        "question": "<b>Tips Parenting yang Baik</b><br><br>Tidak ada kata terlambat untuk mempelajari parenting. Sambil membesarkan dan mengasuh Si Kecil, Bunda dan Ayah bisa menerapkan berbagai tips parenting berikut ini:<br><br>1. Samakan pola parenting antara ibu dan ayah<br>Perlu ditegaskan sejak awal bahwa mempelajari parenting tidak hanya berlaku untuk ibu, tetapi ayah pun juga harus tahu pola parenting yang baik. Jangan sampai pola parenting Bunda berbeda dari Ayah.<br><br>2. Jadilah contoh yang baik bagi anak<br>Pola parenting yang baik sebenarnya perlu dimulai dari diri masing-masing orang tua terlebih dulu. Ini karena anak cenderung akan meniru apa yang orang tua lakukan, bukan apa yang orang tua katakan.<br><br>3. Usahakan untuk kontrol emosi di depan anak<br>Menjaga sikap dan perkataan dalam keadaan emosional mungkin sulit. Namun, sebagai orang tua yang bijak, Bunda dan Ayah perlu berpikir terlebih dulu sebelum bertindak atau mengeluarkan kata-kata negatif di depan Si Kecil.",
         "answers": {
            "1. Mengatasi Anak Tantrum": 3,    
            "2. Mengatasi Anak Stunting": 6,
            "3. Berbagai Tips Parenting yang Baik": 11,
            "4. Menumbuhkan Minat Anak dalam Membaca": 6,
            "5. Keseimbangan Hidup yang Sehat": 10,
            "6. Cara Mengatasi Anak Kecanduan Gadget":12
        }
    },
    12: {
        "question": "<b>Cara Mengatasi Anak Kecanduan Gadget</b><br>Kecanduan gadget pada anak bisa membuat anak jadi malas bergerak dan tidak fokus pada pelajaran sekolahnya. Hal ini bisa membuat prestasi di sekolah jadi menurun. Selain itu, beberapa penelitian menyebutkan bahwa kecanduan gadget yang diikuti gaya hidup tidak sehat, termasuk ngemil berlebihan, kurangnya aktivitas fisik, dan tidur hingga larut malam, akan meningkatkan risiko anak terkena obesitas dan penyakit jantung di kemudian hari.<br><br>Langkah-langkah yang bisa terapkan untuk mengatasi kecanduan gadget pada anak:<br><br>1. Batasi dan awasi penggunaan gadget pada anak. Untuk mengatasi kecanduan gadget pada Si Kecil, waktu mengakses gadget harus dibatasi, ya. Tentukan durasi dan jadwal untuk bermain gadget, misalnya 1–2 jam dalam sehari. Selain itu, awasi juga Si Kecil saat bermain gadget, supaya ia tidak mengakses konten pornografi atau kekerasan. Jika gadget dilengkapi dengan fitur age-restricted, terapkan fitur ini untuk membatasi waktu dan jenis aplikasi atau tontonan yang bisa di akses oleh anak.<br><br>2. Beri tahu anak bahaya menggunakan gadget terlalu lama. Bunda bisa membahas mengenai risiko terjadinya obesitas atau sakit mata jika Si Kecil lebih sering duduk bermain gadget dan jarang bermain ke luar rumah. Selain itu, jelaskan pada Si Kecil dengan bahasa yang mudah bahwa gadget dan internet bisa menjadi tempat yang berbahaya untuknya, apalagi jika Si Kecil juga bermain di media sosial.",
         "answers": {
            "1. Mengatasi Anak Tantrum": 3,    
            "2. Mengatasi Anak Stunting": 6,
            "3. Berbagai Tips Parenting yang Baik": 11,
            "4. Menumbuhkan Minat Anak dalam Membaca": 6,
            "5. Keseimbangan Hidup yang Sehat": 10,
            "6. Cara Mengatasi Anak Kecanduan Gadget":12
        }
    },
    13: {
        "question":"Apakah anak anda memiliki atau merasakan keluhan seperti?",
        "answers":{
            "1. Pertumbuhan Fisik Terhambat": 14,
            "2. Keterlambatan Perkembangan":15,
            "3. Masalah Nafsu Makan":16
        }
    },
    14: {
        "question":"<b>Pertumbuhan Fisik Terhambat</b> <br><br><b>Intervensi Gizi:</b> Berikan anak makanan yang kaya akan nutrisi seperti protein, zat besi, kalsium, dan vitamin. Pastikan anak mendapatkan makanan seimbang yang mencakup sayuran, buah-buahan, daging, dan produk susu.<br><br><b>Suplementasi:</b> Konsultasikan dengan dokter untuk memberikan suplemen vitamin dan mineral jika diperlukan.<br><br><b>Pemberian ASI dan MP-ASI:</b> Untuk bayi, berikan ASI eksklusif selama enam bulan pertama dan lanjutkan dengan MP-ASI yang bergizi.",
        "answers":{
            "1. Keterlambatan Perkembangan":15, 
            "2. Masalah Nafsu Makan":16, 
            "Ada Yang Ingin Ditanyakan Lagi?":1
        }
        
    },
    15: {
        "question":"<b>Keterlambatan Perkembangan</b><br><br><b>Stimulasi Perkembangan:</b> Berikan stimulasi yang sesuai dengan usia anak melalui permainan, interaksi sosial, dan kegiatan belajar yang mendukung perkembangan motorik dan kognitif.<br><br><b>Intervensi Dini:</b> Jika terdapat keterlambatan yang signifikan, konsultasikan dengan tenaga kesehatan atau ahli perkembangan anak untuk intervensi dini seperti terapi fisik atau terapi wicara.",
        "answers":{
            "1. Masalah Nafsu Makan":16, 
            "2. Pertumbuhan Fisik Terhambat":14, 
            "Ada Yang Ingin Ditanyakan Lagi?":1
        }
        
    },
    16: {
        "question":"<b>Masalah Nafsu Makan</b> <br><br><b>Pemberian Makanan yang Menarik:</b> Buat makanan dengan tampilan menarik dan variasikan jenis makanan agar anak lebih tertarik untuk makan. <br><br><b>Pola Makan Teratur:</b> Tetapkan jadwal makan yang teratur dan berikan porsi kecil namun sering jika anak kesulitan makan dalam porsi besar. <br><br><b>Pendampingan Makan:</b> Temani anak saat makan dan berikan dukungan serta pujian untuk meningkatkan nafsu makan.",
        "answers":{
            "1. Pertumbuhan Fisik Terhambat":14, 
            "2. Keterlambatan Perkembangan":15, 
            "Ada Yang Ingin Ditanyakan Lagi?":1
        }
        
    },
}

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    step = data.get('step', 1)
    user_response = data.get('response', '').strip()

    current_node = decision_tree.get(step, {})
    next_step = current_node.get('answers', {}).get(user_response, 1)

    response_node = decision_tree.get(next_step, {"question": "Maaf, saya tidak mengerti."})
    options = {k: v for k, v in response_node.get('answers', {}).items()}

    return jsonify({
        "step": next_step,
        "question": response_node.get("question"),
        "options": options
    })

if __name__ == '__main__':
    app.run(debug=True)
