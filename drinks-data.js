// Extracted from original cheap-coffee.com index.html
window.DRINKS_DATA = {
            'pistachio_latte': {
                name: 'Pistachio Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['1 shot espresso', '3 pumps pistachio sauce', 'Steamed 2% milk', 'Salted brown butter cookie topping'],
                    grande: ['2 shots espresso', '4 pumps pistachio sauce', 'Steamed 2% milk', 'Salted brown butter cookie topping'],
                    venti: ['2 shots espresso', '5 pumps pistachio sauce', 'Steamed 2% milk', 'Salted brown butter cookie topping']
                },
                prices: { tall: 6.28, grande: 6.83, venti: 7.38 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf', '½ Decaf'],
                    temperature: ['Standard (150-170°F)', 'Kids (130°F)', 'Extra Hot (180°F)'],
                    foam: ['Standard foam', 'No foam', 'Light foam', 'Extra foam'],
                    pumps: ['Standard pumps', 'Half-sweet', 'Extra pumps (+1-2)']
                },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    similarity: 70,
                    additions: [{ item: 'Toffee nut syrup', price: 0.80 }],
                    steps: [
                        'Order a [SIZE] Americano',
                        'Add toffee nut syrup (+$0.80 flat fee)',
                        'Ask for steamed milk instead of water (FREE)',
                        'Request cinnamon topping (FREE)',
                        'Add caramel drizzle for nuttiness (FREE)',
                        'Saves $1.20+ with similar nutty-sweet profile!'
                    ]
                }
            },
            'iced_pistachio_latte': {
                name: 'Iced Pistachio Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['1 shot espresso', '3 pumps pistachio sauce', 'Cold 2% milk', 'Ice', 'Salted brown butter cookie topping'],
                    grande: ['2 shots espresso', '4 pumps pistachio sauce', 'Cold 2% milk', 'Ice', 'Salted brown butter cookie topping'],
                    venti: ['3 shots espresso', '6 pumps pistachio sauce', 'Cold 2% milk', 'Ice', 'Salted brown butter cookie topping']
                },
                prices: { tall: 5.85, grande: 6.35, venti: 6.95 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    pumps: ['Standard pumps', 'Half-sweet', 'Extra pumps']
                },
                hack: {
                    base: 'Iced Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.05 },
                    similarity: 70,
                    additions: [{ item: 'Toffee nut syrup', price: 0.80 }],
                    steps: [
                        'Order an [SIZE] Iced Americano',
                        'Add toffee nut syrup (+$0.80 flat fee)',
                        'Add milk from condiment bar (FREE)',
                        'Ask for caramel drizzle (FREE)',
                        'Request cinnamon topping (FREE)',
                        'Saves $0.80+ with similar nutty flavor!'
                    ]
                }
            },
            'pistachio_cream_cold_brew': {
                name: 'Pistachio Cream Cold Brew',
                category: 'Cold Brew',
                ingredients: {
                    tall: ['Cold brew coffee', '2 pumps vanilla syrup', 'Pistachio sweet cream cold foam', 'Salted brown butter cookie topping'],
                    grande: ['Cold brew coffee', '3 pumps vanilla syrup', 'Pistachio sweet cream cold foam', 'Salted brown butter cookie topping'],
                    venti: ['Cold brew coffee', '4 pumps vanilla syrup', 'Pistachio sweet cream cold foam', 'Salted brown butter cookie topping']
                },
                prices: { tall: 5.93, grande: 6.26, venti: 6.48 },
                customizations: {
                    sweetness: ['Standard vanilla', 'No vanilla', 'Half-sweet', 'Extra vanilla'],
                    ice: ['Standard ice', 'Light ice', 'No ice', 'Extra ice'],
                    foam: ['Standard pistachio foam', 'Extra foam', 'Light foam']
                },
                hack: {
                    base: 'Cold Brew',
                    basePrices: { tall: 4.65, grande: 5.15, venti: 5.65 },
                    similarity: 70,
                    additions: [{ item: 'Vanilla sweet cream cold foam', price: 1.25 }],
                    steps: [
                        'Order a [SIZE] Cold Brew',
                        'Add vanilla sweet cream cold foam (+$1.25)',
                        'Add caramel drizzle on top of foam (FREE)',
                        'Request cinnamon topping (FREE)',
                        'Tight margin on tall; grande/venti actually cost more — skip the foam to save'
                    ]
                }
            },
            'caffe_latte': {
                name: 'Caffè Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['1 shot espresso', 'Steamed 2% milk', 'Light layer of microfoam'],
                    grande: ['2 shots espresso', 'Steamed 2% milk', 'Light layer of microfoam'],
                    venti: ['2 shots espresso', 'Steamed 2% milk', 'Light layer of microfoam']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)', 'Heavy Cream'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf', '½ Decaf'],
                    temperature: ['Standard (150-170°F)', 'Kids (130°F)', 'Extra Hot (180°F)'],
                    foam: ['Light foam (default)', 'No foam', 'Extra foam (dry)'],
                    shots: ['Standard', 'Extra shot (+$1.00)', 'Ristretto', 'Long shot']
                },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    similarity: 90,
                    steps: [
                        'Order a [SIZE] Americano',
                        'Ask for it with steamed milk instead of water',
                        'Or get extra room and add steamed milk (FREE up to 4oz)',
                        'Choose any milk alternative for FREE',
                        'Saves $1.50 with nearly identical taste!'
                    ]
                }
            },
            'caramel_macchiato': {
                name: 'Caramel Macchiato',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['2 pumps vanilla syrup', '1 shot espresso', 'Steamed 2% milk', 'Caramel drizzle'],
                    grande: ['3 pumps vanilla syrup', '2 shots espresso', 'Steamed 2% milk', 'Caramel drizzle'],
                    venti: ['4 pumps vanilla syrup', '2 shots espresso', 'Steamed 2% milk', 'Caramel drizzle']
                },
                prices: { tall: 6.25, grande: 6.75, venti: 7.25 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf', '½ Decaf'],
                    temperature: ['Standard', 'Kids', 'Extra Hot'],
                    style: ['Standard', 'Upside down', 'Extra caramel'],
                    pumps: ['Standard vanilla', 'Half-sweet', 'Extra vanilla']
                },
                hacks: [
                    {
                        name: 'Exact Recipe',
                        base: 'Vanilla Latte',
                        basePrices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                        similarity: 100,
                        steps: [
                            'Order a [SIZE] Vanilla Latte',
                            'Ask for caramel drizzle on top and bottom (FREE)',
                            'Request the espresso to be poured on top (FREE)',
                            'Exact same drink for $0.70 less!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Caffè Latte',
                        basePrices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                        similarity: 85,
                        steps: [
                            'Order a [SIZE] Caffè Latte',
                            'Ask for caramel drizzle on top and bottom (FREE)',
                            'Add cinnamon powder from condiment bar (FREE)',
                            'Note: true vanilla flavor requires +$0.80 syrup',
                            'Nearly identical for $0.50 less!'
                        ]
                    }
                ]
            },
            'white_chocolate_mocha': {
                name: 'White Chocolate Mocha',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['3 pumps white chocolate sauce', '1 shot espresso', 'Steamed 2% milk', 'Whipped cream'],
                    grande: ['4 pumps white chocolate sauce', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream'],
                    venti: ['5 pumps white chocolate sauce', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream']
                },
                prices: { tall: 6.25, grande: 6.75, venti: 7.25 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    temperature: ['Standard', 'Kids', 'Extra Hot'],
                    whip: ['With whip (default)', 'No whip', 'Extra whip'],
                    pumps: ['Standard white chocolate', 'Half-sweet', 'Extra pumps']
                },
                hacks: [
                    {
                        name: 'Closest Match',
                        base: 'Caffè Mocha',
                        basePrices: { tall: 5.25, grande: 5.75, venti: 6.25 },
                        similarity: 95,
                        steps: [
                            'Order a [SIZE] Caffè Mocha',
                            'Ask to swap mocha sauce for white mocha sauce (FREE substitution)',
                            'Request whipped cream (FREE)',
                            'Nearly identical drink — saves $1.00!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Americano',
                        basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                        similarity: 80,
                        additions: [{ item: 'White chocolate sauce', price: 0.80 }],
                        steps: [
                            'Order a [SIZE] Americano',
                            'Add white chocolate sauce (+$0.80 flat fee)',
                            'Ask for steamed milk instead of water (FREE)',
                            'Request whipped cream (FREE)',
                            'Saves $1.20 with same white mocha flavor!'
                        ]
                    }
                ]
            },
            'iced_double_berry_matcha': {
                name: 'Iced Double Berry Matcha',
                category: 'Tea',
                ingredients: {
                    tall: ['Strawberry puree (bottom layer)', '2 scoops matcha powder', '3 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Raspberry cream cold foam'],
                    grande: ['Strawberry puree (bottom layer)', '3 scoops matcha powder', '4 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Raspberry cream cold foam'],
                    venti: ['Strawberry puree (bottom layer)', '4 scoops matcha powder', '5 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Raspberry cream cold foam']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener']
                },
                hack: {
                    base: 'Iced Matcha Tea Latte',
                    basePrices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                    similarity: 60,
                    steps: [
                        'Order an [SIZE] Iced Matcha Tea Latte',
                        'Ask for strawberry puree blended in (FREE)',
                        'Skip the cold foam — adding VSCCF costs +$1.25, wipes out savings',
                        'Add raspberry syrup to base if available (FREE swap)',
                        'Base matcha + strawberry — you lose the foam layer but save money'
                    ]
                }
            },
            'iced_banana_bread_matcha': {
                name: 'Iced Banana Bread Matcha',
                category: 'Tea',
                ingredients: {
                    tall: ['2 scoops matcha powder', '3 pumps brown sugar syrup', 'Cold 2% milk', 'Ice', 'Banana cream cold foam', 'Caramel crunch topping'],
                    grande: ['3 scoops matcha powder', '4 pumps brown sugar syrup', 'Cold 2% milk', 'Ice', 'Banana cream cold foam', 'Caramel crunch topping'],
                    venti: ['4 scoops matcha powder', '5 pumps brown sugar syrup', 'Cold 2% milk', 'Ice', 'Banana cream cold foam', 'Caramel crunch topping']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener']
                },
                hack: {
                    base: 'Iced Matcha Tea Latte',
                    basePrices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                    similarity: 55,
                    steps: [
                        'Order an [SIZE] Iced Matcha Tea Latte',
                        'Add brown sugar packets from condiment bar (FREE)',
                        'Skip the cold foam — VSCCF adds +$1.25 and wipes out savings',
                        'Request caramel drizzle on base (FREE)',
                        'Add cinnamon topping (FREE)',
                        'Base matcha with sweet/warm notes — no foam layer but you actually save'
                    ]
                }
            },
            'vanilla_latte': {
                name: 'Vanilla Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Vanilla syrup (3 pumps)', '1 shot espresso', 'Steamed 2% milk'],
                    grande: ['Vanilla syrup (4 pumps)', '2 shots espresso', 'Steamed 2% milk'],
                    venti: ['Vanilla syrup (5 pumps)', '2 shots espresso', 'Steamed 2% milk']
                },
                prices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    similarity: 85,
                    steps: [
                        'Order a [SIZE] Americano',
                        'Ask for it in a larger cup',
                        'Add milk from the condiment bar (restored Jan 2025!)',
                        'Add cinnamon powder from condiment bar (FREE)',
                        'Note: true vanilla flavor requires +$0.80 syrup'
                    ]
                }
            },
            'caffe_mocha': {
                name: 'Caffè Mocha',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Mocha sauce (3 pumps)', '1 shot espresso', 'Steamed 2% milk', 'Whipped cream'],
                    grande: ['Mocha sauce (4 pumps)', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream'],
                    venti: ['Mocha sauce (5 pumps)', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream']
                },
                prices: { tall: 5.25, grande: 5.75, venti: 6.25 },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    additions: [{ item: 'Mocha syrup', price: 0.80 }],
                    similarity: 80,
                    steps: [
                        'Order a [SIZE] Americano',
                        'Add mocha syrup (+$0.80 flat fee)',
                        'Ask for extra steamed milk (FREE)',
                        'Top with whipped cream (FREE)',
                        'Saves you $0.20 even with the syrup charge'
                    ]
                }
            },
            'chai_tea_latte': {
                name: 'Chai Tea Latte',
                category: 'Tea',
                ingredients: {
                    tall: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '3 pumps classic syrup', 'Steamed 2% milk', 'Light foam'],
                    grande: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '4 pumps classic syrup', 'Steamed 2% milk', 'Light foam'],
                    venti: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '5 pumps classic syrup', 'Steamed 2% milk', 'Light foam']
                },
                prices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    temperature: ['Standard', 'Kids', 'Extra Hot'],
                    foam: ['Light foam (default)', 'No foam', 'Extra foam'],
                    pumps: ['Standard chai', 'Extra chai pumps', 'Light chai']
                },
                hack: {
                    base: 'Chai Tea Bags',
                    basePrices: { tall: 3.15, grande: 3.45, venti: 3.65 },
                    similarity: 70,
                    steps: [
                        'Order [SIZE] hot water with 2 chai tea bags',
                        'Steep for 5 minutes for strong flavor',
                        'Add steamed milk from condiment bar (restored!)',
                        'Sweeten with honey packets (FREE)',
                        'Creates authentic chai for half price!'
                    ]
                }
            },
            'iced_chai_tea_latte': {
                name: 'Iced Chai Tea Latte',
                category: 'Tea',
                ingredients: {
                    tall: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '3 pumps classic syrup', 'Cold 2% milk', 'Ice'],
                    grande: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '4 pumps classic syrup', 'Cold 2% milk', 'Ice'],
                    venti: ['Premium chai blend (black tea, cinnamon, clove, cardamom, ginger, honey)', '6 pumps classic syrup', 'Cold 2% milk', 'Ice']
                },
                prices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'Extra pumps']
                },
                hack: {
                    base: 'Iced Tea',
                    basePrices: { tall: 3.15, grande: 3.45, venti: 3.65 },
                    similarity: 75,
                    steps: [
                        'Order [SIZE] iced chai tea (2 tea bags)',
                        'Ask for light ice',
                        'Add milk from condiment bar (restored!)',
                        'Sweeten with liquid cane sugar (FREE)',
                        'Mix well for creamy iced chai!'
                    ]
                }
            },
            'iced_coffee': {
                name: 'Iced Coffee',
                category: 'Cold Brew',
                ingredients: {
                    tall: ['Brewed coffee', 'Ice', 'Classic syrup (3 pumps)'],
                    grande: ['Brewed coffee', 'Ice', 'Classic syrup (4 pumps)'],
                    venti: ['Brewed coffee', 'Ice', 'Classic syrup (6 pumps)']
                },
                prices: { tall: 3.65, grande: 4.15, venti: 4.65 },
                hack: {
                    base: 'Hot Coffee',
                    basePrices: { tall: 2.65, grande: 2.85, venti: 3.15 },
                    steps: [
                        'Order a [SIZE] hot coffee',
                        'Ask for a cup of ice (FREE)',
                        'Let coffee cool for 2 minutes then pour over ice',
                        'Add milk and sweetener from condiment bar (restored!)',
                        'Classic syrup is always FREE to add!'
                    ]
                }
            },
            'iced_caramel_macchiato': {
                name: 'Iced Caramel Macchiato',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Vanilla syrup (3 pumps)', '2 shots espresso', 'Cold 2% milk', 'Ice', 'Caramel drizzle'],
                    grande: ['Vanilla syrup (4 pumps)', '2 shots espresso', 'Cold 2% milk', 'Ice', 'Caramel drizzle'],
                    venti: ['Vanilla syrup (6 pumps)', '3 shots espresso', 'Cold 2% milk', 'Ice', 'Caramel drizzle']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                hack: {
                    base: 'Iced Espresso',
                    basePrices: { tall: 3.15, grande: 3.65, venti: 4.15 },
                    steps: [
                        'Order [SIZE] iced espresso shots in a venti cup',
                        'Add milk from condiment bar (restored!)',
                        'Dust with cinnamon powder from condiment bar (FREE)',
                        'Ask barista for caramel drizzle (usually FREE)',
                        'Huge savings with same taste profile!'
                    ]
                }
            },
            'flat_white': {
                name: 'Flat White',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['2 ristretto shots', 'Microfoam milk'],
                    grande: ['3 ristretto shots', 'Microfoam milk'],
                    venti: ['4 ristretto shots', 'Microfoam milk']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                hack: {
                    base: 'Doppio Espresso',
                    basePrices: { tall: 2.65, grande: 3.15, venti: 3.65 },
                    steps: [
                        'Order a doppio (double shot) or triple espresso',
                        'Ask for it in a larger cup',
                        'Request extra steamed milk with microfoam (FREE)',
                        'Specify you want whole milk for authentic flat white',
                        'Nearly identical drink for half the price!'
                    ]
                }
            },
            'cinnamon_dolce_latte': {
                name: 'Cinnamon Dolce Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Cinnamon dolce syrup (3 pumps)', '1 shot espresso', 'Steamed 2% milk', 'Whipped cream', 'Cinnamon dolce topping'],
                    grande: ['Cinnamon dolce syrup (4 pumps)', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream', 'Cinnamon dolce topping'],
                    venti: ['Cinnamon dolce syrup (5 pumps)', '2 shots espresso', 'Steamed 2% milk', 'Whipped cream', 'Cinnamon dolce topping']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                hacks: [
                    {
                        name: 'Exact Recipe',
                        base: 'Americano',
                        basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                        similarity: 85,
                        additions: [{ item: 'Cinnamon dolce syrup', price: 0.80 }],
                        steps: [
                            'Order a [SIZE] Americano',
                            'Add cinnamon dolce syrup (+$0.80 flat fee)',
                            'Ask for steamed milk instead of water (FREE)',
                            'Request whipped cream (FREE)',
                            'Add cinnamon topping (FREE)',
                            'Same syrup, same toppings — saves $0.70!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Americano',
                        basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                        similarity: 70,
                        steps: [
                            'Order a [SIZE] Americano',
                            'Ask for steamed milk instead of water (FREE)',
                            'Add cinnamon from condiment bar (FREE)',
                            'Sweeten with raw sugar packets (FREE)',
                            'Request whipped cream (FREE)',
                            'Saves $1.50 with real cinnamon + sugar!'
                        ]
                    }
                ]
            },
            'cappuccino': {
                name: 'Cappuccino',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['1 shot espresso', 'Steamed milk', 'Thick layer of foam'],
                    grande: ['2 shots espresso', 'Steamed milk', 'Thick layer of foam'],
                    venti: ['2 shots espresso', 'Steamed milk', 'Thick layer of foam']
                },
                prices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                hack: {
                    base: 'Espresso',
                    basePrices: { tall: 2.65, grande: 3.15, venti: 3.15 },
                    steps: [
                        'Order [SIZE] espresso shots in a larger cup',
                        'Ask for extra foam with steamed milk (FREE)',
                        'Or ask for a "wet" cappuccino with less foam',
                        'Dust with cocoa or cinnamon powder (FREE)',
                        'Same drink, much lower price!'
                    ]
                }
            },
            'iced_vanilla_latte': {
                name: 'Iced Vanilla Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Vanilla syrup (3 pumps)', '1 shot espresso', 'Cold 2% milk', 'Ice'],
                    grande: ['Vanilla syrup (4 pumps)', '2 shots espresso', 'Cold 2% milk', 'Ice'],
                    venti: ['Vanilla syrup (6 pumps)', '3 shots espresso', 'Cold 2% milk', 'Ice']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                hack: {
                    base: 'Iced Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.05 },
                    steps: [
                        'Order an [SIZE] Iced Americano',
                        'Ask for room for milk',
                        'Add milk from condiment bar (restored!)',
                        'Add cinnamon powder from condiment bar (FREE)',
                        'Note: true vanilla flavor requires +$0.80 syrup'
                    ]
                }
            },
            'cold_brew': {
                name: 'Cold Brew Coffee',
                category: 'Cold Brew',
                ingredients: {
                    tall: ['Cold brew coffee concentrate', 'Water', 'Ice'],
                    grande: ['Cold brew coffee concentrate', 'Water', 'Ice'],
                    venti: ['Cold brew coffee concentrate', 'Water', 'Ice']
                },
                prices: { tall: 4.65, grande: 5.15, venti: 5.65 },
                hack: {
                    base: 'Iced Coffee',
                    basePrices: { tall: 3.65, grande: 4.15, venti: 4.65 },
                    steps: [
                        'Order [SIZE] iced coffee',
                        'Ask for no classic syrup',
                        'Request light ice for stronger coffee',
                        'Not as smooth as cold brew but similar caffeine',
                        'Add cream to smooth out any bitterness'
                    ]
                }
            },
            'nitro_cold_brew': {
                name: 'Nitro Cold Brew',
                category: 'Cold Brew',
                ingredients: {
                    tall: ['Nitrogen-infused cold brew', 'No ice needed'],
                    grande: ['Nitrogen-infused cold brew', 'No ice needed'],
                    venti: ['Not available in Venti']
                },
                prices: { tall: 5.25, grande: 5.75, venti: 0 },
                hack: {
                    base: 'Cold Brew',
                    basePrices: { tall: 4.65, grande: 5.15, venti: 0 },
                    steps: [
                        'Order a [SIZE] regular cold brew',
                        'Ask for no ice to get more coffee',
                        'Add a splash of heavy cream for creaminess',
                        'Shake the cup to create foam',
                        'Not as smooth but saves ~$0.60'
                    ]
                }
            },
            'iced_brown_sugar_oatmilk': {
                name: 'Iced Brown Sugar Oatmilk Shaken Espresso',
                category: 'Shaken Espresso',
                ingredients: {
                    tall: ['2 shots Blonde Espresso', '3 pumps brown sugar syrup', 'Cinnamon powder', 'Oatmilk splash', 'Ice'],
                    grande: ['3 shots Blonde Espresso', '4 pumps brown sugar syrup', 'Cinnamon powder', 'Oatmilk splash', 'Ice'],
                    venti: ['4 shots Blonde Espresso', '6 pumps brown sugar syrup', 'Cinnamon powder', 'Oatmilk splash', 'Ice']
                },
                prices: { tall: 6.75, grande: 7.25, venti: 7.75 },
                customizations: {
                    roast: ['Blonde Espresso (default)', 'Signature Espresso', 'Decaf', '½ Decaf'],
                    milk: ['Oatmilk (default)', '2%', 'Nonfat', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    pumps: ['Standard brown sugar', 'Half-sweet', 'Extra pumps'],
                    toppings: ['Cinnamon (default)', 'No cinnamon', 'Extra cinnamon']
                },
                hacks: [
                    {
                        name: 'Exact Recipe',
                        base: 'Iced Shaken Espresso',
                        basePrices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                        similarity: 100,
                        steps: [
                            'Order [SIZE] Iced Shaken Espresso',
                            'Ask for brown sugar syrup substitution (FREE syrup swap)',
                            'Request Blonde Espresso (FREE roast choice)',
                            'Add oatmilk (FREE)',
                            'Ask for cinnamon powder on top (FREE)',
                            'Exact same drink for $1.00 less!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Iced Triple Espresso',
                        basePrices: { tall: 4.15, grande: 4.65, venti: 5.15 },
                        similarity: 85,
                        steps: [
                            'Order [SIZE] iced espresso (2/3/4 shots)',
                            'Ask for it shaken with ice',
                            'Add oatmilk (FREE)',
                            'Use brown sugar packets from condiment bar (FREE)',
                            'Request cinnamon powder on top (FREE)',
                            'Similar taste for $2.50+ less!'
                        ]
                    }
                ]
            },
            'iced_toasted_vanilla_oatmilk': {
                name: 'Iced Toasted Vanilla Oatmilk Shaken Espresso',
                category: 'Shaken Espresso',
                ingredients: {
                    tall: ['2 shots Blonde Espresso', '3 pumps toasted vanilla syrup', 'Oatmilk splash', 'Ice'],
                    grande: ['3 shots Blonde Espresso', '4 pumps toasted vanilla syrup', 'Oatmilk splash', 'Ice'],
                    venti: ['4 shots Blonde Espresso', '6 pumps toasted vanilla syrup', 'Oatmilk splash', 'Ice']
                },
                prices: { tall: 6.75, grande: 7.25, venti: 7.75 },
                customizations: {
                    roast: ['Blonde Espresso (default)', 'Signature Espresso', 'Decaf'],
                    milk: ['Oatmilk (default)', '2%', 'Almond (FREE)', 'Soy (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    pumps: ['Standard vanilla', 'Half-sweet', 'Extra pumps']
                },
                hacks: [
                    {
                        name: 'Exact Recipe',
                        base: 'Iced Shaken Espresso',
                        basePrices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                        similarity: 100,
                        additions: [{ item: 'Vanilla syrup', price: 0.80 }],
                        steps: [
                            'Order [SIZE] Iced Shaken Espresso',
                            'Add vanilla syrup (+$0.80 flat fee)',
                            'Request Blonde Espresso (FREE roast choice)',
                            'Add oatmilk (FREE)',
                            'Exact same drink for $0.20-1.00 less!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Iced Triple Espresso',
                        basePrices: { tall: 4.15, grande: 4.65, venti: 5.15 },
                        similarity: 85,
                        additions: [{ item: 'Vanilla syrup', price: 0.80 }],
                        steps: [
                            'Order [SIZE] iced espresso (2/3/4 shots)',
                            'Add 2 pumps vanilla syrup (+$0.80 flat fee)',
                            'Ask for it shaken with ice',
                            'Add oatmilk (FREE)',
                            'Still saves $1.50+ per drink!'
                        ]
                    }
                ]
            },
            'iced_cinnamon_dolce_latte': {
                name: 'Iced Cinnamon Dolce Latte',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['Cinnamon dolce syrup (3 pumps)', '1 shot espresso', 'Cold 2% milk', 'Ice', 'Whipped cream', 'Cinnamon dolce topping'],
                    grande: ['Cinnamon dolce syrup (4 pumps)', '2 shots espresso', 'Cold 2% milk', 'Ice', 'Whipped cream', 'Cinnamon dolce topping'],
                    venti: ['Cinnamon dolce syrup (6 pumps)', '3 shots espresso', 'Cold 2% milk', 'Ice', 'Whipped cream', 'Cinnamon dolce topping']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    whip: ['With whip (default)', 'No whip', 'Extra whip'],
                    pumps: ['Standard cinnamon dolce', 'Half-sweet', 'Extra pumps']
                },
                hacks: [
                    {
                        name: 'Exact Recipe',
                        base: 'Iced Americano',
                        basePrices: { tall: 4.25, grande: 4.75, venti: 5.05 },
                        similarity: 85,
                        additions: [{ item: 'Cinnamon dolce syrup', price: 0.80 }],
                        steps: [
                            'Order an [SIZE] Iced Americano',
                            'Add cinnamon dolce syrup (+$0.80 flat fee)',
                            'Add milk from condiment bar (FREE)',
                            'Request whipped cream (FREE)',
                            'Add cinnamon topping (FREE)',
                            'Same syrup, same toppings — saves $0.70+!'
                        ]
                    },
                    {
                        name: 'Maximum Savings',
                        base: 'Iced Americano',
                        basePrices: { tall: 4.25, grande: 4.75, venti: 5.05 },
                        similarity: 70,
                        steps: [
                            'Order an [SIZE] Iced Americano',
                            'Add milk from condiment bar (FREE)',
                            'Add cinnamon from condiment bar (FREE)',
                            'Sweeten with sugar packets (FREE)',
                            'Request whipped cream (FREE)',
                            'Saves $1.50+ with real cinnamon + sugar!'
                        ]
                    }
                ]
            },
            'iced_chocolate_almondmilk': {
                name: 'Iced Chocolate Almondmilk Shaken Espresso',
                category: 'Shaken Espresso',
                ingredients: {
                    tall: ['2 shots Blonde Espresso', '3 pumps chocolate malt powder', 'Almondmilk splash', 'Ice'],
                    grande: ['3 shots Blonde Espresso', '4 pumps chocolate malt powder', 'Almondmilk splash', 'Ice'],
                    venti: ['4 shots Blonde Espresso', '6 pumps chocolate malt powder', 'Almondmilk splash', 'Ice']
                },
                prices: { tall: 6.75, grande: 7.25, venti: 7.75 },
                customizations: {
                    roast: ['Blonde Espresso (default)', 'Signature Espresso', 'Decaf'],
                    milk: ['Almondmilk (default)', 'Oat (FREE)', '2%', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    pumps: ['Standard chocolate', 'Half-sweet', 'Extra pumps']
                },
                hack: {
                    base: 'Iced Triple Espresso',
                    basePrices: { tall: 4.15, grande: 4.65, venti: 5.15 },
                    additions: [{ item: 'Mocha syrup', price: 0.80 }],
                    similarity: 85,
                    steps: [
                        'Order [SIZE] iced espresso (2/3/4 shots)',
                        'Add mocha syrup (+$0.80 flat fee)',
                        'Ask for it shaken with ice',
                        'Add almondmilk (FREE)',
                        'Request cocoa powder on top (FREE)',
                        'Similar chocolate coffee for $1.70+ less!'
                    ]
                }
            },
            'americano': {
                name: 'Caffè Americano',
                category: 'Core Espresso',
                ingredients: {
                    tall: ['2 shots espresso', 'Hot water'],
                    grande: ['3 shots espresso', 'Hot water'],
                    venti: ['4 shots espresso', 'Hot water']
                },
                prices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                customizations: {
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf', '½ Decaf'],
                    temperature: ['Standard', 'Extra Hot', 'Kids'],
                    room: ['No room', 'With room for milk'],
                    shots: ['Standard shots', 'Extra shot (+$1.00)', 'Ristretto', 'Long shots']
                },
                hack: {
                    base: 'Pour Over Coffee',
                    basePrices: { tall: 3.45, grande: 3.95, venti: 4.45 },
                    steps: [
                        'Order a [SIZE] pour over coffee',
                        'Choose Pike Place or dark roast',
                        'Stronger than regular drip coffee',
                        'Similar bold flavor for less',
                        'Add milk/cream from condiment bar as desired'
                    ]
                }
            },
            'matcha_latte': {
                name: 'Matcha Tea Latte',
                category: 'Tea',
                ingredients: {
                    tall: ['3 scoops matcha powder', '3 pumps liquid cane sugar', 'Steamed 2% milk'],
                    grande: ['4 scoops matcha powder', '4 pumps liquid cane sugar', 'Steamed 2% milk'],
                    venti: ['5 scoops matcha powder', '5 pumps liquid cane sugar', 'Steamed 2% milk']
                },
                prices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    temperature: ['Standard', 'Extra Hot', 'Kids'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener', 'Extra sweet'],
                    foam: ['Light foam', 'No foam', 'Extra foam']
                },
                hack: {
                    base: 'Hot Tea',
                    basePrices: { tall: 3.15, grande: 3.45, venti: 3.65 },
                    additions: [{ item: 'Matcha powder (2 scoops)', price: 2.00 }],
                    similarity: 75,
                    steps: [
                        'Order a [SIZE] hot water',
                        'Ask for 2 scoops matcha powder (+$1.00/scoop = $2.00)',
                        'Add steamed milk (specify type - all FREE)',
                        'Sweeten with honey packets (FREE)',
                        'Mix well for smooth consistency'
                    ]
                }
            },
            'iced_matcha_latte': {
                name: 'Iced Matcha Tea Latte',
                category: 'Tea',
                ingredients: {
                    tall: ['3 scoops matcha powder', '3 pumps liquid cane sugar', 'Cold 2% milk', 'Ice'],
                    grande: ['4 scoops matcha powder', '4 pumps liquid cane sugar', 'Cold 2% milk', 'Ice'],
                    venti: ['5 scoops matcha powder', '5 pumps liquid cane sugar', 'Cold 2% milk', 'Ice']
                },
                prices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener', 'Extra sweet']
                },
                hack: {
                    base: 'Iced Tea',
                    basePrices: { tall: 3.15, grande: 3.45, venti: 3.65 },
                    additions: [{ item: 'Matcha powder (2 scoops)', price: 2.00 }],
                    similarity: 75,
                    steps: [
                        'Order a [SIZE] iced water',
                        'Ask for 2 scoops matcha powder (+$1.00/scoop = $2.00)',
                        'Add cold milk (specify type - all FREE)',
                        'Sweeten with liquid cane sugar packets (FREE)',
                        'Ask for extra stirring for smooth consistency'
                    ]
                }
            },
            'toasted_coconut_cream_cold_brew': {
                name: 'Toasted Coconut Cream Cold Brew',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['Cold brew coffee', '2 pumps toasted coconut syrup', 'Toasted coconut cream cold foam'],
                    grande: ['Cold brew coffee', '3 pumps toasted coconut syrup', 'Toasted coconut cream cold foam'],
                    venti: ['Cold brew coffee', '4 pumps toasted coconut syrup', 'Toasted coconut cream cold foam']
                },
                prices: { tall: 5.45, grande: 5.95, venti: 6.45 },
                customizations: {
                    ice: ['Standard ice', 'Light ice', 'No ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener'],
                    foam: ['Standard coconut foam', 'Extra foam', 'Light foam']
                },
                hack: {
                    base: 'Cold Brew',
                    basePrices: { tall: 4.65, grande: 5.15, venti: 5.65 },
                    similarity: 55,
                    steps: [
                        'Order a [SIZE] Cold Brew',
                        'Ask for coconut milk splash (FREE)',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Add cinnamon topping (FREE)',
                        'Coconut splash + cinnamon — no foam layer, but you actually save $0.55-$0.80'
                    ]
                }
            },
            'toasted_coconut_latte': {
                name: 'Toasted Coconut Latte',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['1 shot espresso', '3 pumps toasted coconut syrup', 'Steamed 2% milk'],
                    grande: ['2 shots espresso', '4 pumps toasted coconut syrup', 'Steamed 2% milk'],
                    venti: ['2 shots espresso', '5 pumps toasted coconut syrup', 'Steamed 2% milk']
                },
                prices: { tall: 6.15, grande: 6.85, venti: 7.35 },
                customizations: {
                    milk: ['2% (default)', 'Nonfat', 'Whole', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    temperature: ['Standard', 'Kids', 'Extra Hot']
                },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    similarity: 70,
                    additions: [{ item: 'Vanilla syrup', price: 0.80 }],
                    steps: [
                        'Order a [SIZE] Americano',
                        'Add vanilla syrup (+$0.80 flat fee)',
                        'Ask for steamed coconut milk instead of water (FREE)',
                        'Request cinnamon topping (FREE)',
                        'Vanilla + coconut creates a sweet coconut latte!'
                    ]
                }
            },
            'lavender_latte': {
                name: 'Lavender Latte',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['1 shot Blonde Espresso', 'Lavender powder', 'Steamed oat milk'],
                    grande: ['2 shots Blonde Espresso', 'Lavender powder', 'Steamed oat milk'],
                    venti: ['2 shots Blonde Espresso', 'Lavender powder', 'Steamed oat milk']
                },
                prices: { tall: 6.15, grande: 6.85, venti: 7.35 },
                customizations: {
                    milk: ['Oat (default, FREE)', '2%', 'Nonfat', 'Whole', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    roast: ['Blonde Espresso (default)', 'Signature Espresso', 'Decaf'],
                    temperature: ['Standard', 'Kids', 'Extra Hot']
                },
                hack: {
                    base: 'Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.25 },
                    similarity: 65,
                    additions: [{ item: 'Vanilla syrup', price: 0.80 }],
                    steps: [
                        'Order a [SIZE] Americano',
                        'Add vanilla syrup (+$0.80 flat fee)',
                        'Request Blonde Espresso (FREE roast choice)',
                        'Ask for steamed oat milk instead of water (FREE)',
                        'Smooth sweet latte — missing lavender floral notes'
                    ]
                }
            },
            'iced_lavender_cream_chai': {
                name: 'Iced Lavender Cream Chai',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['Premium chai blend', '3 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam'],
                    grande: ['Premium chai blend', '4 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam'],
                    venti: ['Premium chai blend', '6 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam']
                },
                prices: { tall: 5.75, grande: 6.45, venti: 6.95 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet (fewer classic syrup pumps)', 'No sweetener']
                },
                hack: {
                    base: 'Iced Chai Tea Latte',
                    basePrices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                    similarity: 55,
                    steps: [
                        'Order an [SIZE] Iced Chai Tea Latte',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Adjust classic syrup pumps to taste (FREE)',
                        'Plain iced chai — missing the lavender foam notes but saves $0.20-$0.40'
                    ]
                }
            },
            'iced_mango_cream_chai': {
                name: 'Iced Mango Cream Chai',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['Premium chai blend', '3 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam'],
                    grande: ['Premium chai blend', '4 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam'],
                    venti: ['Premium chai blend', '6 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam']
                },
                prices: { tall: 5.75, grande: 6.45, venti: 6.95 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet (fewer classic syrup pumps)', 'No sweetener']
                },
                hack: {
                    base: 'Iced Chai Tea Latte',
                    basePrices: { tall: 5.55, grande: 6.05, venti: 6.55 },
                    similarity: 50,
                    steps: [
                        'Order an [SIZE] Iced Chai Tea Latte',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Add mango syrup if available (+$0.80)',
                        'Chai + mango syrup — missing the foam but saves money'
                    ]
                }
            },
            'iced_lavender_cream_matcha': {
                name: 'Iced Lavender Cream Matcha',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['2 scoops matcha powder', '3 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam'],
                    grande: ['3 scoops matcha powder', '4 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam'],
                    venti: ['4 scoops matcha powder', '5 pumps classic syrup', 'Cold 2% milk', 'Ice', 'Lavender cream cold foam']
                },
                prices: { tall: 5.95, grande: 6.75, venti: 7.25 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener']
                },
                hack: {
                    base: 'Iced Matcha Tea Latte',
                    basePrices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                    similarity: 50,
                    steps: [
                        'Order an [SIZE] Iced Matcha Tea Latte',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Plain iced matcha base — missing lavender foam but saves $0.20-$0.50 (matches venti price exactly)'
                    ]
                }
            },
            'iced_mango_cream_matcha': {
                name: 'Iced Mango Cream Matcha',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['2 scoops matcha powder', '3 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam'],
                    grande: ['3 scoops matcha powder', '4 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam'],
                    venti: ['4 scoops matcha powder', '5 pumps classic syrup', 'Mango syrup', 'Cold 2% milk', 'Ice', 'Mango cream cold foam']
                },
                prices: { tall: 5.95, grande: 6.75, venti: 7.25 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)', 'Coconut (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    sweetness: ['Standard sweet', 'Half-sweet', 'No sweetener']
                },
                hack: {
                    base: 'Iced Matcha Tea Latte',
                    basePrices: { tall: 5.75, grande: 6.25, venti: 7.05 },
                    similarity: 50,
                    additions: [{ item: 'Mango syrup', price: 0.80 }],
                    steps: [
                        'Order an [SIZE] Iced Matcha Tea Latte',
                        'Add mango syrup (+$0.80)',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Matcha + mango syrup — missing the foam but saves $0.05-$0.30'
                    ]
                }
            },
            'iced_ube_coconut_macchiato': {
                name: 'Iced Ube Coconut Macchiato',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['2 pumps toasted coconut syrup', 'Cold 2% milk', 'Ice', '1 shot espresso (poured on top)', 'Ube coconut cream cold foam', 'Toasted coconut flakes'],
                    grande: ['3 pumps toasted coconut syrup', 'Cold 2% milk', 'Ice', '2 shots espresso (poured on top)', 'Ube coconut cream cold foam', 'Toasted coconut flakes'],
                    venti: ['4 pumps toasted coconut syrup', 'Cold 2% milk', 'Ice', '3 shots espresso (poured on top)', 'Ube coconut cream cold foam', 'Toasted coconut flakes']
                },
                prices: { tall: 6.25, grande: 7.15, venti: 7.65 },
                customizations: {
                    milk: ['2% (default)', 'Oat (FREE)', 'Almond (FREE)', 'Coconut (FREE)'],
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice']
                },
                hack: {
                    base: 'Iced Americano',
                    basePrices: { tall: 4.25, grande: 4.75, venti: 5.05 },
                    similarity: 65,
                    additions: [
                        { item: 'Vanilla syrup', price: 0.80 },
                        { item: 'Vanilla sweet cream cold foam', price: 1.25 }
                    ],
                    steps: [
                        'Order an [SIZE] Iced Americano',
                        'Add vanilla syrup (+$0.80)',
                        'Request coconut milk (FREE)',
                        'Add vanilla sweet cream cold foam (+$1.25)',
                        'Tall is a wash; grande/venti save $0.35-$0.55 — skip foam on tall to actually save'
                    ]
                }
            },
            'iced_ube_coconut_shaken_espresso': {
                name: 'Iced Ube Coconut Cream Shaken Espresso',
                category: 'Spring Seasonal',
                ingredients: {
                    tall: ['2 shots espresso', 'Toasted coconut syrup', 'Coconut milk', 'Ice', 'Ube coconut cream cold foam'],
                    grande: ['3 shots espresso', 'Toasted coconut syrup', 'Coconut milk', 'Ice', 'Ube coconut cream cold foam'],
                    venti: ['4 shots espresso', 'Toasted coconut syrup', 'Coconut milk', 'Ice', 'Ube coconut cream cold foam']
                },
                prices: { tall: 6.75, grande: 7.25, venti: 7.75 },
                customizations: {
                    roast: ['Signature Espresso (default)', 'Blonde Espresso', 'Decaf'],
                    milk: ['Coconut (default, FREE)', 'Oat (FREE)', 'Almond (FREE)', 'Soy (FREE)'],
                    ice: ['Standard ice', 'Light ice', 'Extra ice']
                },
                hack: {
                    base: 'Iced Shaken Espresso',
                    basePrices: { tall: 5.75, grande: 6.25, venti: 6.75 },
                    similarity: 50,
                    steps: [
                        'Order an [SIZE] Iced Shaken Espresso',
                        'Ask for coconut milk (FREE swap)',
                        'Skip the cold foam — VSCCF adds +$1.25 and makes the hack cost more than the original',
                        'Add cinnamon topping (FREE)',
                        'Coconut base with espresso — missing ube flavor and foam, saves $1.00 (limited-time drink)'
                    ]
                }
            },
            'pink_cannon_ball': {
                name: 'Pink Cannon Ball Drink',
                category: 'Refreshers',
                ingredients: {
                    tall: ['Mango Dragonfruit Refresher base', 'Strawberry Açaí Refresher base', 'Coconut milk', 'Ice', 'Freeze-dried strawberry inclusions', 'Freeze-dried dragonfruit inclusions'],
                    grande: ['Mango Dragonfruit Refresher base', 'Strawberry Açaí Refresher base', 'Coconut milk', 'Ice', 'Freeze-dried strawberry inclusions', 'Freeze-dried dragonfruit inclusions'],
                    venti: ['Mango Dragonfruit Refresher base', 'Strawberry Açaí Refresher base', 'Coconut milk', 'Ice', 'Freeze-dried strawberry inclusions', 'Freeze-dried dragonfruit inclusions']
                },
                prices: { tall: 4.95, grande: 5.45, venti: 5.95 },
                customizations: {
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    inclusions: ['Standard inclusions', 'Extra inclusions', 'No inclusions']
                },
                hack: {
                    base: 'Mango Dragonfruit Refresher',
                    basePrices: { tall: 4.45, grande: 4.95, venti: 5.45 },
                    similarity: 80,
                    steps: [
                        'Order a [SIZE] Mango Dragonfruit Refresher',
                        'Ask for coconut milk instead of water (FREE swap)',
                        'Creamy coconut + dragonfruit is the core of this drink!'
                    ]
                }
            },
            'mango_strawberry_energy_refresher': {
                name: 'Mango Strawberry Energy Refresher',
                category: 'Energy Refreshers',
                ingredients: {
                    tall: ['Mango Dragonfruit Refresher base', 'Strawberry puree', 'Energy boost (B vitamins + green coffee caffeine, ~140-170mg)', 'Ice'],
                    grande: ['Mango Dragonfruit Refresher base', 'Strawberry puree', 'Energy boost (B vitamins + green coffee caffeine, ~140-170mg)', 'Ice'],
                    venti: ['Mango Dragonfruit Refresher base', 'Strawberry puree', 'Energy boost (B vitamins + green coffee caffeine, ~140-170mg)', 'Ice']
                },
                prices: { tall: 5.25, grande: 5.75, venti: 6.25 },
                customizations: {
                    ice: ['Standard ice', 'Light ice', 'Extra ice'],
                    inclusions: ['Add strawberry inclusions ($0.50/scoop)']
                },
                hack: {
                    base: 'Mango Dragonfruit Refresher',
                    basePrices: { tall: 4.45, grande: 4.95, venti: 5.45 },
                    similarity: 70,
                    steps: [
                        'Order a [SIZE] Mango Dragonfruit Refresher',
                        'Ask to add a splash of strawberry puree (sometimes FREE, sometimes ~$0.50)',
                        'Skip the energy boost — saves $0.80 but you lose ~140mg caffeine',
                        'For real energy: pair with a tall hot coffee ($2.95) — still cheaper than the boost on a venti'
                    ]
                }
            }
        };
