require ( './helpers.js' );
// index.js
let cats = ["Milo", "Otis", "Garfield"];

module.exports = { cats }; // Exporting the cats array

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
    // Function to append a cat to the end of the cats array destructively
    function destructivelyAppendCat(name) {
      cats.push(name);
    }
    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });
// Function to prepend a cat to the beginning of the cats array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
// Function to remove the last cat from the cats array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
// Function to remove the first cat from the cats array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
// Function to append a cat to the cats array non-destructively
function appendCat(name) {
  return [...cats, name];
}
    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
// Function to prepend a cat to the cats array non-destructively
function prependCat(name) {
  return [name, ...cats];
}

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
// Function to remove the last cat from the cats array non-destructively
function removeLastCat() {
  return cats.slice(0, -1);
}
    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
// Function to remove the first cat from the cats array non-destructively
function removeFirstCat() {
  return cats.slice(1);
}
    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
// Function to remove the first cat from the cats array non-destructively
function removeFirstCat() {
  return cats.slice(1);
}

// Export the cats array and the functions
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
