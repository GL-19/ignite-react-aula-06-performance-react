import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type ProductData = {
	id: number;
	price: number;
	title: string;
};

interface SearchResultsProps {
	results: ProductData[];
	onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
	const totalPrice = useMemo(() => {
		return results.reduce((total, product) => {
			return total + product.price;
		}, 0);
	}, [results]);

	return (
		<div>
			<h2>Valor total: R$ {totalPrice}</h2>

			{results.map((product) => {
				return (
					<ProductItem
						product={product}
						key={product.id}
						onAddToWishList={onAddToWishList}
					/>
				);
			})}
		</div>
	);
}
