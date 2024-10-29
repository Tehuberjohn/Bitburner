import { company } from "./corporationUtils";

//checks how much of a material was used in last production cycle, clears the last export, and sets up an export from the given division
/** @param {NS} ns */
export async function main(ns) {
  const c = ns.corporation;
  const [sending, recieving, material] = ns.args;

  //wait for the next production cycle and grab the production useage for a given matierial in each city and reasigns the new optimised export order
  while (true) {
    await company.waitForCycle(ns, c, "EXPORT");

    for (const city of company.divisions.cities) {
      const ammount = Math.abs(
        c.getMaterial(recieving, city, material).productionAmount
      );

      //cancel last export order
      c.cancelExportMaterial(sending, city, recieving, city, material);

      //set up new export order
      c.exportMaterial(sending, city, recieving, city, material, ammount);
    }
    await ns.sleep(8000);
  }
}
