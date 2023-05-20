import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Toggii - ${title}`
    },[title])
}

export default useTitle;