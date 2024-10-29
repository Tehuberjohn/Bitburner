/** @param {NS} ns **/
export async function openServer(ns, name) {
  const server = await ns.getServer(name);
  if (ns.fileExists("BruteSSH.exe") && !server.sshPortOpen) {
    await ns.tprintf("bruteforcing %s", name);
    await ns.brutessh(name);
  }
  if (ns.fileExists("FTPCrack.exe") && !server.ftpPortOpen) {
    await ns.tprintf("ftpcracking %s", name);
    await ns.ftpcrack(name);
  }
  if (ns.fileExists("relaySMTP.exe") && !server.smtpPortOpen) {
    await ns.tprintf("relaySMTPnukin %s", name);
    await ns.relaysmtp(name);
  }
  if (ns.fileExists("HTTPWorm.exe") && !server.httpPortOpen) {
    await ns.tprintf("HTTPWorm launched on %s", name);
    await ns.httpworm(name);
  }
  if (ns.fileExists("SQLInject.exe") && !server.sqlPortOpen) {
    await ns.tprintf("SQLInject launched on %s", name);
    await ns.sqlinject(name);
  }
  if (server.numOpenPortsRequired <= server.openPortCount) {
    await ns.tprintf(`Nuking ${name}`);
    await ns.nuke(name);
  }
  await ns.sleep(1000);
}

export async function main(ns) {
  await openServer(ns, ns.args[0]);
}
