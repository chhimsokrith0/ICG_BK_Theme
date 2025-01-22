const ActionButtons = () => {
    return (
        <div className="flex justify-left space-x-4 mt-4">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-500">
                Submit
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">
                Upload Receipt
            </button>
        </div>
    );
};

export default ActionButtons;
