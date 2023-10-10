import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600">
      {/*  Gradient from HyperColor & ui components from shadcn/ui */}
      <div className="absolute top-0 right-0 m-2">
        <ThemeToggle />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with AI</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-4">
            {isAuth && <Button>Go to chats</Button>}
          </div>
          <div className="w-full mt-4">
            {isAuth ? (
              <></>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to continue &nbsp;
                  <LogIn />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
