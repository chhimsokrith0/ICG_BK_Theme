// data.ts
import { VideoProps, Match } from "@/types/index";

export const partnerVideos: VideoProps[] = [
    {
        videoSrc: "https://streamable.com/e/v5hjlr?enablejsapi=1&autoplay=1&muted=1",
        imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490288/videoImage20240330143617123_uomlzl.png",
        title: "Official Sponsor of the HSBC BWF World Tour Finals 2024",
    },
    {
        videoSrc: "https://streamable.com/e/we43qt?enablejsapi=1&autoplay=1&muted=1",
        imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490286/videoImage20231012175245946_kj117r.png",
        title: "BK8 Brand Ambassador Philippines 2023 - 2024",
    },
    {
        videoSrc: "https://streamable.com/e/x2nujf?enablejsapi=1&autoplay=1&muted=1",
        imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490063/videoImage20240626095805049_bs1sfw.png",
        title: "Official Partner I Burnley F.C.",
    },
];

export const getMatches  = (t: (key: string) => string) => [
    {
        type: t('football'),
        matches: [
            {
                id: 0,
                league: "Israel - Liga Bet",
                time: "10/01 - 4:45pm",
                homeTeam: "Hapoel Tirat HaCarmel",
                awayTeam: "Hapoel Yafia",
                homeHDP: "-1.25",
                awayHDP: "1.25",
                homeOdds: "0.92",
                awayOdds: "0.76",
            },
            {
                id: 0,
                league: "Israel - Liga Bet",
                time: "10/01 - 4:45pm",
                homeTeam: "Hapoel Tirat HaCarmel",
                awayTeam: "Hapoel Yafia",
                homeHDP: "-1.25",
                awayHDP: "1.25",
                homeOdds: "0.92",
                awayOdds: "0.76",
            },
            {
                id: 1,
                league: "Malaysia - Liga A1 Semi Pro",
                time: "10/01 - 4:45pm",
                homeTeam: "Bunga Raya",
                awayTeam: "KL Rovers",
                homeHDP: "-1.75",
                awayHDP: "1.75",
                homeOdds: "0.84",
                awayOdds: "0.84",
            },
            {
                id: 2,
                league: "Algeria - League Women",
                time: "10/01 - 5:00pm",
                homeTeam: "AS Oran Centre [W]",
                awayTeam: "AR Guelma [W]",
                homeHDP: "0",
                awayHDP: "0",
                homeOdds: "0.82",
                awayOdds: "0.86",
            },
            {
                id: 2,
                league: "Algeria - League Women",
                time: "10/01 - 5:00pm",
                homeTeam: "AS Oran Centre [W]",
                awayTeam: "AR Guelma [W]",
                homeHDP: "0",
                awayHDP: "0",
                homeOdds: "0.82",
                awayOdds: "0.86",
            },
            {
                id: 2,
                league: "Algeria - League Women",
                time: "10/01 - 5:00pm",
                homeTeam: "AS Oran Centre [W]",
                awayTeam: "AR Guelma [W]",
                homeHDP: "0",
                awayHDP: "0",
                homeOdds: "0.82",
                awayOdds: "0.86",
            },
        ],
    },
    {
        type: t('basketball'),
        matches: [
            {
                id: 1,
                league: "NBA",
                time: "11/01 - 8:00pm",
                homeTeam: "Los Angeles Lakers",
                awayTeam: "Golden State Warriors",
                homeHDP: "-5.5",
                awayHDP: "5.5",
                homeOdds: "1.80",
                awayOdds: "2.10",
            },
            {
                id: 2,
                league: "Algeria - League Women",
                time: "10/01 - 5:00pm",
                homeTeam: "AS Oran Centre [W]",
                awayTeam: "AR Guelma [W]",
                homeHDP: "0",
                awayHDP: "0",
                homeOdds: "0.82",
                awayOdds: "0.86",
            },
            {
                id: 2,
                league: "Algeria - League Women",
                time: "10/01 - 5:00pm",
                homeTeam: "AS Oran Centre [W]",
                awayTeam: "AR Guelma [W]",
                homeHDP: "0",
                awayHDP: "0",
                homeOdds: "0.82",
                awayOdds: "0.86",
            },
        ],
    },
];
