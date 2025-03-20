'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { registerSchema } from '../../(validations)/registerSchema';
import { Column } from '@/components/containers/Column/Column';
import Text from '@/components/Text/Text';

export function RegisterForm() {
	const formSchema = registerSchema;

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		};

		try {
			const response = await fetch(
				'http://localhost:3100/auth/register',
				config
			);

			const data = await response.json();

			if (!response.ok) {
				if (data.errors) {
					data.errors.forEach((error: { field: string; message: string }) => {
						form.setError(
							error.field as
								| 'username'
								| 'email'
								| 'password'
								| 'confirm_password',
							{
								message: error.message,
								type: 'server',
							}
						);
					});
				}
			}
		} catch {}
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirm_password: '',
		},
	});

	return (
		<div className="w-72">
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
							</FormItem>
						)}
					/>

					<Column>
						{Object.entries(form.formState.errors).map(([key, error]) => (
							<Text key={key} text={error?.message || ''} color="dark_red" />
						))}
					</Column>

					<Button type="submit" variant="neumorphic" size="full">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
