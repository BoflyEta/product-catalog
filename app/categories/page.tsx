export default async function CategoriesPage() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();

    return (
        <div className="flex flex-col gap-3">
            {categories.map((c: string) => (
                <a
                    key={c}
                    href={`/categories/${c}`}
                    className="border p-3 rounded bg-gray-100"
                >
                    {c.toUpperCase()}
                </a>
            ))}
        </div>
    );
}
