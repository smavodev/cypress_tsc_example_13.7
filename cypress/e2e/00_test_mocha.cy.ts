describe("Example Demo", () => {
    before(() => {
      cy.log("hello from the before hook - Antes de todas las pruebas");
    });
    after(() => {
      cy.log("hello from the before after - Al Final de todas las pruebas");
    });
    beforeEach(() => {
      cy.log("hello from the before each hook - Antes de cada prueba");
    });
    afterEach(() => {
      cy.log("hello from the after each hook - Despues de cada Prueba");
    });
    it.only("testcase #1", () => {
      cy.log("hello world 1");
    });
    it.skip("testcase #2", () => {
      cy.log("hello world 2");
    });
    it.only("testcase #3", () => {
      cy.log("hello world 3");
    });
    it.skip("testcase #4", () => {
      cy.log("hello world 4");
    });
  });