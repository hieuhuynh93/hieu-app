const Loader = () => {
    return (
        <div className="mt-5 animate-pulse">
            <p className="h-4 bg-gray-200 rounded-full" style={{ width: '40%' }}></p>
            <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            </ul>
        </div>
    )
}

export default Loader;