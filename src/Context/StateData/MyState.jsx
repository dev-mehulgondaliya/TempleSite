import React, { useState } from 'react'
import myContext from "./myContext";
import { DailyTimelineData } from '../HardCodeData/DailyTimelineData'
import { BlogData } from '../HardCodeData/BlogData'
import { HistoryTimeLineData } from '../HardCodeData/HistoryTimeLineData';


export default function MyState({ children }) {

    const [loading, setLoading] = useState(false)

    return (
        <myContext.Provider
            value={
                {
                    loading,
                    setLoading,
                    DailyTimelineData,
                    HistoryTimeLineData,
                    BlogData,
                }
            }>
            {children}
        </myContext.Provider>
    )
}
