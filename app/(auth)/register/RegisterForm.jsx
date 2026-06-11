import { createUser } from "@/utils/users/userActions";
import ClientForm from "./ClientForm";

function RegisterForm() {
  return (
    <form
      action={createUser}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <legend className="fieldset-legend mx-auto text-base">
        Create account
      </legend>

      <label className="label">First name</label>
      <input
        type="text"
        className="input"
        name="firstName"
        placeholder="first name"
        required
      />

      <label className="label">Last name</label>
      <input
        type="text"
        className="input"
        name="lastName"
        placeholder="last name"
        required
      />

      <label className="label">Username</label>
      <input
        type="text"
        className="input"
        name="username"
        placeholder="username"
        minLength={4}
        required
      />

      <label className="label">Email</label>
      <input
        type="email"
        className="input"
        name="email"
        placeholder="email"
        required
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        name="password"
        placeholder="password"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x20-\x7E]+$"
        title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        required
      />
      {/* need password visibility functionality! */}
      {/* <ClientForm /> */}
      <p className="label text-xs opacity-75">
        Must contain:
        <br />
        • 1 uppercase letter
        <br />
        • 1 lowercase letter
        <br />
        • 1 number
        <br />• 1 special character
      </p>

      <button className="btn btn-neutral mt-4">Create account</button>
    </form>
  );
}

export default RegisterForm;
