import React, {useState, useEffect} from "react";

export const Details = ({mobile}) => {
    const [formData, setFormData] = useState({
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
        bankCity: "",
        branchName: "",
        relation: "",
    });
    
    const [isMobile, setIsMobile] = useState(true);
    const [lastFilled, setLastFilled] = useState();

    const formInputs = [
        { label: "ACCOUNT HOLDER NAME", name: "accountHolderName", type: "text" },
        { label: "ACCOUNT NUMBER", name: "accountNumber", type: "text" },
        { label: "IFSC CODE", name: "ifscCode", type: "text" },
        { label: "BANK NAME", name: "bankName", type: "text" },
        { label: "BANK CITY", name: "bankCity", type: "text" },
        { label: "BRANCH NAME", name: "branchName", type: "text" },
        { label: "RELATION WITH ACCOUNT HOLDER", name: "relation", type: "text" },
    ];
    
    const [submit, setsubmit] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setsubmit(true);
        console.log("Form Data:", formData);
        const currentTime = new Date();
        setLastFilled(currentTime);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <>
            <div className={`flex flex-col ${mobile && "ml-4"} p-8`}>
                <h1 className="text-3xl font-semibold mb">Update Bank Details</h1>
                <p className={`mt-2 ${isMobile ? 'w-full' : 'w-4/5'} text-sm mb-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tortor sit amet sapien accumsan accumsan. Donec consectetur, velit in mattis fermentum, velit arcu accumsan turpis, at vestibulum magna dui sed ante. </p>
                <div className={`${isMobile ? 'w-full' : 'w-4/5'} border border-slate-400 rounded-md p-6`}>
                    <form>
                        <div className={`w-full ${!isMobile && "grid grid-cols-2"} gap-4`}>
                        {formInputs.map((input, index) => (
                                <React.Fragment key={index}>
                                    <div className={`flex items-center col-span-1 ${isMobile && "mb"}`}>
                                        <label className={`text-gray-700 font-semibold ${isMobile && "text-sm"} mb-1 mr-2 whitespace-nowrap`} htmlFor={input.name}>{input.label}</label>
                                    </div>
                                    <div className={`flex items-center col-span-1 ${isMobile && "mb-3"}`}>
                                        <input
                                            id={input.name}
                                            name={input.name}
                                            onChange={handleChange}
                                            className={`appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight ${submit ? 'bg-green-100' : ''} ${isMobile && 'text-xs'} focus:outline-none focus:bg-white focus:border-gray-800`}
                                            type={input.type}
                                            placeholder={input.label}
                                            {...(submit ? { value: formData[input.name] } : {})}
                                        ></input>
                                    </div>
                                </React.Fragment>
                            ))}
                            <div className="flex items-center col-span-1">
                                <label class={`text-gray-700 font-semibold ${isMobile && "text-sm"} mb-1 md:mb-0 mr-2 whitespace-nowrap`} for="inline-full-name">CONSENT</label>
                            </div>
                            <div className={`flex ${submit ? 'flex-col' : 'flex-row'} items-start col-span-1 w-full appearance-none border-2 border-gray-200 rounded  text-gray-700 p-4 ${submit ? 'bg-green-100': ''} ${isMobile ? 'mb-2' : ''} focus:outline-none focus:bg-white focus:border-gray-800`}>
                                {!submit && <input className="w-8 h-8 mr-4" type="checkbox"></input>}
                                <p className={`${isMobile ? 'text-sm' : 'text-xs'}`}>Lorem ipsum dolor sit amet consectetur. Cum pellentesque pharetra nam tellus vitae mauris eget. Sit netus ac risus dolor eros iaculis. Elementum senectus morbi arcu.</p>
                                {lastFilled && <p className="font-bold mt-2">FILLED&nbsp;ON&nbsp;
                                        {lastFilled.toLocaleString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </p>}
                            </div>
                            {!submit &&
                            <>
                                <div className="col-span-1"></div>
                                <div className=" flex flex-wrap justify-end col-span-1">
                                    <button className="w-20 h-12 bg-emerald-500 rounded-md text-white text-md font-semibold" onClick={handleSubmit}>Save</button>
                                </div>
                            </>}
                        </div>
                    </form>
                </div>
                <div className={`${isMobile ? 'w-full' : 'w-4/5'} mt-4`}>
                    <p className={`mt-2 mb-2 ${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COMI</p>
                    <hr></hr>
                </div>
            </div>
        </>
    )
}
