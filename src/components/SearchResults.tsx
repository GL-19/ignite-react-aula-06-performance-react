import { ProductItem } from "./ProductItem";

type ProductData = {
	id: number;
	price: number;
	title: string;
};

interface SearchResultsProps {
	results: ProductData[];
}

export function SearchResults({ results }: SearchResultsProps) {
	return (
		<div>
			{results.map((product) => {
				return <ProductItem product={product} key={product.id} />;
			})}
		</div>
	);
}
