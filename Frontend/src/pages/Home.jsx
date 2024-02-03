
function Home() {
  return (
    <>

   <div className="flex flex-col items-center font-sans font-bold h-screen">
        <div className="w-full text-[5.3rem] mt-[5rem] font-herfonty text-center py-20 drop-shadow-[rgba(0,0,0,.55)]">FreedomHER</div>
        <div className="w-full text-[2.3rem] font-herfonty text-center -mt-[3rem] mb-[9rem] drop-shadow-[rgba(0,0,0,.55)]">an anonymous forum to support domestic violence victims.</div>
        <button className="bg-[rgba(132,62,250,0.3)] font-herfonty transition ease-in-out hover:bg-[rgba(132,62,250,0.9)] mt-5 my-8 text-white text-3xl font-bold py-10 px-10 w-1/3 h-1/7 rounded mx-auto">
          Go to forum
        </button>
      </div>
        
    </>
  );
}

export default Home;
