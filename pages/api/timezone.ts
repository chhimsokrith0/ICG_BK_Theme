import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Function to fetch timezone with retries and a fallback API
const fetchTimezone = async (attempts = 3): Promise<string> => {
    const PRIMARY_API = "https://www.timeapi.io/api/Time/current/zone?timeZone=UTC"; // More stable API
    const FALLBACK_API = "https://worldtimeapi.org/api/ip";

    for (let i = 0; i < attempts; i++) {
        try {
            const response = await axios.get(PRIMARY_API, { timeout: 15000 });
            if (response.data.timeZone) return response.data.timeZone; // `timeZone` key in timeapi.io
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.error(`Attempt ${i + 1} failed (Primary API):`, errorMessage);
            if (i === attempts - 1) break; // Last attempt, proceed to fallback
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1s before retrying
        }
    }

    // If primary API fails, try the fallback API
    try {
        console.warn("Switching to fallback API...");
        const response = await axios.get(FALLBACK_API, { timeout: 15000 });
        return response.data.timezone; // `timezone` key in worldtimeapi.org
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Final error (Fallback API):", errorMessage);
        throw new Error("Failed to fetch timezone after multiple attempts");
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const timezone = await fetchTimezone();
        res.status(200).json({ timezone });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Final error fetching timezone:", errorMessage);

        // Fallback to browser timezone
        const fallbackTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        res.status(200).json({ timezone: fallbackTimezone });
    }
}
