const Home = () => {
  return (
    <main className='container'>
      {/* <div className='mb-2'>Please enter your Email Id</div>
      <input className='rounded-lg h-12 text-black  p-1' type='email' />
      <div className='flex mt-7 gap-5'>
        <Link href={'/css'}><button className='border rounded-lg border-white p-2 w-48'>CSS Test</button></Link>
        <Link href={'/react'}><button className='border rounded-lg border-white p-2 w-48'>React Test</button></Link>
      </div> */}

      <div className='text-gray-700 w-full bg-white shadow-md rounded-lg p-6 text-justify'>
        <h2 className='text-2xl font-bold mb-4'>Selection Process</h2>
        <p className=' mb-4'>The selection process consists of four rounds:</p>

        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2'>
            Round 1: React Machine Task
          </h3>
          <p>
            Candidates will be given a task related to React. They are required
            to demonstrate their skills and knowledge in React by completing the
            given task within a specified time frame. The task may involve
            creating a React component, implementing state management, or
            building a responsive user interface.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2'>
            Round 2: Simple DSA Machine Task
          </h3>
          <p>
            Candidates will be given a task that requires them to implement or
            optimize a simple data structure or algorithm. This round evaluates
            their understanding and proficiency in fundamental DSA concepts.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2'>
            Round 3: Face-to-Face with Senior Software Engineers
          </h3>
          <p>
            Candidates will have an interview session with a team of senior
            software engineers. They will be assessed on their potential,
            communication skills, technical skills, and their ability to work in
            a team. This round provides an opportunity to understand the
            candidate&lsquo;s expertise in software engineering principles and
            practices.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2 '>
            Round 4: Face-to-Face with Senior Technical Leads
          </h3>
          <p>
            This round assesses the candidate&lsquo;s problem-solving skills,
            self-learning capabilities, adaptability to new technologies, and
            proficiency in version control. The interview emphasizes these
            competencies to gauge the candidate&lsquo;s suitability for a senior
            software engineer or technical lead position. The session also aims
            to assess their compatibility with the Senior Technical Leads team
            and the overall organizational culture.
          </p>
        </div>

        <div className=''>
          <h3 className='text-base font-semibold mb-2 '>
            Rounds 1, 2, and 3 are conducted on the same day, likely to
            streamline the evaluation process. These rounds primarily test
            technical skills, problem-solving, and collaboration abilities.
          </h3>

          <h3 className='text-base font-semibold'>
            Round 4 is conducted separately, which emphasizes problem-solving
            skills, self-learning capabilities, adaptability to new
            technologies, and aligning with the Senior Technical Lead&lsquo;s
            objectives.
          </h3>
        </div>
      </div>
    </main>
  );
};
export default Home;
