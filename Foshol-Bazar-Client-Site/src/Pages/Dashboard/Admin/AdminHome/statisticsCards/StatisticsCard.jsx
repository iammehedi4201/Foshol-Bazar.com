import React from 'react';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const StatisticsCard = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: adminStats = [], isLoading: adminStatsLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const response = await axiosSecure.get('admin-stats')
            return response.data
        }
    })

    return (
        <section>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg  sm:flex dark:border-gray-700 sm:p-6 dark:bg-[#1d1c22] shadow-md shadow-cyan-900 hover:shadow-2xl ">
                    <div className='mx-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <g clip-path="url(#clip0_4_196)">
                                <path d="M46.5906 40.9092H38.6362C33.6236 40.9092 29.5454 36.831 29.5454 31.8184C29.5454 26.8059 33.6236 22.7277 38.6362 22.7277H46.5906C47.2187 22.7277 47.727 22.2195 47.727 21.5913V18.1823C47.727 15.7994 45.8786 13.8615 43.5433 13.6735L37.0172 2.27457C36.4124 1.22033 35.4358 0.466825 34.2673 0.15394C33.1042 -0.156815 31.8881 0.00639266 30.8471 0.612242L8.47503 13.6369H4.5458C2.03899 13.6369 0.000383377 15.6754 0.000383377 18.1823V45.4546C0.000383377 47.9614 2.03888 50 4.5458 50H43.1816C45.6884 50 47.727 47.9615 47.727 45.4546V42.0456C47.727 41.4174 47.2187 40.9092 46.5906 40.9092ZM38.4265 9.3121L40.9025 13.6369H30.9981L38.4265 9.3121ZM12.992 13.6369L31.9912 2.57638C32.505 2.27564 33.1053 2.19574 33.6791 2.34893C34.2595 2.50426 34.7433 2.87936 35.0441 3.40424L35.0464 3.4084L17.4782 13.6369H12.992Z" fill="white" />
                                <path d="M46.5905 25.0004H38.6361C34.8764 25.0004 31.818 28.0587 31.818 31.8184C31.818 35.5782 34.8764 38.6365 38.6361 38.6365H46.5905C48.4704 38.6365 49.9996 37.1074 49.9996 35.2275V28.4094C49.9996 26.5295 48.4704 25.0004 46.5905 25.0004ZM38.6361 34.0911C37.3833 34.0911 36.3634 33.0713 36.3634 31.8184C36.3634 30.5656 37.3833 29.5458 38.6361 29.5458C39.8889 29.5458 40.9087 30.5656 40.9087 31.8184C40.9088 33.0713 39.889 34.0911 38.6361 34.0911Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_196">
                                    <rect width="50" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-gray-500 dark:text-gray-300 text-xl">Revenue</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{adminStats?.revenus}</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                </svg> 3,8% </span> Since last month
                        </p>
                    </div>
                    <div className="w-full" id="week-signups-chart" style={{ minHeight: '155px' }}>
                        <div id="apexchartsekzq67lz" className="apexcharts-canvas apexchartsekzq67lz apexcharts-theme-light" style={{ width: '236px', height: '140px' }}>
                            <svg id="SvgjsSvg1262" width={236} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev" className="apexcharts-svg" data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                <g id="SvgjsG1264" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                                    <defs id="SvgjsDefs1263">
                                        <linearGradient id="SvgjsLinearGradient1268" x1={0} y1={0} x2={0} y2={1}>
                                            <stop id="SvgjsStop1269" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} />
                                            <stop id="SvgjsStop1270" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                            <stop id="SvgjsStop1271" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                        </linearGradient>
                                        <clipPath id="gridRectMaskekzq67lz">
                                            <rect id="SvgjsRect1273" width={218} height={78} x={-2} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                        <clipPath id="forecastMaskekzq67lz" />
                                        <clipPath id="nonForecastMaskekzq67lz" />
                                        <clipPath id="gridRectMarkerMaskekzq67lz">
                                            <rect id="SvgjsRect1274" width={218} height={82} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                    </defs>
                                    <rect id="SvgjsRect1272" width="7.642857142857143" height={78} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1268)" className="apexcharts-xcrosshairs" y2={78} filter="none" fillOpacity="0.9" />
                                    <g id="SvgjsG1300" className="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG1301" className="apexcharts-xaxis-texts-g" transform="translate(0, 4)" />
                                    </g>
                                    <g id="SvgjsG1310" className="apexcharts-grid">
                                        <g id="SvgjsG1311" className="apexcharts-gridlines-horizontal" style={{ display: 'none' }}>
                                            <line id="SvgjsLine1313" x1={0} y1={0} x2={214} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1314" x1={0} y1="15.6" x2={214} y2="15.6" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1315" x1={0} y1="31.2" x2={214} y2="31.2" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1316" x1={0} y1="46.8" x2={214} y2="46.8" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1317" x1={0} y1="62.4" x2={214} y2="62.4" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1318" x1={0} y1={78} x2={214} y2={78} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                        </g>
                                        <g id="SvgjsG1312" className="apexcharts-gridlines-vertical" style={{ display: 'none' }} />
                                        <line id="SvgjsLine1320" x1={0} y1={78} x2={214} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                        <line id="SvgjsLine1319" x1={0} y1={1} x2={0} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                    </g>
                                    <g id="SvgjsG1275" className="apexcharts-bar-series apexcharts-plot-series">
                                        <g id="SvgjsG1276" className="apexcharts-series" rel={1} seriesname="Users" data: realindex={0}>
                                            <rect id="SvgjsRect1279" width="7.642857142857143" height={78} x="11.464285714285715" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1281" d="M11.464285714285715 78L11.464285714285715 46.315999999999995C11.464285714285715 44.315999999999995 12.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L16.107142857142858 43.315999999999995C18.107142857142858 43.315999999999995 19.107142857142858 44.315999999999995 19.107142857142858 46.315999999999995L19.107142857142858 46.315999999999995L19.107142857142858 78L19.107142857142858 78C19.107142857142858 78 11.464285714285715 78 11.464285714285715 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 11.464285714285715 78L 11.464285714285715 46.315999999999995Q 11.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L 16.107142857142858 43.315999999999995Q 19.107142857142858 43.315999999999995 19.107142857142858 46.315999999999995L 19.107142857142858 46.315999999999995L 19.107142857142858 78L 19.107142857142858 78z" pathfrom="M 11.464285714285715 78L 11.464285714285715 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 11.464285714285715 78" cy="43.315999999999995" cx="42.03571428571429" j={0} val={1334} barheight="34.684000000000005" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1282" width="7.642857142857143" height={78} x="42.03571428571429" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1284" d="M42.03571428571429 78L42.03571428571429 17.689999999999998C42.03571428571429 15.689999999999998 43.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L46.67857142857144 14.689999999999998C48.67857142857144 14.689999999999998 49.678571428571445 15.689999999999998 49.67857142857144 17.689999999999998L49.67857142857144 17.689999999999998L49.67857142857144 78L49.67857142857144 78C49.67857142857144 78 42.03571428571429 78 42.03571428571429 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 42.03571428571429 78L 42.03571428571429 17.689999999999998Q 42.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L 46.67857142857144 14.689999999999998Q 49.67857142857144 14.689999999999998 49.67857142857144 17.689999999999998L 49.67857142857144 17.689999999999998L 49.67857142857144 78L 49.67857142857144 78z" pathfrom="M 42.03571428571429 78L 42.03571428571429 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 42.03571428571429 78" cy="14.689999999999998" cx="72.60714285714286" j={1} val={2435} barheight="63.31" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1285" width="7.642857142857143" height={78} x="72.60714285714286" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1287" d="M72.60714285714286 78L72.60714285714286 35.422C72.60714285714286 33.422 73.60714285714286 32.422 75.60714285714286 32.422L77.25 32.422C79.25 32.422 80.25 33.422 80.25 35.422L80.25 35.422L80.25 78L80.25 78C80.25 78 72.60714285714286 78 72.60714285714286 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 72.60714285714286 78L 72.60714285714286 35.422Q 72.60714285714286 32.422 75.60714285714286 32.422L 77.25 32.422Q 80.25 32.422 80.25 35.422L 80.25 35.422L 80.25 78L 80.25 78z" pathfrom="M 72.60714285714286 78L 72.60714285714286 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 72.60714285714286 78" cy="32.422" cx="103.17857142857143" j={2} val={1753} barheight="45.578" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1288" width="7.642857142857143" height={78} x="103.17857142857143" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1290" d="M103.17857142857143 78L103.17857142857143 46.472C103.17857142857144 44.472 104.17857142857144 43.472 106.17857142857143 43.472L107.82142857142857 43.472C109.82142857142857 43.472 110.82142857142857 44.472 110.82142857142857 46.472L110.82142857142857 46.472L110.82142857142857 78L110.82142857142857 78C110.82142857142857 78 103.17857142857143 78 103.17857142857143 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 103.17857142857143 78L 103.17857142857143 46.472Q 103.17857142857143 43.472 106.17857142857143 43.472L 107.82142857142857 43.472Q 110.82142857142857 43.472 110.82142857142857 46.472L 110.82142857142857 46.472L 110.82142857142857 78L 110.82142857142857 78z" pathfrom="M 103.17857142857143 78L 103.17857142857143 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 103.17857142857143 78" cy="43.472" cx="133.75" j={3} val={1328} barheight="34.528" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1291" width="7.642857142857143" height={78} x="133.75" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1293" d="M133.75 78L133.75 50.97C133.75 48.97 134.75 47.97 136.75 47.97L138.39285714285714 47.97C140.39285714285714 47.97 141.39285714285714 48.97 141.39285714285714 50.97L141.39285714285714 50.97L141.39285714285714 78L141.39285714285714 78C141.39285714285714 78 133.75 78 133.75 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 133.75 78L 133.75 50.97Q 133.75 47.97 136.75 47.97L 138.39285714285714 47.97Q 141.39285714285714 47.97 141.39285714285714 50.97L 141.39285714285714 50.97L 141.39285714285714 78L 141.39285714285714 78z" pathfrom="M 133.75 78L 133.75 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 133.75 78" cy="47.97" cx="164.32142857142858" j={4} val={1155} barheight="30.03" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1294" width="7.642857142857143" height={78} x="164.32142857142858" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1296" d="M164.32142857142858 78L164.32142857142858 38.568C164.32142857142858 36.568 165.32142857142858 35.568 167.32142857142858 35.568L168.96428571428572 35.568C170.96428571428572 35.568 171.96428571428572 36.568 171.96428571428572 38.568L171.96428571428572 38.568L171.96428571428572 78L171.96428571428572 78C171.96428571428572 78 164.32142857142858 78 164.32142857142858 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 164.32142857142858 78L 164.32142857142858 38.568Q 164.32142857142858 35.568 167.32142857142858 35.568L 168.96428571428572 35.568Q 171.96428571428572 35.568 171.96428571428572 38.568L 171.96428571428572 38.568L 171.96428571428572 78L 171.96428571428572 78z" pathfrom="M 164.32142857142858 78L 164.32142857142858 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 164.32142857142858 78" cy="35.568" cx="194.89285714285717" j={5} val={1632} barheight="42.432" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1297" width="7.642857142857143" height={78} x="194.89285714285717" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1299" d="M194.89285714285717 78L194.89285714285717 46.263999999999996C194.89285714285717 44.263999999999996 195.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L199.5357142857143 43.263999999999996C201.53571428571433 43.263999999999996 202.53571428571433 44.263999999999996 202.5357142857143 46.263999999999996L202.5357142857143 46.263999999999996L202.5357142857143 78L202.5357142857143 78C202.5357142857143 78 194.89285714285717 78 194.89285714285717 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 194.89285714285717 78L 194.89285714285717 46.263999999999996Q 194.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L 199.5357142857143 43.263999999999996Q 202.5357142857143 43.263999999999996 202.5357142857143 46.263999999999996L 202.5357142857143 46.263999999999996L 202.5357142857143 78L 202.5357142857143 78z" pathfrom="M 194.89285714285717 78L 194.89285714285717 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 194.89285714285717 78" cy="43.263999999999996" cx="225.46428571428575" j={6} val={1336} barheight="34.736000000000004" barwidth="7.642857142857143" />
                                            <g id="SvgjsG1278" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                <g id="SvgjsG1280" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1283" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1286" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1289" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1292" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1295" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1298" classname="apexcharts-bar-goals-groups" />
                                            </g>
                                        </g>
                                        <g id="SvgjsG1277" className="apexcharts-datalabels" data: realindex={0} />
                                    </g>
                                    <line id="SvgjsLine1321" x1={0} y1={0} x2={214} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" />
                                    <line id="SvgjsLine1322" x1={0} y1={0} x2={214} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" />
                                    <g id="SvgjsG1323" className="apexcharts-yaxis-annotations" />
                                    <g id="SvgjsG1324" className="apexcharts-xaxis-annotations" />
                                    <g id="SvgjsG1325" className="apexcharts-point-annotations" />
                                </g>
                                <g id="SvgjsG1309" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" />
                                <g id="SvgjsG1265" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: '70px' }} />
                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
                                <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(26, 86, 219)' }} />
                                    <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                        <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div>
                                        <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div>
                                        <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg  sm:flex dark:border-gray-700 sm:p-6 dark:bg-[#1d1c22] shadow-md shadow-cyan-900 hover:shadow-2xl">
                    <div className='mx-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                            <g clip-path="url(#clip0_4_255)">
                                <path d="M25 20.5178C29.6923 20.5178 33.4961 16.7139 33.4961 12.0217C33.4961 7.32941 29.6923 3.52558 25 3.52558C20.3077 3.52558 16.5039 7.32941 16.5039 12.0217C16.5039 16.7139 20.3077 20.5178 25 20.5178Z" fill="white" />
                                <path d="M42.1875 20.5177C45.1539 20.5177 47.5586 18.113 47.5586 15.1466C47.5586 12.1802 45.1539 9.77548 42.1875 9.77548C39.2211 9.77548 36.8164 12.1802 36.8164 15.1466C36.8164 18.113 39.2211 20.5177 42.1875 20.5177Z" fill="white" />
                                <path d="M7.8125 20.5177C10.7789 20.5177 13.1836 18.113 13.1836 15.1466C13.1836 12.1802 10.7789 9.77548 7.8125 9.77548C4.84613 9.77548 2.44141 12.1802 2.44141 15.1466C2.44141 18.113 4.84613 20.5177 7.8125 20.5177Z" fill="white" />
                                <path d="M13.1045 25.341C10.9902 23.6088 9.07549 23.8381 6.63086 23.8381C2.97461 23.8381 0 26.7951 0 30.4289V41.0939C0 42.6721 1.28809 43.9553 2.87207 43.9553C9.71055 43.9553 8.88672 44.079 8.88672 43.6603C8.88672 36.1031 7.9916 30.561 13.1045 25.341Z" fill="white" />
                                <path d="M27.3252 23.877C23.0553 23.5209 19.3439 23.8811 16.1426 26.5235C10.7855 30.8145 11.8164 36.5922 11.8164 43.6602C11.8164 45.5303 13.3379 47.0802 15.2363 47.0802C35.8498 47.0802 36.6702 47.7451 37.8926 45.0382C38.2935 44.1227 38.1836 44.4137 38.1836 35.6563C38.1836 28.7007 32.1609 23.877 27.3252 23.877Z" fill="white" />
                                <path d="M43.3691 23.838C40.9111 23.838 39.0069 23.611 36.8955 25.3409C41.9702 30.5222 41.1133 35.6861 41.1133 43.6602C41.1133 44.0815 40.4294 43.9552 47.0254 43.9552C48.666 43.9552 50 42.6261 50 40.9923V30.4288C50 26.795 47.0254 23.838 43.3691 23.838Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_255">
                                    <rect width="50" height="50" fill="white" transform="translate(0 0.338959)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-300">Users</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{adminStats?.userCount}</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                </svg> 3,4% </span> Since last month
                        </p>
                    </div>
                    <div className="w-full" id="week-signups-chart" style={{ minHeight: '155px' }}>
                        <div id="apexchartsekzq67lz" className="apexcharts-canvas apexchartsekzq67lz apexcharts-theme-light" style={{ width: '236px', height: '140px' }}>
                            <svg id="SvgjsSvg1262" width={236} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev" className="apexcharts-svg" data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                <g id="SvgjsG1264" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                                    <defs id="SvgjsDefs1263">
                                        <linearGradient id="SvgjsLinearGradient1268" x1={0} y1={0} x2={0} y2={1}>
                                            <stop id="SvgjsStop1269" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} />
                                            <stop id="SvgjsStop1270" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                            <stop id="SvgjsStop1271" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                        </linearGradient>
                                        <clipPath id="gridRectMaskekzq67lz">
                                            <rect id="SvgjsRect1273" width={218} height={78} x={-2} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                        <clipPath id="forecastMaskekzq67lz" />
                                        <clipPath id="nonForecastMaskekzq67lz" />
                                        <clipPath id="gridRectMarkerMaskekzq67lz">
                                            <rect id="SvgjsRect1274" width={218} height={82} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                    </defs>
                                    <rect id="SvgjsRect1272" width="7.642857142857143" height={78} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1268)" className="apexcharts-xcrosshairs" y2={78} filter="none" fillOpacity="0.9" />
                                    <g id="SvgjsG1300" className="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG1301" className="apexcharts-xaxis-texts-g" transform="translate(0, 4)" />
                                    </g>
                                    <g id="SvgjsG1310" className="apexcharts-grid">
                                        <g id="SvgjsG1311" className="apexcharts-gridlines-horizontal" style={{ display: 'none' }}>
                                            <line id="SvgjsLine1313" x1={0} y1={0} x2={214} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1314" x1={0} y1="15.6" x2={214} y2="15.6" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1315" x1={0} y1="31.2" x2={214} y2="31.2" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1316" x1={0} y1="46.8" x2={214} y2="46.8" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1317" x1={0} y1="62.4" x2={214} y2="62.4" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1318" x1={0} y1={78} x2={214} y2={78} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                        </g>
                                        <g id="SvgjsG1312" className="apexcharts-gridlines-vertical" style={{ display: 'none' }} />
                                        <line id="SvgjsLine1320" x1={0} y1={78} x2={214} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                        <line id="SvgjsLine1319" x1={0} y1={1} x2={0} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                    </g>
                                    <g id="SvgjsG1275" className="apexcharts-bar-series apexcharts-plot-series">
                                        <g id="SvgjsG1276" className="apexcharts-series" rel={1} seriesname="Users" data: realindex={0}>
                                            <rect id="SvgjsRect1279" width="7.642857142857143" height={78} x="11.464285714285715" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1281" d="M11.464285714285715 78L11.464285714285715 46.315999999999995C11.464285714285715 44.315999999999995 12.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L16.107142857142858 43.315999999999995C18.107142857142858 43.315999999999995 19.107142857142858 44.315999999999995 19.107142857142858 46.315999999999995L19.107142857142858 46.315999999999995L19.107142857142858 78L19.107142857142858 78C19.107142857142858 78 11.464285714285715 78 11.464285714285715 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 11.464285714285715 78L 11.464285714285715 46.315999999999995Q 11.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L 16.107142857142858 43.315999999999995Q 19.107142857142858 43.315999999999995 19.107142857142858 46.315999999999995L 19.107142857142858 46.315999999999995L 19.107142857142858 78L 19.107142857142858 78z" pathfrom="M 11.464285714285715 78L 11.464285714285715 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 11.464285714285715 78" cy="43.315999999999995" cx="42.03571428571429" j={0} val={1334} barheight="34.684000000000005" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1282" width="7.642857142857143" height={78} x="42.03571428571429" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1284" d="M42.03571428571429 78L42.03571428571429 17.689999999999998C42.03571428571429 15.689999999999998 43.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L46.67857142857144 14.689999999999998C48.67857142857144 14.689999999999998 49.678571428571445 15.689999999999998 49.67857142857144 17.689999999999998L49.67857142857144 17.689999999999998L49.67857142857144 78L49.67857142857144 78C49.67857142857144 78 42.03571428571429 78 42.03571428571429 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 42.03571428571429 78L 42.03571428571429 17.689999999999998Q 42.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L 46.67857142857144 14.689999999999998Q 49.67857142857144 14.689999999999998 49.67857142857144 17.689999999999998L 49.67857142857144 17.689999999999998L 49.67857142857144 78L 49.67857142857144 78z" pathfrom="M 42.03571428571429 78L 42.03571428571429 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 42.03571428571429 78" cy="14.689999999999998" cx="72.60714285714286" j={1} val={2435} barheight="63.31" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1285" width="7.642857142857143" height={78} x="72.60714285714286" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1287" d="M72.60714285714286 78L72.60714285714286 35.422C72.60714285714286 33.422 73.60714285714286 32.422 75.60714285714286 32.422L77.25 32.422C79.25 32.422 80.25 33.422 80.25 35.422L80.25 35.422L80.25 78L80.25 78C80.25 78 72.60714285714286 78 72.60714285714286 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 72.60714285714286 78L 72.60714285714286 35.422Q 72.60714285714286 32.422 75.60714285714286 32.422L 77.25 32.422Q 80.25 32.422 80.25 35.422L 80.25 35.422L 80.25 78L 80.25 78z" pathfrom="M 72.60714285714286 78L 72.60714285714286 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 72.60714285714286 78" cy="32.422" cx="103.17857142857143" j={2} val={1753} barheight="45.578" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1288" width="7.642857142857143" height={78} x="103.17857142857143" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1290" d="M103.17857142857143 78L103.17857142857143 46.472C103.17857142857144 44.472 104.17857142857144 43.472 106.17857142857143 43.472L107.82142857142857 43.472C109.82142857142857 43.472 110.82142857142857 44.472 110.82142857142857 46.472L110.82142857142857 46.472L110.82142857142857 78L110.82142857142857 78C110.82142857142857 78 103.17857142857143 78 103.17857142857143 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 103.17857142857143 78L 103.17857142857143 46.472Q 103.17857142857143 43.472 106.17857142857143 43.472L 107.82142857142857 43.472Q 110.82142857142857 43.472 110.82142857142857 46.472L 110.82142857142857 46.472L 110.82142857142857 78L 110.82142857142857 78z" pathfrom="M 103.17857142857143 78L 103.17857142857143 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 103.17857142857143 78" cy="43.472" cx="133.75" j={3} val={1328} barheight="34.528" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1291" width="7.642857142857143" height={78} x="133.75" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1293" d="M133.75 78L133.75 50.97C133.75 48.97 134.75 47.97 136.75 47.97L138.39285714285714 47.97C140.39285714285714 47.97 141.39285714285714 48.97 141.39285714285714 50.97L141.39285714285714 50.97L141.39285714285714 78L141.39285714285714 78C141.39285714285714 78 133.75 78 133.75 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 133.75 78L 133.75 50.97Q 133.75 47.97 136.75 47.97L 138.39285714285714 47.97Q 141.39285714285714 47.97 141.39285714285714 50.97L 141.39285714285714 50.97L 141.39285714285714 78L 141.39285714285714 78z" pathfrom="M 133.75 78L 133.75 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 133.75 78" cy="47.97" cx="164.32142857142858" j={4} val={1155} barheight="30.03" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1294" width="7.642857142857143" height={78} x="164.32142857142858" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1296" d="M164.32142857142858 78L164.32142857142858 38.568C164.32142857142858 36.568 165.32142857142858 35.568 167.32142857142858 35.568L168.96428571428572 35.568C170.96428571428572 35.568 171.96428571428572 36.568 171.96428571428572 38.568L171.96428571428572 38.568L171.96428571428572 78L171.96428571428572 78C171.96428571428572 78 164.32142857142858 78 164.32142857142858 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 164.32142857142858 78L 164.32142857142858 38.568Q 164.32142857142858 35.568 167.32142857142858 35.568L 168.96428571428572 35.568Q 171.96428571428572 35.568 171.96428571428572 38.568L 171.96428571428572 38.568L 171.96428571428572 78L 171.96428571428572 78z" pathfrom="M 164.32142857142858 78L 164.32142857142858 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 164.32142857142858 78" cy="35.568" cx="194.89285714285717" j={5} val={1632} barheight="42.432" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1297" width="7.642857142857143" height={78} x="194.89285714285717" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1299" d="M194.89285714285717 78L194.89285714285717 46.263999999999996C194.89285714285717 44.263999999999996 195.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L199.5357142857143 43.263999999999996C201.53571428571433 43.263999999999996 202.53571428571433 44.263999999999996 202.5357142857143 46.263999999999996L202.5357142857143 46.263999999999996L202.5357142857143 78L202.5357142857143 78C202.5357142857143 78 194.89285714285717 78 194.89285714285717 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 194.89285714285717 78L 194.89285714285717 46.263999999999996Q 194.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L 199.5357142857143 43.263999999999996Q 202.5357142857143 43.263999999999996 202.5357142857143 46.263999999999996L 202.5357142857143 46.263999999999996L 202.5357142857143 78L 202.5357142857143 78z" pathfrom="M 194.89285714285717 78L 194.89285714285717 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 194.89285714285717 78" cy="43.263999999999996" cx="225.46428571428575" j={6} val={1336} barheight="34.736000000000004" barwidth="7.642857142857143" />
                                            <g id="SvgjsG1278" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                <g id="SvgjsG1280" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1283" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1286" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1289" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1292" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1295" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1298" classname="apexcharts-bar-goals-groups" />
                                            </g>
                                        </g>
                                        <g id="SvgjsG1277" className="apexcharts-datalabels" data: realindex={0} />
                                    </g>
                                    <line id="SvgjsLine1321" x1={0} y1={0} x2={214} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" />
                                    <line id="SvgjsLine1322" x1={0} y1={0} x2={214} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" />
                                    <g id="SvgjsG1323" className="apexcharts-yaxis-annotations" />
                                    <g id="SvgjsG1324" className="apexcharts-xaxis-annotations" />
                                    <g id="SvgjsG1325" className="apexcharts-point-annotations" />
                                </g>
                                <g id="SvgjsG1309" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" />
                                <g id="SvgjsG1265" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: '70px' }} />
                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
                                <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(26, 86, 219)' }} />
                                    <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                        <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div>
                                        <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div>
                                        <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg  sm:flex dark:border-gray-700 sm:p-6 dark:bg-[#1d1c22] shadow-md shadow-cyan-900 hover:shadow-2xl">
                    <div className='mx-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path d="M16.0992 34.779L12.9905 35.37C10.054 35.9284 7.84856 38.0415 7.36418 40.7573L5.79319 48.234C5.70236 48.6658 5.81125 49.1156 6.08938 49.4583C6.3675 49.801 6.78528 50 7.22658 50H17.1874V42.3817C17.1874 41.8596 17.4654 41.3769 17.917 41.1147L22.6646 38.3596C20.1099 37.868 17.8327 36.5864 16.0992 34.779Z" fill="white" />
                            <path d="M44.2069 48.2335L42.6331 40.7558C42.1482 38.0407 39.9426 35.9284 37.0065 35.3706L33.8994 34.7804C32.7402 35.9886 31.3377 36.9612 29.7722 37.6206C29.7648 37.6251 20.1171 43.2253 20.1171 43.2253V50H42.7734C43.2148 50 43.6327 49.801 43.9108 49.4581C44.189 49.1153 44.2978 48.6654 44.2069 48.2335ZM25.4883 46.4845H24.5118C23.7028 46.4845 23.0469 45.8286 23.0469 45.0196C23.0469 44.2106 23.7028 43.5548 24.5118 43.5548H25.4883C26.2973 43.5548 26.9532 44.2106 26.9532 45.0196C26.9532 45.8286 26.2973 46.4845 25.4883 46.4845Z" fill="white" />
                            <path d="M15.5761 16.8354H34.4238V19.7827H15.5761V16.8354Z" fill="white" />
                            <path d="M15.5761 12.2467V13.9057H34.4238V12.2467C36.3204 11.3479 37.5622 9.4166 37.5622 7.28857C37.5622 4.26465 35.102 1.80449 32.078 1.80449C31.3682 1.80449 30.6636 1.94297 30.0103 2.2084C28.7256 0.798047 26.9305 0 25 0C23.0694 0 21.2743 0.797949 19.9896 2.2083C19.3363 1.94287 18.6317 1.80439 17.9218 1.80439C14.8979 1.80439 12.4377 4.26455 12.4377 7.28848C12.4377 9.4166 13.6795 11.3479 15.5761 12.2467Z" fill="white" />
                            <path d="M25 35.6525C30.187 35.6525 34.407 31.4326 34.407 26.2456V22.7124H15.593V26.2456C15.593 31.4326 19.8129 35.6525 25 35.6525Z" fill="white" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-300">Products</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{adminStats?.productsCount}</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                </svg> 5,4% </span> Since last month
                        </p>
                    </div>
                    <div className="w-full" id="week-signups-chart" style={{ minHeight: '155px' }}>
                        <div id="apexchartsekzq67lz" className="apexcharts-canvas apexchartsekzq67lz apexcharts-theme-light" style={{ width: '236px', height: '140px' }}>
                            <svg id="SvgjsSvg1262" width={236} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev" className="apexcharts-svg" data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                <g id="SvgjsG1264" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                                    <defs id="SvgjsDefs1263">
                                        <linearGradient id="SvgjsLinearGradient1268" x1={0} y1={0} x2={0} y2={1}>
                                            <stop id="SvgjsStop1269" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} />
                                            <stop id="SvgjsStop1270" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                            <stop id="SvgjsStop1271" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                        </linearGradient>
                                        <clipPath id="gridRectMaskekzq67lz">
                                            <rect id="SvgjsRect1273" width={218} height={78} x={-2} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                        <clipPath id="forecastMaskekzq67lz" />
                                        <clipPath id="nonForecastMaskekzq67lz" />
                                        <clipPath id="gridRectMarkerMaskekzq67lz">
                                            <rect id="SvgjsRect1274" width={218} height={82} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                    </defs>
                                    <rect id="SvgjsRect1272" width="7.642857142857143" height={78} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1268)" className="apexcharts-xcrosshairs" y2={78} filter="none" fillOpacity="0.9" />
                                    <g id="SvgjsG1300" className="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG1301" className="apexcharts-xaxis-texts-g" transform="translate(0, 4)" />
                                    </g>
                                    <g id="SvgjsG1310" className="apexcharts-grid">
                                        <g id="SvgjsG1311" className="apexcharts-gridlines-horizontal" style={{ display: 'none' }}>
                                            <line id="SvgjsLine1313" x1={0} y1={0} x2={214} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1314" x1={0} y1="15.6" x2={214} y2="15.6" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1315" x1={0} y1="31.2" x2={214} y2="31.2" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1316" x1={0} y1="46.8" x2={214} y2="46.8" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1317" x1={0} y1="62.4" x2={214} y2="62.4" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1318" x1={0} y1={78} x2={214} y2={78} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                        </g>
                                        <g id="SvgjsG1312" className="apexcharts-gridlines-vertical" style={{ display: 'none' }} />
                                        <line id="SvgjsLine1320" x1={0} y1={78} x2={214} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                        <line id="SvgjsLine1319" x1={0} y1={1} x2={0} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                    </g>
                                    <g id="SvgjsG1275" className="apexcharts-bar-series apexcharts-plot-series">
                                        <g id="SvgjsG1276" className="apexcharts-series" rel={1} seriesname="Users" data: realindex={0}>
                                            <rect id="SvgjsRect1279" width="7.642857142857143" height={78} x="11.464285714285715" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1281" d="M11.464285714285715 78L11.464285714285715 46.315999999999995C11.464285714285715 44.315999999999995 12.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L16.107142857142858 43.315999999999995C18.107142857142858 43.315999999999995 19.107142857142858 44.315999999999995 19.107142857142858 46.315999999999995L19.107142857142858 46.315999999999995L19.107142857142858 78L19.107142857142858 78C19.107142857142858 78 11.464285714285715 78 11.464285714285715 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 11.464285714285715 78L 11.464285714285715 46.315999999999995Q 11.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L 16.107142857142858 43.315999999999995Q 19.107142857142858 43.315999999999995 19.107142857142858 46.315999999999995L 19.107142857142858 46.315999999999995L 19.107142857142858 78L 19.107142857142858 78z" pathfrom="M 11.464285714285715 78L 11.464285714285715 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 11.464285714285715 78" cy="43.315999999999995" cx="42.03571428571429" j={0} val={1334} barheight="34.684000000000005" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1282" width="7.642857142857143" height={78} x="42.03571428571429" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1284" d="M42.03571428571429 78L42.03571428571429 17.689999999999998C42.03571428571429 15.689999999999998 43.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L46.67857142857144 14.689999999999998C48.67857142857144 14.689999999999998 49.678571428571445 15.689999999999998 49.67857142857144 17.689999999999998L49.67857142857144 17.689999999999998L49.67857142857144 78L49.67857142857144 78C49.67857142857144 78 42.03571428571429 78 42.03571428571429 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 42.03571428571429 78L 42.03571428571429 17.689999999999998Q 42.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L 46.67857142857144 14.689999999999998Q 49.67857142857144 14.689999999999998 49.67857142857144 17.689999999999998L 49.67857142857144 17.689999999999998L 49.67857142857144 78L 49.67857142857144 78z" pathfrom="M 42.03571428571429 78L 42.03571428571429 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 42.03571428571429 78" cy="14.689999999999998" cx="72.60714285714286" j={1} val={2435} barheight="63.31" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1285" width="7.642857142857143" height={78} x="72.60714285714286" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1287" d="M72.60714285714286 78L72.60714285714286 35.422C72.60714285714286 33.422 73.60714285714286 32.422 75.60714285714286 32.422L77.25 32.422C79.25 32.422 80.25 33.422 80.25 35.422L80.25 35.422L80.25 78L80.25 78C80.25 78 72.60714285714286 78 72.60714285714286 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 72.60714285714286 78L 72.60714285714286 35.422Q 72.60714285714286 32.422 75.60714285714286 32.422L 77.25 32.422Q 80.25 32.422 80.25 35.422L 80.25 35.422L 80.25 78L 80.25 78z" pathfrom="M 72.60714285714286 78L 72.60714285714286 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 72.60714285714286 78" cy="32.422" cx="103.17857142857143" j={2} val={1753} barheight="45.578" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1288" width="7.642857142857143" height={78} x="103.17857142857143" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1290" d="M103.17857142857143 78L103.17857142857143 46.472C103.17857142857144 44.472 104.17857142857144 43.472 106.17857142857143 43.472L107.82142857142857 43.472C109.82142857142857 43.472 110.82142857142857 44.472 110.82142857142857 46.472L110.82142857142857 46.472L110.82142857142857 78L110.82142857142857 78C110.82142857142857 78 103.17857142857143 78 103.17857142857143 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 103.17857142857143 78L 103.17857142857143 46.472Q 103.17857142857143 43.472 106.17857142857143 43.472L 107.82142857142857 43.472Q 110.82142857142857 43.472 110.82142857142857 46.472L 110.82142857142857 46.472L 110.82142857142857 78L 110.82142857142857 78z" pathfrom="M 103.17857142857143 78L 103.17857142857143 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 103.17857142857143 78" cy="43.472" cx="133.75" j={3} val={1328} barheight="34.528" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1291" width="7.642857142857143" height={78} x="133.75" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1293" d="M133.75 78L133.75 50.97C133.75 48.97 134.75 47.97 136.75 47.97L138.39285714285714 47.97C140.39285714285714 47.97 141.39285714285714 48.97 141.39285714285714 50.97L141.39285714285714 50.97L141.39285714285714 78L141.39285714285714 78C141.39285714285714 78 133.75 78 133.75 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 133.75 78L 133.75 50.97Q 133.75 47.97 136.75 47.97L 138.39285714285714 47.97Q 141.39285714285714 47.97 141.39285714285714 50.97L 141.39285714285714 50.97L 141.39285714285714 78L 141.39285714285714 78z" pathfrom="M 133.75 78L 133.75 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 133.75 78" cy="47.97" cx="164.32142857142858" j={4} val={1155} barheight="30.03" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1294" width="7.642857142857143" height={78} x="164.32142857142858" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1296" d="M164.32142857142858 78L164.32142857142858 38.568C164.32142857142858 36.568 165.32142857142858 35.568 167.32142857142858 35.568L168.96428571428572 35.568C170.96428571428572 35.568 171.96428571428572 36.568 171.96428571428572 38.568L171.96428571428572 38.568L171.96428571428572 78L171.96428571428572 78C171.96428571428572 78 164.32142857142858 78 164.32142857142858 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 164.32142857142858 78L 164.32142857142858 38.568Q 164.32142857142858 35.568 167.32142857142858 35.568L 168.96428571428572 35.568Q 171.96428571428572 35.568 171.96428571428572 38.568L 171.96428571428572 38.568L 171.96428571428572 78L 171.96428571428572 78z" pathfrom="M 164.32142857142858 78L 164.32142857142858 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 164.32142857142858 78" cy="35.568" cx="194.89285714285717" j={5} val={1632} barheight="42.432" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1297" width="7.642857142857143" height={78} x="194.89285714285717" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1299" d="M194.89285714285717 78L194.89285714285717 46.263999999999996C194.89285714285717 44.263999999999996 195.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L199.5357142857143 43.263999999999996C201.53571428571433 43.263999999999996 202.53571428571433 44.263999999999996 202.5357142857143 46.263999999999996L202.5357142857143 46.263999999999996L202.5357142857143 78L202.5357142857143 78C202.5357142857143 78 194.89285714285717 78 194.89285714285717 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 194.89285714285717 78L 194.89285714285717 46.263999999999996Q 194.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L 199.5357142857143 43.263999999999996Q 202.5357142857143 43.263999999999996 202.5357142857143 46.263999999999996L 202.5357142857143 46.263999999999996L 202.5357142857143 78L 202.5357142857143 78z" pathfrom="M 194.89285714285717 78L 194.89285714285717 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 194.89285714285717 78" cy="43.263999999999996" cx="225.46428571428575" j={6} val={1336} barheight="34.736000000000004" barwidth="7.642857142857143" />
                                            <g id="SvgjsG1278" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                <g id="SvgjsG1280" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1283" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1286" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1289" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1292" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1295" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1298" classname="apexcharts-bar-goals-groups" />
                                            </g>
                                        </g>
                                        <g id="SvgjsG1277" className="apexcharts-datalabels" data: realindex={0} />
                                    </g>
                                    <line id="SvgjsLine1321" x1={0} y1={0} x2={214} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" />
                                    <line id="SvgjsLine1322" x1={0} y1={0} x2={214} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" />
                                    <g id="SvgjsG1323" className="apexcharts-yaxis-annotations" />
                                    <g id="SvgjsG1324" className="apexcharts-xaxis-annotations" />
                                    <g id="SvgjsG1325" className="apexcharts-point-annotations" />
                                </g>
                                <g id="SvgjsG1309" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" />
                                <g id="SvgjsG1265" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: '70px' }} />
                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
                                <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(26, 86, 219)' }} />
                                    <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                        <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div>
                                        <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div>
                                        <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg  sm:flex dark:border-gray-700 sm:p-6 dark:bg-[#1d1c22] shadow-md shadow-cyan-900 hover:shadow-2xl">
                    <div className='mx-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <g clip-path="url(#clip0_4_319)">
                                <path d="M43.1818 15.9091H36.3636V6.81818H4.54549C2.03406 6.81818 0 8.85224 0 11.3637V36.3637H4.54549C4.54549 40.1251 7.60228 43.1819 11.3637 43.1819C15.1251 43.1819 18.1819 40.1251 18.1819 36.3637H31.8182C31.8182 40.1251 34.875 43.1819 38.6364 43.1819C42.3978 43.1819 45.4546 40.1251 45.4546 36.3637H50.0001V25.0001L43.1818 15.9091ZM11.3637 39.7727C9.47728 39.7727 7.95459 38.25 7.95459 36.3636C7.95459 34.4772 9.47728 32.9545 11.3637 32.9545C13.2501 32.9545 14.7728 34.4772 14.7728 36.3636C14.7728 38.25 13.25 39.7727 11.3637 39.7727ZM38.6364 39.7727C36.75 39.7727 35.2273 38.25 35.2273 36.3636C35.2273 34.4772 36.75 32.9545 38.6364 32.9545C40.5228 32.9545 42.0455 34.4772 42.0455 36.3636C42.0455 38.25 40.5227 39.7727 38.6364 39.7727ZM36.3636 25.0001V19.3183H42.0454L46.5113 25.0001H36.3636Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_319">
                                    <rect width="50" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-300">Orders</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">{adminStats?.orderCounts}</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                </svg> 9,4% </span> Since last month
                        </p>
                    </div>
                    <div className="w-full" id="week-signups-chart" style={{ minHeight: '155px' }}>
                        <div id="apexchartsekzq67lz" className="apexcharts-canvas apexchartsekzq67lz apexcharts-theme-light" style={{ width: '236px', height: '140px' }}>
                            <svg id="SvgjsSvg1262" width={236} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev" className="apexcharts-svg" data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                                <g id="SvgjsG1264" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                                    <defs id="SvgjsDefs1263">
                                        <linearGradient id="SvgjsLinearGradient1268" x1={0} y1={0} x2={0} y2={1}>
                                            <stop id="SvgjsStop1269" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} />
                                            <stop id="SvgjsStop1270" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                            <stop id="SvgjsStop1271" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} />
                                        </linearGradient>
                                        <clipPath id="gridRectMaskekzq67lz">
                                            <rect id="SvgjsRect1273" width={218} height={78} x={-2} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                        <clipPath id="forecastMaskekzq67lz" />
                                        <clipPath id="nonForecastMaskekzq67lz" />
                                        <clipPath id="gridRectMarkerMaskekzq67lz">
                                            <rect id="SvgjsRect1274" width={218} height={82} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" />
                                        </clipPath>
                                    </defs>
                                    <rect id="SvgjsRect1272" width="7.642857142857143" height={78} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1268)" className="apexcharts-xcrosshairs" y2={78} filter="none" fillOpacity="0.9" />
                                    <g id="SvgjsG1300" className="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG1301" className="apexcharts-xaxis-texts-g" transform="translate(0, 4)" />
                                    </g>
                                    <g id="SvgjsG1310" className="apexcharts-grid">
                                        <g id="SvgjsG1311" className="apexcharts-gridlines-horizontal" style={{ display: 'none' }}>
                                            <line id="SvgjsLine1313" x1={0} y1={0} x2={214} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1314" x1={0} y1="15.6" x2={214} y2="15.6" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1315" x1={0} y1="31.2" x2={214} y2="31.2" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1316" x1={0} y1="46.8" x2={214} y2="46.8" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1317" x1={0} y1="62.4" x2={214} y2="62.4" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                            <line id="SvgjsLine1318" x1={0} y1={78} x2={214} y2={78} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" />
                                        </g>
                                        <g id="SvgjsG1312" className="apexcharts-gridlines-vertical" style={{ display: 'none' }} />
                                        <line id="SvgjsLine1320" x1={0} y1={78} x2={214} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                        <line id="SvgjsLine1319" x1={0} y1={1} x2={0} y2={78} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" />
                                    </g>
                                    <g id="SvgjsG1275" className="apexcharts-bar-series apexcharts-plot-series">
                                        <g id="SvgjsG1276" className="apexcharts-series" rel={1} seriesname="Users" data: realindex={0}>
                                            <rect id="SvgjsRect1279" width="7.642857142857143" height={78} x="11.464285714285715" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1281" d="M11.464285714285715 78L11.464285714285715 46.315999999999995C11.464285714285715 44.315999999999995 12.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L16.107142857142858 43.315999999999995C18.107142857142858 43.315999999999995 19.107142857142858 44.315999999999995 19.107142857142858 46.315999999999995L19.107142857142858 46.315999999999995L19.107142857142858 78L19.107142857142858 78C19.107142857142858 78 11.464285714285715 78 11.464285714285715 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 11.464285714285715 78L 11.464285714285715 46.315999999999995Q 11.464285714285715 43.315999999999995 14.464285714285715 43.315999999999995L 16.107142857142858 43.315999999999995Q 19.107142857142858 43.315999999999995 19.107142857142858 46.315999999999995L 19.107142857142858 46.315999999999995L 19.107142857142858 78L 19.107142857142858 78z" pathfrom="M 11.464285714285715 78L 11.464285714285715 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 19.107142857142858 78L 11.464285714285715 78" cy="43.315999999999995" cx="42.03571428571429" j={0} val={1334} barheight="34.684000000000005" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1282" width="7.642857142857143" height={78} x="42.03571428571429" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1284" d="M42.03571428571429 78L42.03571428571429 17.689999999999998C42.03571428571429 15.689999999999998 43.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L46.67857142857144 14.689999999999998C48.67857142857144 14.689999999999998 49.678571428571445 15.689999999999998 49.67857142857144 17.689999999999998L49.67857142857144 17.689999999999998L49.67857142857144 78L49.67857142857144 78C49.67857142857144 78 42.03571428571429 78 42.03571428571429 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 42.03571428571429 78L 42.03571428571429 17.689999999999998Q 42.03571428571429 14.689999999999998 45.03571428571429 14.689999999999998L 46.67857142857144 14.689999999999998Q 49.67857142857144 14.689999999999998 49.67857142857144 17.689999999999998L 49.67857142857144 17.689999999999998L 49.67857142857144 78L 49.67857142857144 78z" pathfrom="M 42.03571428571429 78L 42.03571428571429 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 49.67857142857144 78L 42.03571428571429 78" cy="14.689999999999998" cx="72.60714285714286" j={1} val={2435} barheight="63.31" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1285" width="7.642857142857143" height={78} x="72.60714285714286" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1287" d="M72.60714285714286 78L72.60714285714286 35.422C72.60714285714286 33.422 73.60714285714286 32.422 75.60714285714286 32.422L77.25 32.422C79.25 32.422 80.25 33.422 80.25 35.422L80.25 35.422L80.25 78L80.25 78C80.25 78 72.60714285714286 78 72.60714285714286 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 72.60714285714286 78L 72.60714285714286 35.422Q 72.60714285714286 32.422 75.60714285714286 32.422L 77.25 32.422Q 80.25 32.422 80.25 35.422L 80.25 35.422L 80.25 78L 80.25 78z" pathfrom="M 72.60714285714286 78L 72.60714285714286 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 80.25 78L 72.60714285714286 78" cy="32.422" cx="103.17857142857143" j={2} val={1753} barheight="45.578" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1288" width="7.642857142857143" height={78} x="103.17857142857143" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1290" d="M103.17857142857143 78L103.17857142857143 46.472C103.17857142857144 44.472 104.17857142857144 43.472 106.17857142857143 43.472L107.82142857142857 43.472C109.82142857142857 43.472 110.82142857142857 44.472 110.82142857142857 46.472L110.82142857142857 46.472L110.82142857142857 78L110.82142857142857 78C110.82142857142857 78 103.17857142857143 78 103.17857142857143 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 103.17857142857143 78L 103.17857142857143 46.472Q 103.17857142857143 43.472 106.17857142857143 43.472L 107.82142857142857 43.472Q 110.82142857142857 43.472 110.82142857142857 46.472L 110.82142857142857 46.472L 110.82142857142857 78L 110.82142857142857 78z" pathfrom="M 103.17857142857143 78L 103.17857142857143 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 110.82142857142857 78L 103.17857142857143 78" cy="43.472" cx="133.75" j={3} val={1328} barheight="34.528" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1291" width="7.642857142857143" height={78} x="133.75" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1293" d="M133.75 78L133.75 50.97C133.75 48.97 134.75 47.97 136.75 47.97L138.39285714285714 47.97C140.39285714285714 47.97 141.39285714285714 48.97 141.39285714285714 50.97L141.39285714285714 50.97L141.39285714285714 78L141.39285714285714 78C141.39285714285714 78 133.75 78 133.75 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 133.75 78L 133.75 50.97Q 133.75 47.97 136.75 47.97L 138.39285714285714 47.97Q 141.39285714285714 47.97 141.39285714285714 50.97L 141.39285714285714 50.97L 141.39285714285714 78L 141.39285714285714 78z" pathfrom="M 133.75 78L 133.75 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 141.39285714285714 78L 133.75 78" cy="47.97" cx="164.32142857142858" j={4} val={1155} barheight="30.03" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1294" width="7.642857142857143" height={78} x="164.32142857142858" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1296" d="M164.32142857142858 78L164.32142857142858 38.568C164.32142857142858 36.568 165.32142857142858 35.568 167.32142857142858 35.568L168.96428571428572 35.568C170.96428571428572 35.568 171.96428571428572 36.568 171.96428571428572 38.568L171.96428571428572 38.568L171.96428571428572 78L171.96428571428572 78C171.96428571428572 78 164.32142857142858 78 164.32142857142858 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 164.32142857142858 78L 164.32142857142858 38.568Q 164.32142857142858 35.568 167.32142857142858 35.568L 168.96428571428572 35.568Q 171.96428571428572 35.568 171.96428571428572 38.568L 171.96428571428572 38.568L 171.96428571428572 78L 171.96428571428572 78z" pathfrom="M 164.32142857142858 78L 164.32142857142858 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 171.96428571428572 78L 164.32142857142858 78" cy="35.568" cx="194.89285714285717" j={5} val={1632} barheight="42.432" barwidth="7.642857142857143" />
                                            <rect id="SvgjsRect1297" width="7.642857142857143" height={78} x="194.89285714285717" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#374151" className="apexcharts-backgroundBar" />
                                            <path id="SvgjsPath1299" d="M194.89285714285717 78L194.89285714285717 46.263999999999996C194.89285714285717 44.263999999999996 195.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L199.5357142857143 43.263999999999996C201.53571428571433 43.263999999999996 202.53571428571433 44.263999999999996 202.5357142857143 46.263999999999996L202.5357142857143 46.263999999999996L202.5357142857143 78L202.5357142857143 78C202.5357142857143 78 194.89285714285717 78 194.89285714285717 78 " fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskekzq67lz)" pathto="M 194.89285714285717 78L 194.89285714285717 46.263999999999996Q 194.89285714285717 43.263999999999996 197.89285714285717 43.263999999999996L 199.5357142857143 43.263999999999996Q 202.5357142857143 43.263999999999996 202.5357142857143 46.263999999999996L 202.5357142857143 46.263999999999996L 202.5357142857143 78L 202.5357142857143 78z" pathfrom="M 194.89285714285717 78L 194.89285714285717 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 202.5357142857143 78L 194.89285714285717 78" cy="43.263999999999996" cx="225.46428571428575" j={6} val={1336} barheight="34.736000000000004" barwidth="7.642857142857143" />
                                            <g id="SvgjsG1278" className="apexcharts-bar-goals-markers" style={{ pointerEvents: 'none' }}>
                                                <g id="SvgjsG1280" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1283" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1286" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1289" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1292" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1295" classname="apexcharts-bar-goals-groups" />
                                                <g id="SvgjsG1298" classname="apexcharts-bar-goals-groups" />
                                            </g>
                                        </g>
                                        <g id="SvgjsG1277" className="apexcharts-datalabels" data: realindex={0} />
                                    </g>
                                    <line id="SvgjsLine1321" x1={0} y1={0} x2={214} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" />
                                    <line id="SvgjsLine1322" x1={0} y1={0} x2={214} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" />
                                    <g id="SvgjsG1323" className="apexcharts-yaxis-annotations" />
                                    <g id="SvgjsG1324" className="apexcharts-xaxis-annotations" />
                                    <g id="SvgjsG1325" className="apexcharts-point-annotations" />
                                </g>
                                <g id="SvgjsG1309" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" />
                                <g id="SvgjsG1265" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: '70px' }} />
                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div className="apexcharts-tooltip-title" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
                                <div className="apexcharts-tooltip-series-group" style={{ order: 1 }}><span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(26, 86, 219)' }} />
                                    <div className="apexcharts-tooltip-text" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                                        <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div>
                                        <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div>
                                        <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsCard;