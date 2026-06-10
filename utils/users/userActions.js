import { postUser } from "@/controllers/users";
import { login } from "@/controllers/auth";
import { connectDb } from "@/lib/connectDb";
import { redirect } from "next/navigation";

export async function loginUser(formData) {
  "use server";
  await connectDb();

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  await login(data);
  redirect("/");
}

export async function createUser(formData) {
  "use server";
  await connectDb();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  await postUser(data);
  redirect("/login");
}
