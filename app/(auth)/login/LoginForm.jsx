import { loginUser } from "@/utils/users/userActions";
import LoaderButton from "@/components/common/button/LoaderButton.jsx";

function LoginForm() {
  return (
    <form
      action={loginUser}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border shadow-sm p-4"
    >
      <legend className="fieldset-legend mx-auto text-base">Login</legend>

      <label className="label">Username</label>
      <input
        type="text"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="username"
        name="username"
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input focus-within:outline-none focus-within:ring-0"
        placeholder="password"
        name="password"
        autoComplete="current-password"
      />

      <LoaderButton>Login</LoaderButton>
    </form>
  );
}

export default LoginForm;
