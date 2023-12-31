import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 1000)

        return () => clearTimeout(timeOut)
    }, [value, delay])

    return debouncedValue
}
