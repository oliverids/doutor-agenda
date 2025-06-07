"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const AuthenticationPage = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center px-4">
      <Tabs defaultValue="register" className="w-full max-w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="cursor-pointer">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="cursor-pointer">
            Criar conta
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AuthenticationPage;
