import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/logo-icon.png"
                alt="Our Resolution Family Mediation Services"
                className="h-20 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Resolution Family Mediation Services</h3>
            <p className="text-gray-400">
              Professional divorce and family mediation services in California,
              helping families navigate separation with dignity and respect.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-white">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/process">
                  <a className="text-gray-400 hover:text-white">Process</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-400 hover:text-white">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-400">info@ourresolution.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-400">California</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Our Resolution Family Mediation Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

