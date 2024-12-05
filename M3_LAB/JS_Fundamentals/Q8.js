const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }


    function findCity(city) {
        for (let property in city) {
          console.log(`${property} is ${city[property]}`);
        }
      }

      // Test the function with the sydney object
      console.log('-----City Sydney Information------')
      findCity(sydney);

console.log('-----City Auckland Information------')
      const auckland = {
        country: 'Newzealand',
        universities: 15,
        Sea: 'Longbay',
        park: 'shakespear park',
        tower: 'sky city'
        }

        findCity(auckland);