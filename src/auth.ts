import Kakao from "@auth/core/providers/kakao"
import NextAuth from "next-auth";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    trustHost:true,
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    },
    pages:{
        signIn:'/'
    },
    providers: [
        Kakao({ clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID, clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET})
    ],
    callbacks: {
        jwt({ token}) {
            return token;
        },
        session(a) {
            return a.session;
        },
        signIn(){
            return true;
        }
    },
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET
})
