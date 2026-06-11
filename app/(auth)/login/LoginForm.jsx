import { loginUser } from "@/utils/users/userActions";

function LoginForm() {
  return (
    <form
      action={loginUser}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <legend className="fieldset-legend mx-auto text-base">Login</legend>

      <label className="label">Username</label>
      <input
        type="text"
        className="input"
        placeholder="username"
        name="username"
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="password"
        name="password"
      />

      <button className="btn btn-neutral mt-4">Login</button>
    </form>
  );
}

export default LoginForm;
