import { AddNewQuestion } from "../AddNewQuestion";
import { expect } from "chai";

describe("Toggle Form when false", () => {
    it("should equal true", () => {
        //arange
        const addNewQuestion = new AddNewQuestion(null);
        addNewQuestion.showForm(false);
        //act
        const result = addNewQuestion.toggleForm();
        //assert
        expect(result).to.equal(true);
    });
});

describe("Toggle Form when true", () => {
    it("should equal false", () => {
        //arrange
        const addNewQuestion = new AddNewQuestion(null);
        addNewQuestion.showForm(true);
        //act
        const result = addNewQuestion.toggleForm();
        //assert
        expect(result).to.equal(false);
    });
});

describe("Add Option", () => {
    it("should add name to option list", () => {
        //arrange
        const addNewQuestion = new AddNewQuestion(null);
        addNewQuestion.newOption("testOption");
        //act
        addNewQuestion.addOption();
        const result = addNewQuestion.newOptions().indexOf("testOption");
        //assert
        expect(result).to.equal(0);
    })
})

