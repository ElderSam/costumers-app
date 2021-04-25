require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import CostumerInterface from "../../src/app/utils/CostumerInterface";
import request from 'supertest';

import connection from '../../src/database/connect';
import app from './../../src/server';

let costumers: Array<CostumerInterface>;

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
];

beforeAll(async () =>{
    await connection.create();
});

afterAll(async () =>{
    await connection.close();
});

beforeEach(async () => {
    await connection.clear();
});


describe("Costumers - create", () => {

    test("should allow create a new Costumer", async() => {

        const response = await request(app)
            .post("/costumers") // create costumer route
            .send(costumers[0]);

        const { id, name } = JSON.parse(response.text)

        expect(response.status).toBe(200)
        expect(id).toBeTruthy;
        expect(name).toBe(costumers[0].name)
    });

    it("should not allow create a new Costumer with an CPF that already exists", async() => {

        const response = await request(app)
            .post("/costumers") // create costumer route
            .send({
                name: 'João',
                CPF: costumers[0].CPF
            });

        //console.log(response.text)
        expect(response.status).toBe(400); //Bad request
    });

    it("should List costumers", async() => {
        const response = await request(app)
            .get("/costumers")
            .send();

        const { listCostumers } = JSON.parse(response.text);

        expect(response.status).toBe(200)
        expect(listCostumers.length).toBe(1)
    });
})

describe("Costumers - catch invalid fields when try create", () => {
    const requiredFields = ['name', 'birth_date', 'marital_status', 'CPF', 'city', 'country_state'];

    let auxField: string;
    let itemExcluded;

    requiredFields.forEach(async (field, index) => { // repeats the test for each required field
        auxField = field.toUpperCase()

        it(`should not allow create a new Costumer without ${auxField}`, async() => {
            const auxCostumer: any = {
                name: 'João',
                birth_date: '2000-03-14',
                marital_status: 4,
                CPF: "12356809753",
                city: "São Paulo",
                country_state: "SP"
            };

            itemExcluded = auxCostumer[field];
            delete auxCostumer[field];

            const response = await request(app)
                .post("/costumers") // create costumer route
                .send(auxCostumer);

            expect(response.status).toBe(400); //Bad request

            const { invalidFields } = JSON.parse(response.text)
            expect(invalidFields.error).toBe(true)

            const { incorrectFields } = invalidFields;
            expect(incorrectFields.length).toBe(1)
            expect(incorrectFields[0]).toBe(field)
        });
    })

})

describe("Costumers - Update", () => {

    it("should update City", async() => {
        const id = 1;
        const city = 'Piracicaba'

        const response: any = await request(app)
            .put(`/costumers/${id}?city=${city}`)
            .send()

        expect(response.status).toBe(200)
    });
})

describe("Costumers - Delete", () => {
    it("should delete a costumer", async() => {
        const id = 1;
        const response: any = await request(app)
            .delete(`/costumers/${id}`)
            .send()

        expect(response.status).toBe(200)

        const { deleted } = JSON.parse(response.text)
        expect(deleted).toBeTruthy;
    });
})