const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row grow border-b-2 border-black">
      <div className="flex flex-col lg:flex-row items-start p-8 my-auto gap-8 lg:w-[50%] border-b-2 lg:border-b-0 lg:border-r-2 border-black">
        <h6 className="text-[1.8rem] font-medium">ACME</h6>
        <div>
          <h2 className="text-[1.25rem] font-semibold">
            Ready to get started?
          </h2>
          <p className="font-medium lg:w-[50ch] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
      </div>
      <div className="lg:p-8 lg:pb-12 lg:self-end">
        <p>© 2010 — 2024 Privacy Terms</p>
      </div>
    </div>
  );
};

export default Footer;
