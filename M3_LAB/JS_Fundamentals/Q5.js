function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

    console.log(getGreeting("john"))

const getGreeting1 = function(name) { // function expression syntax for creating a function
    return 'Hello ' + name + '!';
    }

    console.log(getGreeting1("Mery"))


    const getGreeting2 = (name) => {
        return 'Hello ' + name + '!';
        };

        console.log(getGreeting2("peter"))
