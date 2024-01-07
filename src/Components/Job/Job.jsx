import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} =job
    return (
        <div className="card bg-slate-100 shadow-xl">
        <figure ><img className="mt-10" src={logo} alt="logo" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
           
          </h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold rounded-md border border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold rounded-md border border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="mt-4 flex mr-4">
            <h2 className="text-2xl flex items-center mr-2"><MdOutlineLocationOn />{location}</h2>
            <h2 className="text-2xl flex items-center mr-2"><AiOutlineDollar />{salary}</h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}><button className="btn btn-primary font-semibold text-white text-xl bg-gradient-to-r from-indigo-400 via-indgo-500 to-purple-400 ...">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Job;