"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import confetti from "canvas-confetti";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


import Button from "../Button";
import TextAnimation from "./../TextAnimation";


const FlyToLocation = ({ center, zoom }) => {
  const map = useMap();
  const prevRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;

    if (
      prev &&
      prev.lat === center.lat &&
      prev.lng === center.lng &&
      prev.zoom === zoom
    ) {
      return;
    }

    prevRef.current = { lat: center.lat, lng: center.lng, zoom };

    map.flyTo([center.lat, center.lng], zoom, {
      animate: true,
      duration: 1.2,
    });
  }, [center.lat, center.lng, zoom, map]);

  return null;
};




const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);

  const shootRealisticConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { x: 0.8, y: 0.2 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    cibilScore: "",
  });

  // ===================== STORE DATA =====================
// ===================== GOOGLE MAP =====================

// coordinates list (must be exact for markers)
const storeLocations = [
  { city: "Ahmedabad", state: "Gujarat", lat: 23.0225, lng: 72.5714 },
  { city: "Anand", state: "Gujarat", lat: 22.5645, lng: 72.9289 },
  { city: "Bhavnagar", state: "Gujarat", lat: 21.7645, lng: 72.1519 },
  { city: "Bikaner", state: "Rajasthan", lat: 28.0229, lng: 73.3119 },
  { city: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873 },
  { city: "Jalgaon", state: "Maharashtra", lat: 21.0077, lng: 75.5626 },
  { city: "Kolhapur", state: "Maharashtra", lat: 16.705, lng: 74.2433 },
  { city: "Mumbai", state: "Maharashtra", lat: 19.076, lng: 72.8777 },
  { city: "Nadiad", state: "Gujarat", lat: 22.6916, lng: 72.8634 },
  { city: "Nagpur", state: "Maharashtra", lat: 21.1458, lng: 79.0882 },
  { city: "Nashik", state: "Maharashtra", lat: 19.9975, lng: 73.7898 },
  { city: "Patan", state: "Gujarat", lat: 23.85, lng: 72.1167 },
  { city: "Pune", state: "Maharashtra", lat: 18.5204, lng: 73.8567 },
  { city: "Raipur", state: "Chhattisgarh", lat: 21.2514, lng: 81.6296 },
  { city: "Rajkot", state: "Gujarat", lat: 22.3039, lng: 70.8022 },
  { city: "Sangli", state: "Maharashtra", lat: 16.8524, lng: 74.5815 },
  { city: "Satara", state: "Maharashtra", lat: 17.6805, lng: 74.0183 },
  { city: "Shirur", state: "Maharashtra", lat: 18.8276, lng: 74.3747 },
  { city: "Surat", state: "Gujarat", lat: 21.1702, lng: 72.8311 },
  { city: "Thane", state: "Maharashtra", lat: 19.2183, lng: 72.9781 },
  { city: "Vadodra", state: "Gujarat", lat: 22.3072, lng: 73.1812 },
];

const [selectedState, setSelectedState] = useState("All");
const [selectedCity, setSelectedCity] = useState("All");

// state list
const states = ["All", ...new Set(storeLocations.map((s) => s.state))];

// city list based on state
const cities =
  selectedState === "All"
    ? ["All", ...new Set(storeLocations.map((s) => s.city))]
    : [
        "All",
        ...new Set(
          storeLocations
            .filter((s) => s.state === selectedState)
            .map((s) => s.city)
        ),
      ];

// filtered markers
const filteredMarkers = storeLocations.filter((store) => {
  const stateMatch = selectedState === "All" || store.state === selectedState;
  const cityMatch = selectedCity === "All" || store.city === selectedCity;
  return stateMatch && cityMatch;
});

