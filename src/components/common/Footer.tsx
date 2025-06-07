import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-20 bg-black text-neutral-400 py-12 px-6 sm:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-neutral-100 text-xl font-semibold">ApexSoft</h2>
          <p className="mt-2 text-sm">
            Delivering cutting-edge software solutions and strategic technology consulting to help businesses scale and innovate.
          </p>
          <div className="flex gap-4 mt-4 text-neutral-100">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-neutral-100 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-neutral-100">Home</a></li>
            <li><a href="#" className="hover:text-neutral-100">Services</a></li>
            <li><a href="#" className="hover:text-neutral-100">Case Studies</a></li>
            <li><a href="#" className="hover:text-neutral-100">About Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-neutral-100 font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-neutral-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neutral-100">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-neutral-100">Disclaimer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-4">
            Get insights on digital transformation, tech trends, and exclusive ApexSoft updates.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-black border border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-neutral-100 px-4 py-2 rounded-md text-sm cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-sm text-neutral-500">
        © 2025 ApexSoft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
