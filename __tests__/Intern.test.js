const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with 'name', 'id', 'email' and 'school' properties set to the 'name', 'id', 'email' and 'school' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Michael';
        const id = 23;
        const email = 'email@test.com';
        const school = 'Northwestern';
        // Act
        const obj = new Intern(name, id, email, school);
        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.school).toEqual(school);
        });
    });
    describe("getName", () => {
        it("should return name from Intern object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const school = 'Northwestern';
            // Act
            const obj = new Intern(name, id, email, school);
            const result = obj.getName();
            // Assert 
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return id from Intern object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const school = 'Northwestern';
            // Act
            const obj = new Intern(name, id, email, school); 
            const result = obj.getId();
            // Assert 
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return email from Intern object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const school = 'Northwestern';
            // Act
            const obj = new Intern(name, id, email, school);    
            const result = obj.getEmail();
            // Assert 
            expect(result).toEqual(email);
        });
    });
    describe("getSchool", () => {
        it("should return school from Intern object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const school = 'Northwestern';
            // Act
            const obj = new Intern(name, id, email, school);    
            const result = obj.getSchool();
            // Assert 
            expect(result).toEqual(school);
        });
    });
});