import React, { useState } from "react";

const Subscription = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const inputValue = '16CQZUY99oAspS611ADctUHAxCQBGLgzWP';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log("Uploading:", selectedFile);
    } else {
      console.log("Please select a file.");
    }
  };

  return (
    <form className="flex justify-center items-center flex-col " onSubmit={(e)=>{
      e.preventDefault()
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false);
      }, 4000); // Display copied text notification for 2 seconds
    }}>
      <h2 className="md:text-[40px] text-[30px] font-bold  ">Payment Steps</h2>
      <div className="">
        {/* STEP ONE */}
        <div className="step-one md:w-[400px] lg:w-[600px] w-64">
          <p>
            <span className="text-[#D33467]">step 1:</span> copy the bitcoin
            wallet and make payment from your preferred payment platform
          </p>

          <br />
          <button className="edit bg-[#D33467] text-white px-2 sm:px-3 md:px-5 py-2 mr-3 rounded" onClick={(e)=>{
            e.preventDefault();
             navigator.clipboard.writeText(inputValue)
             .then(()=>{
              console.log('copied successfully');
              setCopySuccess(true);
          setTimeout(() => {
            setCopySuccess(false);
          }, 2000); // Display copied text notification for 2 seconds
             })
          }}>
            copy

          </button>
          <input
            type="text"
            className="border-2 border-black rounded p-2 w-40 lg:text-lg text-sm md:w-[300px]"
            value="16CQZUY99oAspS611ADctUHAxCQBGLgzWP"
          />

          {copySuccess && <p className="text-green-400">Copied to clipboard!</p>}
        </div>

        {/* STEP TWO */}
        <div className="step-two mt-20  md:w-[400px] lg:w-[600px] w-64">
          <span className="text-[#D33467]">step 2:</span> upload the
          screenshot/receipt of your payment here
          <div className="relative">
            <button
              className="edit text-white px-2 mr-3 mt-4 min-h-[200px] min-w-[200px] border-2 border-black overflow-hidden rounded"
              onClick={handleUpload}
            >
              Upload
              {preview && (
                <img
                  src={preview}
                  alt="File Preview"
                  style={{ width: "100%", height: "200px" }}
                />
              )}
            </button>
            <br />
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute bottom-[-30px] left-0"
            />
          </div>
        </div>

        {/* STEP THREE */}

        <div className="step-three mt-20  md:w-[400px] lg:w-[600px] w-64">
          <p>
            <span className="text-[#D33467]">step 3:</span> Fill in the form with the appropriate details
          </p>
          <div className="my-5">
          <label htmlFor="name" className="mr-10" >Name:</label>
          <input type="text" id="name" className="border border-black focus:outline-[#d33467] mr-10 placeholder:text-center p-2" placeholder="input your name"/> <br />

          </div>
          <label htmlFor="email" className="mr-10">E-mail:</label>
          <input type="email" id="email" placeholder="input your email address" className="border border-black focus:outline-[#d33467] placeholder:text-center p-2"/> <br />
        
        </div>

        {/* STEP FOUR */}
        <div className=" step-four mt-20  md:w-[400px] lg:w-[600px] w-64 mb-10">
          <p>
            <span className="text-[#D33467]">step 4:</span> click on 'submit'
            and await confirmation message in your E-mail
          </p>
          <div className="mt-4">
            <input
              type="submit"
              value="submit"
              className="bg-[#d33467] text-white px-10  py-2 rounded hover:scale-105"
              
            />
            {submitted && <p className="text-red-700 sm:text-lg text-sm">please fill in the form with correct details</p>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Subscription;
