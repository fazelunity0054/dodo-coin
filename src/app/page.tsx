'use client';
import {useWalletInfo, useWeb3Modal} from "@web3modal/scaffold-react";
import {useAccount, useBalance, useDisconnect, useSendTransaction, useSignMessage} from "wagmi";
import {parseEther} from "viem";
import {getBalance, signTypedData} from "@wagmi/core";
import {config} from "@/context/config";
import {ethers, formatUnits} from "ethers";



const Page = () => {
	const open = useWeb3Modal();
	const wallet = useWalletInfo();
	const account = useAccount();
	const { signMessage } = useSignMessage();
	const { sendTransaction } = useSendTransaction()
	const {disconnect} = useDisconnect();
	const {data} = useBalance({
		address: account.address
	})

	console.log(data);

	return (
		<div>
			<button onClick={() => open.open()}>
				open
			</button>
			<img src={wallet.walletInfo?.icon}/>
			<br/>
			<button onClick={() => {
				console.log(signMessage({
					message: "test",
				}))
			}}>Sign Message
			</button>
			<br/>
			{account.isConnected + ""}
			<br/>
			{account.address}
			<br/>
			{account.chainId}
			<br/>
			<button
				onClick={() => sendTransaction({
					gas: null,
					to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
					value: parseEther('0.0001'),
				})}
			>
				Transfer
			</button>
			<button onClick={disconnect}>
				DC

			</button>
			<button onClick={async ()=>{
				if (!account) return;
				const result = await signTypedData(config, {
						"types": {
							"EIP712Domain": [
								{ "name": "name", "type": "string" },
								{ "name": "version", "type": "string" },
								{ "name": "chainId", "type": "uint256" },
								{ "name": "verifyingContract", "type": "address" }
							],
							"Permit": [
								{ "name": "owner", "type": "address" },
								{ "name": "spender", "type": "address" },
								{ "name": "value", "type": "uint256" },
								{ "name": "nonce", "type": "uint256" },
								{ "name": "deadline", "type": "uint256" }
							]
						},
						"primaryType": "Permit",
						"domain": {
							"name": "BNB",
							"version": "1",
							"chainId": account.chainId,
							"verifyingContract": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
						},
						"message": {
							"owner": account.address!,
							"spender": developer.address!,
							"value": "100000000000",
							"nonce": 0,
							"deadline": 1625256000
						}
					}
				)

				console.log(result);
			}}>
				SIGN TYPED DATA
			</button>
			<button onClick={()=>{
				getBalance(config,{
					address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
					chainId: account.chainId,
					unit: "wei",
					blockTag: "latest"
				}).then(e => {
					console.log(e);
					console.log(formatUnits(e.value, e.decimals));
				})
			}}>
				balance
			</button>
			{data.value+""}
		</div>
	)
};

export default Page;
