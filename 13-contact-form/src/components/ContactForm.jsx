import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSave, setIsSaved] = useState(false);
  const [savedName, setSavedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (values) => {
    const newErrors = {};
    if (values.name.trim() === "") newErrors["name"] = "Name is required";

    if (values.email.trim() === "") {
      newErrors["email"] = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors["email"] = "Invalid email format";
    }

    if (values.message.trim() === "")
      newErrors["message"] = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate(form)) {
      setSavedName(form.name);
      setIsSaved(true);
    }
  };

  return (
    <>
      {!isSave ? (
        <div className="container">
          {/* Implement contact form logic here */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e)}
                required
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
                required
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="message">Message: </label>
              <textarea
                id="message"
                name="message"
                type="text"
                value={form.message}
                onChange={(e) => handleChange(e)}
                required
              />
              {errors.message && (
                <div style={{ color: "red" }}>{errors.message}</div>
              )}
            </div>

            <div type="submit" style={{ marginBottom: "10px" }}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>Thank you, {savedName}!</h2>
      )}
    </>
  );
}

export default ContactForm;
