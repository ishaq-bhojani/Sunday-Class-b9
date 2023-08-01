import { getByEmail, verifyPassword } from "@/services/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    // Configure one or more authentication providers
    session: {
        jwt: true
    },
    providers: [

        CredentialsProvider({
            async authorize({ email, password }) {
                const user = getByEmail(email);
                if (!user) {
                    throw new Error("User not Found");
                }
                const isValid = await verifyPassword(user.password, password);
                if (!isValid) {
                    throw new Error("Incorrect Password");
                }

                return { email };
            }
        }),
        // ...add more providers here
    ],
}
export default NextAuth(authOptions)