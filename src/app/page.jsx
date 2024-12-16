
export default function Home() {
  return (
    <div className="container border-black mx-auto w-full h-[calc(100%-70px)] flex flex-col items-start  justify-start overflow-y-auto overflow-x-hidden no_scrollbar">
      <div className="w-full h-fit flex xl:flex-row flex-col items-start justify-start lg:px-52 px-5 sm:px-10 lg:pt-10 lg:mb-20">
        <div className="flex-1 h-full w-full order-1 xl:order-0 ">
          <h2 className="md:text-[45px] sm:text-[40px] text-2xl  font-bold mt-10 w-[500px] max-w-full h-fit leading-tight">Create Your Professional Portfolio Effortlessly</h2>
          <p className="md:text-[18px] text-[12px] font-extralight w-[500px] max-w-full leading-loose text-gray-600">Creating a portfolio has never been easier. <br /> With a wide range of designs to choose from,<br /> you can quickly customize your portfolio to reflect your personality and professional expertise.</p>
          <button className="border px-5 py-2 my-10 uppercase bg-light_clr2 text-light_clr rounded-md">create now</button>
        </div>
        <div className="flex-1 max-w-full lg:p-10 flex items-center justify-center mt-10 xl:mt-28 order-0 xl:order-1">
          <img src="/images/Untitled (2).png" alt="main" className="w-full object-contain drop_sh" />
        </div>
      </div>

      <p className="p-5 sm:px-10 lg:px-52 text-center font-extralight xl:text-2xl text-sm text-gray-600">Whether you're a designer, developer, or writer, a professional portfolio is your gateway to new opportunities. Our platform offers ready-to-use portfolio templates tailored to your needs. No design skills required!</p>
      <h2 className="w-full text-center text-4xl font-bold lg:my-20 my-10 uppercase">turn your cv to website</h2>
      <div className="w-full h-fit text-center lg:my-15 my-10 flex flex-col items-center gap-10 justify-center lg:px-52 px-5 sm:px-10 lg:pt-10 lg:mb-20">
        <img src="/images/Untitled (1).png" alt="main2" className="w-full object-cover lg:mb-20 drop_sh md:h-[200px] xl:h-[250px] " />
        <h2 className=" text-xl lg:text-3xl font-bold lg:mb-10">Why is it important to create a portfolio website?</h2>
        <ul className="flex flex-col items-start text-start justify-center gap-6 lg:text-xl text-sm text-gray-600 list-disc">
          <li>It acts as a digital resume where you can display your skills, projects, and achievements in a visually appealing and detailed way</li>
          <li>A portfolio makes you stand out and establishes credibility in your field, especially in the tech, design, or creative industries</li>
          <li>By customizing your website, you show technical or design skills that reflect your professional capabilities.</li>
          <li>Unlike social media profiles, a portfolio website lets you fully control how your story and work are presented.</li>
          <li>A portfolio website provides a single link that can easily be shared in job applications, emails, or social media, simplifying communication.</li>
        </ul>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10 p-2 my-10 lg:my-20 ">
        <h2 className="w-full text-center lg:text-3xl text-2xl font-bold ">Choose your template, customize it, and share it</h2>
        <button className="border px-5 py-2 uppercase bg-light_clr2 text-light_clr rounded-md mx-auto">try now</button>
      </div>
      <div className=" w-full flex flex-col justify-center items-center text-center p-5 mb-10 lg:mb-20 rounded-xl">
        <h3 className="text-2xl my-4">Everything you need to win more jobs</h3>
        <p className="text-md font-extralight lg:px-44  text-gray-600">Freelancers often have their work spread across different marketplaces, so clients may only see part of their experience. This can cause clients to undervalue their skills or ask for lower rates. With our portfolio builder, you can combine all your work in one place, showing your full experience and helping you win more jobs at the rate you deserve.</p>
      </div>
      <div className=" mb-10 lg:mb-20 w-full flex flex-col lg:flex-row items-center justify-center ">
        <div className="flex-1 p-5 flex items-center justify-center">
          <img src="/images/Untitled (3).png " alt="main3" className="w-[500px] max-w-full" />
        </div>
        <div className="flex-1  flex flex-col items-center lg:items-start justify-center p-5 text-center lg:text-start">
          <h2 className="text-2xl font-bold my-5">Free online portfolio builder for all types of creators</h2>
          <p className="text-md font-extralight text-gray-600 lg:pr-20 ">Having an online portfolio is a must, especially if you want to have a record of everything you’ve achieved in your career thus far. Similarly, if you’re jumping into a second career, populating a portfolio with the best of your amateur works is a good step forward in your reinvention. Whether you’re highly experienced or a newbie in your career, you can easily create an online portfolio with our free online portfolio builder. In just a few clicks, you can complete a portfolio that you’ll be proud to share with your prospective clients, collaborators, and employers.</p>
        </div>
      </div>
      <div className=" mb-10 lg:mb-20 w-full p-10 flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-bold text-center">Design your online portfolio</h2>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          <div className="flex flex-col justify-start items-center shadow-md text-center gap-1 h-[250px] w-[250px] p-5">
            <h2 className="text-md font-bold text-wrap">The best online portfolio maker, free and easy for busy creators</h2>
            <p className="text-sm font-extralight">Impress your prospective clients and employers with your skills and experience. With our online portfolio maker, you can freely showcase your career highlights with just a few clicks.</p>
          </div>
          <div className="flex flex-col justify-start items-center shadow-md text-center gap-1  h-[250px] w-[250px] p-5">
            <h2 className="text-md font-bold text-wrap">Make your portfolio stand out with unique design elements</h2>
            <p className="text-sm font-extralight">Create an online portfolio that plays up your achievements visually. Choose the right fonts and design elements to convey your personality and differentiate yourself from competitors.</p>
          </div>
          <div className="flex flex-col justify-start items-center shadow-md text-center gap-3 h-[250px] w-[250px] p-5">
            <h2 className="text-md font-bold text-wrap">Create your online portfolio for free on any browser</h2>
            <p className="text-sm font-extralight">Access our online portfolio maker to polish up your online portfolio for free directly on your browser using your mobile or desktop device.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
