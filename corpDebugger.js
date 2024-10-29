import { company } from "./corporationUtils";

/** @param {NS} ns */
export async function main(ns) {
  const c = ns.corporation;
  const agriculture = company.divisions.industry["agriculture"];
  const tobacco = company.divisions.industry["tobacco"];
  const chemical = company.divisions.industry["chemical"];
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  ns.print(ns.corporation.getDivision(tobacco.name).products);
  // ns.run("corporationUpgradeManager.js", 1, ...[agriculture.industry]);
  // company.divisions.designProduct(ns, c, tobacco);
  // ns.run("corporationUpgradeManager.js", 1, ...[agriculture.industry]);
  // company.divisions.designProduct(ns, c, tobacco);
  await ns.run(
    "companyExporter.js",
    1,
    ...[agriculture.name, chemical.name, "Plants"]
  );
}
