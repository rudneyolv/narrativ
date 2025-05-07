/** @format */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Column } from "@/components/containers/Column/Column";
import Text from "@/components/Text/Text";
import { useRegisterUser } from "@/hooks/api/useAuth";
import { isBackendError } from "@/utils/api/isBackendError";
import { registerSchema } from "@/schemas/auth/registerSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const router = useRouter();

  const formSchema = registerSchema;
  const { mutate: registerUser, isPending } = useRegisterUser();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    registerUser(values, {
      onSuccess: () => {
        toast.success("success.user_registered");
        router.push("/login");
      },

      onError: (error) => {
        if (isBackendError(error) && error.errors) {
          toast.error(error.message);

          error.errors.forEach((err) => {
            form.setError(err.field as "username" | "email" | "password" | "confirm_password", {
              message: err.field_message,
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
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <div className="w-72 shadow-neumorphic rounded-xl p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="e-mail" {...field} />
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
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <Column>
            {Object.entries(form.formState.errors || {}).map(([key, error]) => (
              <Text key={key} text={error?.message || ""} color="dark_red" />
            ))}
          </Column> */}

          <Button type="submit" variant="neumorphic" size="full" isLoading={isPending}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
