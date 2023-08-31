import './SelectMenu.css'
import React, { useRef, useState } from 'react'

interface Props {
    setColor: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const colorObject = ['red', 'blue', 'green', 'yellow', 'purple']

export default function SelectMenu({setColor} : Props): JSX.Element{

    const [arrayColor, setArrayColor] = useState<string[]>(colorObject)

    const textInputRef = useRef<HTMLInputElement>(null);
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const color = textInputRef.current?.value.toLowerCase() as string
            if (CSS.supports('color',  color) && !(arrayColor.includes(color))) {
                setArrayColor(arrayColor => [...arrayColor, textInputRef.current?.value as string])
                textInputRef.current!.value = ''
            }
        }
    };


    return (
        <div>
            <select name="select-color" id="select-color-id" onChange={setColor}>
                { arrayColor.map((color) => <option key={color} value={color}>{color}</option>) }
            </select>
            <input type="text" onKeyPress={handleKeyPress} ref={textInputRef}  />
        </div>
        
    )
}