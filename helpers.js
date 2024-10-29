/** @param {NS} ns **/
export async function main(ns) {}

/** @param {NS} ns
 * Returns a helpful error message if we forgot to pass the ns instance to a function */
export function checkNsInstance(ns, fnName = "this function") {
  if (ns === undefined || !ns.print)
    throw new Error(
      `The first argument to ${fnName} should be a 'ns' instance.`
    );
  return ns;
}
export function scanAllServers(ns) {
  checkNsInstance(ns, '"scanAllServers"');
  let discoveredHosts = []; // Hosts (a.k.a. servers) we have scanned
  let hostsToScan = ["home"]; // Hosts we know about, but have not yet scanned
  let infiniteLoopProtection = 9999; // In case you mess with this code, this should save you from getting stuck
  while (hostsToScan.length > 0 && infiniteLoopProtection-- > 0) {
    // Loop until the list of hosts to scan is empty
    let hostName = hostsToScan.pop(); // Get the next host to be scanned
    discoveredHosts.push(hostName); // Mark this host as "scanned"
    for (const connectedHost of ns.scan(hostName)) // "scan" (list all hosts connected to this one)
      if (
        !discoveredHosts.includes(connectedHost) &&
        !hostsToScan.includes(connectedHost)
      )
        // If we haven't found this host
        hostsToScan.push(connectedHost); // Add it to the queue of hosts to be scanned
  }
  return discoveredHosts; // The list of scanned hosts should now be the set of all hosts in the game!
}

/** Helper to log a message, and optionally also tprint it and toast it
 * @param {NS} ns - The nestcript instance passed to your script's main entry point */
export function log(
  ns,
  message = "",
  alsoPrintToTerminal = false,
  toastStyle = "",
  maxToastLength = Number.MAX_SAFE_INTEGER
) {
  checkNsInstance(ns, '"log"');
  ns.print(message);
  if (toastStyle)
    ns.toast(
      message.length <= maxToastLength
        ? message
        : message.substring(0, maxToastLength - 3) + "...",
      toastStyle
    );
  if (alsoPrintToTerminal) {
    ns.tprint(message);
    // TODO: Find a way write things logged to the terminal to a "permanent" terminal log file, preferably without this becoming an async function.
    //       Perhaps we copy logs to a port so that a separate script can optionally pop and append them to a file.
    //ns.write("log.terminal.txt", message + '\n', 'a'); // Note: we should get away with not awaiting this promise since it's not a script file
  }
  return message;
}

/**
 *
 * @param {NS} ns
 * @param {number} n
 * @return {string}
 */
export function formatMoney(ns, n) {
  return isNaN(n) ? "NaN" : ns.nFormat(n, "$0.000a");
}

/**
 *
 * @returns {string[]}
 * */
export function getCities() {
  return Object.values(getOrganisations())
    .filter((v) => v.city)
    .map((v) => v.location);
}
/**
 *
 * @returns {Object<Object>}
 */
