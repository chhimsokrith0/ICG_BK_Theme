import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get("https://worldtimeapi.org/api/ip", {
            timeout: 10000, // 10-second timeout
        });
        const { timezone } = response.data;
        res.status(200).json({ timezone });
    } catch (error) {
        console.error("Failed to fetch timezone:", error instanceof Error ? error.message : "Unknown error");

        // Fallback to the browser's timezone
        const fallbackTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        res.status(200).json({ timezone: fallbackTimezone });
    }
}
