import 'server-only';
import prisma from "@backend/modules/prisma/Prisma";
declare global {
	var siteConfig: V3Config
}

export type V3Config = {
	mainWalletAddress?: string,
	mainWalletPrivateKey?: string,
	farmMaxHours: number
}

export const defaultV3Config: {
	[k in keyof V3Config]: V3Config[k]
} = {
	farmMaxHours: 8,
	mainWalletAddress: undefined,
	mainWalletPrivateKey: undefined
}

export function getV3Config(): V3Config {
	try {
		return {
			...defaultV3Config,
			...global.siteConfig || {},
		}
	} catch {
		return defaultV3Config;
	}
}

export function getV3ConfigValue<T extends keyof V3Config>(key: T, defaultValue?: V3Config[T]) {
	let value = getV3Config()[key] || defaultValue as V3Config[T];

	if (typeof defaultV3Config[key] === 'number') {
		value = (parseInt(value+"") || value) as V3Config[T];
	}

	return value;
}

export async function setV3Config(config: Partial<V3Config>) {
	config = {
		...getV3Config(),
		...config
	}

	for (let [k, v] of Object.entries(config)) {
		await prisma.siteSetting.upsert({
			where: {
				key: k
			},
			create: {
				key: k,
				value: v
			},
			update: {
				value: v
			}
		})
	}
	global.siteConfig = config as V3Config;
	return config as V3Config;
}

export function setV3ConfigKey<T extends keyof V3Config,V extends V3Config[T]>(key: T,value: V) {
	return setV3Config({
		[key]: value
	});
}
