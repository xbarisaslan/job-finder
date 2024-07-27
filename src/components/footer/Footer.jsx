const Footer = () => {
  return (
    <div class="flex grow border-b-2 border-black">
      <div class="flex items-start p-8 my-auto gap-8 w-[50%] border-r-2 border-black">
        <h6 class="text-[1.8rem] font-medium">ACME</h6>
        <div>
          <h2 class="text-[1.25rem] font-semibold">Ready to get started?</h2>
          <p class="font-medium w-[50ch] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
        </div>
      </div>
      <div class=" p-8 self-end">
        <p>© 2010 — 2024 Privacy Terms</p>
      </div>
    </div>
  );
};

export default Footer;
