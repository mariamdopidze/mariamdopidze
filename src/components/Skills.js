const Skills =()=> {
  return (
    <section id="skills" className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
<div className="flex h-16 w-16 mx-auto gap-6  items-center justify-center "> 
        <img src= "/images/html-icon.png"/>
        <img src= "/images/css-icon.png"/>
        <img src= "/images/js-icon.png"/>
        <img src= "/images/figma-icon.png"/>
        <img src= "/images/git-icon.png"/> 
        <img src= "/images/react-icon.png"/>
        <img src= "/images/bootstrap-icon.png"/> 
        <img src= "/images/tailwind.png"/> 
        <img src= "/images/github-icon.png"/> 

</div>
        {/* <ul className="grid grid-cols-3 gap-6">
          <li className="bg-blue-950 text-white p-6 rounded-md shadow-md">React</li>
          <li className="bg-blue-950 text-white p-6 rounded-md shadow-md">Tailwind CSS</li>
          <li className="bg-blue-950 text-white p-6 rounded-md shadow-md">JavaScript</li>
        </ul> */}
      </div>
    </section>
  );
}

export default Skills;
