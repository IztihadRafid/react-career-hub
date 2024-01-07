import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information,phone,email,address} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job=> job.id ===idInt)
    console.log(job);

    const handleApplyJob=()=>{
        saveJobApplication(idInt)
        toast('You have succesfully applied')
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3 m-10">
                    <h2 className="text-xl font-semibold">{job.job_title}</h2>
                    <h2> <span className="text-lg font-medium">Job Description: </span>{job.job_description}</h2><br />
                    <h2> <span className="text-lg font-medium">Job Responsibility: </span>{job.job_responsibility}</h2><br />
                    <h2><span className="text-lg font-medium">Educational Requiments: </span>{job.educational_requirements}</h2><br />
                    <h2><span className="text-lg font-medium">Experiences: </span>{job.experiences}</h2>
                </div>
                <div className="border bg-purple-100 p-8">
                    <h2 className="text-2xl">Job Details</h2>
                    <div className="flex items-center">
                        <AiOutlineDollar className="text-2xl mr-3 text-purple-600"/>
                        <p> <span className="text-lg font-medium">Salary: </span>{job.salary}</p>
                    </div>
                    <div className="flex items-center">
                    <PiShoppingBagOpenBold className="text-2xl mr-3 text-purple-600"/>
                        <p> <span className="text-lg font-medium">Job Title: </span>{job.job_title}</p>
                    </div>
                    <hr />
                    <h2 className="text-2xl">Contact Information</h2>
                    <div className="flex items-center">
                    <FiPhone className="text-2xl mr-3 text-purple-600"/>
                        <p> <span className="text-lg font-medium">Phone: </span>{job.contact_information.phone}</p>
                    </div>
                    <div className="flex items-center">
                    <TfiEmail className="text-2xl mr-3 text-purple-600"/>
                        <p> <span className="text-lg font-medium">Email: </span>{job.contact_information.email}</p>
                    </div>
                    <div className="flex items-center">
                    <GrLocation className="text-4xl mr-3 text-purple-600"/>
                        <p> <span className="text-lg font-medium">Address: </span>{job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;