import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    GoogleProvider({
      clientId:
        "748843727757-do4m0teuilhres8q8ae1qi5irkmck2hv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export default NextAuth(authOptions);
