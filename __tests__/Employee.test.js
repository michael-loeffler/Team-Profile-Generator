const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with 'name', 'id', and 'email' properties set to the 'name', 'id', and 'email' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Michael';
        const id = 23;
        const email = 'email@test.com';
        // Act
        const obj = new Employee(name, id, email);
        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        });
    });
    describe("getName", () => {
        it("should return name from Employee object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            // Act
            const obj = new Employee(name, id, email);
            const result = obj.getName();
            // Assert 
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return id from Employee object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            // Act
            const obj = new Employee(name, id, email);
            const result = obj.getId();
            // Assert 
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return email from Employee object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            // Act
            const obj = new Employee(name, id, email);
            const result = obj.getEmail();
            // Assert 
            expect(result).toEqual(email);
        });
    });
});