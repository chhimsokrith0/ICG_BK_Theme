import React from "react";

const CashOutTool = () => {
    return (
        <div className="max-w-5xl mx-auto text-center py-12">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Sports Betting Cash Out Tool</h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                Cash Out is a popular feature among sports bettors. Essentially, this feature gives bettors the opportunity to either
                <br />
                (1) profit partially from a wager before the event has ended or (2) get back some money if the results seem to be going against your bet.
            </p>

            {/* Benefits */}
            <p className="text-gray-600 text-md mt-4 max-w-3xl mx-auto">
                This feature is beneficial to those who are not confident in their live bet and want to limit the risk of losing the entire bet.
                <br />
                Typically, people choose to cash out before the final results for two reasons:
            </p>

            {/* List of Benefits */}
            <ul className="text-gray-700 text-md mt-4 max-w-3xl mx-auto list-disc list-inside">
                <li>To take partial winnings on wagers that started good but seem to be leaning towards a loss.</li>
                <li>To cut losses on a losing bet and take back some money instead of losing the entire amount.</li>
            </ul>

            {/* Final Statement */}
            <p className="text-gray-600 text-md mt-6 max-w-3xl mx-auto">
                Sometimes it is better to take whatever is available while you still can on a wager that doesn't seem to be in your favor.
                While Cash Out has been an available feature on most reputable online gaming platforms, BK8 is trying to do more than simply
                offering the Cash Out option by integrating the feature into the gameplays.
                <br />
                As a result, making it more convenient for bettors to have fun safely.
            </p>
        </div>
    );
};

export default CashOutTool;
