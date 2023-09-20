import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [toSend, setToSend] = useState({
    to_name: '',
    from_name: '',
    message: ''
  });

  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    let errMsg = 'Please try agian..'
    let sucessMsg = 'Success! You will recieve Email back.'
    emailjs
      .sendForm(
        "service_40ows8i",
        "template_k7ww5ce",
        form.current,
        "rDJNcz2q0f8nQhmOf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast(sucessMsg);
        },
        (error) => {
          console.log(error.text);
          toast.warning(errMsg);
        }
      );
  };
  
  return (
    <div
      id="Contact"
      className="p-4 p xl:p-10 flex flex-col items-center justify-center"
    >
      <ToastContainer/>
      <h1
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-10 leading-normal animate-charcter uppercase text-[#25ffc9] "
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-down"
        action=""
        className="flex flex-col gap-2 "
      >
        <div className="lg:flex gap-3 ">
          <input
            name="to_name"
            className="w-full xl:my-2 my-2 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 "
            placeholder="Enter Your Name "
            type="text"
            required
            onChange={(e) => setToSend({...toSend, to_name: e.target.value})}
          />
          <input
            required
            name="from_name"
            className="w-full xl:my-2 my-2 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 "
            placeholder="Enter Your Email "
            type="email"
            onChange={(e) => setToSend({...toSend, from_name: e.target.value})}
          />
        </div>
        <textarea
          name="message"
          onChange={(e) => setToSend({...toSend, message: e.target.value})}
          className="w-full mb-4 rounded-lg p-2 bg-slate-800 border-2 border-[#25ffc9] b_glow text-slate-400 pl"
          placeholder="Write Your Massage.."
          required
          cols="50"
          rows="7"
        ></textarea>
      

      <button
        type="submit"
        className="neno-button bg-slate-900 shadow-xl mt-5 mb-10 text-gray-300 border-2 hover:bg-[#284075] border-[#25ffc9] rounded-lg py-2 w-full uppercase realative overflow-hidden"
      
      >
        submit
      </button>
      </form>
    </div>
  );
};

export default Contact;
