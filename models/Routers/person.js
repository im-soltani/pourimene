const router = require('express').Router();
let Person = require('../Person');

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const favoriteFoods = req.body.favoriteFoods;

    const newUser = new Person ({ name,age,favoriteFoods});

    newUser.save()
        .then((newUser) => res.json(newUser))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/mlm').post((req, res) => {
    var arrayOfPeople = [
        {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
        {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
        {name: "Robert", age: 78, favoriteFoods: ["wine"]}
      ];
      
      var createManyPeople = function(arrayOfPeople, done) {
        Person.create(arrayOfPeople, function (err, people) {
          if (err) return console.log(err);
          done(null, people);
        });
        console.log(Person);
        console.log(arr)
      };


})


module.exports = router;