import Kakao from "@auth/core/providers/kakao"
import NextAuth from "next-auth";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
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
