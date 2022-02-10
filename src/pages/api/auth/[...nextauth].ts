import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "704703386708-a83tjsseuhbdh0b8qs6nvmfrr40m7gas.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
