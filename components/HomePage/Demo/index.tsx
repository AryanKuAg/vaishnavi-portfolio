export default function Demo() {
  return (
    <div className='mt-32 mb-24' id='demo'>
        <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-semibold tracking-tight text-gray-900 text-5xl sm:text-6xl">🎥 Video Demo</h1>
        <p className="mt-2 text-lg/8 text-gray-600">Explore a visual showcase of my skills and projects, demonstrating my expertise and dedication in action.</p>
      </div>
      <div className='flex justify-center w-full mt-16 sm:mt-20 px-4 sm:px-0'>
        <video width="600" controls autoPlay loop muted className='rounded-2xl'>
  <source src="/videos/Vaishnavi_English_Demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
      
    </div>
  )
}
