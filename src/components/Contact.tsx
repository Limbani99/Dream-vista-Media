
import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { name: 'Patel Malhar', phone: '+91 95108 95189' },
    { name: 'Patel Mann', phone: '+91 90233 41592' },
    { name: 'Aayush Tiwari', phone: '+91 99267 07143' },
    { name: 'Lucky', phone: '+91 93025 56509' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Let's start building your digital dream today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Users className="mr-3" size={32} />
              Team Contacts
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="font-bold text-lg mb-2">{contact.name}</h4>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center text-purple-200 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Mail className="mr-3 text-purple-400" size={24} />
                  <h4 className="font-bold text-lg">Email</h4>
                </div>
                <a 
                  href="mailto:dreamvista360@gmail.com"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  dreamvista360@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <Instagram className="mr-3 text-pink-400" size={24} />
                  <h4 className="font-bold text-lg">Instagram</h4>
                </div>
                <a 
                  href="https://instagram.com/_dream_vista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  @_dream_vista
                </a>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="mr-3" size={24} />
                  <h4 className="font-bold text-lg">Ready to Start?</h4>
                </div>
                <p className="mb-4">
                  💬 DM us, 📞 Call us, or 📧 Email us — we're just one message away.
                </p>
                <p className="font-bold">
                  With Dream Vista Media, your dream becomes your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