// map center
const mapCenter = useMemo(() => {
  return filteredMarkers.length > 0
    ? { lat: filteredMarkers[0].lat, lng: filteredMarkers[0].lng }
    : { lat: 20.5937, lng: 78.9629 };
}, [filteredMarkers]);


  // ===================== VALIDATION =====================
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[5-9][0-9]{9}$/.test(phone);

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[A-Za-z\s]+$/.test(value.trim()))
          return "Name can contain only letters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!validatePhone(value))
          return "Phone must be 10 digits and start with 5-9";
        return "";

      case "message":
        if (!value.trim()) return "";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";

      case "cibilScore":
        if (!value.trim()) return "Please select your CIBIL score";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const newErrors = {};
    ["firstName", "lastName", "email", "phone", "cibilScore"].forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        shootRealisticConfetti();

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          cibilScore: "",
        });

        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
        console.error("API Error:", data.message);
      }
    } catch (error) {
      console.error("Request Failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="min-h-screen w-full container py-10 sm:py-15 lg:py-20"
    >
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row lg:h-full bg-white rounded-corners border border-[#d4d4d4] shadow-md hover:shadow-lg transition overflow-hidden">
          
          {/* LEFT SIDE */}
          <div
            className="md:w-1/2 bg-cover text-white lg:p-8 p-5 relative"
            style={{
              backgroundSize: "200% 100%",
              background:
                "linear-gradient(135deg, #205073 0%, #2fa7a0 55%, #329d9c 100%)",
            }}
          >
            <div className="absolute inset-0 z-0 rounded-2xl" />
            <div className="relative z-10">
              <TextAnimation>
                <h3 className="font-semibold mb-2">Contact Information</h3>
              </TextAnimation>

              <p className="lg:mb-10 mb-5 body3">
                Have questions? Let’s help you get your EV loan faster.
              </p>

              <div className="space-y-5 body3">

  <div className="flex items-start gap-4 lg:mb-5">
    <Phone className="w-5 h-5 text-[#79f431] flex-shrink-0 mt-[2px]" />
    <a href="tel:02262346666" className="leading-relaxed">
      022 6234 6666
    </a>
  </div>

  <div className="flex items-start gap-4 lg:mb-5">
    <Mail className="w-5 h-5 text-[#79f431] flex-shrink-0 mt-[2px]" />
    <a href="mailto:info@manbafinance.com" className="leading-relaxed">
      info@manbafinance.com
    </a>
  </div>

  <div className="flex items-start gap-4 lg:mb-5">
    <MapPin className="w-5 h-5 text-[#79f431] flex-shrink-0 mt-[2px]" />
    <span className="max-w-sm text-sm leading-relaxed">
      324, Runwal Heights, Opp. Nirmal Lifestyle, LBS Marg, Mulund (W),
      Mumbai – 400080
    </span>
  </div>

</div>


              {/* ================= FILTER + MAP ================= */}
<div className="mt-8">
  <h4 className="text-white font-semibold mb-4 text-[16px]">
    Find Nearest Store
  </h4>

  {/* Filters */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 ">
    {/* State */}
    <div className="relative">
      <select
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedCity("All");
        }}
        className="w-full bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl outline-none appearance-none"
      >
        {states.map((state, i) => (
          <option key={i} value={state} className="text-black">
            {state}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
    </div>

    {/* City */}
    <div className="relative">
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl outline-none appearance-none"
      >
        {cities.map((city, i) => (
          <option key={i} value={city} className="text-black">
            {city}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
    </div>
  </div>

  {/* MAP */}
<div className="w-full h-[260px] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
  <MapContainer
    center={[mapCenter.lat, mapCenter.lng]}
    zoom={filteredMarkers.length === 1 ? 12 : 5}
    style={{ width: "100%", height: "100%" }}
    scrollWheelZoom={false}
  >
    <FlyToLocation
      center={mapCenter}
      zoom={filteredMarkers.length === 1 ? 12 : 5}
    />

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />

    {filteredMarkers.map((store) => (
  <Marker key={`${store.city}-${store.state}`} position={[store.lat, store.lng]}>

        <Popup>
          <b>{store.city}</b>, {store.state}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
</div>



  {/* Store List */}
  {/* <div className="mt-5 bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md max-h-[170px] overflow-y-auto scrollbar-hide">
    <p className="text-sm font-medium mb-3 text-white">
      Available Stores ({filteredMarkers.length})
    </p>

    {filteredMarkers.length === 0 ? (
      <p className="text-white/70 text-sm">
        No store found for this location.
      </p>
    ) : (
      <div className="space-y-3">
        {filteredMarkers.map((store, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            <p className="font-semibold text-white text-sm">
              {store.city}, {store.state}
            </p>
          </div>
        ))}
      </div>
    )}
  </div> */}
</div>
{/* ================= END FILTER + MAP ================= */}

              {/* ================= END FILTER + GRAPH ================= */}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="md:w-1/2 lg:p-8 p-5 bg-white">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-black">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-black">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-black lg:mt-5 mt-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-black lg:mt-5 mt-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    minLength="10"
                    maxLength="10"
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-black">Cibil Score</label>

                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Between 500 and 650",
                    "Between 650 and 720",
                    "Between 720 and 800",
                    "Above 800",
                  ].map((score, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer border border-gray-300 rounded-xl px-4 py-3 hover:border-black transition"
                    >
                      <input
                        type="radio"
                        name="cibilScore"
                        value={score}
                        checked={formData.cibilScore === score}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-black cursor-pointer"
                      />
                      <span className="text-[#011C2A] text-sm">{score}</span>
                    </label>
                  ))}
                </div>

                {errors.cibilScore && (
                  <p className="text-red-500 text-xs mt-1">{errors.cibilScore}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-black mb-5">Message</label>
                <textarea
                  rows="1"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none text-[#011C2A] focus:border-black resize-none"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                text={submitting ? "Submitting..." : "Get Started"}
                className="text-white"
                onClick={sendEmail}
                disabled={submitting}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
