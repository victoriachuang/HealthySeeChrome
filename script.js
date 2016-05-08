var tips = ["Foods high in saturated fats, salt and cholesterol can damage your heart, brain and overall health. Start by replacing your chips and fries with healthier snacks, like granola and fruit.",
	"Would you eat 16 sugar cubes in one sitting? One 12-ounce can of soda has 39 grams of sugar! Switch to water or unsweetened tea instead.",
	"Take a deep breath! Regular meditation can improve your blood pressure and immune system.",
	"Long-term stress can increase your risk of developing heart disease. Reduce your stress by taking breaks from work, exercising and eating well-balanced meals.",
	"Are you adequately hydrated? You should be drinking half of your body weight in ounces. For example, if you weigh 150 pounds, you should drink 75 ounces of liquids each day.",
	"Having a hard time exercising? Find a workout buddy to keep each other motivated!",
	"Dont stop for food when you're hungry; you're more likely to buy junk food and things you don't need! Make a shopping list and stick to it.",
	"Ditch the scale; your weight doesn't determine how healthy you are! Instead, focus on your energy and mood.",
	"It's okay to not finish your plate! Stop eating when you feel full; your body knows when it's had enough!",
	"Go easy during happy hour; shots, a glass of wine or a cocktail can contain 90 to 200 calories each, and alcohol can be dehydrating. Alternate between alcohol and mineral water instead.",
	"Eating breakfast may prevent overeating for the rest of the day. Start your day with a meal that includes lean protein, whole grains and fruit!",
	"An easy way to make sure your meal is well-balanced: make half your plate fruits and vegetables, one quarter grains and one quarter protein.",
	"To make sure you're getting a wide variety of nutrients, eat the rainbow! Red, yellow, green and purple fruits and vegetables contain different vitamins and minerals.",
	"To avoid overeating at one meal, try eating small meals and snacks throughout the day.",
	"To get better-quality sleep, avoid bright lights an hour before bed, which can disrupt your sleep cycle."
]

// set greeting for time of day
var d = new Date();
var currentHour = d.getHours()
if (currentHour < 12 && currentHour > 4) { 
	document.getElementById("greeting").innerHTML = "Good morning!";
} else if (currentHour >= 12 && currentHour < 18) {
	document.getElementById("greeting").innerHTML = "Good afternoon!";
} else {
	document.getElementById("greeting").innerHTML = "Good evening!";
}

// generate random tip
var target = document.getElementById("content_box");
target.innerHTML = tips[Math.floor(Math.random() * tips.length)];
