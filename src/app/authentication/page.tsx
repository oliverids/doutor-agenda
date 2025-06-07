import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default AuthenticationPage;
