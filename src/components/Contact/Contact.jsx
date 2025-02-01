import React, { useRef } from "react";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const autoReplyData = {
        user_name: form.current.name.value,
        to_email: form.current.email.value,
      };

      // Send original email
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Original message sent successfully:", result);

      // Send auto-reply email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_AUTO_EMAILJS_TEMPLATE_ID,
        autoReplyData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Auto-reply sent successfully!");
      toast.success("Message and auto-reply sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send the message. Please try again later.");
    } finally {
      form.current.reset();
    }
  };
  return (
    <section
      className="pb-[180px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[2%] 2xl:px-[17%]"
      id="contact"
    >
      <h2 className="uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center">
        Contact Me
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        Let's
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
          Talk about ideas
        </span>
      </p>

      <div className="lg:grid-cols-[5fr_7fr] grid ">
        <div className="contact__content">
          <div className="contact__card">
            <span className="bg-white contact__card-icon dark:bg-containerColorDark">
              <FaRegMap className=" text-titleColor dark:text-titleColorDark" />
            </span>
            <h3 className="contact__card-title font-[700] text-titleColor dark:text-titleColorDark ">
              Address
            </h3>
            <p className="contact__card-data text-textColor dark:text-textColorDark">
              Dhanbad, Jharkhand, India
            </p>
          </div>
          <div className="contact__card">
            <span className="bg-white contact__card-icon dark:bg-containerColorDark">
              <FaRegUser className="text-titleColor dark:text-titleColorDark" />
            </span>
            <h3 className="contact__card-title font-[700] text-titleColor dark:text-titleColorDark">
              Freelance
            </h3>
            <p className="contact__card-data text-textColor dark:text-textColorDark">
              Available Right Now
            </p>
          </div>
          <div className="contact__card">
            <span className="bg-white contact__card-icon dark:bg-containerColorDark">
              <FaRegEnvelope className="text-titleColor dark:text-titleColorDark" />
            </span>
            <h3 className="contact__card-title font-[700] text-titleColor dark:text-titleColorDark">
              Email
            </h3>
            <p className="contact__card-data text-textColor dark:text-textColorDark">
              harshgupta88911@gmail.com
            </p>
          </div>
          <div className="contact__card">
            <span className="bg-white contact__card-icon dark:bg-containerColorDark">
              <FaRegAddressBook className="text-titleColor dark:text-titleColorDark" />
            </span>
            <h3 className="contact__card-title font-[700] text-titleColor dark:text-titleColorDark">
              Phone
            </h3>
            <p className="contact__card-data text-textColor dark:text-textColorDark">
              +91 7667045966
            </p>
          </div>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 contact__form-group sm:grid-cols-2">
            <div className="contact__form-div">
              <label className="contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark">
                Your Full Name <b className="">*</b>
              </label>
              <input
                type="text"
                name="name"
                required
                className="contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark">
                Your Email Address <b className="">*</b>
              </label>
              <input
                type="email"
                name="email"
                required
                className="contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark">
              Your Subject <b className="">*</b>
            </label>
            <input
              name="service"
              type="text"
              required
              className="contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark">
              Your Message <b className="">*</b>
            </label>
            <input
              name="message"
              required
              className="contact__form-input bg-bgColorAlt dark:bg-containerColorDark text-titleColor dark:text-titleColorDark"
            ></input>
          </div>

          <div className="grid items-center justify-center grid-cols-1 gap-4 contact__submit sm:flex sm:justify-around text-titleColor dark:text-titleColorDark">
            <p className="font-[Comfortaa]">
              *Accept the terms and conditions.
            </p>
            <button
              type="submit"
              onClick={sendEmail}
              className='flex items-center justify-around w-full sm:w-1/3 text-titleColor dark:text-titleColorDark text-large gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[16px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
            >
              <span className="z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]">
                Send Message
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
