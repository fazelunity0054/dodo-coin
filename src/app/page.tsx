'use client';
import {notFound} from "next/navigation";
import {Web3Modal} from "@/context/Web3Modal";
import {useWalletInfo, useWeb3Modal} from "@web3modal/scaffold-react";

const Page = () => {
	const open = useWeb3Modal();
	const wallet = useWalletInfo();

	return (
		<Web3Modal>
			<button onClick={()=>open.open()}>
				open
			</button>
			<img src={wallet.walletInfo?.icon} />
		</Web3Modal>
	)
};

export default Page;
