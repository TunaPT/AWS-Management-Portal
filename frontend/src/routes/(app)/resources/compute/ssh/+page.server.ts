import { sshContract } from "@deisi25/types";
import { initClient } from "@ts-rest/core";
import type { PageServerLoad } from "./$types";
import type { SSHKey } from "@deisi25/types/lib/resources/ssh/ssh";

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get('token');

	const client = initClient(sshContract, {
		baseUrl: 'http://localhost:3000',
		baseHeaders: {
			'Content-Type': 'application/json',
			'Cookie': `token=${token}`
		},
	});

	const { status, body } = await client.listKeys();

	const keys = status === 200 ? body.sshKeys as SSHKey[] : [];

	return {
		keys: keys
	}
}
