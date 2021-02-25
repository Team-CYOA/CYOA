'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
queryInterface.bulkInsert('options', [{
    optionText: "Option A - I need to check the damage to my ship as quickly as possible. (Climb out the window of you ship)",
    nextEncounter: 2,
    consequence: "Consequence: You drop down to the ground and pop the hood of your damaged ship. There’s a small fire burning smouldering and you try to quickly stomp it out with your feet. You are successful, but your shoes are completely melted- you have to discard them. (HasShoes: false ) (Go to Premise 2)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - That’s a lot of smoke- this thing’s about to blow! (Hit the eject button)",
    nextEncounter: 4,
    consequence: "You strap in and smash that eject button. As you rocket away from your ship in the ejection seat, you realize the damage doesn’t really look that bad. Walking back to your ship, on the other hand, is going to take some time. (Go to Premise 4)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option C - Those readings may be faulty- better put on a space suit. (Find your space-suit before going outside) ",
    nextEncounter: 3,
    consequence: "Consequence: You search high and low for your spacesuit, before finally finding it tucked away under your bed behind some questionable reading material. You really should have cleaned the ship before you left. In fact, you really just need to get your shit together in general- just look at this place- it’s disgusting. (HasSpacesuit: true) (Go to Premise 3)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option D - There could be a fire down below, better be prepared. (Grab a toolkit and fire extinguisher before heading out)",
    nextEncounter: 2,
    consequence: "Consequence: You slide down the fire escape and land on your feet. You pop the hood and immediately blast the engine with your fire extinguisher. As the smoke begins to dissipate, you pat yourself on the back for your good decision making. (HasTools: true) (Go to Premise 2)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option A - (If HasTools) Not a problem! The warp belt is made of anti-matter, so it shouldn’t be too hard to find for the anti-matter-detector I always keep in my toolkit! (Search the woods for missing parts)",
    nextEncounter: 5,
    consequence: "Consequence: Armed with your trusty AMD, you stomp off into the dense foliage that surrounds the crash site. (Go to Premise 5)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - Screw stumbling through the woods! I’ll check the ship computer for a nearby town- better to just trade for a new belt. (Go to town)",
    nextEncounter: 6,
    consequence: "Consequence: You return to the ship and sure enough, there appears to be a small settlement within walking distance of your downed ship. Funny how that works out right? I mean it’s an entire planet, millions and millions of square miles, and yet you always come down near a settlement. You grab some fliff and head out. (canTrade: true) (Go to Premise 6)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option C - (If !HasTools) Well that’s no biggie, it has to be around here... somewhere. I just need to retrace my steps. (Search the woods for missing parts)",
    nextEncounter: 5,
    consequence: "Consequence: Armed with your trusty intuition, you stomp off into the forest… hoping you’ll stumble across your warp belt, somehow. (Go to Premise 5)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },  
    {
    optionText: "Option A - Dammit man, I’m a pilot, not a mechanic! Surely someone in town can fix this piece of junk. (Go to town)",
    nextEncounter: 6,
    consequence: "Consequence: After checking the ship computer for coordinates, you make for the nearby town. You grab a few of your more valuable pieces of junk and cross your fingers that the locals have mastered spaceflight, or at least brewing. (canTrade)(Go to premise 6)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - You figure that your spare parts were scattered around the crash site- spending a few hours combing the woods might be a good idea. (Search the woods for missing parts)",
    nextEncounter: 5,
    consequence: "Consequence: With a surge of determination, you set off into the woods to find your missing parts. (Go to Premise 5)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option C - You feel the creep of despair as you realize you have neither the know-how to repair your ship nor the liquidity to pay for it. You look around, realizing this forest is your new home.",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: As fortune would have it, you find a medium sized ball frequently used in team-based competitive sports involving a net and some sand. With a little creativity, and a lot of desperate isolation, you are able to establish communication with the ball, and live happily ever after.",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option A - Head back to the ship. (Go to ship)",
    nextEncounter: 3,
    consequence: "Consequence: You trek back to your ship through uncharted woods, it takes several hours, and you are certain more damage will be done to your ship in the meantime. (Go to Premise 3)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - That ship has been nothing but trouble since the day you bought it off that shady looking guy from GalaxiesList, might as well just head to town to try and find another beater. (Go to town)",
    nextEncounter: 6,
    consequence: "Consequence: You head off in the rough direction of town, hoping nothing eats you along the way. (Go to Premise 6)",
    //tResult: "",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option A - (if hasTools) && (!engineDestroyed) - Your AMD starts going crazy- the warp belt must be nearby! (Search carefully for the belt)",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: Huzzah! Your calm, rational approach to this catastrophe has paid off. There, under a fern, as though placed there intentionally by a higher power dictating the course of your playthr- life, is the warp belt. You grab the belt and march back to your ship- you’ll be zipping through hyperspace in no time!",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - (if EngineDestroyed) - After hours of fruitless searching you stumble across a solidly built cabin in the woods. There’s really nothing to do but knock on the door and see if they can help.... (knock on the door of the mysterious cabin)",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: An aged hermit answers the door, and when it senses your suffering the creature invites you inside. Even though you do not share a common language (or number of limbs) with the old ascetic, the two of you slowly bond. It teaches you about its own enlightenment, as well as the ways of this old forest. Many years later, long after the hermit has passed on and you have inherited its old cabin, you stumble across an aged, decrepit starship crashed in the woods. You run your hand over the rusted body, scarcely able to remember life before the crash.",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option C - (if !hasTools) - You spy a small stream- you could really use a drink… (drink from the stream)",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: (If hasSpacesuit) You accidentally fall into the stream and find the current surprisingly strong. Your space suit protects you from drowning, and hours later you wash up on an unknown shore. A small farming family takes you in and teaches you to live off the land. You hang your spacesuit in the closet of the spare bedroom they put you up in. Or (If !hasSpacesuit) The current is surprisingly strong, and the stream is very deep. Let’s just cut to the chase and say you drowned.",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option D - You notice a tree with some fruit on it- you sure are hungry… (Eat the fruit)",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: Seriously? Eat the fruit? From the alien tree in an alien forest? Did you not read Into the Wild? Not even see the movie? You die.",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option A - (if canTrade: true) Go to the Galactic Merchant",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: (If hasShoes: true) You find the merchant to be both friendly and understanding of your predicament. He cuts you a deal on some parts that will get your ship flying in no time. Or (hasShoes: false) As soon as you walk in the owner of the shop appears to go into a fit of rage. You can’t understand exactly what he means, but he points at a sign depicting a shirt and a pair of shoes. Then he pulls an energy weapon from under the cash register. You understand that your lack of shoes has led to a lack of service, and leave.",
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    optionText: "Option B - if (!canTrade) You walked here with hardly any money! (Go to bar)",
    nextEncounter: -1,
    //consequence: "",
    tResult: "Terminal Consequence: Without anything to trade for new parts, you decide to go blow what you do have drinking whatever passes for beer around these parts. Your spaceship can always wait til tomorrow...",
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
