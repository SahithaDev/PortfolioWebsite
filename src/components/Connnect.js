import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function ConnectForm() {
  const [state, handleSubmit] = useForm("mykbkqje");

  // ✅ Success message
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-green-500 text-xl font-semibold">
          ✅ Message sent! I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          Contact <span className="text-orange-500">Me</span>
        </h2>

        {/* Name */}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Email */}
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message */}
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={state.submitting}
          className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </div>
  );
}

export default ConnectForm;
