const Contact = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-2xl">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="Message"
          className="border border-black m-2 p-2"
        ></input>
        <button className="border border-black p-2 m-2 bg-gray-200 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
