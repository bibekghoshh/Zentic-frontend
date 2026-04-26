export default function Hero() {
    return (
        <section className="relative text-center py-32 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 blur-3xl opacity-50" />

            <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Workforce Management <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Reimagined
                </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Scheduling, compliance, and collaboration — built for modern teams.
            </p>

            <div className="mt-8 flex justify-center gap-4">
                <a className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition">
                    Get Started Free
                </a>
                <a className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                    Live Demo
                </a>
            </div>

        </section>
    );
}