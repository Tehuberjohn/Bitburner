/** @param {NS} ns */
export async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  const max = ns.hacknet.hashCapacity();
  while (true) {
    ns.clearLog();
    ns.print(`Hashes: ${Math.floor(ns.hacknet.numHashes())} / ${max}`);
    if (ns.hacknet.numHashes() >= max * 0.9) {
      ns.print("Selling Hashes");
      while (ns.hacknet.numHashes() > max / 2) {
        ns.hacknet.spendHashes("Sell for Money");
      }
    }
    await ns.sleep(10000);
  }
}
