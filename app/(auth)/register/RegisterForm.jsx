import { createUser } from "@/utils/users/userActions";

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

      {/* need validation message! */}
      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        name="password"
        placeholder="password"
        required
      />

      <button className="btn btn-neutral mt-4">Create account</button>
    </form>
  );
}

export default RegisterForm;
