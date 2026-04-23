'use client';

import { motion } from 'framer-motion';
import { Shirt, Droplets, Clock, Truck, Award, ArrowRight } from 'lucide-react';

const services = [
  { title: 'Cuci Premium', price: 'Rp25K/kg', icon: Shirt, color: 'text-primary' },
  { title: 'Setrika Pro', price: 'Rp15K/kg', icon: Droplets, color: 'text-secondary' },
  { title: 'Express 12Jam', price: 'Rp40K/kg', icon: Clock, color: 'text-accent' },
  { title: 'Pickup Gratis', price: '>5kg', icon: Truck, color: 'text-primary' },
  { title: 'Dry Clean', price: 'Rp60K/item', icon: Shirt, color: 'text-secondary' },
  { title: 'Corporate', price: 'Custom', icon: Award, color: 'premium-gold' },
];

export default function LaundryLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-accent via-background to-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
import { Shirt, Droplets, Clock, Truck, MapPin, Star, Award, ArrowRight, Search, CheckCircle } from 'lucide-react';

const premiumServices = [
  { name: 'Cuci & Kering Premium', price: 'Rp 25.000/kg', icon: Shirt, desc: 'Cuci kering berkualitas tinggi dengan deterjen premium' },
  { name: 'Setrika Profesional', price: 'Rp 15.000/kg', icon: Droplets, desc: 'Setrika rapi oleh tenaga ahli berpengalaman' },
  { name: 'Express 12 Jam', price: 'Rp 40.000/kg', icon: Clock, desc: 'Jadi siap dalam 12 jam untuk kebutuhan mendesak' },
  { name: 'Pickup & Delivery', price: 'Gratis > 5kg', icon: Truck, desc: 'Ambil dan antar gratis area Metro' },
  { name: 'Dry Clean Deluxe', price: 'Rp 60.000/item', icon: Shirt, desc: 'Dry clean untuk pakaian halus & jas' },
  { name: 'Paket Corporate', price: 'Custom', icon: Award, desc: 'Layanan khusus perusahaan dengan kontrak bulanan' },
];

export default function Home() {
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = (e) => {
