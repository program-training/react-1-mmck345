import { ChangeEvent, useState } from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';
import './Card.css'

interface Props {
    title: string;
    srcImg: string;
    description: string;
}

export default function Card({title, srcImg, description}: Props): JSX.Element {

    const [backgroundColor, setBackgroundColor] = useState<string>('#00FF00')

    return (
        <div className="cardStyle" style={{ backgroundColor}}>
            <h3>{title}</h3>
            <img src={srcImg} alt="photo of card" />
            <p>{description}</p>
            <SelectMenu setColor={(event: ChangeEvent<HTMLSelectElement>) => {setBackgroundColor(event.target.value)}}></SelectMenu>
        </div>
    )
}