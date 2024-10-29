import { scanAllServers, log } from "./helpers.js";
import { openServer } from "./openServer.js";
/** @param {NS} ns **/
export async function main(ns) {
  const servers = await scanAllServers(ns);
  for (const name of servers) {
    await openServer(ns, name);
  }
}
