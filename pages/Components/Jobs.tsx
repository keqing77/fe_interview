type JobListType = {
  [key: string]: string;
};

const Jobs = () => {
  const JobList: JobListType[] = [
    {
      id: "1",
      name: "Thoughtworks",
      desc: "Software Engineer",
      date: "2022 - 2024",
      logo: "/svg/company/tw.svg",
    },
    {
      id: "2",
      name: "Unknown",
      desc: "Front-end Developer",
      date: "2024 - now",
      logo: "/svg/company/a.svg",
    },
  ];

  return (
    <section className="container mx-auto w-full overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-700 my-4">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Logo</th>
          </tr>
        </thead>
        <tbody>
          {JobList.map((job) => (
            <tr key={job.id}>
              <td className="border border-gray-400 px-4 py-2 font-bold ">
                {job.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">{job.desc}</td>
              <td className="border border-gray-400 px-4 py-2">{job.date}</td>
              <td className="border border-gray-400 px-4 py-2">
                <img className="h-12 w-12" src={job.logo} alt="logo" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Jobs;
