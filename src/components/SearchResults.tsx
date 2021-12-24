import { Product } from "../types/Product";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
	results: Product[];
	totalPrice: number;
	onAddToWishList: (id: number) => void;
}

export function SearchResults({
	results,
	totalPrice,
	onAddToWishList,
}: SearchResultsProps) {
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
