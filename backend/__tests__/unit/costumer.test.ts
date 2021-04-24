require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
  
  import connection from '../../src/database/connect';
  import Costumer from '../../src/app/models/Costumer';
  import CostumerInterface from "../../src/app/utils/CostumerInterface";
  
  
  let costumers: Array<CostumerInterface>;
  
  beforeAll(async () =>{
    await connection.create();
  
    costumers = [
      {
        name: "Samuel",
        birth_date: "1997-02-15",
        marital_status: 1,
        CPF: "12345678901",
        city: "Campinas",
        country_state: "SP"
      },
      {
        name: "João",
        birth_date: "1990-03-01",
        marital_status: 3,
        CPF: "93058912356",
        city: "Belo Horizonte",
        country_state: "MG"
      },
    ]
  });
  
  afterAll(async () =>{
    await connection.close();
  });
  
  beforeEach(async () => {
    await connection.clear();
  });
  
  describe('Costumer: create & list', () => {
    let newCostumer: any;
    it("should create a new Costumer", async() => {
      newCostumer = await Costumer.insert(costumers[0]);
      //console.log(newCostumer);
      expect(newCostumer.id).toBeGreaterThan(0);
      expect(newCostumer.name).toBe(costumers[0].name);
    });
  
    it("should show the first costumer", async() => {
      const res: any = await Costumer.list('1');
      expect(res.id).toBe(1);
    });

    it("should create the 2nd costumer", async() => {
      const newCostumer: any = await Costumer.insert(costumers[1]);
      //console.log(newCostumer);
      expect(newCostumer.id).toBeGreaterThan(0);
      expect(newCostumer.name).toBe(costumers[1].name);
    });

    it("should NOT create a costumer with CPF length greather than 11", async() => {
      newCostumer = costumers[1];
      newCostumer.CPF += "6";

      const res: any = await Costumer.insert(newCostumer);
      //console.log(res)
      expect(res.error).toBeTruthy;
    })

    it("should NOT create a costumer with a CPF already registered", async() => {
      const res: any = await Costumer.insert(costumers[1]);
      //console.log(res);
      expect(res.error).toBeTruthy;
    });

    it("should list all Costumers", async() => {
      const res: any = await Costumer.list();
      //console.log(res)
      expect(res.length).toBe(2);  
    });
})

describe('Costumers: update', () => {
  it('should update the marital status of a costumer', async() => {
    const newStatus = 2; //married

    let res: any = await Costumer.update('1', { marital_status: newStatus });
    expect(res).toBeUndefined;

    res = await Costumer.list('1');
    expect(res.marital_status).toBe(newStatus);
  });
})

describe('Costumers: delete', () => {
  it('should delete a costumer', async() => {
    let res: any = await Costumer.delete('1');
    expect(res).toBeUndefined;

    res = await Costumer.list('1');
    expect(res).toBeUndefined;

    res = await Costumer.list();
    expect(res.length).toBe(1);
  });
})