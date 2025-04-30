"use server";

export async function getWordpressDetails() {
  return {
    username: process.env.WORDPRESS_USER,
    password: process.env.WORDPRESS_PASS,
  };
}
