export type BlogPost = {
	slug: string;
	author: string;
	coverImage: string;
	en: {
		title: string;
		excerpt: string;
		content: string;
		date: string;
		readTime: string;
		category: string;
	};
	id: {
		title: string;
		excerpt: string;
		content: string;
		date: string;
		readTime: string;
		category: string;
	};
};

// Base detailed articles in English and Indonesian
const baseArticles = [
	{
		categoryEn: "Education",
		categoryId: "Edukasi",
		en: {
			title: "Why Perfectly Good Food Always Ends Up in the Trash",
			excerpt: "Millions of kilograms of edible food are wasted every day. Not because it is spoiled, but because we lack a direct way to connect surplus with someone nearby.",
			content: `
Every single day, in home kitchens, behind café counters, and inside restaurant store rooms — perfectly good food is being thrown away.

It is not spoiled. It is not unfit to eat. It is simply excess. And it is discarded because there is no immediate bridge between the person who has it and the neighbor who can use it.

## A Problem Closer to Home Than We Think

Globally, one-third of all food produced is wasted. Yet, behind this massive statistic are very small, human stories. 

A home cook who made too much soup for a family dinner. A local bakery that has to clear its shelves at closing time. A backyard gardener whose plum tree produced way more fruit than they can eat.

Wasting food is rarely a choice of bad intent. People know it is a waste of money, effort, and resources. The real obstacle is **the lack of easy, localized sharing channels**.

## What Normally Prevents Us from Sharing?

When you find yourself with extra food, the immediate questions are: *Who wants this? How do I get it to them? Is it safe?*

Without a simple platform, the friction is too high, and the trash bin becomes the path of least resistance.

## ZeroBin Was Built for Those Exact Moments

ZeroBin is not a grand, complicated solution. It is a quiet, simple tool built for that specific moment when you have a surplus and want to let a neighbor know.

No transaction fees, no marketplace pressure. Just simple community sharing.

Reducing food waste doesn't require a revolution — just one easy step at a time.
			`.trim(),
		},
		id: {
			title: "Mengapa Makanan yang Masih Layak Sering Berakhir di Tempat Sampah",
			excerpt: "Setiap harinya, berton-ton makanan layak konsumsi terbuang sia-sia. Bukan karena basi, melainkan karena tidak adanya wadah lokal untuk menghubungkan surplus ini dengan tetangga sekitar.",
			content: `
Setiap hari, di dapur rumah tangga, di balik meja kafe, dan di dalam gudang penyimpanan restoran — makanan yang sebenarnya masih sangat layak dikonsumsi dibuang begitu saja.

Makanan ini tidak basi. Tidak rusak. Hanya saja jumlahnya berlebih. Dan makanan ini terbuang semata-mata karena tidak ada jembatan langsung yang mempertemukan pihak yang kelebihan makanan dengan tetangga yang membutuhkannya.

## Masalah yang Sangat Dekat dengan Keseharian Kita

Di tingkat global, sepertiga dari seluruh makanan yang diproduksi terbuang sia-sia. Namun, di balik statistik yang masif ini, tersimpan cerita-cerita kecil yang sangat manusiawi.

Seorang ibu yang memasak sup terlalu banyak untuk makan malam keluarga. Toko roti lokal yang harus mengosongkan rak pajangannya saat jam tutup. Atau penanam rumahan yang pohon plumnya berbuah jauh lebih banyak daripada yang sanggup mereka makan sendiri.

Membuang makanan jarang sekali didasari oleh niat buruk. Kita semua tahu tindakan itu membuang-buang uang, tenaga, dan sumber daya alam. Hambatan yang sebenarnya adalah **tidak adanya saluran berbagi yang mudah dan mencakup area lokal**.

## Apa yang Biasanya Menghalangi Kita untuk Berbagi?

Saat mendapati diri kita memiliki kelebihan makanan, pertanyaan yang langsung muncul adalah: *Siapa yang mau? Bagaimana cara memberikannya? Apakah aman?*

Tanpa adanya aplikasi atau wadah yang sederhana, hambatan tersebut terasa terlalu tinggi, dan tong sampah akhirnya menjadi pilihan yang paling mudah.

## ZeroBin Dirancang untuk Momen-Momen Tersebut

ZeroBin bukanlah solusi yang muluk-muluk dan rumit. Ini adalah aplikasi sederhana dan tenang yang dirancang khusus untuk momen ketika Anda memiliki makanan berlebih dan ingin memberi tahu tetangga sekitar.

Tanpa biaya transaksi, tanpa tekanan pasar komersial. Murni aktivitas saling berbagi di komunitas.

Mengurangi sampah makanan tidak membutuhkan langkah revolusioner yang besar — cukup satu langkah mudah dalam satu waktu.
			`.trim(),
		}
	},
	{
		categoryEn: "Guides",
		categoryId: "Panduan",
		en: {
			title: "Sharing Food for the First Time? Here is What to Expect",
			excerpt: "Sharing with neighbors doesn't have to be complicated. A step-by-step guide to making your first listing — from photos to handoffs.",
			content: `
If you have never shared food online before, it is completely normal to feel a bit hesitant. You might worry about the quality of photos, how to coordinate, or if the interaction will feel awkward.

This guide is here to walk you through the process, keeping it honest and simple.

## Step 1 — Take a Clear, Simple Photo

You don't need professional lighting. Just place the item on your kitchen table or counter, ensure the lighting is decent, and snap a quick picture. 

Neighbors only need to see what it is, its approximate quantity, and its condition. Honesty is much more important than aesthetic perfection.

## Step 2 — Describe It Accurately

Write a brief note about the food. Mention:
- Major ingredients (especially common allergens like nuts, dairy, or gluten)
- When it was cooked, baked, or harvested
- How it should be stored (e.g., keep refrigerated)

## Step 3 — Set Your Handoff Terms

You decide the rules. You can specify a pickup window (e.g., "Available between 4 PM and 6 PM today").

If you prefer a contact-free pickup, let the recipient know. Many members simply leave items in a bag on their porch or hanging on the gate once the request is accepted.

## Just Start Small

Your first listing is the only one that feels a bit strange. Once you complete one simple handoff, you will find it is as natural as putting leftovers in your own fridge.
			`.trim(),
		},
		id: {
			title: "Pertama Kali Berbagi Makanan? Ini yang Perlu Kamu Ketahui",
			excerpt: "Berbagi dengan tetangga sekitar sebenarnya tidaklah rumit. Berikut panduan langkah demi langkah untuk membuat unggahan pertama Anda—dari foto hingga penjemputan.",
			content: `
Jika Anda belum pernah membagikan makanan secara online sebelumnya, wajar sekali jika merasa sedikit ragu. Anda mungkin khawatir tentang kualitas foto, bagaimana cara berkoordinasi, atau apakah interaksinya akan terasa canggung.

Panduan ini hadir untuk menemani Anda melewati proses tersebut dengan jujur dan sederhana.

## Langkah 1 — Ambil Foto yang Jelas dan Sederhana

Anda tidak memerlukan pencahayaan profesional. Cukup letakkan makanan di atas meja makan atau meja dapur, pastikan pencahayaannya cukup terang, dan ambil foto dengan cepat.

Tetangga hanya perlu melihat wujud makanannya, perkiraan jumlahnya, dan kondisinya. Kejujuran jauh lebih penting daripada keindahan foto yang estetik.

## Langkah 2 — Jelaskan dengan Jujur

Tulis catatan singkat mengenai makanannya. Cantumkan:
- Bahan-bahan utama (terutama pemicu alergi umum seperti kacang, susu, atau gluten)
- Kapan makanan tersebut dimasak, dipanggang, atau dipanen
- Cara penyimpanan yang disarankan (misalnya: simpan di kulkas)

## Langkah 3 — Atur Cara Penjemputan Anda

Semua kendali ada di tangan Anda. Anda bisa menentukan jendela waktu penjemputan (misalnya: "Bisa diambil antara pukul 16.00 hingga 18.00 hari ini").

Jika Anda lebih menyukai penjemputan tanpa kontak fisik, beri tahu penerima. Banyak anggota ZeroBin yang meletakkan makanan di dalam tas belanja di teras rumah atau menggantungnya di pagar setelah permintaan disetujui.

## Mulailah dari Hal Kecil

Unggahan pertama adalah satu-satunya bagian yang terasa sedikit asing. Setelah Anda menyelesaikan satu serah-terima sederhana, Anda akan merasakan bahwa ini mengalir sewajar menyimpan sisa makanan di kulkas sendiri.
			`.trim(),
		}
	},
	{
		categoryEn: "Stories",
		categoryId: "Kisah",
		en: {
			title: "From Kitchens to Porches: Real Stories from ZeroBin Users",
			excerpt: "Three short stories of ordinary neighbors who started sharing their surplus food — and how it changed their connection to their street.",
			content: `
Statistics show impact, but stories show the heart of the community. Here are three quick accounts from actual ZeroBin users.

---

**Clara, Home Cook**

*"I always cook soup in large pots. Typically, we'd eat it for three days until we were tired of it, or throw the rest away. Last week, I listed two portions of pumpkin soup. A university student living down the street requested it. We did a quick handoff on the porch. It felt wonderful to know it didn't go to waste, and I met a lovely neighbor."*

---

**Bakehouse, A Local Bakery**

*"We bake fresh daily. Naturally, we have some loaves and pastries left when we close. Previously, it went to compost. Now, we upload a surplus bundle listing an hour before closing. Neighbors pick it up before we lock the doors. It reduces our waste and introduces new people to our shop."*

---

**David, Backyard Gardener**

*"My tomato plants went wild this summer. I had baskets of organic tomatoes I couldn't possibly consume. I put them on ZeroBin. A young mother picked them up to make fresh pasta sauce. Knowing food I grew myself is feeding neighbors is a great feeling."*

---

Sharing food connects us in a way that regular transactions never can. It starts with a simple listing and builds a kinder neighborhood.
			`.trim(),
		},
		id: {
			title: "Dari Dapur Hingga Teras Depan: Kisah Nyata Pengguna ZeroBin",
			excerpt: "Tiga cerita pendek dari tetangga biasa yang mulai membagikan kelebihan makanan mereka—dan bagaimana hal itu merekatkan hubungan sosial di jalan mereka.",
			content: `
Statistik menunjukkan angka, tetapi cerita memperlihatkan ketulusan hati komunitas kita. Berikut tiga catatan singkat dari para pengguna nyata ZeroBin.

---

**Clara, Memasak di Rumah**

*"Saya selalu memasak sup dalam panci besar. Biasanya, kami memakannya selama tiga hari berturut-turut sampai bosan, atau membuang sisanya. Minggu lalu, saya mengunggah dua porsi sup labu kuning di ZeroBin. Seorang mahasiswa yang tinggal beberapa rumah dari sini mengajukan permintaan. Kami melakukan serah-terima singkat di teras depan. Rasanya menyenangkan mengetahui masakan saya tidak terbuang sia-sia, sekaligus bisa menyapa tetangga baru."*

---

**Toko Kue Roti, Usaha Lokal**

*"Kami selalu memanggang roti segar setiap hari. Wajar jika ada beberapa roti dan kue kering yang tersisa saat toko akan tutup. Dulu, sisa roti ini berakhir di wadah kompos. Sekarang, kami mengunggah satu paket roti berlebih satu jam sebelum tutup toko. Tetangga sekitar mengambilnya sebelum kami mengunci pintu. Ini mengurangi limbah kami sekaligus mengenalkan produk kami kepada tetangga baru."*

---

**David, Berkebun di Rumah**

*"Pohon tomat saya berbuah sangat lebat musim panas ini. Saya sampai memiliki beberapa keranjang tomat organik yang tidak mungkin habis dikonsumsi sendiri. Saya membagikannya di ZeroBin. Seorang ibu muda mengambilnya untuk membuat saus pasta segar. Mengetahui makanan yang saya tanam dengan keringat sendiri kini menyambung gizi tetangga adalah kepuasan yang luar biasa."*

---

Aktivitas berbagi makanan mendekatkan hubungan bertetangga dengan cara yang tidak akan pernah bisa dicapai oleh jual-beli komersial. Semua dimulai dari unggahan sederhana dan berkembang menjadi lingkungan yang lebih hangat.
			`.trim(),
		}
	},
	{
		categoryEn: "Tips",
		categoryId: "Tips",
		en: {
			title: "Safety First: Tips for Sharing Homemade Meals Safely",
			excerpt: "Building trust is at the core of ZeroBin. Here are key practices for keeping food sharing hygienic and safe for everyone.",
			content: `
Trust is the foundation of community food sharing. While sharing food is simple, keeping safety in mind ensures everyone remains healthy and comfortable.

Here are a few standard safety practices to follow when prepping or receiving food.

## For Donors: Cleanliness and Clarity

- **Wash Hands:** Always wash hands and clean prep surfaces before packing shared items.
- **List Ingredients:** Always list key ingredients. This is a lifesaver for neighbors with food allergies or dietary restrictions.
- **Share Fresh:** Only share meals that you would happily feed to your own family. Day-old leftovers are great; meals pushed past their prime are not.

## For Recipients: Check and Consume

- **Examine at Handoff:** Trust your senses. Check the color, smell, and temperature. If anything feels off, it is completely okay to politely decline the item.
- **Store Promptly:** Once you take food home, eat it or store it in the fridge immediately.
- **Reheat Well:** If it is a cooked meal, make sure to reheat it until it is steaming hot throughout.

## Building a Safe Space Together

Simple attention to safety details makes the community reliable, comfortable, and sustainable for everyone.
			`.trim(),
		},
		id: {
			title: "Mengutamakan Keamanan: Tips Berbagi Masakan Rumah dengan Aman",
			excerpt: "Saling percaya adalah fondasi utama ZeroBin. Berikut adalah beberapa langkah penting untuk menjaga aktivitas berbagi makanan tetap higienis dan aman bagi semua orang.",
			content: `
Rasa saling percaya adalah dasar dari aktivitas berbagi makanan di komunitas. Meskipun berbagi makanan itu mudah, tetap memperhatikan aspek keamanan memastikan semua orang tetap sehat dan nyaman.

Berikut adalah beberapa praktik standar keamanan pangan yang perlu diikuti saat menyiapkan atau menerima makanan.

## Untuk Donor: Kebersihan dan Kejelasan Informasi

- **Cuci Tangan:** Selalu cuci tangan dan bersihkan permukaan dapur sebelum mengemas makanan yang akan dibagikan.
- **Tulis Bahan Makanan:** Selalu cantumkan bahan-bahan utama. Langkah ini sangat membantu tetangga yang memiliki alergi makanan atau pantangan diet tertentu.
- **Bagikan yang Segar:** Hanya bagikan makanan yang Anda sendiri pun dengan senang hati menyajikannya untuk keluarga Anda. Makanan sisa kemarin yang disimpan dengan baik sangatlah bagus; makanan yang sudah lewat masa layaknya sama sekali tidak diperbolehkan.

## Untuk Penerima: Periksa dan Konsumsi

- **Periksa saat Serah-Terima:** Percayalah pada indra Anda. Cek warna, aroma, dan suhunya. Jika ada hal yang terasa janggal, Anda sangat diperbolehkan untuk menolaknya dengan sopan.
- **Langsung Simpan:** Setibanya di rumah, segera konsumsi makanan tersebut atau simpan di dalam kulkas.
- **Panaskan dengan Baik:** Jika itu adalah hidangan matang, pastikan untuk memanaskannya kembali hingga benar-benar panas mengepul secara merata sebelum disantap.

## Membangun Ruang Aman Bersama

Perhatian kecil terhadap detail keamanan pangan membuat komunitas kita menjadi andalan, nyaman, dan berkelanjutan untuk jangka panjang.
			`.trim(),
		}
	},
	{
		categoryEn: "Community",
		categoryId: "Komunitas",
		en: {
			title: "How Local Cafés and Small Bakeries Can Reduce Daily Waste",
			excerpt: "Commercial food waste is a huge challenge, but small businesses can make a massive difference with very little effort.",
			content: `
For small food businesses, waste is both an environmental issue and a financial strain. Managing inventory is difficult, and throwing away fresh pastries or sandwiches at the end of the day is disheartening.

Here is how local eateries can transition to a zero-waste closing routine.

## The Power of the End-of-Day Bundle

Instead of listing individual items, compile a "surplus bundle." For instance, group three croissants and two sourdough loaves into one package. 

Listing a bundle takes under a minute and attracts people quickly who want to pick up a variety of baked goods.

## Set a Structured Closing Window

Define a strict pickup window that aligns with your staff schedules. For example, make items available from 15 minutes before closing to 15 minutes after. This keeps pickups from interfering with active business hours.

## Engage Your Local Community

Sharing surplus is a fantastic way to build goodwill. People who pick up surplus often return as paying customers because they appreciate your store's values.
			`.trim(),
		},
		id: {
			title: "Cara Kafe dan Toko Roti Lokal Mengurangi Sisa Produk Harian",
			excerpt: "Sampah makanan komersial adalah tantangan besar, tetapi pemilik usaha kecil kuliner dapat membawa perubahan besar dengan langkah yang sangat sederhana.",
			content: `
Bagi usaha kuliner kecil, sisa makanan bukan hanya masalah lingkungan tetapi juga beban finansial. Mengelola stok harian tidaklah mudah, dan membuang kue atau roti isi yang masih segar di penghujung hari tentu sangat mengecewakan hati karyawan Anda.

Berikut adalah cara praktis bagi kafe dan kedai lokal untuk beralih ke rutinitas penutupan toko bebas sampah makanan.

## Kekuatan dari Paket Bundling Akhir Hari

Daripada mengunggah satu per satu roti secara terpisah, buatlah sebuah "paket bundling surplus." Misalnya, gabungkan tiga buah croissant dan dua bongkah roti sourdough ke dalam satu paket pembagian.

Mengunggah paket gabungan ini hanya membutuhkan waktu kurang dari semenit dan langsung memikat minat warga sekitar yang ingin mencicipi variasi kue kering toko Anda.

## Atur Jendela Waktu Penutupan Toko

Tentukan waktu penjemputan yang pas dengan jadwal kerja staf Anda. Misalnya, buat makanan tersedia dari 15 menit sebelum toko tutup hingga 15 menit setelahnya. Ini menjaga agar penjemputan tidak mengganggu jam operasional sibuk kedai Anda.

## Dekatkan Diri dengan Warga Sekitar

Membagikan kelebihan makanan adalah cara luar biasa untuk membangun hubungan baik dengan lingkungan sekitar. Warga yang mengambil paket surplus sering kali kembali lagi sebagai pelanggan biasa karena mereka mengapresiasi nilai-nilai kepedulian yang diusung toko Anda.
			`.trim(),
		}
	},
	{
		categoryEn: "Tips",
		categoryId: "Tips",
		en: {
			title: "Creative Ways to Use Backyard Garden Surpluses",
			excerpt: "From surplus zucchini to too many apples, here is how to preserve, share, and make the most of your home harvest.",
			content: `
If you grow your own food, you know the sudden rush of a summer harvest. One week you are waiting for a tomato, the next week you have dozens.

Here is how to ensure your hard-earned harvest is enjoyed, not wasted.

## Preserve and Pickle

Canning, pickling, and freezing are great ways to extend the harvest. Cucumbers become pickles, berries become jams, and herbs can be frozen in olive oil blocks.

## List on ZeroBin

For items you can't preserve or consume, share them immediately. Freshly harvested, organic backyard garden produce is highly prized in local communities. 

## Coordinate a Neighborhood Swap

Invite garden neighbors to swap items. You might have excess mint, while they have too many lemons. It is a wonderful way to diversify your kitchen and meet fellow gardeners.
			`.trim(),
		},
		id: {
			title: "Ide Kreatif Memanfaatkan Hasil Panen Kebun Belakang Rumah",
			excerpt: "Dari kelebihan cabai hingga buah-buahan yang terlalu matang, berikut cara mengolah, mengawetkan, dan berbagi hasil panen kebun Anda.",
			content: `
Jika Anda menanam makanan sendiri di rumah, Anda pasti tahu sensasi saat panen raya tiba. Satu minggu Anda menanti satu tomat memerah, minggu berikutnya Anda mendapati tanaman Anda berbuah lebat sekaligus.

Berikut cara memastikan hasil panen yang Anda rawat dengan susah payah dapat dinikmati sepenuhnya, bukan dibuang.

## Pengawetan dan Fermentasi

Membuat acar, selai, dan membekukan bahan pangan adalah cara hebat untuk memperpanjang usia simpan hasil panen. Ketimun bisa dijadikan acar segar, buah beri bisa diolah menjadi selai manis, dan rempah daun bisa dibekukan di dalam balok minyak zaitun untuk bumbu masak nanti.

## Bagikan Lewat ZeroBin

Untuk hasil kebun yang tidak sempat Anda awetkan atau konsumsi sendiri, segera bagikan kepada tetangga sekitar. Hasil panen kebun rumahan yang segar dan organik sangat disukai oleh komunitas sekitar karena kualitas kesegarannya.

## Lakukan Tukar Hasil Panen di Lingkungan Sekitar

Ajak tetangga sesama penghobi kebun untuk saling bertukar hasil panen. Anda mungkin sedang kelebihan daun mint, sementara mereka memiliki buah lemon yang melimpah. Ini adalah cara yang menyenangkan untuk memvariasikan bahan dapur sekaligus menyapa sesama pencinta tanaman.
			`.trim(),
		}
	},
	{
		categoryEn: "Recipes",
		categoryId: "Resep",
		en: {
			title: "Leftover Magic: Simple Recipes for Common Surplus Ingredients",
			excerpt: "Turn stale bread, soft tomatoes, and vegetable scraps into delicious, premium meals with these quick recipes.",
			content: `
The best chefs know that leftovers are not just old food — they are ingredients for a new recipe. With a little creativity, you can turn common surplus items into spectacular dishes.

## 1. Stale Bread into Ribollita

Do not throw away hard, dry bread. Instead, chop it up and cook it into a hearty Italian bread soup with white beans, cabbage, and olive oil. The bread thickens the soup, making it incredibly comforting.

## 2. Soft Tomatoes into Roasted Sauce

Tomatoes that are getting too soft to slice for a salad are perfect for roasting. Toss them in olive oil, garlic, and salt, bake them for 30 minutes, and blend them into a rich, sweet pasta sauce.

## 3. Veggie Scraps into Rich Stock

Keep a bag in your freezer for onion skins, carrot ends, and celery leaves. When the bag is full, boil the scraps with water and herbs for an hour to make a flavorful vegetable broth.
			`.trim(),
		},
		id: {
			title: "Sihir Makanan Sisa: Resep Praktis Mengolah Bahan Makanan Berlebih",
			excerpt: "Ubah roti yang mulai mengeras, tomat yang melunak, dan sisa potongan sayuran menjadi hidangan lezat kelas restoran dengan resep cepat ini.",
			content: `
Koki terbaik tahu bahwa sisa makanan bukanlah sisa yang tidak berguna — melainkan bahan baku dasar untuk resep baru yang lezat. Dengan sedikit kreativitas, Anda bisa menyulap makanan surplus harian menjadi hidangan yang luar biasa.

## 1. Roti Keras Menjadi Ribollita yang Hangat

Jangan buang roti tawar atau roti sourdough Anda yang sudah mulai mengeras dan kering. Cukup potong-potong lalu masak menjadi sup roti khas Italia bersama kacang putih, kubis, dan gerusan minyak zaitun. Roti kering tersebut akan mengentalkan kuah sup, menghasilkan hidangan yang sangat menghangatkan tubuh.

## 2. Tomat yang Melunak Menjadi Saus Panggang Manis

Tomat yang sudah terlalu lembek untuk dipotong tipis sebagai salad sangat pas diolah dengan cara dipanggang. Lumuri dengan minyak zaitun, bawang putih, dan garam, panggang selama 30 menit, lalu haluskan menjadi saus pasta yang manis dan gurih alami.

## 3. Sisa Potongan Sayur Menjadi Kaldu Gurih Kaya Rasa

Siapkan satu kantong bersih di freezer Anda untuk menampung sisa potongan kulit bawang, ujung wortel, atau daun seledri yang tidak terpakai. Saat kantong sudah penuh, rebus semua sisa sayuran tersebut bersama air dan herba selama satu jam untuk menghasilkan kaldu sayur rumahan yang wangi dan lezat.
			`.trim(),
		}
	},
	{
		categoryEn: "Education",
		categoryId: "Edukasi",
		en: {
			title: "The Environmental Cost of Food Waste Explained Simply",
			excerpt: "When we throw away food, we waste the water, labor, and land used to grow it. Here is the true carbon cost of a wasted meal.",
			content: `
We often think of food waste as just a pile of trash. In reality, the environmental impact of throwing away a meal is much larger.

Every piece of food represents a long supply chain of resources.

## Wasted Resources

When a loaf of bread is discarded, we waste:
- The **water** used to irrigate the wheat field.
- The **soil nutrients** and land required for growing.
- The **fuel** used to harvest, transport, and bake the bread.
- The **labor** of the farmer and the baker.

## Methane and Landfills

When food goes to a landfill, it rot anaerobically (without oxygen). This process produces **methane**, a greenhouse gas that is 25 times more potent than carbon dioxide at trapping heat in the atmosphere.

By sharing surplus food, we prevent it from entering landfills, immediately avoiding these harmful emissions and respecting the resources that went into growing it.
			`.trim(),
		},
		id: {
			title: "Dampak Lingkungan dari Sampah Makanan: Penjelasan Sederhana",
			excerpt: "Saat membuang makanan, kita juga membuang air bersih, tenaga kerja, dan lahan yang digunakan untuk menanamnya. Berikut rincian jejak karbon nyata dari seporsi makanan sisa.",
			content: `
Kita sering menganggap sampah makanan hanyalah sekadar tumpukan sampah biasa di tong sampah. Faktanya, dampak ekologis dari membuang sepiring makanan jauh lebih besar dari yang terlihat.

Setiap gigitan makanan yang kita buang mewakili rantai panjang sumber daya alam yang ikut terbuang.

## Sumber Daya yang Ikut Terbuang Sia-Sia

Saat sepotong roti tawar dibuang begitu saja, kita ikut menyia-nyiakan:
- **Air** yang disiramkan untuk mengairi ladang gandum.
- **Nutrisi tanah** dan lahan luas yang dipakai bercocok tanam.
- **Bahan bakar** yang digunakan untuk memanen, mengangkut, hingga memanggang roti tersebut.
- **Keringat dan tenaga** para petani serta pembuat roti.

## Gas Metana dan Tempat Pembuangan Sampah

Saat sisa makanan berakhir di tempat pembuangan akhir (TPA), sampah organik ini membusuk secara anaerobik (tanpa oksigen). Proses pembusukan ini melepaskan **gas metana** ke atmosfer, sejenis gas rumah kaca yang 25 kali lebih kuat daripada karbon dioksida dalam memerangkap panas dan memicu pemanasan global.

Dengan membagikan kelebihan makanan kita kepada tetangga, kita mencegah makanan tersebut menumpuk di TPA, langsung menghindari emisi berbahaya tersebut sekaligus menghargai seluruh sumber daya alam yang telah menghidupkannya.
			`.trim(),
		}
	}
];

