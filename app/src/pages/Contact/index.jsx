import { Mail, MapPin, Phone } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

function Contact() {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className="min-h-screen bg-[#f3f3f3] py-24 px-8">
      <div className="max-w-[1728px] mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-black uppercase mb-16">
            GET IN TOUCH
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Mail size={24} className="text-black" />
                  <h4 className="text-black uppercase">
                    Email
                  </h4>
                </div>
                <p className="text-p2 text-black uppercase">
                  SDSTUDIOS.CO.UK@GMAIL.COM
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin size={24} className="text-black" />
                  <h4 className="text-black uppercase">
                    Location
                  </h4>
                </div>
                <p className="text-p2 text-black uppercase">
                  LONDON, UK
                  <br />
                  TIME ZONE - GMT
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Phone size={24} className="text-black" />
                  <h4 className="text-black uppercase">
                    Social
                  </h4>
                </div>
                <p className="text-p2 text-black uppercase">
                  INSTAGRAM
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-black p-8 rounded-lg">
              <h4 className="text-white uppercase mb-8">
                Send a Message
              </h4>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-p2 uppercase placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-p2 uppercase placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <textarea
                  placeholder="MESSAGE"
                  rows={5}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-p2 uppercase placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="text-p2 text-black bg-white px-8 py-3 uppercase hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
