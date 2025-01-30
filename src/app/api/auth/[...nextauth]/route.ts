import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dataUsers } from "../users";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username / Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const findUsers = dataUsers.find((x) => {
          return (
            (x.email === credentials?.identifier ||
              x.username === credentials?.identifier) &&
            x.password === credentials.password
          );
        });

        if (findUsers) return findUsers;
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const userEmail = session.user?.email;

      if (userEmail) {
        const getUser = dataUsers.find((x) => x.email === userEmail);

        session.user = getUser;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
