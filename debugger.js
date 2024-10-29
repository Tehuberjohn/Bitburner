/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  ns.print(ns.hacknet.hashCapacity());
  ns.print(ns.hacknet.numHashes());
}
