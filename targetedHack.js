/** @param {NS} ns **/

export async function targetedHack(ns) {
  const target = ns.args[0];
  while (true) {
    await ns.grow(target);
    await ns.hack(target);
    await ns.grow(target);
    await ns.weaken(target);
  }
}

export async function main(ns) {
  targetedHack(ns);
}
