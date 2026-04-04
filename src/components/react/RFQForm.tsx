import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import { 
  Check, User, Building2, Briefcase, Zap, Cpu, 
  Factory, Settings2, ShieldCheck, Truck, 
  Calendar, Cog, Wrench, Upload, FileText, PlusCircle
} from 'lucide-react';
import { useState } from 'react';

export default function RFQForm() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('RFQ Data:', data);
    alert('Request Sent! Our team will contact you shortly.');
    form.reset();
    setFileName("");
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit}>
      {/* 1. Contact Info */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Contact Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="fullName" required placeholder="Full Name *" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="email" name="email" required placeholder="Email Address *" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="tel" name="phone" required placeholder="Phone / WhatsApp *" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none md:col-span-2" />
        </div>
      </div>

      {/* 2. Company & Industry (Added "Other") */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Company & Industry</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="company" required placeholder="Company Name *" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          <select name="industry" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option value="">Select Industry *</option>
            <option value="pulp-paper">Pulp & Paper</option>
            <option value="corrugated">Corrugated & Packaging</option>
            <option value="mining-heavy">Mining & Heavy Industry</option>
            <option value="ev-transport">EV & New Energy</option>
            <option value="manufacturing">General Manufacturing</option>
            <option value="other">Other Industries</option>
          </select>
        </div>
      </div>

      {/* 3. Product & Service Requirements */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-3">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Requirements</h2>
        </div>
        
        <div className="space-y-6">
          <Label.Root className="block text-sm font-semibold text-gray-700">Products & Services Interested *</Label.Root>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'motors', label: 'High-Efficiency Motors', icon: Zap },
              { id: 'pm-reluctance', label: 'PM & Reluctance Drives', icon: Cpu },
              { id: 'paper-machinery', label: 'Paper Making Machinery', icon: Factory },
              { id: 'rolls', label: 'Industrial Rolls (Corrugating)', icon: Settings2 },
              { id: 'custom-oem', label: 'OEM / Custom Engineering', icon: Wrench },
              { id: 'other-service', label: 'Other Products/Services', icon: PlusCircle },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                <Checkbox.Root id={item.id} name="services" value={item.id} className="w-5 h-5 border-2 border-gray-300 rounded data-[state=checked]:bg-blue-600">
                  <Checkbox.Indicator><Check className="w-4 h-4 text-white" /></Checkbox.Indicator>
                </Checkbox.Root>
                <item.icon className="w-4 h-4 text-gray-500" />
                <Label.Root htmlFor={item.id} className="text-sm text-gray-700 cursor-pointer">{item.label}</Label.Root>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label.Root className="text-sm font-semibold text-gray-700">Procurement Scale (Units)</Label.Root>
              <input type="text" name="volume" placeholder="e.g. 10 sets / 500 units" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="space-y-2">
              <Label.Root className="text-sm font-semibold text-gray-700">Estimated Timeline *</Label.Root>
              <select name="timeline" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="immediate">Within 1 Month</option>
                <option value="1-3-months">1-3 Months</option>
                <option value="planning">Planning / Future</option>
              </select>
            </div>
          </div>

          {/* PDF Upload Section */}
          <div className="space-y-2">
            <Label.Root className="text-sm font-semibold text-gray-700">Upload Technical Specifications (PDF/Image)</Label.Root>
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors bg-gray-50 group text-center">
              <input type="file" name="attachment" accept=".pdf,.jpg,.png,.doc" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
                <span className="text-sm text-gray-500">{fileName || "Click or drag to upload (Max 10MB)"}</span>
              </div>
            </div>
          </div>

          <textarea name="details" rows={4} required placeholder="Technical requirements, Ambient conditions, or other specific needs..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
        </div>
      </div>

      <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center space-x-2">
        <span>Submit Request for Quote</span>
        <FileText className="w-5 h-5" />
      </button>
    </form>
  );
}