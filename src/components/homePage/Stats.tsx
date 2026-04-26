export default function Stats() {
    return (
        <section className="py-16 text-center">
            <div className="grid grid-cols-3 max-w-4xl mx-auto text-lg font-semibold">
                <div>
                    <p className="text-3xl">2k+</p>
                    <p className="text-gray-500">Users</p>
                </div>
                <div>
                    <p className="text-3xl">99.9%</p>
                    <p className="text-gray-500">Uptime</p>
                </div>
                <div>
                    <p className="text-3xl">5+</p>
                    <p className="text-gray-500">Companies</p>
                </div>
            </div>
        </section>
    )
}