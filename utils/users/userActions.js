import { postUser } from "@/controllers/users";
import { login } from "@/controllers/auth";
import { connectDb } from "@/lib/connectDb";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

export async function loginUser(formData) {
  "use server";

  await connectDb();

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const { token } = await login(data);

  // set 'auth-token' to jwt token of user as a cookie
  const cookieStore = await cookies();
  cookieStore.set("auth-token", token, {
    httpOnly: true, // prevent JS from reading cookie
    sameSite: "lax", // prevent cross-site attacks
    secure: process.env.NODE_ENV === "production",
    path: "/", // make cookie available for entire site
  });

  redirect("/");
}

export async function logoutUser() {
  "use server";

  const cookieStore = await cookies();
  cookieStore.delete("auth-token");

  redirect("/login");
}
