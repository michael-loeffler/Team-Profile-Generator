const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe('Initialization', () => {
        it("should create an object with 'name', 'id', 'email' and 'officeNumber' properties set to the 'name', 'id', 'email' and 'officeNumber' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Michael';
        const id = 23;
        const email = 'email@test.com';
        const officeNumber = 9;
        // Act
        const obj = new Manager(name, id, email, officeNumber);
        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getName", () => {
        it("should return name from Manager object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const officeNumber = 9;
            // Act
            const obj = new Manager(name, id, email, officeNumber);
            const result = obj.getName();
            // Assert 
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return id from Manager object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const officeNumber = 9;
            // Act
            const obj = new Manager(name, id, email, officeNumber); 
            const result = obj.getId();
            // Assert 
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return email from Manager object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const officeNumber = 9;
            // Act
            const obj = new Manager(name, id, email, officeNumber);    
            const result = obj.getEmail();
            // Assert 
            expect(result).toEqual(email);
        });
    });
    describe("getOfficeNumber", () => {
        it("should return office number from Manager object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const officeNumber = 9;
            // Act
            const obj = new Manager(name, id, email, officeNumber);    
            const result = obj.getOfficeNumber();
            // Assert 
            expect(result).toEqual(officeNumber);
        });
    });
});