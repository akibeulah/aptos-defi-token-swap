import { APP_NAME } from "../../utils/strings.ts";
import { getRandomPastelColor } from "../../utils/helpers.ts";

const Home = () => {
    const pastelColors = Array.from({ length: 100 }, () => getRandomPastelColor());

    return (
        <>
            <main className="container mx-auto px-4 md:px-8 py-8">
                <div className="relative">
                    <div className="absolute z-0 w-full h-full">
                        {pastelColors.map((color, index) => (
                            <div
                                key={index}
                                className="absolute w-10 h-10 rounded-full"
                                style={{
                                    backgroundColor: color,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `move-${index} 10s infinite linear`,
                                }}
                            />
                        ))}
                    </div>
                    <section className="mb-12 flex flex-row items-center relative z-10">
                        <div className="w-1/2">
                            <h2 className="text-2xl font-bold mb-4d ">Welcome to {APP_NAME}</h2>
                            <p className="text-lg text-gray-600">{APP_NAME} is a user-friendly web
                                application that allows you to swap tokens effortlessly. Connect your wallet, select
                                tokens,
                                specify amounts, and perform swap transactions with ease.</p>
                        </div>
                        <div className="flex justify-center mb-4 w-1/2">
                            <img
                                src="https://images.pexels.com/photos/9469264/pexels-photo-9469264.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Man holding up a coin" className="w-full max-w-[400px] rounded-md shadow-lg" />
                        </div>
                    </section>
                </div>

                <section className="mb-12 bg-primary py-12 px-12">
                    <h2 className="text-4xl font-bold mb-4 text-center text-white">Why {APP_NAME}?</h2>
                    <div className="flex flex-wrap text-white font-bold text-center text-lg">
                        <span className={"w-1/3 bg-[#8fc9c9] p-8 aspect-square flex justify-center items-center"}>Effortlessly exchange tokens from one blockchain to another</span>
                        <span className={"w-1/3 bg-[#c98fa1] p-8 aspect-square flex justify-center items-center"}>Benefit from secure and efficient swap transactions</span>
                        <span className={"w-1/3 bg-[#8fc9a5] p-8 aspect-square flex justify-center items-center"}>Access a user-friendly interface for seamless token management</span>
                    </div>
                </section>

                <section className="mb-12 p-12">
                    <h2 className="text-4xl font-bold mb-4 text-center">How It Works</h2>
                    <div className="flex flex-row text-center text-white font-bold text-lg">
                        <span className={"w-1/2 bg-[#E0D685] p-8 aspect-square flex justify-center items-center"}>Connect your wallet securely to the platform</span>
                        <span className={"w-1/2 bg-[#FFB980] p-8 aspect-square flex justify-center items-center"}>Select the tokens you want to swap and specify the amounts</span>
                        <span className={"w-1/2 bg-[#80C9A3] p-8 aspect-square flex justify-center items-center"}>Review and confirm the transaction details</span>
                        <span className={"w-1/2 bg-[#80A9E8] p-8 aspect-square flex justify-center items-center"}>Complete the swap transaction with a single click</span>
                    </div>
                </section>

                <style>
                    {pastelColors.map((_color, index) => (
                        `@keyframes move-${index} {
                            0% { transform: translate(0, 0); }
                            50% { transform: translate(${Math.random() * 100}%, ${Math.random() * 100}%); }
                            100% { transform: translate(0, 0); }
                        }`
                    ))}
                </style>
            </main>
        </>
    )
}

export default Home
