import prisma from "@backend/modules/prisma/Prisma";
import React from "react";
import StatsGrid from "@/app/(admin)/admin/status/StatsGrid";

const SiteBalance = async () => {

	const users = await prisma.user.findMany({
		select: {
			usdtBalance: true,
			wallet: true
		}
	})

	const totalUsdt = users.reduce((t,o)=>t+o.usdtBalance,0);
	const totalDodo = users.reduce((t,o)=>t+o.wallet,0);


	return (
		<>
			<h2 className={'text-bold text-2xl'}>Site Balance</h2>
			<StatsGrid stats={[
				{
					value: (totalUsdt.toLocaleString())+" $",
					title: "Total Usdt",
					description: "Total Tether balance of users",
					diff: 0
				},
				{
					value: (totalDodo.toLocaleString())+" D",
					title: "Total Dodo",
					description: "Total Dodo balance of users",
					diff: 0
				}
			]} />
		</>
	);
};

export default SiteBalance;
