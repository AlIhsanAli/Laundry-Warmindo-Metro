'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Search, CheckCircle, MapPin, Star, Phone, Mail } from 'lucide-react';

const cloudVariants = {
  animate: {
    x: [0, 30, 0],
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<{ status: string; time: string; date: string; desc: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    // Mock tracking - in real app, this would call an API
    setTimeout(() => {
      const mockStatuses = [
        { status: 'Order Diterima', time: '08:00', date: '23 Apr 2026', desc: 'Pesanan Anda telah diterima dan sedang diproses' },
        { status: 'Sedang Dicuci', time: '10:30', date: '23 Apr 2026', desc: 'Pakaian sedang dalam proses pencucian premium' },
        { status: 'Sedang Dikeringkan', time: '12:00', date: '23 Apr 2026', desc: 'Proses pengeringan dengan teknologi vakum' },
        { status: 'Sedang Disetrika', time: '14:00', date: '23 Apr 2026', desc: 'Setrika profesional oleh tenaga ahli' },
        { status: 'Siap Diantar', time: '16:00', date: '23 Apr 2026', desc: 'Pakaian siap diantar ke alamat Anda' },
        { status: 'Selesai', time: '17:30', date: '23 Apr 2026', desc: 'Pesanan telah selesai dan diterima pelanggan' }
      ];
      const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
      setTrackingStatus(randomStatus);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Floating Clouds Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-blue-200 opacity-30"
          variants={cloudVariants}
          animate="animate"
        >
          <Cloud size={80} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-300 opacity-20"
          variants={cloudVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        >
          <Cloud size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-blue-200 opacity-25"
          variants={cloudVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
        >
          <Cloud size={70} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Laundry <span className="text-blue-600">Warmindo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">Metro</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Layanan laundry premium profesional untuk perusahaan besar dengan teknologi modern dan pelayanan excellence
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Pesan Sekarang
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Hubungi Kami
            </button>
          </motion.div>
        </div>
      </section>

      {/* Order Tracking Section */}
      <section className="relative z-10 py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Track Your Order
            </h2>
            <p className="text-gray-600 text-lg">
              Pantau status pesanan Anda secara real-time
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleTrackOrder}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Masukkan nomor order"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {loading ? 'Mencari...' : 'Track Order'}
            </button>
          </motion.form>

          {trackingStatus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Status Pesanan</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-blue-600">{trackingStatus.status}</p>
                <p className="text-sm text-gray-500">{trackingStatus.time} - {trackingStatus.date}</p>
                <p className="text-gray-600">{trackingStatus.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Focus Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fokus pada Kecepatan & Keandalan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Menyediakan experience laundry yang konsisten untuk perusahaan besar, dengan detail pelayanan yang dirancang untuk skala bisnis.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 shadow-2xl border border-blue-100">
                <span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-4 py-1 text-sm font-semibold mb-4">
                  Laundry Enterprise Grade
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Dari jemput sampai kirim, semua terasa profesional dan tenang.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistem kami mendukung proses yang cepat, bersih, dan aman untuk volume tinggi. Landing page ini menyampaikan bahwa layanan kami tidak hanya cepat tapi juga premium dalam setiap detail.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-8">
                  {[
                    'Monitoring pesanan real-time',
                    'Penjemputan & pengantaran prioritas',
                    'Perawatan premium untuk setiap kain',
                    'Layanan yang mudah ditimbang dan ditagih'
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-3xl bg-blue-50 p-5 border border-blue-100">
                      <p className="text-gray-700 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/90 backdrop-blur-sm p-8 shadow-xl border border-blue-100">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">Kepercayaan</p>
                  <p className="text-3xl font-bold text-gray-800">100+</p>
                  <p className="text-gray-600 mt-2">Klien perusahaan yang mempercayakan laundry sehari-hari.</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/90 backdrop-blur-sm p-8 shadow-xl border border-blue-100">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">Presisi</p>
                  <p className="text-3xl font-bold text-gray-800">98%</p>
                  <p className="text-gray-600 mt-2">Tepat waktu untuk pengiriman berikutnya, setiap kali.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-gradient-to-br from-blue-600/10 via-white to-blue-50 p-8 shadow-2xl border border-blue-100"
            >
              <div className="rounded-[1.75rem] bg-white p-8 shadow-xl border border-blue-100">
                <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold mb-6">
                  Solusi Khusus Bisnis</span>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Pickup & Delivery</p>
                    <p className="text-2xl font-bold text-gray-800">Gratis & fleksibel</p>
                  </div>
                  <div className="text-blue-600 text-4xl">🚚</div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl bg-blue-50 p-5 border border-blue-100">
                    <p className="text-sm text-gray-500">Tracking order setiap langkah</p>
                    <p className="font-semibold text-gray-800">Dari jemputan hingga selesai</p>
                  </div>
                  <div className="rounded-3xl bg-blue-50 p-5 border border-blue-100">
                    <p className="text-sm text-gray-500">Layanan prioritas korporat</p>
                    <p className="font-semibold text-gray-800">Sistem klaim dan support cepat</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-gray-600 text-lg">
              Standar perusahaan besar untuk layanan laundry premium
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Star,
                title: 'Kualitas Premium',
                desc: 'Teknologi canggih dan bahan premium untuk hasil terbaik'
              },
              {
                icon: CheckCircle,
                title: 'Tepat Waktu',
                desc: 'Layanan express dan tracking real-time untuk efisiensi'
              },
              {
                icon: MapPin,
                title: 'Area Metro',
                desc: 'Cakupan luas di area Metro dengan pickup & delivery gratis'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Siap melayani kebutuhan laundry perusahaan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
                <Phone className="text-blue-600 mr-4" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Telepon</p>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
                <Mail className="text-blue-600 mr-4" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@laundrywarmindo.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Laundry Warmindo Metro</h3>
            <p className="text-gray-300 mb-6">
              Layanan laundry premium untuk perusahaan besar dengan standar internasional
            </p>
            <div className="flex justify-center space-x-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              © 2026 Laundry Warmindo Metro. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
