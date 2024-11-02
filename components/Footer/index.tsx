const Footer: React.FC<{ footer: any }> = ({ footer }) => {
  return (
    <footer className="my-8 flex flex-col items-center gap-4">
      <div className="mb-5 mt-10">
        <div id="svg-animate">
          <svg height="40" width="80" viewBox="-20 -20 240 240">
            <path
              className="left ring"
              d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200"
              fill="none"
            />
            <path
              className="right ring"
              d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200"
            />
          </svg>
        </div>
      </div>
      <p className="text-base text-accent">{footer.author}</p>
      <p className="text-base text-accent">
        ©Copyright {new Date().getFullYear()} - Mehdi Hattou
      </p>
    </footer>
  );
};

export default Footer;
