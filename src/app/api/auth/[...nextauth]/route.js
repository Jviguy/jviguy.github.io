import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google";
import GitHub from "@auth/core/providers/github";

const handler = NextAuth({
    providers: [
        // CredentialsProvider({
        //     credentials: {
        //         username: { label: "Username" },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials) {
        //         const authResponse = await fetch("https://jviguy.vercel.app/api/auth/login", {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(credentials),
        //         })
        //
        //         if (!authResponse.ok) {
        //             return null
        //         }
        //
        //         return await authResponse.json()
        //     },
        // }),
        Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }),
        GitHub({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET }),
    ],
})

export {handler as GET, handler as POST};