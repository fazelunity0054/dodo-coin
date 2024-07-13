import {getFriends} from "@v3/friends/actions";
import "./style.css"
import Navbar from "@v3/components/Navbar";
import family from "./img.png";
import Image from "next/image";
import React from "react";
import InviteButton from "@v3/friends/InviteButton";

const Page = async () => {
	const friends = await getFriends();

	const empty = friends.length === 0;

	return (
		<div>
			<main>
				<div data-v-5a91f047="" className="frens-page page">
					<div data-v-55492676="" data-v-5a91f047="" className="pages-frens">
						{empty ? (
							<div
								data-v-97c098d1=""
								data-v-55492676=""
								className="pages-frens-empty-state"
							>
								<div data-v-97c098d1="" className="heading">
									<Image
										data-v-97c098d1=""
										src={family}
										alt="Friends emoji"
										className="emoji"
									/>
									<div data-v-97c098d1="" className="title">
										{" "}
										Invite frens. Earn
										<br data-v-97c098d1=""/> points{" "}
									</div>
								</div>
								<div data-v-97c098d1="" className="how-it-works">
									<div data-v-97c098d1="" className="title">
										How it works
									</div>
									<div data-v-97c098d1="" className="chain">
										<div data-v-97c098d1="" className="chain-element">
											<div data-v-97c098d1="" className="point-container">
												<div data-v-97c098d1="" className="stick"/>
												<div data-v-97c098d1="" className="point"/>
												<div data-v-97c098d1="" className="stick"/>
											</div>
											<div data-v-97c098d1="" className="content-container">
												<div data-v-97c098d1="" className="content-title">
													Share your invitation link
												</div>
												<div data-v-97c098d1="" className="content-subtitle">
													Get Bonus for each frens
												</div>
											</div>
										</div>
										<div data-v-97c098d1="" className="chain-element">
											<div data-v-97c098d1="" className="point-container">
												<div data-v-97c098d1="" className="stick"/>
												<div data-v-97c098d1="" className="point"/>
												<div data-v-97c098d1="" className="stick"/>
											</div>
											<div data-v-97c098d1="" className="content-container">
												<div data-v-97c098d1="" className="content-title">
													Your friends join Dodo
												</div>
												<div data-v-97c098d1="" className="content-subtitle">
													And start farming points
												</div>
											</div>
										</div>
										<div data-v-97c098d1="" className="chain-element">
											<div data-v-97c098d1="" className="point-container">
												<div data-v-97c098d1="" className="stick"/>
												<div data-v-97c098d1="" className="point"/>
												<div data-v-97c098d1="" className="stick"/>
											</div>
											<div data-v-97c098d1="" className="content-container">
												<div data-v-97c098d1="" className="content-title">
													Score 10% from buddies
												</div>
												<div data-v-97c098d1="" className="content-subtitle">
													Plus an extra 2.5% from their referrals
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						): (
							<div
								data-v-fa52f77d=""
								data-v-55492676=""
								className="pages-frens-list-heading list-heading"
							>
								<div data-v-fa52f77d="" className="heading">
									<Image
										data-v-97c098d1=""
										src={family}
										alt="Friends emoji"
										className="emoji"
									/>
									<div data-v-fa52f77d="" className="title">
										Invite Frens
									</div>
								</div>
								<div data-v-fa52f77d="" className="claim-zone">
									<div data-v-fa52f77d="" className="claim-balance">
										<img
											data-v-fa52f77d=""
											src="data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.284%201.63281H15.4729V5.50868H7.00391V32.6398H15.4729V36.5156H19.284V32.6398H27.3296V28.7639H31.1406V21.0122H27.3296V17.1363H31.1406V9.38455H27.3296V5.50868H19.284V1.63281ZM15.4729%209.38455H21.1895V17.1363H15.4729V9.38455ZM15.4729%2028.7639V21.0122H23.0951V24.888H19.284V28.7639H15.4729Z'%20fill='white'/%3e%3c/svg%3e"
											alt="Blum logo"
										/>
										<div
											data-v-191230a7=""
											data-v-c2615662=""
											data-v-fa52f77d=""
											className="kit-counter-animation"
										>
											<div data-v-191230a7="" className="el-char-wrapper">
												<div data-v-191230a7="" className="el-char">
													5
												</div>
											</div>
										</div>
									</div>
									<button data-v-fa52f77d="" className="claim-button is-active">
										Claim
									</button>
									{/**/}
									{/**/}
								</div>
								<div data-v-fa52f77d="" className="disclaimer">
									{" "}
									Score 10% from buddies + 2.5% from their referrals <br
									data-v-fa52f77d=""/>{" "}
									Get a <i data-v-fa52f77d="" className="ticket"/> play pass for each
									fren.{" "}
								</div>
							</div>

						)}
						<div data-v-55492676="" className="invite-button-wrapper">
							<div
								data-v-a174c313=""
								data-v-55492676=""
								className="pages-frens-invite-button"
							>
								<InviteButton/>
							</div>
						</div>
						{/**/}
						{/**/}
					</div>
				</div>
			</main>
			<Navbar/>
		</div>
	);
};

export default Page;
