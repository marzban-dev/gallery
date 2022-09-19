import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

export default NextAuth({
    secret: "SECRET",
    providers: [
        CredentialsProviders({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: {
                    label: "Name",
                    type: "text",
                    placeholder: "Enter Your Name",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Your Password",
                },
            },
            // async authorize(credentials) {
            //     try {
            //         const result = await signInUser({
            //             username: credentials.username,
            //             password: credentials.password,
            //         });
            //         const user = await getUserInfo(credentials.username);
            //         console.log(user)
            //         return {
            //             ...result,
            //             info: user.userResult
            //         };
            //     } catch (e) {
            //         return null;
            //     }
            // },
        }),
    ],
    callbacks: {
        // jwt: async ({token, user}) => {
        //     if (user) {
        //         const tomorrow = new Date();
        //         tomorrow.setDate(tomorrow.getDate() + 1);
        //
        //         token.accessToken = user.access;
        //         token.refreshToken = user.refresh;
        //         token.userInfo = user.info;
        //         token.tokenExpiry = tomorrow.getTime();
        //     }
        //
        //     // Return previous token if the access token has not expired yet
        //     if (Date.now() < token.tokenExpiry) return token;
        //
        //     // Access token has expired, try to update it
        //     return refreshAccessToken(token);
        // },
        // session: async ({session, token}) => {
        //     session.accessToken = token.accessToken;
        //     session.refreshToken = token.refreshToken;
        //     session.user = token.userInfo;
        //     session.error = token.error;
        //
        //     return Promise.resolve(session);
        // },
    },
    pages: {
        signIn: "/auth/signin"
    }
});
