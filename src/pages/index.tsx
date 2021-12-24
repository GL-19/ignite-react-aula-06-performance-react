import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";
import { Product } from "../types/Product";

type Results = {
	data: Product[];
	totalPrice: number;
};

const Home: NextPage = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<Results>({
		data: [],
		totalPrice: 0,
	});

	async function handleSearch(event: FormEvent) {
		event.preventDefault();

		if (!search.trim()) {
			return;
		}

		const response = await fetch(`http://localhost:3333/products?q=${search}`);
		const data = await response.json();

		const formatter = new Intl.NumberFormat("pt-br", {
			style: "currency",
			currency: "BRL",
		});

		const products: Product[] = data.map((product) => {
			return {
				...product,
				priceFormatted: formatter.format(product.price),
			};
		});

		const totalPrice = data.reduce((total, product) => {
			return total + product.price;
		}, 0);

		setResults({ data: products, totalPrice });
	}

	const addToWishList = useCallback(async (id: number) => {
		console.log(id);
	}, []);

	return (
		<div>
			<h1>Search</h1>

			<form onSubmit={handleSearch}>
				<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
				<button type="submit">Buscar</button>
			</form>

			<SearchResults
				results={results.data}
				totalPrice={results.totalPrice}
				onAddToWishList={addToWishList}
			/>
		</div>
	);
};

export default Home;
