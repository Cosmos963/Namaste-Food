const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg placeholder:text-black"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg placeholder:text-black"
          placeholder="Message"
        />
        <button
          type="submit"
          className="border border-black py-2 px-4 m-2 rounded-lg bg-gray-200 font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
