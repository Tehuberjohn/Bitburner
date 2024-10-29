import { company } from "./corporationUtils";

//automates making products in a division
/** @param {NS} ns */
export async function main(ns) {
  const c = ns.corporation;
  const division = company.divisions.industry[ns.args[0]];
  ns.disableLog("ALL");
  ns.tail();

  //Makes a new product then waits an hour to make another
  while (true) {
    await company.divisions.designProduct(ns, c, division);
    const products = ns.corporation.getDivision(division.name).products;
    const latest = products[products.length - 1];
    ns.print(
      ns.corporation.getProduct(division.name, division.mainOffice, latest)
        .developmentProgress
    );
    await ns.sleep(2000);
    let progress = c.getProduct(
      division.name,
      division.mainOffice,
      latest
    ).developmentProgress;
    while (progress < 100) {
      ns.clearLog();
      ns.print(`Developing ${latest}: currently ${Math.floor(progress)}%`);
      await ns.sleep(60000);
      progress = c.getProduct(
        division.name,
        division.mainOffice,
        latest
      ).developmentProgress;
    }
  }
}
