// import { useState, FormEvent } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { SectionTitle } from './SectionTitle';
// import { Card } from './Card';
// import { Button } from './Button';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//   e.preventDefault();

//   if (!validateForm()) return;

//   const phone = "918601115696"; // <-- apna number (without +)

//   const message = `
// Name: ${formData.name}
// Email: ${formData.email}
// Message: ${formData.message}
// `;

//   const url =
//     "https://wa.me/" +
//     phone +
//     "?text=" +
//     encodeURIComponent(message);

//   window.open(url, "_blank");
// };


//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'shashanksinghworkspace@gmail.com',
//       href: 'mailto:hashanksinghworkspace@gmail.com',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       value: '+91 8601115696',
//       href: 'tel:+918601115696',
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       value: 'Noida, India',
//       href: 'https://maps.app.goo.gl/xZ1iSqkCAYo9sNQR8',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <SectionTitle
//           title="Get In Touch"
//           subtitle="Feel free to reach out for collaborations or just a friendly chat"
//         />

//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {contactInfo.map((info) => (
//             <Card key={info.title} hover={false}>
//               <a href={info.href} className="flex flex-col items-center text-center space-y-3 group">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <info.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">{info.title}</h3>
//                 <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
//                   {info.value}
//                 </p>
//               </a>
//             </Card>
//           ))}
//         </div>

//         <Card className="max-w-3xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
//                 placeholder="Your name"
//               />
//               {errors.name && (
//                 <p className="text-red-400 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
//                 placeholder="your@email.com"
//               />
//               {errors.email && (
//                 <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
//                 placeholder="Your message..."
//               />
//               {errors.message && (
//                 <p className="text-red-400 text-sm mt-1">{errors.message}</p>
//               )}
//             </div>

//             <Button
//               variant="primary"
//               className="w-full flex items-center justify-center gap-2"
//             >
//               <Send className="w-5 h-5" />
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </Button>

//             {submitStatus === 'success' && (
//               <p className="text-green-400 text-center">Message sent successfully!</p>
//             )}
//             {submitStatus === 'error' && (
//               <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
//             )}
//           </form>
//         </Card>
//       </div>
//     </section>
//   );
// }
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";
import { Button } from "./Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const phone = "918601115696"; // your number (without +)

    const message = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
`;

    const url =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shashanksinghworkspace@gmail.com",
      href: "mailto:shashanksinghworkspace@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8601115696",
      href: "tel:+918601115696",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Noida, India",
      href: "https://maps.app.goo.gl/xZ1iSqkCAYo9sNQR8",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations or just a friendly chat"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} hover={false}>
              <a
                href={info.href}
                className="flex flex-col items-center text-center space-y-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {info.title}
                </h3>
                <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  {info.value}
                </p>
              </a>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              variant="primary"
              className="w-full flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

