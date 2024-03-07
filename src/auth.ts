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
            console.log('auth.ts jwt', token);
            return token;
        },
        session(a) {
            console.log('auth.ts session',a);
            return a.session;
        },
        signIn({user,profile}){
            console.log('auth.ts signIn',user,profile)
            return true;
        }
    },
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET
})