
// Timestamp -> Date formater

/**
 * 
 * @param timestamp 
 */
export const formatDate = (timestamp: number): string => {
	const d = new Date(timestamp)
	const time = d.toLocaleTimeString('en-US')
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}