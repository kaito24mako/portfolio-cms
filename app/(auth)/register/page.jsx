import Link from "next/link";
import RegisterForm from "./RegisterForm";
import Logo from "@/components/features/authPage/Logo";

export const metadata = {
  title: "Register",
};

function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 pt-3 md:pt-8">
      <Logo />
      <RegisterForm />
      <p className="text-sm">
        Already have an account?{" "}
        <Link href="/login" className="link link-primary">
          Log in
        </Link>
      </p>
    </main>
  );
}

export default RegisterPage;
