import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ulvx0kr",
        "template_n32agur",
        form.current,
        "X3FeqWtL-XXYPhONC"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out. I will contact you soon.",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again!",
          });
        }
      );
  };

  return (
    <div className="bg-base-300 p-6 md:p-8 rounded-2xl shadow-xl mx-auto max-w-6xl min-h-[70vh] flex flex-col justify-center">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-base-content mb-8 md:mb-10">
        Send Me an Email 👇
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Email Form */}
        <div className="flex-1 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 md:gap-6 w-full"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full text-sm md:text-base"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full text-sm md:text-base"
              required
            />
            <textarea
              name="message"
              className="textarea textarea-bordered w-full text-sm md:text-base"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary w-full text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="flex-1 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/6323f5b0-c7f0-477f-a04a-1bed53852b5b/XCnIriqMzx.lottie"
            loop
            autoplay
            className="w-full max-w-[400px] lg:max-w-[700px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Email;
