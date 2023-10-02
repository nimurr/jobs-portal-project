
export default function HomeCard({ data }) {

    return (
        <div className="flex items-center gap-5 mb-10 justify-between bg-blue-100 p-4 rounded">
            <div className="w-5/12">
                <img className="h-full w-full" src={data.url} alt="" />
            </div>
            <div className="w-7/12">
                <div className="flex items-center gap-2">
                    <img className="w-10 rounded-full h-10" src="https://i.ibb.co/KbsC2db/programminghero-logo.jpg" alt="img not found" />
                    <h2 className="font-semibold">Programming Hero .</h2>
                </div>
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="my-4">{data.description}</p>
                <ul className="flex gap-4">
                    <li className="py-1 px-2 bg-blue-300 rounded">Html</li>
                    <li className="py-1 px-2 bg-blue-300 rounded">css</li>
                    <li className="py-1 px-2 bg-blue-300 rounded">js</li>
                    <li className="py-1 px-2 bg-blue-300 rounded">React</li>
                </ul>
                <button className="my-4 bg-blue-600 p-2 text-white rounded font-semibold">Select Jobs</button>

            </div>
        </div>
    )
}
