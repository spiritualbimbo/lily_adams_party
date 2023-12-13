import React, { useState } from "react";

const Subscription = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

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
    <form className="flex justify-center items-center flex-col">
      <h2 className="text-[40px] font-bold ">Payment Steps</h2>
      <div className="">
        {/* STEP ONE */}
        <div className="step-one">
          <p>
            <span className="text-[#D33467]">step 1:</span> copy the bitcoin
            wallet and make payment from your preferred payment platform
          </p>

          <br />
          <button className="edit bg-[#D33467] text-white px-5 py-2 mr-3 rounded">
            copy
          </button>
          <input
            type="text"
            className="border-2 border-black rounded p-2 w-[400px]"
            value="16CQZUY99oAspS611ADctUHAxCQBGLgzWP"
          />
        </div>

        {/* STEP TWO */}
        <div className="step-two mt-20">
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

        <div className="step-three mt-20">
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
        <div className=" step-four mt-20">
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default Subscription;
