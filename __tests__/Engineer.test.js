const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe('Initialization', () => {
        it("should create an object with 'name', 'id', 'email' and 'github' properties set to the 'name', 'id', 'email' and 'github' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name = 'Michael';
        const id = 23;
        const email = 'email@test.com';
        const github = 'michael-profile';
        // Act
        const obj = new Engineer(name, id, email, github);
        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.github).toEqual(github);
        });
    });
    describe("getName", () => {
        it("should return name from Engineer object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const github = 'michael-profile';
            // Act
            const obj = new Engineer(name, id, email, github);
            const result = obj.getName();
            // Assert 
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return id from Engineer object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const github = 'michael-profile';
            // Act
            const obj = new Engineer(name, id, email, github);
            const result = obj.getId();
            // Assert 
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return email from Engineer object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const github = 'michael-profile';
            // Act
            const obj = new Engineer(name, id, email, github);
            const result = obj.getEmail();
            // Assert 
            expect(result).toEqual(email);
        });
    });
    describe("getGithub", () => {
        it("should return github from Engineer object", () => {
            // Arrange
            const name = 'Michael';
            const id = 23;
            const email = 'email@test.com';
            const github = 'michael-profile';
            // Act
            const obj = new Engineer(name, id, email, github);
            const result = obj.getGithub();
            // Assert 
            expect(result).toEqual(github);
        });
    });
});