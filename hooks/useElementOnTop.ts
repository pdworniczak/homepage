export const useElementOnTop = (element: HTMLDivElement | null) => {
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => console.log('scroll', element && element.getBoundingClientRect()));
    }

    return {}
}