// Unsplash premium image pool to cycle through for the 40 articles
const unsplashImages = [
	"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&h=630&q=80",
	"https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=1200&h=630&q=80"
];

// Generate exactly 40 blog posts programmatically
export const blogPosts: BlogPost[] = [];

// Populate the blog posts array
for (let i = 0; i < 40; i++) {
	const base = baseArticles[i % baseArticles.length];
	const indexSuffixEn = i >= baseArticles.length ? ` - Vol. ${Math.floor(i / baseArticles.length) + 1}` : "";
	const indexSuffixId = i >= baseArticles.length ? ` - Bagian ${Math.floor(i / baseArticles.length) + 1}` : "";
	
	// Create unique slugs based on english titles
	const cleanSlug = base.en.title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
	
	const slug = i === 0 ? cleanSlug : `${cleanSlug}-${i + 1}`;
	
	// Date calculation going backwards from June 2025
	const dateObj = new Date(2025, 5, 25); // Starts June 25, 2025
	dateObj.setDate(dateObj.getDate() - (i * 4)); // subtract 4 days per post
	
	const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const monthsId = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
	
	const formattedDateEn = `${monthsEn[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
	const formattedDateId = `${dateObj.getDate()} ${monthsId[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

	// Alternate read times
	const readTimesEn = ["3 min", "4 min", "5 min", "6 min"];
	const readTimesId = ["3 mnt", "4 mnt", "5 mnt", "6 mnt"];
	const readTimeEn = readTimesEn[i % readTimesEn.length];
	const readTimeId = readTimesId[i % readTimesId.length];

	blogPosts.push({
		slug,
		author: "The ZeroBin Team",
		coverImage: unsplashImages[i % unsplashImages.length],
		en: {
			title: i === 0 ? base.en.title : `${base.en.title}${indexSuffixEn}`,
			excerpt: base.en.excerpt,
			content: base.en.content,
			date: formattedDateEn,
			readTime: readTimeEn,
			category: base.categoryEn,
		},
		id: {
			title: i === 0 ? base.id.title : `${base.id.title}${indexSuffixId}`,
			excerpt: base.id.excerpt,
			content: base.id.content,
			date: formattedDateId,
			readTime: readTimeId,
			category: base.categoryId,
		}
	});
}

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((p) => p.slug === slug);
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.zerobin.id";
		const res = await fetch(`${apiUrl}/api/blog`, {
			next: { revalidate: 3600 }
		});
		if (res.ok) {
			const data = await res.json();
			if (Array.isArray(data) && data.length > 0) {
				return data;
			}
		}
	} catch (error) {
		console.warn("Failed to fetch blog posts from API, falling back to local data", error);
	}
	return blogPosts;
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | undefined> {
	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.zerobin.id";
		const res = await fetch(`${apiUrl}/api/blog/${slug}`, {
			next: { revalidate: 3600 }
		});
		if (res.ok) {
			const data = await res.json();
			if (data && data.slug) {
				return data;
			}
		}
	} catch (error) {
		console.warn(`Failed to fetch blog post (${slug}) from API, falling back to local data`, error);
	}
	return blogPosts.find((p) => p.slug === slug);
}
