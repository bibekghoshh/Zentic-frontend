export default function Hero() {
    return (
        <section className="text-center py-24 px-6">
            <h1 className="text-5xl font-bold leading-tight">
                Manage Your Workforce <br />
                <span className="text-blue-600">Smarter & Faster</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Simplify employee scheduling, compliance, payroll, and collaboration — all in one powerful platform.
            </p>

            <div className="mt-8 flex justify-center gap-4">
                <a
                    href="/register"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                >
                    Get Started Free
                </a>
                <a
                    href="/login"
                    className="border px-6 py-3 rounded-lg font-medium"
                >
                    Login
                </a>
            </div>
        </section>
    );
}