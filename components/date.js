import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
    const parsedDate = parseISO(dateString)
    return (
        <div style={{display:"inline-block"}}>
            <time dateTime={dateString}>{format(parsedDate, "LLLL d, yyyy")}</time>
        </div>
    )
}