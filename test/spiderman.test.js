describe("Unit Tests for Spiderman class", () => {
    test('1) Create a spiderman object', () => {
      const andrewGarfield = new Spiderman("Spider Sony", 31, "Andrew Garfield", 2, "Sony")
     
      expect(andrewGarfield.name).toBe("Spiderma Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })