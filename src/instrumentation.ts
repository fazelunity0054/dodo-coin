import {ADMIN_BOT, HotReloadTelegramBot} from "./bot/main";
import prisma from "@backend/modules/prisma/Prisma";
import {V3Config} from "@v3/@special/config";

export let DEV_USER: Awaited<ReturnType<typeof prisma.user.findFirst>>;
export let DEV_LOGS: string[] = [];
export async function register() {
	HotReloadTelegramBot();

	DEV_USER = await prisma.user.findFirst({
		where: {
			username: "itzunity"
		}
	});

	const all = await prisma.siteSetting.findMany();
	global.siteConfig = Object.fromEntries(all.map(o => ([o.key,o.value]))) as V3Config;

	type keyType = 'error' | 'log' | 'warn';
	const registerLog = (key: keyType) => {
		const origin = console[key] as typeof console.error;
		return (...args: any[])=>{
			ADMIN_BOT.waitToReady().then(async (me)=>adminLog(`[${key?.toUpperCase()}] `+args.map(o => typeof o === 'object' ? "```json\n"+JSON.stringify(o,null,2)+"\n```":o+"").join("\n"))).catch((e)=>{
				origin(...args);
				origin(e);
			});
		};
	}

	for (const key of ['warn','log', 'error']) {
		console[key as keyType] = registerLog(key as keyType);
	}
}

setInterval(()=>{
	if (!DEV_USER) return;

	if (!!DEV_LOGS?.length) ADMIN_BOT.telegram.sendMessage(DEV_USER?.chatId,DEV_LOGS.join("\n\n")).then(()=>{
		DEV_LOGS = [];
	}).catch(()=>null)
}, 5000);

export function adminLog(msg: string) {
	DEV_LOGS.push(msg);
}
