import { z } from 'zod';
import { Input } from '../../../../components/ui/input';

export default function Register() {
	const registerSchema = z.object({
		username: z.string().min(2).max(50),
	});

	return (
		<div>
			<form>
				<Input type="email" placeholder="Email" />
			</form>
		</div>
	);
}
