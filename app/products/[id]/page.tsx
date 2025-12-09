export default async function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = await params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    return (
        <div className="flex gap-6">
            <img src={product.image} alt={product.title} className="w-64" />

            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-xl text-green-600 font-bold">${product.price}</p>
                <p className="mt-4">{product.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                    Category: {product.category}
                </p>
            </div>
        </div>
    );
}
