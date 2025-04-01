"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { BrainIcon, LightbulbIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { useState } from "react";

export interface RandomFactResponse {
	id: string;
	text: string;
	source: string;
	source_url: string;
	language: string;
	permalink: string;
}

export default function AboutMePage() {
	const [facts, setFacts] = useState<RandomFactResponse[]>([]);
	const [loading, setLoading] = useState(false);

	async function getFunFact(): Promise<RandomFactResponse> {
		return fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
			.then(async (res) => {
				let data: RandomFactResponse = await res.json();
				return data;
			})
			.catch((err) => {
				throw err;
			});
	}

	async function onGetFunFact() {
		setLoading(true);

		const newFact = await getFunFact();
		setFacts([newFact, ...facts]);

		setLoading(false);
	}

	return (
		<div className=" flex flex-col gap-4">
			<h1 className={`${title()} text-5xl`}>About Me </h1>

			<p className=" text-lg -mt-3"> Im Alex </p>

			<h1 className="text-4xl font-semibold"> Hobbies </h1>

			<div className="flex flex-col sm:flex-row gap-4">
				<div className="basis-1/2">
					<h2 className=" text-2xl  mb-2">Swimming</h2>
					<img
						className="rounded-md"
						src="https://i0.wp.com/blog.myswimpro.com/wp-content/uploads/2023/10/freestyle-stroke-breathing-technique-myswimpro.jpeg?fit=1500%2C1000&ssl=1"
					/>
					<p className="">Im a big fan of swimming</p>
					<a
						className=" text-blue-400 underline"
						href="https://www.seattle.gov/parks/pools/swim-seattle"
						target="_blank"
					>
						Click here to learn how to swim
					</a>
				</div>

				<div className="basis-1/2">
					<h2 className=" text-2xl mb-2">Block Blast</h2>
					<img
						className="rounded-md "
						src="https://m.media-amazon.com/images/I/71QM+2QaLEL.png"
					/>
					<p className="">I also like block blast</p>
					<a
						className=" text-blue-400 underline"
						href="https://play.google.com/store/apps/details?id=com.block.juggle&hl=en_US"
						target="_blank"
					>
						Click here to download block blast
					</a>
				</div>
			</div>

			<h1 className="text-4xl font-semibold"> Fun Facts </h1>
			<div className="flex flex-col sm:flex-row ">
				<div className=" basis-1/3 mb-2 flex gap-2">
					<Button
						isLoading={loading}
						onPress={onGetFunFact}
						endContent={<LightbulbIcon />}
					>
						Get Random Fun Fact
					</Button>
					<Button color="danger" isIconOnly onPress={() => setFacts([])}>
						<TrashIcon />
					</Button>
				</div>
				<div className="basis-2/3 flex flex-col">
					{facts.map((fact, i) => (
						<div
							key={i}
							className={`p-2 border-b-1 border-divider w-full rounded-md ${i == 0 ? "font-bold bg-content1 text-lg" : ""}`}
						>
							<p>{fact.text} </p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
