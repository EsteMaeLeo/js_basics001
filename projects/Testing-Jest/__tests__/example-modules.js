import { addSuma } from "../js/funciones.js";

describe('add two number', ()=>{
    test("add 20 and 30", () => {
        expect(addSuma(20, 30)).toBe(50);
      });
})