function getOrganisations() {
  return {
    ECorp: {
      location: "Aevum",
      stockSymbol: "ECP",
      server: "ecorp",
      faction: "ECorp",
      company: "ECorp",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    MegaCorp: {
      location: "Sector-12",
      stockSymbol: "MGCP",
      server: "megacorp",
      faction: "MegaCorp",
      company: "MegaCorp",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Blade Industries": {
      location: "Sector-12",
      stockSymbol: "BLD",
      server: "blade",
      faction: "Blade Industries",
      company: "Blade Industries",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Clarke Incorporated": {
      location: "Aevum",
      stockSymbol: "CLRK",
      server: "clarkinc",
      faction: "Clarke Incorporated",
      company: "Clarke Incorporated",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "OmniTek Incorporated": {
      location: "Volhaven",
      stockSymbol: "OMTK",
      server: "omnitek",
      faction: "OmniTek Incorporated",
      company: "OmniTek Incorporated",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Four Sigma": {
      location: "Sector-12",
      stockSymbol: "FSIG",
      server: "4sigma",
      faction: "Four Sigma",
      company: "Four Sigma",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "KuaiGong International": {
      location: "Chongqing",
      stockSymbol: "KGI",
      server: "kuai-gong",
      faction: "KuaiGong International",
      company: "KuaiGong International",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Fulcrum Technologies": {
      location: "Aevum",
      stockSymbol: "FLCM",
      server: "fulcrumtech",
      company: "Fulcrum Technologies",
      companyPositions: ["Business", "IT", "Software"],
    },
    "Storm Technologies": {
      location: "Ishima",
      stockSymbol: "STM",
      server: "stormtech",
      company: "Storm Technologies",
      companyPositions: ["Business", "IT", "Software Consultant", "Software"],
    },
    DefComm: {
      location: "New Tokyo",
      stockSymbol: "DCOMM",
      server: "defcomm",
      company: "DefComm",
      companyPositions: ["IT", "Software Consultant", "Software"],
    },
    "Helios Labs": {
      location: "Volhaven",
      stockSymbol: "HLS",
      server: "helios",
      company: "Helios Labs",
      companyPositions: ["IT", "Software Consultant", "Software"],
    },
    VitaLife: {
      location: "New Tokyo",
      stockSymbol: "VITA",
      server: "vitalife",
      company: "VitaLife",
      companyPositions: ["Business", "IT", "Software Consultant", "Software"],
    },
    "Icarus Microsystems": {
      location: "Sector-12",
      stockSymbol: "ICRS",
      server: "icarus",
      company: "Icarus Microsystems",
      companyPositions: ["Business", "IT", "Software Consultant", "Software"],
    },
    "Universal Energy": {
      location: "Sector-12",
      stockSymbol: "UNV",
      server: "univ-energy",
      company: "Universal Energy",
      companyPositions: ["Business", "IT", "Software Consultant", "Software"],
    },
    AeroCorp: {
      location: "Aevum",
      stockSymbol: "AERO",
      server: "aerocorp",
      company: "AeroCorp",
      companyPositions: ["IT", "Security", "Software"],
    },
    "Omnia Cybersystems": {
      location: "Volhaven",
      stockSymbol: "OMN",
      server: "omnia",
      company: "Omnia Cybersystems",
      companyPositions: ["IT", "Security", "Software"],
    },
    "Solaris Space Systems": {
      location: "Chongqing",
      stockSymbol: "SLRS",
      server: "solaris",
      company: "Solaris Space Systems",
      companyPositions: ["IT", "Security", "Software"],
    },
    "Global Pharmaceuticals": {
      location: "New Tokyo",
      stockSymbol: "GPH",
      server: "global-pharm",
      company: "Global Pharmaceuticals",
      companyPositions: [
        "Business",
        "IT",
        "Security",
        "Software Consultant",
        "Software",
      ],
    },
    "Nova Medical": {
      location: "Ishima",
      stockSymbol: "NVMD",
      server: "nova-med",
      company: "Nova Medical",
      companyPositions: [
        "Business",
        "IT",
        "Security",
        "Software Consultant",
        "Software",
      ],
    },
    "Watchdog Security": {
      location: "Aevum",
      stockSymbol: "WDS",
      company: "Watchdog Security",
      companyPositions: [
        "Agent",
        "IT",
        "Security",
        "Software Consultant",
        "Software",
      ],
    },
    LexoCorp: {
      location: "Volhaven",
      stockSymbol: "LXO",
      server: "lexo-corp",
      company: "LexoCorp",
      companyPositions: [
        "Business",
        "IT",
        "Security",
        "Software Consultant",
        "Software",
      ],
    },
    "Rho Construction": {
      location: "Aevum",
      stockSymbol: "RHOC",
      server: "rho-construction",
      company: "Rho Construction",
      companyPositions: ["Business", "Software"],
    },
    "Alpha Enterprises": {
      location: "Sector-12",
      stockSymbol: "APHE",
      server: "alpha-ent",
      company: "Alpha Enterprises",
      companyPositions: ["Business", "Software Consultant", "Software"],
    },
    "SysCore Securities": {
      location: "Volhaven",
      stockSymbol: "SYSC",
      server: "syscore",
      company: "SysCore Securities",
      companyPositions: ["IT", "Software"],
    },
    CompuTek: {
      location: "Volhaven",
      stockSymbol: "CTK",
      server: "comptek",
      company: "CompuTek",
      companyPositions: ["IT", "Software"],
    },
    "NetLink Technologies": {
      location: "Aevum",
      stockSymbol: "NTLK",
      server: "netlink",
      company: "NetLink Technologies",
      companyPositions: ["IT", "Software"],
    },
    "Omega Software": {
      location: "Ishima",
      stockSymbol: "OMGA",
      server: "omega-net",
      company: "Omega Software",
      companyPositions: ["IT", "Software Consultant", "Software"],
    },
    FoodNStuff: {
      location: "Sector-12",
      stockSymbol: "FNS",
      server: "foodnstuff",
      company: "FoodNStuff",
      companyPositions: ["Employee", "part-time Employee"],
    },
    "Sigma Cosmetics": { stockSymbol: "SGC", server: "sigma-cosmetics" },
    "Joe's Guns": {
      location: "Sector-12",
      stockSymbol: "JGN",
      server: "joesguns",
      company: "Joe's Guns",
      companyPositions: ["Employee", "part-time Employee"],
    },
    "Catalyst Ventures": { stockSymbol: "CTYS", server: "catalyst" },
    "Microdyne Technologies": { stockSymbol: "MDYN", server: "microdyne" },
    "Titan Laboratories": { stockSymbol: "TITN", server: "titan-labs" },
    CyberSec: {
      server: "CSEC",
      faction: "CyberSec",
      factionWorkTypes: ["Hacking"],
    },
    "The Runners": {
      server: "run4theh111z",
      faction: "BitRunners",
      factionWorkTypes: ["Hacking"],
    },
    "Bachman & Associates": {
      location: "Aevum",
      server: "b-and-a",
      faction: "Bachman & Associates",
      company: "Bachman & Associates",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Fulcrum Secret Technologies": {
      server: "fulcrumassets",
      faction: "Fulcrum Secret Technologies",
      factionWorkTypes: ["Hacking", "Security"],
    },
    NiteSec: {
      server: "avmnite-02h",
      faction: "NiteSec",
      factionWorkTypes: ["Hacking"],
      gang: true,
    },
    "I.I.I.I": {
      server: "I.I.I.I",
      faction: "The Black Hand",
      factionWorkTypes: ["Hacking", "Field"],
      gang: true,
    },
    "Slum Snakes": {
      faction: "Slum Snakes",
      factionWorkTypes: ["Field", "Security"],
      gang: true,
    },
    Tetrads: {
      faction: "Tetrads",
      factionWorkTypes: ["Field", "Security"],
      gang: true,
    },
    "Speakers for the Dead": {
      faction: "Speakers for the Dead",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      gang: true,
    },
    ".": {
      server: ".",
      faction: "The Dark Army",
      factionWorkTypes: ["Hacking", "Field"],
      gang: true,
    },
    "The Syndicate": {
      faction: "The Syndicate",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      gang: true,
    },
    "Rothman University": {
      location: "Sector-12",
      server: "rothman-uni",
      university: "Rothman University",
    },
    "ZB Institute of Technology": {
      location: "Volhaven",
      server: "zb-institute",
      university: "ZB Institute of Technology",
    },
    "Summit University": {
      location: "Aevum",
      server: "summit-university",
      university: "Summit University",
    },
    "Crush Fitness": {
      location: "Aevum",
      server: "crush-fitness",
      gym: "Crush Fitness Gym",
    },
    "Millenium Fitness Network": {
      location: "Volhaven",
      server: "millenium-fitness",
      gym: "Millenium Fitness Gym",
    },
    "Iron Gym Network": {
      location: "Sector-12",
      server: "iron-gym",
      gym: "Iron Gym",
    },
    "Powerhouse Fitness": {
      location: "Sector-12",
      server: "powerhouse-fitness",
      gym: "Powerhouse Gym",
    },
    "Snap Fitness": {
      location: "Aevum",
      server: "snap-fitness",
      gym: "Snap Fitness Gym",
    },
    Silhouette: {
      faction: "Silhouette",
      factionWorkTypes: ["Hacking", "Field"],
    },
    "Tian Di Hui": {
      faction: "Tian Di Hui",
      factionWorkTypes: ["Hacking", "Security"],
    },
    Netburners: { faction: "Netburners", factionWorkTypes: ["Hacking"] },
    Aevum: {
      location: "Aevum",
      faction: "Aevum",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    "Sector-12": {
      location: "Sector-12",
      faction: "Sector-12",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    Chongqing: {
      location: "Chongqing",
      faction: "Chongqing",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    "New Tokyo": {
      location: "New Tokyo",
      faction: "New Tokyo",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    Ishima: {
      location: "Ishima",
      faction: "Ishima",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    Volhaven: {
      location: "Volhaven",
      faction: "Volhaven",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      city: true,
    },
    NWO: {
      location: "Volhaven",
      server: "nwo",
      faction: "NWO",
      company: "NWO",
      factionWorkTypes: ["Hacking", "Field", "Security"],
      companyPositions: ["Business", "IT", "Security", "Software"],
    },
    "Delta One": {
      location: "Sector-12",
      server: "deltaone",
      company: "Delta One",
      companyPositions: ["IT", "Security", "Software"],
    },
    "Central Intelligence Agency": {
      location: "Sector-12",
      company: "Central Intelligence Agency",
      companyPositions: ["Agent", "IT", "Security", "Software"],
    },
    "National Security Agency": {
      location: "Sector-12",
      company: "National Security Agency",
      companyPositions: ["Agent", "IT", "Security", "Software"],
    },
    "Aevum Police Headquarters": {
      location: "Aevum",
      server: "aevum-police",
      company: "Aevum Police Headquarters",
      companyPositions: ["Security", "Software"],
    },
    "Carmichael Security": {
      location: "Sector-12",
      company: "Carmichael Security",
      companyPositions: [
        "Agent",
        "IT",
        "Security",
        "Software Consultant",
        "Software",
      ],
    },
    "Galactic Cybersystems": {
      location: "Aevum",
      server: "galactic-cyber",
      company: "Galactic Cybersystems",
      companyPositions: ["Business", "IT", "Software Consultant", "Software"],
    },
    "Noodle Bar": {
      location: "New Tokyo",
      server: "n00dles",
      company: "Noodle Bar",
      companyPositions: ["Waiter", "part-time Waiter"],
    },
    InfoComm: { server: "infocomm" },
    "Taiyang Digital": { server: "taiyang-digital" },
    "ZB Defense Industries": { server: "zb-def" },
    "Applied Energetics": { server: "applied-energetics" },
    "Zeus Medical": { server: "zeus-med" },
    "UnitaLife Group": { server: "unitalife" },
    "The Hub": { server: "the-hub" },
    "Johnson Orthopedics": { server: "johnson-ortho" },
    "ZER0 Nightclub": { server: "zero" },
    "Nectar Nightclub Network": { server: "nectar-net" },
    "Neo Nightclub Network": { server: "neo-net" },
    "Silver Helix": { server: "silver-helix" },
    "HongFang Teahouse": { server: "hong-fang-tea" },
    "HaraKiri Sushi Bar Network": { server: "harakiri-sushi" },
    "Phantasy Club": { server: "phantasy" },
    "Max Hardware Store": { server: "max-hardware" },
    Helios: { server: "The-Cave" },
    w0r1d_d43m0n: { server: "w0r1d_d43m0n" },
    "The Covenant": {
      faction: "The Covenant",
      factionWorkTypes: ["Hacking", "Field"],
    },
    Daedalus: { faction: "Daedalus", factionWorkTypes: ["Hacking", "Field"] },
    Illuminati: {
      faction: "Illuminati",
      factionWorkTypes: ["Hacking", "Field"],
    },
    "Iker Molina Casino": { location: "Aevum" },
    "Sector-12 City Hall": { location: "Sector-12" },
    Arcade: { location: "New Tokyo" },
    "0x6C1": { location: "Ishima" },
    Hospital: { general: true },
    "The Slums": { general: true },
    "Travel Agency": { general: true },
    "World Stock Exchange": { general: true },
    Bladeburners: { location: "Sector-12", faction: "Bladeburners" },
    "Church of the Machine God": {
      location: "Chongqing",
      faction: "Church of the Machine God",
    },
    "Shadows of Anarchy": { faction: "Shadows of Anarchy" },
  };
}
