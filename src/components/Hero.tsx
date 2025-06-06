import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
    return (
        <>
            <TypeAnimation
            sequence={['Empowering businesses.', 1500, 'With technology.', 1500]}
            wrapper="span"
            className="text-2xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
            cursor={true}
            repeat={Infinity}
            />
        </>
    )
};