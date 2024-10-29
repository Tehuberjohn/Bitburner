export const company = {
  name: "Money Printer",
  upgrades: [
    "Smart Factories",
    "Smart Storage",
    "FocusWires",
    "Neural Accelerators",
    "Speech Processor Implants",
    "Nuoptimal Nootropic Injector Implants",
    "Wilson Analytics",
    "ABC SalesBots",
    "Project Insight",
    "DreamSense",
  ],
  upgradePhases: [
    [2, 0, 2, 2, 2, 2, 0, 0, 0, 0],
    [8, 12, 0, 0, 0, 0, 0, 0, 0, 0],
    [20, 28, 18, 18, 18, 18, 5, 40, 30, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 40],
    [0, 60, 80, 80, 80, 80, 2, 60, 70, 50],
  ],
  divisions: {
    cities: [
      "Aevum",
      "Chongqing",
      "New Tokyo",
      "Ishima",
      "Volhaven",
      "Sector-12",
    ],
    boostMaterials: ["Hardware", "Robots", "AI Cores", "Real Estate"],
    industry: {
      agriculture: {
        name: "Smokeleaf",
        industry: "agriculture",
        produces: "materials",
        sellables: ["Plants", "Food"],
        materialPhases: [
          [350, 0, 180, 40000],
          [2650, 100, 2820, 210000],
          [7000, 900, 7000, 750000],
        ],
        offices: {
          Aevum: {
            id: 1,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 5, 1, 2, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
          Chongqing: {
            id: 2,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 7, 1, 0, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
          "New Tokyo": {
            id: 3,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 5, 1, 2, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
          Ishima: {
            id: 4,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 5, 1, 2, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
          Volhaven: {
            id: 5,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 5, 1, 2, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
          "Sector-12": {
            id: 6,
            hiringPhases: [
              {
                size: 9,
                positions: [1, 2, 5, 1, 2, 2],
              },
              {
                size: 13,
                positions: [3, 5, 5, 2, 7, 4],
              },
            ],
          },
        },
      },
      chemical: {
        name: "Brawndo",
        industry: "chemical",
        produces: "materials",
        sellables: ["Chemicals"],
        materialPhases: [
          [50000, 17000, 30000, 100000],
          [0, 0, 30000, 100000],
        ],
        offices: {
          Aevum: {
            id: 13,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
          Chongqing: {
            id: 14,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
          "New Tokyo": {
            id: 15,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
          Ishima: {
            id: 16,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
          Volhaven: {
            id: 17,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
          "Sector-12": {
            id: 18,
            hiringPhases: [
              {
                size: 26,
                positions: [5, 5, 8, 2, 5, 5],
              },
              {
                size: 30,
                positions: [20, 10, 5, 5, 10, 10],
              },
            ],
          },
        },
      },
      tobacco: {
        name: "Deathstix",
        industry: "tobacco",
        mainOffice: "Aevum",
        produces: "products",
        products: {
          developed: 0,
          latest: null,
          names: [
            { name: "Ole'Faithful", version: 1 },
            { name: "Black Lung", version: 1 },
            { name: "Chewin'Tar", version: 1 },
            { name: "Menthol Cool", version: 1 },
            { name: "Ole'Smokies", version: 1 },
          ],
        },
        sellables: [],
        materialPhases: [[20000, 120000, 20000, 100000]],
        offices: {
          Aevum: {
            id: 7,
            hiringPhases: [
              {
                size: 26,
                positions: [10, 10, 2, 2, 2, 4],
              },
              {
                size: 30,
                positions: [20, 20, 4, 4, 4, 8],
              },
              {
                size: 180,
                positions: [80, 80, 30, 40, 10, 0],
              },
            ],
          },
          Chongqing: {
            id: 8,
            hiringPhases: [
              {
                size: 11,
                positions: [3, 3, 4, 1, 2, 2],
              },
              {
                size: 15,
                positions: [3, 3, 4, 2, 14, 4],
              },
              {
                size: 90,
                positions: [20, 20, 20, 10, 50, 0],
              },
            ],
          },
          "New Tokyo": {
            id: 9,
            hiringPhases: [
              {
                size: 11,
                positions: [3, 3, 4, 1, 2, 2],
              },
              {
                size: 15,
                positions: [3, 3, 4, 2, 14, 4],
              },
              {
                size: 90,
                positions: [20, 20, 20, 10, 50, 0],
              },
            ],
          },
          Ishima: {
            id: 10,
            hiringPhases: [
              {
                size: 11,
                positions: [3, 3, 4, 1, 2, 2],
              },
              {
                size: 15,
                positions: [3, 3, 4, 2, 14, 4],
              },
              {
                size: 90,
                positions: [20, 20, 20, 10, 50, 0],
              },
            ],
          },
          Volhaven: {
            id: 11,
            hiringPhases: [
              {
                size: 11,
                positions: [3, 3, 4, 1, 2, 2],
              },
              {
                size: 15,
                positions: [3, 3, 4, 2, 14, 4],
              },
              {
                size: 90,
                positions: [20, 20, 20, 10, 50, 0],
              },
            ],
          },
          "Sector-12": {
            id: 12,
            hiringPhases: [
              {
                size: 11,
                positions: [3, 3, 4, 1, 2, 2],
              },
              {
                size: 15,
                positions: [3, 3, 4, 2, 14, 4],
              },
              {
                size: 90,
                positions: [20, 20, 20, 10, 50, 0],
              },
            ],
          },
        },
      },
    },

    //Upgrades warehouses for every office of a division X number of times
    async upgradeWarehouses(c, division, num) {
      for (let i = 0; i < num; i++) {
        for (let city of company.divisions.cities) {
          c.upgradeWarehouse(division.name, city, 1);
        }
      }
    },

    //Purchase materials to boost production
    async purchaseMaterials(ns, c, division, phase) {
      //wait for production phase and then set buy order
      await company.waitForCycle(ns, c, "SALE");

      for (let city of company.divisions.cities) {
        let i = 0;
        for (const material of company.divisions.boostMaterials) {
          if (division.materialPhases[phase][i]) {
            c.buyMaterial(
              division.name,
              city,
              material,
              division.materialPhases[phase][i] / 10
            );
          }
          i++;
        }
      }

      //wait till production phase then clear buy order, this ensures we only buy one tick of inventory
      await company.waitForCycle(ns, c, "EXPORT");

      for (let city of company.divisions.cities) {
        let i = 0;
        for (const material of company.divisions.boostMaterials) {
          if (division.materialPhases[phase][i]) {
            c.buyMaterial(division.name, city, material, 0);
          }
          i++;
        }
      }
    },

    //runs a given number of adVerts in a given division
    async adCampaign(ns, c, division, number) {
      ns.print(`Running ${number} advertisments for ${division.name}`);
      while (number) {
        c.hireAdVert(division.name);
        number--;
      }
    },

    //Opens up offices in each city of a division, hires all staff, and asigns them in key roles, can take a set research value to farm to before starting normal operation
    async setUpDivision(ns, c, division, research = 0) {
      //Open offices in each city and perform basic admin
      for (let city of company.divisions.cities) {
        if (city != company.divisions.cities[5]) {
          c.expandCity(division.name, city);
          c.purchaseWarehouse(division.name, city);
        }
        c.upgradeOfficeSize(division.name, city, 1);
        c.setSmartSupply(division.name, city, true);
        await company.employees.fullyStaff(c, division.name, city);
        for (let i = 0; i < 4; i++) {
          await c.setAutoJobAssignment(
            division.name,
            city,
            company.employees.jobs[i],
            1
          );
        }
        for (const material of division.sellables) {
          c.sellMaterial(division.name, city, material, "MAX", "MP");
        }
      }
      ns.print(`Waiting for ${division.name} employees to be hired`);
      await ns.sleep(20000);

      //Get Research values to a baseline to improve prices
      await company.divisions.farmScience(ns, c, division, research);
    },

    //hires staff given the current phase of operation and asigns them to the correct role
    async upgradeOffice(ns, c, division, phase) {
      ns.print(`Upgrading ${division.name} offices for phase ${phase + 1}`);
      await company.waitForCycle(ns, c, "SALE");
      await company.divisions.unassignEmployees(ns, c, division);
      for (let city of company.divisions.cities) {
        const hiringPhase = division.offices[city].hiringPhases[phase];
        await c.upgradeOfficeSize(division.name, city, hiringPhase.size);
        await company.employees.fullyStaff(c, division.name, city);
        let i = 0;
        for (const job of company.employees.jobs) {
          if (hiringPhase.positions[i]) {
            c.setAutoJobAssignment(
              division.name,
              city,
              company.employees.jobs[i],
              hiringPhase.positions[i]
            );
          }
          i++;
        }
      }
      await company.waitForCycle(ns, c, "PRODUCTION");
    },

    //sets all current employees to 'unassigned' role
    async unassignEmployees(ns, c, division) {
      for (const city of company.divisions.cities) {
        await company.divisions.assignJobs(
          c,
          division,
          city,
          [0, 0, 0, 0, 0, 0]
        );
      }
    },

    //sets the jobs in the city to match a given array of values
    async assignJobs(c, division, city, roles) {
      let i = 0;
      for (const job of company.employees.jobs) {
        c.setAutoJobAssignment(division.name, city, job, roles[i]);
        i++;
      }
    },

    //re-asigns interns when we no longer need them
    async fireInterns(ns, c, division) {
      let currentJobs = await company.divisions.getDivisionJobs(
        ns,
        c,
        division
      );
      for (const city of company.divisions.cities) {
        currentJobs[city]["jobs"][4] += currentJobs[city]["jobs"][5];
        currentJobs[city]["jobs"][5] = 0;
        company.divisions.assignJobs(c, division, city, [0, 0, 0, 0, 0, 0]);
        company.divisions.assignJobs(
          c,
          division,
          city,
          currentJobs[city]["jobs"]
        );
      }
    },

    //scans a division and returns an object with each city, their current employee state, and total employees
    async getDivisionJobs(ns, c, division) {
      const offices = {};
      for (const city of company.divisions.cities) {
        let jobs = [];
        const office = c.getOffice(division.name, city)["employeeJobs"];
        for (const job in office) {
          jobs.push(office[job]);
        }
        offices[city] = {
          jobs,
          total: ns.corporation.getOffice(division.name, city).numEmployees,
        };
      }
      return offices;
    },

    //assign all jobs to R&D until a given research value is reached
    async farmScience(ns, c, division, ammount, party = false) {
      // log the current state of division jobs so we can re-asign
      let currentJobs = await company.divisions.getDivisionJobs(
        ns,
        c,
        division
      );

      //sets all available employees to R&D
      await company.divisions.unassignEmployees(ns, c, division);
      for (const city of company.divisions.cities) {
        await c.setAutoJobAssignment(
          division.name,
          city,
          "Research & Development",
          currentJobs[city]["total"]
        );
      }

      //wait for science to reach the given ammount
      while ((await c.getDivision(division.name)["researchPoints"]) < ammount) {
        ns.clearLog();
        if (party) {
          ns.run("coffeeParty.js", 1, ...[division.industry]);
        }
        ns.print(`Waiting for ${division.name} R&D`);
        ns.print(
          `${await c
            .getDivision(division.name)
            ["researchPoints"].toFixed(2)} / ${ammount}`
        );
        await ns.sleep(10000);
      }

      if (party) {
        await ns.kill("coffeeParty.js", "home", division.industry);
      }

      ns.print(`Science has reached threshold, reassigning employees`);

      //re-assign jobs in division to previous value
      await company.divisions.unassignEmployees(ns, c, division);
      for (const city of company.divisions.cities) {
        //use the job data we saved earlier to set jobs back to previous values
        await company.divisions.assignJobs(
          c,
          division,
          city,
          currentJobs[city].jobs
        );
      }
    },

    //get product list for given district as well as the maximum products number of products that disctict can make
    async getCurrentProducts(ns, c, division) {
      const products = c.getDivision(division.name).products;
      let maxProducts = 3;
      if (ns.corporation.hasResearched(division.name, "uPgrade: Capacity.I")) {
        ++maxProducts;
      }
      if (ns.corporation.hasResearched(division.name, "uPgrade: Capacity.II")) {
        ++maxProducts;
      }
      return [products, maxProducts];
    },

    async designProduct(ns, c, division) {
      ns.disableLog("ALL");
      ns.tail();
      let [currentProducts, maxProducts] =
        await company.divisions.getCurrentProducts(ns, c, division);
      const products = division.products;
      const nextProduct = products.names[products.developed % 5];
      const product = `${nextProduct.name} V${nextProduct.version}`;
      nextProduct.version++;
      products.developed++;

      //If we are at max products discontinue the oldest
      if (currentProducts.length === maxProducts) {
        const retiredProduct = await currentProducts.shift();
        await c.discontinueProduct(division.name, retiredProduct);
        ns.print(`Discontinued ${retiredProduct}`);
      }

      //allocate half of the corporations funds to development
      const budget = Math.floor((await company.getFunds(c)) / 4);
      ns.corporation.makeProduct(
        division.name,
        division.mainOffice,
        product,
        budget,
        budget
      );
      ns.corporation.sellProduct(
        division.name,
        division.mainOffice,
        product,
        "MAX",
        "MP",
        true
      );
      ns.corporation.setProductMarketTA1(division.name, product, true);
      ns.corporation.setProductMarketTA2(division.name, product, true);
    },

    //starts a new script to manage exports between given divisions
    async exportMaterials(ns, sending, recieving, material) {
      ns.run("companyExporter.js", 1, ...[sending, recieving, material]);
    },

    //starts a new script to manage upgrades for a divisions R&D
    async setUpgradeManager(ns, division) {
      ns.run("corporationUpgradeManager.js", 1, ...[division.industry]);
    },

    //starts a new script to manage making products in a division
    async setProductManager(ns, division) {
      ns.run("corporationProductionManager.js", 1, ...[division.industry]);
    },
  },
  employees: {
    jobs: [
      "Operations",
      "Engineer",
      "Business",
      "Management",
      "Research & Development",
      "Intern",
    ],

    //hires staff in a division until they are at full capacity
    async fullyStaff(c, division, city) {
      while (c.hireEmployee(division, city)) {} // this looks odd but it works
    },

    //Wait till the employee stats are high enough and then break
    async settleInEmployees(ns, c, division) {
      while (true) {
        let avgs = [0, 0];
        for (let city of company.divisions.cities) {
          avgs[0] += c.getOffice(division.name, city).avgMorale;
          avgs[1] += c.getOffice(division.name, city).avgEnergy;
        }
        avgs = avgs.map((num) => (num / 6).toFixed(2));
        ns.clearLog();
        ns.print(`waiting for ${division.name} employees stats to rise`);
        ns.print("   avg morale: " + avgs[0] + " / 97");
        ns.print("   avg energy: " + avgs[1] + " / 97");
        if (avgs.every((num) => num >= 97)) {
          break;
        }
        await ns.sleep(1000);
      }
    },
  },

  //buys all upgrades for the given phase of the company
  async upgradeCompany(ns, c, phase) {
    let i = 0;
    for (let number of company.upgradePhases[phase]) {
      let upgrade = company.upgrades[i];
      while (number > 0) {
        c.levelUpgrade(upgrade);
        number--;
      }
      i++;
    }
  },

  //watches the current investment offer and waits to buy it until the given price is reached
  async waitForInvestment(ns, c, ammount) {
    let highestBid = c.getInvestmentOffer().funds;
    let offer = c.getInvestmentOffer().funds;
    let totalAssets = c.getInvestmentOffer().funds + c.getCorporation().funds;
    while (offer < ammount) {
      if (c.getInvestmentOffer().funds > highestBid) {
        highestBid = c.getInvestmentOffer().funds;
      }
      if (totalAssets > ammount) {
        break;
      }
      offer = c.getInvestmentOffer().funds;
      totalAssets = c.getInvestmentOffer().funds + c.getCorporation().funds;
      ns.clearLog();
      ns.print(`Waiting for a bid of at least ${ammount}`);
      ns.print(`Highest bid: ${highestBid}`);
      ns.print(`Current bid: ${c.getInvestmentOffer().funds}`);
      await ns.sleep(2000);
    }
    ns.print(`Investor found`);
    c.acceptInvestmentOffer();
  },

  //waits until a given cycle to continue again
  async waitForCycle(ns, c, cycle) {
    while (c.getCorporation().nextState !== cycle) {
      await ns.sleep(1000);
    }
  },

  //gets the current corpate wallet ammount
  async getFunds(c) {
    return await Math.floor(c.getCorporation().funds);
  },
};
