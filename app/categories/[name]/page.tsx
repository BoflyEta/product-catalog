import { Product } from "@/types/types";

export default async function CategoryDetail({ params }: { params: { name: string } }) {
    const { name } = await params;
    const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
    );
    const products = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Category: {name.toUpperCase()}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((p: Product) => (
                    <a
                        href={`/products/${p.id}`}
                        key={p.id}
                        className="border p-4 rounded shadow"
                    >
                        <img src={p.image} alt={p.title} className="h-40 mx-auto" />
                        <h2 className="font-semibold text-sm mt-2">{p.title}</h2>
                        <p className="text-green-600 font-bold">${p.price}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
