import User from "@/models/users";
import bcrypt from "bcrypt";

import { Op } from "sequelize";
import { badRequest, conflict, notFound } from "@/lib/errorHandler";

//* GET

export async function getAllUsers() {
  const users = await User.findAll({
    attributes: { exclude: ["createdAt", "password", "isAdmin"] },
  });

  return users;
}

export async function getUserById(id) {
  if (!id) {
    throw badRequest("User ID is required");
  }

  const user = await User.findByPk(id, {
    attributes: { exclude: ["createdAt", "password", "isAdmin"] },
  });

  if (!user) {
    throw notFound("User not found");
  }

  return user;
}

//* POST
export async function postUser(data) {
  if (!data.firstName) {
    throw badRequest("First name is required");
  }

  if (!data.lastName) {
    throw badRequest("Last name is required");
  }

  if (!data.username || data.username.length < 4) {
    throw badRequest(
      "Username is required and must be at least 4 characters long",
    );
  }

  if (!data.email) {
    throw badRequest("An email address is required");
  }

  if (!data.password) {
    throw badRequest("A password is required");
  }

  const sameUser = await User.findOne({
    where: {
      [Op.or]: [{ username: data.username }, { email: data.email }],
    },
  });

  if (sameUser) {
    throw conflict("A user with the same username or email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const user = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    email: data.email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  return {
    message: `User ${user.username} created successfully`,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
    },
    token,
  };
}

//* DELETE
