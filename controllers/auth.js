import bcrypt from "bcrypt";
import User from "@/models/users";
import { badRequest, denyAccess } from "@/lib/errorHandler";

export async function login(data) {
  if (!data.username) {
    throw badRequest("Username is required");
  }

  if (!data.password) {
    throw badRequest("Password is required");
  }

  let user = await User.findOne({
    where: {
      username: data?.username,
    },
  });

  if (!user) {
    throw denyAccess("Invalid login details");
  }

  const validPassword = await bcrypt.compare(data.password, user.password);

  if (!validPassword) {
    console.log("invalid password");
    throw denyAccess("Invalid login details");
  }

  const token = user.generateAuthToken();

  return {
    token,
    message: `User ${user.username} logged in successfully`,
  };
}
