


type Mods = Record<string, string | boolean>
export default function classNames(className: string, mods: Mods={}, additional: string[] = []):string{
    return [
        className,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([className, value])=>value)
            .map(([className,value])=>className)
    ].join(' ')
}
