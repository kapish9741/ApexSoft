import GlowingEffectDemo from '../GlowingEffectDemo'

const About = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center mt-20 gap-20'>
        <h1 className="text-4xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">About Us</h1>
        <GlowingEffectDemo />
    </div>
  )
}

export default About