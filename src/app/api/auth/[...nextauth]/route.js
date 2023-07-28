import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import connect from "@/utils/db";
import User from "@/models/User";
import {compare} from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                const {email, password} = credentials;
                await connect();
                const user = await User.findOne({email: email.toLowerCase()});
                if (!user) throw new Error("Incorrect email and or password.")
                if (await compare(password, user.password)) return user;
                else throw new Error("Incorrect email and or password.")
            },
        }),
        Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }),
        Github({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET }),
    ],
    pages: {
        error: "/auth/login"
    }
})

export {handler as GET, handler as POST};