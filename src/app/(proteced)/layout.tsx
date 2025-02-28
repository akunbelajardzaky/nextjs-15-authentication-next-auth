import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function ProtectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


 const session = await auth();

 if (!session) {
    redirect("/auth/signin");
  }

  return children
}
