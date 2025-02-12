// types.ts
export interface VideoProps {
    videoSrc: string;
    imgSrc: string;
    title: string;
}

export interface Match {
    id: number;
    league: string;
    time: string;
    homeTeam: string;
    awayTeam: string;
    homeHDP: string;
    awayHDP: string;
    homeOdds: string;
    awayOdds: string;
}

export interface TeamInfoProps {
    label: string;
    team: string;
    logo: string;
}
