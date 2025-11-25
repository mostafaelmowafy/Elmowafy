import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.message.value
    ) {
      toast.error("Please fill in all fields.");
      return;
    } else {
      toast
        .promise(
          emailjs.sendForm(
            "service_shrb8vk", // من EmailJS
            "template_46ccksn", // من EmailJS
            e.target,
            "kF5Sxk0iaTY1AK8uO" // من EmailJS
          ),
          {
            loading: "Sending message...",
            success: "Message sent successfully!",
            error: "Failed to send message.",
          }
        )
        .then(() => {
          e.target.reset();
        });
    }
  };

  return (
    <div
      id="Contact"
      className="pb-32 pt-16 bg-gray-50 dark:bg-darksecoundarybg relative overflow-hidden "
    >
      <div className=" max-w-2xl mx-auto px-6 relative z-10">
        <h1 className=" text-center text-2xl font-extrabold">Get In Touch</h1>
        <h3 className=" text-center font-semibold text-xs bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
          Lets work together
        </h3>

        <div className="space-y-5 text-gray-700 dark:text-gray-300 mt-14">
          <form onSubmit={sendEmail} className=" mt-6 space-y-4">
            <div>
              <label className=" block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                className=" bg-transparent w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className=" block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className=" bg-transparent w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="  block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                className=" bg-transparent w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" w-full bg-pragraph dark:bg-white dark:text-pragraph text-white px-6 py-2 rounded-lg hover:bg-primarydark transition-colors duration-300"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
