const upgrades = [
  "Hi-Tech R&D Laboratory",
  "Market-TA.I",
  "Market-TA.II",
  "uPgrade: Fulcrum",
  "uPgrade: Dashboard",
  "uPgrade: Capacity.I",
  "uPgrade: Capacity.II",
  "AutoBrew",
  "AutoPartyManager",
  "Self-Correcting Assemblers",
  "Drones",
  "Drones - Assembly",
  "Drones - Transport",
  "Automatic Drug Administration",
  "CPH4 Injections",
  "Go-Juice",
  "Overclock",
  "Sti.mu",
];

//stores the indexed order or upgrades, as we want to unlock them
const upgradePath = {
  materials: [0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2],
  products: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
};

import { company } from "./corporationUtils";

//sets a watcher to check every minute to see if upgrades can be purchased and does so if they can, only buys if research value is double the cost
/** @param {NS} ns */
export async function main(ns) {
  const c = ns.corporation;
  const division = company.divisions.industry[ns.args[0]];
  const upgradeTrack = upgradePath[division.produces];
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  for (const index of upgradeTrack) {
    const currentUpgrade = upgrades[index];
    const upgradeCost = ns.corporation.getResearchCost(
      division.name,
      currentUpgrade
    );
    while (!ns.corporation.hasResearched(division.name, currentUpgrade)) {
      const currentRnD = ns.corporation.getDivision(division.name)[
        "researchPoints"
      ];
      if (currentRnD >= upgradeCost * 2) {
        ns.corporation.research(division.name, currentUpgrade);
        if (currentUpgrade === "AutoPartyManager") {
          await company.divisions.fireInterns(ns, c, division);
        }
      }
      ns.clearLog();
      ns.print(division.name + " currently researching " + currentUpgrade);
      ns.print(Math.floor(currentRnD / 2) + " / " + upgradeCost);
      await ns.sleep(60000);
    }
  }
}
