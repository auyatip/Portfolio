import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_40ows8i",
        "template_k7ww5ce",
        form.current,
        "rDJNcz2q0f8nQhmOf"
      )
      .then(
        () => {
          toast("Thanks! Your message has been sent.");
          e.target.reset();
        },
        () => {
          toast.warning("Unable to send your message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      }
      );
  };
  
  return (
    <div
      id="Contact"
      className="w-full max-w-3xl px-5 sm:px-8 lg:px-10 py-10 flex flex-col items-center justify-center"
    >
      <ToastContainer/>
      <h1
        data-aos="fade-left"
        className="text-4xl sm:text-5xl text-center font-semibold mb-10 leading-normal animate-charcter uppercase text-[#25ffc9] "
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-down"
        action=""
        className="w-full flex flex-col gap-2"
      >
        <div className="w-full lg:flex gap-3">
          <input
            name="to_name"
            className="w-full xl:my-2 my-2 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 "
            placeholder="Enter Your Name "
            type="text"
            required
          />
          <input
            required
            name="from_name"
            className="w-full xl:my-2 my-2 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 "
            placeholder="Enter Your Email "
            type="email"
          />
        </div>
        <textarea
          name="message"
          className="w-full mb-4 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 pl"
          placeholder="Write Your Message.."
          required
          cols="50"
          rows="7"
        ></textarea>
      

      <button
        type="submit"
        disabled={isSending}
        className="neno-button bg-slate-900 shadow-xl mt-5 mb-10 text-gray-300 border-2 hover:bg-[#284075] border-[#25ffc9] rounded-lg py-2 w-full uppercase relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
      </form>
    </div>
  );
};

export default Contact;
