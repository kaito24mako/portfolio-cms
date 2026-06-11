import LoginForm from "./LoginForm";
import Link from "next/link";
import Logo from "@/components/features/authPage/Logo";

export const metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 pt-3 md:pt-8">
      <Logo />
      <LoginForm />
      <p className="text-sm mt-4">
        No account?{" "}
        <Link href="/register" className="link link-primary">
          Create one
        </Link>
      </p>
    </main>
  );
}

export default LoginPage;
