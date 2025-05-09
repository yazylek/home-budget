"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validators";
import { Card, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/lib/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { login, token } = useAuth();

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "test@test.pl",
      password: "test1234",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    login(values);
  }

  return (
    <section className=" flex justify-center items-center h-screen">
      <Card className="w-[24rem] p-4 py-12">
        <CardHeader className="font-bold text-2xl">
          Login to your account
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </Card>
    </section>
  );
};
export default LoginPage;
