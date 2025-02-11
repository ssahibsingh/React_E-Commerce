import { AnalyticsBrowser } from '@segment/analytics-next'


const analytics = new AnalyticsBrowser()
analytics.load({ writeKey: process.env.REACT_APP_SEGMENT_SOURCE_KEY})

export default analytics