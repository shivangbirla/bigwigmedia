import MultiSelect from "@/components/MultiSelect";
import { BASE_URL } from "@/utils/funcitons";
import { Select, SelectItem, select } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [template, setTemplate] = useState("");
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [labels, setLabels] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [faqs, setFaqs] = useState([]); // State for FAQs

  console.log("selectedImage", selectedImage);

  const getButtons = async () => {
    // const
    const res = await axios.get(`${BASE_URL}/templates/labels`);
    const bookmarked = [...res.data.data];
    setLabels(bookmarked);
  };
  const getImages = async () => {
    // const
    const res = await axios.get(`${BASE_URL}/templates/all/logo`);
    let bookmarked = [...res.data.data];
    bookmarked = bookmarked.map((item: any) =>
      item.replace(
        "http://localhost:4000",
        "https://social-media-ai-content-api.onrender.com"
      )
    );
    setImages(bookmarked);
  };

  useEffect(() => {
    getButtons();
    getImages();
  }, []);

  // Handle form submission
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", {
      name,
      description,
      template,
      selectedLabel,
      selectedImage,
      faqs,
    });

     try {
       const res = await axios.post(`${BASE_URL}/templates/add`, {
         name,
         description,
         templete:template,
         selectedLabel,
         selectedImage,
         faq:faqs,
       });
       console.log("POST request successful:", res.data);
     } catch (error) {
       console.error("Error making POST request:", error);
     }

    
    // Reset form fields
    // setName("");
    // setDescription("");
    // setTemplate("");
    // setSelectedLabel([]);
    // //@ts-ignore
    // setSelectedImage([]);
  };

  //@ts-ignore
  const handleFaqChange = (index, key, value) => {
    const updatedFaqs = [...faqs];
    //@ts-ignore

    updatedFaqs[index][key] = value;
    setFaqs(updatedFaqs);
  };

  const handleAddFaq = () => {
    //@ts-ignore
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index: any) => {
    const updatedFaqs = [...faqs];
    updatedFaqs.splice(index, 1);
    setFaqs(updatedFaqs);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="template"
          >
            Template
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="template"
            type="text"
            placeholder="Template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="label"
          >
            Select Label
          </label>
          <MultiSelect
            placeholder="Select Label"
            options={labels}
            chips={selectedLabel}
            //@ts-ignore
            setChips={setSelectedLabel}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Select Image
          </label>
          <Select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            value={selectedImage}
            selectionMode="single"
            onSelectionChange={(e:any) => {
              // console.log(e)
              setSelectedImage(e.currentKey);
            }}
          >
            {/* Dropdown options for images */}
            {images.map((image, index) => (
              <SelectItem key={image} value={image}>
                <img src={image} />
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            FAQs
          </label>
          {faqs.map((faq:any, index) => (
            <div key={index} className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Question"
                value={faq.question}
                onChange={(e) =>
                  handleFaqChange(index, "question", e.target.value)
                }
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) =>
                  handleFaqChange(index, "answer", e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => handleRemoveFaq(index)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFaq}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add FAQ
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;