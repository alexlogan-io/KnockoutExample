import { AddNewColumn } from "../AddNewColumn";
import { expect } from "chai";

describe("Hello World", () => {
    it("should equal hello world", () => {
        const result = "Hello World";
        expect(result).to.equal("Hello World");
    });
});

describe("Toggle Form when false", () => {
    it("should equal true", () => {
        const addNewColumn = new AddNewColumn(null);
        addNewColumn.showForm(false);
        const result = addNewColumn.toggleForm();
        expect(result).to.equal(true);
    });
});

describe("Toggle Form when true", () => {
    it("should equal false", () => {
        const addNewColumn = new AddNewColumn(null);
        addNewColumn.showForm(true);
        const result = addNewColumn.toggleForm();
        expect(result).to.equal(false);
    });
});

describe("Add Column", () => {
    it("should add name to column list", () => {
        const addNewColumn = new AddNewColumn(null);
        const newColumnsLength = addNewColumn.newColumns().length;
        addNewColumn.newColumnName("test");
        addNewColumn.addColumn();
        const result = addNewColumn.newColumns().indexOf("test");
        expect(result).to.equal(0);
    })
})