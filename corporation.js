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
  const currentState = ns.args[0];
  if (!currentState) {
    // basic setup of agriculture dept and wait for startup investment
    await startup(ns, c, agriculture);
    ns.print("Finished start-up, time to look for funding");
    await company.waitForInvestment(ns, c, 245000000000);

    // Upgrade Agriculture and seek new investors for expansion into other divisions
    ns.print("Beefing up production for Agriculture");
    await prepareToExpand(ns, c, agriculture);
    await company.waitForInvestment(ns, c, 3250000000000);

    // Expand to tobbaco, and chemicals. Finish setup for agriculture to farm cash while we research
    await expandDivisions(ns, c, agriculture, tobacco, chemical);
    await company.upgradeCompany(ns, c, 4);
    await fireSupportInterns(ns, c, agriculture, chemical);
    company.divisions.setProductManager(ns, tobacco);
    await company.waitForInvestment(ns, c, 500000000000000);
    await ns.kill("corporationProductionManager.js", "home", tobacco.industry);
    await startProductionPhase(ns, c, agriculture, tobacco, chemical);
    company.divisions.setProductManager(ns, tobacco);
    ns.print(await company.getFunds(c));
  } else {
    //if we pass a truthy argument restart support functions
    company.divisions.setProductManager(ns, tobacco);
    await setUpExports(ns, c, agriculture, tobacco, chemical);
  }
}

//Corp initialization. Creating the corp, expanding to agriculture and it's company.divisions.cities, hiring and assinging in those company.divisions.cities and buying some upgrades
async function startup(ns, c, agriculture) {
  ns.print("Building the start-up...");
  try {
    c.createCorporation(company.name, false);
  } catch {}
  try {
    c.createCorporation(company.name, true);
  } catch {}
  c.expandIndustry("Agriculture", agriculture.name);
  c.purchaseUnlock("Smart Supply");
  await company.divisions.setUpDivision(ns, c, agriculture, 300);
  await company.divisions.adCampaign(ns, c, agriculture, 4);
  //first round of company upgrades
  await company.upgradeCompany(ns, c, 0);
  await company.divisions.upgradeWarehouses(c, agriculture, 2);
  // //wait for employee stats to rise
  ns.print("Buying first production multiplier materials for agriculture");
  await company.divisions.purchaseMaterials(ns, c, agriculture, 0);
  await company.employees.settleInEmployees(ns, c, agriculture);
}

//upgrade agriculture
async function prepareToExpand(ns, c, agriculture) {
  await company.divisions.upgradeOffice(ns, c, agriculture, 0);
  await company.divisions.upgradeWarehouses(c, agriculture, 7);
  await company.upgradeCompany(ns, c, 1);
  await company.divisions.adCampaign(ns, c, agriculture, 9);
  ns.print("Buying second production multiplier materials for agriculture");
  await company.divisions.purchaseMaterials(ns, c, agriculture, 1);
  await company.employees.settleInEmployees(ns, c, agriculture);
}

//expand to other division and start ramping up agriculture
async function expandDivisions(ns, c, agriculture, tobacco, chemical) {
  await expandToChemicals(ns, c, agriculture, chemical);
  await expandToTobacco(ns, c, agriculture, tobacco);
  await company.upgradeCompany(ns, c, 2);
  await company.divisions.upgradeOffice(ns, c, agriculture, 1);
  await company.divisions.upgradeWarehouses(c, agriculture, 12);
  await c.purchaseUnlock("Export");
  await setUpExports(ns, c, agriculture, tobacco, chemical);
  await company.divisions.purchaseMaterials(ns, c, chemical, 0);
  await company.divisions.purchaseMaterials(ns, c, agriculture, 2);
  await prepareForProduction(ns, c, agriculture, tobacco, chemical);
  await company.divisions.upgradeOffice(ns, c, chemical, 1);
  await company.divisions.upgradeWarehouses(c, chemical, 9);
  c.research(chemical.name, "AutoBrew");
  c.research(chemical.name, "AutoPartyManager");
  c.research(agriculture.name, "AutoBrew");
  c.research(agriculture.name, "AutoPartyManager");
}

//expand to chemicals division and prep for exporting
async function expandToChemicals(ns, c, agriculture, chemical) {
  c.expandIndustry("Chemical", chemical.name);
  await company.divisions.setUpDivision(ns, c, chemical);
  await company.divisions.upgradeOffice(ns, c, chemical, 0);
  await company.divisions.upgradeWarehouses(c, chemical, 31);
}

//expand to tobacco division and prep for exporting
async function expandToTobacco(ns, c, agriculture, tobacco) {
  c.expandIndustry("Tobacco", tobacco.name);
  await company.divisions.setUpDivision(ns, c, tobacco);
  await company.divisions.upgradeOffice(ns, c, tobacco, 0);
}

//start export scripts for each districts
async function setUpExports(ns, c, agriculture, tobacco, chemical) {
  await company.divisions.exportMaterials(
    ns,
    agriculture.name,
    chemical.name,
    "Plants"
  );
  await company.divisions.exportMaterials(
    ns,
    agriculture.name,
    tobacco.name,
    "Plants"
  );
  await company.divisions.exportMaterials(
    ns,
    chemical.name,
    agriculture.name,
    "Chemicals"
  );
}

//get tobacco set up for starting to make products
async function prepareForProduction(ns, c, agriculture, tobacco, chemical) {
  await company.divisions.farmScience(ns, c, tobacco, 5000, true);
  c.research(tobacco.name, "Hi-Tech R&D Laboratory");
  await company.divisions.farmScience(ns, c, tobacco, 10000, true);
  c.research(tobacco.name, "uPgrade: Fulcrum");
  c.research(agriculture.name, "Hi-Tech R&D Laboratory");
  c.research(chemical.name, "Hi-Tech R&D Laboratory");
  await company.divisions.upgradeOffice(ns, c, tobacco, 1);
  await company.divisions.farmScience(ns, c, tobacco, 125000, true);
  c.research(tobacco.name, "Market-TA.I");
  c.research(tobacco.name, "Market-TA.II");
  c.research(tobacco.name, "uPgrade: Dashboard");
  c.research(tobacco.name, "uPgrade: Capacity.I");
  c.research(tobacco.name, "uPgrade: Capacity.II");
  await company.upgradeCompany(ns, c, 3);
  await company.divisions.adCampaign(ns, c, tobacco, 50);
  await company.divisions.purchaseMaterials(ns, c, chemical, 1);
}

async function fireSupportInterns(ns, c, agriculture, chemical) {
  c.research(chemical.name, "AutoBrew");
  c.research(chemical.name, "AutoPartyManager");
  c.research(agriculture.name, "AutoBrew");
  c.research(agriculture.name, "AutoPartyManager");
  await company.divisions.fireInterns(ns, c, agriculture);
  await company.divisions.fireInterns(ns, c, chemical);
}

async function startProductionPhase(ns, c, agriculture, tobacco, chemical) {
  c.research(tobacco.name, "AutoBrew");
  c.research(tobacco.name, "AutoPartyManager");
  await company.divisions.fireInterns(ns, c, tobacco);
  await company.divisions.upgradeWarehouses(c, tobacco, 70);
  await company.divisions.upgradeOffice(ns, c, tobacco, 2);
  await company.divisions.adCampaign(ns, c, tobacco, 50);
  await company.upgradeCompany(ns, c, 5);
  await company.divisions.purchaseMaterials(ns, c, tobacco, 0);
}
