/** @format */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginUser } from "@/hooks/api/useAuth";
import { loginSchema } from "@/schemas/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { isBackendError } from "@/utils/api/isBackendError";

export default function Login() {
  const formSchema = loginSchema;

  const router = useRouter();
  const { mutate: loginUser, isPending } = useLoginUser();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    loginUser(values, {
      onSuccess: () => {
        router.push("/profile");
      },

      onError: (error) => {
        if (isBackendError(error) && error.errors) {
          error.errors.forEach((err) => {
            form.setError(err.field as "email" | "password", {
              message: err.message,
              type: "server",
            });
          });
        } else {
          toast.error("error.unknown");
        }
      },
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-1/1 h-1/1 min-h-[1200px] bg-background flex flex-col items-center justify-center">
      <div className="w-72 shadow-base rounded-xl p-5 bg-background">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="your_email" {...field} />
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
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="your_password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button isLoading={isPending} type="submit" variant="neumorphic" size="full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
