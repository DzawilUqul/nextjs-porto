import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xovqlnjk");
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = React.useState(false);

  const HandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // clear the form after submission
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // hide the icon after 3 seconds
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // handle form submission
  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div>
          <div>
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            <form 
              onSubmit={HandleSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]">
              {/* Firstname & Lastname */}
              <div className="flex gap-2">
                {/* Firstname */}
                <div className="flex-1 ">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    FirstName <span className="text-violet-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="input"
                    value={formData.firstname}
                    placeholder="First Name"
                    required
                    onChange={HandleChange}
                  />
                </div>
                {/* Lastname */}
                <div className="flex-1 ">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Lastname <span className="text-violet-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="input"
                    value={formData.lastname}
                    placeholder="Last Name"
                    required
                    onChange={HandleChange}
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Email <span className="text-violet-500">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input"
                  value={formData.email}
                  placeholder="youremail@email.com"
                  required
                  onChange={HandleChange}
                />
                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={state.errors}
                />
              </div>
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Phone <span className="text-violet-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="input"
                  value={formData.phone}
                  placeholder="08123456789"
                  onChange={HandleChange}
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Message <span className="text-violet-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  value={formData.message}
                  placeholder="Your message here"
                  rows={5}
                  required
                  onChange={HandleChange}
                />
                <ValidationError
                  field="Message"
                  prefix="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" disabled={state.submitting} className="btn btn-accent bg-violet-500 flex items-center justify-center gap-2">
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    {/* Show Icon With opacity Transition */}
                    <FaCheckCircle 
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {/* Button Text */}
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
