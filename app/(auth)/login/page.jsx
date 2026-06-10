import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <main className="flex justify-center items-center">
      <LoginForm />
    </main>
  );
}

export default LoginPage;
