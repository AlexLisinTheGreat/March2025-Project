import { title } from "@/components/primitives";

export default function RecipesPage() {
	return (
		<div>
			<h1 className={title()}>Recipes</h1>
			<h2>Mac & Cheese</h2>
			<p>How to make mac and cheese</p>

			<img
				className="rounded-md max-w-screen-sm mb-2"
				src="https://www.seriouseats.com/thmb/_WO9JEI2V2i2bFBqfiPVwHbLvg0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20241107-SEA-The-Food-Labs-Ultra-Gooey-Stovetop-Mac-and-Cheese-Recipe-MorganHuntGlaze-2-16a276ff0ce34f7e988b0b74c37cd229.jpg"
			/>

			<h3 className=" text-3l font-bold">Ingredients:</h3>
			<ul className=" list-disc ml-2 mb-4">
				<li>1 pound elbow macaroni</li>
				<li>1/2 cup (1 stick) unsalted butter</li>
				<li>1/2 cup all-purpose flour</li>
				<li>3 cups whole milk</li>
				<li>1 teaspoon salt</li>
				<li>1/2 teaspoon black pepper</li>
				<li>Pinch of nutmeg (optional)</li>
				<li>
					4 cups shredded cheddar cheese (sharp or mild, or a mix)
				</li>
				<li>
					1 cup shredded Monterey Jack cheese (optional, for extra
					meltiness)
				</li>
				<li>Breadcrumbs (optional, for topping)</li>
			</ul>

			<h3 className=" text-3l font-bold">Instructions:</h3>
			<ul className=" list-disc ml-2">
				<li>
					Bring a large pot of salted water to a boil. Add the
					macaroni and cook according to package directions until al
					dente. Drain well.
				</li>
				<li>
					While the pasta is cooking, melt the butter in a large
					saucepan over medium heat. Whisk in the flour until smooth
					and cook for 1 minute, stirring constantly (this is your
					roux).
				</li>
				<li>
					Gradually whisk in the milk until the mixture is smooth.
					Bring to a simmer over medium heat, stirring constantly,
					until the sauce thickens.
				</li>
				<li>
					Remove the saucepan from the heat and stir in the salt,
					pepper, and nutmeg (if using).
				</li>
				<li>
					Add the shredded cheddar cheese and Monterey Jack cheese (if
					using) to the sauce, one handful at a time, stirring until
					each addition is melted and smooth.
				</li>
				<li>
					Add the cooked and drained macaroni to the cheese sauce and
					stir until well coated.
				</li>
				<li>
					(Optional) For a baked mac and cheese: Preheat your oven to
					375°F (190°C). Transfer the mac and cheese to a greased
					baking dish. Sprinkle breadcrumbs over the top if desired.
					Bake for 20-25 minutes, or until golden brown and bubbly.
				</li>
				<li>Serve hot and enjoy!</li>
			</ul>
		</div>
	);
}
