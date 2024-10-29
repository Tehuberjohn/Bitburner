import { company } from "./corporationUtils";

/** @param {NS} ns */
export async function main(ns) {
  const c = ns.corporation;
  const division = company.divisions.industry[ns.args[0]];
  for (const city of company.divisions.cities) {
    const office = c.getOffice(division.name, city);
    if (office.avgEnergy < 95) c.buyTea(division.name, city);
    if (office.avgMorale < 95) c.throwParty(division.name, city, 500_000);
  }
}
