'use server';



import {useAccount} from "wagmi";
import prisma from "@backend/modules/prisma/Prisma";
import {getUserFromCookies} from "@/utils/serverComponents/user";

export async function setUserWallet(acc:Omit<ReturnType<typeof useAccount>, 'connector'>) {
	const user = await getUserFromCookies();
	if (!user) return;
	const where = {
		address: acc.address+""
	}
	const data = {
		...where,
		data: acc
	}
	await prisma.user.update({
		where: {
			id: user.id
		},
		data: {
			connectedWallets: {
				upsert: {
					where: {
						address: acc.address
					},
					create: data,
					update: data
				}
			}
		}
	})
}
